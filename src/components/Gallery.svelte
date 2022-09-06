<script>
  import emblaCarouselSvelte from "embla-carousel-svelte";

  let emblaApi;

  const onInit = (event) => {
    emblaApi = event.detail;
    // Embla API is ready
  };

  const emblaConfig = {
    options: { loop: false, slidesToScroll: 3 },
  };

  const images = [
    "/images/about.jpg",
    "/images/support.jpg",
    "/images/temp-map.jpg",
    "/images/about.jpg",
    "/images/support.jpg",
    "/images/temp-map.jpg",
    "/images/about.jpg",
    "/images/support.jpg",
    "/images/temp-map.jpg",
  ];
</script>

<section id="gallery" class="h-[512px] bg-yellow py-20">
  <div class="section-container flex flex-col items-center relative">
    <h2 class="section-title text-center mb-3">Gallery</h2>
    <button
      on:click={emblaApi.scrollPrev()}
      class="absolute left-0 top-1/2 -translate-y-1/2 z-10"
    >
      <svg
        width="50"
        height="50"
        viewBox="0 0 50 50"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0 25C0 38.7857 11.2143 50 25 50C38.7857 50 50 38.7857 50 25C50 11.2143 38.7857 0 25 0C11.2143 0 0 11.2143 0 25ZM46.5 25C46.5 36.8571 36.8571 46.5 25 46.5C13.1429 46.5 3.5 36.8571 3.5 25C3.5 13.1429 13.1429 3.5 25 3.5C36.8571 3.5 46.5 13.1429 46.5 25Z"
          fill="white"
        />
        <path
          d="M19.1531 26.2347L26.5102 33.5919C27.1939 34.2755 28.3061 34.2755 28.9898 33.5919C29.6735 32.9082 29.6735 31.7959 28.9898 31.1123L22.8673 24.9898L28.9898 18.8674C29.6735 18.1837 29.6735 17.0714 28.9898 16.3878C28.6531 16.051 28.2041 15.8776 27.7551 15.8776C27.3061 15.8776 26.8571 16.051 26.5204 16.3878L19.1633 23.7449C18.4694 24.449 18.4694 25.551 19.1531 26.2347Z"
          fill="white"
        />
      </svg>
    </button>
    <div class="embla" use:emblaCarouselSvelte={emblaConfig} on:init={onInit}>
      <div class="embla__container">
        {#each images as image}
          <img class="embla__slide rounded-lg" src={image} alt="bleruh" />
        {/each}
      </div>
    </div>
    <button
      on:click={emblaApi.scrollNext()}
      class="absolute right-0 top-1/2 -translate-y-1/2 z-10"
    >
      <svg
        width="50"
        height="50"
        viewBox="0 0 50 50"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M50 25C50 11.2143 38.7857 0 25 0C11.2143 0 0 11.2143 0 25C0 38.7857 11.2143 50 25 50C38.7857 50 50 38.7857 50 25ZM3.5 25C3.5 13.1429 13.1429 3.5 25 3.5C36.8571 3.5 46.5 13.1429 46.5 25C46.5 36.8571 36.8571 46.5 25 46.5C13.1429 46.5 3.5 36.8571 3.5 25Z"
          fill="white"
        />
        <path
          d="M30.8469 23.7653L23.4898 16.4081C22.8061 15.7245 21.6939 15.7245 21.0102 16.4081C20.3265 17.0918 20.3265 18.2041 21.0102 18.8877L27.1326 25.0102L21.0102 31.1326C20.3265 31.8163 20.3265 32.9285 21.0102 33.6122C21.3469 33.949 21.7959 34.1224 22.2449 34.1224C22.6939 34.1224 23.1428 33.949 23.4796 33.6122L30.8367 26.2551C31.5306 25.551 31.5306 24.449 30.8469 23.7653Z"
          fill="white"
        />
      </svg>
    </button>
    <a href="/gallery" class="btn bg-white">View All</a>
  </div>
</section>

<style>
  .embla {
    overflow: hidden;
    margin-bottom: 30px;
  }
  .embla__container {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 30px;
    height: 235px;
  }
  .embla__slide {
    max-width: 314px;
  }
</style>
