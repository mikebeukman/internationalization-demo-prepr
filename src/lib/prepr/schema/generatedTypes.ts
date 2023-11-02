export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  _DateTime: { input: any; output: any; }
};

/** Single About. */
export type About = Model & {
  __typename?: 'About';
  /** Count of bookmark events. */
  _bookmarks?: Maybe<Scalars['Int']['output']>;
  /** The time the content item was changed. */
  _changed_on: Scalars['String']['output'];
  /** Count of clicktrough events. */
  _clicktroughs?: Maybe<Scalars['Int']['output']>;
  /** Count of comment events. */
  _comments?: Maybe<Scalars['Int']['output']>;
  _context?: Maybe<Context>;
  /** The time the content item was created. */
  _created_on: Scalars['String']['output'];
  /** Id of your Prepr Environment. */
  _environment_id: Scalars['String']['output'];
  /** Unique identifier for each content item. */
  _id: Scalars['String']['output'];
  /** Count of like events. */
  _likes?: Maybe<Scalars['Int']['output']>;
  _locale: Scalars['String']['output'];
  _locales: Array<Scalars['String']['output']>;
  /** This field returns all localizations for this content item. */
  _localizations: Array<About>;
  /** The time for when the content item is or will be published. */
  _publish_on?: Maybe<Scalars['String']['output']>;
  /** Count of purchase events. */
  _purchases?: Maybe<Scalars['Int']['output']>;
  /** Calculated time to read in minutes. */
  _read_time?: Maybe<Scalars['Int']['output']>;
  /** Count of share events. */
  _shares?: Maybe<Scalars['Int']['output']>;
  /** Unique within Type, string identifier for each content item. */
  _slug?: Maybe<Scalars['String']['output']>;
  /** Count of subscribe events. */
  _subscribes?: Maybe<Scalars['Int']['output']>;
  /** Count of view events. */
  _views?: Maybe<Scalars['Int']['output']>;
  /** Count of vote events. */
  _votes?: Maybe<Scalars['Int']['output']>;
  content?: Maybe<Array<Maybe<_Prepr_Types>>>;
  cover?: Maybe<Asset>;
  title?: Maybe<Scalars['String']['output']>;
};

/** This union type holds all content models. */
export type AllModels = About | AppConfig | Article | CallToAction | Category | LiveEvent | MenuItem | Navigation | Page | Person;

/** Single AppConfig. */
export type AppConfig = Model & {
  __typename?: 'AppConfig';
  /** Count of bookmark events. */
  _bookmarks?: Maybe<Scalars['Int']['output']>;
  /** The time the content item was changed. */
  _changed_on: Scalars['String']['output'];
  /** Count of clicktrough events. */
  _clicktroughs?: Maybe<Scalars['Int']['output']>;
  /** Count of comment events. */
  _comments?: Maybe<Scalars['Int']['output']>;
  _context?: Maybe<Context>;
  /** The time the content item was created. */
  _created_on: Scalars['String']['output'];
  /** Id of your Prepr Environment. */
  _environment_id: Scalars['String']['output'];
  /** Unique identifier for each content item. */
  _id: Scalars['String']['output'];
  /** Count of like events. */
  _likes?: Maybe<Scalars['Int']['output']>;
  _locale: Scalars['String']['output'];
  _locales: Array<Scalars['String']['output']>;
  /** This field returns all localizations for this content item. */
  _localizations: Array<AppConfig>;
  /** The time for when the content item is or will be published. */
  _publish_on?: Maybe<Scalars['String']['output']>;
  /** Count of purchase events. */
  _purchases?: Maybe<Scalars['Int']['output']>;
  /** Calculated time to read in minutes. */
  _read_time?: Maybe<Scalars['Int']['output']>;
  /** Count of share events. */
  _shares?: Maybe<Scalars['Int']['output']>;
  /** Unique within Type, string identifier for each content item. */
  _slug?: Maybe<Scalars['String']['output']>;
  /** Count of subscribe events. */
  _subscribes?: Maybe<Scalars['Int']['output']>;
  /** Count of view events. */
  _views?: Maybe<Scalars['Int']['output']>;
  /** Count of vote events. */
  _votes?: Maybe<Scalars['Int']['output']>;
  app_description?: Maybe<Scalars['String']['output']>;
  app_name?: Maybe<Scalars['String']['output']>;
  company_contact_info?: Maybe<Scalars['String']['output']>;
  copyright_info?: Maybe<Scalars['String']['output']>;
};

export type ApplePodcast = {
  __typename?: 'ApplePodcast';
  _id: Scalars['String']['output'];
  url: Scalars['String']['output'];
};

/** Single Article. */
export type Article = Model & {
  __typename?: 'Article';
  /** Count of bookmark events. */
  _bookmarks?: Maybe<Scalars['Int']['output']>;
  /** The time the content item was changed. */
  _changed_on: Scalars['String']['output'];
  /** Count of clicktrough events. */
  _clicktroughs?: Maybe<Scalars['Int']['output']>;
  /** Count of comment events. */
  _comments?: Maybe<Scalars['Int']['output']>;
  _context?: Maybe<Context>;
  /** The time the content item was created. */
  _created_on: Scalars['String']['output'];
  /** Id of your Prepr Environment. */
  _environment_id: Scalars['String']['output'];
  /** Unique identifier for each content item. */
  _id: Scalars['String']['output'];
  /** Count of like events. */
  _likes?: Maybe<Scalars['Int']['output']>;
  _locale: Scalars['String']['output'];
  _locales: Array<Scalars['String']['output']>;
  /** This field returns all localizations for this content item. */
  _localizations: Array<Article>;
  /** The time for when the content item is or will be published. */
  _publish_on?: Maybe<Scalars['String']['output']>;
  /** Count of purchase events. */
  _purchases?: Maybe<Scalars['Int']['output']>;
  /** Calculated time to read in minutes. */
  _read_time?: Maybe<Scalars['Int']['output']>;
  /** Count of share events. */
  _shares?: Maybe<Scalars['Int']['output']>;
  /** Unique within Type, string identifier for each content item. */
  _slug?: Maybe<Scalars['String']['output']>;
  /** Count of subscribe events. */
  _subscribes?: Maybe<Scalars['Int']['output']>;
  /** Count of view events. */
  _views?: Maybe<Scalars['Int']['output']>;
  /** Count of vote events. */
  _votes?: Maybe<Scalars['Int']['output']>;
  authors: Array<Person>;
  categories: Array<Category>;
  content?: Maybe<Array<Maybe<_Prepr_Types>>>;
  cover?: Maybe<Array<Maybe<Asset>>>;
  excerpt?: Maybe<Scalars['String']['output']>;
  seo?: Maybe<Seo>;
  title?: Maybe<Scalars['String']['output']>;
};

/** ArticleCollection component. */
export type ArticleCollection = Component & {
  __typename?: 'ArticleCollection';
  _context?: Maybe<Context>;
  _id: Scalars['String']['output'];
  articles: Array<Article>;
  cta_label?: Maybe<Scalars['String']['output']>;
  cta_url?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  heading?: Maybe<Scalars['String']['output']>;
};

