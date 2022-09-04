<script lang="ts">
  import { inview, Options } from "svelte-inview";
  import StaticHeader from "@components/StaticHeader.svelte";
  import ScrollingHeader from "@components/ScrollingHeader.svelte";

  let isInvIew: boolean;

  function handleChange({ detail }: CustomEvent<ObserverEventDetails>) {
    isInvIew = detail.inView;
  }

  const options: Options = {};
</script>

<section use:inview={options} on:change={handleChange} id="header">
  {#if isInvIew}
    <StaticHeader />
  {:else}
    <ScrollingHeader />
  {/if}
</section>
