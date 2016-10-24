 /*jshint devel:true */
 /*globals braintree:false */
 /*globals $:false */
 /*globals cvvIcon: false */
 /*globals cardNumberIcon: false */
 /*jshint unused:false*/

 var payWithPp;
 var mooodalOne;
 var mooodalTwo;
 var paymentOptions;
 var parentOption;
 var exposedContent;
 var exposedHeader;
 var exposedSaved;
 var merchantButton;
 var optionHeader;
 var additionalOptions;
 var useCardBtn;

 $(function() {
   optionHeader = document.getElementsByClassName('braintree-exposed__header');
   additionalOptions = document.getElementById('braintreeAdditionalOptions');
   merchantButton = $('#buttonPay');
   useCardBtn = document.getElementById('buttonUseCard');

   function showSelectedPaymentOption(event) {
     // Choosing a way to pay
     event.data.optionHeader.parentElement.classList.remove('option--is-closed');
     event.data.optionHeader.parentElement.classList.add('option--is-open');

     $('.option--is-closed').addClass('option--is-hidden').removeClass('option--is-closed');

     // $('.option--is-open .braintree-exposed__header').on('click', function(){
     //   additionalOptions.classList.add('braintree-hide');
     //
     //   $('.braintree-exposed__option').removeClass('option--is-hidden').removeClass('option--is-open').addClass('option--is-closed');
     //
     // });

     // Show additional payment options
     additionalOptions.classList.remove('braintree-hide');
   }


   for (var i = 0; i < optionHeader.length; i++) {
     $(optionHeader[i]).on('click', {
       optionHeader: optionHeader[i]
     }, showSelectedPaymentOption);
   }


   $(useCardBtn).click(function() {
     parentOption = document.getElementsByClassName('option--is-open')[0];
     exposedContent = parentOption.getElementsByClassName('braintree-exposed__content')[0];
     exposedHeader = parentOption.getElementsByClassName('braintree-exposed__header')[0];
     exposedSaved = parentOption.getElementsByClassName('braintree-exposed__saved')[0];
     merchantButton.removeClass("button--disabled");
     merchantButton.addClass("button--main").find('a').attr("href", "review-card-only.html");

     $(exposedHeader).addClass('braintree-hide');
     $(exposedSaved).removeClass('braintree-hide');
     $(parentOption).addClass('option--is-saved');
   });


   additionalOptions.addEventListener('click', function() {
     this.classList.add('braintree-hide');

     paymentOptions = document.getElementsByClassName('braintree-exposed__option');

     $(exposedHeader).removeClass('braintree-hide');
     $(exposedSaved).addClass('braintree-hide');
     merchantButton.addClass("button--disabled");
     merchantButton.removeClass("button--main");

     for (var x = 0; x < paymentOptions.length; x++) {
       paymentOptions[x].classList.remove('option--is-hidden');
       paymentOptions[x].classList.remove('option--is-open');
       paymentOptions[x].classList.remove('option--is-saved');
       paymentOptions[x].classList.add('option--is-closed');
     }

   });

   // Active HF on card number
   braintree.client.create({
     authorization: 'sandbox_g42y39zw_348pk9cgf3bgyw2b'
   }, function(err, clientInstance) {

     if (err) {
       console.error(err);
       return;
     }

     braintree.hostedFields.create({
       client: clientInstance,
       styles: {
         'input': {
           'font-size': '16px',
           'font-family': '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif',
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
           placeholder: '1111 1111 1111 1111'
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
     }, function(err, hostedFieldsInstance) {
       if (err) {
         console.error(err);
         return;
       }

       hostedFieldsInstance.on('focus', function(event) {
         switch (event.emittedBy) {
           case "number":
             cardNumberIcon.classList.remove('braintree-hide');
             break;
           case "cvv":
             cvvIcon.classList.remove('braintree-hide');
             break;
           default:
             return;
         }
       });

       hostedFieldsInstance.on('blur', function(event) {
         if (event.fields.number.isEmpty) {
           cardNumberIcon.classList.add('braintree-hide');
         }

         if (event.fields.cvv.isEmpty) {
           cvvIcon.classList.add('braintree-hide');
         }
       });

       hostedFieldsInstance.on('cardTypeChange', function(event) {
         // Change card bg depending on card type
         if (event.cards.length === 1) {
           useCardBtn.innerHTML = "Use This " + event.cards[0].niceType + " Card";

           cardNumberIcon.querySelector('use').setAttribute('xlink:href', '#icon-' + event.cards[0].type);

           cvvIcon.querySelector('use').setAttribute('xlink:href', '#iconCVVBack');

           // Change the CVV length for AmericanExpress cards
           if (event.cards[0].code.size === 4) {
             hostedFieldsInstance.setPlaceholder('cvv', '1234');

             cvvIcon.querySelector('use').setAttribute('xlink:href', '#iconCVVFront');

             document.querySelector('#cvv').parentElement.getElementsByClassName('braintree-form__descriptor')[0].textContent = '(4 digits)';
           }
         } else {
           cardNumberIcon.querySelector('use').setAttribute('xlink:href', '#iconCardFront');

           useCardBtn.innerHTML = "Use This Card";

           hostedFieldsInstance.setPlaceholder('cvv', '123');
           document.querySelector('#cvv').parentElement.getElementsByClassName('braintree-form__descriptor')[0].textContent = '(3 digits)';
         }
       });

       hostedFieldsInstance.on('validityChange', function(event) {
         // Check if all fields are valid, then show submit button
         Object.keys(event.fields).every(function(key) {
           return event.fields[key].isValid;
         });
       });

     });
   });


   // PayPal mooodal stuff
   payWithPp = $('#payWithPayPal');
   mooodalOne = $('#mooodalOne');
   mooodalTwo = $('#mooodalTwo');

   payWithPp.on('click', function() {
     mooodalOne.removeClass('braintree-hide');
   });
 });

 // Show PayPal modal

 function showMooodalTwo() {
   mooodalOne.addClass('braintree-hide');
   mooodalTwo.removeClass('braintree-hide');
 }

 function closeMooodal() {
   mooodalOne.addClass('braintree-hide');
   mooodalTwo.addClass('braintree-hide');
 }

 function savePayPalPayment() {
   parentOption = document.getElementsByClassName('option--is-open')[0];
   exposedContent = parentOption.getElementsByClassName('braintree-exposed__content')[0];
   exposedHeader = parentOption.getElementsByClassName('braintree-exposed__header')[0];
   exposedSaved = parentOption.getElementsByClassName('braintree-exposed__saved')[0];
   merchantButton.removeClass("button--disabled");
   merchantButton.addClass("button--main").find('a').attr("href", "review-paypal.html");

   $(exposedHeader).addClass('braintree-hide');
   $(exposedSaved).removeClass('braintree-hide');
   $(parentOption).addClass('option--is-saved');
 }

 $('#applePayButton').on('click', function() {
   $('#applePaySheet').show();
 });
