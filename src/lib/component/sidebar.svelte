<script>
    import "../../styles/component/sidebar.css"
    import { screen } from '$lib/store/screen';
    import { page } from "$app/stores";

    $: route = $page?.url.pathname

    function goToExternalSite(route) {
        window.open(route, '_self', 'noopener noreferrer');
    }


</script>

<div id="sidebar" class="sc-jHkVzv eTxQfM {$screen.sideHasExpand === $screen.sideFold ? "fold" : "unfold"} ">
    <div class="{$screen.sideHasExpand === $screen.sideFold ? "small-sidebar" : "large-sidebar"} hidden-scroll-y">
        <div class=" {$screen.sideHasExpand === $screen.sideFold ? "sc-bilyIR ioXbGd" : "sc-uojGG hksQGj"}">
            <div class="tab-more">
                <div class="tab-item select small-icon">
                    <img alt="icon" src="{$screen.sideHasExpand === $screen.sideFold ? $screen.smallLagos : $screen.largeLogos}">
                </div>
            </div>
        </div>

        <button on:click={()=> goToExternalSite("/")} class="sc-iNGGcK knLCVT menu-item {route === "/"  ? "select" : ""} " >
            <div class="{$screen.sideHasExpand === $screen.sideFold ?  "menu-mobile" : "menu-pc"} ">
                <img alt="menu-icon" src="https://static.nanogames.io/assets/home.e1cf89b4.png">
                {#if $screen.sideHasExpand !== $screen.sideFold}
                    <span>Home</span>
                {/if}
            </div>
        </button>

        <button on:click={()=> goToExternalSite("/lottery")} class="sc-iNGGcK knLCVT menu-item {route === "/lottery" ? "select" : ""}" >
            <div class="{$screen.sideHasExpand === $screen.sideFold ?  "menu-mobile" : "menu-pc"} ">
                <img alt="menu-icon" src="https://static.nanogames.io/assets/lottery.bc95b607.png">
                {#if $screen.sideHasExpand !== $screen.sideFold}
                    <span>Lottery</span>
                {/if}
            </div>
        </button>

    </div>
</div>