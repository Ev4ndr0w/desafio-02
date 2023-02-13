let listadeestudantes = [
    {
        nomedoestudante: 'Josevaldo',
        first: 6,
        second: 7,
        third: 8

    }

    , {
        nomedoestudante: 'Adalio',
        first: 9,
        second: 6,
        third: 7

    }

    , {
        nomedoestudante: 'Denilson',
        first: 5,
        second: 3,
        third: 6

    }


]


function calculamedia(first, second, third) {
    let media = (first + second + third) / 3
    return media
}

for (let estudante of listadeestudantes) {
    mediaindividual = calculamedia(estudante.first, estudante.second, estudante.third)
    let aprovedorno = mediaindividual < 7 ? 'Infelizmente voce e burro' : 'Parabens filho da puta vc passou'

    alert(`A media de ${estudante.nomedoestudante} e ${mediaindividual}.${aprovedorno}`)
}
