import { ArrowRight, Star, Heart, Zap, Trophy } from "lucide-react";
import Link from "next/link";

export default function HomePage() {
  return (
    <div className="max-w-5xl mx-auto space-y-12 py-8">
      {/* Hero Section */}
      <div className="text-center space-y-6">
        <h1 className="text-6xl font-extrabold tracking-tight text-primary drop-shadow-sm">
          Welcome, Young Explorer! 🚀
        </h1>
        <p className="text-2xl text-muted-foreground font-medium max-w-2xl mx-auto">
          Are you ready to build magical websites? Your journey to mastering the <span className="text-secondary-foreground bg-secondary px-2 py-1 rounded-md rotate-2 inline-block shadow-sm">T3 Stack</span> starts here!
        </p>
      </div>

      {/* Progress Section */}
      <div className="bg-card rounded-3xl p-8 shadow-xl border-2 border-primary/20 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-2 bg-muted">
          <div className="h-full w-[10%] bg-secondary"></div>
        </div>
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-2xl font-bold flex items-center gap-2">
              <Trophy className="text-secondary h-8 w-8" />
              Your Quest Log
            </h2>
            <p className="text-muted-foreground">Level 1: Novice Coder</p>
          </div>
          <div className="text-right">
            <div className="text-4xl font-black text-primary">10%</div>
            <div className="text-sm font-bold text-muted-foreground uppercase">Complete</div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <QuestCard
            icon={<Star className="h-6 w-6 text-yellow-500" />}
            title="The Setup"
            status="completed"
          />
          <QuestCard
            icon={<Zap className="h-6 w-6 text-blue-500" />}
            title="Database Magic"
            status="locked"
          />
          <QuestCard
            icon={<Heart className="h-6 w-6 text-red-500" />}
            title="API Powers"
            status="locked"
          />
        </div>
      </div>

      {/* Action Buttons */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Link href="/learn/intro" className="group relative bg-white dark:bg-card rounded-3xl p-8 shadow-lg border-2 border-border hover:border-primary transition-all hover:-translate-y-2">
          <div className="absolute -top-6 -left-6 bg-accent text-accent-foreground p-4 rounded-full shadow-lg rotate-12 group-hover:rotate-0 transition-transform">
            <Star className="h-10 w-10" />
          </div>
          <h3 className="text-3xl font-black mb-4 text-foreground">Start Level 1</h3>
          <p className="text-lg text-muted-foreground mb-6">Learn what T3 is and meet your new best friends: Next.js, Prisma, and tRPC!</p>
          <div className="flex items-center font-bold text-primary group-hover:gap-4 transition-all gap-2">
            Let's Go! <ArrowRight className="h-5 w-5" />
          </div>
        </Link>

        <Link href="/playground/guestbook" className="group relative bg-gradient-to-br from-primary/10 to-primary/5 rounded-3xl p-8 shadow-lg border-2 border-primary/20 hover:border-primary transition-all hover:-translate-y-2">
          <div className="absolute -top-6 -right-6 bg-secondary text-secondary-foreground p-4 rounded-full shadow-lg -rotate-12 group-hover:rotate-0 transition-transform">
            <Zap className="h-10 w-10 fill-current" />
          </div>
          <h3 className="text-3xl font-black mb-4 text-primary">The Playground</h3>
          <p className="text-lg text-muted-foreground mb-6">Skip the tutorials and mess around with the code in the live Guestbook app.</p>
          <div className="flex items-center font-bold text-primary group-hover:gap-4 transition-all gap-2">
            Teleport there <ArrowRight className="h-5 w-5" />
          </div>
        </Link>
      </div>
    </div>
  );
}

function QuestCard({ icon, title, status }: { icon: React.ReactNode, title: string, status: 'completed' | 'active' | 'locked' }) {
  const isLocked = status === 'locked';
  const isCompleted = status === 'completed';

  return (
    <div className={`
      flex items-center gap-4 p-4 rounded-2xl border-2 
      ${isLocked ? 'bg-muted border-transparent opacity-60' : 'bg-card border-muted'}
      ${isCompleted ? 'border-accent bg-accent/10' : ''}
    `}>
      <div className={`
        p-3 rounded-xl 
        ${isLocked ? 'bg-muted-foreground/20 text-muted-foreground' : 'bg-background shadow-sm'}
      `}>
        {icon}
      </div>
      <div>
        <h4 className="font-bold text-lg">{title}</h4>
        <div className="text-xs font-bold uppercase tracking-wider opacity-70">{status}</div>
      </div>
    </div>
  )
}
