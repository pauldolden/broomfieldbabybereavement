import { fetchEntry } from "./fetchEntry"

export async function fetchGalleryPreview(astroFetch: (path: string) => Promise<Response>, ids: string[]) {
  return Promise.all(
    ids.map(async (id) => {
      const res = await fetchEntry(id, astroFetch, "asset")

      return res
    })
  )
}
