# Identidade Visual — AlugaAqui

Guia para padronizar o tema do projeto. Paleta baseada em **azul** e **branco**, transmitindo confiança, tecnologia e clareza.

## Paleta de cores

### Cores principais

| Nome            | HEX       | Uso                                                    |
| --------------- | --------- | ------------------------------------------------------ |
| Azul Primário   | `#1E56D9` | Botões principais, links, destaques, cabeçalho         |
| Azul Escuro     | `#0B2A6F` | Títulos, rodapé, textos de ênfase, hover de botões     |
| Azul Médio      | `#3B82F6` | Ícones, elementos interativos secundários, focus ring  |
| Azul Claro      | `#DBEAFE` | Fundos de cards/seções, badges, linhas selecionadas    |
| Azul Gelo       | `#F1F6FF` | Fundo geral de páginas alternadas                      |
| Branco          | `#FFFFFF` | Fundo principal, texto sobre azul, cards               |

### Neutros

| Nome          | HEX       | Uso                                  |
| ------------- | --------- | ------------------------------------ |
| Cinza 900     | `#111827` | Texto principal                      |
| Cinza 600     | `#4B5563` | Texto secundário, legendas           |
| Cinza 300     | `#D1D5DB` | Bordas, divisores, inputs            |
| Cinza 100     | `#F3F4F6` | Fundos desabilitados                 |

### Cores de feedback

| Nome    | HEX       | Uso                                   |
| ------- | --------- | ------------------------------------- |
| Sucesso | `#16A34A` | Confirmações, status "disponível"     |
| Alerta  | `#F59E0B` | Avisos, status "reservado"            |
| Erro    | `#DC2626` | Erros, status "indisponível"          |
| Info    | `#0EA5E9` | Mensagens informativas                |

## Variáveis CSS

Copie para o `index.css` e use `var(--nome)` em todo o projeto:

```css
:root {
  /* Marca */
  --color-primary: #1E56D9;
  --color-primary-dark: #0B2A6F;
  --color-primary-medium: #3B82F6;
  --color-primary-light: #DBEAFE;
  --color-primary-ice: #F1F6FF;
  --color-white: #FFFFFF;

  /* Neutros */
  --color-text: #111827;
  --color-text-muted: #4B5563;
  --color-border: #D1D5DB;
  --color-disabled: #F3F4F6;

  /* Feedback */
  --color-success: #16A34A;
  --color-warning: #F59E0B;
  --color-danger: #DC2626;
  --color-info: #0EA5E9;
}
```

## Regras de uso

- **Fundo padrão:** branco (`#FFFFFF`); seções alternadas em azul gelo (`#F1F6FF`).
- **Botão primário:** fundo `#1E56D9`, texto branco; hover `#0B2A6F`.
- **Botão secundário:** fundo branco, borda e texto `#1E56D9`; hover fundo `#DBEAFE`.
- **Links:** `#1E56D9`, com sublinhado no hover.
- **Títulos:** `#0B2A6F`. **Corpo de texto:** `#111827`.
- **Foco (acessibilidade):** contorno de 2px em `#3B82F6`.
- Evite usar cores fora desta paleta; novas cores devem ser adicionadas a este documento.

## Contraste (acessibilidade)

| Combinação                          | Contraste | Resultado |
| ----------------------------------- | --------- | --------- |
| Branco sobre Azul Primário          | ~6,3:1    | AA / AA grande ✔ |
| Branco sobre Azul Escuro            | ~14:1     | AAA ✔     |
| Azul Escuro sobre Azul Claro        | ~11:1     | AAA ✔     |
| Cinza 900 sobre Branco              | ~17:1     | AAA ✔     |

> Valores aproximados; confirme em uma ferramenta de contraste ao ajustar tons.

## Tipografia sugerida

- **Fonte:** Inter (alternativa: Poppins ou system-ui).
- **Títulos:** peso 700, cor Azul Escuro.
- **Corpo:** peso 400, tamanho 16px, cor Cinza 900
