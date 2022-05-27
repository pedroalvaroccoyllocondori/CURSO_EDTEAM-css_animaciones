document.getElementById('animate').addEventListener('click', e=>{
    document.body.classList.toggle('animate')
    e.target.textContent=='animar'
    ?e.target.textContent='detener'
    :e.target.textContent='animar'
})