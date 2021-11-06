const openNavBtn = document.querySelector('.header-btn')
const closeNavBtn = document.querySelector('.header-nav-colse')
const nav = document.querySelector('.header-right')

openNavBtn.addEventListener('click', function () {
	nav.style.transform = 'translateX(0)'
})

closeNavBtn.addEventListener('click', function () {
	nav.style.transform = 'translateX(100%)'
})

//
const subscribeEle = document.querySelector('.subscribe')
const footerEle = document.querySelector('.footer-wrap')
const subscribeHeight = subscribeEle.clientHeight
console.log(subscribeHeight / 2)
footerEle.style.marginTop = `-${subscribeHeight / 2}px`
footerEle.style.paddingTop = `${subscribeHeight / 2 + 50}px`
