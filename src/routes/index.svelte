<script>
	import ApolloClient, { gql } from 'apollo-boost';
	import fetch from 'node-fetch';
	import { setClient } from 'svelte-apollo';
	import { getClient, query } from 'svelte-apollo';

	const clientCTX = new ApolloClient({
		uri: 'https://spotify-graphql-server.herokuapp.com/graphql'
	}, fetch);

	setClient(clientCTX);

	const GET_ARTISTS = gql`
		query myquery {
			hi
			queryArtists {
				name
			}
		}
	`

	const client = getClient();
	const artists = query(client, { query: GET_ARTISTS });
</script>

{#await $artists}
<p>Loading...</p>
{:then result}

<h1>{result.data.hi}</h1>

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
