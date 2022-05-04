<script>
  import MusicPlayer from "../components/MusicPlayer.svelte";
  import { albums } from "./_content/albums.js";

  const latestAlbum = albums[albums.length - 1].slug;
  const activeAlbum = albums.find((x) => x.slug == latestAlbum);
</script>

<svelte:head>
  <title>VANVI</title>
</svelte:head>

<div class="page-content">
  <div class="left" />
  <div class="right">
    {#if activeAlbum}
      <MusicPlayer album={activeAlbum} />
    {/if}
  </div>
</div>

<style>
  .page-content {
    display: grid;
    gap: 1rem;
    grid-template-columns: 1fr 1fr;
  }
  /* .page-content .left, */
  .page-content .right {
    padding: 2rem 2rem 2rem 1rem;
  }
  .page-content .left {
    background-image: url("/images/homebg.jpg");
    /* min-height: 100vh; */
    background-position: top;
    background-size: cover;
    min-height: calc(100vh - 79px); /** 100% - headerHeight */
  }

  @media screen and (max-width: 640px) {
    .page-content {
      grid-template-columns: 1fr;
    }
    .page-content .left {
      min-height: 450px;
    }
    .page-content .right {
      padding: 0rem 1rem;
    }
    .page-content .right :global(.music-player) {
      max-width: unset;
    }
  }
</style>
