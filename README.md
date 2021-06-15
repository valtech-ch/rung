# Rung

One Ring to rule them all.

Rung is the Vue version of [ring](https://github.com/valtech-ch/ring/blob/main/docs/02-what-is-ring.md)

## Getting started

Check the ring documentation for a general overview: <https://github.com/valtech-ch/ring/blob/main/docs/01-getting-started.md>

As usual do a `npm run ci` to get the node dependencies.

Get access to the Valtech Contentful ring space and add a `.contentful.json` file to the root (we don't want to have these tokens available on a public github):
```
{
  "CTF_SPACE_ID": <your-space-id>,
  "CTF_CDA_ACCESS_TOKEN": <your-access-token>,
  "CTF_MGMT_TOKEN": <your-mgmt-token>
}

```
The `CTF_MGMT_TOKEN` is only needed if you change the data types on Contentful and want to re-generate the types `types/generated/contentful.d.ts`
To do so, just use `npm run generate-types`

To start the local instance just `npm run dev`

## How to contribute

Check the [Component Board](https://github.com/valtech-ch/rung/projects/1) for To do or Backlog items. Assign them to you and start implementing it.

If you have an idea for a new component first define the model by following this guide: <https://github.com/valtech-ch/ring/blob/main/docs/10-how-to-create-a-model.md>
