const API_BASE_URL = 'https://api-academia-xi.vercel.app/';
let cpfInput = "";

const body = document.getElementById('mainBody');
const card = document.getElementById('cardAcesso');
const statusTexto = document.getElementById('statusTexto');
const subTexto = document.getElementById('subTexto');
const display = document.getElementById('displayCPF');

function addNum(n) {
    if (cpfInput.length < 11) {
        cpfInput += n;
        atualizarDisplay();
    }
}

function apagar() {
    cpfInput = cpfInput.slice(0, -1);
    atualizarDisplay();
}

function atualizarDisplay() {
    let v = cpfInput;
    v = v.replace(/\D/g, "");
    v = v.replace(/(\d{3})(\d)/, "$1.$2");
    v = v.replace(/(\d{3})(\d)/, "$1.$2");
    v = v.replace(/(\d{3})(\d{1,2})$/, "$1-$2");
    display.value = v;
}

async function verificarAcesso() {
    if (cpfInput.length !== 11) return;

    const cpfFormatado = display.value;

    try {
        const res = await fetch(`${API_BASE_URL}catraca`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ cpf: cpfFormatado })
        });

        const data = await res.json();

        if (res.ok && data.status === "LIBERADO") {
            darFeedback(true, "ACESSO LIBERADO", "Bom treino!");
        } else {
            darFeedback(false, "ACESSO NEGADO", data.mensagem || "Procure a recepção");
        }
    } catch (err) {
        darFeedback(false, "ERRO", "Servidor offline");
    }
}

function darFeedback(sucesso, titulo, subtitulo) {
    // 1. Muda cores para o estado de feedback
    if (sucesso) {
        body.classList.replace('bg-[#0F172A]', 'bg-emerald-500');
        statusTexto.className = "text-2xl font-black text-emerald-600 uppercase tracking-widest";
    } else {
        body.classList.replace('bg-[#0F172A]', 'bg-rose-500');
        statusTexto.className = "text-2xl font-black text-rose-600 uppercase tracking-widest";
    }

    // 2. Atualiza Textos
    statusTexto.textContent = titulo;
    subTexto.textContent = subtitulo;
    card.classList.add('scale-110'); // Leve zoom no card

    // 3. Reseta após 3 segundos
    setTimeout(() => {
        body.className = "bg-[#0F172A] flex items-center justify-center min-h-screen p-4";
        statusTexto.className = "text-2xl font-bold text-slate-800 uppercase tracking-widest";
        statusTexto.textContent = "Identifique-se";
        subTexto.textContent = "Digite seu CPF para liberar a entrada";
        card.classList.remove('scale-110');
        cpfInput = "";
        atualizarDisplay();
    }, 3000);
}