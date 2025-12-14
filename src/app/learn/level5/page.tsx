"use client";

import { CodeChallenge } from "@/app/_components/code-challenge";

const initialCode = `// src/app/dashboard/page.tsx
import { getServerAuthSession } from "@/server/auth";
import { redirect } from "next/navigation";

export default async function DashboardPage() {
  // TODO: Check if user is logged in
  // 1. Get the session
  // 2. If no session, redirect to "/api/auth/signin"
  
  return (
    <div>Welcome to the Dashboard!</div>
  );
}
`;

export default function Level5Page() {
    const validate = (code: string) => {
        const hasGet = /await\s+getServerAuthSession/.test(code);
        const hasCheck = /if\s*\(\!session\)/.test(code) || /if\s*\(\!session?.user\)/.test(code);
        const hasRedirect = /redirect\(['"]\/api\/auth\/signin['"]\)/.test(code);

        if (hasGet && hasCheck && hasRedirect) {
            return { success: true, message: "Secure! You've protected this page so only logged-in users can see it." };
        }

        if (!hasGet) return { success: false, message: "Get the session first: `const session = await getServerAuthSession()`" };
        if (!hasCheck) return { success: false, message: "Check if the session exists." };
        if (!hasRedirect) return { success: false, message: "Redirect them if they are not logged in." };

        return { success: false, message: "Keep trying!" };
    };

    return (
        <div className="max-w-6xl mx-auto space-y-12 py-4">
            {/* Header */}
            <div className="space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-300 text-sm font-bold uppercase tracking-wide">
                    Level 5: The Key
                </div>
                <h1 className="text-4xl font-extrabold text-yellow-950 dark:text-yellow-50">NextAuth.js Security 🔐</h1>
                <p className="text-xl text-muted-foreground max-w-2xl">
                    The Key (Authentication) decides who gets to see what. In T3, we use <strong>NextAuth.js</strong> to verify users and manage "Sessions".
                </p>
            </div>

            {/* The Lesson */}
            <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-6">
                    <h2 className="text-2xl font-bold flex items-center gap-2">
                        <span className="bg-yellow-500 text-white w-8 h-8 rounded-lg flex items-center justify-center text-sm">1</span>
                        The Session
                    </h2>
                    <div className="prose dark:prose-invert">
                        <p>
                            Only checking if a user is "logged in" isn't enough. We need to check if they have a valid <strong>Session</strong>.
                        </p>
                        <p>
                            We can get this session on the Server using `getServerAuthSession()`. If it returns `null`, the visitor is just a stranger!
                        </p>
                    </div>
                    <div className="bg-muted p-4 rounded-xl border-l-4 border-yellow-500">
                        <h3 className="font-bold text-sm uppercase text-muted-foreground mb-2">Security Checklist</h3>
                        <ul className="space-y-2 text-sm font-mono">
                            <li>{`1. Retrieve Session`}</li>
                            <li>{`2. Check if Session exists`}</li>
                            <li>{`3. Redirect if missing`}</li>
                        </ul>
                    </div>
                </div>

                <div className="bg-card p-6 rounded-2xl border-2 border-border shadow-sm">
                    <h3 className="font-bold mb-4 text-sm uppercase text-muted-foreground">Example Code</h3>
                    <pre className="bg-[#1e1e1e] text-white p-4 rounded-xl overflow-x-auto text-sm font-mono">
                        {`const session = await getServerAuthSession();

if (!session) {
  // Stranger Danger!
  redirect("/login");
}

// Safe to show secret stuff
return <div>Secret: {session.user.email}</div>`}
                    </pre>
                    <p className="mt-4 text-sm text-muted-foreground">
                        This pattern is used on almost every protected page in a T3 app.
                    </p>
                </div>
            </div>

            <div className="pt-8 border-t">
                <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                    <span className="bg-yellow-500 text-white w-8 h-8 rounded-lg flex items-center justify-center text-sm">2</span>
                    Your Turn: Protect the Dashboard
                </h2>
                <CodeChallenge
                    title="Mission: Implementation Protection"
                    description="In this Server Component, get the session and redirect to `/api/auth/signin` if the user is not authenticated."
                    hint="Remember: await getServerAuthSession() returns the session or null."
                    initialCode={initialCode}
                    validationFn={validate}
                />
            </div>
        </div>
    );
}
