<script>
// Reexport your entry components here
import { browser } from "$app/environment";
import { screen } from '$lib/store/screen';
import { onMount } from "svelte";
import Sidebar from "./sidebar.svelte";

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
   $screen.isSideClass = $screen.isSideClass === $screen.openCLass ? $screen.closeClass : $screen.openCLass
   document.body.className = `${$screen.theme} ${$screen.isSideClass} ${$screen.chatClass}`
   screen.set($screen)
})

</script>

<Sidebar {resizeScreen} />
<button on:click={setSettle} class="sc-FNXRL eFYxRV pc-sidebar-fold-change-btn {$screen.sideHasExpand === $screen.sideFold  && $screen.sideBar}" style="display:{resizeScreen > 621 ? "block" : "none"};">
   <svg xmlns:xlink="http://www.w3.org/1999/xlink" class="sc-gsDKAQ hxODWG icon">
      <use xlink:href="#icon_Tighten"></use>
   </svg>
</button>

