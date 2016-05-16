var socket = io.connect('http://' + document.domain + ':' + location.port);
$("body").ready(function(){
    reset();
})
socket.on("next", function(){
    next();
});
socket.on("reset", function(){
    reset();
});