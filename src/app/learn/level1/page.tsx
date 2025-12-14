"use client";

import { CodeChallenge } from "@/app/_components/code-challenge";

const initialCode = `import { z } from "zod";

// TODO: Create a Zod schema for a "User"
// 1. name: string, min 2 characters
// 2. email: string, valid email format
// 3. age: number, min 18

export const UserSchema = z.object({
  // Your code here...
  
});
`;

export default function Level1Page() {
    const validate = (code: string) => {
        // Simple regex validation for demonstration
        // In a real app, strict parsing/AST analysis would be better
        const hasName = /name:\s*z\.string\(\)\.min\(2/.test(code);
        const hasEmail = /email:\s*z\.string\(\)\.email\(/.test(code);
        const hasAge = /age:\s*z\.number\(\)\.min\(18/.test(code);

        if (hasName && hasEmail && hasAge) {
            return { success: true, message: "Perfect! You've successfully defined a strong validation schema. This will protect your database from bad data!" };
        }

        if (!hasName) return { success: false, message: "Check the 'name' field. Is it a string? Does it have .min(2)?" };
        if (!hasEmail) return { success: false, message: "Check the 'email' field. Did you use .email()?" };
        if (!hasAge) return { success: false, message: "Check the 'age' field. Is it a number? Is the minimum 18?" };

        return { success: false, message: "Keep trying!" };
    };

    return (
        <div className="max-w-6xl mx-auto space-y-12 py-4">
            {/* Header */}
            <div className="space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300 text-sm font-bold uppercase tracking-wide">
                    Level 1: The Shield
                </div>
                <h1 className="text-4xl font-extrabold text-blue-950 dark:text-blue-50">Mastering Zod Validation 🛡️</h1>
                <p className="text-xl text-muted-foreground max-w-2xl">
                    Before anything enters our castle (Database), it must pass the Guard (Zod).
                    We use simple "schemas" to check if data is good or bad.
                </p>
            </div>

            {/* The Lesson */}
            <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-6">
                    <h2 className="text-2xl font-bold flex items-center gap-2">
                        <span className="bg-blue-500 text-white w-8 h-8 rounded-lg flex items-center justify-center text-sm">1</span>
                        Building the Rules
                    </h2>
                    <div className="prose dark:prose-invert">
                        <p>
                            In TypeScript, we usually just say "this is a string". But <strong>Zod</strong> lets us say "this is a string with <em>at least 5 characters</em>".
                        </p>
                        <p>
                            We call this a <strong>Schema</strong>. It's like a blueprint for your data.
                        </p>
                    </div>
                    <div className="bg-muted p-4 rounded-xl border-l-4 border-blue-500">
                        <h3 className="font-bold text-sm uppercase text-muted-foreground mb-2">Common Rules</h3>
                        <ul className="space-y-2 text-sm font-mono">
                            <li>z.string() <span className="text-muted-foreground"> // Must be text</span></li>
                            <li>z.string().min(5) <span className="text-muted-foreground"> // At least 5 chars</span></li>
                            <li>z.string().email() <span className="text-muted-foreground"> // Must be an@email.com</span></li>
                            <li>z.number().min(18) <span className="text-muted-foreground"> // Number {'>='} 18</span></li>
                        </ul>
                    </div>
                </div>

                <div className="bg-card p-6 rounded-2xl border-2 border-border shadow-sm">
                    <h3 className="font-bold mb-4 text-sm uppercase text-muted-foreground">Example Code</h3>
                    <pre className="bg-[#1e1e1e] text-white p-4 rounded-xl overflow-x-auto text-sm font-mono">
                        {`const DogSchema = z.object({
  name: z.string().min(1),
  age: z.number().min(0),
  breed: z.string().optional()
});`}
                    </pre>
                    <p className="mt-4 text-sm text-muted-foreground">
                        This schema defines a "Dog" that must have a name, a positive age, and maybe a breed.
                    </p>
                </div>
            </div>

            {/* The Challenge */}
            <div className="pt-8 border-t">
                <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                    <span className="bg-green-500 text-white w-8 h-8 rounded-lg flex items-center justify-center text-sm">2</span>
                    Your Turn: The User Guard
                </h2>
                <CodeChallenge
                    title="Mission: Define the Schema"
                    description="Create a `UserSchema` object. Ensure `name` has at least 2 characters, `email` is valid, and `age` is at least 18."
                    hint="Use z.string(), z.number(), .min(), and .email() properties inside z.object({...})"
                    initialCode={initialCode}
                    validationFn={validate}
                />
            </div>
        </div>
    );
}