export enum ArticleSortInput {
  ChangedOn = 'changed_on',
  ChangedOnAsc = 'changed_on_ASC',
  ChangedOnDesc = 'changed_on_DESC',
  CreatedOn = 'created_on',
  CreatedOnAsc = 'created_on_ASC',
  CreatedOnDesc = 'created_on_DESC',
  ExcerptAsc = 'excerpt_ASC',
  ExcerptDesc = 'excerpt_DESC',
  PublishOn = 'publish_on',
  PublishOnAsc = 'publish_on_ASC',
  PublishOnDesc = 'publish_on_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

export type ArticleWhereInput = {
  _changed_on_gt?: InputMaybe<Scalars['_DateTime']['input']>;
  _changed_on_lt?: InputMaybe<Scalars['_DateTime']['input']>;
  _created_on_gt?: InputMaybe<Scalars['_DateTime']['input']>;
  _created_on_lt?: InputMaybe<Scalars['_DateTime']['input']>;
  /** Matches if the Id field is equal to one of the items in the given list. */
  _id_any?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Matches if the Id field is not equal to one of the items in the given list. */
  _id_nany?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** The `_or` filter returns a filter value if at least one of the clause in the _or is true. This beta filter currently supports the `Id`, `Slug`, `Created On`, `Changed On, `Published On`, `Text`, `Integer`, `Float` and `DateTime` field types. */
  _or?: InputMaybe<Array<ArticleWhereInput>>;
  _publish_on_gt?: InputMaybe<Scalars['_DateTime']['input']>;
  _publish_on_lt?: InputMaybe<Scalars['_DateTime']['input']>;
  /** Matches any content item containing the given text term (full-text search). */
  _search?: InputMaybe<Scalars['String']['input']>;
  _search_options?: InputMaybe<SearchOptionsInput>;
  _slug_any?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  _slug_nany?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Matches any content item tagged with all items from the given list. */
  _tags_all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Matches any content item tagged with at least one item from the given list. */
  _tags_any?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Matches any content item that is tagged. */
  _tags_has?: InputMaybe<Scalars['Boolean']['input']>;
  /** Matches any content item not tagged with an item from the given list. */
  _tags_nany?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  authors?: InputMaybe<PersonWhereInput>;
  categories?: InputMaybe<CategoryWhereInput>;
  /** Matches if the field is equal to the given value. */
  excerpt?: InputMaybe<Scalars['String']['input']>;
  /** Full fuzzy text search, not case sensitive. */
  excerpt_contains?: InputMaybe<Scalars['String']['input']>;
  /** Matches if the field ends with the given value. */
  excerpt_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** Excludes with full fuzzy text search, not case sensitive. */
  excerpt_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** Matches if the field starts with the given value. */
  excerpt_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** Matches if the field is equal to the given value. */
  title?: InputMaybe<Scalars['String']['input']>;
  /** Full fuzzy text search, not case sensitive. */
  title_contains?: InputMaybe<Scalars['String']['input']>;
  /** Matches if the field ends with the given value. */
  title_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** Excludes with full fuzzy text search, not case sensitive. */
  title_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** Matches if the field starts with the given value. */
  title_starts_with?: InputMaybe<Scalars['String']['input']>;
};

/** List of Articles items. */
export type Articles = {
  __typename?: 'Articles';
  items: Array<Article>;
  total: Scalars['Int']['output'];
};

/** Prepr Asset model. */
export type Asset = {
  __typename?: 'Asset';
  /** Unique identifier for each asset. */
  _id: Scalars['String']['output'];
  _type: Scalars['String']['output'];
  alignment?: Maybe<AssetAlignment>;
  author?: Maybe<Scalars['String']['output']>;
  caption?: Maybe<Scalars['String']['output']>;
  cover?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  duration?: Maybe<Scalars['Int']['output']>;
  height?: Maybe<Scalars['Int']['output']>;
  mime_type?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  original_name?: Maybe<Scalars['String']['output']>;
  /** Mux Playback ID for Audio & Video assets. */
  playback_id?: Maybe<Scalars['String']['output']>;
  url?: Maybe<Scalars['String']['output']>;
  width?: Maybe<Scalars['Int']['output']>;
};


/** Prepr Asset model. */
export type AssetCoverArgs = {
  animated?: InputMaybe<Scalars['Boolean']['input']>;
  end?: InputMaybe<Scalars['Float']['input']>;
  fit_mode?: InputMaybe<Scalars['String']['input']>;
  flip_h?: InputMaybe<Scalars['Boolean']['input']>;
  flip_v?: InputMaybe<Scalars['Boolean']['input']>;
  fps?: InputMaybe<Scalars['Int']['input']>;
  height?: InputMaybe<Scalars['Int']['input']>;
  rotate?: InputMaybe<Scalars['Int']['input']>;
  start?: InputMaybe<Scalars['Float']['input']>;
  time?: InputMaybe<Scalars['Float']['input']>;
  width?: InputMaybe<Scalars['Int']['input']>;
};


/** Prepr Asset model. */
export type AssetUrlArgs = {
  as_file?: InputMaybe<Scalars['Boolean']['input']>;
  crop?: InputMaybe<Scalars['String']['input']>;
  format?: InputMaybe<Scalars['String']['input']>;
  height?: InputMaybe<Scalars['Int']['input']>;
  preset?: InputMaybe<Scalars['String']['input']>;
  quality?: InputMaybe<Scalars['Int']['input']>;
  res?: InputMaybe<Scalars['String']['input']>;
  width?: InputMaybe<Scalars['Int']['input']>;
};

export enum AssetAlignment {
  Center = 'center',
  Left = 'left',
  Right = 'right'
}

/** Collection of assets used in a content item. */
export type Assets = {
  __typename?: 'Assets';
  _type?: Maybe<Scalars['String']['output']>;
  items?: Maybe<Array<Maybe<Asset>>>;
};

/** Single CallToAction. */
export type CallToAction = Model & {
  __typename?: 'CallToAction';
  /** Count of bookmark events. */
  _bookmarks?: Maybe<Scalars['Int']['output']>;
  /** The time the content item was changed. */
  _changed_on: Scalars['String']['output'];
  /** Count of clicktrough events. */
  _clicktroughs?: Maybe<Scalars['Int']['output']>;
  /** Count of comment events. */
  _comments?: Maybe<Scalars['Int']['output']>;
  _context?: Maybe<Context>;
  /** The time the content item was created. */
  _created_on: Scalars['String']['output'];
  /** Id of your Prepr Environment. */
  _environment_id: Scalars['String']['output'];
  /** Unique identifier for each content item. */
  _id: Scalars['String']['output'];
  /** Count of like events. */
  _likes?: Maybe<Scalars['Int']['output']>;
  _locale: Scalars['String']['output'];
  _locales: Array<Scalars['String']['output']>;
  /** This field returns all localizations for this content item. */
  _localizations: Array<CallToAction>;
  /** The time for when the content item is or will be published. */
  _publish_on?: Maybe<Scalars['String']['output']>;
  /** Count of purchase events. */
  _purchases?: Maybe<Scalars['Int']['output']>;
  /** Calculated time to read in minutes. */
  _read_time?: Maybe<Scalars['Int']['output']>;
  /** Count of share events. */
  _shares?: Maybe<Scalars['Int']['output']>;
  /** Unique within Type, string identifier for each content item. */
  _slug?: Maybe<Scalars['String']['output']>;
  /** Count of subscribe events. */
  _subscribes?: Maybe<Scalars['Int']['output']>;
  /** Count of view events. */
  _views?: Maybe<Scalars['Int']['output']>;
  /** Count of vote events. */
  _votes?: Maybe<Scalars['Int']['output']>;
  background_image?: Maybe<Array<Maybe<Asset>>>;
  cta_label?: Maybe<Scalars['String']['output']>;
  cta_url?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  heading?: Maybe<Scalars['String']['output']>;
};

export enum CallToActionSortInput {
  ChangedOn = 'changed_on',
  ChangedOnAsc = 'changed_on_ASC',
  ChangedOnDesc = 'changed_on_DESC',
  CreatedOn = 'created_on',
  CreatedOnAsc = 'created_on_ASC',
  CreatedOnDesc = 'created_on_DESC',
  CtaLabelAsc = 'cta_label_ASC',
  CtaLabelDesc = 'cta_label_DESC',
  CtaUrlAsc = 'cta_url_ASC',
  CtaUrlDesc = 'cta_url_DESC',
  DescriptionAsc = 'description_ASC',
  DescriptionDesc = 'description_DESC',
  HeadingAsc = 'heading_ASC',
  HeadingDesc = 'heading_DESC',
  PublishOn = 'publish_on',
  PublishOnAsc = 'publish_on_ASC',
  PublishOnDesc = 'publish_on_DESC'
}

export type CallToActionWhereInput = {
  _changed_on_gt?: InputMaybe<Scalars['_DateTime']['input']>;
  _changed_on_lt?: InputMaybe<Scalars['_DateTime']['input']>;
  _created_on_gt?: InputMaybe<Scalars['_DateTime']['input']>;
  _created_on_lt?: InputMaybe<Scalars['_DateTime']['input']>;
  /** Matches if the Id field is equal to one of the items in the given list. */
  _id_any?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Matches if the Id field is not equal to one of the items in the given list. */
  _id_nany?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** The `_or` filter returns a filter value if at least one of the clause in the _or is true. This beta filter currently supports the `Id`, `Slug`, `Created On`, `Changed On, `Published On`, `Text`, `Integer`, `Float` and `DateTime` field types. */
  _or?: InputMaybe<Array<CallToActionWhereInput>>;
  _publish_on_gt?: InputMaybe<Scalars['_DateTime']['input']>;
  _publish_on_lt?: InputMaybe<Scalars['_DateTime']['input']>;
  /** Matches any content item containing the given text term (full-text search). */
  _search?: InputMaybe<Scalars['String']['input']>;
  _search_options?: InputMaybe<SearchOptionsInput>;
  _slug_any?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  _slug_nany?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Matches any content item tagged with all items from the given list. */
  _tags_all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Matches any content item tagged with at least one item from the given list. */
  _tags_any?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Matches any content item that is tagged. */
  _tags_has?: InputMaybe<Scalars['Boolean']['input']>;
  /** Matches any content item not tagged with an item from the given list. */
  _tags_nany?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Matches if the field is equal to the given value. */
  cta_label?: InputMaybe<Scalars['String']['input']>;
  /** Full fuzzy text search, not case sensitive. */
  cta_label_contains?: InputMaybe<Scalars['String']['input']>;
  /** Matches if the field ends with the given value. */
  cta_label_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** Excludes with full fuzzy text search, not case sensitive. */
  cta_label_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** Matches if the field starts with the given value. */
  cta_label_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** Matches if the field is equal to the given value. */
  cta_url?: InputMaybe<Scalars['String']['input']>;
  /** Full fuzzy text search, not case sensitive. */
  cta_url_contains?: InputMaybe<Scalars['String']['input']>;
  /** Matches if the field ends with the given value. */
  cta_url_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** Excludes with full fuzzy text search, not case sensitive. */
  cta_url_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** Matches if the field starts with the given value. */
  cta_url_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** Matches if the field is equal to the given value. */
  description?: InputMaybe<Scalars['String']['input']>;
  /** Full fuzzy text search, not case sensitive. */
  description_contains?: InputMaybe<Scalars['String']['input']>;
  /** Matches if the field ends with the given value. */
  description_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** Excludes with full fuzzy text search, not case sensitive. */
  description_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** Matches if the field starts with the given value. */
  description_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** Matches if the field is equal to the given value. */
  heading?: InputMaybe<Scalars['String']['input']>;
  /** Full fuzzy text search, not case sensitive. */
  heading_contains?: InputMaybe<Scalars['String']['input']>;
  /** Matches if the field ends with the given value. */
  heading_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** Excludes with full fuzzy text search, not case sensitive. */
  heading_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** Matches if the field starts with the given value. */
  heading_starts_with?: InputMaybe<Scalars['String']['input']>;
};

/** List of CallToActions items. */
export type CallToActions = {
  __typename?: 'CallToActions';
  items: Array<CallToAction>;
  total: Scalars['Int']['output'];
};

/** List of Categories items. */
export type Categories = {
  __typename?: 'Categories';
  items: Array<Category>;
  total: Scalars['Int']['output'];
};

/** Single Category. */
export type Category = Model & {
  __typename?: 'Category';
  /** Count of bookmark events. */
  _bookmarks?: Maybe<Scalars['Int']['output']>;
  /** The time the content item was changed. */
  _changed_on: Scalars['String']['output'];
  /** Count of clicktrough events. */
  _clicktroughs?: Maybe<Scalars['Int']['output']>;
  /** Count of comment events. */
  _comments?: Maybe<Scalars['Int']['output']>;
  _context?: Maybe<Context>;
  /** The time the content item was created. */
  _created_on: Scalars['String']['output'];
  /** Id of your Prepr Environment. */
  _environment_id: Scalars['String']['output'];
  /** Unique identifier for each content item. */
  _id: Scalars['String']['output'];
  /** Count of like events. */
  _likes?: Maybe<Scalars['Int']['output']>;
  _locale: Scalars['String']['output'];
  _locales: Array<Scalars['String']['output']>;
  /** This field returns all localizations for this content item. */
  _localizations: Array<Category>;
  /** The time for when the content item is or will be published. */
  _publish_on?: Maybe<Scalars['String']['output']>;
  /** Count of purchase events. */
  _purchases?: Maybe<Scalars['Int']['output']>;
  /** Calculated time to read in minutes. */
  _read_time?: Maybe<Scalars['Int']['output']>;
  /** Count of share events. */
  _shares?: Maybe<Scalars['Int']['output']>;
  /** Unique within Type, string identifier for each content item. */
  _slug?: Maybe<Scalars['String']['output']>;
  /** Count of subscribe events. */
  _subscribes?: Maybe<Scalars['Int']['output']>;
  /** Count of view events. */
  _views?: Maybe<Scalars['Int']['output']>;
  /** Count of vote events. */
  _votes?: Maybe<Scalars['Int']['output']>;
  icon?: Maybe<Array<Maybe<Asset>>>;
  title?: Maybe<Scalars['String']['output']>;
};

export enum CategorySortInput {
  ChangedOn = 'changed_on',
  ChangedOnAsc = 'changed_on_ASC',
  ChangedOnDesc = 'changed_on_DESC',
  CreatedOn = 'created_on',
  CreatedOnAsc = 'created_on_ASC',
  CreatedOnDesc = 'created_on_DESC',
  PublishOn = 'publish_on',
  PublishOnAsc = 'publish_on_ASC',
  PublishOnDesc = 'publish_on_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

export type CategoryWhereInput = {
  _changed_on_gt?: InputMaybe<Scalars['_DateTime']['input']>;
  _changed_on_lt?: InputMaybe<Scalars['_DateTime']['input']>;
  _created_on_gt?: InputMaybe<Scalars['_DateTime']['input']>;
  _created_on_lt?: InputMaybe<Scalars['_DateTime']['input']>;
  /** Matches if the Id field is equal to one of the items in the given list. */
  _id_any?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Matches if the Id field is not equal to one of the items in the given list. */
  _id_nany?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** The `_or` filter returns a filter value if at least one of the clause in the _or is true. This beta filter currently supports the `Id`, `Slug`, `Created On`, `Changed On, `Published On`, `Text`, `Integer`, `Float` and `DateTime` field types. */
  _or?: InputMaybe<Array<CategoryWhereInput>>;
  _publish_on_gt?: InputMaybe<Scalars['_DateTime']['input']>;
  _publish_on_lt?: InputMaybe<Scalars['_DateTime']['input']>;
  /** Matches any content item containing the given text term (full-text search). */
  _search?: InputMaybe<Scalars['String']['input']>;
  _search_options?: InputMaybe<SearchOptionsInput>;
  _slug_any?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  _slug_nany?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Matches any content item tagged with all items from the given list. */
  _tags_all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Matches any content item tagged with at least one item from the given list. */
  _tags_any?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Matches any content item that is tagged. */
  _tags_has?: InputMaybe<Scalars['Boolean']['input']>;
  /** Matches any content item not tagged with an item from the given list. */
  _tags_nany?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Matches if the field is equal to the given value. */
  title?: InputMaybe<Scalars['String']['input']>;
  /** Full fuzzy text search, not case sensitive. */
  title_contains?: InputMaybe<Scalars['String']['input']>;
  /** Matches if the field ends with the given value. */
  title_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** Excludes with full fuzzy text search, not case sensitive. */
  title_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** Matches if the field starts with the given value. */
  title_starts_with?: InputMaybe<Scalars['String']['input']>;
};

/** A component is a predefined set of fields that can be used in models. You can think of a component as a flexible, reusable template where you define fields once, and then fill them with different content every time you use it. */
export type Component = {
  _context?: Maybe<Context>;
  /** Unique identifier for each content component instance. */
  _id: Scalars['String']['output'];
};

export type ContentItems = {
  __typename?: 'ContentItems';
  items?: Maybe<Array<Maybe<AllModels>>>;
  total?: Maybe<Scalars['Int']['output']>;
};

export enum ContentItemsSortInput {
  ChangedOn = 'changed_on',
  ChangedOnDesc = 'changed_on_DESC',
  CreatedOn = 'created_on',
  CreatedOnDesc = 'created_on_DESC',
  /** Sort content items by most viewed. */
  Popular = 'popular',
  PublishOn = 'publish_on',
  PublishOnDesc = 'publish_on_DESC'
}

export type ContentItemsWhereInput = {
  _channels_any?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  _customer_relation?: InputMaybe<CustomerRelationWhereInput>;
  _id_any?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  _id_nany?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  _search?: InputMaybe<Scalars['String']['input']>;
  _search_options?: InputMaybe<SearchOptionsInput>;
  _slug_any?: InputMaybe<Array<Scalars['String']['input']>>;
  _stories_any?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  _stories_nany?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  _tags_all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  _tags_any?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  _tags_has?: InputMaybe<Scalars['Boolean']['input']>;
  _tags_nany?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  _typename_any?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Context = {
  __typename?: 'Context';
  countries?: Maybe<Array<Scalars['String']['output']>>;
  group_id?: Maybe<Scalars['String']['output']>;
  kind?: Maybe<Scalars['String']['output']>;
  segments?: Maybe<Array<Scalars['String']['output']>>;
  variant_id?: Maybe<Scalars['String']['output']>;
};

/** Represents a geolocation point with latitude and longitude. */
export type Coordinates = {
  __typename?: 'Coordinates';
  _id: Scalars['String']['output'];
  _type?: Maybe<Scalars['String']['output']>;
  latitude?: Maybe<Scalars['Float']['output']>;
  longitude?: Maybe<Scalars['Float']['output']>;
};

/** The Customer Relation type is specifying the kind of relationship between the customer and your content. */
export enum CustomerRelationType {
  Bookmarked = 'BOOKMARKED',
  Clicked = 'CLICKED',
  Commented = 'COMMENTED',
  Liked = 'LIKED',
  Purchased = 'PURCHASED',
  Shared = 'SHARED',
  Subscribed = 'SUBSCRIBED',
  Viewed = 'VIEWED',
  Voted = 'VOTED'
}

export type CustomerRelationWhereInput = {
  _type?: InputMaybe<CustomerRelationType>;
  id?: InputMaybe<Scalars['String']['input']>;
  reference_id?: InputMaybe<Scalars['String']['input']>;
};

export type FacebookPost = {
  __typename?: 'FacebookPost';
  _id: Scalars['String']['output'];
  _type?: Maybe<Scalars['String']['output']>;
  url?: Maybe<Scalars['String']['output']>;
};

/** ImageAndText component. */
export type ImageAndText = Component & {
  __typename?: 'ImageAndText';
  _context?: Maybe<Context>;
  _id: Scalars['String']['output'];
  image?: Maybe<Array<Maybe<Asset>>>;
  image_position?: Maybe<Scalars['String']['output']>;
  text?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
};

export type InstagramPost = {
  __typename?: 'InstagramPost';
  _id: Scalars['String']['output'];
  _type?: Maybe<Scalars['String']['output']>;
  url?: Maybe<Scalars['String']['output']>;
};

/** Single LiveEvent. */
export type LiveEvent = Model & {
  __typename?: 'LiveEvent';
  /** Count of bookmark events. */
  _bookmarks?: Maybe<Scalars['Int']['output']>;
  /** The time the content item was changed. */
  _changed_on: Scalars['String']['output'];
  /** Count of clicktrough events. */
  _clicktroughs?: Maybe<Scalars['Int']['output']>;
  /** Count of comment events. */
  _comments?: Maybe<Scalars['Int']['output']>;
  _context?: Maybe<Context>;
  /** The time the content item was created. */
  _created_on: Scalars['String']['output'];
  /** Id of your Prepr Environment. */
  _environment_id: Scalars['String']['output'];
  /** Unique identifier for each content item. */
  _id: Scalars['String']['output'];
  /** Count of like events. */
  _likes?: Maybe<Scalars['Int']['output']>;
  _locale: Scalars['String']['output'];
  _locales: Array<Scalars['String']['output']>;
  /** This field returns all localizations for this content item. */
  _localizations: Array<LiveEvent>;
  /** The time for when the content item is or will be published. */
  _publish_on?: Maybe<Scalars['String']['output']>;
  /** Count of purchase events. */
  _purchases?: Maybe<Scalars['Int']['output']>;
  /** Calculated time to read in minutes. */
  _read_time?: Maybe<Scalars['Int']['output']>;
  /** Count of share events. */
  _shares?: Maybe<Scalars['Int']['output']>;
  /** Unique within Type, string identifier for each content item. */
  _slug?: Maybe<Scalars['String']['output']>;
  /** Count of subscribe events. */
  _subscribes?: Maybe<Scalars['Int']['output']>;
  /** Count of view events. */
  _views?: Maybe<Scalars['Int']['output']>;
  /** Count of vote events. */
  _votes?: Maybe<Scalars['Int']['output']>;
  cover?: Maybe<Array<Maybe<Asset>>>;
  heading?: Maybe<Scalars['String']['output']>;
  live_stream?: Maybe<Array<Maybe<Asset>>>;
  live_stream_intro?: Maybe<Scalars['String']['output']>;
  seo?: Maybe<Seo>;
  speakers: Array<Person>;
  start_day_and_time?: Maybe<Scalars['_DateTime']['output']>;
  title?: Maybe<Scalars['String']['output']>;
};

export enum LiveEventSortInput {
  ChangedOn = 'changed_on',
  ChangedOnAsc = 'changed_on_ASC',
  ChangedOnDesc = 'changed_on_DESC',
  CreatedOn = 'created_on',
  CreatedOnAsc = 'created_on_ASC',
  CreatedOnDesc = 'created_on_DESC',
  HeadingAsc = 'heading_ASC',
  HeadingDesc = 'heading_DESC',
  LiveStreamIntroAsc = 'live_stream_intro_ASC',
  LiveStreamIntroDesc = 'live_stream_intro_DESC',
  PublishOn = 'publish_on',
  PublishOnAsc = 'publish_on_ASC',
  PublishOnDesc = 'publish_on_DESC',
  StartDayAndTimeAsc = 'start_day_and_time_ASC',
  StartDayAndTimeDesc = 'start_day_and_time_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

export type LiveEventWhereInput = {
  _changed_on_gt?: InputMaybe<Scalars['_DateTime']['input']>;
  _changed_on_lt?: InputMaybe<Scalars['_DateTime']['input']>;
  _created_on_gt?: InputMaybe<Scalars['_DateTime']['input']>;
  _created_on_lt?: InputMaybe<Scalars['_DateTime']['input']>;
  /** Matches if the Id field is equal to one of the items in the given list. */
  _id_any?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Matches if the Id field is not equal to one of the items in the given list. */
  _id_nany?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** The `_or` filter returns a filter value if at least one of the clause in the _or is true. This beta filter currently supports the `Id`, `Slug`, `Created On`, `Changed On, `Published On`, `Text`, `Integer`, `Float` and `DateTime` field types. */
  _or?: InputMaybe<Array<LiveEventWhereInput>>;
  _publish_on_gt?: InputMaybe<Scalars['_DateTime']['input']>;
  _publish_on_lt?: InputMaybe<Scalars['_DateTime']['input']>;
  /** Matches any content item containing the given text term (full-text search). */
  _search?: InputMaybe<Scalars['String']['input']>;
  _search_options?: InputMaybe<SearchOptionsInput>;
  _slug_any?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  _slug_nany?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Matches any content item tagged with all items from the given list. */
  _tags_all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Matches any content item tagged with at least one item from the given list. */
  _tags_any?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Matches any content item that is tagged. */
  _tags_has?: InputMaybe<Scalars['Boolean']['input']>;
  /** Matches any content item not tagged with an item from the given list. */
  _tags_nany?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Matches if the field is equal to the given value. */
  heading?: InputMaybe<Scalars['String']['input']>;
  /** Full fuzzy text search, not case sensitive. */
  heading_contains?: InputMaybe<Scalars['String']['input']>;
  /** Matches if the field ends with the given value. */
  heading_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** Excludes with full fuzzy text search, not case sensitive. */
  heading_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** Matches if the field starts with the given value. */
  heading_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** Matches if the field is equal to the given value. */
  live_stream_intro?: InputMaybe<Scalars['String']['input']>;
  /** Full fuzzy text search, not case sensitive. */
  live_stream_intro_contains?: InputMaybe<Scalars['String']['input']>;
  /** Matches if the field ends with the given value. */
  live_stream_intro_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** Excludes with full fuzzy text search, not case sensitive. */
  live_stream_intro_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** Matches if the field starts with the given value. */
  live_stream_intro_starts_with?: InputMaybe<Scalars['String']['input']>;
  speakers?: InputMaybe<PersonWhereInput>;
  /** Matches if the field is equal to the given value. */
  start_day_and_time?: InputMaybe<Scalars['String']['input']>;
  /** Matches if the field is greater than the given value. */
  start_day_and_time_gt?: InputMaybe<Scalars['String']['input']>;
  /** Matches if the field is greater than or equal to the given value. */
  start_day_and_time_gte?: InputMaybe<Scalars['String']['input']>;
  /** Matches if the field is less than the given value. */
  start_day_and_time_lt?: InputMaybe<Scalars['String']['input']>;
  /** Matches if the field is less than or equal to the given value. */
  start_day_and_time_lte?: InputMaybe<Scalars['String']['input']>;
  /** Matches if the field is equal to the given value. */
  title?: InputMaybe<Scalars['String']['input']>;
  /** Full fuzzy text search, not case sensitive. */
  title_contains?: InputMaybe<Scalars['String']['input']>;
  /** Matches if the field ends with the given value. */
  title_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** Excludes with full fuzzy text search, not case sensitive. */
  title_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** Matches if the field starts with the given value. */
  title_starts_with?: InputMaybe<Scalars['String']['input']>;
};

/** List of LiveEvents items. */
export type LiveEvents = {
  __typename?: 'LiveEvents';
  items: Array<LiveEvent>;
  total: Scalars['Int']['output'];
};

/** Single MenuItem. */
export type MenuItem = Model & {
  __typename?: 'MenuItem';
  /** Count of bookmark events. */
  _bookmarks?: Maybe<Scalars['Int']['output']>;
  /** The time the content item was changed. */
  _changed_on: Scalars['String']['output'];
  /** Count of clicktrough events. */
  _clicktroughs?: Maybe<Scalars['Int']['output']>;
  /** Count of comment events. */
  _comments?: Maybe<Scalars['Int']['output']>;
  _context?: Maybe<Context>;
  /** The time the content item was created. */
  _created_on: Scalars['String']['output'];
  /** Id of your Prepr Environment. */
  _environment_id: Scalars['String']['output'];
  /** Unique identifier for each content item. */
  _id: Scalars['String']['output'];
  /** Count of like events. */
  _likes?: Maybe<Scalars['Int']['output']>;
  _locale: Scalars['String']['output'];
  _locales: Array<Scalars['String']['output']>;
  /** This field returns all localizations for this content item. */
  _localizations: Array<MenuItem>;
  /** The time for when the content item is or will be published. */
  _publish_on?: Maybe<Scalars['String']['output']>;
  /** Count of purchase events. */
  _purchases?: Maybe<Scalars['Int']['output']>;
  /** Calculated time to read in minutes. */
  _read_time?: Maybe<Scalars['Int']['output']>;
  /** Count of share events. */
  _shares?: Maybe<Scalars['Int']['output']>;
  /** Unique within Type, string identifier for each content item. */
  _slug?: Maybe<Scalars['String']['output']>;
  /** Count of subscribe events. */
  _subscribes?: Maybe<Scalars['Int']['output']>;
  /** Count of view events. */
  _views?: Maybe<Scalars['Int']['output']>;
  /** Count of vote events. */
  _votes?: Maybe<Scalars['Int']['output']>;
  children: Array<MenuItem>;
  description?: Maybe<Scalars['String']['output']>;
  icon?: Maybe<Array<Maybe<Asset>>>;
  link_to_external_page?: Maybe<Scalars['String']['output']>;
  link_to_page: Array<Page>;
  title?: Maybe<Scalars['String']['output']>;
};

export enum MenuItemSortInput {
  ChangedOn = 'changed_on',
  ChangedOnAsc = 'changed_on_ASC',
  ChangedOnDesc = 'changed_on_DESC',
  CreatedOn = 'created_on',
  CreatedOnAsc = 'created_on_ASC',
  CreatedOnDesc = 'created_on_DESC',
  DescriptionAsc = 'description_ASC',
  DescriptionDesc = 'description_DESC',
  LinkToExternalPageAsc = 'link_to_external_page_ASC',
  LinkToExternalPageDesc = 'link_to_external_page_DESC',
  PublishOn = 'publish_on',
  PublishOnAsc = 'publish_on_ASC',
  PublishOnDesc = 'publish_on_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

export type MenuItemWhereInput = {
  _changed_on_gt?: InputMaybe<Scalars['_DateTime']['input']>;
  _changed_on_lt?: InputMaybe<Scalars['_DateTime']['input']>;
  _created_on_gt?: InputMaybe<Scalars['_DateTime']['input']>;
  _created_on_lt?: InputMaybe<Scalars['_DateTime']['input']>;
  /** Matches if the Id field is equal to one of the items in the given list. */
  _id_any?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Matches if the Id field is not equal to one of the items in the given list. */
  _id_nany?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** The `_or` filter returns a filter value if at least one of the clause in the _or is true. This beta filter currently supports the `Id`, `Slug`, `Created On`, `Changed On, `Published On`, `Text`, `Integer`, `Float` and `DateTime` field types. */
  _or?: InputMaybe<Array<MenuItemWhereInput>>;
  _publish_on_gt?: InputMaybe<Scalars['_DateTime']['input']>;
  _publish_on_lt?: InputMaybe<Scalars['_DateTime']['input']>;
  /** Matches any content item containing the given text term (full-text search). */
  _search?: InputMaybe<Scalars['String']['input']>;
  _search_options?: InputMaybe<SearchOptionsInput>;
  _slug_any?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  _slug_nany?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Matches any content item tagged with all items from the given list. */
  _tags_all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Matches any content item tagged with at least one item from the given list. */
  _tags_any?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Matches any content item that is tagged. */
  _tags_has?: InputMaybe<Scalars['Boolean']['input']>;
  /** Matches any content item not tagged with an item from the given list. */
  _tags_nany?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  children?: InputMaybe<MenuItemWhereInput>;
  /** Matches if the field is equal to the given value. */
  description?: InputMaybe<Scalars['String']['input']>;
  /** Full fuzzy text search, not case sensitive. */
  description_contains?: InputMaybe<Scalars['String']['input']>;
  /** Matches if the field ends with the given value. */
  description_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** Excludes with full fuzzy text search, not case sensitive. */
  description_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** Matches if the field starts with the given value. */
  description_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** Matches if the field is equal to the given value. */
  link_to_external_page?: InputMaybe<Scalars['String']['input']>;
  /** Full fuzzy text search, not case sensitive. */
  link_to_external_page_contains?: InputMaybe<Scalars['String']['input']>;
  /** Matches if the field ends with the given value. */
  link_to_external_page_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** Excludes with full fuzzy text search, not case sensitive. */
  link_to_external_page_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** Matches if the field starts with the given value. */
  link_to_external_page_starts_with?: InputMaybe<Scalars['String']['input']>;
  link_to_page?: InputMaybe<PageWhereInput>;
  /** Matches if the field is equal to the given value. */
  title?: InputMaybe<Scalars['String']['input']>;
  /** Full fuzzy text search, not case sensitive. */
  title_contains?: InputMaybe<Scalars['String']['input']>;
  /** Matches if the field ends with the given value. */
  title_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** Excludes with full fuzzy text search, not case sensitive. */
  title_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** Matches if the field starts with the given value. */
  title_starts_with?: InputMaybe<Scalars['String']['input']>;
};

/** List of MenuItems items. */
export type MenuItems = {
  __typename?: 'MenuItems';
  items: Array<MenuItem>;
  total: Scalars['Int']['output'];
};

/** A model is the content structure of a content item that is used in multiple locations in your CMS. A model consists of a number of fields to store your content. Common examples of models are articles, landing pages and products. */
export type Model = {
  /** The time the content item was changed. */
  _changed_on: Scalars['String']['output'];
  _context?: Maybe<Context>;
  /** The time the content item was created. */
  _created_on: Scalars['String']['output'];
  /** Unique identifier for each content item. */
  _id: Scalars['String']['output'];
  /** The time for when the content item is or will be published. */
  _publish_on?: Maybe<Scalars['String']['output']>;
  /** Calculated time to read in minutes. */
  _read_time?: Maybe<Scalars['Int']['output']>;
  /** Unique within Type, string identifier for each content item. */
  _slug?: Maybe<Scalars['String']['output']>;
};

/** Single Navigation. */
export type Navigation = Model & {
  __typename?: 'Navigation';
  /** Count of bookmark events. */
  _bookmarks?: Maybe<Scalars['Int']['output']>;
  /** The time the content item was changed. */
  _changed_on: Scalars['String']['output'];
  /** Count of clicktrough events. */
  _clicktroughs?: Maybe<Scalars['Int']['output']>;
  /** Count of comment events. */
  _comments?: Maybe<Scalars['Int']['output']>;
  _context?: Maybe<Context>;
  /** The time the content item was created. */
  _created_on: Scalars['String']['output'];
  /** Id of your Prepr Environment. */
  _environment_id: Scalars['String']['output'];
  /** Unique identifier for each content item. */
  _id: Scalars['String']['output'];
  /** Count of like events. */
  _likes?: Maybe<Scalars['Int']['output']>;
  _locale: Scalars['String']['output'];
  _locales: Array<Scalars['String']['output']>;
  /** This field returns all localizations for this content item. */
  _localizations: Array<Navigation>;
  /** The time for when the content item is or will be published. */
  _publish_on?: Maybe<Scalars['String']['output']>;
  /** Count of purchase events. */
  _purchases?: Maybe<Scalars['Int']['output']>;
  /** Calculated time to read in minutes. */
  _read_time?: Maybe<Scalars['Int']['output']>;
  /** Count of share events. */
  _shares?: Maybe<Scalars['Int']['output']>;
  /** Unique within Type, string identifier for each content item. */
  _slug?: Maybe<Scalars['String']['output']>;
  /** Count of subscribe events. */
  _subscribes?: Maybe<Scalars['Int']['output']>;
  /** Count of view events. */
  _views?: Maybe<Scalars['Int']['output']>;
  /** Count of vote events. */
  _votes?: Maybe<Scalars['Int']['output']>;
  menu_items: Array<MenuItem>;
  title?: Maybe<Scalars['String']['output']>;
};

export type NavigationItem = {
  __typename?: 'NavigationItem';
  _id: Scalars['String']['output'];
  _type?: Maybe<Scalars['String']['output']>;
  body?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  slug?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  url?: Maybe<Scalars['String']['output']>;
};

export enum NavigationSortInput {
  ChangedOn = 'changed_on',
  ChangedOnAsc = 'changed_on_ASC',
  ChangedOnDesc = 'changed_on_DESC',
  CreatedOn = 'created_on',
  CreatedOnAsc = 'created_on_ASC',
  CreatedOnDesc = 'created_on_DESC',
  PublishOn = 'publish_on',
  PublishOnAsc = 'publish_on_ASC',
  PublishOnDesc = 'publish_on_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

export type NavigationWhereInput = {
  _changed_on_gt?: InputMaybe<Scalars['_DateTime']['input']>;
  _changed_on_lt?: InputMaybe<Scalars['_DateTime']['input']>;
  _created_on_gt?: InputMaybe<Scalars['_DateTime']['input']>;
  _created_on_lt?: InputMaybe<Scalars['_DateTime']['input']>;
  /** Matches if the Id field is equal to one of the items in the given list. */
  _id_any?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Matches if the Id field is not equal to one of the items in the given list. */
  _id_nany?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** The `_or` filter returns a filter value if at least one of the clause in the _or is true. This beta filter currently supports the `Id`, `Slug`, `Created On`, `Changed On, `Published On`, `Text`, `Integer`, `Float` and `DateTime` field types. */
  _or?: InputMaybe<Array<NavigationWhereInput>>;
  _publish_on_gt?: InputMaybe<Scalars['_DateTime']['input']>;
  _publish_on_lt?: InputMaybe<Scalars['_DateTime']['input']>;
  /** Matches any content item containing the given text term (full-text search). */
  _search?: InputMaybe<Scalars['String']['input']>;
  _search_options?: InputMaybe<SearchOptionsInput>;
  _slug_any?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  _slug_nany?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Matches any content item tagged with all items from the given list. */
  _tags_all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Matches any content item tagged with at least one item from the given list. */
  _tags_any?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Matches any content item that is tagged. */
  _tags_has?: InputMaybe<Scalars['Boolean']['input']>;
  /** Matches any content item not tagged with an item from the given list. */
  _tags_nany?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  menu_items?: InputMaybe<MenuItemWhereInput>;
  /** Matches if the field is equal to the given value. */
  title?: InputMaybe<Scalars['String']['input']>;
  /** Full fuzzy text search, not case sensitive. */
  title_contains?: InputMaybe<Scalars['String']['input']>;
  /** Matches if the field ends with the given value. */
  title_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** Excludes with full fuzzy text search, not case sensitive. */
  title_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** Matches if the field starts with the given value. */
  title_starts_with?: InputMaybe<Scalars['String']['input']>;
};

/** List of Navigations items. */
export type Navigations = {
  __typename?: 'Navigations';
  items: Array<Navigation>;
  total: Scalars['Int']['output'];
};

/** Single Page. */
export type Page = Model & {
  __typename?: 'Page';
  /** Count of bookmark events. */
  _bookmarks?: Maybe<Scalars['Int']['output']>;
  /** The time the content item was changed. */
  _changed_on: Scalars['String']['output'];
  /** Count of clicktrough events. */
  _clicktroughs?: Maybe<Scalars['Int']['output']>;
  /** Count of comment events. */
  _comments?: Maybe<Scalars['Int']['output']>;
  _context?: Maybe<Context>;
  /** The time the content item was created. */
  _created_on: Scalars['String']['output'];
  /** Id of your Prepr Environment. */
  _environment_id: Scalars['String']['output'];
  /** Unique identifier for each content item. */
  _id: Scalars['String']['output'];
  /** Count of like events. */
  _likes?: Maybe<Scalars['Int']['output']>;
  _locale: Scalars['String']['output'];
  _locales: Array<Scalars['String']['output']>;
  /** This field returns all localizations for this content item. */
  _localizations: Array<Page>;
  /** The time for when the content item is or will be published. */
  _publish_on?: Maybe<Scalars['String']['output']>;
  /** Count of purchase events. */
  _purchases?: Maybe<Scalars['Int']['output']>;
  /** Calculated time to read in minutes. */
  _read_time?: Maybe<Scalars['Int']['output']>;
  /** Count of share events. */
  _shares?: Maybe<Scalars['Int']['output']>;
  /** Unique within Type, string identifier for each content item. */
  _slug?: Maybe<Scalars['String']['output']>;
  /** Count of subscribe events. */
  _subscribes?: Maybe<Scalars['Int']['output']>;
  /** Count of view events. */
  _views?: Maybe<Scalars['Int']['output']>;
  /** Count of vote events. */
  _votes?: Maybe<Scalars['Int']['output']>;
  seo?: Maybe<Seo>;
  stack: Array<Page_Stack>;
  title?: Maybe<Scalars['String']['output']>;
};


/** Single Page. */
export type PageStackArgs = {
  personalize?: Scalars['Boolean']['input'];
  personalize_for_country?: InputMaybe<Scalars['String']['input']>;
  personalize_for_segments?: InputMaybe<Array<Scalars['String']['input']>>;
};

/** PageHeader component. */
export type PageHeader = Component & {
  __typename?: 'PageHeader';
  _context?: Maybe<Context>;
  _id: Scalars['String']['output'];
  cta_label?: Maybe<Scalars['String']['output']>;
  cta_url?: Maybe<Scalars['String']['output']>;
  heading?: Maybe<Scalars['String']['output']>;
  image?: Maybe<Array<Maybe<Asset>>>;
  text?: Maybe<Scalars['String']['output']>;
};

export enum PageSortInput {
  ChangedOn = 'changed_on',
  ChangedOnAsc = 'changed_on_ASC',
  ChangedOnDesc = 'changed_on_DESC',
  CreatedOn = 'created_on',
  CreatedOnAsc = 'created_on_ASC',
  CreatedOnDesc = 'created_on_DESC',
  PublishOn = 'publish_on',
  PublishOnAsc = 'publish_on_ASC',
  PublishOnDesc = 'publish_on_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

export type PageWhereInput = {
  _changed_on_gt?: InputMaybe<Scalars['_DateTime']['input']>;
  _changed_on_lt?: InputMaybe<Scalars['_DateTime']['input']>;
  _created_on_gt?: InputMaybe<Scalars['_DateTime']['input']>;
  _created_on_lt?: InputMaybe<Scalars['_DateTime']['input']>;
  /** Matches if the Id field is equal to one of the items in the given list. */
  _id_any?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Matches if the Id field is not equal to one of the items in the given list. */
  _id_nany?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** The `_or` filter returns a filter value if at least one of the clause in the _or is true. This beta filter currently supports the `Id`, `Slug`, `Created On`, `Changed On, `Published On`, `Text`, `Integer`, `Float` and `DateTime` field types. */
  _or?: InputMaybe<Array<PageWhereInput>>;
  _publish_on_gt?: InputMaybe<Scalars['_DateTime']['input']>;
  _publish_on_lt?: InputMaybe<Scalars['_DateTime']['input']>;
  /** Matches any content item containing the given text term (full-text search). */
  _search?: InputMaybe<Scalars['String']['input']>;
  _search_options?: InputMaybe<SearchOptionsInput>;
  _slug_any?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  _slug_nany?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Matches any content item tagged with all items from the given list. */
  _tags_all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Matches any content item tagged with at least one item from the given list. */
  _tags_any?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Matches any content item that is tagged. */
  _tags_has?: InputMaybe<Scalars['Boolean']['input']>;
  /** Matches any content item not tagged with an item from the given list. */
  _tags_nany?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Matches if the field is equal to the given value. */
  title?: InputMaybe<Scalars['String']['input']>;
  /** Full fuzzy text search, not case sensitive. */
  title_contains?: InputMaybe<Scalars['String']['input']>;
  /** Matches if the field ends with the given value. */
  title_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** Excludes with full fuzzy text search, not case sensitive. */
  title_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** Matches if the field starts with the given value. */
  title_starts_with?: InputMaybe<Scalars['String']['input']>;
};

export type Page_Stack = ArticleCollection | ImageAndText | PageHeader | ProductCollection;

/** List of Pages items. */
export type Pages = {
  __typename?: 'Pages';
  items: Array<Page>;
  total: Scalars['Int']['output'];
};

/** Single Person. */
export type Person = Model & {
  __typename?: 'Person';
  /** Count of bookmark events. */
  _bookmarks?: Maybe<Scalars['Int']['output']>;
  /** The time the content item was changed. */
  _changed_on: Scalars['String']['output'];
  /** Count of clicktrough events. */
  _clicktroughs?: Maybe<Scalars['Int']['output']>;
  /** Count of comment events. */
  _comments?: Maybe<Scalars['Int']['output']>;
  _context?: Maybe<Context>;
  /** The time the content item was created. */
  _created_on: Scalars['String']['output'];
  /** Id of your Prepr Environment. */
  _environment_id: Scalars['String']['output'];
  /** Unique identifier for each content item. */
  _id: Scalars['String']['output'];
  /** Count of like events. */
  _likes?: Maybe<Scalars['Int']['output']>;
  _locale: Scalars['String']['output'];
  _locales: Array<Scalars['String']['output']>;
  /** This field returns all localizations for this content item. */
  _localizations: Array<Person>;
  /** The time for when the content item is or will be published. */
  _publish_on?: Maybe<Scalars['String']['output']>;
  /** Count of purchase events. */
  _purchases?: Maybe<Scalars['Int']['output']>;
  /** Calculated time to read in minutes. */
  _read_time?: Maybe<Scalars['Int']['output']>;
  /** Count of share events. */
  _shares?: Maybe<Scalars['Int']['output']>;
  /** Unique within Type, string identifier for each content item. */
  _slug?: Maybe<Scalars['String']['output']>;
  /** Count of subscribe events. */
  _subscribes?: Maybe<Scalars['Int']['output']>;
  /** Count of view events. */
  _views?: Maybe<Scalars['Int']['output']>;
  /** Count of vote events. */
  _votes?: Maybe<Scalars['Int']['output']>;
  bio?: Maybe<Scalars['String']['output']>;
  full_name?: Maybe<Scalars['String']['output']>;
  profile_pic?: Maybe<Array<Maybe<Asset>>>;
};

export enum PersonSortInput {
  BioAsc = 'bio_ASC',
  BioDesc = 'bio_DESC',
  ChangedOn = 'changed_on',
  ChangedOnAsc = 'changed_on_ASC',
  ChangedOnDesc = 'changed_on_DESC',
  CreatedOn = 'created_on',
  CreatedOnAsc = 'created_on_ASC',
  CreatedOnDesc = 'created_on_DESC',
  FullNameAsc = 'full_name_ASC',
  FullNameDesc = 'full_name_DESC',
  PublishOn = 'publish_on',
  PublishOnAsc = 'publish_on_ASC',
  PublishOnDesc = 'publish_on_DESC'
}

export type PersonWhereInput = {
  _changed_on_gt?: InputMaybe<Scalars['_DateTime']['input']>;
  _changed_on_lt?: InputMaybe<Scalars['_DateTime']['input']>;
  _created_on_gt?: InputMaybe<Scalars['_DateTime']['input']>;
  _created_on_lt?: InputMaybe<Scalars['_DateTime']['input']>;
  /** Matches if the Id field is equal to one of the items in the given list. */
  _id_any?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Matches if the Id field is not equal to one of the items in the given list. */
  _id_nany?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** The `_or` filter returns a filter value if at least one of the clause in the _or is true. This beta filter currently supports the `Id`, `Slug`, `Created On`, `Changed On, `Published On`, `Text`, `Integer`, `Float` and `DateTime` field types. */
  _or?: InputMaybe<Array<PersonWhereInput>>;
  _publish_on_gt?: InputMaybe<Scalars['_DateTime']['input']>;
  _publish_on_lt?: InputMaybe<Scalars['_DateTime']['input']>;
  /** Matches any content item containing the given text term (full-text search). */
  _search?: InputMaybe<Scalars['String']['input']>;
  _search_options?: InputMaybe<SearchOptionsInput>;
  _slug_any?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  _slug_nany?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Matches any content item tagged with all items from the given list. */
  _tags_all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Matches any content item tagged with at least one item from the given list. */
  _tags_any?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Matches any content item that is tagged. */
  _tags_has?: InputMaybe<Scalars['Boolean']['input']>;
  /** Matches any content item not tagged with an item from the given list. */
  _tags_nany?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Matches if the field is equal to the given value. */
  bio?: InputMaybe<Scalars['String']['input']>;
  /** Full fuzzy text search, not case sensitive. */
  bio_contains?: InputMaybe<Scalars['String']['input']>;
  /** Matches if the field ends with the given value. */
  bio_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** Excludes with full fuzzy text search, not case sensitive. */
  bio_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** Matches if the field starts with the given value. */
  bio_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** Matches if the field is equal to the given value. */
  full_name?: InputMaybe<Scalars['String']['input']>;
  /** Full fuzzy text search, not case sensitive. */
  full_name_contains?: InputMaybe<Scalars['String']['input']>;
  /** Matches if the field ends with the given value. */
  full_name_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** Excludes with full fuzzy text search, not case sensitive. */
  full_name_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** Matches if the field starts with the given value. */
  full_name_starts_with?: InputMaybe<Scalars['String']['input']>;
};

/** List of Persons items. */
export type Persons = {
  __typename?: 'Persons';
  items: Array<Person>;
  total: Scalars['Int']['output'];
};

/** Remote Source PreprExampleShop. */
export type PreprExampleShop = {
  __typename?: 'PreprExampleShop';
  /** Unique identifier for each remote source item, defined by the remote source. */
  _id: Scalars['String']['output'];
  description?: Maybe<Scalars['String']['output']>;
  image?: Maybe<Scalars['String']['output']>;
  price?: Maybe<Scalars['Float']['output']>;
  title?: Maybe<Scalars['String']['output']>;
};

/** List of Remote Source PreprExampleShop items in a Dynamic Content Field. */
export type PreprExampleShopCollection = {
  __typename?: 'PreprExampleShopCollection';
  /** A list of items. */
  items: Array<PreprExampleShop>;
};

/** ProductCollection component. */
export type ProductCollection = Component & {
  __typename?: 'ProductCollection';
  _context?: Maybe<Context>;
  _id: Scalars['String']['output'];
  cta_label?: Maybe<Scalars['String']['output']>;
  cta_url?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  heading?: Maybe<Scalars['String']['output']>;
  products: Array<PreprExampleShop>;
};

export type Query = {
  __typename?: 'Query';
  /** Retrieve About. */
  About?: Maybe<About>;
  /** Retrieve AppConfig. */
  AppConfig?: Maybe<AppConfig>;
  /** Retrieve a single Article. */
  Article?: Maybe<Article>;
  /** Retrieve multiple Articles. */
  Articles?: Maybe<Articles>;
  /** Retrieve a single CallToAction. */
  CallToAction?: Maybe<CallToAction>;
  /** Retrieve multiple CallToActions. */
  CallToActions?: Maybe<CallToActions>;
  /** Retrieve multiple Categories. */
  Categories?: Maybe<Categories>;
  /** Retrieve a single Category. */
  Category?: Maybe<Category>;
  /** Retrieve content items from all models. */
  ContentItems?: Maybe<ContentItems>;
  /** Retrieve a single LiveEvent. */
  LiveEvent?: Maybe<LiveEvent>;
  /** Retrieve multiple LiveEvents. */
  LiveEvents?: Maybe<LiveEvents>;
  /** Retrieve a single MenuItem. */
  MenuItem?: Maybe<MenuItem>;
  /** Retrieve multiple MenuItems. */
  MenuItems?: Maybe<MenuItems>;
  /** Retrieve a single Navigation. */
  Navigation?: Maybe<Navigation>;
  /** Retrieve multiple Navigations. */
  Navigations?: Maybe<Navigations>;
  /** Retrieve a single Page. */
  Page?: Maybe<Page>;
  /** Retrieve multiple Pages. */
  Pages?: Maybe<Pages>;
  /** Recommendation recipe suitable for recommending Articles which are similar to the giving item */
  PeopleAlsoViewed_Articles?: Maybe<Articles>;
  /** Recommendation recipe suitable for recommending CallToActions which are similar to the giving item */
  PeopleAlsoViewed_CallToActions?: Maybe<CallToActions>;
  /** Recommendation recipe suitable for recommending Categories which are similar to the giving item */
  PeopleAlsoViewed_Categories?: Maybe<Categories>;
  /** Recommendation recipe suitable for recommending LiveEvents which are similar to the giving item */
  PeopleAlsoViewed_LiveEvents?: Maybe<LiveEvents>;
  /** Recommendation recipe suitable for recommending MenuItems which are similar to the giving item */
  PeopleAlsoViewed_MenuItems?: Maybe<MenuItems>;
  /** Recommendation recipe suitable for recommending Navigations which are similar to the giving item */
  PeopleAlsoViewed_Navigations?: Maybe<Navigations>;
  /** Recommendation recipe suitable for recommending Pages which are similar to the giving item */
  PeopleAlsoViewed_Pages?: Maybe<Pages>;
  /** Recommendation recipe suitable for recommending Persons which are similar to the giving item */
  PeopleAlsoViewed_Persons?: Maybe<Persons>;
  /** Retrieve a single Person. */
  Person?: Maybe<Person>;
  /** Retrieve multiple Persons. */
  Persons?: Maybe<Persons>;
  /** Recommendation recipe suitable for recommending globally popular Articles */
  Popular_Articles?: Maybe<Articles>;
  /** Recommendation recipe suitable for recommending globally popular CallToActions */
  Popular_CallToActions?: Maybe<CallToActions>;
  /** Recommendation recipe suitable for recommending globally popular Categories */
  Popular_Categories?: Maybe<Categories>;
  /** Recommendation recipe suitable for recommending globally popular LiveEvents */
  Popular_LiveEvents?: Maybe<LiveEvents>;
  /** Recommendation recipe suitable for recommending globally popular MenuItems */
  Popular_MenuItems?: Maybe<MenuItems>;
  /** Recommendation recipe suitable for recommending globally popular Navigations */
  Popular_Navigations?: Maybe<Navigations>;
  /** Recommendation recipe suitable for recommending globally popular Pages */
  Popular_Pages?: Maybe<Pages>;
  /** Recommendation recipe suitable for recommending globally popular Persons */
  Popular_Persons?: Maybe<Persons>;
  /** Recommendation recipe suitable for recommending Articles which are similar to the giving item */
  Similar_Articles?: Maybe<Articles>;
  /** Recommendation recipe suitable for recommending CallToActions which are similar to the giving item */
  Similar_CallToActions?: Maybe<CallToActions>;
  /** Recommendation recipe suitable for recommending Categories which are similar to the giving item */
  Similar_Categories?: Maybe<Categories>;
  /** Recommendation recipe suitable for recommending LiveEvents which are similar to the giving item */
  Similar_LiveEvents?: Maybe<LiveEvents>;
  /** Recommendation recipe suitable for recommending MenuItems which are similar to the giving item */
  Similar_MenuItems?: Maybe<MenuItems>;
  /** Recommendation recipe suitable for recommending Navigations which are similar to the giving item */
  Similar_Navigations?: Maybe<Navigations>;
  /** Recommendation recipe suitable for recommending Pages which are similar to the giving item */
  Similar_Pages?: Maybe<Pages>;
  /** Recommendation recipe suitable for recommending Persons which are similar to the giving item */
  Similar_Persons?: Maybe<Persons>;
};


export type QueryAboutArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  locales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryAppConfigArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  locales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryArticleArgs = {
  id?: InputMaybe<Scalars['String']['input']>;
  locale?: Scalars['String']['input'];
  locales?: InputMaybe<Array<Scalars['String']['input']>>;
  slug?: InputMaybe<Scalars['String']['input']>;
};


export type QueryArticlesArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: Scalars['String']['input'];
  locales?: InputMaybe<Array<Scalars['String']['input']>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<ArticleSortInput>;
  where?: InputMaybe<ArticleWhereInput>;
};


export type QueryCallToActionArgs = {
  id?: InputMaybe<Scalars['String']['input']>;
  locale?: Scalars['String']['input'];
  locales?: InputMaybe<Array<Scalars['String']['input']>>;
  slug?: InputMaybe<Scalars['String']['input']>;
};


export type QueryCallToActionsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: Scalars['String']['input'];
  locales?: InputMaybe<Array<Scalars['String']['input']>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<CallToActionSortInput>;
  where?: InputMaybe<CallToActionWhereInput>;
};


export type QueryCategoriesArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: Scalars['String']['input'];
  locales?: InputMaybe<Array<Scalars['String']['input']>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<CategorySortInput>;
  where?: InputMaybe<CategoryWhereInput>;
};


export type QueryCategoryArgs = {
  id?: InputMaybe<Scalars['String']['input']>;
  locale?: Scalars['String']['input'];
  locales?: InputMaybe<Array<Scalars['String']['input']>>;
  slug?: InputMaybe<Scalars['String']['input']>;
};


export type QueryContentItemsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  people_also_viewed_id?: InputMaybe<Scalars['String']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<ContentItemsSortInput>;
  where?: InputMaybe<ContentItemsWhereInput>;
};


