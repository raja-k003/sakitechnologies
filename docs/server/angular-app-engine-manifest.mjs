
export default {
  basePath: "/",
  allowedHosts: [
  "sakitechnologies.com",
  "www.sakitechnologies.com",
  "localhost"
],
  supportedLocales: {
  "en-US": ""
},
  entryPoints: {
    "": () => import('./main.server.mjs')
  },
};
