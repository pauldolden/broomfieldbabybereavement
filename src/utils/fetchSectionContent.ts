import { fetchEntry } from "./fetchEntry";

interface PartialContentBlock {
  sys: {
    id: string;
  };
}

export async function fetchSectionContent<T extends PartialContentBlock>(
  astroFetch: (path: string) => Promise<Response>,
  sectionId: string
) {
  const data = await fetchEntry(sectionId, astroFetch, "entry");

  const { fields } = data;
  const { contentBlocks } = fields;
  console.log(contentBlocks)

  const blocks = await Promise.all(
    contentBlocks.map(async (block: T) => {
      const data = await fetchEntry<T>(block.sys.id, astroFetch, "entry");

      return data;
    })
  );

  return blocks;
}
