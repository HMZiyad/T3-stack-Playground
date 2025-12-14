import { z } from "zod";
import {
    createTRPCRouter,
    protectedProcedure,
    publicProcedure,
} from "@/server/api/trpc";

export const guestbookRouter = createTRPCRouter({
    getAll: publicProcedure.query(async ({ ctx }) => {
        return ctx.db.guestbookEntry.findMany({
            orderBy: { createdAt: "desc" },
        });
    }),

    create: publicProcedure
        .input(
            z.object({
                name: z.string().min(2, "Name must be at least 2 characters"),
                message: z.string().min(5, "Message must be at least 5 characters"),
            })
        )
        .mutation(async ({ ctx, input }) => {
            // Simulate a slow network request to make optimistic updates visible
            await new Promise((resolve) => setTimeout(resolve, 500));

            return ctx.db.guestbookEntry.create({
                data: {
                    name: input.name,
                    message: input.message,
                },
            });
        }),

    delete: protectedProcedure
        .input(z.object({ id: z.string() }))
        .mutation(async ({ ctx, input }) => {
            return ctx.db.guestbookEntry.delete({
                where: { id: input.id },
            });
        }),
});
