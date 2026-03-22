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
  Check,
  Target,
  LineChart,
  UserCheck,
  Headphones,
  Mail,
  ChevronDown,
  Layers,
  Eye,
  Globe,
  Shield,
  Repeat,
} from "lucide-react";

/* ═══════════════════════════════════════════════════════════════
   NAV — transparent over dark hero
   ═══════════════════════════════════════════════════════════════ */

function Nav() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50">
      <div className="max-w-[1280px] mx-auto px-8 h-[72px] flex items-center justify-between">
        <div className="flex items-center gap-10">
          <a href="#" className="flex items-center gap-2.5">
            <div className="w-[28px] h-[28px] rounded-lg bg-white/10 backdrop-blur border border-white/10 flex items-center justify-center">
              <span className="text-[12px] font-bold text-white leading-none">M</span>
            </div>
            <span className="text-[16px] font-semibold text-white tracking-tight">
              Meridian
            </span>
          </a>
          <div className="hidden lg:flex items-center gap-7">
            <a href="#platform" className="text-[13px] text-white/50 hover:text-white transition-colors">Platform</a>
            <a href="#solutions" className="text-[13px] text-white/50 hover:text-white transition-colors">Solutions</a>
            <button className="text-[13px] text-white/50 hover:text-white transition-colors inline-flex items-center gap-1">
              Resources <ChevronDown className="w-3 h-3" />
            </button>
            <a href="#" className="text-[13px] text-white/50 hover:text-white transition-colors">Customers</a>
            <a href="#" className="text-[13px] text-white/50 hover:text-white transition-colors">Pricing</a>
          </div>
        </div>
        <div className="hidden md:flex items-center gap-5">
          <a href="#" className="text-[13px] text-white/50 hover:text-white transition-colors">Contact Sales</a>
          <a href="#" className="text-[13px] text-white/50 hover:text-white transition-colors">Sign In</a>
          <a href="#" className="text-[13px] font-medium text-noir bg-white hover:bg-white/90 px-4 py-[7px] rounded-lg transition-colors">
            Book a Demo
          </a>
        </div>
      </div>
    </nav>
  );
}

/* ═══════════════════════════════════════════════════════════════
   HERO — Cinematic, dark, immersive
   ═══════════════════════════════════════════════════════════════ */

