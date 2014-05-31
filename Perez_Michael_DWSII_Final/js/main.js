/**
 * Created with JetBrains WebStorm.
 * User: MikeWasHere
 * Date: 5/28/14
 * Time: 9:46 PM
 * To change this template use File | Settings | File Templates.
 */


//---This highlights the nav on the page that you are on---//

(function() {

//    window.navhighlight = function() {
        var navElements = document.querySelectorAll('[data-nav]');
        var url = document.location.pathname;

        for (var i = 0, j = navElements.length; i < j; i++){
            var href = navElements[i].getAttribute('href');

            if (url == href){
                navElements[i].className += 'active';
            }
        }
//    };
})();
