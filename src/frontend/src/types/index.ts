export type PubType = { "#book": null } | { "#paper": null };
export type ResType = { "#paper": null } | { "#article": null };
export type TimelineCategory =
  | { "#career": null }
  | { "#publication": null }
  | { "#award": null };

export interface Publication {
  id: bigint;
  title: string;
  description: string;
  year: bigint;
  isbn: string;
  publisher: string;
  coverImageUrl: string;
  purchaseLink: string;
  pubType: PubType;
}

export interface Research {
  id: bigint;
  title: string;
  abstract_: string;
  venue: string;
  year: bigint;
  coAuthors: string[];
  pdfUrl: string;
  resType: ResType;
}

export interface TimelineEntry {
  id: bigint;
  year: bigint;
  title: string;
  description: string;
  category: TimelineCategory;
}

export interface GalleryImage {
  id: bigint;
  imageUrl: string;
  caption: string;
  eventName: string;
  year: bigint;
}

export interface ContactMessage {
  id: bigint;
  name: string;
  email: string;
  subject: string;
  message: string;
  timestamp: bigint;
}

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export function getPubTypeLabel(t: PubType): string {
  return "#book" in t ? "Book" : "Journal Paper";
}

export function getResTypeLabel(t: ResType): string {
  return "#paper" in t ? "Research Paper" : "Academic Article";
}

export function getTimelineCategoryLabel(c: TimelineCategory): string {
  if ("#career" in c) return "Career";
  if ("#publication" in c) return "Publication";
  return "Award";
}
