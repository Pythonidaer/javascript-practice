// Prefetch Example
export function prefetchResource(url) {
    const link = document.createElement('link');
    link.rel = 'prefetch';
    link.href = url;
    document.head.appendChild(link);
    console.log('Resource prefetched:', url);
}
