
btn.addEventListener('click', clicar)

function clicar() {
     let btn = document.getElementById('btn')
     let txt = document.getElementById('txt1')
     let res = document.getElementsByTagName('p')[2]
     let sep = txt.value
     

     sep = sep.toUpperCase()

     if (sep == 'BR') {
          res.innerHTML = '<strong>Brasileiro</strong>'
          res.style.backgroundColor = 'white'
          res.style.color = 'black'
     } else if (sep == 'MX') {
          res.innerHTML = '<strong>Mexicndo</strong>'
          res.style.backgroundColor = 'white'
          res.style.color = 'black'
     } else if (sep == 'UK') {
          res.innerHTML = '<strong>Britânico</strong>'
          res.style.backgroundColor = 'white'
          res.style.color = 'black'
     } else if (sep == 'ES') {
          res.innerHTML = '<strong>Espanhol</strong>'
          res.style.backgroundColor = 'white'
          res.style.color = 'black'
     } else if (sep == 'PT') {
          res.innerHTML = '<strong>Português</strong>'
          res.style.backgroundColor = 'white'
          res.style.color = 'black'
     } else if (sep == 'US') {
          res.innerHTML = '<strong>Americano</strong>'
          res.style.backgroundColor = 'white'
          res.style.color = 'black'
     } else {
          res.innerHTML = '<strong>&#x1F6A8; DIGITE UM CÓDIGO VÁLIDO &#x1F6A8;</strong>'
          res.style.backgroundColor = 'rgba(255, 255, 0, 0.5)'
          res.style.color = 'rgba(255, 0, 0, 1)'
     }
}