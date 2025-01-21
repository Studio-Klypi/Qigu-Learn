export const useJourneyUrl = (path: string) => `/${useRoute().params.journeyId}/${path.startsWith("/") ? path.substring(1) : path}`;
