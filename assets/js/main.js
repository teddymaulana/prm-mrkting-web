$(document).ready(function(){
	$('.partner .item').tab()

	$('.dropdown')
	  .dropdown({
	    onChange: function(value, text, $selectedItem) {
	      $.tab('change tab', value);
	    }
	  })	

	var swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        slidesPerView: 'auto',
        centeredSlides: false,
        paginationClickable: true,
        nextButton: '.btn-next',
        prevButton: '.btn-prev',
        spaceBetween: 30,
        grabCursor: true,
        breakpoints: {
            1024: {
                slidesPerView: 'auto',
                spaceBetween: 30
            },
            768: {
                slidesPerView: 'auto',
                spaceBetween: 30
            },
            640: {
                slidesPerView: 'auto',
                spaceBetween: 20
            },
            320: {
                slidesPerView: 'auto',
                spaceBetween: 10
            }
        }
    })


})