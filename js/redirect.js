const replacePage = ( ) => window.location.assign( 'pricing.html' )

document.addEventListener( 'click', e => {
    const el = e.target

    console.log( el, el.matches('[data-js="btn-pricing"]') )

    if ( el.matches('[data-js="btn-pricing"]') ) return replacePage()
})