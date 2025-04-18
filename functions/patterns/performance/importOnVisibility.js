// Import on Visibility Example
export function importOnVisible(elementId, modulePath) {
    const el = document.getElementById(elementId);
    const observer = new IntersectionObserver(async (entries) => {
        if (entries[0].isIntersecting) {
            const mod = await import(modulePath);
            console.log('Module loaded on visibility:', mod);
            observer.disconnect();
        }
    });
    observer.observe(el);
}
