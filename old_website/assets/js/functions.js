$(function() {
	smoothScroll(300);
	workBelt();
    workLoad();
});

// smoothScroll function is applied from the document ready function
function smoothScroll (duration) {
	$('a[href^="#"]').on('click', function(event) {

	    var target = $( $(this).attr('href') );

	    if( target.length ) {
	        event.preventDefault();
	        $('html, body').animate({
	            scrollTop: target.offset().top
	        }, duration);
	    }
	});
}


function workBelt() {
    
    $('.jz-thumb-unit').click(function() {
        $('.work-belt').css('left','-100%');
        $('.work-container').show();
    });
                 
    $('.work-return').click(function() {
        $('.work-belt').css('left','0%');
        $('.work-container').hide();
    });
                            
}

function workLoad() {
    
    $.ajaxSetup ({ cache: false });
    $('.jz-thumb-unit').click(function() {
       
        var $this = $(this),
            newTitle = $this.find('strong').text(),
            newFolder = $this.data('folder'),
            spinner = '<div class="loader">Loading...</div>',
            newHTML = '/projects/'+newFolder+'.html';
        $('.project-load').html(spinner).load(newHTML);
        $('.project-title').text(newTitle)
        
    });
    
}