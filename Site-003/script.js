
btn.addEventListener('click', clicar)

function clicar() {
     let btn = document.getElementById('btn')
     let txt = document.getElementById('txt1')
     let res = document.getElementsByTagName('p')[2]
     let sep = txt.value
     

     sep = sep.toUpperCase()
     if (sep == 'BR') {
          res.innerHTML = 'Você é: <strong>Brasileiro(a)</strong>'
          res.style.backgroundColor = 'white'
          res.style.color = 'black'
     } else if (sep == 'MX') {
          res.innerHTML = 'Você é: <strong>Mexicano(a)</strong>'
          res.style.backgroundColor = 'white'
          res.style.color = 'black'
     } else if (sep == 'UK') {
          res.innerHTML = 'Você é: <strong>Britânico(a)</strong>'
          res.style.backgroundColor = 'white'
          res.style.color = 'black'
     } else if (sep == 'ES') {
          res.innerHTML = 'Você é: <strong>Espanhol(a)</strong>'
          res.style.backgroundColor = 'white'
          res.style.color = 'black'
     } else if (sep == 'PT') {
          res.innerHTML = 'Você é: <strong>Português(a)</strong>'
          res.style.backgroundColor = 'white'
          res.style.color = 'black'
     } else if (sep == 'US') {
          res.innerHTML = 'Você é: <strong>Americano(a)</strong>'
          res.style.backgroundColor = 'white'
          res.style.color = 'black'
     } else {
          res.innerHTML = 'Você é: <strong>&#x1F6A8; DIGITE UM CÓDIGO VÁLIDO &#x1F6A8;</strong>'
          res.style.backgroundColor = 'rgba(255, 255, 0, 0.5)'
          res.style.color = 'rgba(255, 0, 0, 1)'
     }




// versão switch case (Beta)

//      switch(sep) {
//           case 'BR':
//                res.innerHTML = 'Você é <strong>Brasileiro(a)</strong>'
//                res.style.backgroundColor = 'white'
//                res.style.color = 'black'
//                break
//           case 'MX':
//                res.innerHTML = 'Você é <strong>Mexicano(a)</strong>'
//                res.style.backgroundColor = 'white'
//                res.style.color = 'black'
//                break
//           case 'UK':
//                res.innerHTML = 'Você é <strong>Britânico(a)</strong>'
//                res.style.backgroundColor = 'white'
//                res.style.color = 'black'
//                break
//           case 'ES':
//                res.innerHTML = 'Você é <strong>Espanhol(a)</strong>'
//                res.style.backgroundColor = 'white'
//                res.style.color = 'black'
//                break
//           case 'PT':
//                res.innerHTML = 'Você é <strong>Português(a)</strong>'
//                res.style.backgroundColor = 'white'
//                res.style.color = 'black'
//                break
//           case 'US':
//                res.innerHTML = 'Você é <strong>Americano(a)</strong>'
//                res.style.backgroundColor = 'white'
//                res.style.color = 'black'
//                break
//           }
// 
}