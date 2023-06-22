
 var tag = document.createElement('script');

 tag.src = "https://www.youtube.com/iframe_api";
 var firstScriptTag = document.getElementsByTagName('script')[0];
 firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

 var player;
 var video;
 var idVideo;
 video='1';
idVideo='ulfeM8JGq7s';
 function onYouTubeIframeAPIReady() {
   player = new YT.Player(video, {
     height: '270',
     width: '480',
     videoId: idVideo,
     playerVars: {
       'playsinline': 1
     },
     events: {
       'onReady': onPlayerReady,
       'onStateChange': onPlayerStateChange
     }
   });
 }

 function onPlayerReady(event) {
 }

 var done = true;
 function onPlayerStateChange(event) {
 }

 $(function(){
    $.ajax({
        method:"POST",
        url:"https://dummyjson.com/auth/login",
        contentType : "application/JSON",
        data : dat,
    }).done(function(resultado){
        resultado.forEach(element => {
            
        });
    });
 });