export type QueryLiveEventArgs = {
  id?: InputMaybe<Scalars['String']['input']>;
  locale?: Scalars['String']['input'];
  locales?: InputMaybe<Array<Scalars['String']['input']>>;
  slug?: InputMaybe<Scalars['String']['input']>;
};


export type QueryLiveEventsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: Scalars['String']['input'];
  locales?: InputMaybe<Array<Scalars['String']['input']>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<LiveEventSortInput>;
  where?: InputMaybe<LiveEventWhereInput>;
};


export type QueryMenuItemArgs = {
  id?: InputMaybe<Scalars['String']['input']>;
  locale?: Scalars['String']['input'];
  locales?: InputMaybe<Array<Scalars['String']['input']>>;
  slug?: InputMaybe<Scalars['String']['input']>;
};


export type QueryMenuItemsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: Scalars['String']['input'];
  locales?: InputMaybe<Array<Scalars['String']['input']>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<MenuItemSortInput>;
  where?: InputMaybe<MenuItemWhereInput>;
};


export type QueryNavigationArgs = {
  id?: InputMaybe<Scalars['String']['input']>;
  locale?: Scalars['String']['input'];
  locales?: InputMaybe<Array<Scalars['String']['input']>>;
  slug?: InputMaybe<Scalars['String']['input']>;
};


