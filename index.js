var elements = document.getElementsByTagName('*');

for (var i = 0; i < elements.length; i++) {
  var element = elements[i];
  console.log(element.tagName);

  if (element.tagName !== 'SCRIPT' && element.tagName !== 'STYLE') {
    for (var j = 0; j < element.childNodes.length; j++) {
      var node = element.childNodes[j];

      if (node.nodeType === 3) {
        var text = node.nodeValue;
        var replacedText = text.replace(/C/g, 'B').replace(/c/g, 'b');

        if (replacedText !== text) {
          element.replaceChild(document.createTextNode(replacedText), node);
        }
      }
    }
  }
}