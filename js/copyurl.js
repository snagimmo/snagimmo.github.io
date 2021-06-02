function copyUrl() {
    var url = location.href;
    var title = document.title;
    navigator.clipboard.writeText(title + "\n" + url);
}