export type QueryNavigationsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: Scalars['String']['input'];
  locales?: InputMaybe<Array<Scalars['String']['input']>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<NavigationSortInput>;
  where?: InputMaybe<NavigationWhereInput>;
};


export type QueryPageArgs = {
  id?: InputMaybe<Scalars['String']['input']>;
  locale?: Scalars['String']['input'];
  locales?: InputMaybe<Array<Scalars['String']['input']>>;
  slug?: InputMaybe<Scalars['String']['input']>;
};


export type QueryPagesArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: Scalars['String']['input'];
  locales?: InputMaybe<Array<Scalars['String']['input']>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<PageSortInput>;
  where?: InputMaybe<PageWhereInput>;
};


export type QueryPeopleAlsoViewed_ArticlesArgs = {
  id: Scalars['String']['input'];
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  locales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  rules?: InputMaybe<SimilarRulesInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ArticleWhereInput>;
};


export type QueryPeopleAlsoViewed_CallToActionsArgs = {
  id: Scalars['String']['input'];
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  locales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  rules?: InputMaybe<SimilarRulesInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<CallToActionWhereInput>;
};


export type QueryPeopleAlsoViewed_CategoriesArgs = {
  id: Scalars['String']['input'];
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  locales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  rules?: InputMaybe<SimilarRulesInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<CategoryWhereInput>;
};


