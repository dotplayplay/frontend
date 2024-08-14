<script>
    import "../../styles/component/navbar.css";
    import { screen } from "$lib/store/screen.js";
    import { theme } from '$lib/store/screen.js';
    import MobileMenu from "./mobileMenu.svelte";

    const handleChatScren = (()=>{
        $screen.updateChatClass("clicked")
        screen.set($screen)
    })

    const handleCloseMenu = (()=>{
        $screen.isMobileMenu = false
        screen.set($screen)
    })

    const handleMenuRoutes = ((event)=>{
        window.open(event.detail, '_self', 'noopener noreferrer');
        handleCloseMenu()
    })

    const handleOpenMenu = (()=>{
        $screen.isMobileMenu = true
        screen.set($screen)
    })

</script>

{#if $screen.screen < 621 && $screen.isMobileMenu}
    <MobileMenu on:close={handleCloseMenu} on:route={handleMenuRoutes}/>
{/if}

{#if $screen.screen > 621}
<div id="header" class="sc-gVkuDy gAvMHL {$theme && "kCKrbU"}">
    <div class="header-wrap">
        <div class="header">
            <div class="sc-hGnimi ftyLxH left"></div>
            <div class="login-in">
                <button class="sign-in">Sign in</button>
                <button class="sc-iqseJM sc-egiyK cBmlor fnKcEH button button-normal">
                    <div class="button-inner">Sign up</div>
                </button>
                <button on:click={handleChatScren} id="chat" class="sc-eicpiI PGOpB">
                    <div class="chat-btn ">
                        <svg xmlns:xlink="http://www.w3.org/1999/xlink" class="sc-gsDKAQ hxODWG icon">
                            <use xlink:href="#icon_Chat"></use>
                        </svg>
                        <div class="sc-fotOHu gGSOuF badge ">99</div>
                    </div>
                </button>
            </div>
        </div>
    </div>
</div>
{/if}


<!-- =========================== Mobile ======================== -->
{#if $screen.screen < 621}
<div class="sc-hJhJFJ jVgBRe" style="transform: translate3d(0px, 0%, 0px);">
    <div class="login-top">
        <div class="logo-wrap">
            <img alt="logo" src="{$screen.smallLagos}">
        </div>
        <button on:click={handleOpenMenu} class="sc-bQtKYq cUTdQJ">
            <span class="open-wrap">
                <svg xmlns:xlink="http://www.w3.org/1999/xlink" class="sc-gsDKAQ hxODWG icon">
                    <use xlink:href="#icon_Tighten"></use>
                </svg>
            </span>
        </button>
        <div class="header-login">
            <button class="sign-in">Sign in</button>
            <button class="sc-iqseJM sc-egiyK cBmlor fnKcEH button button-normal">
                <div class="button-inner">Sign up</div>
            </button>
        </div>
    </div>
</div>
{/if}
