export interface ISubreddit {
  kind: string;
  data: {
    after: string | null;
    dist: number;
    modhash: string;
    geo_filter: string;
    children: ISubredditData[];
    before: string | null;
  };
}

export interface ISubredditData {
  kind: string;
  data: {
    id: string;
    icon_img: string;
    url: string;
    primary_color: string;
    display_name: string;
    display_name_prefixed: string;
    title: string;
  };
}
