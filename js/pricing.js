const valuePlansPrice = document.querySelectorAll('[data-js="price-plan"]')
const valuePlansBilled = document.querySelectorAll('[data-js="price-billed"]')

const replacePage = ( ) => window.location.assign( 'pricing.html' )

const isYearly = ( el ) => {
    el.parentElement.classList.remove('billed-monthly')
    el.parentElement.classList.add('billed-yearly')

    valuePlansPrice.forEach( planPrice => planPrice.textContent = planPrice.textContent * 12)
    valuePlansBilled.forEach( planBilled => planBilled.textContent = '/year')
}

const isMonthly = ( el ) => {
    el.parentElement.classList.remove('billed-yearly')
    el.parentElement.classList.add('billed-monthly')

    valuePlansPrice.forEach( planPrice => planPrice.textContent = planPrice.textContent / 12)
    valuePlansBilled.forEach( planBilled => planBilled.textContent = '/mo')
}

const changeInput = ( el ) => {
    const spanMonthly = document.querySelector('.span-monthly')
    const spanYearly = document.querySelector('.span-yearly')

    spanYearly.classList.toggle('active')
    spanMonthly.classList.toggle('active')

    if ( el.checked ) {
        isYearly( el )
    } else {
        isMonthly( el )
    }

}

document.addEventListener( 'click', e => {
    const el = e.target

    if ( el.matches('[data-js="btn-pricing"]') ) return replacePage()
    if ( el.matches( '[data-js="input-billed"]' ) ) {
        return changeInput( el )
    }
})

