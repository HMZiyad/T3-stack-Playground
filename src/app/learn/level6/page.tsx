"use client";

import { CodeChallenge } from "@/app/_components/code-challenge";

const initialCode = `export function PrimaryButton() {
  // TODO: Style this button using Tailwind classes
  // 1. Background color: blue-500
  // 2. Text color: white
  // 3. Padding: py-2 px-4
  // 4. Rounded corners: rounded-lg
  
  return (
    <button className="">
      Click Me
    </button>
  );
}
`;

export default function Level6Page() {
    const validate = (code: string) => {
        const hasBg = /bg-blue-500/.test(code);
        const hasText = /text-white/.test(code);
        const hasPad = /py-2/.test(code) && /px-4/.test(code);
        const hasRounded = /rounded-lg/.test(code);

        if (hasBg && hasText && hasPad && hasRounded) {
            return { success: true, message: "Looking good! Tailwind lets you style components rapidly without leaving your HTML." };
        }

        if (!hasBg) return { success: false, message: "Set the background to blue (bg-blue-500)." };
        if (!hasText) return { success: false, message: "Make the text readable (text-white)." };
        if (!hasPad) return { success: false, message: "Give it some breathing room (py-2 px-4)." };
        if (!hasRounded) return { success: false, message: "Round those sharp corners (rounded-lg)." };

        return { success: false, message: "Keep trying!" };
    };

    return (
        <div className="max-w-6xl mx-auto space-y-12 py-4">
            {/* Header */}
            <div className="space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-100 text-cyan-700 dark:bg-cyan-900/30 dark:text-cyan-300 text-sm font-bold uppercase tracking-wide">
                    Level 6: The Paint
                </div>
                <h1 className="text-4xl font-extrabold text-cyan-950 dark:text-cyan-50">Styling with Tailwind CSS 🎨</h1>
                <p className="text-xl text-muted-foreground max-w-2xl">
                    The Paint (Tailwind) makes our castle look beautiful. Instead of writing CSS files, we use little helper classes directly on our elements.
                </p>
            </div>

            {/* The Lesson */}
            <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-6">
                    <h2 className="text-2xl font-bold flex items-center gap-2">
                        <span className="bg-cyan-500 text-white w-8 h-8 rounded-lg flex items-center justify-center text-sm">1</span>
                        Utility First
                    </h2>
                    <div className="prose dark:prose-invert">
                        <p>
                            Tailwind provides thousands of small classes like `flex`, `pt-4`, or `text-center`. You combine them like Lego bricks to build any design.
                        </p>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <div className="bg-muted p-4 rounded-xl border-l-4 border-cyan-500">
                            <h3 className="font-bold text-sm uppercase text-muted-foreground mb-2">Colors</h3>
                            <div className="space-y-2 text-sm font-mono">
                                <div className="flex items-center gap-2"><div className="w-4 h-4 bg-red-500 rounded"></div> bg-red-500</div>
                                <div className="flex items-center gap-2"><div className="w-4 h-4 bg-blue-500 rounded"></div> text-blue-500</div>
                            </div>
                        </div>
                        <div className="bg-muted p-4 rounded-xl border-l-4 border-cyan-500">
                            <h3 className="font-bold text-sm uppercase text-muted-foreground mb-2">Spacing</h3>
                            <div className="space-y-2 text-sm font-mono">
                                <div>p-4 <span className="text-muted-foreground opacity-50">(= 1rem padding)</span></div>
                                <div>m-2 <span className="text-muted-foreground opacity-50">(= 0.5rem margin)</span></div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="bg-card p-6 rounded-2xl border-2 border-border shadow-sm">
                    <h3 className="font-bold mb-4 text-sm uppercase text-muted-foreground">Example Code</h3>
                    <pre className="bg-[#1e1e1e] text-white p-4 rounded-xl overflow-x-auto text-sm font-mono">
                        {`<div className="bg-white p-6 rounded-lg shadow-xl">
  <h2 className="text-2xl font-bold text-gray-800">
    Hello World
  </h2>
  <button className="mt-4 bg-purple-600 text-white px-4 py-2 rounded">
     Click Me
  </button>
</div>`}
                    </pre>
                    <p className="mt-4 text-sm text-muted-foreground">
                        Look at how we styled the card, text, and button just by adding classes!
                    </p>
                </div>
            </div>

            <div className="pt-8 border-t">
                <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                    <span className="bg-cyan-500 text-white w-8 h-8 rounded-lg flex items-center justify-center text-sm">2</span>
                    Your Turn: Style the Button
                </h2>
                <CodeChallenge
                    title="Mission: Apply the Paint"
                    description="Make the button beautiful. Use `bg-blue-500` for background, `text-white` for readability, `py-2 px-4` for structure, and `rounded-lg` for smoothness."
                    hint="Just add the strings inside the empty className using spaces to separate them."
                    initialCode={initialCode}
                    validationFn={validate}
                />
            </div>
        </div>
    );
}
