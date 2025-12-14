"use client";

import { CodeChallenge } from "@/app/_components/code-challenge";

const initialCode = `// src/app/profile/page.tsx
import { api } from "@/trpc/server";

export default async function ProfilePage() {
  // TODO: Fetch the user data
  // 1. Call the 'getUser' procedure using the server api caller
  // 2. Render the user's name in an <h1> tag
  
  return (
    <main>
       {/* content here */}
    </main>
  );
}
`;

export default function Level4Page() {
    const validate = (code: string) => {
        const hasCall = /await\s+api\.(\w+)\./.test(code) || /await\s+api\.getUser\.query/.test(code);
        const hasH1 = /<h1/.test(code);
        const hasAsync = /async\s+function/.test(code);

        if (hasCall && hasH1 && hasAsync) {
            return { success: true, message: "Excellent! Server Components allow us to fetch data directly in the component before sending HTML to the user." };
        }

        if (!hasAsync) return { success: false, message: "Server Components that fetch data must be `async`." };
        if (!hasCall) return { success: false, message: "Did you await the api call? e.g. `const user = await api.getUser.query()`" };
        if (!hasH1) return { success: false, message: "Render the name in an <h1> tag." };

        return { success: false, message: "Keep trying!" };
    };

    return (
        <div className="max-w-6xl mx-auto space-y-12 py-4">
            {/* Header */}
            <div className="space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black text-white dark:bg-white dark:text-black text-sm font-bold uppercase tracking-wide">
                    Level 4: The Canvas
                </div>
                <h1 className="text-4xl font-extrabold text-gray-950 dark:text-gray-50">Next.js & Server Components 🖼️</h1>
                <p className="text-xl text-muted-foreground max-w-2xl">
                    Next.js gives us a special kind of React component: <strong>Server Components</strong>. They run <em>only</em> on the server, meaning they can have secrets and talk to databases directly!
                </p>
            </div>

            {/* The Lesson */}
            <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-6">
                    <h2 className="text-2xl font-bold flex items-center gap-2">
                        <span className="bg-gray-800 text-white dark:bg-gray-200 dark:text-gray-900 w-8 h-8 rounded-lg flex items-center justify-center text-sm">1</span>
                        Async Magic
                    </h2>
                    <div className="prose dark:prose-invert">
                        <p>
                            Normal React components can't be `async`. But Server Components CAN. This means you can just `await` your data right inside the component body.
                        </p>
                        <p>
                            No more `useEffect`. No more `isLoading`. The server waits for the data, <em>then</em> sends the finished HTML page to the browser.
                        </p>
                    </div>
                    <div className="bg-muted p-4 rounded-xl border-l-4 border-gray-600">
                        <h3 className="font-bold text-sm uppercase text-muted-foreground mb-2">The Golden Rule</h3>
                        <p className="text-sm font-medium">
                            If you need to fetch data, try to do it in a Server Component first. It's faster and safer.
                        </p>
                    </div>
                </div>

                <div className="bg-card p-6 rounded-2xl border-2 border-border shadow-sm">
                    <h3 className="font-bold mb-4 text-sm uppercase text-muted-foreground">Example Code</h3>
                    <pre className="bg-[#1e1e1e] text-white p-4 rounded-xl overflow-x-auto text-sm font-mono">
                        {`// Only runs on the Server!
export default async function Page() {
  // Talk to DB directly
  const data = await db.post.findMany(); 
  
  return (
    <ul>
      {data.map(p => <li>{p.title}</li>)}
    </ul>
  );
}`}
                    </pre>
                    <p className="mt-4 text-sm text-muted-foreground">
                        Clean, simple, and fast. The browser never sees the database connection code.
                    </p>
                </div>
            </div>

            <div className="pt-8 border-t">
                <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                    <span className="bg-gray-800 text-white dark:bg-gray-200 dark:text-gray-900 w-8 h-8 rounded-lg flex items-center justify-center text-sm">2</span>
                    Your Turn: The Profile Page
                </h2>
                <CodeChallenge
                    title="Mission: Fetch User Data"
                    description="Create a Server Component that awaits `api.getUser.query()` and renders the user's name in an `<h1>` tag."
                    hint="Don't forget the 'async' keyword on the function! const user = await ..."
                    initialCode={initialCode}
                    validationFn={validate}
                />
            </div>
        </div>
    );
}
