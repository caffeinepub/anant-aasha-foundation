import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { useActor } from './useActor';
import type { 
  UserProfile, 
  OCRExtraction, 
  Question, 
  VisualNotebookChapter,
  Flashcard,
  SlideDeck,
  Infographic,
  LogicExplanation,
  Language,
  ApprovalStatus,
  ChapterType,
  School,
  Student
} from '../backend';
import { Principal } from '@dfinity/principal';

export function useGetCallerUserProfile() {
  const { actor, isFetching: actorFetching } = useActor();

  const query = useQuery<UserProfile | null>({
    queryKey: ['currentUserProfile'],
    queryFn: async () => {
      if (!actor) throw new Error('Actor not available');
      return actor.getCallerUserProfile();
    },
    enabled: !!actor && !actorFetching,
    retry: false,
  });

  return {
    ...query,
    isLoading: actorFetching || query.isLoading,
    isFetched: !!actor && query.isFetched,
  };
}

export function useSaveCallerUserProfile() {
  const { actor } = useActor();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (profile: UserProfile) => {
      if (!actor) throw new Error('Actor not available');
      return actor.saveCallerUserProfile(profile);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['currentUserProfile'] });
    },
  });
}

export function useGetOCRExtractionByClass(classId: bigint | null) {
  const { actor, isFetching: actorFetching } = useActor();

  return useQuery<OCRExtraction[]>({
    queryKey: ['ocrExtractions', 'class', classId?.toString()],
    queryFn: async () => {
      if (!actor || classId === null) return [];
      return actor.getOCRExtractionByClass(classId);
    },
    enabled: !!actor && !actorFetching && classId !== null,
  });
}

export function useGetOCRExtractionBySubject(subjectId: bigint | null) {
  const { actor, isFetching: actorFetching } = useActor();

  return useQuery<OCRExtraction[]>({
    queryKey: ['ocrExtractions', 'subject', subjectId?.toString()],
    queryFn: async () => {
      if (!actor || subjectId === null) return [];
      return actor.getOCRExtractionBySubject(subjectId);
    },
    enabled: !!actor && !actorFetching && subjectId !== null,
  });
}

export function useSaveOCRExtraction() {
  const { actor } = useActor();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (data: OCRExtraction) => {
      if (!actor) throw new Error('Actor not available');
      return actor.saveOCRExtraction(data);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['ocrExtractions'] });
    },
  });
}

export function useSaveQuestions() {
  const { actor } = useActor();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async ({ question, questionId }: { question: Question; questionId: bigint }) => {
      if (!actor) throw new Error('Actor not available');
      return actor.saveQuestions(question, questionId);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['questions'] });
    },
  });
}

export function useGetQuestions(questionId: bigint | null) {
  const { actor, isFetching: actorFetching } = useActor();

  return useQuery<Question[] | null>({
    queryKey: ['questions', questionId?.toString()],
    queryFn: async () => {
      if (!actor || questionId === null) return null;
      return actor.getQuestions(questionId);
    },
    enabled: !!actor && !actorFetching && questionId !== null,
  });
}

export function useGetRandomQuestions(questionId: bigint | null, count: bigint) {
  const { actor, isFetching: actorFetching } = useActor();

  return useQuery<Question[] | null>({
    queryKey: ['randomQuestions', questionId?.toString(), count.toString()],
    queryFn: async () => {
      if (!actor || questionId === null) return null;
      return actor.getRandomQuestions(questionId, count);
    },
    enabled: !!actor && !actorFetching && questionId !== null,
  });
}

export function useDeleteOCRData() {
  const { actor } = useActor();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (docId: bigint) => {
      if (!actor) throw new Error('Actor not available');
      return actor.deleteOCRData(docId);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['ocrExtractions'] });
      queryClient.invalidateQueries({ queryKey: ['questions'] });
    },
  });
}

export function useGetVisualNotebookChapters() {
  const { actor, isFetching: actorFetching } = useActor();

  return useQuery<VisualNotebookChapter[]>({
    queryKey: ['visualNotebookChapters'],
    queryFn: async () => {
      if (!actor) return [];
      return actor.getVisualNotebookChapters();
    },
    enabled: !!actor && !actorFetching,
  });
}

