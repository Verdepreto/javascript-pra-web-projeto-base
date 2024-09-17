import { criarItemDaLista } from "./criarItemDaLista.js";
import { verificarListaVazia } from "./verificarListaVazia.js";

const item = document.getElementById("input-item");

const listaDeCompras = document.getElementById("lista-de-compras");

export function adicionarItem(evento) {
    evento.preventDefault()
    if(item !== null & item.value.trim() !== ''){
        const itemDaLista = criarItemDaLista(item.value);
        listaDeCompras.appendChild(itemDaLista);
        verificarListaVazia(listaDeCompras);
        
        item.value='';

    }else{
        alert('Digite algo para colocar na lista')
        return;
    }

    }