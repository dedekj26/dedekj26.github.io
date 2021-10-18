/* global, jQuery */
(function ($) {

	'use strict';

	// -- :: Navbar
	// Toggle Nav On Medium and Small devices
  $("#toggle-nav").on('click', function () {
    if ($(window).width() < 992) {
      $(this).toggleClass('clicked');											// toggle class (clicked) for (#toggle-nav)
			$('nav').toggleClass('open');												// toggle class (open) for (nav)
			$('body').toggleClass('nav-open');									// toggle class (nav-open) for (body)
    } else {
      $(this).removeClass('clicked');											// remove class (clicked) from (#toggle-nav)
			$('nav').removeClass('open');												// remove class (open) from (nav)
			$('body').removeClass('nav-open');									// remove class (nav-open) from (body)
    }
  });

  $(window).on('resize', function () {
    if ($(document).width() > 991) {
      // Remove Nav Class
      $('#toggle-nav').removeClass('clicked');						// remove class (clicked) from (#toggle-nav)
			$('nav').removeClass('open');												// remove class (open) from (nav)
			$('body').removeClass('nav-open');									// remove class (nav-open) from (body)
    }
  });

  // Show Dropdown Menu in Medium & Small Devices
  $('.nav-contain ul li.dropdown').on('click', function () {
    if ($(window).width() < 992) {
      $(this).addClass('active').siblings().removeClass('active');														// add class (active) to (li.dropdown) and remove class (active) from siblings
      $(this).find('ol').slideDown().parents('.dropdown').siblings().find('ol').slideUp();		// slideDown (dropdown)
    }
  });

  // Collapse Dropdown Menu
  $(document).mouseup(function (e) {
    if ($(window).width() < 992) {
      var dropdownLi = $(".nav-contain ul li.dropdown");
      // if the target of the click isn't the dropdownLi nor a descendant of the dropdownLi
      if (!dropdownLi.is(e.target) && dropdownLi.has(e.target).length === 0) {
        dropdownLi.removeClass('active');																					// remove class (active) from (li.dropdown)
        dropdownLi.find('ol').slideUp();																					// slideUp (dropdown)
      } else {
        return false;
      }
    }
  });

  $(window).on('resize', function () {
    // Collapse Dropdown Menu
    if ($(window).width() > 991.98) {
      if ($('.nav-contain ul li.dropdown ol').slideDown()) {
        $(this).slideUp()																				// slideUp (li.dropdown ol)
      }
    }
  });
	// ----------------------------------
	
	// -- :: Login Page
	$('#login_submit_btn').on('click', function () {

		// Vars
		var email = $('#login_email').val();
		var password = $('#login_password').val();
		var indexat = email.indexOf("@");																//Index of "@" in the email field
		var indexdot = email.indexOf(".");															//Index of "." in the email field

		// Check Email Input
		if (email == '') {
			$('#login_email').focus();																		// focus on email input
			$('#login_email').parent('.i-g').addClass('required');				// add class (required)
		} else if (indexat < 1 || (indexdot-indexat) < 2) {							// check if the email is corect
			$('#login_email').parent('.i-g').removeClass('required');			// remove class (required)
			$('#login_email').parent('.i-g').addClass('warning');					// add class (warning)
			$('#login_email').focus();																		// focun on email input
		}
		// Check Password Input
		else if (password == '') {
			$('#login_email').parent('.i-g').removeClass('required');			// remove class (required) from email input
			$('#login_email').parent('.i-g').removeClass('warning');			// remove class (warning) from email input
			$('#login_password').focus();																	// focus on password input
			$('#login_password').parent('.i-g').addClass('required');			// add class (required)
		} else {
			$('#login_password').parent('.i-g').removeClass('required');	// remove class (required)
			$('#login_password').parent('.i-g').removeClass('warning');		// remove class (warning)
			$(this).parents('#login_form').submit();											// submit the form
		}

	});

	// Check if inputs has value or null
	$('#login_form input').keyup(function () {
		if($(this).val() != '') {
			$(this).parent('.i-g').removeClass('required');								// remove class (required) from (this)
			$(this).parent('.i-g').removeClass('warning');								// remove class (warning) from (this)
		}
	});
	// ----------------------------------
	
	// -- :: Register Page
	$('#register_submit_btn').on('click', function () {

		// Vars
		var fullName = $('#register_fullname').val();
		var email = $('#register_email').val();
		var indexat = email.indexOf("@");																						//Index of "@" in the email field
		var indexdot = email.indexOf(".");																					//Index of "." in the email field
		var password = $('#register_password').val();
		var confirmPassword = $('#register_confirm_password').val();
		var country = $('#register_country').val();		

		// Check Full Name
		if (fullName == '') {			
			$('#register_fullname').focus();																						// focus on fullname
			$('#register_fullname').parent('.i-g').addClass('required');								// add class (required)
		}
		// Check Email
		else if (email == '') {
			$('#register_fullname').parent('.i-g').removeClass('required');							// remove class (required) from fullname
			$('#register_email').focus();																								// focus on email input
			$('#register_email').parent('.i-g').addClass('required');										// add class (required)
		}
		else if (indexat < 1 || (indexdot-indexat) < 2) {															// check if the email is corect
			$('#register_email').parent('.i-g').removeClass('required');								// remove class (required) from email input
			$('#register_email').parent('.i-g').addClass('warning');										// add class (warning) from email input
			$('#register_email').focus();																								// focus on email input
		}
		// Check Password
		else if (password == '') {
			$('#register_email').parent('.i-g').removeClass('required');								// remove class (required) from email input
			$('#register_email').parent('.i-g').removeClass('warning');									// remove class (warning) from email input
			$('#register_password').focus();																						// focus on password input
			$('#register_password').parent('.i-g').addClass('required');								// add class (required) from password input
		}
		// Confirm Password
		else if (confirmPassword != password) {																				// confirm password
			$('#register_password').parent('.i-g').removeClass('required');							// remove class (required) from password input
			$('#register_confirm_password').focus();																		// focus on password input
			$('#register_confirm_password').parent('.i-g').addClass('required');				// add class (required) from confirm password input
		}
		// Country Select
		else if (country == '') {
			$('#register_confirm_password').parent('.i-g').removeClass('required');			// remove class (required) from confirm password input
			$('#register_country').focus();																							// focus on country select
			$('#register_country').parent('.i-g').addClass('required');									// add class (required) from email input
		} else {
			$('#register_country').focusout();																					// focusout country select
			$('#register_fullname,#register_email, #register_password, #register_confirm_password, #register_country').parent('.i-g').removeClass('required');	// remove class (required) from all inputs
			$(this).parents('#register_form').submit();																	// submit the form
		}

	});

	// Check if inputs has value or null
	$('#register_form input').keyup(function () {
		if($(this).val() != '') {
			$(this).parent('.i-g').removeClass('required');								// remove class (required) from (this)
			$(this).parent('.i-g').removeClass('warning');								// remove class (warning) from (this)
		}
	});		
	// ----------------------------------
	
	// -- :: Contact Us Page
	$('#contact_us_page form input, #contact_us_page form textarea').focusout(function () {		
		// Check if inputs has value or null
		if($(this).val() != '') {
			$(this).addClass('fill');					// add class (fill)
		} else {
			$(this).removeClass('fill');			// remove class (fill)
		}
	});
  // ----------------------------------


}(jQuery));
