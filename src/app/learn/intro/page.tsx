import Link from "next/link";
import { ArrowRight, Layers, Box, Cpu } from "lucide-react";

export default function IntroPage() {
    return (
        <div className="max-w-4xl mx-auto space-y-12 py-8">

            <div className="space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent text-accent-foreground text-sm font-bold uppercase tracking-wide">
                    Level 1
                </div>
                <h1 className="text-5xl font-extrabold text-foreground">What is the "T3 Stack"?</h1>
                <p className="text-2xl text-muted-foreground font-medium leading-relaxed">
                    Imagine your website is a <span className="text-primary font-bold">Lego Castle</span>. 🏰
                </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2">
                {/* Concept 1 */}
                <div className="bg-card p-8 rounded-3xl border-2 border-border shadow-sm hover:shadow-md transition-shadow">
                    <div className="bg-blue-100 dark:bg-blue-900/30 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 text-blue-600">
                        <Layers className="h-8 w-8" />
                    </div>
                    <h3 className="text-2xl font-bold mb-3">Next.js</h3>
                    <p className="text-muted-foreground text-lg leading-relaxed">
                        This is the <strong>Structure</strong> of the castle. It holds everything together. The rooms (pages), the hallways (links), and the roof (layout).
                    </p>
                </div>

                {/* Concept 2 */}
                <div className="bg-card p-8 rounded-3xl border-2 border-border shadow-sm hover:shadow-md transition-shadow">
                    <div className="bg-green-100 dark:bg-green-900/30 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 text-green-600">
                        <Box className="h-8 w-8" />
                    </div>
                    <h3 className="text-2xl font-bold mb-3">Prisma</h3>
                    <p className="text-muted-foreground text-lg leading-relaxed">
                        This is the <strong>Treasure Chest</strong>. It's where we keep all the important secrets (data) like user names, messages, and scores.
                    </p>
                </div>

                {/* Concept 3 */}
                <div className="bg-card p-8 rounded-3xl border-2 border-border shadow-sm hover:shadow-md transition-shadow md:col-span-2">
                    <div className="flex flex-col md:flex-row gap-6 items-start md:items-center">
                        <div className="bg-purple-100 dark:bg-purple-900/30 w-16 h-16 rounded-2xl flex items-center justify-center shrink-0 text-purple-600">
                            <Cpu className="h-8 w-8" />
                        </div>
                        <div>
                            <h3 className="text-2xl font-bold mb-3">tRPC</h3>
                            <p className="text-muted-foreground text-lg leading-relaxed">
                                This is the <strong>Magic Messenger</strong>. When you want to get something from the Treasure Chest (Prisma) to show in a Room (Next.js), tRPC makes sure it arrives safely and exactly how you asked for it!
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-primary/5 rounded-3xl p-8 border border-primary/20 text-center space-y-6">
                <h2 className="text-3xl font-extrabold text-primary">Ready to see it in action?</h2>
                <p className="text-xl text-muted-foreground">
                    Let's go to the Guestbook and use our Magic Messenger (tRPC) to put a message in the Treasure Chest (Prisma)!
                </p>
                <Link href="/playground/guestbook" className="inline-flex items-center gap-3 bg-primary text-primary-foreground px-8 py-4 rounded-xl font-bold text-lg hover:bg-primary/90 transition-all hover:scale-105 shadow-xl">
                    Go to the Mission Lab <ArrowRight className="h-6 w-6" />
                </Link>
            </div>

        </div>
    );
}
