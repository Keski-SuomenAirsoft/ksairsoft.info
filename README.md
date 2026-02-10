See the webpage here: [https://ksairsoft-info.vercel.app/](https://ksairsoft-keski-suomenairsoft.vercel.app/)

# Welcome to the Github repository for Keski-Suomen Airsoft's Website

This is an [Astro](https://astro.build/) project. This project uses TypeScript, [MDX](https://mdxjs.com/) for content, and is hosted on Vercel.

The vision for this project is to set up a site that can easily be maintained by non-developers through markdown.

## Project Structure

- `src/pages/`: Contains the page files (`.md` for content pages)
- `src/components/`: Reusable Astro components (`.astro` files)
- `src/layouts/`: Layout components for pages
- `public/`: Static assets like images

## Making changes

### Markdown

In this project, we use Markdown and MDX to allow simple and easy editing of the page content. Markdown is a simple, but quite powerful markup language to format a text document. The text you are reading right now was written in markdown!

> - You can do _all_ **sorts** of ~stuff~ things with markdown!

### The front matter

At the top of each markdown file, we have front matter. It provides some information about the page so that Astro can set the title of the page, etc.

Here's an example front matter:

```
---
layout: ../layouts/Layout.astro
title: Tulevat pelit
sort: 8
---
```

Here's a quick reference of the front matter:

| field   | Description                                                                                                                  | required |
| ------- | ---------------------------------------------------------------------------------------------------------------------------- | -------- |
| `layout`  | The path of the layout to use on this page. | yes      |
| `title` | A title for the page, displayed in the title box above the page content, and used as the name for the navigation bar element |  yes     |
| `sort`  | a number, used for sorting the navigation bar. Lowest number first                                                   |  yes     |

### Editing in Github

1. Navigate to the [`src/pages`](https://github.com/braaar/ksairsoft.info/tree/main/src/pages) folder.

2. Click on the page you want to edit.

3. Click the pencil icon to begin editing.

4. Make the changes you want (see [this guide](https://www.markdownguide.org/getting-started/) for how to use markdown to format the page)

### Editing in an IDE

1. Clone the project.

2. Install dependencies:

```bash
yarn install
```

1. Run the development server:

```bash
yarn dev
```

Open [http://localhost:4321](http://localhost:4321) with your browser to see the local development preview.

You can start editing the pages by modifying `src/pages/<page>.md`. The page auto-refreshes as you edit the file.
