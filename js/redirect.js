const replacePage = ( ) => window.location.assign( 'pricing.html' )

const btnsPricing = document.querySelectorAll('[data-js="btn-pricing"]')
 btnsPricing.forEach( btn  => {
    btn.addEventListener('click', replacePage)

});