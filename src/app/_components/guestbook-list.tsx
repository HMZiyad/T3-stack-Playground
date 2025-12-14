"use client";

import { api } from "@/trpc/react";
import { useSession } from "next-auth/react";
import { Trash2 } from "lucide-react";

// Redefining proper component to switch between styles
export function GuestbookList() {
    const { data: session } = useSession();
    const utils = api.useUtils();

    const { data: entries, isLoading } = api.guestbook.getAll.useQuery();

    const deleteEntry = api.guestbook.delete.useMutation({
        onMutate: async ({ id }) => {
            await utils.guestbook.getAll.cancel();
            const previousEntries = utils.guestbook.getAll.getData();

            utils.guestbook.getAll.setData(undefined, (old) => {
                return old?.filter((entry) => entry.id !== id) ?? [];
            });

            return { previousEntries };
        },
        onError: (_err, _vars, context) => {
            utils.guestbook.getAll.setData(undefined, context?.previousEntries);
        },
        onSettled: () => {
            utils.guestbook.getAll.invalidate();
        }
    });

    if (isLoading) {
        return <div className="text-center p-4">Loading guestbook...</div>;
    }

    if (!entries || entries.length === 0) {
        return <div className="text-center p-8 text-muted-foreground border rounded-lg bg-card/50 border-dashed">No entries yet. Be the first!</div>;
    }

    return (
        <div className="grid gap-4">
            {entries.map((entry) => (
                <div key={entry.id} className="relative rounded-lg border bg-card p-6 shadow-sm transition-all hover:shadow-md">
                    <div className="flex items-start justify-between">
                        <div className="space-y-1">
                            <h3 className="font-semibold">{entry.name}</h3>
                            <p className="text-sm text-muted-foreground">
                                {new Date(entry.createdAt).toLocaleString(undefined, {
                                    dateStyle: "medium",
                                    timeStyle: "short",
                                })}
                            </p>
                        </div>
                        {session && (
                            <button
                                onClick={() => deleteEntry.mutate({ id: entry.id })}
                                disabled={deleteEntry.isPending}
                                className="rounded-md p-2 text-muted-foreground hover:bg-destructive hover:text-destructive-foreground disabled:opacity-50 transition-colors"
                                title="Delete entry"
                            >
                                <Trash2 className="h-4 w-4" />
                            </button>
                        )}
                    </div>
                    <p className="mt-4 text-sm leading-relaxed whitespace-pre-wrap">{entry.message}</p>
                </div>
            ))}
        </div>
    );
}


