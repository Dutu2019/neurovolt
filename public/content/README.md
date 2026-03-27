## Public content

This folder is served directly by Next.js (everything under `public/` is web-accessible).

### Projects

- `public/content/projects/<project-slug>/project.yml`: metadata for a project
- `public/content/projects/<project-slug>/*`: assets for that project (images, PDFs, etc.)

### Articles

Folder-based articles (recommended for assets):

- `public/content/articles/<article-slug>/article.md`: markdown + YAML frontmatter
- `public/content/articles/<article-slug>/*`: assets for that article

### How parsers resolve image paths

In `project.yml` / article frontmatter, image fields can be:

- A URL (starts with `http(s)://` or `/`) → used as-is
- A relative filename (e.g. `cover.jpg`) → automatically mapped to:
  - Projects: `/content/projects/<slug>/cover.jpg`
  - Articles: `/content/articles/<slug>/cover.jpg`

