// Preload Example
export function preloadResource(url, asType) {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.as = asType;
    link.href = url;
    document.head.appendChild(link);
    console.log('Resource preloaded:', url);
}
