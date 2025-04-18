// Factory Pattern Example
export function DrinkFactory(type) {
    if (type === 'tea') return { type: 'tea', serve: () => 'Serving tea' };
    if (type === 'coffee') return { type: 'coffee', serve: () => 'Serving coffee' };
    return { type: 'unknown', serve: () => 'Unknown drink' };
}
