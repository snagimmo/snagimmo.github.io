var codeBlocks = document.body.getElementsByClassName('highlight');

for(i = 0; i <= codeBlocks.length-1; i++){
  var code = codeBlocks[i].firstElementChild.firstElementChild;
  if (!/lang/.test(code.className)){
      break;
  }
  if(code){
    var lines = code.innerHTML.split(/\n/);
    var codeLine = "";
    lines.forEach(function(line){
      if(line != ""){
        codeLine += '<div class="code-line">' + line + '</div>';
      }
    })
    code.innerHTML = codeLine;
  }
}
