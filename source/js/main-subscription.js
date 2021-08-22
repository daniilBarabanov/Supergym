const tabItems = document.querySelectorAll('.months-item__link');
const contentItems = document.querySelectorAll('.subscription-cards');

const findClearActiveClass = (elements, className = 'is-active')  => {
    Array.from(elements).find(item =>
        item.classList.remove(`${className }`))
}

const setActiveClass = (element, index, className = 'is-active') => {
    element[index].classList.add(`${ className}`)
}

const checkoutTabs = (item, index) => {
    item.addEventListener('click', () => {
        if (item.classList.contains('is-active')) return

        const currentItem = index
        
        findClearActiveClass(tabItems)
        findClearActiveClass(contentItems)

        setActiveClass(tabItems, currentItem)
        setActiveClass(contentItems, currentItem)
    })
}
tabItems.forEach(checkoutTabs)