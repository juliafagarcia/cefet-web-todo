/* -- Exercício 0 -- */
const tarefas = [
    {
        nome: 'Comprar reparador de pontas',
        categoria: 'compras',
        realizada: false
    }, {
        nome: 'Fazer drinks inúsitados',
        categoria: 'lazer',
        realizada: true
    }
]

tarefas.push({ nome: 'Fazer funcional', categoria: 'lazer', realizada: true })
tarefas.push({ nome: 'Fazer o TP de Web', categoria: 'estudos', realizada: false })
tarefas.push({ nome: 'Fazer TCC', categoria: 'estudos', realizada: false })
tarefas.push({ nome: 'Comprar presentes de Natal', categoria: 'compras', realizada: false })

/* -- Exercício 1 -- */
const insereTarefaNaPagina = tarefa => {

    const listaTarefasEl = document.querySelector('#lista-tarefas')

    let marcado = ''

    if (tarefa.realizada === true) {
        marcado = 'marcado'
    }

    let template = `<li class='item-tarefa ${marcado} categoria-${tarefa.categoria}'>${tarefa.nome}</li>`

    /* -- Exercício 5 -- */
    const userEventsEl = document.createRange().createContextualFragment(template)

    userEventsEl.querySelector('li').addEventListener('click', e => {
        e.target.realizada = !e.target.realizada
        e.target.classList.toggle('marcado')
    })

    listaTarefasEl.appendChild(userEventsEl)
}

tarefas.forEach(insereTarefaNaPagina)

/* -- Exercício 2 -- */
document.querySelector('#incluir-nova-tarefa').addEventListener('click', e => {
    let novaTarefa = { realizada: false }
    const tarefaNomeEl = document.querySelector('#nova-tarefa-nome')
    const tarefaCategoriaEl = document.querySelector('#nova-tarefa-categoria')

    novaTarefa.nome = tarefaNomeEl.value
    novaTarefa.categoria = tarefaCategoriaEl.value

    insereTarefaNaPagina(novaTarefa)

    tarefaNomeEl.value = ''
    tarefaCategoriaEl.value = ''

    tarefaNomeEl.focus()
})

/* -- Exercício 3 -- */

document.querySelector('#filtro-de-categoria').addEventListener('change', e => {

    document.querySelectorAll('.item-tarefa').forEach(item => {
        if (e.currentTarget.value !== '') {
            if (item.classList.contains(`categoria-${e.currentTarget.value}`) === false) {
                item.classList.add('retido-no-filtro')

            } else {
                item.classList.remove('retido-no-filtro')
            }

        } else {
            item.classList.remove('retido-no-filtro')
        }
    })
})

/* -- Exercício 4 -- */

document.querySelector('#nova-tarefa-nome').addEventListener('keyup', e => {
    let novaTarefa = { executed: false }

    if (e.key == 'Enter' && e.target.value != '') {
        const categoriaEl = document.querySelector('#nova-tarefa-categoria')

        novaTarefa.nome = e.target.value
        novaTarefa.categoria = categoriaEl.value

        insereTarefaNaPagina(novaTarefa)

        e.target.value = ''
        categoriaEl.value = 'lazer'

        e.target.focus()
    }
})