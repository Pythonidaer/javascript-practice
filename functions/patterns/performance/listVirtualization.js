// List Virtualization Example
export function virtualizeList(list, renderFn, visibleCount) {
    // Only render the visible portion of a large list
    return list.slice(0, visibleCount).map(renderFn);
}
