// PM2 process file:  pm2 start deploy/ecosystem.config.cjs && pm2 save
module.exports = {
  apps: [
    {
      name: 'sakitechnologies',
      script: 'dist/sakitechnologies/server/server.mjs',
      instances: 'max',
      exec_mode: 'cluster',
      env: {
        NODE_ENV: 'production',
        PORT: 4000,
        SITE_URL: 'https://sakitechnologies.com',
        SITE_INDEXABLE: 'true', // set to 'false' on staging
      },
    },
  ],
};
