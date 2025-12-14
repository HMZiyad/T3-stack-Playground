"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { api } from "@/trpc/react";
import { Loader2 } from "lucide-react";

const formSchema = z.object({
    name: z.string().min(2, "Name must be at least 2 characters"),
    message: z.string().min(5, "Message must be at least 5 characters"),
});

type FormValues = z.infer<typeof formSchema>;

export function GuestbookForm() {
    const utils = api.useUtils();
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors, isSubmitting },
    } = useForm<FormValues>({
        resolver: zodResolver(formSchema),
    });

    const createGuestbookEntry = api.guestbook.create.useMutation({
        onMutate: async (newEntry) => {
            await utils.guestbook.getAll.cancel();

            const previousEntries = utils.guestbook.getAll.getData();

            utils.guestbook.getAll.setData(undefined, (old) => {
                const optimisticEntry = {
                    id: Math.random().toString(), // Temporary ID
                    name: newEntry.name,
                    message: newEntry.message,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                };
                return [optimisticEntry, ...(old ?? [])];
            });

            return { previousEntries };
        },
        onError: (_err, _newEntry, context) => {
            utils.guestbook.getAll.setData(undefined, context?.previousEntries);
        },
        onSettled: () => {
            utils.guestbook.getAll.invalidate();
        },
        onSuccess: () => {
            reset();
        },
    });

    const onSubmit = (data: FormValues) => {
        createGuestbookEntry.mutate(data);
    };

    return (
        <div className="rounded-lg border bg-card p-6 shadow-sm">
            <h2 className="text-xl font-semibold mb-4">Sign the Guestbook</h2>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-1">
                        Your Name
                    </label>
                    <input
                        id="name"
                        {...register("name")}
                        className="w-full rounded-md border bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                        placeholder="John Doe"
                        disabled={isSubmitting}
                    />
                    {errors.name && (
                        <p className="mt-1 text-sm text-destructive">{errors.name.message}</p>
                    )}
                </div>

                <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-1">
                        Message
                    </label>
                    <textarea
                        id="message"
                        {...register("message")}
                        className="w-full rounded-md border bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring min-h-[100px]"
                        placeholder="Hello, T3 Stack!"
                        disabled={isSubmitting}
                    />
                    {errors.message && (
                        <p className="mt-1 text-sm text-destructive">
                            {errors.message.message}
                        </p>
                    )}
                </div>

                <button
                    type="submit"
                    disabled={createGuestbookEntry.isPending}
                    className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90 disabled:cursor-not-allowed disabled:opacity-50"
                >
                    {createGuestbookEntry.isPending && (
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    )}
                    Submit Entry
                </button>
            </form>
        </div>
    );
}
