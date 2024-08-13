<script>
// Reexport your entry components here
import { browser } from "$app/environment";
import { screen } from '$lib/store/screen';
import { onMount } from "svelte";

$: resizeScreen = 0
browser && window.addEventListener("resize", () => {
   resizeScreen = browser && window.innerWidth
   $screen?.screenResize(resizeScreen)
   screen.set($screen)
})

onMount(() => {
   resizeScreen = browser && window.innerWidth
   $screen?.sizeConfiq(resizeScreen)
   screen.set($screen)
})

$: $screen.newScreen = $screen.screen - $screen.sideHasExpand - $screen.chatBoxExpand

const setSettle = (()=>{
   $screen.sideHasExpand === $screen.sideFold ? $screen.sideHasExpand = $screen.sideUnFold : $screen.sideHasExpand = $screen.sideFold
   $screen.isSideOpen =! $screen.isSideOpen
   document.body.className = `${$screen.theme} ${$screen.isSideOpen ? $screen.openCLass : $screen.closeClass} ${$screen.chatClass}`
   screen.set($screen)
})

</script>

{#if resizeScreen > 612}
   <button on:click={setSettle} class="sc-FNXRL eFYxRV pc-sidebar-fold-change-btn {$screen.sideHasExpand === $screen.sideFold  && $screen.sideBar}" style="display: block;">
      <svg xmlns:xlink="http://www.w3.org/1999/xlink" class="sc-gsDKAQ hxODWG icon">
         <use xlink:href="#icon_Tighten"></use>
      </svg>
   </button>
{/if}

