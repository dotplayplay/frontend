<script>
    import "../../styles/component/navbar.css";
    import { screen } from "$lib/store/screen.js";
    const smallLagos = "https://res.cloudinary.com/dxwhz3r81/image/upload/v1697848286/dpp-favicon-logo_j53rwc.jpg";
    const largeLogos = "https://res.cloudinary.com/dxwhz3r81/image/upload/v1697848521/dpp-logowhite_lbifm7.png";
    import { theme } from '$lib/store/screen.js';
    let logoType = 600

    const handleChatScren = (()=>{
        $screen.updateChatClass("clicked")
        screen.set($screen)
    })

</script>

{#if $screen.screen > 621}
<div id="header" class="sc-gVkuDy gAvMHL {$theme && "kCKrbU"}">
    <div class="header-wrap">
        <div class="header">
            <div class="sc-hGnimi ftyLxH left">
                <div class="sc-iukxot jivBdD logo-pc">
                    <img alt="logo" style="border-radius:{$screen.newScreen > logoType ? 0 : 7}px;" class="logo-com" src="{$screen.newScreen > logoType ? largeLogos : smallLagos}">
                </div>
            </div>
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
            <img alt="logo" src="{smallLagos}">
        </div>
        <button class="sc-bQtKYq cUTdQJ">
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
