import { elementReady } from './utils/elementReady'

export async function headerLinks() {
    const container = await elementReady('#header-links')

    const html = `
    <a href="/" class="header-link">Каталог</a>
    <a href="/" class="header-link">Доставка</a>
    <a href="/" class="header-link">Контакты</a>`

    const wrapper = Object.assign(document.createElement('div'), { className: 'header-link__wrapper' })
    wrapper.innerHTML = html

    container.append(wrapper)
}
