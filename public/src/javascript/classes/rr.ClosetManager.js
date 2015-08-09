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

  /*
   * @private {Array<object>}
   */
  var clothing_type_btns = document.querySelectorAll('.clothing_type_picker__type');

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
    for (var i = 0; i < clothing_type_btns.length; i++) {
      clothing_type_btns[i].addEventListener('click', this.launch_article_details.bind(this)); }
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

  /**
  * Sets up and Displays the article details form modal
  * @param {event<mouse event> e
  * @private
  */
  ClosetManager.prototype.launch_article_details = function(e){
    var _clothing_type;

    this.dismiss_type_picker();

    if( e.target.hasAttribute("data-type") ) {
      _clothing_type = e.target.getAttribute("data-type");
    } else {
      _clothing_type = e.target.parentNode.getAttribute("data-type");
    }

    console.log( _clothing_type );
  };

  /**
  * Submits form data and upload image for new clothing item
  * @private
  */
  ClosetManager.prototype.submit_clothing_item = function() {
    // http://howtonode.org/really-simple-file-uploads
    // http://blog.teamtreehouse.com/uploading-files-ajax
  };


  return ClosetManager;
})();