export type QueryPeopleAlsoViewed_LiveEventsArgs = {
  id: Scalars['String']['input'];
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  locales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  rules?: InputMaybe<SimilarRulesInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<LiveEventWhereInput>;
};


export type QueryPeopleAlsoViewed_MenuItemsArgs = {
  id: Scalars['String']['input'];
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  locales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  rules?: InputMaybe<SimilarRulesInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<MenuItemWhereInput>;
};


export type QueryPeopleAlsoViewed_NavigationsArgs = {
  id: Scalars['String']['input'];
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  locales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  rules?: InputMaybe<SimilarRulesInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<NavigationWhereInput>;
};


export type QueryPeopleAlsoViewed_PagesArgs = {
  id: Scalars['String']['input'];
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  locales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  rules?: InputMaybe<SimilarRulesInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<PageWhereInput>;
};


export type QueryPeopleAlsoViewed_PersonsArgs = {
  id: Scalars['String']['input'];
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  locales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  rules?: InputMaybe<SimilarRulesInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<PersonWhereInput>;
};


export type QueryPersonArgs = {
  id?: InputMaybe<Scalars['String']['input']>;
  locale?: Scalars['String']['input'];
  locales?: InputMaybe<Array<Scalars['String']['input']>>;
  slug?: InputMaybe<Scalars['String']['input']>;
};