export function useGetVisualNotebookChapter(chapterId: bigint | null) {
  const { actor, isFetching: actorFetching } = useActor();

  return useQuery<VisualNotebookChapter | null>({
    queryKey: ['visualNotebookChapter', chapterId?.toString()],
    queryFn: async () => {
      if (!actor || chapterId === null) return null;
      return actor.getVisualNotebookChapter(chapterId);
    },
    enabled: !!actor && !actorFetching && chapterId !== null,
  });
}

export function useGetChaptersByClassAndSubject(classLevel: bigint | null, subject: string | null) {
  const { actor, isFetching: actorFetching } = useActor();

  return useQuery<VisualNotebookChapter[]>({
    queryKey: ['visualNotebookChapters', 'class', classLevel?.toString(), 'subject', subject],
    queryFn: async () => {
      if (!actor || classLevel === null || !subject) return [];
      return actor.getChaptersByClassAndSubject(classLevel, subject);
    },
    enabled: !!actor && !actorFetching && classLevel !== null && !!subject,
  });
}

export function useSubmitVisualNotebookChapter() {
  const { actor } = useActor();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (params: {
      id: bigint;
      title: string;
      subject: string;
      classLevel: bigint;
      flashcards: Flashcard[];
      slideDeck: SlideDeck;
      infographics: Infographic[];
      logicExplanations: LogicExplanation[];
      uploadedBy: string;
      contentLanguage: Language;
      extractionId: bigint;
      chapterType: ChapterType;
      approvalStatus: ApprovalStatus;
    }) => {
      if (!actor) throw new Error('Actor not available');
      return actor.submitVisualNotebookChapter(
        params.id,
        params.title,
        params.subject,
        params.classLevel,
        params.flashcards,
        params.slideDeck,
        params.infographics,
        params.logicExplanations,
        params.uploadedBy,
        params.contentLanguage,
        params.extractionId,
        params.chapterType,
        params.approvalStatus
      );
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['visualNotebookChapters'] });
    },
  });
}

export function useSaveVisualNotebookChapter() {
  const { actor } = useActor();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (notebook: VisualNotebookChapter) => {
      if (!actor) throw new Error('Actor not available');
      return actor.saveVisualNotebookChapter(notebook);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['visualNotebookChapters'] });
    },
  });
}

export function useSetVisualNotebookApprovalStatus() {
  const { actor } = useActor();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async ({ chapterId, status }: { chapterId: bigint; status: ApprovalStatus }) => {
      if (!actor) throw new Error('Actor not available');
      return actor.setVisualNotebookApprovalStatus(chapterId, status);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['visualNotebookChapters'] });
    },
  });
}

export function useDeleteVisualNotebookChapter() {
  const { actor } = useActor();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (chapterId: bigint) => {
      if (!actor) throw new Error('Actor not available');
      return actor.deleteVisualNotebookChapter(chapterId);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['visualNotebookChapters'] });
    },
  });
}

export function useGetVisualNotebookChaptersByExtractedId(extractionId: bigint | null) {
  const { actor, isFetching: actorFetching } = useActor();

  return useQuery<VisualNotebookChapter[]>({
    queryKey: ['visualNotebookChapters', 'extraction', extractionId?.toString()],
    queryFn: async () => {
      if (!actor || extractionId === null) return [];
      return actor.getVisualNotebookChaptersByExtractedId(extractionId);
    },
    enabled: !!actor && !actorFetching && extractionId !== null,
  });
}

export function useGetSchoolByExactName(schoolName: string | null) {
  const { actor, isFetching: actorFetching } = useActor();

  return useQuery<School | null>({
    queryKey: ['school', 'exactName', schoolName],
    queryFn: async () => {
      if (!actor || !schoolName || schoolName.trim() === '') return null;
      return actor.getSchoolByExactName(schoolName);
    },
    enabled: !!actor && !actorFetching && !!schoolName && schoolName.trim() !== '',
  });
}

export function useRegisterStudentWithSchoolName() {
  const { actor } = useActor();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (params: {
      student: Student;
      studentPrincipal: Principal;
      schoolName: string;
    }) => {
      if (!actor) throw new Error('Actor not available');
      return actor.registerStudentWithSchoolName(
        params.student,
        params.studentPrincipal,
        params.schoolName
      );
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['students'] });
    },
  });
}
