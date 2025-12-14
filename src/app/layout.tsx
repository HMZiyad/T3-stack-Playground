import "@/app/globals.css";

import { Nunito } from "next/font/google";
import { TRPCReactProvider } from "@/trpc/react";
import { NextAuthProvider } from "@/app/_components/auth-provider";
import { ThemeProvider } from "@/app/_components/theme-provider";

import Link from "next/link";
import { Book, LayoutDashboard, Rocket, Gamepad2, GraduationCap, Map } from "lucide-react";
import { ModeToggle } from "@/app/_components/mode-toggle";
import { UserNav } from "@/app/_components/user-nav";

const font = Nunito({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["400", "600", "700", "800"], // Heavier weights for playful feel
});

export const metadata = {
  title: "T3 Stack Playground",
  description: "Learn the T3 Stack from 0 to 100%",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`font-sans ${font.variable} bg-background text-foreground`}>
        <NextAuthProvider>
          <TRPCReactProvider>
            <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
              <div className="flex min-h-screen flex-col md:flex-row">
                {/* Sidebar */}
                <aside className="w-full border-b bg-card md:min-h-screen md:w-72 md:border-b-0 md:border-r shadow-lg relative z-10">
                  <div className="flex h-16 items-center border-b px-6 bg-primary/10">
                    <Link href="/" className="flex items-center gap-2 font-extrabold text-xl text-primary tracking-tight hover:scale-105 transition-transform">
                      <Rocket className="h-6 w-6" />
                      <span>T3 Adventure</span>
                    </Link>
                  </div>
                  <nav className="p-4 space-y-6">
                    <div className="space-y-3">
                      <h4 className="px-2 text-xs font-black uppercase tracking-wider text-muted-foreground">Start Here</h4>
                      <Link
                        href="/"
                        className="flex items-center gap-3 rounded-xl px-4 py-3 text-foreground font-bold transition-all hover:bg-secondary hover:text-secondary-foreground shadow-sm border border-transparent hover:border-secondary-foreground/10 hover:shadow-md"
                      >
                        <Map className="h-5 w-5" />
                        Adventure Map
                      </Link>
                    </div>

                    <div className="space-y-3">
                      <h4 className="px-2 text-xs font-black uppercase tracking-wider text-muted-foreground">The Curriculum</h4>

                      <Link
                        href="/learn/intro"
                        className="flex items-center gap-3 rounded-xl px-4 py-3 text-muted-foreground font-medium transition-all hover:bg-accent hover:text-accent-foreground hover:pl-6"
                      >
                        <GraduationCap className="h-5 w-5" />
                        Intro: The Big Picture
                      </Link>

                      <Link
                        href="/learn/level1"
                        className="flex items-center gap-3 rounded-xl px-4 py-3 text-muted-foreground font-medium transition-all hover:bg-blue-100 hover:text-blue-700 dark:hover:bg-blue-900/30 dark:hover:text-blue-300 hover:pl-6"
                      >
                        <div className="h-5 w-5 rounded bg-blue-500/20 text-blue-600 flex items-center justify-center text-xs font-bold">1</div>
                        TS & Zod (The Shield)
                      </Link>

                      <Link
                        href="/learn/level2"
                        className="flex items-center gap-3 rounded-xl px-4 py-3 text-muted-foreground font-medium transition-all hover:bg-green-100 hover:text-green-700 dark:hover:bg-green-900/30 dark:hover:text-green-300 hover:pl-6"
                      >
                        <div className="h-5 w-5 rounded bg-green-500/20 text-green-600 flex items-center justify-center text-xs font-bold">2</div>
                        Prisma (The Chest)
                      </Link>

                      <Link
                        href="/learn/level3"
                        className="flex items-center gap-3 rounded-xl px-4 py-3 text-muted-foreground font-medium transition-all hover:bg-purple-100 hover:text-purple-700 dark:hover:bg-purple-900/30 dark:hover:text-purple-300 hover:pl-6"
                      >
                        <div className="h-5 w-5 rounded bg-purple-500/20 text-purple-600 flex items-center justify-center text-xs font-bold">3</div>
                        tRPC (The Messenger)
                      </Link>

                      <Link
                        href="/learn/level4"
                        className="flex items-center gap-3 rounded-xl px-4 py-3 text-muted-foreground font-medium transition-all hover:bg-white hover:text-black dark:hover:bg-white dark:hover:text-black hover:pl-6"
                      >
                        <div className="h-5 w-5 rounded bg-gray-500/20 text-gray-600 flex items-center justify-center text-xs font-bold">4</div>
                        Next.js (The Canvas)
                      </Link>

                      <Link
                        href="/learn/level5"
                        className="flex items-center gap-3 rounded-xl px-4 py-3 text-muted-foreground font-medium transition-all hover:bg-yellow-100 hover:text-yellow-700 dark:hover:bg-yellow-900/30 dark:hover:text-yellow-300 hover:pl-6"
                      >
                        <div className="h-5 w-5 rounded bg-yellow-500/20 text-yellow-600 flex items-center justify-center text-xs font-bold">5</div>
                        Auth (The Key)
                      </Link>

                      <Link
                        href="/learn/level6"
                        className="flex items-center gap-3 rounded-xl px-4 py-3 text-muted-foreground font-medium transition-all hover:bg-cyan-100 hover:text-cyan-700 dark:hover:bg-cyan-900/30 dark:hover:text-cyan-300 hover:pl-6"
                      >
                        <div className="h-5 w-5 rounded bg-cyan-500/20 text-cyan-600 flex items-center justify-center text-xs font-bold">6</div>
                        Tailwind (The Paint)
                      </Link>
                    </div>

                    <div className="space-y-3">
                      <h4 className="px-2 text-xs font-black uppercase tracking-wider text-muted-foreground">Level 99: Boss Fight</h4>
                      <Link
                        href="/playground/guestbook"
                        className="flex items-center gap-3 rounded-xl px-4 py-3 bg-primary/10 text-primary font-bold transition-all hover:bg-primary hover:text-primary-foreground hover:shadow-lg hover:scale-105"
                      >
                        <Gamepad2 className="h-5 w-5" />
                        The Guestbook
                      </Link>
                    </div>
                  </nav>
                </aside>

                {/* Main Content Area */}
                <div className="flex flex-1 flex-col">
                  <header className="flex h-14 items-center gap-4 border-b bg-muted/40 px-4 lg:h-[60px] lg:px-6">
                    <div className="w-full flex-1">
                      {/* Search or Title could go here */}
                    </div>
                    <ModeToggle />
                    <UserNav />
                  </header>
                  <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
                    {children}
                  </main>
                </div>
              </div>
            </ThemeProvider>
          </TRPCReactProvider>
        </NextAuthProvider>
      </body>
    </html>
  );
}
