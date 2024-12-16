export default ({ env }) => ({
  host: env("HOST", "0.0.0.0"),
  port: env.int("PORT", 1338),
  app: {
    keys: env.array("APP_KEYS", [
      "SYk9J4yrk9bmsjofo4vGqA",
      "TeBKqubQBpoDT0shtZwAg",
    ]),
  },
  webhooks: {
    populateRelations: env.bool("WEBHOOKS_POPULATE_RELATIONS", false),
  },
  keys: env.array("APP_KEYS", [
    "SYk9J4yrk9bmsjofo4vGqA",
    "TeBKqubQBpoDT0shtZwAg",
  ]),
});
