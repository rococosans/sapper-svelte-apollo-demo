<script>
	import Nav from '../components/Nav.svelte';

	// import ApolloBoostClient from 'apollo-boost';
	// import ApolloClient from 'apollo-client';
	// import { createHttpLink } from 'apollo-link-http';
	// import { InMemoryCache } from 'apollo-cache-inmemory';
	// import fetch from 'node-fetch';
	// import { setClient } from 'svelte-apollo';

	//** First way **
	// const link = createHttpLink({
	// 	uri: 'https://spotify-graphql-server.herokuapp.com/graphql'
	// }, fetch);

	// const clientCTX = new ApolloClient({
	// 	link,
	// 	cache: new InMemoryCache()
	// });

	//** Second way **
	// const clientCTX = new ApolloBoostClient({
	// 	uri: 'https://spotify-graphql-server.herokuapp.com/graphql'
	// }, fetch);

	// setClient(clientCTX);

	export let segment;
</script>

<style>
	main {
		position: relative;
		max-width: 56em;
		background-color: white;
		padding: 2em;
		margin: 0 auto;
		box-sizing: border-box;
	}

</style>

<Nav {segment} />

<main>
	<slot></slot>
</main>
