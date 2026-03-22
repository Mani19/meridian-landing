import {
  MessageSquare,
  ShoppingBag,
  Bot,
  ArrowRight,
  Smartphone,
  Brain,
  BarChart3,
  Search,
  ShoppingCart,
  Star,
  TrendingUp,
  Package,
  Users,
  Sparkles,
  Check,
  Target,
  Repeat,
  LineChart,
  UserCheck,
  Headphones,
  Mail,
  ChevronDown,
  Layers,
  Eye,
  Globe,
  Shield,
} from "lucide-react";

/* ═══════════════════════════════════════════════════════════════
   NAV
   ═══════════════════════════════════════════════════════════════ */

function Nav() {
  return (
    <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-lg">
      <div className="max-w-[1200px] mx-auto px-6 h-[60px] flex items-center justify-between">
        <div className="flex items-center gap-8">
          <a href="#" className="flex items-center gap-2">
            <div className="w-[26px] h-[26px] rounded-md bg-primary flex items-center justify-center">
              <span className="text-[11px] font-bold text-white leading-none">M</span>
            </div>
            <span className="text-[15px] font-semibold text-foreground tracking-tight">
              Meridian
            </span>
          </a>
          <div className="hidden lg:flex items-center gap-6">
            <a href="#platform" className="text-[13px] text-muted-foreground hover:text-foreground transition-colors">Platform</a>
            <a href="#solutions" className="text-[13px] text-muted-foreground hover:text-foreground transition-colors">Solutions</a>
            <button className="text-[13px] text-muted-foreground hover:text-foreground transition-colors inline-flex items-center gap-1">
              Resources <ChevronDown className="w-3 h-3" />
            </button>
            <a href="#" className="text-[13px] text-muted-foreground hover:text-foreground transition-colors">Case Studies</a>
            <a href="#" className="text-[13px] text-muted-foreground hover:text-foreground transition-colors">Pricing</a>
          </div>
        </div>
        <div className="hidden md:flex items-center gap-4">
          <a href="#" className="text-[13px] text-muted-foreground hover:text-foreground transition-colors">
            Sign In
          </a>
          <a href="#" className="text-[13px] font-medium text-card bg-foreground hover:bg-foreground/90 px-4 py-[7px] rounded-lg transition-colors">
            Book a Demo
          </a>
        </div>
      </div>
      <div className="border-b" />
    </nav>
  );
}

/* ═══════════════════════════════════════════════════════════════
   HERO
   ═══════════════════════════════════════════════════════════════ */

