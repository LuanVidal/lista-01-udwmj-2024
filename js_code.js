function montarArvoreDeNatal(altura) {
    for (let i = 0; i < altura; i++) {

        let espacos = ' '.repeat(altura - i - 1);
        let asteriscos = '*'.repeat(2 * i + 1);
        console.log(espacos + asteriscos);
    }

    // Tronco da árvore
    let tronco = ' '.repeat(altura - 1) + '|';
    console.log(tronco);
}

// Exemplo de uso
montarArvoreDeNatal(5);