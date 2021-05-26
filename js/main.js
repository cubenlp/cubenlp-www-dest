(function () {
    'use strict';

    $(".schedule-tbl tr[href]").on("click",function(el){
        window.open(this.getAttribute('href'))
    })

}());