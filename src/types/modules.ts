export type IContentable = {
  type: any;
  id: number;
  module_id: number;
  url: string;
  title: string;
  should_open_new_tab: boolean;
  created_at: string;
  updated_at: string;
};

export type IContent = {
  id: number;
  content_type: "External URL";
  title: string;
  position: null;
  contentable: IContentable;
};

export type IModule = {
  id: number;
  name: string;
  position: number;
  is_published: boolean;
  published_at: string;
  image: string;
  contents: IContent[];
};

export type IModuleTypes = {
  data: IModule[];
};
