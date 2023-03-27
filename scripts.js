function contando(ifp) {
    window.document.querySelector('#loading').innerText = `Contando:`;

    if (!window.document.querySelector("#contador")) {
        criando = document.createElement("p");
        criando.setAttribute("id", "contador");
        window.document.querySelector("section").appendChild(criando);
    }
    
    frase = window.document.querySelector("#contador");
    frase.innerText = `${ifp[0]}`;
    ifp[0]=Number(ifp[0]); ifp[1]=Number(ifp[1]); ifp[2]=Number(ifp[2]);
    if (ifp[0]>ifp[1]) {
        for (let i = ifp[0]-ifp[2]; i>=ifp[1]; i-=ifp[2]) {
            frase.innerText += ` 👉 ${i}`;
        };
    } else {
        for (let i = ifp[0]+ifp[2]; i<=ifp[1]; i+=ifp[2]) {
            frase.innerText += ` 👉 ${i}`;
        };
    }
    frase.innerText += ` 🏁`;

    return;
};

function resultado() {
    ifp = [
        window.document.querySelector('input#inicio').value,
        window.document.querySelector('input#fim').value,
        window.document.querySelector('input#pace').value
    ];

    if (window.document.querySelector("#contador")) {
        window.document.querySelector("#contador").remove();
    }

    if (ifp.includes('')) {
        window.document.querySelector('#loading').innerText = `Impossível contar!`;
        return
    }

    if (ifp[2] < 0) {
        let limit = document.createElement("span");
        limit.setAttribute("id", "limitado");
        limit.appendChild(document.createTextNode("Em módulo."));

        window.document.querySelector("#passada").appendChild(limit);

        ifp[2] = -ifp[2];
        window.document.querySelector('input#pace').value = ifp[2];

        contando(ifp);

        setTimeout(function() {
            window.document.querySelector("#limitado").remove()
        }, 3000);

    } else if (ifp[2] == 0) {
        window.alert("Passada igual a 0.\nConsiderando como 1.");
        ifp[2] = 1;
        contando(ifp);
    } else {
        contando(ifp);
    };

    return;
};