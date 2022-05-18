function draw_table(){

    $("#results").empty();
    $.getHTMLuncached = function(url)
    {
return $.ajax({
    url:url,
    type:"GET",
    cache:false,
    sucess: function(html)
    {
        $("#results").append(html);
}

});} };
$.getHTMLuncached("/get/html)");

function append()
{
  $("#delete").click(function(){

  console.

  });


}

$(document).ready(function()
{draw_table()})
