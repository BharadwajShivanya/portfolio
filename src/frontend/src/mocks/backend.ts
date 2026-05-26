import type { backendInterface, Publication, Research, GalleryImage, TimelineEntry, ContactMessage } from "../backend.d";
import { PublicationType, ResearchType, TimelineCategory } from "../backend.d";

const samplePublications: Publication[] = [
  {
    id: BigInt(1),
    title: "Economic Development in Post-Colonial India",
    description: "A comprehensive study of India's economic transformation from 1947 to the present, examining policy reforms, industrialization, and rural development.",
    coverImageUrl: "https://via.placeholder.com/300x400/1a2744/f5f0e8?text=Publication",
    isbn: "978-0-123-45678-9",
    publisher: "Oxford University Press",
    year: BigInt(2018),
    pubType: PublicationType.book,
    purchaseLink: "https://example.com/book1",
  },
  {
    id: BigInt(2),
    title: "Agrarian Reforms and Social Change",
    description: "An analysis of land reform policies and their socio-economic impact on rural communities across South Asia.",
    coverImageUrl: "https://via.placeholder.com/300x400/1a2744/f5f0e8?text=Publication",
    isbn: "978-0-987-65432-1",
    publisher: "Cambridge University Press",
    year: BigInt(2014),
    pubType: PublicationType.book,
    purchaseLink: "https://example.com/book2",
  },
  {
    id: BigInt(3),
    title: "Fiscal Policy and Economic Growth",
    description: "Examining the relationship between government fiscal interventions and long-term economic growth trajectories in developing nations.",
    coverImageUrl: "https://via.placeholder.com/300x400/1a2744/f5f0e8?text=Publication",
    isbn: "978-0-555-12345-6",
    publisher: "Routledge",
    year: BigInt(2020),
    pubType: PublicationType.paper,
    purchaseLink: "https://example.com/book3",
  },
];

const sampleResearch: Research[] = [
  {
    id: BigInt(1),
    title: "The Role of Microfinance in Rural Poverty Alleviation",
    abstract: "This paper examines the effectiveness of microfinance institutions in reducing poverty levels across rural India, using a panel data analysis spanning two decades.",
    venue: "Journal of Development Economics",
    year: BigInt(2021),
    resType: ResearchType.paper,
    pdfUrl: "https://example.com/paper1.pdf",
    coAuthors: ["Dr. Priya Mehta", "Prof. Ramesh Kumar"],
  },
  {
    id: BigInt(2),
    title: "Digital Transformation and Financial Inclusion",
    abstract: "An exploratory study on how digital financial services have expanded access to banking and credit for underserved populations in emerging economies.",
    venue: "World Development Journal",
    year: BigInt(2022),
    resType: ResearchType.article,
    pdfUrl: "https://example.com/paper2.pdf",
    coAuthors: ["Dr. Anita Sharma"],
  },
];

const sampleGalleryImages: GalleryImage[] = [
  {
    id: BigInt(1),
    imageUrl: "https://via.placeholder.com/600x400/1a2744/f5f0e8?text=Conference+2022",
    caption: "Keynote address at the International Economics Conference",
    eventName: "International Economics Conference 2022",
    year: BigInt(2022),
  },
  {
    id: BigInt(2),
    imageUrl: "https://via.placeholder.com/600x400/2d3748/f5f0e8?text=Award+Ceremony",
    caption: "Receiving the Distinguished Scholar Award",
    eventName: "Annual Academic Awards Ceremony 2021",
    year: BigInt(2021),
  },
  {
    id: BigInt(3),
    imageUrl: "https://via.placeholder.com/600x400/4a5568/f5f0e8?text=Research+Symposium",
    caption: "Panel discussion on sustainable development goals",
    eventName: "Research Symposium on Development Economics 2020",
    year: BigInt(2020),
  },
  {
    id: BigInt(4),
    imageUrl: "https://via.placeholder.com/600x400/1a2744/f5f0e8?text=Workshop+2019",
    caption: "Facilitating a graduate research workshop",
    eventName: "Graduate Research Workshop 2019",
    year: BigInt(2019),
  },
];

const sampleTimeline: TimelineEntry[] = [
  {
    id: BigInt(1),
    title: "Appointed Professor of Economics",
    description: "Joined the Department of Economics at the University of Delhi as a full Professor, focusing on development economics and public policy.",
    year: BigInt(2010),
    category: TimelineCategory.career,
  },
  {
    id: BigInt(2),
    title: "Published 'Economic Development in Post-Colonial India'",
    description: "Landmark publication that became a standard reference text in graduate economics programs across South Asia.",
    year: BigInt(2018),
    category: TimelineCategory.publication,
  },
  {
    id: BigInt(3),
    title: "Distinguished Scholar Award",
    description: "Honored with the Distinguished Scholar Award by the Indian Council of Social Science Research for contributions to development economics.",
    year: BigInt(2019),
    category: TimelineCategory.award,
  },
  {
    id: BigInt(4),
    title: "Senior Research Fellow",
    description: "Appointed as Senior Research Fellow at the Institute of Economic Growth, leading research on fiscal policy and rural development.",
    year: BigInt(2005),
    category: TimelineCategory.career,
  },
  {
    id: BigInt(5),
    title: "Ph.D. in Economics",
    description: "Completed doctoral research at Jawaharlal Nehru University on agrarian transformation in post-independence India.",
    year: BigInt(1992),
    category: TimelineCategory.career,
  },
];

export const mockBackend: backendInterface = {
  addGalleryImage: async (input) => ({ id: BigInt(Date.now()), ...input }),
  addPublication: async (input) => ({ id: BigInt(Date.now()), ...input }),
  addResearch: async (input) => ({ id: BigInt(Date.now()), ...input }),
  addTimelineEntry: async (input) => ({ id: BigInt(Date.now()), ...input }),
  deleteContactMessage: async () => true,
  deleteGalleryImage: async () => true,
  deletePublication: async () => true,
  deleteResearch: async () => true,
  deleteTimelineEntry: async () => true,
  getGalleryImage: async (id) => sampleGalleryImages.find((g) => g.id === id) ?? null,
  getPublication: async (id) => samplePublications.find((p) => p.id === id) ?? null,
  getResearch: async (id) => sampleResearch.find((r) => r.id === id) ?? null,
  getTimelineEntry: async (id) => sampleTimeline.find((t) => t.id === id) ?? null,
  listContactMessages: async () => [],
  listGalleryImages: async () => sampleGalleryImages,
  listPublications: async () => samplePublications,
  listResearch: async () => sampleResearch,
  listTimelineEntries: async () => sampleTimeline,
  submitContactMessage: async (input) => ({
    id: BigInt(Date.now()),
    ...input,
    timestamp: BigInt(Date.now()),
  }),
  updateGalleryImage: async (id, input) => ({ id, ...input }),
  updatePublication: async (id, input) => ({ id, ...input }),
  updateResearch: async (id, input) => ({ id, ...input }),
  updateTimelineEntry: async (id, input) => ({ id, ...input }),
};
