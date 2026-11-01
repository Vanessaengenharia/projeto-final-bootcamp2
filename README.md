# Projeto Final - Engenharia de Software (UniCEUB)

## 👥 Integrantes do Grupo
| Nome | Matrícula | Usuário GitHub | Responsabilidade | Link da PR |
| :--- | :--- | :--- | :--- | :--- |
| Vanessa Sant'Anna | 22610858 | Vanessaengenharia | Arquitetura, CI/CD e Testes | [Link da sua PR criada] |

## 📋 1. Descrição da Aplicação
Aplicação desenvolvida em Node.js com testes automatizados utilizando Jest, pipeline de Integração Contínua (CI) via GitHub Actions e containerização com Docker.

## 🛠️ 2. Tecnologias Utilizadas
* JavaScript / Node.js
* Jest (Testes automatizados)
* GitHub Actions (CI/CD)
* Docker

## 🚀 3. Instruções de Execução Local e via Docker

### Executando os testes localmente:
```bash
npm install
npm test
## Entrega Intermediária - Bootcamp II

### Persistência de Dados
- **Banco de Dados**: Supabase (PostgreSQL)
- **Tabela Criada**: `favoritos` (campos: `id`, `created_at`, `nome_item`)

### Containerização
- **Tecnologia**: Docker / Nginx
- **Arquivos do Projeto**:
  - `Dockerfile`: Configurado para servir a aplicação web via Nginx.
  - `.dockerignore`: Configurado para otimizar o build descartando arquivos desnecessários (`.git`, `.github`, `README.md`).

### Como Executar o Container
```bash
docker build -t meu-projeto:1.0 .
docker run -d -p 8080:80 meu-projeto:1.0
,,,
