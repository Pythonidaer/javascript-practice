// Import on Interaction Example
export function importOnClick(buttonId, modulePath) {
    document.getElementById(buttonId).addEventListener('click', async () => {
        const mod = await import(modulePath);
        console.log('Module loaded on interaction:', mod);
    });
}
