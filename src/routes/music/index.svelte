<script>
  import MusicPlayer from "../../components/MusicPlayer.svelte";
  import { albums } from '../_content/albums';
</script>

<svelte:head>
  <title>Music | VANVI</title>
</svelte:head>

<header />
<div class="page-wrapper">
  <h1 class="page-title">Music</h1>
  <div class="page-content">
    {#each albums as album}
      <div>
        <MusicPlayer album={album} />
      </div>
    {/each}
  </div>
</div>

<style>
  header {
    height: 120px;
    background-color: var(--accent);
  }
  .page-wrapper {
    background-color: var(--dark-main);
  }
  .page-title {
    font-size: 5rem;
    font-weight: 600;
    transform: translateY(-50%);
    color: var(--light);
    text-transform: uppercase;
  }
  .page-title,
  .page-content {
    max-width: 940px;
    margin: 0 auto;
  }
  .page-content {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 3rem;
    padding: 1rem 0;
    min-height: calc(100vh - 79px); /** 100% - headerHeight */
  }
  .page-content :global(.music-player) {
    max-width: unset !important;
    color: var(--light) !important;
  }
  @media screen and (max-width: 640px) {
    .page-content {
      grid-template-columns: 1fr;
    }
  }

  @media screen and (max-width: 940px) {
    .page-title,
    .page-content {
      padding: 0 1rem;
    }
    .page-content{
      gap: 2rem;
      padding: 1rem;
    }
  }
</style>
