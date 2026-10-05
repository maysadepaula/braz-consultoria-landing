# BRÁZ Consultoria Estratégica

Landing page premium em Next.js 14, Tailwind CSS, Framer Motion e Lucide React.

## Rodar localmente

```bash
npm install
npm run dev
```

Depois acesse `http://localhost:3000`.

Para produção, defina `NEXT_PUBLIC_SITE_URL` com o domínio final do site.

## Nova versão

Home redesenhada, oito páginas de serviço, página de privacidade, sitemap e robots.
Atendimento presencial em Brasília–DF e online em todo o Brasil.

O endereço padrão é https://braz-consultoria-landing.vercel.app.
Ao conectar o domínio próprio, atualize NEXT_PUBLIC_SITE_URL no ambiente de produção
e faça um novo deploy para atualizar canonical, sitemap e dados estruturados.

## SEO e presença em buscas com IA

- Conteúdo principal renderizado no servidor, disponível sem JavaScript.
- Títulos, descrições e canonical específicos por página.
- JSON-LD para a empresa, serviços, navegação e perguntas visíveis.
- Links internos entre a home e as páginas de serviço.
- Conteúdo de localização consistente com o atendimento real.
- Nenhum endereço, avaliação, resultado ou prazo foi inventado.

Após a publicação, cadastrar o domínio no Google Search Console e enviar /sitemap.xml.
Manter os dados do Perfil da Empresa no Google consistentes com o site.
Confirmar endereço, horários e perfis oficiais antes de acrescentá-los.
Não há garantia de posicionamento ou de citação por assistentes de IA.
O Google não exige um arquivo especial ou schema exclusivo para resultados de IA:
https://developers.google.com/search/docs/appearance/ai-features

## Validação visual

As capturas e o resultado da revisão ficam em qa/.
O script scripts/visual-check.cjs usa Playwright e Chrome instalados na máquina.
QA_BASE_URL permite testar outro endereço.
