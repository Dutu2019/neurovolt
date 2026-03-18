export type ContentImageRef =
  | {
      /**
       * Path relative to its content folder (e.g. "cover.jpg").
       * Note: content/ is not automatically web-served; this is a reference.
       */
      kind: "content-file";
      relativePath: string;
    }
  | {
      /**
       * Public URL path (e.g. "/images/foo.jpg") or an absolute URL.
       */
      kind: "url";
      url: string;
    };

export interface ProjectContent {
  slug: string;
  title: string;
  shortDescription?: string;
  description?: string;
  tags?: string[];
  links?: Record<string, string>;
  coverImage?: ContentImageRef;
  gallery?: ContentImageRef[];
  /**
   * Non-metadata files found inside the project's folder.
   * Useful if you want to build a copy-to-public step later.
   */
  assetFiles: string[];
  /**
   * Absolute path on disk (server-only).
   */
  _absoluteDir: string;
}

export interface ArticleContent {
  slug: string;
  title: string;
  author?: string;
  date?: string;
  description?: string;
  tags?: string[];
  coverImage?: ContentImageRef;
  body: string;
  /**
   * Absolute path on disk (server-only).
   */
  _absolutePath: string;
}
