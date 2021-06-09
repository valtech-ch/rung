const contentfulManagement = require('contentful-management');
const contentfulConfig = require('./.contentful.json');

module.exports = function () {
  const contentfulClient = contentfulManagement.createClient({
    accessToken: contentfulConfig.CTF_MGMT_TOKEN,
  });

  return contentfulClient
    .getSpace(contentfulConfig.CTF_SPACE_ID)
    .then((space) => space.getEnvironment('master'));
};
