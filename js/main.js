$(document).ready(function() {
    
    $('.link').click(function(event) {
        const targetHash = $(event.target).text();
        const position = $(`#${targetHash}`).position();
        const headerHeight = $(`header`).height();
        
        let scrollTo = [0,position.top - headerHeight];
        
        function scroll() {
            const scrollRate = 0.5;
            const delay = 20; // delay time in ms
            
            let timeout;
            let distance = $(window).scrollTop() - scrollTo[1];
            
            let scrollDistance = Math.ceil(distance * scrollRate);
            
            if (scrollDistance < 0) {
                scrollDistance = Math.min(scrollDistance * -1,90) * -1;
            } else {
                scrollDistance = Math.min(scrollDistance,90);
            };
            
            if (Math.abs(scrollDistance) > 0) {
                window.scroll(0,$(window).scrollTop() - scrollDistance);
                timeout = window.setTimeout(scroll,delay);
            } else {
                window.scroll(0,scrollTo[1]);
                return window.clearTimeout(timeout);
            };
        };
        
        scroll();
    });
    
});