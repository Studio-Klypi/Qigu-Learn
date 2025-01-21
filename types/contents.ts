export type TLinkType = "external" | "internal";

export interface IContent {
  name: string;
  duration?: number;
  design: {
    picture?: string;
  };
  progression: {
    done: boolean;
    viewed: boolean;
  };
  content: string;
  link?: IContentLink[];
}
export interface IContentLink {
  label: string;
  url: string;
  type: TLinkType;
}
