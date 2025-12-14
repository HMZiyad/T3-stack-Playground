"use client";

import { CodeChallenge } from "@/app/_components/code-challenge";

const initialCode = `// prisma/schema.prisma

model Post {
  id        String   @id @default(cuid())
  
  // TODO: Add these fields:
  // 1. title: String
  // 2. published: Boolean, default false
  
  createdAt DateTime @default(now())
}
`;

export default function Level2Page() {
    const validate = (code: string) => {
        const hasTitle = /title\s+String/.test(code);
        const hasPublished = /published\s+Boolean\s+@default\(false\)/.test(code);

        if (hasTitle && hasPublished) {
            return { success: true, message: "Excellent! You've successfully modeled a Post. Prisma will now create this table for you automatically." };
        }

        if (!hasTitle) return { success: false, message: "Missing the 'title' field. It should be of type String." };
        if (!hasPublished) return { success: false, message: "Check the 'published' field. Is it Boolean? Did you set the default to false?" };

        return { success: false, message: "Keep trying!" };
    };

    return (
        <div className="max-w-6xl mx-auto space-y-12 py-4">
            {/* Header */}
            <div className="space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300 text-sm font-bold uppercase tracking-wide">
                    Level 2: The Chest
                </div>
                <h1 className="text-4xl font-extrabold text-green-950 dark:text-green-50">Data Modeling with Prisma 💎</h1>
                <p className="text-xl text-muted-foreground max-w-2xl">
                    The Treasure Chest (Database) needs to know exactly what shape the treasure is. We use <strong>Models</strong> to define this shape.
                </p>
            </div>

            {/* The Lesson */}
            <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-6">
                    <h2 className="text-2xl font-bold flex items-center gap-2">
                        <span className="bg-green-500 text-white w-8 h-8 rounded-lg flex items-center justify-center text-sm">1</span>
                        The Blueprint
                    </h2>
                    <div className="prose dark:prose-invert">
                        <p>
                            Prisma uses a special file called `schema.prisma`. It's incredibly easy to read. You defined a `model`, and inside it, you list the fields.
                        </p>
                        <p>
                            Format: <code className="bg-muted px-1 rounded">fieldName Type @attribute</code>
                        </p>
                    </div>
                    <div className="bg-muted p-4 rounded-xl border-l-4 border-green-500">
                        <h3 className="font-bold text-sm uppercase text-muted-foreground mb-2">Common Types</h3>
                        <ul className="space-y-2 text-sm font-mono">
                            <li>String <span className="text-muted-foreground"> // Text</span></li>
                            <li>Boolean <span className="text-muted-foreground"> // True/False</span></li>
                            <li>Int <span className="text-muted-foreground"> // Whole numbers</span></li>
                            <li>DateTime <span className="text-muted-foreground"> // Dates</span></li>
                            <li className="text-green-600">@default(value) <span className="text-muted-foreground"> // Initial value</span></li>
                            <li className="text-green-600">@id <span className="text-muted-foreground"> // Unique Key</span></li>
                        </ul>
                    </div>
                </div>

                <div className="bg-card p-6 rounded-2xl border-2 border-border shadow-sm">
                    <h3 className="font-bold mb-4 text-sm uppercase text-muted-foreground">Example Code</h3>
                    <pre className="bg-[#1e1e1e] text-white p-4 rounded-xl overflow-x-auto text-sm font-mono">
                        {`model User {
  id    String  @id @default(cuid())
  email String  @unique
  name  String? // ? means optional
  isAdmin Boolean @default(false)
}`}
                    </pre>
                    <p className="mt-4 text-sm text-muted-foreground">
                        This creates a User table where every user has a unique ID, a unique email, an optional name, and starts as a non-admin.
                    </p>
                </div>
            </div>

            <div className="pt-8 border-t">
                <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                    <span className="bg-green-500 text-white w-8 h-8 rounded-lg flex items-center justify-center text-sm">2</span>
                    Your Turn: Design the Post
                </h2>
                <CodeChallenge
                    title="Mission: Design the Post Model"
                    description="Complete the Prisma model for a blog Post. It needs a `title` (String) and a `published` (Boolean) status which defaults to false."
                    hint="Use: fieldName Type @attribute. e.g. `isActive Boolean @default(true)`"
                    initialCode={initialCode}
                    validationFn={validate}
                />
            </div>
        </div>
    );
}
