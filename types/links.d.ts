export interface LinkInterface {
  id: number;
  user_id: string;
  url: string;
  type: string;
  created_at?: string;
}

export interface ItemInterface {
  id: number;
  name: string;
  selected?: boolean;
  path: string;
}
