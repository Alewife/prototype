/*jshint devel:true */

// Show add to cart modal & fade the background content
$('#pizza-olive').click(function() {
  $('.modal').removeClass('hide');
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

// Active HF on card number
braintree.client.create({
  authorization: 'sandbox_g42y39zw_348pk9cgf3bgyw2b'
}, function (err, clientInstance) {
  if (err) {
    console.error(err);
    return;
  }

  braintree.hostedFields.create({
    client: clientInstance,
    styles: {
      'input': {
        'font-size': '16px',
        'font-family': 'helvetica, tahoma, calibri, sans-serif',
        'color': '#000'
      },
      ':focus': {
        'color': 'black'
      },
      '::-webkit-input-placeholder': {
        'color': 'rgba(0,0,0,0.25)'
      },
      ':-moz-placeholder': {
        'color': 'rgba(0,0,0,0.25)'
      },
      '::-moz-placeholder': {
        'color': 'rgba(0,0,0,0.25)'
      },
      ':-ms-input-placeholder ': {
        'color': 'rgba(0,0,0,0.25)'
      }
    },
    fields: {
      number: {
        selector: '#cardNumber',
        placeholder: '4111 1111 1111 1111'
      },
      cvv: {
        selector: '#cvv',
        placeholder: '123'
      },
      expirationDate: {
        selector: '#expirationDate',
        placeholder: 'MM/YY'
      },
      postalCode: {
        selector: '#postalCode',
        placeholder: '90210'
      }
    }
  }, function (err, hostedFieldsInstance) {
    if (err) {
      console.error(err);
      return;
    }

    hostedFieldsInstance.on('cardTypeChange', function (event) {
      // Change card bg depending on card type
      if (event.cards.length === 1) {
        $('.form__card-logo').attr('class', 'form__card-logo form__card-logo--absolute ' + event.cards[0].type);

        // Change the CVV length for AmericanExpress cards
        if (event.cards[0].code.size === 4) {
          hostedFieldsInstance.setPlaceholder('cvv', '1234');
          $('#cvv').prev().text('(4 digits)');

        }
      } else {
        hostedFieldsInstance.setPlaceholder('cvv', '123');
        $('#cvv').prev().text('(3 digits)');
      }
    });

    hostedFieldsInstance.on('empty', function (event) {
      $('.form__card-logo').attr('class','form__card-logo form__card-logo--absolute');
    });

    hostedFieldsInstance.on('validityChange', function (event) {
      // Check if all fields are valid, then show submit button
      var formValid = Object.keys(event.fields).every(function (key) {
        return event.fields[key].isValid;
      });

      if (formValid) {
        $('#buttonPay').removeClass('button--disabled').addClass('button--main');
        $('#buttonPay > a').attr('href','review-card.html');
      } else {
        $('#buttonPay').addClass('button--disabled');
        $('#buttonPay > a').removeAttr('href');
      }
    });
  });
});