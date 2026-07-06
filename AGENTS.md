# Guia Delicarte Para Alterações Futuras

Ler este ficheiro antes de alterar o website Delicarte. A homepage e a direção visual já foram aprovadas, por isso qualquer trabalho futuro deve preservar a identidade, o tom e a estrutura existentes, exceto quando o cliente pedir explicitamente uma reformulação.

## Papel Do Site

A Delicarte é um site de marca calmo e especializado para Raquel Oliveira, com foco em drenagem linfática, pós-operatório, lipedema, gravidez/pós-parto e cuidado corporal em Guimarães.

O site deve sentir-se:

- Calmo, preciso e humano.
- Especializado, sem parecer frio ou demasiado clínico.
- Elegante e discreto, nunca ruidoso ou promocional.
- Próximo e tranquilizador, sem prometer resultados médicos.

## Identidade Visual

Manter a linguagem visual existente.

- Usar a paleta atual de tons stone, papel e verde acinzentado definida em `src/styles.css`.
- Reutilizar classes e padrões existentes como `button`, `button-secondary`, `button-small`, `section-kicker`, `section-title`, `copy` e `bio-copy`.
- Manter a tipografia atual: Georgia para títulos serifados e a stack sans do sistema para texto corrido.
- Não introduzir novas fontes, cores vivas, gradientes, efeitos decorativos, sombras pesadas, sistemas de cards arredondados ou elementos visuais chamativos.
- Manter cards e painéis leves: bordas de 1px, espaço generoso e fundos discretos.
- Não criar CTAs que concorram com o botão de WhatsApp. O WhatsApp continua a ser a ação principal.
- Links secundários devem ser discretos: links de texto, botões outline subtis ou o estilo existente `button-secondary`.
- Usar imagens reais da Delicarte em `src/assets` sempre que possível. Evitar imagens genéricas com aspeto de stock.

## Regras De Layout

Respeitar o ritmo atual da página.

- Usar a escala de espaçamento existente: `px-5`, `sm:px-8`, `lg:px-12`, `py-16`, `lg:py-24`, salvo motivo local claro.
- Usar `max-w-7xl` para secções amplas e larguras menores para texto longo.
- Preservar a estrutura da homepage, exceto quando a tarefa pedir uma alteração maior.
- Manter mobile limpo e empilhado. Verificar larguras entre 320px e 390px para evitar overflow horizontal.
- Não acrescentar conteúdo excessivo dentro dos cards de tratamentos. Adicionar apenas o necessário.
- Não colocar cards dentro de outros cards.

## Copy E Tom

Escrever em português de Portugal.

Tom preferido:

- Direto, mas suave.
- Usar primeira pessoa do plural quando a experiência é descrita diretamente ao cliente: "percebemos em conjunto", "conversamos", "ajustamos".
- A terceira pessoa é aceitável em biografia ou imprensa, mas deve ser evitada em orientação direta de serviços quando a pessoa está a marcar com a Raquel.
- Frases claras, curtas e com ritmo calmo.

Evitar:

- Promessas exageradas: "cura", "garante", "elimina", "resultado imediato".
- Linguagem de diagnóstico médico.
- Tom de venda agressivo.
- Repetir o título na primeira frase abaixo dele.
- Pontos de exclamação ou pressão de urgência.

Em conteúdo relacionado com saúde, manter as afirmações conservadoras:

- Preferir "pode apoiar", "pode fazer sentido", "quando adequado", "em algumas situações".
- Referir avaliação médica quando existem cirurgias, sintomas agudos ou condições clínicas em acompanhamento.
- Nunca substituir aconselhamento médico.

## Páginas SEO

Páginas dedicadas a tratamentos devem ser informativas, úteis e calmas, sem excesso de palavras-chave.

Incluir, quando fizer sentido:

- O que é o tratamento.
- Para quem pode ser indicado.
- Como decorre a sessão.
- Cuidados e precauções.
- Perguntas frequentes.
- Preços ou ligação para preços quando já existirem.
- Informação de marcação por WhatsApp.

Ao adicionar uma nova página com URL limpa:

- Criar uma entrada HTML estática semelhante a `tratamentos/drenagem-linfatica-guimaraes/index.html`.
- Adicionar a rota a `vite.config.ts` e manter `vite.config.js` sincronizado.
- Adicionar a URL a `public/sitemap.xml`.
- Definir title, meta description, canonical URL e structured data relevantes.
- Manter o `index.html` da raiz como entrada de desenvolvimento do Vite.

## Notas Técnicas

Este é um site Vite, React e Tailwind.

- O código principal vive em `src/App.tsx`.
- Os estilos globais e tokens de marca vivem em `src/styles.css`.
- As notas de deploy vivem em `DEPLOY_NOTES.md`.
- Não editar manualmente assets compilados em `dist` nem cache do Vite em `node_modules/.vite`.
- Correr `npm run build` antes de terminar alterações de código.
- Se a verificação de build alterar ficheiros gerados que não fazem parte da mudança pretendida, manter o diff final focado.

## Alterar Preços

Os preços dos serviços vivem **num único sítio**: a lista de categorias no topo de `src/App.tsx`. Cada serviço é um objeto `{ name, price, time }` dentro de `items`. Não estão duplicados nas páginas de tratamentos (`tratamentos/.../index.html`), por isso basta editar `src/App.tsx`.

Passos para uma alteração de preços:

1. Editar o `price` do serviço certo em `src/App.tsx` (ex.: `price: "40€"`). Manter o símbolo `€` colado ao número, como nos restantes.
2. Correr `npm run build` para regenerar o `dist/` (a versão estática de produção).
3. Confirmar o novo valor em `dist/index.html`.
4. Publicar com `npm run deploy` (envia `dist` para a branch `gh-pages`). **Só depois deste passo o site ao vivo fica atualizado.**

O cliente costuma usar nomes informais. Mapa de nomes habituais para o nome real no site:

- "Tapping" → `Tapping pós-parto`
- "Drenagem Lipedema" → `Drenagem Linfática Lipedema`
- "Drenagem por zona (abdómen ou pernas)" → `Drenagem zona membros inferiores ou abdómen`

Quando o pedido for "X -40€" ou "X – 40€", o traço significa "passa a custar 40€", não um desconto. Em caso de dúvida sobre qual o serviço, confirmar com o cliente antes de alterar.

## Checklist De QA

Antes de terminar qualquer alteração de frontend:

- `npm run build` passa.
- Não há erros JavaScript no browser local.
- O layout desktop mantém a direção visual aprovada.
- O mobile não tem overflow horizontal.
- Botões e links apontam para os destinos corretos.
- O CTA de WhatsApp continua fácil de encontrar.
- A copy mantém o tom calmo da Delicarte.
