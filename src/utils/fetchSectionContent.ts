interface PartialContentBlock {
  sys: {
    id: string;
  };
}

export async function fetchSectionContent<T extends PartialContentBlock>(
  astroFetch: (path: string) => Promise<Response>,
  sectionId: string
) {
  const res = await astroFetch(
    `https://cdn.contentful.com/spaces/${
      import.meta.env.CONTENTFUL_SPACE_ID
    }/environments/master/entries/${sectionId}?access_token=${
      import.meta.env.CONTENTFUL_ACCESS_TOKEN
    }`
  );

  const data = await res.json();

  const { fields } = data;
  const { contentBlocks } = fields;

  const blocks = await Promise.all(
    contentBlocks.map(async (block:T) => {
      const res = await astroFetch(
        `https://cdn.contentful.com/spaces/${
          import.meta.env.CONTENTFUL_SPACE_ID
        }/environments/master/entries/${block.sys.id}?access_token=${
          import.meta.env.CONTENTFUL_ACCESS_TOKEN
        }`
      );

      const data = await res.json();

      return data;
    })
  );

  return blocks;
}
