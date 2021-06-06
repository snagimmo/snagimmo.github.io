function copyUrl() {
    var url = location.protocol + "//" + location.host + location.pathname;
    var title = document.title;
    navigator.clipboard.writeText(title + "\n" + url);
}
