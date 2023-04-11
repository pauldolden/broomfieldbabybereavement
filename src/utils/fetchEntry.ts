export async function fetchEntry(entryId: string, astroFetch: any, type: 'entry' | 'asset') {
  const typePath = type === 'entry' ? 'entries' : 'assets';

  const res = await astroFetch(
    `https://cdn.contentful.com/spaces/${import.meta.env.CONTENTFUL_SPACE_ID
    }/environments/master/${typePath}/${entryId}?access_token=${import.meta.env.CONTENTFUL_ACCESS_TOKEN
    }`
  );

  const data = await res.json();

  return data;
}
