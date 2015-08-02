(function() {var db = new Firebase('https://blazing-heat-7559.firebaseio.com');
var user = null;

// Login Authentication
db.authWithOAuthPopup("github", function(error, authData) {
  if (error) {
    console.log("Login Failed!", error);
  } else {
    init(authData);
  }
});
/*
 * This is just a sample method to see if your app is set up
 */
function init(user){

  var outfits = db.child(user.uid+"/outfits");
  outfits.set({
    outfit1: {
      top : "blue"
    },
    outfit2: {
      top : "yellow"
    },
    outfit3: {
      top : "pink"
    }
  });
  outfits.child("outfit3/tags").set(
    [
      "sass meetup",
      "wednesday"
    ]
  );

  outfits.orderByChild("top").once("value", function(snap) {
    console.log(snap.val());
  });

}
})();