$(document).ready(function(){
  $("#checkout").submit(function(event){
    event.preventDefault();
    $(".receipt").show();
    var firstName = $("input#firstName").val();
    var lastName = $("input#lastName").val();
    var street = $("input#street").val();
    var city = $("input#city").val();
    var state = $("#state").val();
    var zip = $("input#zip").val();
    var product = $("input:radio[name=product]:checked").val();
    $(".name").text(firstName + " " + lastName);
    $(".address").text(street + " " + city + ", " + state + " " + zip);
    $(".product").text(product);
  });
});
