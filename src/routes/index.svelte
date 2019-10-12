<script context="module">
  // Here we import the graphql client
  import client from "../apollo.js";
  import { gql } from "apollo-boost";

  const GET_ARTISTS = gql`
    query getArtists {
      hi
      queryArtists {
        name
      }
    }
  `;

  export async function preload() {
    return {
      cache: await client.query({
        query: GET_ARTISTS
      })
    };
  }
</script>

<script>
  import { query } from "svelte-apollo";

  const artists = query(client, { query: GET_ARTISTS });
</script>

{#await $artists}
<p>Loading...</p>
{:then result}
<p>hi query: {result.data.hi}</p>
{:catch error}
<p>Error: {error}</p>
{/await}

<h1>Artists</h1>

{#await $artists}
<p>Loading...</p>
{:then result}

<ul>
  {#each result.data.queryArtists as { name } }
  <li>
    {name}
  </li>
  {/each}
</ul>

{:catch error}
<p>Error: {error}</p>
{/await}
