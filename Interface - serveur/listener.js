// Event Listener

var buttonClick = document.getElementById('btnContainer').addEventListener('click', function(event) {

    if (event.target.nodeName == "BUTTON") {

      var tar = event.target.id;

      console.log(tar);

      $.getJSON('/'+tar,

          function(data) {

        //do nothing

      });

      return false;

    }

  });