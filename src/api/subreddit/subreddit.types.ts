export interface ISubreddit {
  kind: string;
  data: ISubredditData;
}

interface ISubredditData {
  after: string;
  dist: number;
  modhash: string;
  geo_filter: string;
  children: Array<ISubredditPost>;
}

export interface ISubredditPost {
  kind: string;
  data: {
    approved_at_utc: string | null;
    subreddit: string;
    selftext: string;
    author_fullname: string;
    saved: boolean;
    mod_reason_title: string | null;
    gilded: number;
    clicked: boolean;
    title: string;
    link_flair_richtext: ILinkFlair[];
    subreddit_name_prefixed: string;
    hidden: boolean;
    pwls: number;
    link_flair_css_class: null;
    downs: number;
    top_awarded_type: null;
    hide_score: boolean;
    name: string;
    quarantine: boolean;
    link_flair_text_color: string;
    upvote_ratio: number;
    author_flair_background_color: null;
    subreddit_type: string;
    ups: number;
    total_awards_received: number;
    media_embed: {};
    author_flair_template_id: null;
    is_original_content: boolean;
    user_reports: [];
    secure_media: null;
    is_reddit_media_domain: boolean;
    is_meta: boolean;
    category: null;
    secure_media_embed: {};
    link_flair_text: null;
    can_mod_post: boolean;
    score: number;
    approved_by: null;
    is_created_from_ads_ui: boolean;
    author_premium: boolean;
    thumbnail: '';
    edited: boolean;
    author_flair_css_class: null;
    author_flair_richtext: [];
    gildings: {};
    content_categories: null;
    is_self: boolean;
    mod_note: null;
    created: number;
    link_flair_type: string;
    wls: number;
    removed_by_category: null;
    banned_by: null;
    author_flair_type: string;
    domain: string;
    allow_live_comments: boolean;
    selftext_html: null;
    likes: null;
    suggested_sort: null;
    banned_at_utc: null;
    url_overridden_by_dest: string;
    view_count: null;
    archived: boolean;
    no_follow: boolean;
    is_crosspostable: boolean;
    pinned: boolean;
    over_18: boolean;
    all_awardings: IAwarding[];
    awarders: [];
    media_only: boolean;
    can_gild: boolean;
    spoiler: boolean;
    locked: boolean;
    author_flair_text: null;
    treatment_tags: [];
    visited: boolean;
    removed_by: null;
    num_reports: null;
    distinguished: null;
    subreddit_id: string;
    author_is_blocked: boolean;
    mod_reason_by: null;
    removal_reason: null;
    link_flair_background_color: string;
    id: string;
    is_robot_indexable: boolean;
    report_reasons: null;
    author: string;
    discussion_type: null;
    num_comments: 0;
    send_replies: boolean;
    whitelist_status: string;
    contest_mode: boolean;
    mod_reports: [];
    author_patreon_flair: boolean;
    author_flair_text_color: null;
    permalink: string;
    parent_whitelist_status: string;
    stickied: boolean;
    url: string;
    subreddit_subscribers: number;
    created_utc: number;
    num_crossposts: number;
    media: IMedia | null;
    is_video: boolean;
    preview?: {
      images: IImage[];
      enabled: boolean;
    };
  };
  gallery_data?: IGalleryData;
  media_metadata?: IMediaMetadata;
}

interface IGalleryData {
  items: {
    media_id: string;
    id: number;
  }[];
}

interface IMediaMetadata {
  [name: string]: {
    status: string;
    e: string;
    m: string;
    p: {
      x: number;
      y: number;
      u: string;
    }[];
    s: {
      x: number;
      y: number;
      u: string;
    };
    id: string;
  };
}

interface ILinkFlair {
  e: string;
  t: string;
}

interface IAwarding {
  coin_price: number;
  id: string;
  icon_url: string;
  resized_icons: IResizedAwardIcon[];
  icon_width: number;
  icon_height: number;
  is_enabled: boolean;
  description: string;
  count: number;
  name: string;
}

interface IResizedAwardIcon {
  url: string;
  width: number;
  height: number;
}

interface IImage {
  source: IImageProperties;
  resolutions: IImageProperties[];
  variants: {};
  id: string;
}
interface IImageProperties {
  url: string;
  width: number;
  height: number;
}

interface IMedia {
  type: string;
  oembed: {
    provider_url: string;
    version: string;
    title: string;
    type: string;
    thumbnail_width: number;
    height: number;
    width: number;
    html: string;
    author_name: string;
    provider_name: string;
    thumbnail_url: string;
    thumbnail_height: number;
    author_url: string;
  };
}
