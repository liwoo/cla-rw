# Christian Life Assembly Church Website

[CLA Rwanda](https://clarwanda.org) Website is built using [Tailwind CSS](https://tailwindcss.com), [Next.js](https://nextjs.org)
and [TypeScript](https://www.typescriptlang.org/). The Content Management System is powered by [Sanity.io](https://www.sanity.io/)
and you can use [GROQ](https://www.sanity.io/docs/groq) to query the data.

## UX/UI Design

The Adobe XD design files are available in [this design](https://drive.google.com/file/d/1MzEeYxjpYszEG2tyneYZCnIhtUhPZWZM/view?usp=share_link) file.

## Static Site Generation

We use [Next.js](https://nextjs.org) to generate static HTML pages at build time. This means that the site is
fast and secure, and that search engines can easily index the content. The site is also fully accessible,
and works well on all devices. The site is hosted on [Netlify](https://www.netlify.com/). The site is
automatically rebuilt and redeployed when changes are pushed to the `main` branch.

To fetch the data on a page, we use Next.js's [`getStaticProps`](https://nextjs.org/docs/basic-features/data-fetching/get-static-props) function. This function is called at build time
and the data is passed to the page component as a prop.

### Fetching Static Data for Specific Pages

```js
function BlogPost({ post }) {
  return (
    <div>
      <h1>{post.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: post.body }} />
    </div>
  );
}

// params contains the dynamic route parameters automatically passed by Next.js
export async function getStaticProps({ params }) {
  //fetch the post using groq and the [Sanity client](https://www.npmjs.com/package/@sanity/client
  const post = await client.fetch(groq`[slug == $slug][0]`, {
    slug: params.slug,
  });

  //this will automatically pass the post data to the page component as a prop
  return {
    props: {
      post,
    },
  };
}
```

### Generating Static Pages

From the example below, we might not want to pre-render all the blogposts at build time.  
We can use the `fallback` option to generate the pages at request time.

Here's how it works:

- Next.js will first generate the static pages for all the paths specified in getStaticPaths.
- If a user requests a dynamic route that is not generated yet (i.e. the path is not found in the list of paths generated in step 1), Next.js will render a fallback version of the page.
- While the user is looking at the fallback version of the page, Next.js will generate the static page for that path in the background. Once it's generated, the user's next request for that path will be served the statically generated page.

```js
// This function is called at build time
export async function getStaticPaths() {
  // Call an external API endpoint to get posts, typicall the first 100 or so
  const posts = await client.fetch(groq`*[_type == "post"]{slug}`);

  // Get the paths we want to pre-render based on posts
  const paths = posts.map((post) => ({
    params: { slug: post.slug },
  }));

  // We'll pre-render only these paths at build time.
  // { fallback: true } means other routes should be generated at request time
  return { paths, fallback: true };
}
```

## Getting started

To get started with this project, first update your environment variables in the `.env` file, to add the Sanity API token.

```bash
SANITY_PROJECT_ID=your-project-id
SANITY_DATASET=your-dataset-name
SANITY_TOKEN=your-api-token
# Any other environment variables you want to use in your application
```

Next, install the dependencies:

```bash
npm install
```

Next, run the development server:

```bash
npm run dev
```

Finally, open [http://localhost:3000](http://localhost:3000) in your browser to view the website.

## Customizing

You can start editing this template by modifying the files in the `/src` folder. The site will auto-update as you edit
these files.

Below is the structure of the `/src` folder:

```bash
.
├── components/
│   ├── SomeReusableComponent.tsx
│   ├── cta/
│   │   ├── SomeCallToActionComponent.tsx
│   └── icons/
│       ├── SomeCustomeIconNotFoundInHeroIcons.tsx
├── images/
│   ├── some-static-image.png
├── pages
│   ├── _app.tsx
│   ├── _document.jsx
│   ├── about.tsx
│   ├── index.tsx
│   ├── posts
│   │   └── [slug].tsx
│   └── soon.tsx
├── styles/
│   └── tailwind.css
├── sanity
│   ├── browser-client.ts
│   ├── client.ts
│   ├── queries
│   │   ├── home-page.ts
│   ├── posts.ts
│   └── schema.ts
└── utils/
    └── helpers.ts
    |__ types.ts
```

## License

This site template is a commercial product and is licensed under
the [Tailwind UI license](https://tailwindui.com/license).

## Learn more

To learn more about the technologies used in this site template, see the following resources:

- [Tailwind CSS](https://tailwindcss.com/docs) - the official Tailwind CSS documentation
- [Next.js](https://nextjs.org/docs) - the official Next.js documentation
- [Headless UI](https://headlessui.dev) - the official Headless UI documentation
