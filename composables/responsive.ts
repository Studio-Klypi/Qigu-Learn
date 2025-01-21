export const useScreenSize = () => useState<number>("screenSize", () => 0);
export const useIsMobile = () => useState<boolean>("isMobile", () => false);
