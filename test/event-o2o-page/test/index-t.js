$(document).ready(function() {
              var owl = $('.Product');
              owl.owlCarousel({
                nav: true,/*放入左右導航按鈕*/
                margin: 10,
                items: 4,
                responsive: {
                  0: {
                    items: 1
                  },
				  768: {
                    items: 2
                  },
                  800: {
                    items: 2
                  },
                  1000: {
                    items: 2
                  },
				   1100: {
                    items: 1
                  }
                }
              })
            })
			    



/*加解析判斷*/

function postsCarousel() {
    var checkWidth = $(window).width();
    var owlPost = $('.Product');
      if (checkWidth > 802) {
        if (typeof owlPost.data('owl.carousel') != 'undefined') {
        owlPost.data('owl.carousel').destroy();
        }
        owlPost.removeClass('owl-carousel');
    } else if (checkWidth < 801) {
        owlPost.addClass('owl-carousel'); 
        
        owlPost.owlCarousel({
                nav: true,/*放入左右導航按鈕*/
                margin: 10,
                items: 4,
                responsive: {
                  0: {
                    items: 1
                  },
				  768: {
                    items: 2
                  },
                  800: {
                    items: 2
                  },
                  1000: {
                    items: 2
                  },
				   1100: {
                    items: 1
                  }
                }
              })
            })
			
            