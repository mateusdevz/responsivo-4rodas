
let abrirMenu = document.querySelector(".menu-abrir");
let fecharMenu = document.querySelector(".menu-fechar");

abrirMenu.addEventListener("click",()=>{

    document.documentElement.classList.add("menu-ativo");
});

fecharMenu.addEventListener("click",()=>{

    document.documentElement.classList.remove("menu-ativo");
});


// incrementando o fechamento do menu a partir do fundo cinza

document.documentElement.onclick = (event) => {

    if(event.target == document.documentElement) {

        document.documentElement.classList.remove('menu-ativo');
    }
};
