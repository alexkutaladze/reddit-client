import { ISubreddit } from '../subreddit/subreddit.types';

interface ICommentObject {
  kind: string;
  data: {
    after: string | null;
    before: string | null;
    children: Array<IComment>;
    modhash: string;
    geo_filter: string;
  };
}

export interface IComment {
  kind: string;
  data: {
    subreddit_id: string;
    approved_at_utc: string | null;
    author_is_blocked: false;
    comment_type: null;
    awarders: [];
    mod_reason_by: null;
    banned_by: null;
    author_flair_type: string;
    total_awards_received: number;
    subreddit: string;
    author_flair_template_id: null;
    likes: null;
    replies: ICommentObject;
    user_reports: [];
    saved: boolean;
    id: string;
    banned_at_utc: string | null;
    mod_reason_title: string;
    gilded: number;
    archived: boolean;
    collapsed_reason_code: null;
    no_follow: boolean;
    author: string;
    created_utc: number;
    send_replies: boolean;
    parent_id: string;
    all_awardings: [];
    collapsed: boolean;
    body: string;
    edited: boolean;
    top_awarded_type: null;
    is_submitter: boolean;
    downs: number;
    body_html: string;
    removal_reason: string | null;
    stickied: false;
    permalink: string;
    locked: boolean;
    created: number;
    controversility: number;
    score: number;
    depth: number;
    ups: number;
  };
}

export type IPostComments = [ISubreddit, ICommentObject];
