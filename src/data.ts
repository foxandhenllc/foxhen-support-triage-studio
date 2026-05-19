export const sample = {
  "repoName": "foxhen-support-triage-studio",
  "title": "Support Triage Studio",
  "subtitle": "Ticket prioritization sample",
  "serviceLine": "Support workflow cleanup",
  "heroTitle": "Prioritize support tickets without losing the human context.",
  "heroCopy": "A fictional ticket triage surface that ranks urgency, customer impact, escalation risk, and suggested response shape for a lean team.",
  "primaryAction": "Triage inbox",
  "secondaryAction": "Review escalations",
  "repositoryUrl": "https://github.com/foxandhenllc/foxhen-support-triage-studio",
  "liveDemoUrl": "https://foxhen-support-triage-studio.vercel.app",
  "theme": {
    "accent": "#6241a3",
    "accent2": "#62c2a2",
    "ink": "#0b0820",
    "soft": "#f1edff",
    "warm": "#e4fff6",
    "surface": "#fffaf4",
    "muted": "#5c667a",
    "border": "rgba(7, 18, 31, 0.12)"
  },
  "metrics": [
    {
      "label": "Tickets triaged",
      "value": "47",
      "note": "sample inbox"
    },
    {
      "label": "Escalation risk",
      "value": "8",
      "note": "owner review"
    },
    {
      "label": "SLA clarity",
      "value": "97%",
      "note": "+31 pts"
    }
  ],
  "stages": [
    {
      "label": "Inbox",
      "detail": "Group tickets by product area, sentiment, urgency, and affected account type.",
      "status": "ready",
      "owner": "Support",
      "index": 1
    },
    {
      "label": "Score",
      "detail": "Apply a transparent severity model with visible reasons for each ranking.",
      "status": "active",
      "owner": "Studio",
      "index": 2
    },
    {
      "label": "Escalate",
      "detail": "Separate product, billing, and critical defects before response drafting.",
      "status": "waiting",
      "owner": "Owner",
      "index": 3
    },
    {
      "label": "Respond",
      "detail": "Package suggested response notes and next-step templates.",
      "status": "queued",
      "owner": "Ops",
      "index": 4
    }
  ],
  "workItems": [
    {
      "title": "Login issue",
      "detail": "High urgency with reproduction detail",
      "status": "ready"
    },
    {
      "title": "Billing mismatch",
      "detail": "Needs owner review before response",
      "status": "active"
    },
    {
      "title": "Feature request",
      "detail": "Waiting on roadmap label",
      "status": "waiting"
    },
    {
      "title": "How-to question",
      "detail": "Queued for template response",
      "status": "queued"
    }
  ],
  "deliverables": [
    {
      "title": "Priority model",
      "detail": "Severity reasons a human can inspect and override."
    },
    {
      "title": "Escalation board",
      "detail": "Clear separation between urgent and routine work."
    },
    {
      "title": "Response kit",
      "detail": "Draft-ready support notes without auto-sending anything."
    }
  ],
  "timeline": [
    {
      "time": "0-2 hrs",
      "detail": "Audit categories and SLA expectations"
    },
    {
      "time": "2-8 hrs",
      "detail": "Build scoring and escalation lanes"
    },
    {
      "time": "8-16 hrs",
      "detail": "QA examples and package response kit"
    }
  ],
  "proof": [
    "Good fit for support ops and AI-assist setup offers.",
    "Highlights judgment, not opaque automation.",
    "All tickets and customers are fictional."
  ]
} as const;

export type StageStatus = "ready" | "active" | "waiting" | "queued";
export type DemoStage = (typeof sample.stages)[number];
export type WorkItem = (typeof sample.workItems)[number];
