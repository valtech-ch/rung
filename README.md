# Rung

One Ring to rule them all.

Rung is the Vue version of [ring](https://github.com/valtech-ch/ring)

## Getting started
For now this is a Vue version of the Contentful Gatsby Blog example. So you'll need to create a personal Contentful account and add a `.contentful.json` file to the root:
```
{
  "CTF_SPACE_ID": <your-space-id>,
  "CTF_CDA_ACCESS_TOKEN": <your-access-token>,
  "CTF_MGMT_TOKEN": <your-mgmt-token>
}

```
The `CTF_MGMT_TOKEN` is only needed if you change the data types on Contentful and want to re-generate the types `types/generated/contentful.d.ts`
