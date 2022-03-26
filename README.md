See the webpage here: https://ksairsoft-info.vercel.app/

# Welcome to the Github repository for Keski-Suomen Airsoft's Website!

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app). This project uses TypeScript, [Theme UI](https://theme-ui.com/) and [ContentLayer](https://github.com/contentlayerdev/contentlayer), among other packages. The site is hosted on Vercel.

The vision for this project is to set up a site that can easily be maintained by non-developers through markdown, while using powerful, cutting edge web technology which allows for developing performant and powerful functionality.

## Making changes

### Markdown

In this project, we use markdown and the [`contentlayer`](https://github.com/contentlayerdev/contentlayer) package to allow simple and easy editing of the page content.
Markdown is a simple, but quite powerful markup language to format a text document. The text you are reading right now was written in markdown!

> - You can do *all* **sorts** of ~stuff~ things with markdown!

### The front matter

At the top of each markdown file, we have a front matter. It provides some information about the page so that Next and contentlayer can put the page in the NavBar, set the title of the page, etc.

Here's a quick reference of the front matter:

| field   | Description | required |
| ------- |------------ | -------- |
| `title` | A title for the page, displayed in the title box above the page content, and used as the name for the navigation bar element | yes |
| `slug`  | The url for the page. Try to stick to using a-z, 0-9 and hyphen (`-`), otherwise the URLs might break or simply look ugly | yes |
| `sort`  | a number, used for sorting the navigation bar element. Lowest number first | yes |

### Editing in the browser

1. Navigate to the [`src/mdPages`](https://github.com/braaar/ksairsoft.info/tree/main/src/mdPages) folder.

2. Click on the page you want to edit.

3. Click the pencil icon to begin editing.

4. Make the changes you want (see [this guide](https://www.markdownguide.org/getting-started/) for how to use markdown to format the page)


### Editing in an IDE

1. Clone the project.

2. Install dependencies:

```bash
yarn
```

3. Run the development server:

```bash
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the local development preview.

You can start editing the pages by modifying `src/mdPages/<page>.md`. The page auto-updates as you edit the file.
