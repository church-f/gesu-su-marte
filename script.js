var sopra = document.getElementById('sopra')
var sotto = document.getElementById('sotto')
var scorri = document.getElementById('scorri')
var freccia = document.getElementById('freccia')
var razzo = document.getElementById('razzo')



window.addEventListener('scroll', function(){
    var value = window.scrollY
    

    sopra.style.top = value * -0.5 +'px'
    sotto.style.top = value * 0.9 + 'px'
    scorri.style.marginBottom = value * 2 +'px'
    freccia.style.marginBottom = value * 1.5 +'px'
    razzo.style.bottom = value * 1.5 + 'px'
    
    
    
})