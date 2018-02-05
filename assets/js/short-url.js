$(document).ready(function(){
  var key = getKeyParameter();  
  window.location.href = 'http://short.promo.co/s/' + key;
})

getKeyParameter = function() {
  var pageUrl = window.location.search.substring(1);
  var UrlVariable = pageUrl.split('&');
  for (var i=0; i < UrlVariable.length; i++) {
    var splitParameter = UrlVariable[i].split("=");
    if (splitParameter[0] === 'key') {
      return splitParameter[1];
    } 
  }
  return '';
}