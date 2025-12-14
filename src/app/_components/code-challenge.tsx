"use client";

import React, { useState } from "react";
import Editor from "@monaco-editor/react";
import { Check, Play, RotateCcw, XCircle } from "lucide-react";

interface CodeChallengeProps {
    title: string;
    description: string;
    initialCode: string;
    validationFn: (code: string) => { success: boolean; message: string };
    hint?: string;
}

export function CodeChallenge({
    title,
    description,
    initialCode,
    validationFn,
    hint,
}: CodeChallengeProps) {
    const [code, setCode] = useState(initialCode);
    const [result, setResult] = useState<{ success: boolean; message: string } | null>(null);

    const handleRun = () => {
        const validation = validationFn(code);
        setResult(validation);
    };

    const handleReset = () => {
        setCode(initialCode);
        setResult(null);
    };

    return (
        <div className="grid lg:grid-cols-2 gap-6 h-[600px] w-full">
            {/* Left Panel: Instructions */}
            <div className="flex flex-col gap-6 p-6 bg-card border-2 border-border rounded-2xl shadow-sm overflow-y-auto">
                <div>
                    <h3 className="text-2xl font-black text-primary mb-2 flex items-center gap-2">
                        <span className="bg-primary/10 p-2 rounded-lg">🚀</span> {title}
                    </h3>
                    <div className="prose dark:prose-invert">
                        <p className="text-muted-foreground text-lg leading-relaxed">{description}</p>
                    </div>
                </div>

                {hint && (
                    <div className="bg-accent/20 p-4 rounded-xl border border-accent/40">
                        <h4 className="font-bold text-accent-foreground text-sm uppercase tracking-wider mb-1">💡 Hint</h4>
                        <p className="text-sm text-muted-foreground">{hint}</p>
                    </div>
                )}

                {result && (
                    <div className={`p-4 rounded-xl border-2 flex items-start gap-3 animation-fade-in ${result.success ? 'bg-green-50 border-green-200 dark:bg-green-900/20 dark:border-green-800' : 'bg-red-50 border-red-200 dark:bg-red-900/20 dark:border-red-800'}`}>
                        {result.success ? <Check className="text-green-600 h-6 w-6 shrink-0" /> : <XCircle className="text-red-600 h-6 w-6 shrink-0" />}
                        <div>
                            <h4 className={`font-bold ${result.success ? 'text-green-700 dark:text-green-400' : 'text-red-700 dark:text-red-400'}`}>
                                {result.success ? "Success!" : "Not quite..."}
                            </h4>
                            <p className={`text-sm ${result.success ? 'text-green-600 dark:text-green-300' : 'text-red-600 dark:text-red-300'}`}>
                                {result.message}
                            </p>
                        </div>
                    </div>
                )}
            </div>

            {/* Right Panel: Editor */}
            <div className="flex flex-col bg-[#1e1e1e] rounded-2xl overflow-hidden shadow-xl border-4 border-muted">
                <div className="bg-[#2d2d2d] px-4 py-2 flex items-center justify-between border-b border-[#3e3e3e]">
                    <span className="text-xs font-mono text-gray-400">main.ts</span>
                    <div className="flex gap-2">
                        <button onClick={handleReset} className="p-1 hover:bg-white/10 rounded text-gray-400" title="Reset Code">
                            <RotateCcw className="h-4 w-4" />
                        </button>
                    </div>
                </div>
                <div className="flex-grow relative">
                    <Editor
                        height="100%"
                        defaultLanguage="typescript"
                        theme="vs-dark"
                        value={code}
                        onChange={(val) => setCode(val || "")}
                        options={{
                            minimap: { enabled: false },
                            fontSize: 14,
                            scrollBeyondLastLine: false,
                            padding: { top: 16, bottom: 16 },
                            fontFamily: "'JetBrains Mono', 'Fira Code', monospace",
                        }}
                    />
                </div>
                <div className="p-4 bg-[#252526] border-t border-[#3e3e3e]">
                    <button
                        onClick={handleRun}
                        className="w-full flex items-center justify-center gap-2 bg-green-600 hover:bg-green-500 text-white font-bold py-3 rounded-xl transition-all hover:scale-[1.02]"
                    >
                        <Play className="h-5 w-5 fill-current" />
                        Run Code
                    </button>
                </div>
            </div>
        </div>
    );
}
