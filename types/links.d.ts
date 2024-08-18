export interface LinkInterface {
  id: number;
  url: string;
  type: string;
  profile_id: string;
  created_at?: string;
}

export interface ProfileInterface {
  id: string;
  display_name: string;
  email: string;
  links: LinkInterface[];
  created_at: string;
}

export interface ItemInterface {
  id: number;
  name: string;
  selected?: boolean;
  path: string;
}
