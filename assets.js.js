// Máscaras automáticas para CPF, telefone e CEP
function aplicarMascara(input, mascara) {
    input.addEventListener('input', function(e) {
        let valor = e.target.value.replace(/\D/g, '');
        let formatado = '';
        let i = 0;
        for (let char of mascara) {
            if (char === '9') {
                formatado += valor[i] || '';
                i++;
            } else {
                formatado += char;
            }
        }
        e.target.value = formatado;
    });
}

// Aplicar máscaras
document.addEventListener('DOMContentLoaded', function() {
    const cpfInput = document.getElementById('cpf');
    const telefoneInput = document.getElementById('telefone');
    const cepInput = document.getElementById('cep');

    if (cpfInput) aplicarMascara(cpfInput, '999.999.999-99');
    if (telefoneInput) aplicarMascara(telefoneInput, '(99) 99999-9999');
    if (cepInput) aplicarMascara(cepInput, '99999-999');

    // Validação e feedback do formulário
    const form = document.getElementById('form-cadastro');
    const feedback = document.getElementById('feedback');

    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            let valido = true;
            const campos = form.querySelectorAll('input[required], select[required]');
            campos.forEach(campo => {
                const erroSpan = document.getElementById('erro-' + campo.id);
                if (!campo.checkValidity()) {
                    erroSpan.textContent = 'Campo obrigatório ou inválido.';
                    valido = false;
                } else {
                    erroSpan.textContent = '';
                }
            });
            if (valido) {
                feedback.textContent = 'Cadastro enviado com sucesso! (Simulação)';
                feedback.style.color = 'green';
                form.reset();
            } else {
                feedback.textContent = 'Corrija os erros e tente novamente.';
                feedback.style.color = 'red';
            }
        });
    }
});