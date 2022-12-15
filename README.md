This is a custom NEXT 13 boilerplate that includes a setup for MUI & React Context.

## Getting Started

First add a `.env.local` file to the root of the project with the following content:

```bash
API_ENDPOINT_URL=http://localhost:3000
```

Then, run the development server:

```bash
npm run dev
# or
yarn dev
```

## Structure

Everything is standardized to Next JS with a few caveats:

1. Styles are in the `styles` folder along with the MUI theme customizations for light and dark mode.
2. A services folder exist for abstracting away API calls.
3. A `components` folder exists for all abstracted components.
4. A `context` folder exists for the global react Context that is set in the first client component loaded after a page load.

## State

In old Next, we were able to provide and automatically set global state using pageProps passed through the \_app.js file. In Next 13 we don't have that so the context has to be set at the top level client component per server route using the `useEffect` hook with the page's props.
