<script type="module">
    import { onMount } from 'svelte';
    import { register } from 'swiper/element/bundle';
    import "../styles/page/home/home.css";
    import Banner from "$lib/pageConponent/home/banner.svelte";
    import Muchwins from '$lib/pageConponent/home/muchwins.svelte';

    register();
</script>

<div id="home" class="sc-jwQYvw eRdxAb">
    <Banner />
    <div class="sc-gFSQbh gyJkwe">
        <Muchwins />
    </div>
</div>