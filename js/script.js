(function () {

    var mq = window.matchMedia("(max-width: 760px)");
    var menuItems = document.getElementsByClassName("menu_items")[0];
    var menuButton = document.getElementsByClassName("menu_button")[0];
    
    if (mq.matches) {
        menuItems.classList.add("hidden");
    }

    addListener(menuButton, 'click', function () {
        menuItems.classList.toggle("hidden");
    });
    
    addListener(menuButton, 'keyup', function(event) {
        if (event.keyCode == 13) {
            menuButton.click();
        }
    });
        
    addListener(window, 'resize', function () {
        var width = window.innerWidth ||
                    document.documentElement.clientWidth ||
                    document.body.clientWidth;
        
        if (width > 760) { 
            menuItems.classList.remove("hidden");
        } else {
            menuItems.classList.add("hidden");
        }
    });
    
    function addListener(element, type, callback) {
        if (element.addEventListener) {
            element.addEventListener(type, callback);
        } else if (element.attachEvent) {
            element.attachEvent('on' + type, callback);
        }
    }

}());