# This is a custom NEXT 13 boilerplate that includes a setup for MUI & React Context.

## Getting Started

[Demo](https://next-mui-context-bp.vercel.app/)

Run the development server:

```bash
npm run dev
# or
yarn dev
```

## Structure

Everything is standardized to Next JS with a few caveats:

1. Styles are in the `styles` folder along with the MUI theme customizations for light and dark mode. The current `theme` state is stored as a user cookie, defaulted to `dark`
2. A services folder exist for abstracting away API calls.
3. A `components` folder exists for all abstracted components.
4. A `context` folder exists for the global react Context that is set in the first client component loaded after a page load.

## Pre commit hook

You can run `npx husky install` to install husky which should activate the pre-commit hook setup within `.husky/pre-commit`

More info on husky [here](https://typicode.github.io/husky/#/)

## State

In old Next, we were able to provide and automatically set global state using pageProps passed through the \_app.js file. In Next 13 we don't have that so the context has to be set at the top level client component per server route using the `useEffect` hook with the page's props.

## Deployment

You should be able to import this repo into Vercel and have it deploy automatically. Also make sure you update the Vercel env variables - for the `NEXT_PUBLIC_API_ENDPOINT_URL` make sure you change it from `localhost:3000` to whatever the production URL for your vercel instance is. For example, `https://next-mui-context-bp.vercel.app`
