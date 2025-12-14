import { GuestbookForm } from "@/app/_components/guestbook-form";
import { GuestbookList } from "@/app/_components/guestbook-list";

export default function GuestbookPage() {
    return (
        <div className="max-w-4xl mx-auto space-y-8 py-4">

            {/* Header / Mission Briefing */}
            <div className="bg-gradient-to-r from-primary/10 to-secondary/10 p-8 rounded-3xl border-2 border-primary/20">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary text-primary-foreground text-sm font-bold uppercase tracking-wide mb-4">
                    Mission: The Guestbook
                </div>
                <h1 className="text-4xl font-extrabold tracking-tight mb-4">The Live Lab 🧪</h1>
                <p className="text-xl text-muted-foreground">
                    This is a real, working app! When you type a name and click submit, <span className="font-bold text-foreground">tRPC</span> validates it (checks for rules) and sends it to <span className="font-bold text-foreground">Prisma</span> (the database).
                </p>
            </div>

            <div className="grid md:grid-cols-5 gap-8">

                {/* Left Col: Form */}
                <div className="md:col-span-2 space-y-4">
                    <div className="bg-card rounded-2xl p-6 border-2 border-border shadow-sm">
                        <h2 className="text-lg font-black mb-4 flex items-center gap-2">
                            <span className="bg-secondary text-secondary-foreground rounded-lg w-8 h-8 flex items-center justify-center text-sm">1</span>
                            Add Entry
                        </h2>
                        <GuestbookForm />
                        <div className="mt-4 p-4 bg-muted/50 rounded-xl text-xs text-muted-foreground">
                            <p><strong>Did you know?</strong> If you try to submit a short name, Zod will stop you right here in the browser!</p>
                        </div>
                    </div>
                </div>

                {/* Right Col: List */}
                <div className="md:col-span-3 space-y-4">
                    <div className="bg-card rounded-2xl p-6 border-2 border-border shadow-sm min-h-[500px]">
                        <h2 className="text-lg font-black mb-4 flex items-center gap-2">
                            <span className="bg-accent text-accent-foreground rounded-lg w-8 h-8 flex items-center justify-center text-sm">2</span>
                            Live Database
                        </h2>
                        <GuestbookList />
                    </div>
                </div>

            </div>
        </div>
    );
}
