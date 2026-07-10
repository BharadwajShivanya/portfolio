import type { backendInterface, Publication, Research, GalleryImage, TimelineEntry, ContactMessage } from "../backend.d";
import { PublicationType, ResearchType, TimelineCategory } from "../backend.d";

const samplePublications: Publication[] = [
  {
    id: BigInt(1),
    title: "Antarctica: Geopolitics and Resources",
    description: "Perhaps the first book written by an Indian Geographer on Antarctica. Explores boundary issues, geographic coordinates, and political frameworks.",
    coverImageUrl: "https://via.placeholder.com/300x400/1a2744/f5f0e8?text=Antarctica+Book",
    isbn: "978-8121002851",
    publisher: "Inter-India Publications",
    year: BigInt(1992),
    pubType: PublicationType.book,
    purchaseLink: "https://www.amazon.com/Antarctica-Geopolitics-Ishwar-Chandra-Sharma/dp/8121002850/ref=sr_1_1?dib=eyJ2IjoiMSJ9.GJQqAbAoVcG-GWa0cstE2_PqFMjKQPs3rBe0e3kYyYH7Mq2ehIsZpj5GrhqPu28-36EfBQBeAHy-Jcs4tk0545kCabrrWnEk39oqXTpYMkN8TPoHlX2tNLNy5E5ALp-f9ktsH_lt6K_IsHIewCUvWaNH3w_V-okZ3WPg0ZINeejP9madc_7wrq1qhFDc76v4sPpSxBtoxtrVx1sNFU23Arao0uiU_yKrxuqdTX6MqIA.s1ba3iMsuAI3RYlcIPCB3PS0Egkqxfh1GQ6ePKeaJHg&dib_tag=se&keywords=Antarctica+Geopolitics+and+Resources+Sharma&qid=1783684622&sr=8-1",
  },
  {
    id: BigInt(2),
    title: "Social Forestry in the Pin-Dar Valley",
    description: "A well-researched study on the environmental, geographical, and community forestry aspects of the Pindari Valley region.",
    coverImageUrl: "https://via.placeholder.com/300x400/1a2744/f5f0e8?text=Pin-Dar+Forestry",
    isbn: "N/A",
    publisher: "Indian Journal of Forestry",
    year: BigInt(1983),
    pubType: PublicationType.paper,
    purchaseLink: "https://example.com/social-forestry-pindar",
  },
];

const sampleResearch: Research[] = [
  {
    id: BigInt(1),
    title: "Glacier Acclimatisation and Physical Geomorphology in Sonemarg",
    abstract: "This study documents field observations and metabolic adjustment challenges encountered during the high-altitude Pre-Antarctic acclimatisation courses.",
    venue: "HAWS Bulletin of Mountain Medicine & Geography",
    year: BigInt(1985),
    resType: ResearchType.paper,
    pdfUrl: "https://example.com/haws-acclimatisation.pdf",
    coAuthors: ["Col. R. Singh", "Dr. M. Prasad"],
  },
  {
    id: BigInt(2),
    title: "Community Ecology and Social Forestry in Uttarakhand Valleys",
    abstract: "An assessment of vegetation cover mapping and rural community forestry models in high-altitude tributaries of the Ganges basin.",
    venue: "Himalayan Journal of Environmental Science",
    year: BigInt(1984),
    resType: ResearchType.article,
    pdfUrl: "https://example.com/social-forestry-study.pdf",
    coAuthors: ["Dr. Anita Sharma"],
  },
];

const sampleGalleryImages: GalleryImage[] = [
  {
    id: BigInt(1),
    imageUrl: "https://via.placeholder.com/600x400/1a2744/f5f0e8?text=Gulmarg+1984",
    caption: "Acclimatisation training course at Machhoi glacier",
    eventName: "HAWS Pre-Antarctic Acclimatisation Training",
    year: BigInt(1984),
  },
  {
    id: BigInt(2),
    imageUrl: "https://via.placeholder.com/600x400/2d3748/f5f0e8?text=Uttarakhand+Honor",
    caption: "Receiving the state academic award in Uttarakhand",
    eventName: "Uttarakhand State Felicitations",
    year: BigInt(2024),
  },
  {
    id: BigInt(3),
    imageUrl: "https://via.placeholder.com/600x400/4a5568/f5f0e8?text=Indian+Military+Academy",
    caption: "Lecturing at the Army Cadet College Wing",
    eventName: "IMA Academic Seminar Series",
    year: BigInt(2023),
  },
];

const sampleTimeline: TimelineEntry[] = [
  {
    id: BigInt(1),
    title: "Head of Geography Department, Army Cadet College",
    description: "Presently serving as the Head of the Geography Department at the Army Cadet College Wing of the Indian Military Academy (IMA), Dehradun, affiliated to JNU.",
    year: BigInt(2025),
    category: TimelineCategory.career,
  },
  {
    id: BigInt(2),
    title: "Uttarakhand Recipient Honor",
    description: "Felicitated for decades of academic leadership and state geographic contributions.",
    year: BigInt(2024),
    category: TimelineCategory.award,
  },
  {
    id: BigInt(3),
    title: "Conferred Doctoral Degree",
    description: "Awarded PhD in Geography for advanced studies in geographical structures.",
    year: BigInt(2020),
    category: TimelineCategory.career,
  },
  {
    id: BigInt(4),
    title: "Publication of 'Antarctica: Geopolitics and Resources'",
    description: "Published a landmark book, perhaps the first comprehensive monograph on Antarctica by an Indian geographer.",
    year: BigInt(1992),
    category: TimelineCategory.publication,
  },
  {
    id: BigInt(5),
    title: "Pre-Antarctic Acclimatisation Course",
    description: "Completed specialised acclimatisation training at Sonemarg and Machhoi glacier under HAWS, Gulmarg.",
    year: BigInt(1984),
    category: TimelineCategory.career,
  },
  {
    id: BigInt(6),
    title: "SOCIAL FORESTRY IN THE PIN-DAR VALLEY",
    description: "Published the widely noted study in the Indian Journal of Forestry, drawing international attention.",
    year: BigInt(1983),
    category: TimelineCategory.publication,
  },
  {
    id: BigInt(7),
    title: "31+ Years of Academic Teaching",
    description: "Teaching tenure serving as a lecturer at N.A.S. College, Meerut, and Head of the Faculty of Geography, Military School, Belgaum.",
    year: BigInt(1965),
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
