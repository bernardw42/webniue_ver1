var homeEn = require("./home/home_en.json");
var homeId = require("./home/home_id.json");
var aboutusEn = require("./aboutus/aboutus_en.json");
var aboutusId = require("./aboutus/aboutus_id.json");
var servicesEn = require("./services/services_en.json");
var servicesId = require("./services/services_id.json");
var blogEn = require("./blog/blog_en.json");
var blogId = require("./blog/blog_id.json");
var contactusEn = require("./contactus/contactus_en.json");
var contactusId = require("./contactus/contactus_id.json");
var ourworksEn = require("./ourworks/ourworks_en.json")
var ourworksId = require("./ourworks/ourworks_id.json")


const i18n = {
  translations: {
    en: {
      ...homeEn,
      ...aboutusEn,
      ...servicesEn,
      ...blogEn,
      ...contactusEn,
      ...ourworksEn,
    },
    id: {
      ...homeId,
      ...aboutusId,
      ...servicesId,
      ...blogId,
      ...contactusId,
      ...ourworksId,
    }
  },
  defaultLang: "en",
  languageDataStore: "query", // Store language in query parameter
  useBrowserDefault: true,
};

module.exports = i18n;
