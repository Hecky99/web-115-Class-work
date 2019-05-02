/* WEB-115 Class Work Scripts */

buildMenu();

function buildMenu() {
  var jResp = '';

  $.ajax({
    url: 'https://nflarrest.com/api/v1/crime',
    type: 'GET',
    dataType: 'json',
    success: function(data) {

      for (var i = 0; i < data.length; i++) {
        $('body').append('<h4 id="' + data[i].Category + '" class="menItem">' + data[i].Category + ' (' + data[i].arrest_count + ')</h4>');
      }
      /*
      $(".menItem").click(function(data){
        getInfo(this.id);
      });
      */
    },
    error: function(request, error) {
      alert("Request: " + JSON.stringify(request));
    }
  });
}




/*var menuItems = document.getElementsByTagName("LI");

buildMenu();


function getInfo(focus){


        $.ajax({
            url : 'https://nflarrest.com/api/v1/crime/topPlayers/'+focus,
            type : 'GET',
            dataType:'json',
            success : function(data) {

                var itemInformation = '';

                for(var i = 0; i < data.length; i++){
                    itemInformation = itemInformation + '<div id="'+data[i].Name+'" class="nameClick">'+data[i].Name+' ('+data[i].arrest_count+')</div>';
                }

                $('section').html(itemInformation);

                                $(".nameClick").click(function(data){
                  getDetails(this.id);
                });
            },
            error : function(request,error)
            {
                alert("Request: "+JSON.stringify(request));
            }
        });


}




function getDetails(focus){


        $.ajax({
            url : 'https://nflarrest.com/api/v1/player/arrests/'+focus,
            type : 'GET',
            dataType:'json',
            success : function(data) {

                var itemInformation = '';

                itemInformation = itemInformation + '<p>'+data[0].Name+'</p>';
                itemInformation = itemInformation + '<p>'+data[0].Position_name+'</p>';
                itemInformation = itemInformation + '<p>'+data[0].Team_preffered_name+'</p>';
                itemInformation = itemInformation + '<p>'+data[0].Description+'</p>';
                itemInformation = itemInformation + '<p>'+data[0].Outcome+'</p>';
                itemInformation = itemInformation + '<p>'+data[0].ArrestSeasonState+'</p>';


                $('section').html(itemInformation);
            },
            error : function(request,error)
            {
                alert("Request: "+JSON.stringify(request));
            }
        });


}
*/









function myFunction(x) {
  if (x.matches) { // If media query matches
    document.body.style.backgroundColor = "#000";
  } else {
    document.body.style.backgroundColor = "orange";
  }
}

var x = window.matchMedia("(min-width: 700px)")
myFunction(x) // Call listener function at run time
x.addListener(myFunction) // Attach listener function on state changes
