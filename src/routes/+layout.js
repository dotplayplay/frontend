import { browser } from '$app/environment';
import { theme } from '$lib/store/screen.js';
import { screen } from '$lib/store/screen';
import { ScreenScript } from '$lib/component/screenConfig.js';

/** @type {import('./$types').PageLoad} */
export function load({ route, fetch }) {
    const screens = new ScreenScript()
    screen.set(screens)
    return 
}