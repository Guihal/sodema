import { elementReady } from './utils/elementReady'

export async function sidebar(nav) {
    const container = await elementReady('#side-nav-panel .mobile-tabs')

    container.innerHTML = '<div class="burger_title">Категории:</div>'

    container.classList.add('burger')

    container.innerHTML += `<ul>${nav.innerHTML}</ul>`
}
