"use client";

import { signIn, signOut, useSession } from "next-auth/react";

export function UserNav() {
    const { data: session } = useSession();

    if (session) {
        return (
            <div className="flex items-center gap-4">
                <span className="text-sm text-muted-foreground">
                    {session.user?.name ?? "User"}
                </span>
                <button
                    onClick={() => signOut()}
                    className="rounded-md bg-destructive px-3 py-2 text-sm font-medium text-destructive-foreground hover:bg-destructive/90"
                >
                    Sign Out
                </button>
            </div>
        );
    }

    return (
        <button
            onClick={() => signIn()}
            className="rounded-md bg-primary px-3 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90"
        >
            Sign In
        </button>
    );
}
