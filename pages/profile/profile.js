ModAPI.addEventListener("frame", () => {
    if (ModAPI.currentScreen().indexOf('profile.GuiScreenEditProfile') > -1) {
        Minecraft.$currentScreen.$parent = Minecraft.$currentScreen;
    }
    if (!window.cache) {
        window.cache = document.createElement('div');
        cache.style.position = "absolute";
        cache.style.top = "0px";
        cache.style.left = "0px";
        cache.style.right = "0px";
        cache.style.backgroundColor = "#050409";
        document.body.appendChild(window.cache);
    }
    window.cache.style.height = 15 * ModAPI.ScaledResolution.getScaleFactor() + "px";
    Minecraft.$timer.$ticksPerSecond = 10;
})