function Hero() {
  return (
    <section className="hero-bg relative min-h-screen flex flex-col">
      <div className="flex-1 flex flex-col items-center justify-center px-8 pt-24 pb-8">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-6 mb-10">
            {["#1 AI Commerce Platform", "#1 in Customer Intelligence", "#1 for Omnichannel"].map((badge) => (
              <span key={badge} className="text-[11px] font-medium text-white/40 uppercase tracking-[0.15em]">
                {badge}
              </span>
            ))}
          </div>

          <h1 className="text-[56px] md:text-[80px] lg:text-[88px] font-bold text-white tracking-tight leading-[0.95] mb-8 max-w-[900px] mx-auto">
            The operating
            <br />
            system for
            <br />
            modern commerce
          </h1>

          <p className="text-[18px] md:text-[20px] text-white/45 leading-[1.6] max-w-[520px] mx-auto mb-10">
            Own every customer interaction. Build a 360-degree
            view of every relationship. Sell across every channel
            from a single intelligent platform.
          </p>

          <div className="flex items-center justify-center gap-4">
            <a href="#" className="inline-flex items-center gap-2.5 bg-white text-noir text-[14px] font-semibold px-7 py-3 rounded-lg hover:bg-white/90 transition-colors">
              Book a Demo <ArrowRight className="w-4 h-4" />
            </a>
            <a href="#" className="inline-flex items-center gap-2.5 text-[14px] font-medium text-white/70 px-7 py-3 rounded-lg border border-white/15 hover:border-white/30 hover:text-white transition-colors">
              Contact Sales
            </a>
          </div>
        </div>
      </div>

      {/* Product screenshot — layered composition */}
      <div className="relative max-w-[1280px] mx-auto w-full px-8 pb-0 -mb-32">
        <div className="relative">
          <div className="screenshot-shadow rounded-t-2xl overflow-hidden bg-[hsl(220,12%,10%)] border border-white/[0.08] border-b-0">
            <div className="flex items-center gap-2 px-5 py-3 border-b border-white/[0.06]">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-white/[0.08]" />
                <div className="w-3 h-3 rounded-full bg-white/[0.08]" />
                <div className="w-3 h-3 rounded-full bg-white/[0.08]" />
              </div>
              <div className="flex-1 flex justify-center">
                <div className="bg-white/[0.04] rounded-md px-16 py-1.5 text-[11px] text-white/30 font-mono">
                  app.meridian.com
                </div>
              </div>
            </div>

            <div className="flex">
              {/* Sidebar */}
              <div className="w-[220px] border-r border-white/[0.06] p-4 hidden lg:block">
                <div className="flex items-center gap-2.5 mb-6 px-2">
                  <div className="w-6 h-6 rounded-md bg-primary/20 flex items-center justify-center">
                    <span className="text-[9px] font-bold text-primary">M</span>
                  </div>
                  <span className="text-[13px] font-semibold text-white">Meridian</span>
                </div>
                {[
                  { label: "Overview", icon: <Layers className="w-4 h-4" />, active: false },
                  { label: "Customers", icon: <Users className="w-4 h-4" />, active: true },
                  { label: "Storefront", icon: <ShoppingBag className="w-4 h-4" />, active: false },
                  { label: "Conversations", icon: <MessageSquare className="w-4 h-4" />, active: false },
                  { label: "Channels", icon: <Globe className="w-4 h-4" />, active: false },
                  { label: "Intelligence", icon: <BarChart3 className="w-4 h-4" />, active: false },
                  { label: "Campaigns", icon: <Mail className="w-4 h-4" />, active: false },
                ].map((item) => (
                  <div key={item.label} className={`flex items-center gap-2.5 px-3 py-2 rounded-lg mb-0.5 ${item.active ? "bg-white/[0.08] text-white" : "text-white/35 hover:text-white/60"} transition-colors`}>
                    {item.icon}
                    <span className="text-[13px]">{item.label}</span>
                  </div>
                ))}
              </div>

              {/* Main — Customer 360 */}
              <div className="flex-1 p-6">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <p className="text-[11px] text-white/30 uppercase tracking-widest font-medium mb-1">Customer 360</p>
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-full bg-indigo-500/20 flex items-center justify-center">
                        <span className="text-[13px] font-semibold text-indigo-400">PM</span>
                      </div>
                      <div>
                        <p className="text-[16px] font-semibold text-white">Priya Mehta</p>
                        <p className="text-[11px] text-white/35">Mumbai &middot; 12 sessions &middot; 3 purchases</p>
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <span className="text-[10px] font-semibold bg-emerald-500/15 text-emerald-400 px-2.5 py-1 rounded-full border border-emerald-500/20">High Value</span>
                    <span className="text-[10px] font-semibold bg-indigo-500/15 text-indigo-400 px-2.5 py-1 rounded-full border border-indigo-500/20">Loyal</span>
                  </div>
                </div>

                <div className="grid grid-cols-4 gap-3 mb-6">
                  {[
                    { label: "Lifetime Value", value: "\u20B92.84L", trend: "+23% YoY", color: "text-emerald-400" },
                    { label: "Avg Order Value", value: "\u20B994,990", trend: "+8%", color: "text-emerald-400" },
                    { label: "Sessions", value: "12", trend: "3 this month", color: "text-white/40" },
                    { label: "Predicted Next", value: "~7 days", trend: "Laptop", color: "text-amber-400" },
                  ].map((kpi) => (
                    <div key={kpi.label} className="rounded-xl bg-white/[0.04] border border-white/[0.06] p-4">
                      <p className="text-[10px] text-white/30 uppercase tracking-wider font-medium mb-1">{kpi.label}</p>
                      <p className="text-[20px] font-bold text-white tracking-tight">{kpi.value}</p>
                      <p className={`text-[11px] ${kpi.color} font-medium`}>{kpi.trend}</p>
                    </div>
                  ))}
                </div>

                <div className="grid grid-cols-5 gap-4">
                  <div className="col-span-3 rounded-xl bg-white/[0.04] border border-white/[0.06] p-5">
                    <p className="text-[12px] font-semibold text-white mb-4">Customer Journey</p>
                    <div className="space-y-3">
                      {[
                        { day: "Today", action: "Asked about laptops for video editing under \u20B980K", channel: "WhatsApp", chColor: "text-emerald-400 bg-emerald-500/10" },
                        { day: "3 days ago", action: "Browsed Samsung Galaxy Book4 Pro \u2014 added to wishlist", channel: "Web", chColor: "text-indigo-400 bg-indigo-500/10" },
                        { day: "Day 18", action: "Compared Samsung 55\" vs Sony 55\" TVs \u2014 chose Samsung", channel: "Web", chColor: "text-indigo-400 bg-indigo-500/10" },
                        { day: "Day 12", action: "Purchased Samsung Galaxy S24 Ultra \u2014 \u20B91,29,990", channel: "Web", chColor: "text-indigo-400 bg-indigo-500/10" },
                        { day: "Day 1", action: "First visit \u2014 browsed TVs, audio, and smartphones", channel: "Web", chColor: "text-indigo-400 bg-indigo-500/10" },
                      ].map((e, i) => (
                        <div key={i} className="flex gap-3 items-start">
                          <div className="flex flex-col items-center pt-1">
                            <div className={`w-2 h-2 rounded-full ${i === 0 ? "bg-primary" : "bg-white/15"}`} />
                            {i < 4 && <div className="w-px h-full min-h-[20px] bg-white/[0.06] mt-1" />}
                          </div>
                          <div className="flex-1 pb-1">
                            <div className="flex items-center gap-2 mb-0.5">
                              <span className="text-[10px] text-white/30 font-medium">{e.day}</span>
                              <span className={`text-[9px] font-medium px-1.5 py-0.5 rounded ${e.chColor}`}>{e.channel}</span>
                            </div>
                            <p className="text-[12px] text-white/70 leading-snug">{e.action}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="col-span-2 space-y-3">
                    <div className="rounded-xl bg-white/[0.04] border border-white/[0.06] p-4">
                      <p className="text-[12px] font-semibold text-white mb-3">Active Channels</p>
                      <div className="space-y-2">
                        {[
                          { ch: "Web", icon: <Globe className="w-3.5 h-3.5" />, active: true },
                          { ch: "WhatsApp", icon: <Smartphone className="w-3.5 h-3.5" />, active: true },
                          { ch: "Email", icon: <Mail className="w-3.5 h-3.5" />, active: true },
                          { ch: "Voice", icon: <Headphones className="w-3.5 h-3.5" />, active: false },
                        ].map((c) => (
                          <div key={c.ch} className={`flex items-center justify-between px-3 py-2 rounded-lg ${c.active ? "bg-white/[0.04] border border-white/[0.06]" : "opacity-40"}`}>
                            <div className="flex items-center gap-2 text-[12px] text-white/60">{c.icon} {c.ch}</div>
                            <span className={`w-1.5 h-1.5 rounded-full ${c.active ? "bg-emerald-400" : "bg-white/20"}`} />
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="rounded-xl bg-white/[0.04] border border-white/[0.06] p-4">
                      <p className="text-[12px] font-semibold text-white mb-2">Learned Preferences</p>
                      <div className="flex flex-wrap gap-1.5">
                        {["Samsung affinity", "Compares first", "Budget 50K\u20131.5L", "Home delivery", "Early adopter"].map((tag) => (
                          <span key={tag} className="text-[10px] text-indigo-300 bg-indigo-500/10 border border-indigo-500/15 rounded-full px-2 py-0.5">{tag}</span>
                        ))}
                      </div>
                    </div>
                    <div className="rounded-xl bg-primary/10 border border-primary/20 p-4">
                      <p className="text-[12px] font-semibold text-white mb-1">Recommended Action</p>
                      <p className="text-[11px] text-white/50 leading-snug mb-3">High purchase intent for laptops. Send curated comparison via WhatsApp.</p>
                      <button className="text-[11px] font-semibold bg-white text-noir px-4 py-1.5 rounded-md">Send via WhatsApp</button>
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
   METRICS
   ═══════════════════════════════════════════════════════════════ */

function MetricsBar() {
  return (
    <section className="bg-background pt-48 pb-20 px-8">
      <div className="max-w-[1000px] mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-16">
          {[
            { value: "360\u00B0", label: "Customer visibility", sub: "across every touchpoint" },
            { value: "3.2\u00D7", label: "Revenue per customer", sub: "vs fragmented tools" },
            { value: "67%", label: "Repeat purchase rate", sub: "within 60 days" },
            { value: "1", label: "Unified customer layer", sub: "web, WhatsApp, voice, email" },
          ].map((m) => (
            <div key={m.label} className="text-center">
              <p className="text-[40px] md:text-[48px] font-bold text-foreground tracking-tight leading-none mb-2">{m.value}</p>
              <p className="text-[14px] font-semibold text-foreground mb-0.5">{m.label}</p>
              <p className="text-[12px] text-muted-foreground">{m.sub}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════
   PLATFORM
   ═══════════════════════════════════════════════════════════════ */

function Platform() {
  return (
    <section id="platform" className="bg-background py-24 px-8">
      <div className="max-w-[1200px] mx-auto">
        <div className="max-w-[600px] mx-auto text-center mb-16">
          <h2 className="text-[36px] md:text-[44px] font-bold text-foreground tracking-tight leading-[1.08] mb-5">
            Own the entire customer relationship
          </h2>
          <p className="text-[16px] text-muted-foreground leading-[1.65]">
            Today your customer data lives in six different tools. Your storefront
            doesn&apos;t know what your support team knows. Meridian replaces that
            fragmentation with a single intelligent layer.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-5">
          <VC icon={<Eye className="w-5 h-5" />} color="bg-indigo-50 text-indigo-500" title="360-degree customer view" description="Every interaction across every channel feeds one living profile. Browsing, purchases, preferences, conversation context — unified and always current." />
          <VC icon={<Layers className="w-5 h-5" />} color="bg-primary/8 text-primary" title="End-to-end commerce layer" description="Storefront, AI-assisted selling, post-purchase support, proactive outreach — one system that manages the complete customer lifecycle." />
          <VC icon={<Brain className="w-5 h-5" />} color="bg-purple-50 text-purple-500" title="Intelligence that compounds" description="Day 1 it captures intent. Day 20 it understands preferences. Day 60 it predicts what each customer needs before they ask." />
          <VC icon={<Globe className="w-5 h-5" />} color="bg-emerald-50 text-emerald-600" title="Every channel, one identity" description="Web, WhatsApp, voice, email — customers move between channels freely. The context follows them. No broken handoffs." />
          <VC icon={<TrendingUp className="w-5 h-5" />} color="bg-amber-50 text-amber-600" title="Revenue you&apos;re leaving behind" description="Personalized selling, smart upsells, timely offers, cart recovery — the revenue that falls through when your tools don&apos;t talk to each other." />
          <VC icon={<Shield className="w-5 h-5" />} color="bg-slate-100 text-slate-600" title="Your data, your competitive moat" description="Every interaction builds a proprietary dataset only you own. The longer you run Meridian, the harder it is for competitors to replicate." />
        </div>
      </div>
    </section>
  );
}

function VC({ icon, color, title, description }: { icon: React.ReactNode; color: string; title: string; description: string }) {
  return (
    <div className="bg-card rounded-2xl border p-7 hover:shadow-[0_4px_24px_-8px_rgba(0,0,0,0.08)] transition-shadow">
      <div className={`w-11 h-11 rounded-xl flex items-center justify-center mb-5 ${color}`}>{icon}</div>
      <h3 className="text-[17px] font-semibold text-foreground mb-2 leading-snug">{title}</h3>
      <p className="text-[14px] text-muted-foreground leading-[1.7]">{description}</p>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   SOLUTIONS
   ═══════════════════════════════════════════════════════════════ */

function Solutions() {
  return (
    <section id="solutions" className="bg-card py-28 px-8 border-y">
      <div className="max-w-[1200px] mx-auto">
        {/* Customer Intelligence */}
        <div className="grid md:grid-cols-2 gap-14 md:gap-20 items-center mb-32">
          <div>
            <p className="text-[13px] font-semibold text-indigo-500 mb-3 tracking-wide">Customer Intelligence</p>
            <h3 className="text-[30px] md:text-[36px] font-bold text-foreground tracking-tight leading-[1.1] mb-5">Know your customer at day 1, day 20, and day 60</h3>
            <p className="text-[15px] text-muted-foreground leading-[1.7] mb-7">Most platforms give you a transaction log. Meridian gives you an evolving understanding — preferences, decision patterns, lifecycle stage — that deepens with every interaction.</p>
            <ul className="space-y-3">
              {["Day 1: Capture initial intent, category interest, budget signals", "Day 20: Map preferences, brand affinities, comparison behavior", "Day 30\u201360: Predict purchase timing, personalize outreach, drive retention", "Unified identity across web, WhatsApp, voice, and email"].map((item) => (
                <li key={item} className="flex items-start gap-3 text-[14px] text-foreground leading-snug"><Check className="w-4 h-4 text-indigo-500 mt-0.5 shrink-0" />{item}</li>
              ))}
            </ul>
          </div>
          <div className="bg-background rounded-2xl border p-6 shadow-sm">
            <div className="flex items-center gap-2.5 mb-5"><UserCheck className="w-4 h-4 text-indigo-500" /><span className="text-[13px] font-semibold text-foreground">Customer Profile</span></div>
            <div className="flex items-center gap-3 mb-5">
              <div className="w-12 h-12 rounded-full bg-indigo-50 flex items-center justify-center"><span className="text-[16px] font-bold text-indigo-500">PM</span></div>
              <div><p className="text-[15px] font-semibold text-foreground">Priya Mehta</p><p className="text-[12px] text-muted-foreground">12 sessions &middot; 3 purchases &middot; High intent</p></div>
            </div>
            <div className="mb-5">
              {[["Lifetime Value", "\u20B92,84,970"], ["Lifecycle Stage", "Loyal \u2014 3rd purchase cycle"], ["Budget Range", "\u20B950K \u2013 \u20B91.5L"], ["Next Predicted Need", "Laptop (high confidence)"], ["Preferred Channel", "WhatsApp"]].map(([k, v]) => (
                <div key={k} className="flex items-center justify-between py-2.5 border-b last:border-b-0"><span className="text-[13px] text-muted-foreground">{k}</span><span className="text-[13px] font-medium text-foreground">{v}</span></div>
              ))}
            </div>
            <p className="text-[11px] font-semibold text-muted-foreground uppercase tracking-wider mb-2">Learned Preferences</p>
            <div className="flex flex-wrap gap-1.5">
              {["Samsung affinity", "Compares before buying", "Price sensitive &gt;1L", "Home delivery", "Early adopter"].map((tag) => (
                <span key={tag} className="text-[11px] text-indigo-600 bg-indigo-50 rounded-full px-2.5 py-1">{tag}</span>
              ))}
            </div>
          </div>
        </div>

        {/* Commerce */}
        <div className="grid md:grid-cols-2 gap-14 md:gap-20 items-center mb-32">
          <div className="bg-background rounded-2xl border p-6 shadow-sm order-2 md:order-1">
            <div className="flex items-center gap-2.5 mb-5"><ShoppingBag className="w-4 h-4 text-emerald-500" /><span className="text-[13px] font-semibold text-foreground">Commerce Channels</span></div>
            <div className="space-y-3">
              {[
                { ch: "Storefront", icon: <ShoppingBag className="w-4 h-4" />, color: "text-emerald-500 bg-emerald-50", desc: "Full product catalog with AI-assisted selling built in", stat: "34% conversion" },
                { ch: "WhatsApp Commerce", icon: <Smartphone className="w-4 h-4" />, color: "text-emerald-600 bg-emerald-50", desc: "Proactive campaigns, cart recovery, personalized recs", stat: "892 convos/wk" },
                { ch: "Voice Agent", icon: <Headphones className="w-4 h-4" />, color: "text-amber-500 bg-amber-50", desc: "AI-powered inbound support and outbound follow-ups", stat: "Coming soon" },
                { ch: "Outbound Campaigns", icon: <Mail className="w-4 h-4" />, color: "text-purple-500 bg-purple-50", desc: "Back-in-stock, offers, re-engagement — all personalized", stat: "12% re-engage" },
              ].map((c) => (
                <div key={c.ch} className="flex items-start gap-4 p-4 rounded-xl border">
                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center shrink-0 ${c.color}`}>{c.icon}</div>
                  <div className="flex-1"><div className="flex items-center justify-between mb-0.5"><p className="text-[13px] font-semibold text-foreground">{c.ch}</p><span className="text-[11px] text-muted-foreground">{c.stat}</span></div><p className="text-[12px] text-muted-foreground leading-snug">{c.desc}</p></div>
                </div>
              ))}
            </div>
          </div>
          <div className="order-1 md:order-2">
            <p className="text-[13px] font-semibold text-emerald-600 mb-3 tracking-wide">Commerce Layer</p>
            <h3 className="text-[30px] md:text-[36px] font-bold text-foreground tracking-tight leading-[1.1] mb-5">Sell, support, and re-engage from one system</h3>
            <p className="text-[15px] text-muted-foreground leading-[1.7] mb-7">Your storefront, your AI selling assistant, your WhatsApp outreach, your voice support — all running on the same customer intelligence. No channel is a silo.</p>
            <ul className="space-y-3">
              {["AI-assisted selling that handles the full purchase flow end-to-end", "Proactive outreach on WhatsApp: abandoned carts, offers, restocks", "Voice agent for inbound support and outbound follow-ups", "Every channel inherits the full customer context automatically"].map((item) => (
                <li key={item} className="flex items-start gap-3 text-[14px] text-foreground leading-snug"><Check className="w-4 h-4 text-emerald-500 mt-0.5 shrink-0" />{item}</li>
              ))}
            </ul>
          </div>
        </div>

        {/* Intelligence */}
        <div className="grid md:grid-cols-2 gap-14 md:gap-20 items-center">
          <div>
            <p className="text-[13px] font-semibold text-amber-600 mb-3 tracking-wide">Intelligence Layer</p>
            <h3 className="text-[30px] md:text-[36px] font-bold text-foreground tracking-tight leading-[1.1] mb-5">See what customers actually want, not what they click</h3>
            <p className="text-[15px] text-muted-foreground leading-[1.7] mb-7">Traditional analytics tell you what happened. Meridian tells you why. What products are customers asking about that you don&apos;t carry? What objections kill deals? This is intelligence that only comes from owning the interaction layer.</p>
            <ul className="space-y-3">
              {["Demand signals: unmet demand from real customer interactions", "Competitive intelligence: which brands are being compared and why", "Conversion analysis: where deals are won and lost, by segment", "Lifecycle insights: how customer needs evolve over 30, 60, 90 days"].map((item) => (
                <li key={item} className="flex items-start gap-3 text-[14px] text-foreground leading-snug"><Check className="w-4 h-4 text-amber-500 mt-0.5 shrink-0" />{item}</li>
              ))}
            </ul>
          </div>
          <div className="bg-background rounded-2xl border p-6 shadow-sm">
            <div className="flex items-center gap-2.5 mb-5"><BarChart3 className="w-4 h-4 text-amber-500" /><span className="text-[13px] font-semibold text-foreground">Intelligence</span></div>
            <div className="space-y-3 mb-5">
              {[
                { sev: "high" as const, title: "Unmet demand: gaming laptops under \u20B91L", detail: "147 inquiries this week \u00B7 0 products in catalog", action: "Catalog gap" },
                { sev: "medium" as const, title: "Samsung vs Sony TV: Samsung winning 62%", detail: "89 comparison sessions \u00B7 Price is deciding factor", action: "Pricing signal" },
                { sev: "info" as const, title: "Delivery time blocking high-value carts", detail: "34% of abandoned carts >\u20B950K cite delivery", action: "Ops insight" },
              ].map((r, i) => (
                <div key={i} className="flex items-start gap-3 p-3.5 rounded-xl border">
                  <div className={`w-2 h-2 rounded-full mt-1.5 shrink-0 ${r.sev === "high" ? "bg-primary" : r.sev === "medium" ? "bg-amber-400" : "bg-blue-400"}`} />
                  <div className="flex-1 min-w-0"><p className="text-[12px] font-medium text-foreground leading-snug">{r.title}</p><p className="text-[11px] text-muted-foreground mt-0.5">{r.detail}</p></div>
                  <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full shrink-0 ${r.sev === "high" ? "bg-primary/10 text-primary" : r.sev === "medium" ? "bg-amber-50 text-amber-600" : "bg-blue-50 text-blue-500"}`}>{r.action}</span>
                </div>
              ))}
            </div>
            <div className="rounded-xl border p-4">
              <div className="flex items-center justify-between mb-3"><p className="text-[12px] font-semibold text-foreground">Customer Intent by Category</p><p className="text-[11px] text-muted-foreground">This week</p></div>
              <div className="space-y-2.5">
                {[{ n: "Laptops", p: 38 }, { n: "Televisions", p: 24 }, { n: "Smartphones", p: 18 }, { n: "Audio", p: 12 }, { n: "Appliances", p: 8 }].map((c) => (
                  <div key={c.n} className="flex items-center gap-3">
                    <span className="text-[11px] text-muted-foreground w-20">{c.n}</span>
                    <div className="flex-1 h-2 bg-secondary rounded-full overflow-hidden"><div className="h-full bg-amber-400 rounded-full" style={{ width: `${c.p}%` }} /></div>
                    <span className="text-[11px] font-semibold text-foreground w-8 text-right">{c.p}%</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════
   HOW IT WORKS
   ═══════════════════════════════════════════════════════════════ */

function HowItWorks() {
  return (
    <section className="bg-background py-28 px-8">
      <div className="max-w-[1200px] mx-auto">
        <div className="max-w-[600px] mx-auto text-center mb-16">
          <h2 className="text-[36px] md:text-[44px] font-bold text-foreground tracking-tight leading-[1.08] mb-5">How it works</h2>
          <p className="text-[16px] text-muted-foreground leading-[1.65]">Meridian sits between your brand and every customer. It manages the interaction, builds the relationship, and surfaces the intelligence.</p>
        </div>
        <div className="grid md:grid-cols-4 gap-8">
          {[
            { num: "01", title: "Connect your catalog", desc: "Products, inventory, pricing, offers. Meridian becomes the intelligent layer on top of your existing commerce infrastructure.", icon: <Layers className="w-5 h-5" /> },
            { num: "02", title: "Activate your channels", desc: "Storefront, WhatsApp, voice, email. Each channel is powered by the same customer intelligence and AI selling capability.", icon: <Globe className="w-5 h-5" /> },
            { num: "03", title: "Profiles build themselves", desc: "Every interaction enriches a unified profile. No manual tagging, no CRM busywork. The platform does the work.", icon: <Users className="w-5 h-5" /> },
            { num: "04", title: "Act on what you learn", desc: "Demand gaps, competitive signals, lifecycle triggers — surfaced in real time for your team to act on.", icon: <LineChart className="w-5 h-5" /> },
          ].map((step) => (
            <div key={step.num}>
              <div className="w-11 h-11 rounded-xl bg-secondary flex items-center justify-center text-muted-foreground mb-5">{step.icon}</div>
              <p className="text-[11px] font-mono text-muted-foreground mb-1.5">{step.num}</p>
              <h3 className="text-[17px] font-semibold text-foreground mb-2 leading-snug">{step.title}</h3>
              <p className="text-[14px] text-muted-foreground leading-[1.7]">{step.desc}</p>
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
    <section className="bg-noir py-28 px-8">
      <div className="max-w-[640px] mx-auto text-center">
        <h2 className="text-[36px] md:text-[44px] font-bold text-white tracking-tight leading-[1.08] mb-5">The brands that own the customer relationship win</h2>
        <p className="text-[16px] text-white/40 leading-[1.65] mb-10">We work with a select number of partners each quarter. Talk to our team to explore how Meridian fits your business.</p>
        <div className="flex items-center justify-center gap-4">
          <a href="#" className="inline-flex items-center gap-2.5 bg-white text-noir text-[14px] font-semibold px-7 py-3 rounded-lg hover:bg-white/90 transition-colors">Book a Demo <ArrowRight className="w-4 h-4" /></a>
          <a href="#" className="inline-flex items-center gap-2.5 text-[14px] font-medium text-white/60 px-7 py-3 rounded-lg border border-white/15 hover:border-white/30 hover:text-white transition-colors">Contact Sales</a>
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
    <footer className="bg-noir py-14 px-8 border-t border-white/[0.06]">
      <div className="max-w-[1200px] mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-14">
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2.5 mb-3">
              <div className="w-[24px] h-[24px] rounded-md bg-white/10 flex items-center justify-center"><span className="text-[10px] font-bold text-white leading-none">M</span></div>
              <span className="text-[14px] font-semibold text-white tracking-tight">Meridian</span>
            </div>
            <p className="text-[12px] text-white/30 leading-relaxed">The operating system for customer-first commerce.</p>
          </div>
          <FC title="Platform" links={["Customer Intelligence", "Commerce Layer", "Channel Management", "Business Intelligence", "Developer Kit"]} />
          <FC title="Solutions" links={["Electronics Retail", "Fashion & Lifestyle", "D2C Brands", "Marketplace", "Enterprise"]} />
          <FC title="Resources" links={["Documentation", "Case Studies", "Blog", "Changelog", "API Reference"]} />
          <FC title="Company" links={["About", "Careers", "Contact", "Privacy", "Terms"]} />
        </div>
        <div className="border-t border-white/[0.06] pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[12px] text-white/25">&copy; 2026 Meridian. All rights reserved.</p>
          <div className="flex items-center gap-5">
            <a href="#" className="text-[12px] text-white/25 hover:text-white/50 transition-colors">Twitter</a>
            <a href="#" className="text-[12px] text-white/25 hover:text-white/50 transition-colors">LinkedIn</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FC({ title, links }: { title: string; links: string[] }) {
  return (
    <div>
      <p className="text-[13px] font-semibold text-white/60 mb-3">{title}</p>
      <ul className="space-y-2">{links.map((l) => (<li key={l}><a href="#" className="text-[13px] text-white/30 hover:text-white/60 transition-colors">{l}</a></li>))}</ul>
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
