<script lang="ts">
  import { inview, Options } from "svelte-inview";
  import { fade } from "svelte/transition";
  import HeaderNav from "@components/HeaderNav.svelte";

  let isInvIew = true;

  function handleChange({ detail }: CustomEvent<ObserverEventDetails>) {
    isInvIew = detail.inView;
  }

  const options: Options = {};
</script>

<section
  use:inview={options}
  on:change={handleChange}
  id="header"
  class="relative z-10 hidden lg:block"
>
  {#if isInvIew}
    <header class="header-base">
      <HeaderNav showBee={false} />
    </header>
  {:else}
    <header
      transition:fade={{ duration: 300 }}
      class="header-base bg-white shadow-sm fixed"
    >
      <HeaderNav showBee={true} />
    </header>
  {/if}
</section>
