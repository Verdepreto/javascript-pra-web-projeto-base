const inputSugestao = document.getElementById('input-sugestão');

const lista = document.getElementById('lista-item-ul');

const botaoEnviar = document.querySelector('.botao-enviar');
botaoEnviar.addEventListener('click', adicionarItem);
let contador = 2;

function adicionarItem(evento) {
    evento.preventDefault();
    if (inputSugestao.value === '') {
        alert('digite alto')
    } else {
        const listaItem = document.createElement('li');
        listaItem.classList.add('lista-item');

        const checkboxContainer = document.createElement('div');
        checkboxContainer.classList.add('checkbox-botao')

        const checkboxInput = document.createElement('input');
        checkboxInput.type = 'checkbox';
        checkboxInput.classList.add('checkbox-input');
        checkboxInput.id = `checkbox-${contador++}`

        const checkboxLabel = document.createElement('label');
        checkboxLabel.setAttribute('for', checkboxInput.id);

        checkboxLabel.addEventListener('click', function (evento) {
            const inputCheckbox = evento.currentTarget.querySelector('.checkbox-input');
            const checkboxCuston = evento.currentTarget.querySelector('.checkbox-customizado');

            if (inputCheckbox.checked) {
                checkboxCuston.classList.add('checked');
            } else {
                checkboxCuston.classList.remove('checked');

            }

        })
        const checkBoxCustomizado = document.createElement('div');
        checkBoxCustomizado.classList.add('checkbox-customizado');

        checkboxLabel.appendChild(checkBoxCustomizado)
        checkboxLabel.appendChild(checkboxInput)
        checkboxContainer.appendChild(checkboxLabel);



        const listaPara = document.createElement('p');
        listaPara.classList.add('lista-item-p');
        listaPara.innerText = inputSugestao.value;


        listaItem.appendChild(checkboxContainer);


        listaItem.appendChild(listaPara);
        lista.appendChild(listaItem);
    }


}