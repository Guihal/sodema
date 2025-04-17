import ScrollBooster from 'scrollbooster'
import { elementReady } from './utils/elementReady'
import { sidebar } from './sidebar'

export async function headerBooster() {
    const viewport = await elementReady('.header-category__wrapper .elementor-widget-container')
    const content = await elementReady('.header-category__wrapper .product-categories')

    sidebar(content)

    new ScrollBooster({
        viewport,
        content,
        scrollMode: 'transform',
        direction: 'horizontal',
        preventDefaultOnEmulateScroll: 'horizontal',
    })
}
