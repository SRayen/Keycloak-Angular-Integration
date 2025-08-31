const Keycloak = require("keycloak-connect");
const session = require("express-session");
const memoryStore = new session.MemoryStore();
const kcConfig = {
  clientId: "dny-netflix",
  bearerOnly: true,
  serverUrl: "http://localhost:8080",
  realm: "master",
  realmPublicKey:
    "MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAhJ+V/ZFbzk1OsxjYPAV4NOZOjocEo9VydUsgMQM7cpTOnwDCNiLSh7HZBAc+xxo9l/5qmVpeTT+ve373/q2LnZfnhUYKVtnKOIrQls4KqPDTeOlvDQnm7veFkeUNEDHBlzVSEKGUO/10VBrr10NQBhkhZIBMGQtN57GZm5XJxafGUjkwxv7XQnnhRpHPd3K9wMeT/Bqf/BsDUrTtcYVkLLW/MTsNaLDXN7x1mgHvux4mXhSpN1atYMGtsTPZ86gMwX4nzjOEkGjjqnPHangau4X1HTttmWOwqY5s/dsD7QcyoUWGJFkfsUsAj1Tb/kJjDTnYfhtOYf1uRjoW/VACkwIDAQAB",
};

export const keycloak = new Keycloak({ store: memoryStore }, kcConfig);
