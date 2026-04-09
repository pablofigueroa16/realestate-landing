import { NearbyPlace } from "@/data/properties";

export function emptyProperty() {
  return {
    id: "",
    slug: "",
    hero: { title: "", subtitle: "", description: "", badges: [] as string[], bgImage: "", bgVideo: "" },
    summary: { title: "", text: "" },
    concept: { title: "", text: "" },
    community: { title: "", text: "" },
    privacy: { title: "", text: "" },
    views: { title: "", text: "" },
    design: { title: "", text: "" },
    location: {
      title: "",
      intro: "",
      nearby: [] as (string | NearbyPlace)[],
      latitude: undefined as number | undefined,
      longitude: undefined as number | undefined,
    },
    project: { title: "", text: "" },
    subCommunities: [{ title: "", text: "" }],
    amenities: { title: "", intro: "", categories: [{ name: "", items: [""] }] },
    developer: { title: "", intro: "", bullets: [""] },
    faq: [{ question: "", answer: "" }],
    disclaimers: { renders: "", availability: "" },
    images: [] as string[],
    description: "",
    size: "",
  };
}

export type PropertyDraft = ReturnType<typeof emptyProperty>;
