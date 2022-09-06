declare module "@beyonk/svelte-googlemaps" {
  import { SvelteComponentTyped } from "svelte";

  interface GoogleMapProps {
    apiKey: string;
    center?: string | null;
    zoom?: number;
    option?: {} | undefined;
  }

  export class GoogleMap extends SvelteComponentTyped<GoogleMapProps, {}, {}> {}
}
