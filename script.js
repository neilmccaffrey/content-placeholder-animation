const header = document.getElementById('header')
const title = document.getElementById('title')
const excerpt = document.getElementById('excerpt')
const profile_img = document.getElementById('profile_img')
const nameEl = document.getElementById('name')
const date = document.getElementById('date')

const animated_bg = document.querySelectorAll('.animated-bg')
const animated_bg_text = document.querySelectorAll('.animated-bg-text')

setTimeout(getData, 3000)

function getData(){
    header.innerHTML = '<img src="https://images.unsplash.com/photo-1679240339099-1759c6576e96?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1014&q=80" alt=""></img>'
    title.innerHTML = 'Lorem ipsum dolor sit amet.'
    excerpt.innerHTML = 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Expedita praesentium temporibus dolorum nisi nostrum ea?'
    profile_img.innerHTML = '<img src="https://randomuser.me/api/portraits/women/26.jpg" alt="">'
    nameEl.innerHTML = 'Jane Doe'
    date.innerHTML = 'May 10, 2023'

    animated_bg.forEach(bg => bg.classList.remove('animated-bg'))
    animated_bg_text.forEach(bg => bg.classList.remove('animated-bg-text'))
}