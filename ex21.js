function verificarAcesso(senha) {
    const SENHA_CORRETA = 6769;
    if (Number(senha) === SENHA_CORRETA) {
        console.log("acesso permitido");
    } else {
        console.log("acesso negado");
    }
}

verificarAcesso(6769);