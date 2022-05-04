<script>
  export let error;
  const dev = process.env.NODE_ENV === "development";
</script>

<svelte:head>
  <title>404</title>
</svelte:head>

<header />

<div class="page-wrapper">
  <h1 class="page-title">404</h1>
  <div class="page-content">
    <p>Seems like you've found page that doesn't exist.</p>
    {#if dev && error.stack}
      <p>{error.stack}</p>
    {/if}
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
    min-height: 100vh;
  }
  .page-content p {
    color: var(--light);
  }
  @media screen and (max-width: 940px) {
    .page-title, .page-content {
      padding: 0 1rem;
    }
  }
</style>
