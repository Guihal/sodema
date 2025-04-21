import { elementReady } from './utils/elementReady'

export async function heroFilter() {
    const hero = await elementReady('.hero-swiper')

    hero.addEventListener('click', (ev) => {
        const parent = ev.target.closest('[data-filter]')
        if (!parent) return
        ev.preventDefault()

        const btn = document.querySelector(`.product-filter [data-filter="${parent.dataset.filter}"]`)
        if (!btn) return
        btn.scrollIntoView({ behavior: 'smooth' })
        btn.click()
    })
}
