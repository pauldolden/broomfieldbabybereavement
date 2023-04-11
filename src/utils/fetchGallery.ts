export async function fetchGallery(astroFetch: (path: string) => Promise<Response>, { limit = 1000 }) {
  const res = await astroFetch(
    `https://cdn.contentful.com/spaces/${import.meta.env.CONTENTFUL_SPACE_ID
    }/environments/master/assets?access_token=${import.meta.env.CONTENTFUL_ACCESS_TOKEN}&mimetype_group=image&limit=${limit}`
  )

  const { items } = await res.json();

  return items;
};
