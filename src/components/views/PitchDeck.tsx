import React, { useState } from 'react';
import {
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  CircleDollarSign,
  FileStack,
  Globe,
  Landmark,
  Radar,
  ShieldCheck,
  Sparkles,
  Waypoints,
} from 'lucide-react';

type Slide = {
  id: number;
  title: string;
  subtitle: string;
  navSubtitle?: string;
  content: React.ReactNode;
};

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-[#1f9d94]/35 bg-[#0c1f2c]/80 px-3 py-1 text-[10px] font-medium uppercase tracking-[0.28em] text-[#7be0d6]">
      {children}
    </span>
  );
}

function MetricCard({
  value,
  label,
  source,
}: {
  value: string;
  label: string;
  source: string;
}) {
  return (
    <div className="flex h-full flex-col rounded-3xl border border-white/10 bg-[#0b1724]/85 p-6 shadow-[0_20px_60px_rgba(0,0,0,0.25)]">
      <div className="text-[2rem] font-semibold leading-tight text-white">{value}</div>
      <div className="mt-3 flex-1 text-sm leading-6 text-[#b4c3d3]">{label}</div>
      <div className="mt-5 text-[10px] uppercase tracking-[0.22em] text-[#7be0d6]/80">{source}</div>
    </div>
  );
}

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-4.5">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-3 text-[15px] leading-7 text-[#d9e6f2]">
          <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#23c6b7]" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

function TierCard({
  code,
  title,
  detail,
  accent,
}: {
  code: string;
  title: string;
  detail: string;
  accent: string;
}) {
  return (
    <div className="flex h-full flex-col rounded-[28px] border border-white/10 bg-[#0d1b29]/85 p-6">
      <div
        className="inline-flex h-12 w-12 items-center justify-center rounded-2xl border text-sm font-semibold tracking-[0.2em]"
        style={{ borderColor: accent, color: accent }}
      >
        {code}
      </div>
      <h4 className="mt-5 text-lg font-semibold text-white">{title}</h4>
      <p className="mt-3 flex-1 text-sm leading-6 text-[#aebfd0]">{detail}</p>
    </div>
  );
}

function PolicyPack({
  name,
  note,
  featured = false,
}: {
  name: string;
  note: string;
  featured?: boolean;
}) {
  return (
    <div
      className={`flex h-full flex-col rounded-[26px] border p-5 ${
        featured
          ? 'border-[#23c6b7]/60 bg-[linear-gradient(180deg,rgba(35,198,183,0.16),rgba(11,23,36,0.95))]'
          : 'border-white/10 bg-[#0b1724]/88'
      }`}
    >
      <div className="flex items-center justify-between">
        <h4 className="text-sm font-semibold uppercase tracking-[0.18em] text-white">{name}</h4>
        <span className="rounded-full border border-white/10 px-2 py-1 text-[9px] uppercase tracking-[0.18em] text-[#7be0d6]">
          Pack
        </span>
      </div>
      <p className="mt-4 flex-1 text-sm leading-6 text-[#b5c6d8]">{note}</p>
    </div>
  );
}

