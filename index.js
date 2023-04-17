async function getProxy(options) {
    if ('serviceWorker' in navigator) {
        const regs = await navigator.serviceWorker.getRegistrations();
        
        for (var reg of regs) {
            var req = await fetch(reg.active.scriptURL);
            var text = await req.text();
            
            if (text.includes('croxyproxy')) return true;
        }
    }
    
    if (window.$Rhodium||window.__uv||window.alloyLocation||window.__get$Loc||window._womginx_fetch||window.$aero) return true;

    if ('window.location' !== 'wind'+'ow'+'.'+'locat'+'ion') return true;

    if (Reflect.get(self, 'location')!==window.location) return true;

    if (Reflect.get(self, 'location').constructor!==window.Location) return true;
    
    return false;
}
