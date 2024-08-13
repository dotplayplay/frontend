<script>
	import Screens from '$lib/component/screens.svelte';
    import Navbar from "$lib/component/navbar.svelte";
    import "../styles/global.css"

</script>

<div id="root">
    <Screens />
    <Navbar />
    <slot></slot>
</div>