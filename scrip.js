$(document).ready(function() {

    let typed = new Typed('.text', {
        strings: ['Développeuse Full Stack', 'Designer Web', 'Freelancer'],
        typeSpeed: 100,
        backSpeed: 100,
        backDelay: 1000,
        loop: true
    });

   

    $('.projet').hover(
        function() {
            $(this).find('.projet-info').slideDown(300);
        },
        function() {
            $(this).find('.projet-info').slideUp(300);
        }
    );

 
        $('#contactForm').submit(function(e) {
            e.preventDefault();
            
            const email = $('#email').val().trim();
            
            $('.error-message').remove();
            $('.form-control').removeClass('is-invalid');
            
            let isValid = true;
            
            if (!email.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/)) {
            $('#email').addClass('is-invalid');
            $('#email').after('<div class="error-message">Email invalide</div>');
            isValid = false;
            }
            
            if (isValid) {
            $(this).after('<div class="alert alert-success">Email envoyé!</div>');
            
            this.reset();
            
            setTimeout(() => {
                $('.alert-success').fadeOut('slow', function() {
                $(this).remove();
                });
            }, 3000);
            }
        });


    $(window).on('scroll', function() {
        let scrollPosition = $(this).scrollTop();

        $('section').each(function() {
            let targetElement = $(this);
            let elementOffset = targetElement.offset().top - 120;
            let elementHeight = targetElement.height();

            if (scrollPosition >= elementOffset && scrollPosition < elementOffset + elementHeight) {
                $('.navbar a').removeClass('active');
                $('.navbar a[href="#' + $(this).attr('id') + '"]').addClass('active');
            }
        });
    });

 
});
