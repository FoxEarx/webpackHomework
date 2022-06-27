import './banner.js'
import './tabs.js'

import './style/index.css'
import './style/index.less'
import $ from 'jquery'
import './assets/fonts/iconfont.css'
import './app.vue'
// $('#swiper').css('background-color', 'red')

import imgUrl from './assets/1.gif'
const theImg = document.createElement('img')
theImg.src = imgUrl
document.body.appendChild(theImg)
