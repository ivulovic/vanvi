<script>
  import { stores, goto } from "@sapper/app";
  const { page } = stores();

  let audioElement;

  export let album;

  const tracks = album.tracks;

  let activeId = tracks[0].id;

  $: selectedTrack = tracks.find((x) => x.id === activeId);

  function onItemClick(e, item) {
    activeId = item.id;
    if (audioElement) {
      audioElement.pause();
      audioElement.currentTime = 0;
      audioElement.src = item.fileName;
      audioElement.play();
    }
  }
</script>

<div class="music-player">
  <figure>
    <img src={album.image} alt={`${album.name} cover image`} />
    <figcaption>
      <p class="song-title">
        {selectedTrack ? selectedTrack.title : "Select a song you wanna hear"}
      </p>
      <p>
        <span class="song-author">{album.performer}</span>
        <span class="song-album">/ {album.name}</span>
      </p>
    </figcaption>
  </figure>
    <audio
      controls
      bind:this={audioElement}
      controlslist="nodownload"
    >
      <source
        src={selectedTrack.fileName || ""}
        type="audio/mpeg"
      />
      Your browser does not support the audio element.
    </audio>

  <p class="album-title">{album.name}</p>

  <ul>
    {#each tracks as item}
      <li
        class={selectedTrack && item.id === selectedTrack.id /*  && isDirty */
          ? "active"
          : ""}
        on:click={(e) => onItemClick(e, item)}
      >
      {item.title}
      </li>
    {/each}
  </ul>
</div>

<style>
  .music-player {
    max-width: 450px;
    margin: 0 auto;
    color: var(--dark-light);
    font-weight: 600;
    font-size: 1rem;
  }
  .music-player img {
    max-width: 100%;
    display: flex;
    margin: 0 auto;
  }
  audio {
    width: 100%;
    margin-top: 1rem;
  }

  .song-title,
  .album-title {
    font-weight: 600;
    font-size: 1rem;
    line-height: 3rem;
    text-transform: uppercase;
  }
  .song-title {
    padding-top: 0.5rem;
  }
  .album-title {
    line-height: 1.5rem;
    padding: 1rem 0rem;
    border-bottom: 1px solid var(--divider);
  }
  .song-author,
  .song-album {
    text-transform: uppercase;
    letter-spacing: 0.05rem;
    font-size: 0.8rem;
    margin-bottom: 0.5rem;
    display: inline-block;
    color: var(--neutral-main);
  }
  ul li {
    font-size: 0.8rem;
    list-style: none;
    font-weight: 600;
    line-height: 1.5rem;
    color: var(--neutral-light);
    transition: all 0.3s ease;

    
    display: block;
    padding: 1rem 0rem;
    cursor: pointer;
  }
  ul li.active {
    color: inherit;
  }
  ul li:hover {
    color: inherit;
    cursor: pointer;
  }
  ul li:not(:last-child) {
    border-bottom: 1px solid var(--divider);
  }
  /* .info-button {
    border: 1px solid var(--divider);
    color: inherit;
    text-decoration: none;
    text-transform: uppercase;
    padding: 0.5rem 0.5rem;
    margin-top: 0.5rem;
    min-width: 125px;
    display: inline-block;
    text-align: center;
    cursor: pointer;
    transition: all 0.3s ease;
  }
  .info-button:hover {
    border-color: var(--accent);
    color: white;
    background-color: var(--accent);
  } */
</style>
