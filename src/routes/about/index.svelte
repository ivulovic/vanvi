<script>
</script>

<svelte:head>
  <title>About | VANVI</title>
</svelte:head>

<header />

<div class="page-wrapper">
  <h1 class="page-title">About</h1>
  <div class="page-content">
    <p>The content you see on this site has a special value for me.</p>

    <p>
      Initially, there was no need for a site, but as time went on, a lot of
      created music content was collected and I had a feeling that it was too
      worthless if it just stood on a computer disk and was not visible to
      anyone.
    </p>

    <p>
      I like to play music, so this site is just one of my hobbies that I wanted
      to emphasize and make it part of my portfolio.
    </p>

    <p>
      Everything I have created so far, as well as what I have yet to do, will
      be published here.
    </p>

    <p>
        In case you wanted to connect or talk to me, you can find me on 
        <a class="link" target="_blank" href="https://instagram.com/vanvi.mp3">Instagram</a> by searching for <a class="link" target="_blank" href="https://instagram.com/vanvi.mp3">@vanvi.mp3</a> or
        <a class="link" target="_blank" href="https://twitter.com/vanvi_mp3">Twitter</a> by searching for <a class="link" target="_blank" href="https://twitter.com/vanvi_mp3">@vanvi_mp3</a>.
        I've already done few collaborations with friends, so if you wanted to work with me - say Hi!
      </p>

    <p>Thank you for visiting.</p>
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
    gap: 1.6rem;
    display: flex;
    flex-direction: column;
  }
  .page-content p {
    color: var(--light);
    line-height: 1.6rem;
    font-weight: 400;
    text-align: justify;
  }

  .link{
      text-decoration: none;
      color: var(--accent);
      font-weight: 400;
  }

  @media screen and (max-width: 940px) {
    .page-title,
    .page-content {
      padding: 0 1rem;
    }
  }
</style>
