// Dynamic Import Example
export async function loadModule(modulePath) {
    const mod = await import(modulePath);
    return mod;
}
