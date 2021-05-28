const replacePage = ( ) => window.location.assign( 'pricing.html' )

const changeInput = ( el ) => {
    const spanMonthly = document.querySelector('.span-monthly')
    const spanYearly = document.querySelector('.span-yearly')

    spanYearly.classList.toggle('active')
    spanMonthly.classList.toggle('active')

    if ( el.checked ) {
        el.parentElement.classList.remove('billed-monthly')
        el.parentElement.classList.add('billed-yearly')
    } else {
        el.parentElement.classList.remove('billed-yearly')
        el.parentElement.classList.add('billed-monthly')
    }

}

document.addEventListener( 'click', e => {
    const el = e.target

    if ( el.matches('[data-js="btn-pricing"]') ) return replacePage
    if ( el.matches( '[data-js="input-billed"]' ) ) {
        return changeInput( el )
    }
})

