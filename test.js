$(function(){
    $.getJSON( "/data.json", function( data ) {
    console.log(data);
    $("#data").html("something");
  });
});