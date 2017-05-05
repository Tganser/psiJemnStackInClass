$( document ).ready( function(){
  $( '#addGameButton' ).on( 'click', function(){
    console.log( 'on addGameButton click' );
    var objectToSend = {
      game: $( '#gameIn' ).val(),
      year: $( '#yearIn' ).val(),
      platforms: $( '#platformsIn' ).val(),
      imageUrlIn: $( '#imageUrlIn' ).val()
    }; //end objectToSend
    console.log( 'sending:', objectToSend );
    $.ajax({
      type: 'POST',
      url: '/games',
      data: objectToSend,
      success: function( response ){
        console.log( 'back with:', response );
      } // end success
    }); //end ajax
  }); //end on addGameButton click

  getGames();

}); //end dock ready

// function expression
var getGames = function(){
  $.ajax({
    type: 'GET',
    url:  '/games',
    success: function( response ){
      console.log( 'back with:', response );
      // empty outputDiv
      var outputDiv = $( '#outputDiv' );
      outputDiv.empty();

      for (var i = 0; i < response.length; i++) {
        var cellText = '<div class="col-sm-3 game"><img src="' + response[i].imageUrlIn + '" style="width:100%"/>';
        cellText += "<p>" + response[i].game + "</p>";
        cellText += "<p>"  + response[i].year + "</p>";
        cellText += "<p>"  + response[i].platforms + "</p></div>";
        // append each game to the grid
        outputDiv.append( cellText );
      } // end for
    } //end success
  }); //end ajax
}; // end getGames
