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

$('#pizza-fourway').click(function() {
  $('.modal--fourway').removeClass('hide');
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

$('#standardMultiple').click(function(){
  if($('#standardMultiple').children().prop('checked', true)) {
    $('#standardMultiple').children().prop('checked', true);
    $('#droneMultiple').children().removeAttr('checked');
    $('#multipleContinue').attr('href', 'payment-multiple-clean.html');
  }
});

$('#droneMultiple').click(function(){
  if ($('#droneMultiple').children().prop('checked', true)) {
    $('#droneMultiple').children().prop('checked', true);
    $('#standardMultiple').children().removeAttr('checked');
    $('#multipleContinue').attr('href', 'payment-multiple.html');
  }
});

$('#standardMultipleClean').click(function(){
  if($('#standardMultipleClean').children().prop('checked', true)) {
    $('#standardMultipleClean').children().prop('checked', true);
    $('#droneMultipleClean').children().removeAttr('checked');
    $('#multipleContinue').attr('href', 'payment-vaulted-multiple-clean.html');
  }
});

$('#droneMultipleClean').click(function(){
  if ($('#droneMultipleClean').children().prop('checked', true)) {
    $('#droneMultipleClean').children().prop('checked', true);
    $('#standardMultipleClean').children().removeAttr('checked');
    $('#multipleContinue').attr('href', 'payment-vaulted-multiple.html');
  }
});

$('#visaCheckout').click(function(){
  $('#braintreePaymentOptions').addClass('braintree-hide');
  $('#braintreeArrow').removeClass('braintree-arrow--active');
  $('#dropdownText').text('Visa Checkout');
  $('#visaCheckoutButton').fadeIn();
});

$('#applePaySheet').hide();

$('#applePay').click(function(){
  $('#applePaySheet').removeClass('sheet-hide').slideDown();
  $('#braintreePaymentOptions').addClass('braintree-hide');
  $('#braintreeArrow').removeClass('braintree-arrow--active');
  $('#dropdownText').text('ApplePay');
});

// Shows the payment method options and toggles active states
$('#paymentDropdown').click(function(){
  $(this).children().toggleClass('desaturate');
  $('.dropdown__option-container').toggleClass('hide');
  $('.arrow').toggleClass('arrow--active');
  $('.dropdown__default').toggleClass('dropdown__default--active');
});
