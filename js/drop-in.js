/*jshint devel:true */

// classList polyfill for IE
if("document"in self){if(!("classList"in document.createElement("_"))||document.createElementNS&&!("classList"in document.createElementNS("http://www.w3.org/2000/svg","g"))){(function(t){"use strict";if(!("Element"in t))return;var e="classList",i="prototype",n=t.Element[i],s=Object,r=String[i].trim||function(){return this.replace(/^\s+|\s+$/g,"")},a=Array[i].indexOf||function(t){var e=0,i=this.length;for(;e<i;e++){if(e in this&&this[e]===t){return e}}return-1},o=function(t,e){this.name=t;this.code=DOMException[t];this.message=e},l=function(t,e){if(e===""){throw new o("SYNTAX_ERR","An invalid or illegal string was specified")}if(/\s/.test(e)){throw new o("INVALID_CHARACTER_ERR","String contains an invalid character")}return a.call(t,e)},c=function(t){var e=r.call(t.getAttribute("class")||""),i=e?e.split(/\s+/):[],n=0,s=i.length;for(;n<s;n++){this.push(i[n])}this._updateClassName=function(){t.setAttribute("class",this.toString())}},u=c[i]=[],f=function(){return new c(this)};o[i]=Error[i];u.item=function(t){return this[t]||null};u.contains=function(t){t+="";return l(this,t)!==-1};u.add=function(){var t=arguments,e=0,i=t.length,n,s=false;do{n=t[e]+"";if(l(this,n)===-1){this.push(n);s=true}}while(++e<i);if(s){this._updateClassName()}};u.remove=function(){var t=arguments,e=0,i=t.length,n,s=false,r;do{n=t[e]+"";r=l(this,n);while(r!==-1){this.splice(r,1);s=true;r=l(this,n)}}while(++e<i);if(s){this._updateClassName()}};u.toggle=function(t,e){t+="";var i=this.contains(t),n=i?e!==true&&"remove":e!==false&&"add";if(n){this[n](t)}if(e===true||e===false){return e}else{return!i}};u.toString=function(){return this.join(" ")};if(s.defineProperty){var h={get:f,enumerable:true,configurable:true};try{s.defineProperty(n,e,h)}catch(d){if(d.number===-2146823252){h.enumerable=false;s.defineProperty(n,e,h)}}}else if(s[i].__defineGetter__){n.__defineGetter__(e,f)}})(self)}else{(function(){"use strict";var t=document.createElement("_");t.classList.add("c1","c2");if(!t.classList.contains("c2")){var e=function(t){var e=DOMTokenList.prototype[t];DOMTokenList.prototype[t]=function(t){var i,n=arguments.length;for(i=0;i<n;i++){t=arguments[i];e.call(this,t)}}};e("add");e("remove")}t.classList.toggle("c3",false);if(t.classList.contains("c3")){var i=DOMTokenList.prototype.toggle;DOMTokenList.prototype.toggle=function(t,e){if(1 in arguments&&!this.contains(t)===!e){return e}else{return i.call(this,t)}}}t=null})()}}

/*! modernizr 3.3.1 (Custom Build: FLexbox) | MIT *
 * https://modernizr.com/download/?-flexbox-setclasses-cssclassprefix:ie !*/