function Hero() {
  return (
    <section className="pt-16 md:pt-20 pb-4 px-6">
      <div className="max-w-[1200px] mx-auto">
        <div className="max-w-[720px] mx-auto text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border bg-card text-[12px] text-muted-foreground mb-6">
            Trusted by leading electronics retailers
          </div>
          <h1 className="text-[40px] md:text-[52px] font-bold text-foreground tracking-tight leading-[1.1] mb-5">
            The new operating system for e-commerce
          </h1>
          <p className="text-[17px] md:text-[19px] text-muted-foreground leading-[1.65] mb-8 max-w-[600px] mx-auto">
            Meridian gives you a single, intelligent layer between your brand and
            every customer. Own the entire interaction — from first touch to
            repeat purchase — across every channel, with a 360-degree view of
            every relationship.
          </p>
          <div className="flex items-center justify-center gap-3">
            <a
              href="#"
              className="inline-flex items-center gap-2 bg-foreground text-card text-[14px] font-medium px-6 py-2.5 rounded-lg hover:bg-foreground/90 transition-colors"
            >
              Request a Demo
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="#"
              className="inline-flex items-center gap-2 text-[14px] font-medium text-foreground px-6 py-2.5 rounded-lg border hover:bg-secondary/60 transition-colors"
            >
              Talk to Sales
            </a>
          </div>
        </div>

        {/* Platform visual — unified commerce view */}
        <div className="max-w-[1080px] mx-auto">
          <div className="bg-card rounded-xl border shadow-[0_4px_60px_-16px_rgba(0,0,0,0.1)] overflow-hidden">
            <div className="flex items-center gap-2 px-4 py-2.5 border-b bg-secondary/30">
              <div className="flex gap-1.5">
                <div className="w-[10px] h-[10px] rounded-full bg-muted-foreground/15" />
                <div className="w-[10px] h-[10px] rounded-full bg-muted-foreground/15" />
                <div className="w-[10px] h-[10px] rounded-full bg-muted-foreground/15" />
              </div>
              <div className="flex-1 flex justify-center">
                <div className="bg-background rounded px-12 py-1 text-[11px] text-muted-foreground">
                  meridian.app
                </div>
              </div>
            </div>

            <div className="flex">
              {/* Left sidebar — navigation */}
              <div className="w-[200px] border-r bg-secondary/20 p-3 hidden md:block">
                <div className="flex items-center gap-2 mb-5 px-2">
                  <div className="w-5 h-5 rounded bg-primary/10 flex items-center justify-center">
                    <span className="text-[8px] font-bold text-primary">M</span>
                  </div>
                  <span className="text-[12px] font-semibold text-foreground">Meridian</span>
                </div>
                {[
                  { label: "Overview", active: false, icon: <Layers className="w-3.5 h-3.5" /> },
                  { label: "Customers", active: true, icon: <Users className="w-3.5 h-3.5" /> },
                  { label: "Storefront", active: false, icon: <ShoppingBag className="w-3.5 h-3.5" /> },
                  { label: "Conversations", active: false, icon: <MessageSquare className="w-3.5 h-3.5" /> },
                  { label: "Channels", active: false, icon: <Globe className="w-3.5 h-3.5" /> },
                  { label: "Intelligence", active: false, icon: <BarChart3 className="w-3.5 h-3.5" /> },
                ].map((item) => (
                  <div key={item.label} className={`flex items-center gap-2 px-2 py-1.5 rounded-md mb-0.5 ${item.active ? "bg-card border shadow-sm" : ""}`}>
                    <span className={item.active ? "text-primary" : "text-muted-foreground"}>{item.icon}</span>
                    <span className={`text-[12px] ${item.active ? "font-medium text-foreground" : "text-muted-foreground"}`}>{item.label}</span>
                  </div>
                ))}
              </div>

              {/* Main content — customer 360 view */}
              <div className="flex-1 p-5">
                <div className="flex items-center justify-between mb-5">
                  <div>
                    <p className="text-[10px] text-muted-foreground uppercase tracking-wider font-medium">Customer 360</p>
                    <p className="text-[16px] font-semibold text-foreground">Priya Mehta</p>
                  </div>
                  <div className="flex gap-2">
                    <span className="text-[10px] font-medium bg-emerald-50 text-emerald-600 px-2 py-0.5 rounded-full">High Value</span>
                    <span className="text-[10px] font-medium bg-indigo-50 text-indigo-600 px-2 py-0.5 rounded-full">Loyal</span>
                  </div>
                </div>

                {/* KPI row */}
                <div className="grid grid-cols-4 gap-3 mb-5">
                  {[
                    { label: "Lifetime Value", value: "\u20B92.84L", trend: "+23%" },
                    { label: "Sessions", value: "12", trend: "3 this month" },
                    { label: "Purchases", value: "3", trend: "\u20B999K avg" },
                    { label: "Next Buy", value: "~7 days", trend: "Laptop" },
                  ].map((kpi) => (
                    <div key={kpi.label} className="rounded-lg border p-2.5">
                      <p className="text-[9px] text-muted-foreground uppercase tracking-wider font-medium mb-0.5">{kpi.label}</p>
                      <p className="text-[15px] font-bold text-foreground tracking-tight">{kpi.value}</p>
                      <p className="text-[10px] text-emerald-600">{kpi.trend}</p>
                    </div>
                  ))}
                </div>

                {/* Two column: journey + active channels */}
                <div className="grid grid-cols-2 gap-4">
                  {/* Recent journey */}
                  <div className="rounded-lg border p-3">
                    <p className="text-[11px] font-medium text-foreground mb-2.5">Customer Journey</p>
                    <div className="space-y-2">
                      {[
                        { day: "Today", action: "Asked about laptops under 80K on WhatsApp", channel: "WhatsApp" },
                        { day: "Day 18", action: "Compared Samsung vs Sony 55\" TVs on web", channel: "Web" },
                        { day: "Day 12", action: "Purchased Samsung Galaxy S24 Ultra", channel: "Web" },
                        { day: "Day 1", action: "First visit \u2014 browsed TVs and audio", channel: "Web" },
                      ].map((e, i) => (
                        <div key={i} className="flex gap-2.5">
                          <div className="flex flex-col items-center">
                            <div className={`w-1.5 h-1.5 rounded-full mt-1.5 ${i === 0 ? "bg-primary" : "bg-muted"}`} />
                            {i < 3 && <div className="w-px flex-1 bg-border mt-1" />}
                          </div>
                          <div className="pb-2">
                            <p className="text-[10px] text-muted-foreground">{e.day}</p>
                            <p className="text-[11px] text-foreground leading-snug">{e.action}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Active across channels + preferences */}
                  <div className="space-y-3">
                    <div className="rounded-lg border p-3">
                      <p className="text-[11px] font-medium text-foreground mb-2">Active Channels</p>
                      <div className="flex gap-2">
                        {[
                          { ch: "Web", icon: <Globe className="w-3 h-3" />, active: true },
                          { ch: "WhatsApp", icon: <Smartphone className="w-3 h-3" />, active: true },
                          { ch: "Voice", icon: <Headphones className="w-3 h-3" />, active: false },
                          { ch: "Email", icon: <Mail className="w-3 h-3" />, active: true },
                        ].map((c) => (
                          <div key={c.ch} className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded-md border text-[10px] ${c.active ? "text-foreground bg-card" : "text-muted-foreground bg-secondary/30"}`}>
                            {c.icon} {c.ch}
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="rounded-lg border p-3">
                      <p className="text-[11px] font-medium text-foreground mb-2">Learned Preferences</p>
                      <div className="flex flex-wrap gap-1.5">
                        {["Samsung brand affinity", "Compares before buying", "Budget: 50K\u20131.5L", "Home delivery", "Early adopter"].map((tag) => (
                          <span key={tag} className="text-[10px] text-indigo-600 bg-indigo-50 rounded-full px-2 py-0.5">{tag}</span>
                        ))}
                      </div>
                    </div>
                    <div className="rounded-lg border p-3">
                      <p className="text-[11px] font-medium text-foreground mb-1">Recommended Action</p>
                      <p className="text-[11px] text-muted-foreground leading-snug mb-2">
                        Send laptop comparison on WhatsApp — high purchase intent detected.
                      </p>
                      <button className="text-[10px] font-medium bg-foreground text-card px-3 py-1 rounded">
                        Send via WhatsApp
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════
   METRICS BAR
   ═══════════════════════════════════════════════════════════════ */

function MetricsBar() {
  return (
    <section className="py-16 px-6">
      <div className="max-w-[960px] mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {[
            { value: "360\u00B0", label: "Customer visibility", sub: "across every touchpoint" },
            { value: "3.2x", label: "Revenue per customer", sub: "vs fragmented tools" },
            { value: "67%", label: "Repeat purchase rate", sub: "within 60 days" },
            { value: "1", label: "Unified customer layer", sub: "web, WhatsApp, voice, email" },
          ].map((m) => (
            <div key={m.label} className="text-center">
              <p className="text-[36px] md:text-[42px] font-bold text-foreground tracking-tight leading-none mb-1.5">
                {m.value}
              </p>
              <p className="text-[14px] font-medium text-foreground mb-0.5">{m.label}</p>
              <p className="text-[12px] text-muted-foreground">{m.sub}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════
   PLATFORM — What Meridian is
   ═══════════════════════════════════════════════════════════════ */

function Platform() {
  return (
    <section id="platform" className="py-20 px-6 bg-card border-y">
      <div className="max-w-[1200px] mx-auto">
        <div className="max-w-[600px] mx-auto text-center mb-16">
          <h2 className="text-[32px] md:text-[40px] font-bold text-foreground tracking-tight leading-[1.1] mb-4">
            Own the entire customer relationship
          </h2>
          <p className="text-[16px] text-muted-foreground leading-[1.65]">
            Today your customer data lives in six different tools. Your storefront
            doesn&apos;t know what your support team knows. Your marketing can&apos;t see
            what your sales conversations reveal. Meridian replaces that
            fragmentation with a single intelligent layer.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          <ValueCard
            icon={<Eye className="w-5 h-5" />}
            color="bg-indigo-50 text-indigo-500"
            title="360-degree customer view"
            description="Every interaction across every channel feeds one living profile. Browsing behavior, purchase history, stated preferences, conversation context — unified and always current."
          />
          <ValueCard
            icon={<Layers className="w-5 h-5" />}
            color="bg-primary/8 text-primary"
            title="End-to-end commerce layer"
            description="Storefront, AI-assisted selling, post-purchase support, proactive outreach — one system that manages the complete customer lifecycle, not a patchwork of point solutions."
          />
          <ValueCard
            icon={<Brain className="w-5 h-5" />}
            color="bg-purple-50 text-purple-500"
            title="Intelligence that compounds"
            description="The platform learns from every interaction. Day 1 it captures intent. Day 20 it understands preferences. Day 60 it predicts what each customer needs before they ask."
          />
          <ValueCard
            icon={<Globe className="w-5 h-5" />}
            color="bg-emerald-50 text-emerald-600"
            title="Every channel, one identity"
            description="Web, WhatsApp, voice, email — customers move between channels freely. The context follows them. No re-identification, no repeated questions, no broken handoffs."
          />
          <ValueCard
            icon={<TrendingUp className="w-5 h-5" />}
            color="bg-amber-50 text-amber-600"
            title="Revenue you&apos;re leaving behind"
            description="Personalized selling, smart upsells, timely offers, cart recovery, re-engagement — the revenue that falls through the cracks when your tools don&apos;t talk to each other."
          />
          <ValueCard
            icon={<Shield className="w-5 h-5" />}
            color="bg-slate-100 text-slate-600"
            title="Your data, your competitive moat"
            description="Every customer interaction builds a proprietary dataset that only you own. The longer you run Meridian, the deeper your understanding, the harder it is for competitors to replicate."
          />
        </div>
      </div>
    </section>
  );
}

function ValueCard({
  icon,
  color,
  title,
  description,
}: {
  icon: React.ReactNode;
  color: string;
  title: string;
  description: string;
}) {
  return (
    <div className="bg-background rounded-xl border p-6 hover:shadow-[0_2px_20px_-6px_rgba(0,0,0,0.06)] transition-shadow">
      <div className={`w-10 h-10 rounded-lg flex items-center justify-center mb-4 ${color}`}>
        {icon}
      </div>
      <h3 className="text-[16px] font-semibold text-foreground mb-2 leading-snug">{title}</h3>
      <p className="text-[14px] text-muted-foreground leading-[1.65]">{description}</p>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   SOLUTIONS — The three layers
   ═══════════════════════════════════════════════════════════════ */

function Solutions() {
  return (
    <section id="solutions" className="py-24 px-6">
      <div className="max-w-[1200px] mx-auto">
        {/* 1. Customer Layer */}
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center mb-28">
          <div>
            <p className="text-[13px] font-semibold text-indigo-500 mb-3">Customer Intelligence Layer</p>
            <h3 className="text-[28px] md:text-[32px] font-bold text-foreground tracking-tight leading-[1.15] mb-4">
              Know your customer at day 1, day 20, and day 60
            </h3>
            <p className="text-[15px] text-muted-foreground leading-[1.7] mb-6">
              Most platforms give you a transaction log. Meridian gives you an
              evolving understanding of every customer — their preferences, their
              decision-making patterns, their lifecycle stage — that deepens with
              every single interaction.
            </p>
            <ul className="space-y-3">
              {[
                "Day 1: Capture initial intent, category interest, budget signals",
                "Day 20: Map preferences, brand affinities, comparison behavior",
                "Day 30\u201360: Predict purchase timing, personalize outreach, drive retention",
                "Unified identity across web, WhatsApp, voice, and email",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-[14px] text-foreground leading-snug">
                  <Check className="w-4 h-4 text-indigo-500 mt-0.5 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Customer profile visual */}
          <div className="bg-card rounded-xl border shadow-sm overflow-hidden">
            <div className="px-5 py-3.5 border-b flex items-center gap-2">
              <UserCheck className="w-4 h-4 text-indigo-500" />
              <span className="text-[13px] font-medium text-foreground">Customer Profile &middot; Priya Mehta</span>
            </div>
            <div className="p-5">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-11 h-11 rounded-full bg-indigo-50 flex items-center justify-center">
                  <span className="text-[15px] font-semibold text-indigo-500">PM</span>
                </div>
                <div>
                  <p className="text-[14px] font-semibold text-foreground">Priya Mehta</p>
                  <p className="text-[12px] text-muted-foreground">12 sessions &middot; 3 purchases &middot; High intent</p>
                </div>
              </div>

              <div className="space-y-3 mb-5">
                {[
                  ["Lifetime Value", "\u20B92,84,970"],
                  ["Preferred Category", "Consumer Electronics"],
                  ["Budget Range", "\u20B950K \u2013 \u20B91.5L"],
                  ["Lifecycle Stage", "Loyal \u2014 3rd purchase cycle"],
                  ["Next Predicted Need", "Laptop (high confidence)"],
                ].map(([k, v]) => (
                  <div key={k} className="flex items-center justify-between py-2 border-b">
                    <span className="text-[12px] text-muted-foreground">{k}</span>
                    <span className="text-[13px] font-medium text-foreground">{v}</span>
                  </div>
                ))}
              </div>

              <div>
                <p className="text-[11px] font-medium text-muted-foreground uppercase tracking-wider mb-2">Learned Preferences</p>
                <div className="flex flex-wrap gap-1.5">
                  {["Samsung affinity", "Compares before buying", "Price sensitive &gt;1L", "Home delivery", "Early adopter"].map((tag) => (
                    <span key={tag} className="text-[11px] text-indigo-600 bg-indigo-50 rounded-full px-2.5 py-0.5">{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 2. Commerce Layer */}
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center mb-28">
          {/* Commerce visual */}
          <div className="bg-card rounded-xl border shadow-sm overflow-hidden order-2 md:order-1">
            <div className="px-5 py-3.5 border-b flex items-center gap-2">
              <ShoppingBag className="w-4 h-4 text-emerald-500" />
              <span className="text-[13px] font-medium text-foreground">Commerce &middot; Channels</span>
            </div>
            <div className="p-5 space-y-4">
              {[
                {
                  channel: "Storefront",
                  icon: <ShoppingBag className="w-4 h-4" />,
                  color: "text-emerald-500 bg-emerald-50",
                  desc: "Product catalog, search, deals, reviews — with AI-assisted selling built in",
                  stat: "34% conversion rate",
                },
                {
                  channel: "WhatsApp Commerce",
                  icon: <Smartphone className="w-4 h-4" />,
                  color: "text-emerald-600 bg-emerald-50",
                  desc: "Proactive campaigns, cart recovery, personalized recommendations",
                  stat: "892 conversations / week",
                },
                {
                  channel: "Voice Agent",
                  icon: <Headphones className="w-4 h-4" />,
                  color: "text-amber-500 bg-amber-50",
                  desc: "Inbound support and outbound follow-ups, AI-powered",
                  stat: "Coming soon",
                },
                {
                  channel: "Outbound Campaigns",
                  icon: <Mail className="w-4 h-4" />,
                  color: "text-purple-500 bg-purple-50",
                  desc: "Back-in-stock alerts, offers, re-engagement — all personalized",
                  stat: "12% re-engagement rate",
                },
              ].map((ch) => (
                <div key={ch.channel} className="flex items-start gap-4 p-3.5 rounded-lg border">
                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center shrink-0 ${ch.color}`}>
                    {ch.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between mb-0.5">
                      <p className="text-[13px] font-medium text-foreground">{ch.channel}</p>
                      <span className="text-[10px] text-muted-foreground">{ch.stat}</span>
                    </div>
                    <p className="text-[12px] text-muted-foreground leading-snug">{ch.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="order-1 md:order-2">
            <p className="text-[13px] font-semibold text-emerald-600 mb-3">Commerce Layer</p>
            <h3 className="text-[28px] md:text-[32px] font-bold text-foreground tracking-tight leading-[1.15] mb-4">
              Sell, support, and re-engage from one system
            </h3>
            <p className="text-[15px] text-muted-foreground leading-[1.7] mb-6">
              Your storefront, your AI selling assistant, your WhatsApp outreach,
              your voice support — all running on the same customer intelligence,
              all feeding the same profile. No channel is a silo. Every
              interaction builds on the last.
            </p>
            <ul className="space-y-3">
              {[
                "AI-assisted selling that handles the entire purchase flow end-to-end",
                "Proactive outreach on WhatsApp: abandoned carts, offers, restocks",
                "Voice agent for inbound support and outbound follow-ups",
                "Every channel inherits the full customer context automatically",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-[14px] text-foreground leading-snug">
                  <Check className="w-4 h-4 text-emerald-500 mt-0.5 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* 3. Intelligence Layer */}
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          <div>
            <p className="text-[13px] font-semibold text-amber-600 mb-3">Intelligence Layer</p>
            <h3 className="text-[28px] md:text-[32px] font-bold text-foreground tracking-tight leading-[1.15] mb-4">
              See what your customers actually want, not what they click
            </h3>
            <p className="text-[15px] text-muted-foreground leading-[1.7] mb-6">
              Traditional analytics tell you what happened. Meridian tells you why.
              What products are customers asking about that you don&apos;t carry? What
              objections kill deals? Which segments are ready to buy and which need
              nurturing? This is intelligence that only comes from owning the
              interaction layer.
            </p>
            <ul className="space-y-3">
              {[
                "Demand signals: unmet demand from real customer interactions",
                "Competitive intelligence: which brands are being compared and why",
                "Conversion analysis: where deals are won and lost, by segment",
                "Lifecycle insights: how customer needs evolve over 30, 60, 90 days",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-[14px] text-foreground leading-snug">
                  <Check className="w-4 h-4 text-amber-500 mt-0.5 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Intelligence visual */}
          <div className="bg-card rounded-xl border shadow-sm overflow-hidden">
            <div className="px-5 py-3.5 border-b flex items-center gap-2">
              <BarChart3 className="w-4 h-4 text-amber-500" />
              <span className="text-[13px] font-medium text-foreground">Intelligence</span>
            </div>
            <div className="p-5">
              <div className="space-y-3 mb-5">
                <InsightRow
                  severity="high"
                  title="Unmet demand: gaming laptops under \u20B91L"
                  detail="147 customer inquiries this week &middot; 0 products in catalog"
                  action="Catalog gap"
                />
                <InsightRow
                  severity="medium"
                  title="Samsung vs Sony TV: Samsung winning 62% of comparisons"
                  detail="89 comparison sessions &middot; Price is the deciding factor"
                  action="Pricing signal"
                />
                <InsightRow
                  severity="info"
                  title="Delivery time blocking high-value conversions"
                  detail="34% of abandoned carts &gt;\u20B950K cite delivery timeline"
                  action="Ops insight"
                />
              </div>

              <div className="rounded-lg border p-4">
                <div className="flex items-center justify-between mb-3">
                  <p className="text-[12px] font-medium text-foreground">Customer Intent by Category</p>
                  <p className="text-[11px] text-muted-foreground">This week</p>
                </div>
                <div className="space-y-2.5">
                  {[
                    { name: "Laptops", pct: 38 },
                    { name: "Televisions", pct: 24 },
                    { name: "Smartphones", pct: 18 },
                    { name: "Audio", pct: 12 },
                    { name: "Appliances", pct: 8 },
                  ].map((cat) => (
                    <div key={cat.name} className="flex items-center gap-3">
                      <span className="text-[11px] text-muted-foreground w-20">{cat.name}</span>
                      <div className="flex-1 h-2 bg-secondary rounded-full overflow-hidden">
                        <div className="h-full bg-amber-400 rounded-full" style={{ width: `${cat.pct}%` }} />
                      </div>
                      <span className="text-[11px] font-medium text-foreground w-8 text-right">{cat.pct}%</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function InsightRow({
  severity,
  title,
  detail,
  action,
}: {
  severity: "high" | "medium" | "info";
  title: string;
  detail: string;
  action: string;
}) {
  const colors = {
    high: "bg-primary/10 text-primary",
    medium: "bg-amber-50 text-amber-600",
    info: "bg-blue-50 text-blue-500",
  };
  return (
    <div className="flex items-start gap-3 p-3 rounded-lg border">
      <div className={`w-2 h-2 rounded-full mt-1.5 shrink-0 ${severity === "high" ? "bg-primary" : severity === "medium" ? "bg-amber-400" : "bg-blue-400"}`} />
      <div className="flex-1 min-w-0">
        <p className="text-[12px] font-medium text-foreground leading-snug">{title}</p>
        <p className="text-[11px] text-muted-foreground mt-0.5">{detail}</p>
      </div>
      <span className={`text-[10px] font-medium px-2 py-0.5 rounded-full shrink-0 ${colors[severity]}`}>
        {action}
      </span>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   HOW IT WORKS
   ═══════════════════════════════════════════════════════════════ */

function HowItWorks() {
  return (
    <section className="py-24 px-6 bg-card border-y">
      <div className="max-w-[1200px] mx-auto">
        <div className="max-w-[600px] mx-auto text-center mb-16">
          <h2 className="text-[32px] md:text-[40px] font-bold text-foreground tracking-tight leading-[1.1] mb-4">
            How it works
          </h2>
          <p className="text-[16px] text-muted-foreground leading-[1.65]">
            Meridian sits between your brand and every customer. It manages the
            interaction, builds the relationship, and surfaces the intelligence —
            automatically.
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-8">
          {[
            {
              num: "01",
              title: "Connect your catalog",
              desc: "Products, inventory, pricing, offers. Meridian becomes the intelligent layer on top of your existing commerce infrastructure.",
              icon: <Layers className="w-5 h-5" />,
            },
            {
              num: "02",
              title: "Activate your channels",
              desc: "Storefront, WhatsApp, voice, email. Each channel is powered by the same customer intelligence and the same AI selling capability.",
              icon: <Globe className="w-5 h-5" />,
            },
            {
              num: "03",
              title: "Customer profiles build themselves",
              desc: "Every interaction — browse, conversation, purchase, support inquiry — enriches a unified profile. No manual tagging, no CRM busywork.",
              icon: <Users className="w-5 h-5" />,
            },
            {
              num: "04",
              title: "Act on what you learn",
              desc: "Demand gaps, competitive signals, lifecycle triggers, re-engagement opportunities — surfaced in real time for your team to act on.",
              icon: <LineChart className="w-5 h-5" />,
            },
          ].map((step) => (
            <div key={step.num}>
              <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center text-muted-foreground mb-4">
                {step.icon}
              </div>
              <p className="text-[11px] font-mono text-muted-foreground mb-1">{step.num}</p>
              <h3 className="text-[16px] font-semibold text-foreground mb-2 leading-snug">{step.title}</h3>
              <p className="text-[14px] text-muted-foreground leading-[1.65]">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════
   CTA
   ═══════════════════════════════════════════════════════════════ */

function BottomCTA() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-[640px] mx-auto text-center">
        <h2 className="text-[32px] md:text-[40px] font-bold text-foreground tracking-tight leading-[1.1] mb-4">
          The brands that own the customer relationship win
        </h2>
        <p className="text-[16px] text-muted-foreground leading-[1.65] mb-10">
          We work with a select number of partners each quarter.
          Talk to our team to explore how Meridian fits your business.
        </p>
        <div className="flex items-center justify-center gap-3">
          <a
            href="#"
            className="inline-flex items-center gap-2 bg-foreground text-card text-[14px] font-medium px-6 py-3 rounded-lg hover:bg-foreground/90 transition-colors"
          >
            Request a Demo
            <ArrowRight className="w-4 h-4" />
          </a>
          <a
            href="#"
            className="inline-flex items-center gap-2 text-[14px] font-medium text-foreground px-6 py-3 rounded-lg border hover:bg-secondary/60 transition-colors"
          >
            Talk to Sales
          </a>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════
   FOOTER
   ═══════════════════════════════════════════════════════════════ */

function Footer() {
  return (
    <footer className="py-12 px-6 border-t">
      <div className="max-w-[1200px] mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-[22px] h-[22px] rounded bg-primary flex items-center justify-center">
                <span className="text-[9px] font-bold text-white leading-none">M</span>
              </div>
              <span className="text-[14px] font-semibold text-foreground tracking-tight">
                Meridian
              </span>
            </div>
            <p className="text-[12px] text-muted-foreground leading-relaxed">
              The operating system for customer-first commerce.
            </p>
          </div>

          <FooterCol title="Platform" links={["Customer Intelligence", "Commerce Layer", "Channel Management", "Business Intelligence", "Developer Kit"]} />
          <FooterCol title="Solutions" links={["Electronics Retail", "Fashion & Lifestyle", "D2C Brands", "Marketplace", "Enterprise"]} />
          <FooterCol title="Resources" links={["Documentation", "Case Studies", "Blog", "Changelog", "API Reference"]} />
          <FooterCol title="Company" links={["About", "Careers", "Contact", "Privacy", "Terms"]} />
        </div>

        <div className="border-t pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[12px] text-muted-foreground">
            &copy; 2026 Meridian. All rights reserved.
          </p>
          <div className="flex items-center gap-5">
            <a href="#" className="text-[12px] text-muted-foreground hover:text-foreground transition-colors">Twitter</a>
            <a href="#" className="text-[12px] text-muted-foreground hover:text-foreground transition-colors">LinkedIn</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, links }: { title: string; links: string[] }) {
  return (
    <div>
      <p className="text-[13px] font-semibold text-foreground mb-3">{title}</p>
      <ul className="space-y-2">
        {links.map((link) => (
          <li key={link}>
            <a href="#" className="text-[13px] text-muted-foreground hover:text-foreground transition-colors">
              {link}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   PAGE
   ═══════════════════════════════════════════════════════════════ */

export default function LandingPage() {
  return (
    <main>
      <Nav />
      <Hero />
      <MetricsBar />
      <Platform />
      <Solutions />
      <HowItWorks />
      <BottomCTA />
      <Footer />
    </main>
  );
}
