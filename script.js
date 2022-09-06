let description = document.querySelector('.part-1-4')
let warning = document.querySelector('.part-2')
let images = document.querySelector('.part-1-right')
let number = document.querySelector('.part-1-3')

let currentNumber = ''
let branco = false
let photosHtml = ''

function firstStep() {
  let numberHtml = ''
  currentNumber = ''
  branco = false
  photosHtml = ''

  for (let i = 0; i < 2; i++) {
    if (i === 0) {
      numberHtml += '<div class="number pisca"></div>'
    } else {
      numberHtml += '<div class="number"></div>'
    }
  }

  description.innerHTML = ''
  warning.style.display = 'none'
  images.innerHTML = ''
  number.innerHTML = numberHtml
}

function InterfaceUpdate() {
  let etapa = etapas[0]
  let candidato = etapa.candidatos.filter(candidato => {
    if (candidato.numero === currentNumber) {
      return true
    } else {
      return false
    }
  })
  if (candidato.length > 0) {
    candidato = candidato[0]
    description.innerHTML = `Nome: ${candidato.nome}</br> Partido: ${candidato.partido}</br> Vice: ${candidato.vice}`
    warning.style.display = 'block'

    for (let i in candidato.fotos) {
      if (i == 1) {
        photosHtml += `<div class="part-1-image small">
                <img src="${candidato.fotos[i].url}" alt="">
                Vice-presidente
              </div>`
      } else {
        photosHtml += `<div class="part-1-image">
                <img src="${candidato.fotos[i].url}" alt="">
                Presidente
              </div>`
      }
    }
    images.innerHTML = photosHtml
  } else {
    warning.style.display = 'block'
    description.innerHTML = '<div class="big-warning pisca">VOTO NULO</div>'
  }
}

function clicou(n) {
  let elNumber = document.querySelector('.number.pisca')
  if (elNumber !== null) {
    elNumber.innerHTML = n
    currentNumber = `${currentNumber}${n}`

    elNumber.classList.remove('pisca')
    if (elNumber.nextElementSibling !== null) {
      elNumber.nextElementSibling.classList.add('pisca')
    } else {
      InterfaceUpdate()
    }
  }
}

function votoBranco() {
  if (currentNumber === '') {
    branco = true
    warning.style.display = 'block'
    number.innerHTML = ''
    description.innerHTML =
      '<div class="big-warning pisca">VOTO EM BRANCO</div>'
  }
}

function corrige() {
  firstStep()
}

function confirma() {
  images.innerHTML = photosHtml
  warning.style.display = 'block'
  description.innerHTML = '<div class="big-warning pisca">VOTO CONFIRMADO</div>'
}

firstStep()
