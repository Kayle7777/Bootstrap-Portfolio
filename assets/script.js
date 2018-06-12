// I took this from https://codepen.io/rajashekar2012/pen/dMrodq not mine!! I do not understand the jQuery, though the javascript I understand quite well.

$(document).ready(function(){
  $("#myModal").on("hidden.bs.modal",function(){
    $("#iframeYoutube").attr("src","#");
  })
})

function changeVideo(vId){
  var iframe=document.getElementById("iframeYoutube");
  iframe.src="https://www.youtube.com/embed/"+vId;

  $("#myModal").modal("show");
}

// My function

function play() {
  var audio = document.getElementById("audioButton");
  audio.style = "visibility: visible";
  audio.play();
  document.getElementById("textarea").value = "I don't know how to do forms! lol! :) :)"
}
