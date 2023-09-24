export async function fetchEntries(typeId: string, astroFetch: any) {

  const res = await astroFetch(
    `https://cdn.contentful.com/spaces/${import.meta.env.CONTENTFUL_SPACE_ID
    }/environments/master/entries?content_type=${typeId}&access_token=${import.meta.env.CONTENTFUL_ACCESS_TOKEN
    }`
  );

  const data = await res.json();

  return data;
}
