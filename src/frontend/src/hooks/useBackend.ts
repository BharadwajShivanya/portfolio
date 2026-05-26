import { createActor } from "@/backend";
import type {
  ContactFormData,
  GalleryImage,
  Publication,
  Research,
  TimelineEntry,
} from "@/types";
import { useActor } from "@caffeineai/core-infrastructure";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

function useActorBase() {
  return useActor(createActor);
}

export function usePublications() {
  const { actor, isFetching } = useActorBase();
  return useQuery<Publication[]>({
    queryKey: ["publications"],
    queryFn: async () => {
      if (!actor) return [];
      const result = await actor.listPublications();
      return result as unknown as Publication[];
    },
    enabled: !!actor && !isFetching,
  });
}

export function useResearch() {
  const { actor, isFetching } = useActorBase();
  return useQuery<Research[]>({
    queryKey: ["research"],
    queryFn: async () => {
      if (!actor) return [];
      const result = await actor.listResearch();
      return result as unknown as Research[];
    },
    enabled: !!actor && !isFetching,
  });
}

export function useTimeline() {
  const { actor, isFetching } = useActorBase();
  return useQuery<TimelineEntry[]>({
    queryKey: ["timeline"],
    queryFn: async () => {
      if (!actor) return [];
      const result = await actor.listTimelineEntries();
      return result as unknown as TimelineEntry[];
    },
    enabled: !!actor && !isFetching,
  });
}

export function useGallery() {
  const { actor, isFetching } = useActorBase();
  return useQuery<GalleryImage[]>({
    queryKey: ["gallery"],
    queryFn: async () => {
      if (!actor) return [];
      const result = await actor.listGalleryImages();
      return result as unknown as GalleryImage[];
    },
    enabled: !!actor && !isFetching,
  });
}

export function useSubmitContact() {
  const { actor } = useActorBase();
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (data: ContactFormData) => {
      if (!actor) throw new Error("Actor not ready");
      return actor.submitContactMessage({
        name: data.name,
        email: data.email,
        subject: data.subject,
        message: data.message,
      }) as unknown as ReturnType<typeof actor.submitContactMessage>;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["contactMessages"] });
    },
  });
}
