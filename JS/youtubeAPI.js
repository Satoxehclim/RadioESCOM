
var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

var player;
var video;
var idVideo;
var aux=1;
function onYouTubeIframeAPIReady() {
  $(function(){
    $.post('http://localhost/conexion-base/pedirPrograma.php',{data:''},null,'json').done(function(response){
      for(var i=0;i<response.length;i++){
        var id =response[i].id;
        var programacomp =response[i].programa.split(' ');
        var programa=programacomp[0];
        
        var divs ='<div class="col" id="'+id+'"></div>';
        $("#SeccionProgramas").append(divs);
        aux=id;
        video=aux.toString();
        player = new YT.Player(video, {
          height: '270',
          width: '480',
          videoId: programa,
          playerVars: {
            'playsinline': 1
          },
          events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
          }
        });
      }
    });  
  });
 }

 function onPlayerReady(event) {
 }

 var done = true;
 function onPlayerStateChange(event) {
 }
