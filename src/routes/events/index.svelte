<script>
  import Event from "../../components/Event.svelte";
  import { events } from "../_content/events.js";
  const hasEvents = events.length;
</script>

<svelte:head>
  <title>Events | VANVI</title>
</svelte:head>

<header />

<div class="page-wrapper">
  <h1 class="page-title">Events</h1>
  <div class="page-content">
    {#if hasEvents}
      {#each events as event}
        <Event {event} />
      {/each}
    {/if}
    {#if !hasEvents}
      <p>There's no upcomming events.</p>
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
    min-height: calc(100vh - 79px); /** 100% - headerHeight */
    gap: 2rem;
    display: flex;
    flex-direction: column;
  }
  .page-content p {
    color: var(--light);
  }

  @media screen and (max-width: 940px) {
    .page-title,
    .page-content {
      padding: 0 1rem;
    }
  }
</style>
