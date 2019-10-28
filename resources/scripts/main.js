$(document).ready(function(){
    // write code here




    /***********************
     * Main Nav
     **********************/
    const NAV_OPEN_BTN = $("#nav_open_btn");
    const NAV_CLOSE_BTN = $("#nav_close_btn");
    const MAIN_NAV = $("nav.main-nav");
    const NAV_OPENING_CLASS = "opened";

    NAV_OPEN_BTN.on('click', openNav);
    NAV_CLOSE_BTN.on('click', closeNav);

    const CATEGORIES_BAR = $('.categories.owl-carousel');
    const GRID = $('#grid');

    function openNav(){
        log("Opening the nav");
        MAIN_NAV.addClass(NAV_OPENING_CLASS);

        CATEGORIES_BAR.css({'z-index':'-1'});   // z-index fix, detail is below
        GRID.css({'z-index':'-1'});   // z-index fix, detail is below
    }


    function closeNav(){
        log("Closing the nav");
        MAIN_NAV.removeClass(NAV_OPENING_CLASS);

        CATEGORIES_BAR.css({'z-index':'1'});   // z-index fix, detail is below
        GRID.css({'z-index':'1'});   // z-index fix, detail is below
    }

    /* z-index fix,
        the problem when nav drawer is open,  grid & category carousel overlay the nav
        when we fix z-index in css, then click on grid item and category item don't work

        solution:
        when nav is open, set z-index to -1 of both grid & categories carousel
        when nav is closed, set z-index to 1 of both, that's it
    * */






    /***********************
     * Search Box
     **********************/
     const SEARCH_BTN = $('#search_btn');
     const SEARCH_INPUT = $('#search_input');
     const  SEARCH_OPENING_CLASS = "opened";

     SEARCH_BTN.on('click',handleSearchBox);

     function handleSearchBox(){
         // on search button click, bring the focus
         SEARCH_INPUT.focus();


         // if search box is closed (in desktop) open that, if opened close that
         SEARCH_INPUT.toggleClass(SEARCH_OPENING_CLASS);

         // if user enterend the search query, then submit that
         let search_query = SEARCH_INPUT.val();
         if(search_query.length>0){
             console.log(" Submit this query:  "+search_query);
            // clear the search box and also close the box (for desktop version)
             SEARCH_INPUT.val('');
             SEARCH_INPUT.removeClass(SEARCH_OPENING_CLASS);
         }
     }

     // submit query on enter key also
    SEARCH_INPUT.on('keypress',(e)=>{
        if(e.which == 13) {
            handleSearchBox();
        }
    });







    /***************************
     *  Categories Carousel
     ***************************/
    $('.owl-carousel').owlCarousel({
        nav:false,
        dots: false,
        autoWidth: true,
        autoHeight: true,
        autoplay: true,
        loop:true,
        autoplayTimeout: 3000,
        autoplayHoverPause:true,
        responsive:{
            767:{
                items:5
            }
        }
    });






    /******************
     *  Grid
     ******************/
    new AnimOnScroll( document.getElementById( 'grid' ), {
        minDuration : 0.4,
        maxDuration : 0.7,
        viewportFactor : 0.2
    });



});



function log(message){
    console.log(message);
}



//
// const header = new Vue({
//     el: "#header",
//     data:{
//         isSearchBoxOpen: false,
//         searchQuery: ""
//     },
//     methods:{
//         handleSearchBox(){
//             if(this.searchQuery.length>0){
//                 console.log(" Submit this query:  "+this.searchQuery);
//                 // clear the search box and also close the box (for desktop version)
//                 this.searchQuery = "";
//                 this.isSearchBoxOpen = false;
//             }else if(!this.isSearchBoxOpen){  // if query is empty & search box is not opened open that
//                 this.isSearchBoxOpen = true;
//                 // bring focus to search box
//                 console.log( document.querySelector('input.search-input').focus() );
//
//             }else{
//                 this.isSearchBoxOpen = false;   // close search box, because user doesn't entered any query
//             }
//
//
//         },
//     }
//
//
// });