// Apply before the first paint, including when a returning reader chose Off.
try {
 document.documentElement.dataset.motion=localStorage.getItem('lucas-hechos-es-motion')==='off'?'off':'on';
} catch {
 document.documentElement.dataset.motion='on';
}
