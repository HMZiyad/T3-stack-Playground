"use client";

import { CodeChallenge } from "@/app/_components/code-challenge";

const initialCode = `import { z } from "zod";
import { createTRPCRouter, publicProcedure, protectedProcedure } from "@/server/api/trpc";

export const exampleRouter = createTRPCRouter({
  // TODO: Create a "public" procedure named 'hello'
  // 1. It should take an input (object with text: string)
  // 2. It should return a greeting string containing the input text
  
  // start typing here...
  
});
`;

export default function Level3Page() {
    const validate = (code: string) => {
        // Check for procedure definition
        const hasHello = /hello:\s*publicProcedure/.test(code);
        const hasInput = /\.input\(\s*z\.object/.test(code);
        const hasText = /text:\s*z\.string/.test(code);
        const hasQuery = /\.query\(/.test(code);

        if (hasHello && hasInput && hasText && hasQuery) {
            return { success: true, message: "Great job! You've defined a type-safe API endpoint. The client can now call this and get full autocomplete!" };
        }

        if (!hasHello) return { success: false, message: "Define a property named 'hello' on the router using publicProcedure." };
        if (!hasInput) return { success: false, message: "Don't forget validation! Use .input(z.object({ text: z.string() }))." };
        if (!hasQuery) return { success: false, message: "Is it a query or a mutation? For fetching data, use .query()." };

        return { success: false, message: "Keep trying!" };
    };

    return (
        <div className="max-w-6xl mx-auto space-y-12 py-4">
            {/* Header */}
            <div className="space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300 text-sm font-bold uppercase tracking-wide">
                    Level 3: The Messenger
                </div>
                <h1 className="text-4xl font-extrabold text-purple-950 dark:text-purple-50">Building APIs with tRPC 🧙‍♂️</h1>
                <p className="text-xl text-muted-foreground max-w-2xl">
                    tRPC is the Magic Messenger. Instead of writing separate API routes (like `/api/hello`), you write functions on the server that you can import on the client.
                </p>
            </div>

            {/* The Lesson */}
            <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-6">
                    <h2 className="text-2xl font-bold flex items-center gap-2">
                        <span className="bg-purple-500 text-white w-8 h-8 rounded-lg flex items-center justify-center text-sm">1</span>
                        The Spell Book (Router)
                    </h2>
                    <div className="prose dark:prose-invert">
                        <p>
                            A <strong>Router</strong> is just a collection of functions called <strong>Procedures</strong>.
                        </p>
                        <p>
                            There are two main types of spells (procedures):
                        </p>
                        <ul>
                            <li><strong>Query</strong>: For fetching data (like GET)</li>
                            <li><strong>Mutation</strong>: For changing data (like POST/PUT)</li>
                        </ul>
                    </div>
                    <div className="bg-muted p-4 rounded-xl border-l-4 border-purple-500">
                        <h3 className="font-bold text-sm uppercase text-muted-foreground mb-2">Anatomy of a Procedure</h3>
                        <ol className="space-y-2 text-sm font-mono list-decimal list-inside">
                            <li>publicProcedure <span className="text-muted-foreground"> // Who can call it?</span></li>
                            <li>.input(z.string()) <span className="text-muted-foreground"> // What args does it need?</span></li>
                            <li>.query(({'{'} input {'}'}) {`=>`} ...) <span className="text-muted-foreground"> // The logic!</span></li>
                        </ol>
                    </div>
                </div>

                <div className="bg-card p-6 rounded-2xl border-2 border-border shadow-sm">
                    <h3 className="font-bold mb-4 text-sm uppercase text-muted-foreground">Example Code</h3>
                    <pre className="bg-[#1e1e1e] text-white p-4 rounded-xl overflow-x-auto text-sm font-mono">
                        {`const appRouter = createTRPCRouter({
  getGreeting: publicProcedure
    .input(z.object({ name: z.string() }))
    .query(({ input }) => {
      return \`Hello \${input.name}!\`;
    }),
});`}
                    </pre>
                    <p className="mt-4 text-sm text-muted-foreground">
                        The client simply calls <code className="bg-muted px-1 rounded">api.getGreeting.useQuery({'{'} name: "Bob" {'}'})</code> and it works instantly!
                    </p>
                </div>
            </div>

            <div className="pt-8 border-t">
                <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                    <span className="bg-purple-500 text-white w-8 h-8 rounded-lg flex items-center justify-center text-sm">2</span>
                    Your Turn: The Hello Procedure
                </h2>
                <CodeChallenge
                    title="Mission: Create the Procedure"
                    description="Create a `hello` query that accepts `text` as input and returns it. Follow the 3 steps: Procedure Type -> Input Validation -> Logic."
                    hint="Use syntax: hello: publicProcedure.input(...).query(...)"
                    initialCode={initialCode}
                    validationFn={validate}
                />
            </div>
        </div>
    );
}