const slides: Slide[] = [
  {
    id: 1,
    title: 'Title / Hook',
    subtitle: 'Configurable AI Runtime Governance Platform',
    navSubtitle: 'Global governance thesis',
    content: (
      <div className="grid h-full gap-8 lg:grid-cols-[1.22fr_0.78fr]">
        <div className="flex flex-col justify-between rounded-[34px] border border-white/10 bg-[radial-gradient(circle_at_top_left,rgba(35,198,183,0.20),rgba(9,18,30,0.92)_52%),linear-gradient(180deg,rgba(10,18,30,0.96),rgba(7,13,23,0.98))] p-9 xl:p-10">
          <div>
            <Eyebrow>India-first wedge. Global category.</Eyebrow>
            <h1 className="mt-8 max-w-[13.5ch] text-[clamp(2.8rem,3.7vw,4.4rem)] font-semibold leading-[1.05] tracking-[-0.03em] text-white">
              Sovereign-AI is the configurable runtime governance layer for safe, auditable enterprise GenAI.
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-[#b9cad9]">
              The enterprise control plane between AI applications and model outputs: enforce policy YAML, redact
              sensitive data, detect prompt injection, route edge cases through a three-tier engine, and create audit-ready evidence by default.
            </p>
          </div>
          <div className="grid gap-4 pt-8 sm:grid-cols-3">
            <MetricCard value="India BFSI + Healthtech" label="Perfect first wedge: acute compliance pain and local data sensitivity." source="Commercial beachhead" />
            <MetricCard value="3-Tier Runtime Engine" label="Regex, semantic/vector, and LangGraph review in one enforcement path." source="Product architecture" />
            <MetricCard value="Policy Packs" label="Reusable jurisdiction and domain packs create expansion without rewriting the core." source="Moat" />
          </div>
        </div>

        <div className="grid gap-4">
          <div className="rounded-[32px] border border-[#23c6b7]/20 bg-[#0b1724]/92 p-7">
            <div className="flex items-center gap-3 text-[#7be0d6]">
              <ShieldCheck className="h-5 w-5" />
              <span className="text-[10px] uppercase tracking-[0.2em]">What buyers feel</span>
            </div>
            <div className="mt-5 space-y-3.5">
              {[
                'Ship GenAI faster without giving up runtime control.',
                'Explain every allow, block, or redact decision with evidence.',
                'Prove the model can start in India and scale globally.',
              ].map((line) => (
                <div key={line} className="rounded-2xl border border-white/10 bg-white/[0.03] p-4 text-sm leading-6 text-[#d9e6f2]">
                  {line}
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-[32px] border border-white/10 bg-[#0a1421]/92 p-7">
            <div className="text-[11px] uppercase tracking-[0.28em] text-[#7be0d6]">Visual on slide</div>
            <div className="mt-5 space-y-3.5">
              <div className="rounded-2xl border border-white/10 bg-[#102235] p-4">
                <div className="text-xs uppercase tracking-[0.22em] text-white/70">App Layer</div>
                <div className="mt-2 text-lg text-white">Copilot, Agent, Chatbot, Workflow</div>
              </div>
              <div className="flex justify-center text-[#23c6b7]">
                <ArrowRight className="h-5 w-5 rotate-90" />
              </div>
              <div className="rounded-2xl border border-[#23c6b7]/30 bg-[linear-gradient(180deg,rgba(35,198,183,0.18),rgba(11,23,36,0.95))] p-4">
                <div className="text-xs uppercase tracking-[0.22em] text-[#8ef3ea]">Sovereign-AI Runtime Layer</div>
                <div className="mt-2 text-lg text-white">Policy enforcement, redaction, routing, audit trail</div>
              </div>
              <div className="flex justify-center text-[#23c6b7]">
                <ArrowRight className="h-5 w-5 rotate-90" />
              </div>
              <div className="rounded-2xl border border-white/10 bg-[#102235] p-4">
                <div className="text-xs uppercase tracking-[0.22em] text-white/70">Model Layer</div>
                <div className="mt-2 text-lg text-white">OpenAI, Azure, Bedrock, Vertex, Ollama</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: 2,
    title: 'The Problem',
    subtitle: 'Policy documents do not stop runtime failures',
    navSubtitle: 'Runtime blind spot',
    content: (
      <div className="grid h-full gap-8 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="rounded-[32px] border border-white/10 bg-[#091321]/92 p-10">
          <Eyebrow>Runtime blind spot</Eyebrow>
          <h3 className="mt-7 max-w-3xl text-[clamp(2.25rem,3vw,3rem)] font-semibold leading-[1.08] tracking-[-0.02em] text-white">
            Enterprise GenAI is entering production faster than governance can enforce it.
          </h3>
          <div className="mt-8">
            <BulletList
              items={[
                'Prompt injection and insecure outputs bypass traditional app security controls.',
                'Sensitive data moves through prompts, retrieval context, and model responses in milliseconds.',
                'Compliance teams own static policies; engineering teams still lack runtime enforcement.',
                'CISOs need evidence, not post-incident explanations.',
                'Agentic workflows multiply risk because tools, memory, and downstream systems extend the attack surface.',
              ]}
            />
          </div>
        </div>

        <div className="grid gap-4">
          <div className="rounded-[32px] border border-[#ff8b8b]/20 bg-[linear-gradient(180deg,rgba(83,19,24,0.55),rgba(17,12,18,0.95))] p-8">
            <div className="text-[11px] uppercase tracking-[0.28em] text-[#ffb0b0]">Failure chain visual</div>
            <div className="mt-5 grid gap-3">
              {[
                'User prompt includes hidden override',
                'Model accesses sensitive context',
                'Output returns PII or unsafe recommendation',
                'No explainable log of why it happened',
              ].map((step, index) => (
                <div key={step} className="flex items-center gap-4 rounded-2xl border border-white/10 bg-black/20 p-4">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-[#ff8b8b]/40 text-sm font-semibold text-[#ffd0d0]">
                    {index + 1}
                  </div>
                  <div className="text-sm leading-6 text-white/90">{step}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-[32px] border border-white/10 bg-[#0d1b29]/92 p-8">
            <div className="text-[11px] uppercase tracking-[0.28em] text-[#7be0d6]">OWASP-aligned risk clusters</div>
            <div className="mt-5 grid grid-cols-2 gap-3 text-sm text-[#d7e5f2]">
              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">Prompt injection</div>
              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">Insecure output handling</div>
              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">Sensitive information disclosure</div>
              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">Tool misuse in agentic flows</div>
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: 3,
    title: 'The Solution',
    subtitle: 'Architecture + three-tier model',
    navSubtitle: 'Three-tier control plane',
    content: (
      <div className="space-y-8">
        <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="rounded-[32px] border border-white/10 bg-[#091321]/92 p-8">
            <Eyebrow>Control plane architecture</Eyebrow>
            <div className="mt-6 flex flex-col gap-4">
              {[
                'Enterprise AI App',
                'Sovereign-AI Gateway',
                'Policy YAML + Tier Router + Enforcement Logic',
                'Model Provider + Tooling Layer',
                'Control Tower UI + Audit Evidence',
              ].map((item, index) => (
                <div key={item} className="relative rounded-2xl border border-white/10 bg-white/[0.03] p-4 pl-16 text-sm text-white">
                  <span className="absolute left-4 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-xl border border-[#23c6b7]/40 text-[#7be0d6]">
                    {index + 1}
                  </span>
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[32px] border border-[#23c6b7]/20 bg-[#0b1724]/92 p-8">
            <Eyebrow>Why this works</Eyebrow>
            <div className="mt-6 space-y-5 text-[15px] leading-7 text-[#d7e5f2]">
              <p>
                Sovereign-AI sits in front of or after any LLM stack and enforces safety, compliance, and quality contracts in real time.
              </p>
              <p>
                The product separates policy from enforcement: update YAML packs, thresholds, or jurisdiction logic without rewriting the runtime.
              </p>
              <p>
                Control Tower UI gives operators a single surface for decisions, logs, escalation patterns, and benchmark evidence.
              </p>
            </div>
          </div>
        </div>

        <div className="grid gap-4 lg:grid-cols-3">
          <TierCard code="T1" title="Tier 1: Regex + heuristics" detail="Fast deterministic screening for obvious PII, unsafe strings, formatting anomalies, and known attack patterns. Handles the majority of traffic at the lowest cost." accent="#4fe3d7" />
          <TierCard code="T2" title="Tier 2: Semantic + vector checks" detail="Embeddings-backed intent, similarity, and domain-risk detection for gray-zone prompts, context, and outputs that evade keyword filters." accent="#36b4d5" />
          <TierCard code="T3" title="Tier 3: LangGraph review" detail="Escalation layer for ambiguous, high-impact, or agentic cases where deeper reasoning, tool constraints, and policy interpretation matter." accent="#6ea8ff" />
        </div>
      </div>
    ),
  },
  {
    id: 4,
    title: 'Why Now',
    subtitle: 'Market timing + regulations',
    navSubtitle: 'Timing + regulation',
    content: (
      <div className="space-y-8">
        <div className="grid gap-4 lg:grid-cols-3">
          <MetricCard value="1 Aug 2024" label="EU AI Act entered into force; obligations are now phasing in across prohibited practices, GPAI, and high-risk systems." source="EC, 2024" />
          <MetricCard value="26 Jul 2024" label="NIST released the Generative AI Profile as a companion resource to the AI RMF for GenAI risk management." source="NIST AI 600-1" />
          <MetricCard value="5 Jan 2025" label="India published the Draft DPDP Rules 2025, operationalizing the DPDP Act with audit and compliance implications." source="MeitY / PIB" />
        </div>

        <div className="grid gap-8 lg:grid-cols-[1fr_1fr]">
          <div className="rounded-[32px] border border-white/10 bg-[#0a1523]/92 p-8">
            <Eyebrow>Why buyers move now</Eyebrow>
            <BulletList
              items={[
                'EU AI Act obligations now push governance from policy language into operational controls and evidence.',
                'NIST AI RMF plus the GenAI Profile gives enterprises a recognized framework for GenAI risk management.',
                'OWASP LLM Top 10 turned prompt injection, insecure output handling, and sensitive disclosure into shared buying-language risks.',
                'India now combines DPDP momentum with RBI-aligned governance pressure in regulated sectors.',
                'AI governance is becoming a dedicated enterprise spending category as regulated GenAI adoption expands.',
              ]}
            />
            <p className="mt-6 text-[10px] uppercase tracking-[0.2em] text-[#7be0d6]/80">
              Sources: European Commission AI Act (2024), NIST AI 600-1 (2024), MeitY Draft DPDP Rules (2025), RBI IT Governance Directions (2023), OWASP LLM Top 10 (v1.1 / 2025), Gartner (17 Feb 2026)
            </p>
          </div>

          <div className="rounded-[32px] border border-white/10 bg-[#0b1724]/92 p-8">
            <Eyebrow>Timing chart visual</Eyebrow>
            <div className="mt-6 space-y-4">
              {[
                ['2024', 'EU AI Act enters into force', 'left-[8%]'],
                ['2024', 'NIST GenAI Profile released', 'left-[28%]'],
                ['2025', 'Draft DPDP Rules published', 'left-[50%]'],
                ['2025', 'OWASP LLM Top 10 v1.1 reinforces a shared GenAI risk baseline', 'left-[68%]'],
                ['2026', 'Gartner identifies AI governance as a fast-growing spending category', 'left-[86%]'],
              ].map(([year, note, position]) => (
                <div key={note} className="relative rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                  <div className="text-[10px] uppercase tracking-[0.22em] text-[#7be0d6]">{year}</div>
                  <div className="mt-1 text-sm leading-6 text-white">{note}</div>
                  <span className={`absolute bottom-0 ${position} h-2 w-2 translate-y-1/2 rounded-full bg-[#23c6b7]`} />
                </div>
              ))}
            </div>
            <div className="mt-6 h-px w-full bg-gradient-to-r from-[#23c6b7]/30 via-[#23c6b7] to-[#23c6b7]/30" />
          </div>
        </div>
      </div>
    ),
  },
  {
    id: 5,
    title: 'Product Differentiation & Moat',
    subtitle: 'Policy packs beat one-off guardrails',
    navSubtitle: 'Policy-pack moat',
    content: (
      <div className="grid h-full gap-8 lg:grid-cols-[0.95fr_1.05fr]">
        <div className="rounded-[32px] border border-white/10 bg-[#08131f]/92 p-8">
          <Eyebrow>Core moat</Eyebrow>
          <h3 className="mt-6 text-[clamp(2.2rem,2.9vw,3rem)] font-semibold leading-[1.08] tracking-[-0.02em] text-white">
            The moat is not a single classifier. It is policy-vs-enforcement separation.
          </h3>
          <div className="mt-8">
            <BulletList
              items={[
                'Policy YAML externalizes thresholds, actions, severity, escalation, and jurisdiction logic.',
                'One runtime engine can sell multiple sector and geography-specific packs without replatforming.',
                'Control Tower UI turns every runtime decision into reviewable evidence for security and compliance teams.',
                'Model-agnostic deployment supports cloud, VPC, and air-gapped environments.',
                'India-native packs expand into GDPR, HIPAA, and other global compliance SKUs.',
              ]}
            />
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <PolicyPack name="India BFSI Pack" note="DPDP-aware controls, RBI-aligned operating posture, financial PII handling, audit exports." featured />
          <PolicyPack name="India Healthtech Pack" note="Healthcare privacy controls, consent-sensitive workflows, redaction and response boundaries." featured />
          <PolicyPack name="GDPR Pack" note="Cross-border data handling, minimization logic, explanation artifacts, region-aware controls." />
          <PolicyPack name="HIPAA / PHI Pack" note="Clinical and patient-data redaction paths with stronger evidence retention." />
          <PolicyPack name="Agentic AI Pack" note="Tool-call boundaries, escalation triggers, memory safety, and workflow-specific approval logic." />
          <PolicyPack name="Custom Enterprise Pack" note="Customer-specific policy logic encoded once, enforced everywhere across AI apps." />
        </div>
      </div>
    ),
  },
  {
    id: 6,
    title: 'Target Markets & Prioritization',
    subtitle: 'India BFSI / healthtech first. Global policy packs next.',
    navSubtitle: 'India first, global next',
    content: (
      <div className="space-y-8">
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-[32px] border border-white/10 bg-[#091321]/92 p-8">
            <Eyebrow>Beachhead logic</Eyebrow>
            <div className="mt-6 space-y-4">
              {[
                '1. India BFSI: strongest urgency because customer data sensitivity, RBI pressure, and fast GenAI experimentation collide.',
                '2. India healthtech: regulated data, patient trust, and AI copilots create immediate runtime governance demand.',
                '3. Expand to India insurance, legal, and enterprise shared services via adjacent packs.',
                '4. Replicate globally with GDPR, HIPAA, and sector-specific packs for multinational buyers.',
              ].map((item) => (
                <div key={item} className="rounded-2xl border border-white/10 bg-white/[0.03] p-4 text-[15px] leading-7 text-[#dbe8f2]">
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[32px] border border-white/10 bg-[#0b1724]/92 p-8">
            <Eyebrow>Priority heatmap visual</Eyebrow>
            <div className="mt-6 grid grid-cols-2 gap-3 text-sm">
              {[
                ['India BFSI', 'High urgency / High ACV', true],
                ['India Healthtech', 'High urgency / Strong proof value', true],
                ['India Insurance', 'Adjacent expansion', false],
                ['Global BFSI', 'Post-proof scale motion', false],
                ['Global Healthcare', 'Policy-pack replication', false],
                ['Enterprise Agent Platforms', 'Horizontal expansion', false],
              ].map(([name, note, active]) => (
                <div
                  key={name}
                  className={`rounded-2xl border p-4 ${
                    active ? 'border-[#23c6b7]/45 bg-[#123140]' : 'border-white/10 bg-white/[0.03]'
                  }`}
                >
                  <div className="text-white">{name}</div>
                  <div className="mt-2 text-xs uppercase tracking-[0.18em] text-[#9fc3d9]">{note}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          <MetricCard value="India-native PII helpers" label="Immediate localization advantage in early regulated deployments." source="Product fit" />
          <MetricCard value="BFSI + Healthtech" label="Two categories where runtime proof matters before broad horizontal rollout." source="Wedge priority" />
          <MetricCard value="Global policy-pack expansion" label="Same platform, new compliance packs, higher ACV motion." source="Scale logic" />
        </div>
      </div>
    ),
  },
  {
    id: 7,
    title: 'Go-to-Market & Traction Path',
    subtitle: 'Land with a pilot. Expand through policy packs and governance ownership.',
    navSubtitle: 'Pilot to platform motion',
    content: (
      <div className="grid h-full gap-8 lg:grid-cols-[1fr_1fr]">
        <div className="rounded-[32px] border border-white/10 bg-[#0a1523]/92 p-8">
          <Eyebrow>Land and expand</Eyebrow>
          <div className="mt-6 space-y-4">
            {[
              'Pilot: secure one high-impact AI workflow in 4-6 weeks.',
              'Prove: run redaction demos, runtime logs, and benchmark evidence.',
              'Expand: add more workflows, more policy packs, and broader business units.',
              'Standardize: become the shared runtime governance layer across enterprise GenAI.',
            ].map((step, index) => (
              <div key={step} className="flex gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-[#23c6b7]/40 text-[#7be0d6]">
                  {index + 1}
                </div>
                <div className="text-[15px] leading-7 text-[#d7e5f2]">{step}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-[32px] border border-white/10 bg-[#0b1724]/92 p-8">
          <Eyebrow>Early traction assets to show</Eyebrow>
          <div className="mt-6 grid gap-3 md:grid-cols-2">
            {[
              'Latency benchmark chart by tier',
              'Before / after redaction demo',
              'Prompt-injection detection trace',
              'Control Tower audit screenshot',
              'Policy YAML pack example',
              'Deployment architecture diagram',
            ].map((asset) => (
              <div key={asset} className="rounded-2xl border border-white/10 bg-white/[0.03] p-4 text-sm leading-6 text-white/90">
                {asset}
              </div>
            ))}
          </div>
          <div className="mt-6 rounded-2xl border border-[#23c6b7]/25 bg-[#0f2331] p-5 text-[15px] leading-7 text-[#dce8f2]">
            Primary buyers: CTO, CISO, Head of AI, Chief Risk Officer, and Data Protection Officer.
          </div>
        </div>
      </div>
    ),
  },
  {
    id: 8,
    title: 'Commercial Model & Pricing',
    subtitle: 'Include both India and global tiers',
    navSubtitle: 'India + global pricing',
    content: (
      <div className="space-y-8">
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-[34px] border border-[#23c6b7]/35 bg-[linear-gradient(180deg,rgba(18,49,64,0.95),rgba(9,20,32,0.97))] p-8">
            <div className="flex items-center gap-3 text-[#7be0d6]">
              <Landmark className="h-5 w-5" />
              <span className="text-[11px] uppercase tracking-[0.28em]">India pricing</span>
            </div>
            <div className="mt-6 space-y-5">
              <div className="rounded-2xl border border-white/10 bg-black/15 p-5">
                <div className="text-xs uppercase tracking-[0.2em] text-[#9fd9d2]">Pilot</div>
                <div className="mt-2 text-3xl font-semibold text-white">INR 18L-35L</div>
                <div className="mt-2 text-sm leading-6 text-[#c4d6e2]">One workflow, one policy pack, integration, benchmarking, and audit demo.</div>
              </div>
              <div className="rounded-2xl border border-white/10 bg-black/15 p-5">
                <div className="text-xs uppercase tracking-[0.2em] text-[#9fd9d2]">Annual platform</div>
                <div className="mt-2 text-3xl font-semibold text-white">INR 60L-1.5Cr+</div>
                <div className="mt-2 text-sm leading-6 text-[#c4d6e2]">Multiple workflows, Control Tower, support, audit exports, and additional India packs.</div>
              </div>
            </div>
          </div>

          <div className="rounded-[34px] border border-white/10 bg-[#0b1724]/95 p-8">
            <div className="flex items-center gap-3 text-[#7be0d6]">
              <Globe className="h-5 w-5" />
              <span className="text-[11px] uppercase tracking-[0.28em]">Global pricing</span>
            </div>
            <div className="mt-6 space-y-5">
              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
                <div className="text-xs uppercase tracking-[0.2em] text-[#9fd9d2]">Pilot</div>
                <div className="mt-2 text-3xl font-semibold text-white">$25k-$60k</div>
                <div className="mt-2 text-sm leading-6 text-[#c4d6e2]">High-impact AI workflow, red-team cases, dashboard, and deployment design.</div>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
                <div className="text-xs uppercase tracking-[0.2em] text-[#9fd9d2]">Annual platform</div>
                <div className="mt-2 text-3xl font-semibold text-white">$150k-$500k+</div>
                <div className="mt-2 text-sm leading-6 text-[#c4d6e2]">Cross-application runtime governance, multiple packs, enterprise support, and custom controls.</div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          <MetricCard value="Base platform" label="Runtime enforcement engine + Control Tower + core pack." source="Recurring revenue" />
          <MetricCard value="Pack upsell" label="DPDP, RBI, HIPAA, GDPR, agentic AI, and customer-specific policy modules." source="Expansion revenue" />
          <MetricCard value="Services attach" label="Red-team audit, deployment design, tuning, and proof workshops." source="High-margin entry" />
        </div>
      </div>
    ),
  },
  {
    id: 9,
    title: 'Proof Assets & Roadmap',
    subtitle: 'What de-risks the buyer and what scales the company',
    navSubtitle: 'Proof + roadmap',
    content: (
      <div className="grid h-full gap-8 lg:grid-cols-[1fr_1fr]">
        <div className="rounded-[32px] border border-white/10 bg-[#091321]/92 p-8">
          <Eyebrow>Proof assets</Eyebrow>
          <div className="mt-6 grid gap-3">
            {[
              'Tier latency benchmark: Tier 1 vs Tier 2 vs Tier 3',
              'Before / after redaction screenshot with India PII examples',
              'Injection attempt trace with allow / redact / block decision path',
              'Control Tower UI screenshot showing evidence, severity, and policy rule hit',
              'Policy YAML excerpt showing how jurisdiction logic changes without code changes',
            ].map((proof) => (
              <div key={proof} className="rounded-2xl border border-white/10 bg-white/[0.03] p-4 text-sm leading-6 text-[#dce8f2]">
                {proof}
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-[32px] border border-white/10 bg-[#0b1724]/92 p-8">
          <Eyebrow>Roadmap</Eyebrow>
          <div className="mt-6 space-y-5">
            {[
              ['Now', 'India BFSI and healthtech pilots with proof-grade runtime evidence.'],
              ['Next', 'Package India compliance modules into repeatable policy-pack SKUs.'],
              ['Then', 'Launch GDPR, HIPAA, and agentic AI packs for global expansion.'],
              ['Later', 'Build marketplace-style pack distribution, stronger benchmarks, and SIEM integrations.'],
            ].map(([phase, detail], index) => (
              <div key={phase} className="flex gap-4">
                <div className="flex flex-col items-center">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full border border-[#23c6b7]/45 text-sm font-semibold text-[#7be0d6]">
                    {index + 1}
                  </div>
                  {index < 3 ? <div className="mt-2 h-full w-px bg-white/10" /> : null}
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                  <div className="text-xs uppercase tracking-[0.18em] text-[#7be0d6]">{phase}</div>
                  <div className="mt-2 text-[15px] leading-7 text-[#dae7f1]">{detail}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    ),
  },
  {
    id: 10,
    title: 'Final Verdict / Ask',
    subtitle: 'Why this wins and what we want now',
    navSubtitle: 'Closing ask',
    content: (
      <div className="grid h-full gap-8 lg:grid-cols-[1.15fr_0.85fr]">
        <div className="rounded-[34px] border border-[#23c6b7]/35 bg-[radial-gradient(circle_at_top_left,rgba(35,198,183,0.22),rgba(8,19,31,0.97)_55%)] p-10">
          <Eyebrow>Closing thesis</Eyebrow>
          <h3 className="mt-7 max-w-4xl text-[clamp(2.7rem,3.7vw,4.6rem)] font-semibold leading-[1.06] tracking-[-0.03em] text-white">
            India gives Sovereign-AI the perfect first wedge. Policy packs turn that wedge into a global platform.
          </h3>
          <div className="mt-8">
            <BulletList
              items={[
                'The category is legible: configurable AI runtime governance platform.',
                'The timing is credible: regulation, OWASP pressure, and enterprise buying behavior now converge.',
                'The wedge is focused: India BFSI and healthtech have urgent, local, explainable needs.',
                'The moat compounds: policy-vs-enforcement separation expands into reusable packs and higher ACV.',
              ]}
            />
          </div>
        </div>

        <div className="rounded-[34px] border border-white/10 bg-[#0b1724]/95 p-8">
          <div className="flex items-center gap-3 text-[#7be0d6]">
            <CircleDollarSign className="h-5 w-5" />
            <span className="text-[11px] uppercase tracking-[0.28em]">The ask</span>
          </div>
          <div className="mt-7 space-y-4">
            {[
              '3 India BFSI or healthtech pilot design partners in the next quarter',
              'Investor and enterprise introductions tied to regulated AI deployment budgets',
              'Live scoping conversations with CTO, CISO, and Head of AI buyers now',
            ].map((ask) => (
              <div key={ask} className="rounded-2xl border border-white/10 bg-white/[0.03] p-4 text-[15px] leading-7 text-white">
                {ask}
              </div>
            ))}
          </div>
          <div className="mt-8 rounded-2xl border border-[#23c6b7]/30 bg-[#112736] p-5">
            <div className="text-xs uppercase tracking-[0.2em] text-[#8de9e0]">Meeting outcome</div>
            <div className="mt-2 text-lg text-white">Pilot scoping session booked within 14 days</div>
          </div>
        </div>
      </div>
    ),
  },
];

export const investorDeckOutline = slides.map((slide) => ({
  id: slide.id,
  title: slide.title,
  subtitle: slide.subtitle,
}));

export function PitchDeck() {
  const [activeSlide, setActiveSlide] = useState(0);
  const currentSlide = slides[activeSlide];

  const nextSlide = () => setActiveSlide((prev) => Math.min(prev + 1, slides.length - 1));
  const prevSlide = () => setActiveSlide((prev) => Math.max(prev - 1, 0));

  return (
    <div className="mx-auto flex h-full max-w-[1320px] flex-col px-8 py-10">
      <div className="mb-6 flex items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-[#23c6b7]/40 bg-[#102235] text-[#7be0d6]">
            <Sparkles className="h-5 w-5" />
          </div>
          <div>
            <div className="text-[11px] uppercase tracking-[0.28em] text-[#7be0d6]">Investor / Enterprise Deck</div>
            <div className="mt-1 text-2xl font-semibold text-white">Sovereign-AI</div>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className="hidden rounded-full border border-white/10 bg-[#0c1827]/90 px-4 py-2 text-[11px] uppercase tracking-[0.24em] text-[#8da4bb] md:block">
            Slide <span className="text-white">{activeSlide + 1}</span> / {slides.length}
          </div>
          <button
            onClick={prevSlide}
            disabled={activeSlide === 0}
            className="rounded-2xl border border-white/10 bg-[#0c1827]/90 p-3 text-white transition-colors hover:border-[#23c6b7]/30 disabled:opacity-30"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            onClick={nextSlide}
            disabled={activeSlide === slides.length - 1}
            className="rounded-2xl border border-white/10 bg-[#0c1827]/90 p-3 text-white transition-colors hover:border-[#23c6b7]/30 disabled:opacity-30"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>

      <div className="grid flex-1 gap-6 lg:grid-cols-[320px_1fr]">
        <aside className="rounded-[32px] border border-white/10 bg-[#07111d]/92 p-5">
          <div className="mb-5 flex items-center gap-3 text-[#7be0d6]">
            <FileStack className="h-5 w-5" />
            <span className="text-[11px] uppercase tracking-[0.28em]">Narrative flow</span>
          </div>
          <div className="space-y-2">
            {slides.map((slide, index) => {
              const isActive = index === activeSlide;
              return (
                <button
                  key={slide.id}
                  onClick={() => setActiveSlide(index)}
                  className={`w-full rounded-2xl border px-4 py-4 text-left transition-colors ${
                    isActive
                      ? 'border-[#23c6b7]/35 bg-[#0f2331]'
                      : 'border-transparent bg-transparent hover:border-white/10 hover:bg-white/[0.03]'
                  }`}
                >
                  <div className="flex items-start gap-3">
                    <div
                      className={`mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-xl border text-xs font-semibold ${
                        isActive
                          ? 'border-[#23c6b7]/45 text-[#7be0d6]'
                          : 'border-white/10 text-white/50'
                      }`}
                    >
                      {slide.id}
                    </div>
                    <div className="min-w-0">
                      <div className={`text-sm font-medium ${isActive ? 'text-white' : 'text-white/70'}`}>{slide.title}</div>
                      <div className="mt-1 text-[10px] uppercase leading-4 tracking-[0.12em] text-white/35">
                        {slide.navSubtitle ?? slide.subtitle}
                      </div>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>

          <div className="mt-6 rounded-[26px] border border-white/10 bg-[#0b1724] p-4">
            <div className="flex items-center gap-2 text-[#7be0d6]">
              <Waypoints className="h-4 w-4" />
              <span className="text-[10px] uppercase tracking-[0.24em]">Deck intent</span>
            </div>
            <p className="mt-3 text-sm leading-6 text-[#b4c6d8]">
              Drive a pilot meeting by making the category legible, the wedge urgent, and the moat repeatable.
            </p>
            <div className="mt-4 flex items-center gap-2 text-[#9fb5ca]">
              <Radar className="h-4 w-4" />
              <span className="text-[11px] uppercase tracking-[0.18em]">Investor + CTO + CISO ready</span>
            </div>
          </div>
        </aside>

        <section className="overflow-hidden rounded-[38px] border border-white/10 bg-[linear-gradient(180deg,rgba(10,18,30,0.98),rgba(7,13,22,0.98))] shadow-[0_30px_80px_rgba(0,0,0,0.28)]">
          <div className="border-b border-white/10 px-10 py-7">
            <div className="flex items-start justify-between gap-4">
              <div className="min-w-0 flex-1">
                <div className="text-[11px] uppercase tracking-[0.28em] text-[#7be0d6]">{currentSlide.subtitle}</div>
                <h2 className="mt-3 text-[clamp(2.4rem,3vw,3.1rem)] font-semibold tracking-[-0.03em] text-white">{currentSlide.title}</h2>
              </div>
              <div className="shrink-0 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-[11px] uppercase tracking-[0.22em] text-white/45">
                Sovereign-AI / 24 May 2026 narrative
              </div>
            </div>
          </div>
          <div className="h-[calc(100vh-195px)] overflow-y-auto p-8 lg:p-10">{currentSlide.content}</div>
        </section>
      </div>
    </div>
  );
}
