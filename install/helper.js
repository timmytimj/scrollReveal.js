(function(){
  if (!document.querySelectorAll)
    return;

  var elements = INSTALL_OPTIONS.elements;

  for (var i=0; i < elements.length; i++){
    var els = document.querySelectorAll(elements[i].selector);
    if (!els) continue;

    for (var j=0; j < els.length; j++){
      els[j].setAttribute('data-sr', elements[i].animation || '');
    }
  }

  new scrollReveal();
})()
