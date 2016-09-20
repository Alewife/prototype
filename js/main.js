/*jshint devel:true */

// Show add to cart modal & fade the background content
$('#pizza-olive').click(function() {
  $('.modal--peppersAndOlives').removeClass('hide');
  $('.main-wrapper').addClass('fade');

  return false;
});

$('#pizza-shawarma').click(function() {
  $('.modal--shawarma').removeClass('hide');
  $('.main-wrapper').addClass('fade');

  return false;
});

// Hide the modal when clicking on background content
$('.main-wrapper').click(function() {
  if ($(this).hasClass('fade')) {
        $('.modal').addClass('hide');
        $(this).removeClass('fade');
    }
});

// Shows the payment method options and toggles active states
$('#paymentDropdown').click(function(){
  $(this).children().toggleClass('desaturate');
  $('.dropdown__option-container').toggleClass('hide');
  $('.arrow').toggleClass('arrow--active');
  $('.dropdown__default').toggleClass('dropdown__default--active');
});
