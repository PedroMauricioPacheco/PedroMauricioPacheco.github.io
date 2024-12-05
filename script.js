window.onload = function() {
    const dataEscolhida = new Date('2024-08-19'); // Substitua por sua data específica
    const dataAtual = new Date();
    
    // Zera as horas, minutos, segundos e milissegundos
    dataEscolhida.setHours(0, 0, 0, 0);
    dataAtual.setHours(0, 0, 0, 0);
    
    const diffTime = dataAtual - dataEscolhida;
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
    
    document.getElementById('resultado').textContent = `Se passaram ${diffDays} dias desde ${dataEscolhida.toLocaleDateString()} e nossas vidas mudaram para sempre.`;
};