!function(e,n,t){function r(e,n){return typeof e===n}function o(){var e,n,t,o,s,i,a;for(var l in C)if(C.hasOwnProperty(l)){if(e=[],n=C[l],n.name&&(e.push(n.name.toLowerCase()),n.options&&n.options.aliases&&n.options.aliases.length))for(t=0;t<n.options.aliases.length;t++)e.push(n.options.aliases[t].toLowerCase());for(o=r(n.fn,"function")?n.fn():n.fn,s=0;s<e.length;s++)i=e[s],a=i.split("."),1===a.length?Modernizr[a[0]]=o:(!Modernizr[a[0]]||Modernizr[a[0]]instanceof Boolean||(Modernizr[a[0]]=new Boolean(Modernizr[a[0]])),Modernizr[a[0]][a[1]]=o),g.push((o?"":"no-")+a.join("-"))}}function s(e){var n=x.className,t=Modernizr._config.classPrefix||"";if(_&&(n=n.baseVal),Modernizr._config.enableJSClass){var r=new RegExp("(^|\\s)"+t+"no-js(\\s|$)");n=n.replace(r,"$1"+t+"js$2")}Modernizr._config.enableClasses&&(n+=" "+t+e.join(" "+t),_?x.className.baseVal=n:x.className=n)}function i(e,n){return!!~(""+e).indexOf(n)}function a(){return"function"!=typeof n.createElement?n.createElement(arguments[0]):_?n.createElementNS.call(n,"http://www.w3.org/2000/svg",arguments[0]):n.createElement.apply(n,arguments)}function l(e){return e.replace(/([a-z])-([a-z])/g,function(e,n,t){return n+t.toUpperCase()}).replace(/^-/,"")}function f(e,n){return function(){return e.apply(n,arguments)}}function u(e,n,t){var o;for(var s in e)if(e[s]in n)return t===!1?e[s]:(o=n[e[s]],r(o,"function")?f(o,t||n):o);return!1}function d(e){return e.replace(/([A-Z])/g,function(e,n){return"-"+n.toLowerCase()}).replace(/^ms-/,"-ms-")}function p(){var e=n.body;return e||(e=a(_?"svg":"body"),e.fake=!0),e}function c(e,t,r,o){var s,i,l,f,u="modernizr",d=a("div"),c=p();if(parseInt(r,10))for(;r--;)l=a("div"),l.id=o?o[r]:u+(r+1),d.appendChild(l);return s=a("style"),s.type="text/css",s.id="s"+u,(c.fake?c:d).appendChild(s),c.appendChild(d),s.styleSheet?s.styleSheet.cssText=e:s.appendChild(n.createTextNode(e)),d.id=u,c.fake&&(c.style.background="",c.style.overflow="hidden",f=x.style.overflow,x.style.overflow="hidden",x.appendChild(c)),i=t(d,e),c.fake?(c.parentNode.removeChild(c),x.style.overflow=f,x.offsetHeight):d.parentNode.removeChild(d),!!i}function m(n,r){var o=n.length;if("CSS"in e&&"supports"in e.CSS){for(;o--;)if(e.CSS.supports(d(n[o]),r))return!0;return!1}if("CSSSupportsRule"in e){for(var s=[];o--;)s.push("("+d(n[o])+":"+r+")");return s=s.join(" or "),c("@supports ("+s+") { #modernizr { position: absolute; } }",function(e){return"absolute"==getComputedStyle(e,null).position})}return t}function h(e,n,o,s){function f(){d&&(delete z.style,delete z.modElem)}if(s=r(s,"undefined")?!1:s,!r(o,"undefined")){var u=m(e,o);if(!r(u,"undefined"))return u}for(var d,p,c,h,v,y=["modernizr","tspan","samp"];!z.style&&y.length;)d=!0,z.modElem=a(y.shift()),z.style=z.modElem.style;for(c=e.length,p=0;c>p;p++)if(h=e[p],v=z.style[h],i(h,"-")&&(h=l(h)),z.style[h]!==t){if(s||r(o,"undefined"))return f(),"pfx"==n?h:!0;try{z.style[h]=o}catch(g){}if(z.style[h]!=v)return f(),"pfx"==n?h:!0}return f(),!1}function v(e,n,t,o,s){var i=e.charAt(0).toUpperCase()+e.slice(1),a=(e+" "+b.join(i+" ")+i).split(" ");return r(n,"string")||r(n,"undefined")?h(a,n,o,s):(a=(e+" "+E.join(i+" ")+i).split(" "),u(a,n,t))}function y(e,n,r){return v(e,t,t,n,r)}var g=[],C=[],w={_version:"3.3.1",_config:{classPrefix:"ie",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(e,n){var t=this;setTimeout(function(){n(t[e])},0)},addTest:function(e,n,t){C.push({name:e,fn:n,options:t})},addAsyncTest:function(e){C.push({name:null,fn:e})}},Modernizr=function(){};Modernizr.prototype=w,Modernizr=new Modernizr;var x=n.documentElement,_="svg"===x.nodeName.toLowerCase(),S="Moz O ms Webkit",b=w._config.usePrefixes?S.split(" "):[];w._cssomPrefixes=b;var E=w._config.usePrefixes?S.toLowerCase().split(" "):[];w._domPrefixes=E;var P={elem:a("modernizr")};Modernizr._q.push(function(){delete P.elem});var z={style:P.elem.style};Modernizr._q.unshift(function(){delete z.style}),w.testAllProps=v,w.testAllProps=y,Modernizr.addTest("flexbox",y("flexBasis","1px",!0)),o(),s(g),delete w.addTest,delete w.addAsyncTest;for(var N=0;N<Modernizr._q.length;N++)Modernizr._q[N]();e.Modernizr=Modernizr}(window,document);

// Delete after!
var init = function() {};

// Main Containers
var braintreeContainerMain = document.getElementById('braintreeContainerMain');
var braintreeDropIn = document.getElementById('braintreeDropIn');

// Dropdown Elements
var dropdownDefault = document.getElementById('dropdownDefault')
var dropdownText = document.getElementById('dropdownText');
var vaultedMethod = document.getElementById('vaultedMethod');
var vaultedMethodIcon = document.getElementById('vaultedMethodIcon');
var dropdown = document.getElementById('braintreeDropdown');
var braintreePaymentSelect = document.getElementById('braintreePaymentSelect');
var dropdownOptions = document.getElementById('braintreePaymentOptions');
var dropdownArrow = document.getElementById('braintreeArrow');

// Form Variables
var cardLogos = document.getElementById('cardLogos');
var cardForm = document.getElementById('cardForm');
var buttonUseCard = document.getElementById('buttonUseCard');
var addCardPayment = document.getElementById('addCardPayment');
var cardNumberIcon = document.querySelector('#cardNumberIcon');
var cvvIcon = document.querySelector('#cvvIcon');

// Loader
var loadingContainer = document.getElementById('loadingContainer');
var loadingIndicator = document.getElementById('loadingIndicator');

var mainContainerOriginHeight = braintreeContainerMain.clientHeight;

// Hide initial load state after 1s
var loadInitialContent = function() {
    setTimeout(function() {
        braintreeDropIn.style.height = mainContainerOriginHeight + "px";
    }, 1000);

    setTimeout(function() {
        loadingIndicator.style.transform = "scale(0)";
    }, 1200);

    setTimeout(function() {
        loadingContainer.style.opacity = 0;

        braintreeContainerMain.style.opacity = 1;
        setTimeout(function() {
            loadingContainer.style.zIndex = -2;
            loadingContainer.style.height = 0;

            loadingIndicator.style.transform = "scale(1)";
        }, 200);
    }, 1400);
};

loadInitialContent();


// TOOLS
function moveDefaultOptionUp() {
    vaultedMethod.classList.remove('braintree-animate-down');
    vaultedMethodIcon.classList.remove('braintree-animate-down');
}

function moveDefaultOPtionDown() {
    vaultedMethod.classList.add('braintree-animate-down');
    vaultedMethodIcon.classList.add('braintree-animate-down');
}

function setDropInHeight() {

    if (cardLogos.classList.contains('braintree-animate-up')) {
        cardLogos.style.height = '0';
        cardForm.style.height = '0';
    } else {
        cardLogos.style.height = 'auto';
        cardForm.style.height = 'auto';
    }

    braintreeDropIn.style.height = 'auto';
}

// EVENTS

// ON click on 'use this card'
buttonUseCard.addEventListener('click', function() {

    var braintreeContainerMainHeight = braintreeContainerMain.clientHeight;

    loadingContainer.style.height = braintreeContainerMainHeight + "px";
    loadingContainer.style.zIndex = 2;
    loadingContainer.style.opacity = .8;

    setTimeout(function() {
        loadingContainer.style.opacity = 0;

        // hide HF and button
        cardLogos.classList.add('braintree-animate-up');
        cardForm.classList.add('braintree-animate-up');

        setDropInHeight();


        // Add vaulted method to default text
        vaultedMethod.classList.remove('braintree-hide');
        vaultedMethodIcon.classList.remove('braintree-hide');
        dropdown.classList.remove('braintree-hide');
        dropdownText.classList.add('braintree-hide-width');

        console.log("helo");

        $('#buttonPay').removeClass('button--disabled').addClass('button--main');
        $('#buttonPay > a').attr('href', 'review-card-only.html');

        setTimeout(moveDefaultOptionUp, 20);

        setTimeout(function() {
            loadingContainer.style.zIndex = -2;
            loadingContainer.style.height = 0;
        }, 200);
    }, 2000);
});

addCardPayment.addEventListener('click', function() {

    cardForm.classList.remove('braintree-hide');
    cardForm.classList.remove('braintree-animate-up');
    cardLogos.classList.remove('braintree-hide');
    cardLogos.classList.remove('braintree-animate-up');

    setDropInHeight();

    // hides dropdown
    dropdownOptions.classList.add('braintree-hide');
    dropdownDefault.classList.remove('braintree-desaturate');
    dropdownArrow.classList.remove('braintree-arrow--active');
    braintreePaymentSelect.classList.remove('braintree-dropdown__option--default--active');

    // change dropdown text, remove any vaulted method
    dropdownText.innerHTML = "Card";

    setTimeout(function() {
        vaultedMethod.classList.add('braintree-hide');
        vaultedMethodIcon.classList.add('braintree-hide');
        dropdownText.classList.remove('braintree-hide-width');
        dropdownText.classList.remove('braintree-hide');
    }, 200);

    moveDefaultOPtionDown();




})

// Closes dropdown on click outside
window.addEventListener('click', function() {
    dropdownOptions.classList.add('braintree-hide');
    dropdownDefault.classList.remove('braintree-desaturate');
    dropdownArrow.classList.remove('braintree-arrow--active');
    braintreePaymentSelect.classList.remove('braintree-dropdown__option--default--active');
});

// Toggles state of select and shows/hides options
braintreePaymentSelect.addEventListener('click', function() {
    dropdownDefault.classList.toggle('braintree-desaturate');
    dropdownArrow.classList.toggle('braintree-arrow--active');
    braintreePaymentSelect.classList.toggle('braintree-dropdown__option--default--active');
    dropdownOptions.classList.toggle('braintree-hide');
});

dropdown.addEventListener('click', function(event) {
    // stop listening to the window class event
    event.stopPropagation();
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
                buttonUseCard.innerHTML = "Use This " + event.cards[0].niceType + " Card";

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

                buttonUseCard.innerHTML = "Use This Card";

                hostedFieldsInstance.setPlaceholder('cvv', '123');
                document.querySelector('#cvv').parentElement.getElementsByClassName('braintree-form__descriptor')[0].textContent = '(3 digits)';
            }
        });

        hostedFieldsInstance.on('validityChange', function(event) {
            // Check if all fields are valid, then show submit button
            var formValid = Object.keys(event.fields).every(function(key) {
                return event.fields[key].isValid;
            });
        });

    });
});
