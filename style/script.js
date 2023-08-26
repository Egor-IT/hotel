function scrollTo(element){
    window.scroll({
        left:0,
        top:element.offsetTop,
        behavior:'smooth'
    })
}
var button = document.querySelector('.btn');
var blog = document.querySelector('.blog')
button.addEventListener('click', () =>{
    console.log('Вы кликнули')
    scrollTo(blog)
})