function loaderShow() {
    if (document.querySelector(".Loading").style.display == "flex") {
        document.querySelector(".Loading").style.display = "none";
    } else {
        document.querySelector(".Loading").style.display = "flex";
    }
}