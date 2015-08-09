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
 * Manages all interactions related to adding
 * articles of clothing into a user's closet,
 * as well as the diaglogues and listeners required
 * to perform said actions.
 *
 * Used as a Singleton
 *
 * @class ClosetManager
 */
var ClosetManager = (function() {

  /*
   * @private {object<DOM Object>}
   */
  var clothing_type_picker =
    document.querySelector('.js-clothing_type_picker');

  /*
   * @private {object<DOM Object>}
   */
  var launch_btn = document.querySelector('.js-launch_closet_manager');

  /*
   * @private {object<DOM Object>}
   */
  var close_picker_btn = document.querySelector('.js-clothing_type_picker .js-close');

  /**
  * Represents the ClosetManager
  * @constructs ClosetManager
  */
  function ClosetManager(){
    this.bind_events();
  }

  /**
  * Binds Events for ClosetManager
  * @private
  */
  ClosetManager.prototype.bind_events = function(){
    launch_btn.addEventListener('click', this.launch_type_picker);
    close_picker_btn.addEventListener('click', this.dismiss_type_picker);
  }

  /**
  * Launches the picker modal for clothing type
  * @private
  */
  ClosetManager.prototype.launch_type_picker = function(){
    clothing_type_picker.classList.add("open");
  };

  /**
  * Dismisses the picker modal for clothing type
  * @private
  */
  ClosetManager.prototype.dismiss_type_picker = function(){
    clothing_type_picker.classList.remove("open");
  };

  return ClosetManager;
})();
var closet_manager = new ClosetManager();


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