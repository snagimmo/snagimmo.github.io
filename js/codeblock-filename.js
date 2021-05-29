var list = document.body.getElementsByClassName("highlight");

for(i=0; i <= list.length-1; i++){
  var code = list[i].firstElementChild.firstElementChild
  if(code) {
    var codeType =  code.className.split(":")[1] ? code.className.split(":")[1] : code.className.split(":")[0].replace(/language-/, '');
  }

  if(codeType) {
    var div = document.createElement('div');
    div.textContent = codeType;
    div.classList.add('code-name');
    code.parentNode.insertBefore(div, code);
  }
}