export type QueryPersonsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: Scalars['String']['input'];
  locales?: InputMaybe<Array<Scalars['String']['input']>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<PersonSortInput>;
  where?: InputMaybe<PersonWhereInput>;
};


export type QueryPopular_ArticlesArgs = {
  events?: InputMaybe<Array<InputMaybe<_Event>>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  locales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ArticleWhereInput>;
};


export type QueryPopular_CallToActionsArgs = {
  events?: InputMaybe<Array<InputMaybe<_Event>>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  locales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<CallToActionWhereInput>;
};


export type QueryPopular_CategoriesArgs = {
  events?: InputMaybe<Array<InputMaybe<_Event>>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  locales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<CategoryWhereInput>;
};


export type QueryPopular_LiveEventsArgs = {
  events?: InputMaybe<Array<InputMaybe<_Event>>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  locales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<LiveEventWhereInput>;
};


export type QueryPopular_MenuItemsArgs = {
  events?: InputMaybe<Array<InputMaybe<_Event>>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  locales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<MenuItemWhereInput>;
};


export type QueryPopular_NavigationsArgs = {
  events?: InputMaybe<Array<InputMaybe<_Event>>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  locales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<NavigationWhereInput>;
};


export type QueryPopular_PagesArgs = {
  events?: InputMaybe<Array<InputMaybe<_Event>>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  locales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<PageWhereInput>;
};


