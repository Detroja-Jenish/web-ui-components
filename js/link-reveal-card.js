const card_link_reveal_wrapper = document.getElementsByClassName('card-link-reveal-wrapper')[0]
const link_btn = document.getElementsByClassName('link-btn')[0]
link_btn.style.setProperty('--parent-height', `${card_link_reveal_wrapper.getBoundingClientRect().height*0.57}px`)