jQuery(document).ready(function($) {
  //your stuff here


  var jobCount = $('#list .in').length;
  $('.list-count').text(jobCount + ' items');


  $("#search-text").keyup(function() {
    //$(this).addClass('hidden');

    var searchTerm = $("#search-text").val();
    var listItem = $('#list').children('li');


    var searchSplit = searchTerm.replace(/ /g, "'):containsi('");

    //extends :contains to be case insensitive
    $.extend($.expr[':'], {
      'containsi': function(elem, i, match, array) {
        return (elem.textContent || elem.innerText || '').toLowerCase()
          .indexOf((match[3] || "").toLowerCase()) >= 0;
      }
    });


    $("#list li").not(":containsi('" + searchSplit + "')").each(function(e) {
      $(this).addClass('hiding out').removeClass('in');
      setTimeout(function() {
        $('.out').addClass('hidden');
      }, 300);
    });

    $("#list li:containsi('" + searchSplit + "')").each(function(e) {
      $(this).removeClass('hidden out').addClass('in');
      setTimeout(function() {
        $('.in').removeClass('hiding');
      }, 1);
    });

    //shows empty state text when no jobs found
    if (jobCount == '0') {
      $('#list').addClass('empty');
    } else {
      $('#list').removeClass('empty');
    }

  });



  /*  
     An extra! This function implements
     jQuery autocomplete in the searchbox.
     Uncomment to use :)

*/

  //add script to allow for nav to affix to top on scroll
  $('.main-navigation').affix({
    offset: {
      top: 170
    }
  });

  //add script to reposition ecda-branding to top left of header on scroll
  var sitebranding = $(".custom-site-branding");
  $(window).scroll(function() {
    var scroll = $(window).scrollTop();

    if (scroll >= 170) {
      sitebranding.addClass("custom-site-branding-scrolled");
    } else {
      sitebranding.removeClass("custom-site-branding-scrolled");
    }
  });
  //add script to restyle ecda-site-title
  var sitetitle = $(".ecda-site-title");
  $(window).scroll(function() {
    var scroll = $(window).scrollTop();

    if (scroll >= 170) {
      sitetitle.addClass("ecda-site-title-scrolled");
    } else {
      sitetitle.removeClass("ecda-site-title-scrolled");
    }
  });

  //add script to restyle e
  var e = $(".e");
  $(window).scroll(function() {
    var scroll = $(window).scrollTop();

    if (scroll >= 170) {
      e.addClass("ecda-site-title-letters-scrolled");
    } else {
      e.removeClass("ecda-site-title-letters-scrolled");
    }
  });
  //add script to restyle c
  var c = $(".c");
  $(window).scroll(function() {
    var scroll = $(window).scrollTop();

    if (scroll >= 170) {
      c.addClass("ecda-site-title-letters-scrolled");
    } else {
      c.removeClass("ecda-site-title-letters-scrolled");
    }
  });
  //add script to restyle c
  var d = $(".d");
  $(window).scroll(function() {
    var scroll = $(window).scrollTop();

    if (scroll >= 170) {
      d.addClass("ecda-site-title-letters-scrolled");
    } else {
      d.removeClass("ecda-site-title-letters-scrolled");
    }
  });
  //add script to restyle c
  var a = $(".a");
  $(window).scroll(function() {
    var scroll = $(window).scrollTop();

    if (scroll >= 170) {
      a.addClass("ecda-site-title-letters-scrolled");
    } else {
      a.removeClass("ecda-site-title-letters-scrolled");
    }
  });
  //add script to remove sub-title
  var sub = $(".ecda-sub-title");
  $(window).scroll(function() {
    var scroll = $(window).scrollTop();

    if (scroll >= 170) {
      sub.addClass("hidden");
    } else {
      sub.removeClass("hidden");
    }
  });
  

  
  //add script to append search to drs toolbar 
  $("#drs-browse-header-row").append("<div class='drs-docs-filter'><input type='text' id='search-text' placeholder='search items in grid' class='search-box'><span class='list-count'>0 items</span></div>");

  //add script to toggle custom nav drawer
  $("#btn-menu").click(function() {
    $(".nav-drawer").addClass("nav-drawer-expanded");
  });
  $("#btn-menu").click(function() {
    $("body").addClass("body-no-scroll");
  });
  
  //add script to close custom nav drawer
  $("#btn-nav-drawer-close").click(function() {
    $(".nav-drawer").removeClass("nav-drawer-expanded");
  });
  $("#btn-nav-drawer-close").click(function() {
    $("body").removeClass("body-no-scroll");
  });

  //add script to show ecda-data panel
  $("#btn-ecda-data-show").click(function() {
    $(".ecda-data").addClass("show-ecda-data");
  });

  //add script to hide ecda-data panel
  $("#btn-ecda-data-hide").click(function() {
    $(".ecda-data").removeClass("show-ecda-data");
  });

  //add script to toggle custom distraction free search view-->
  $("#btn-search").click(function() {
    $("#menu-item-search").addClass("menu-item-search-display");
  });

  $("#btn-search").click(function() {
    $("#btn-search-close").addClass("show-me");
  });
  
  $("#btn-search").click(function() {
    $("body").addClass("body-no-scroll");
  });

  $("#btn-search-close").click(function() {
    $("#menu-item-search").removeClass("menu-item-search-display");
  });

  $("#btn-search-close").click(function() {
    $("#btn-search-close").removeClass("show-me");
  });

  $("#btn-search-close").click(function() {
    $("body").removeClass("body-no-scroll");
  });

  //add script for project preview grid on home-c	  
  // Append a close trigger for each block

  $('.grid .content').append('<span class="close">x</span>');
  // Show window

  function showContent(elem) {
    hideContent();
    elem.find('.content').addClass('expanded');
    elem.addClass('cover');
  }
  // Reset all

  function hideContent() {
    $('.grid .content').removeClass('expanded');
    $('.grid .grid-item').removeClass('cover');
  }

  // When a li is clicked, show its content window and position it above all
  $('.grid .grid-item').click(function() {
    showContent($(this));
  });
  // When tabbing, show its content window using ENTER key
  $('.grid .grid-item').keypress(function(e) {
    if (e.keyCode == 13) {
      showContent($(this));
    }
  });

  // When right upper close element is clicked  - reset all
  $('.grid .close').click(function(e) {
    e.stopPropagation();
    hideContent();
  });
  // Also, when ESC key is pressed - reset all
  $(document).keyup(function(e) {
    if (e.keyCode == 27) {
      hideContent();
    }
  });



  //add script for test search filter for drs-docs grid-->

  $("#search-text").keyup(function() {
    //$(this).addClass('hidden');

    var searchTerm = $("#search-text").val();
    var listItem = $('#drs-docs').children('div');
    var searchSplit = searchTerm.replace(/ /g, "'):containsi('");

    //extends :contains to be case insensitive
    $.extend($.expr[':'], {
      'containsi': function(elem, i, match, array) {
        return (elem.textContent || elem.innerText || '').toLowerCase()
          .indexOf((match[3] || "").toLowerCase()) >= 0;
      }
    });


    $("#drs-docs div").not(":containsi('" + searchSplit + "')").each(function(e) {
      $(this).addClass('hiding out').removeClass('in');
      setTimeout(function() {
        $('.out').addClass('hidden');
      }, 300);
    });

    $("#drs-docs div:containsi('" + searchSplit + "')").each(function(e) {
      $(this).removeClass('hidden out').addClass('in');
      setTimeout(function() {
        $('.in').removeClass('hiding');
      }, 1);
    });


    var jobCount = $('#drs-docs .in').length;
    $('.list-count').text(jobCount + ' items');

    //shows empty state text when no jobs found
    if (jobCount == '0') {
      $('#drs-docs').addClass('empty');
    } else {
      $('#drs-docs').removeClass('empty');
    }

  });


  /*  
     An extra! This function implements
     jQuery autocomplete in the searchbox.
     Uncomment to use :)
         var jobCount = $('#list .in').length;
    $('.list-count').text(jobCount + ' items');

     
 function searchList() {                
    //array of list items
    var listArray = [];
  
     $("#list li").each(function() {
    var listText = $(this).text().trim();
      listArray.push(listText);
    });
    
    $('#search-text').autocomplete({
        source: listArray
    });
    
    
  }
                                   
  searchList();
*/
}); 
