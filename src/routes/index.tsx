import { createFileRoute } from "@tanstack/react-router";
import { Background } from "@/components/site/Background";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { Stats } from "@/components/site/Stats";
import { Problem } from "@/components/site/Problem";
import { Features } from "@/components/site/Features";
import { HowItWorks } from "@/components/site/HowItWorks";
import { TerminalDemo } from "@/components/site/TerminalDemo";
import { Dashboard } from "@/components/site/Dashboard";
import { Ecosystem } from "@/components/site/Ecosystem";
import { CTA } from "@/components/site/CTA";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Basebank — The secure on-chain bank on Base" },
      {
        name: "description",
        content:
          "Personal vault on Base. Manage bounties, projects, and payments directly from GitHub issues. No wallet. No seed phrase. No approve.",
      },
      { property: "og:title", content: "Basebank — The secure on-chain bank on Base" },
      {
        property: "og:description",
        content:
          "Non-custodial BaseVault, GitHub-native bounties, soul-bound tokens, and gasless command settlement on Base.",
      },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;500;600&display=swap",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="relative min-h-screen">
      <Background />
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <Problem />
        <Features />
        <HowItWorks />
        <TerminalDemo />
        <Dashboard />
        <Ecosystem />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