export type QueryPopular_PersonsArgs = {
  events?: InputMaybe<Array<InputMaybe<_Event>>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  locales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<PersonWhereInput>;
};


export type QuerySimilar_ArticlesArgs = {
  id: Scalars['String']['input'];
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  locales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  rules?: InputMaybe<SimilarRulesInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ArticleWhereInput>;
};


export type QuerySimilar_CallToActionsArgs = {
  id: Scalars['String']['input'];
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  locales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  rules?: InputMaybe<SimilarRulesInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<CallToActionWhereInput>;
};


export type QuerySimilar_CategoriesArgs = {
  id: Scalars['String']['input'];
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  locales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  rules?: InputMaybe<SimilarRulesInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<CategoryWhereInput>;
};


export type QuerySimilar_LiveEventsArgs = {
  id: Scalars['String']['input'];
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  locales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  rules?: InputMaybe<SimilarRulesInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<LiveEventWhereInput>;
};


export type QuerySimilar_MenuItemsArgs = {
  id: Scalars['String']['input'];
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  locales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  rules?: InputMaybe<SimilarRulesInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<MenuItemWhereInput>;
};


export type QuerySimilar_NavigationsArgs = {
  id: Scalars['String']['input'];
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  locales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  rules?: InputMaybe<SimilarRulesInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<NavigationWhereInput>;
};


