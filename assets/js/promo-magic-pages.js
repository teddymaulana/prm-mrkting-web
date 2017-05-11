$(document).ready(function(){
  var container = $("html, body")
  var menucon =  $('.mobile .vertical.menu')
  // MOBILE MENU
  $('.js-burger-btn').click(function(e){
    e.preventDefault()
    e.stopPropagation()
    menucon.addClass('active')
  })
  
  container.click(function(){
    menucon.removeClass('active')
  })

  // SCROLL TO 
  $('a.scrollable').on("click", function(e){
    e.preventDefault();
    
    var scrollTo = $(this.getAttribute('href'))
    container.animate({
      scrollTop: scrollTo.offset().top - 80
    }, function(){
      menucon.removeClass('active')
    });
  });  

  // FAQ ACCORDION
  $('.ui.accordion').accordion({
    onOpen: function(){
      $('.item .icon').removeClass('minus').addClass('plus')
      $('.item').removeClass('active_')
      $('.active .icon').addClass('minus')
      $('.active').parent().addClass('active_')
    },
    onClose: function(e){
      $('.item').removeClass('active_')
      $('.item .icon').removeClass('minus').addClass('plus')
    }

  })

  // CONTACT
  $('.ui.dropdown').dropdown()
  $('.bt-change').on('click', function() {
    $('#image-file').click()
  }) 
  $('select.dropdown').dropdown()
  $('.ui.contact.form')
  .form({
    fields: {
      name: {
        identifier: 'name',
        rules: [
          {
            type   : 'empty',
            prompt : 'Please enter your name'
          }
        ]
      },
      email: {
        identifier: 'email',
        rules: [
          {
            type   : 'email',
            prompt : 'Please enter a valid email'
          }
        ]
      },
      subject: {
        identifier: 'subject',
        rules: [
          {
            type   : 'empty',
            prompt : 'Please enter your subject'
          }
        ]
      },
      messages: {
        identifier: 'messages',
        rules: [
          {
            type   : 'empty',
            prompt : 'Please enter your messages'
          }
        ]
      },
    },
    onSuccess: function(e, fields){
      // Change it to method to send fields data
      
      $('.ui.contact .submit')
          .html('<i class="circle notched icon"></i>')
          .delay(2000)
          .html('<i class="checkmark icon"></i>')
    }
  })
})