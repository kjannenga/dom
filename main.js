$(document).ready(function(){

  $("#add").on('click', function(){
    var value1 = $("#value1").val()
    var value2 = $("#value2").val()
    $("#answer").val(Number(value1) + Number(value2))

  })

  $("#subtract").on('click', function(){
    var value1 = $("#value1").val()
    var value2 = $("#value2").val()
    $("#answer").val(Number(value1) - Number(value2))
  })


  $("#multiply").on('click', function(){
    var value1 = $("#value1").val()
    var value2 = $("#value2").val()
    $("#answer").val(Number(value1) * Number(value2))
  })

  $("#divide").on('click', function(){
    var value1 = $("#value1").val()
    var value2 = $("#value2").val()
    $("#answer").val(Number(value1) / Number(value2))
  })


})