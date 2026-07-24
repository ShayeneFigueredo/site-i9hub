# i9Hub Institucional

Bem-vindo ao repositório do site institucional **i9Hub**! Este projeto foi desenvolvido para apresentar as empresas e os projetos do grupo, com foco na inovação, design moderno e acessibilidade bilíngue.

## 🚀 Tecnologias Utilizadas

Este projeto foi construído utilizando as melhores e mais modernas ferramentas do ecossistema de desenvolvimento web:

* **React (com Vite):** Para uma interface de usuário rápida, dinâmica e estruturada em componentes.
* **Vanilla CSS:** Estilização pura, leve e personalizada (sem dependência excessiva de frameworks pesados de CSS), permitindo um controle milimétrico de cada aspecto visual e animação.
* **Lucide React:** Biblioteca de ícones elegantes e minimalistas.
* **Sistema Bilíngue Customizado:** Lógica de internacionalização (i18n) feita sob medida para alterar todo o texto do site entre Português e Inglês com um único clique, de forma instantânea.

## ✨ Funcionalidades e Destaques

* **Design Premium e Dark Mode Integrado:** Cores e contrastes pensados para um visual altamente tecnológico, corporativo e luxuoso.
* **Responsividade Absoluta:** Layout fluido que se adapta de telas ultrawide em computadores até as telas mais restritas de smartphones. O site conta com um menu lateral nativo (sidebar) para a versão mobile.
* **Animações e Transições:** Botões animados, componentes interativos e barra superior que responde às interações do usuário.
* **Empresas do Grupo:** Espaços de destaque e carrosséis dedicados às empresas parceiras, como **Viacast Soluções** e **JPCA**, destacando as informações de seus fundadores (Paulo Feres e João Paulo Cruz Araújo, respectivamente) e de seus projetos de ponta.

## ⚙️ Como rodar o projeto localmente

Siga o passo a passo abaixo para rodar o site no seu computador:

1. **Pré-requisitos:** Certifique-se de ter o [Node.js](https://nodejs.org/) instalado na sua máquina.

2. **Acesse a pasta do projeto:**
   Abra o seu terminal, navegue até a pasta onde clonou este repositório e acesse a pasta da aplicação web:
   ```bash
   cd i9hub-app
   ```

3. **Instale as dependências:**
   Isso fará o download de todos os pacotes necessários que o React e o Vite utilizam.
   ```bash
   npm install
   ```

4. **Inicie o servidor de desenvolvimento:**
   ```bash
   npm run dev
   ```

5. O terminal exibirá um link local (geralmente `http://localhost:5173`). Basta segurar a tecla `Ctrl` e clicar nele, ou copiar e colar no seu navegador para ver o site funcionando.

## 📁 Estrutura de Pastas

* `/src/assets/`: Contém todas as imagens estáticas, logos, fotos da equipe (como `viacastpeople.png` e `jpca-people.png`) e ícones do site.
* `/src/components/`: Onde moram os pedaços reutilizáveis do site, como o `Header.jsx`, `Footer.jsx`, `FeaturedProject.jsx` e os carrosséis de clientes.
* `/src/styles/`: Arquivos CSS complementares e divididos por componentes.
* `/src/translations.js`: O "cérebro" bilíngue do site, contendo todos os textos em Português e Inglês organizados em chaves de fácil edição.
* `/src/App.css`: Arquivo central contendo as variáveis mestre de cores, a fundação visual e os estilos essenciais que conectam toda a aplicação.

---
Desenvolvido com dedicação e excelência para o grupo **i9Hub**.
