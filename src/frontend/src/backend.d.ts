import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export interface ResearchInput {
    title: string;
    venue: string;
    year: bigint;
    resType: ResearchType;
    pdfUrl: Url;
    abstract: string;
    coAuthors: Array<string>;
}
export type Timestamp = bigint;
export interface PublicationInput {
    coverImageUrl: Url;
    title: string;
    purchaseLink: Url;
    isbn: string;
    publisher: string;
    year: bigint;
    description: string;
    pubType: PublicationType;
}
export interface TimelineEntry {
    id: bigint;
    title: string;
    year: bigint;
    description: string;
    category: TimelineCategory;
}
export type Url = string;
export interface ContactMessage {
    id: bigint;
    subject: string;
    name: string;
    email: string;
    message: string;
    timestamp: Timestamp;
}
export interface ContactMessageInput {
    subject: string;
    name: string;
    email: string;
    message: string;
}
export interface GalleryImage {
    id: bigint;
    year: bigint;
    imageUrl: Url;
    caption: string;
    eventName: string;
}
export interface Publication {
    id: bigint;
    coverImageUrl: Url;
    title: string;
    purchaseLink: Url;
    isbn: string;
    publisher: string;
    year: bigint;
    description: string;
    pubType: PublicationType;
}
export interface Research {
    id: bigint;
    title: string;
    venue: string;
    year: bigint;
    resType: ResearchType;
    pdfUrl: Url;
    abstract: string;
    coAuthors: Array<string>;
}
export interface GalleryImageInput {
    year: bigint;
    imageUrl: Url;
    caption: string;
    eventName: string;
}
export interface TimelineEntryInput {
    title: string;
    year: bigint;
    description: string;
    category: TimelineCategory;
}
export enum PublicationType {
    book = "book",
    paper = "paper"
}
export enum ResearchType {
    article = "article",
    paper = "paper"
}
export enum TimelineCategory {
    award = "award",
    career = "career",
    publication = "publication"
}
export interface backendInterface {
    addGalleryImage(input: GalleryImageInput): Promise<GalleryImage>;
    addPublication(input: PublicationInput): Promise<Publication>;
    addResearch(input: ResearchInput): Promise<Research>;
    addTimelineEntry(input: TimelineEntryInput): Promise<TimelineEntry>;
    deleteContactMessage(id: bigint): Promise<boolean>;
    deleteGalleryImage(id: bigint): Promise<boolean>;
    deletePublication(id: bigint): Promise<boolean>;
    deleteResearch(id: bigint): Promise<boolean>;
    deleteTimelineEntry(id: bigint): Promise<boolean>;
    getGalleryImage(id: bigint): Promise<GalleryImage | null>;
    getPublication(id: bigint): Promise<Publication | null>;
    getResearch(id: bigint): Promise<Research | null>;
    getTimelineEntry(id: bigint): Promise<TimelineEntry | null>;
    listContactMessages(): Promise<Array<ContactMessage>>;
    listGalleryImages(): Promise<Array<GalleryImage>>;
    listPublications(): Promise<Array<Publication>>;
    listResearch(): Promise<Array<Research>>;
    listTimelineEntries(): Promise<Array<TimelineEntry>>;
    submitContactMessage(input: ContactMessageInput): Promise<ContactMessage>;
    updateGalleryImage(id: bigint, input: GalleryImageInput): Promise<GalleryImage | null>;
    updatePublication(id: bigint, input: PublicationInput): Promise<Publication | null>;
    updateResearch(id: bigint, input: ResearchInput): Promise<Research | null>;
    updateTimelineEntry(id: bigint, input: TimelineEntryInput): Promise<TimelineEntry | null>;
}