export type QuerySimilar_PagesArgs = {
  id: Scalars['String']['input'];
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  locales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  rules?: InputMaybe<SimilarRulesInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<PageWhereInput>;
};


export type QuerySimilar_PersonsArgs = {
  id: Scalars['String']['input'];
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  locales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  rules?: InputMaybe<SimilarRulesInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<PersonWhereInput>;
};

export type Quote = {
  __typename?: 'Quote';
  _id: Scalars['String']['output'];
  _type?: Maybe<Scalars['String']['output']>;
  author?: Maybe<Scalars['String']['output']>;
  body?: Maybe<Scalars['String']['output']>;
};

export type Resource = {
  __typename?: 'Resource';
  _id: Scalars['String']['output'];
  _type?: Maybe<Scalars['String']['output']>;
  body?: Maybe<Scalars['String']['output']>;
  type?: Maybe<Scalars['String']['output']>;
  url?: Maybe<Scalars['String']['output']>;
};

/** SEO component. */
export type Seo = Component & {
  __typename?: 'SEO';
  _context?: Maybe<Context>;
  _id: Scalars['String']['output'];
  description?: Maybe<Scalars['String']['output']>;
  social_media_image?: Maybe<Array<Maybe<Asset>>>;
  title?: Maybe<Scalars['String']['output']>;
};

export type SearchOptionsInput = {
  includeNumeric?: InputMaybe<Scalars['Boolean']['input']>;
  includeReferences?: InputMaybe<Scalars['Boolean']['input']>;
};

export type SimilarRulesInput = {
  /** Adjust the weight of AI generated entities in the recommendation algorithm. */
  entities?: InputMaybe<Scalars['Float']['input']>;
  /** Adjust the weight of content references in the recommendation algorithm. */
  references?: InputMaybe<Scalars['Float']['input']>;
  /** Adjust the weight of tags in the recommendation algorithm. */
  tags?: InputMaybe<Scalars['Float']['input']>;
};

export type SoundCloudPost = {
  __typename?: 'SoundCloudPost';
  _id: Scalars['String']['output'];
  _type?: Maybe<Scalars['String']['output']>;
  url?: Maybe<Scalars['String']['output']>;
};

export type SpotifyPlaylist = {
  __typename?: 'SpotifyPlaylist';
  _id: Scalars['String']['output'];
  _type?: Maybe<Scalars['String']['output']>;
  url?: Maybe<Scalars['String']['output']>;
};

export type Text = {
  __typename?: 'Text';
  _id: Scalars['String']['output'];
  _type?: Maybe<Scalars['String']['output']>;
  body?: Maybe<Scalars['String']['output']>;
  format?: Maybe<TextFormat>;
  html?: Maybe<Scalars['String']['output']>;
  text?: Maybe<Scalars['String']['output']>;
};

export enum TextFormat {
  Code = 'Code',
  H1 = 'H1',
  H2 = 'H2',
  H3 = 'H3',
  H4 = 'H4',
  H5 = 'H5',
  H6 = 'H6',
  Html = 'HTML'
}

export type TikTokPost = {
  __typename?: 'TikTokPost';
  _id: Scalars['String']['output'];
  _type?: Maybe<Scalars['String']['output']>;
  url?: Maybe<Scalars['String']['output']>;
};

export type TwitterPost = {
  __typename?: 'TwitterPost';
  _id: Scalars['String']['output'];
  _type?: Maybe<Scalars['String']['output']>;
  url?: Maybe<Scalars['String']['output']>;
};

export type VimeoPost = {
  __typename?: 'VimeoPost';
  _id: Scalars['String']['output'];
  _type?: Maybe<Scalars['String']['output']>;
  url?: Maybe<Scalars['String']['output']>;
};

export type YouTubePost = {
  __typename?: 'YouTubePost';
  _id: Scalars['String']['output'];
  _type?: Maybe<Scalars['String']['output']>;
  url?: Maybe<Scalars['String']['output']>;
};

/** Event type is specifying the kind of event the customer has with your content. */
export enum _Event {
  Bookmark = 'Bookmark',
  Clickthrough = 'Clickthrough',
  Comment = 'Comment',
  Like = 'Like',
  Purchase = 'Purchase',
  Share = 'Share',
  Subscribe = 'Subscribe',
  View = 'View',
  Vote = 'Vote'
}

/** This union type contains all components and remote sources. */
export type _Prepr_Types = ApplePodcast | ArticleCollection | Assets | Coordinates | FacebookPost | ImageAndText | InstagramPost | NavigationItem | PageHeader | PreprExampleShopCollection | ProductCollection | Quote | Resource | Seo | SoundCloudPost | SpotifyPlaylist | Text | TikTokPost | TwitterPost | VimeoPost | YouTubePost;

export type QueryQueryVariables = Exact<{ [key: string]: never; }>;


export type QueryQuery = { __typename?: 'Query', About?: { __typename?: 'About', title?: string | null, content?: Array<{ __typename?: 'ApplePodcast' } | { __typename?: 'ArticleCollection' } | { __typename?: 'Assets' } | { __typename?: 'Coordinates' } | { __typename?: 'FacebookPost' } | { __typename?: 'ImageAndText' } | { __typename?: 'InstagramPost' } | { __typename?: 'NavigationItem' } | { __typename?: 'PageHeader' } | { __typename?: 'PreprExampleShopCollection' } | { __typename?: 'ProductCollection' } | { __typename?: 'Quote' } | { __typename?: 'Resource' } | { __typename?: 'SEO' } | { __typename?: 'SoundCloudPost' } | { __typename?: 'SpotifyPlaylist' } | { __typename?: 'Text', text?: string | null } | { __typename?: 'TikTokPost' } | { __typename?: 'TwitterPost' } | { __typename?: 'VimeoPost' } | { __typename?: 'YouTubePost' } | null> | null, cover?: { __typename?: 'Asset', url?: string | null } | null } | null };

export type GetArticleByIdHeaderQueryVariables = Exact<{
  id?: InputMaybe<Scalars['String']['input']>;
}>;


export type GetArticleByIdHeaderQuery = { __typename?: 'Query', Article?: { __typename?: 'Article', title?: string | null, excerpt?: string | null, _publish_on?: string | null, content?: Array<{ __typename?: 'ApplePodcast' } | { __typename?: 'ArticleCollection' } | { __typename?: 'Assets', _type?: string | null, items?: Array<{ __typename?: 'Asset', _id: string, url?: string | null } | null> | null } | { __typename?: 'Coordinates' } | { __typename?: 'FacebookPost' } | { __typename?: 'ImageAndText' } | { __typename?: 'InstagramPost' } | { __typename?: 'NavigationItem' } | { __typename?: 'PageHeader' } | { __typename?: 'PreprExampleShopCollection' } | { __typename?: 'ProductCollection' } | { __typename?: 'Quote' } | { __typename?: 'Resource' } | { __typename?: 'SEO' } | { __typename?: 'SoundCloudPost' } | { __typename?: 'SpotifyPlaylist' } | { __typename?: 'Text', _type?: string | null, body?: string | null } | { __typename?: 'TikTokPost' } | { __typename?: 'TwitterPost' } | { __typename?: 'VimeoPost' } | { __typename?: 'YouTubePost' } | null> | null, authors: Array<{ __typename?: 'Person', full_name?: string | null, profile_pic?: Array<{ __typename?: 'Asset', url?: string | null } | null> | null }>, categories: Array<{ __typename?: 'Category', title?: string | null, _slug?: string | null, icon?: Array<{ __typename?: 'Asset', url?: string | null } | null> | null }> } | null };

export type GetArticleByIdQueryVariables = Exact<{
  id?: InputMaybe<Scalars['String']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
}>;


export type GetArticleByIdQuery = { __typename?: 'Query', Article?: { __typename?: 'Article', title?: string | null, excerpt?: string | null, _publish_on?: string | null, content?: Array<{ __typename?: 'ApplePodcast' } | { __typename?: 'ArticleCollection' } | { __typename?: 'Assets', _type?: string | null, items?: Array<{ __typename?: 'Asset', _id: string, url?: string | null } | null> | null } | { __typename?: 'Coordinates' } | { __typename?: 'FacebookPost' } | { __typename?: 'ImageAndText' } | { __typename?: 'InstagramPost' } | { __typename?: 'NavigationItem' } | { __typename?: 'PageHeader' } | { __typename?: 'PreprExampleShopCollection' } | { __typename?: 'ProductCollection' } | { __typename?: 'Quote' } | { __typename?: 'Resource' } | { __typename?: 'SEO' } | { __typename?: 'SoundCloudPost' } | { __typename?: 'SpotifyPlaylist' } | { __typename?: 'Text', _type?: string | null, body?: string | null } | { __typename?: 'TikTokPost' } | { __typename?: 'TwitterPost' } | { __typename?: 'VimeoPost' } | { __typename?: 'YouTubePost' } | null> | null, authors: Array<{ __typename?: 'Person', full_name?: string | null, profile_pic?: Array<{ __typename?: 'Asset', url?: string | null } | null> | null }>, categories: Array<{ __typename?: 'Category', title?: string | null, _slug?: string | null, icon?: Array<{ __typename?: 'Asset', url?: string | null } | null> | null }> } | null };
