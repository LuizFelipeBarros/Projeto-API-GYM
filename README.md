# 🏋️ Fit Deploy Secretary - Sistema de Catraca

Sistema de controle de acesso para academia com verificação de CPF em tempo real via API.

## 📋 Descrição

**Fit Deploy Secretary** é uma aplicação web que funciona como uma catraca digital/turnstile para academias. Permite que os usuários se identifiquem através de seu CPF e recebam feedback imediato sobre a liberação de acesso.

### Características Principais

✅ **Interface Intuitiva** - Teclado numérico estilo máquina catraca  
✅ **Validação de CPF** - Integração com API para verificação de credenciais  
✅ **Feedback Visual** - Cores dinâmicas e animações para acesso liberado/negado  
✅ **Data e Hora** - Timestamp atualizado em tempo real  
✅ **Design Responsivo** - Funciona em diferentes tamanhos de tela  
✅ **Dark Mode** - Interface com tema escuro profissional  

## 🛠️ Stack Tecnológico

- **Frontend**: HTML5 + JavaScript Vanilla
- **Styling**: Tailwind CSS v3
- **Icons**: Font Awesome 6.0
- **Backend**: API externa (Vercel)
- **Endpoint**: `https://api-academia-xi.vercel.app/catraca`

## 📁 Estrutura do Projeto

```
├── index.html          # Interface principal da catraca
├── catraca.js          # Lógica da aplicação e integração com API
├── desenho.excalidraw  # Wireframe/Design do projeto
└── README.md          # Documentação
```

## 🚀 Como Usar

### Instalação

1. Clone ou baixe o projeto
2. Abra o arquivo `index.html` em um navegador web
3. Nenhuma dependência externa necessária (CDNs já inclusos)

### Funcionamento

1. **Insira o CPF**: Use o teclado numérico para digitar 11 dígitos
2. **Visualize**: O CPF é formatado automaticamente (000.000.000-00)
3. **Confirme**: Clique no botão verde com ✓ ou pressione Enter
4. **Receba Feedback**: A aplicação retorna acesso liberado/negado com timestamp

### Códigos de Resposta

| Status | Significado | Cor |
|--------|-------------|-----|
| LIBERADO | CPF válido e com acesso permitido | 🟢 Verde |
| NEGADO | CPF inválido ou sem acesso | 🔴 Vermelho |
| ERRO | Servidor offline | 🔴 Vermelho |

## 🎨 Paleta de Cores

```css
deploy-back:  #0B0F14  /* Fundo escuro */
deploy-card:  #161B22  /* Card principal */
deploy-text:  #E6EDF3  /* Texto principal */
deploy-bord:  #1F2937  /* Bordas */
deploy-botton: #22C55E /* Botão/Sucesso */
deploy-bhover: #16A34A /* Hover do botão */
```

## 📡 API Integration

### Request
```javascript
POST https://api-academia-xi.vercel.app/catraca
Content-Type: application/json

{
  "cpf": "12345678901"  // 11 dígitos sem formatação
}
```

### Response Esperada
```json
{
  "status": "LIBERADO",
  "mensagem": "Bem-vindo!",
  "timestamp": "2026-04-17"
}
```

## ⌨️ Controles

| Ação | Método |
|------|--------|
| Adicionar número | Clique no botão (0-9) ou tecle no teclado |
| Deletar | Clique em ⌫ ou pressione Backspace |
| Confirmar | Clique em ✓ ou pressione Enter |

## 🔍 Funcionalidades em Destaque

### Formatação Automática de CPF
O CPF é formatado em tempo real enquanto você digita:
- Input: `12345678901`
- Display: `123.456.789-01`

### Data e Hora em Tempo Real
Atualiza a cada segundo na parte inferior do card com formato: `DD/MM/YYYY - HH:MM:SS`

### Feedback com Timestamp
Quando acesso liberado, o horário exato é registrado na mensagem de confirmação.

### Animações Suaves
- Transições de cor (500ms)
- Zoom no card (scale-110)
- Efeitos de hover e active nos botões

## 🐛 Troubleshooting

**"Erro: Servidor Offline"**
- Verifique sua conexão com internet
- Confirme se a API está ativa

**"CPF inválido"**
- Certifique-se de digitar exatamente 11 dígitos
- Verifique se o CPF está cadastrado no sistema

**Interface não responde**
- Limpe o cache do navegador (Ctrl+Shift+Del)
- Recarregue a página (F5)

## 📝 Notas

- O CPF é enviado **sem formatação** para a API
- A formação visual é apenas local (não afeta o envio)
- O sistema aguarda 3 segundos antes de resetar para nova entrada
- Suporta até 11 dígitos no CPF

## 👨‍💻 Desenvolvedor

Projeto desenvolvido como sistema de controle de acesso para academia.

---

**Última atualização**: 17 de abril de 2026  
**Versão**: 1.0
