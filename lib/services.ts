export type Service = {
  slug: string; title: string; short: string; description: string;
  audience: string; scope: string[]; documents: string[]; question: string; answer: string;
};

export const services: Service[] = [
  {
    slug: "abertura-de-empresa", title: "Abertura de empresa",
    short: "Comece com uma estrutura alinhada ao seu negócio.",
    description: "A BRÁZ orienta a abertura de empresa em Brasília–DF e o atendimento online para todo o Brasil, com análise da atividade, documentação e organização dos primeiros passos.",
    audience: "Para quem está começando um negócio, precisa formalizar uma atividade ou quer entender qual estrutura empresarial faz sentido antes de registrar o CNPJ.",
    scope: ["Entendimento da atividade, dos sócios e do modelo de operação.", "Orientação sobre documentação e etapas de registro.", "Análise do enquadramento e das obrigações aplicáveis à atividade.", "Organização da rotina contábil e fiscal para o início da operação."],
    documents: ["Documento de identificação dos responsáveis.", "Descrição das atividades que a empresa pretende exercer.", "Informações sobre sócios, participação e endereço pretendido."],
    question: "Quanto tempo leva para abrir uma empresa?",
    answer: "O prazo depende da atividade, da documentação e dos órgãos envolvidos. Depois de analisar o seu caso, a BRÁZ orienta as etapas e informa uma previsão compatível com a situação."
  },
  {
    slug: "regularizacao-de-cnpj", title: "Regularização de CNPJ",
    short: "Entenda as pendências e organize os próximos passos.",
    description: "A BRÁZ analisa pendências cadastrais e fiscais de empresas para orientar a regularização de CNPJ, com atendimento presencial em Brasília e online em todo o Brasil.",
    audience: "Para empresários que encontraram pendências, declarações em atraso ou dificuldades para manter a empresa regular e querem um diagnóstico antes de tomar decisões.",
    scope: ["Levantamento das informações cadastrais e das pendências apresentadas.", "Identificação de obrigações que precisam de atenção.", "Organização de documentos e prioridades para regularização.", "Orientação sobre acompanhamento e prevenção de novas pendências."],
    documents: ["Número do CNPJ e dados dos responsáveis.", "Notificações e documentos relacionados às pendências.", "Informações sobre o histórico contábil e fiscal da empresa."],
    question: "Uma empresa com pendências pode ser regularizada?",
    answer: "O caminho depende da situação cadastral e das pendências identificadas. A análise inicial permite definir quais providências são aplicáveis; não existe uma solução única para todos os CNPJs."
  },
  {
    slug: "contabilidade-para-mei", title: "Contabilidade para MEI",
    short: "Mais clareza para cuidar da sua atividade e evoluir.",
    description: "A BRÁZ oferece orientação contábil para MEI, com apoio à organização de documentos, acompanhamento de obrigações e análise dos próximos passos do negócio.",
    audience: "Para microempreendedores individuais que precisam organizar a atividade, entender pendências ou avaliar uma mudança de enquadramento conforme o negócio evolui.",
    scope: ["Orientação sobre a organização das receitas e dos documentos.", "Apoio na identificação de obrigações e pendências.", "Esclarecimento de dúvidas sobre a rotina da atividade.", "Análise do cenário do negócio quando houver necessidade de mudança de enquadramento."],
    documents: ["Número do CNPJ e informações do titular.", "Registros de receitas, notas e documentos da atividade.", "Comunicações ou pendências que motivaram o atendimento."],
    question: "A BRÁZ atende quem já tem um MEI aberto?",
    answer: "Sim. O atendimento pode começar com um MEI já existente. O primeiro passo é entender a atividade, a organização atual e as dúvidas ou pendências que precisam de atenção."
  },
  {
    slug: "consultoria-estrategica", title: "Consultoria estratégica",
    short: "Transforme informações em decisões mais consistentes.",
    description: "A consultoria estratégica da BRÁZ conecta organização contábil, leitura fiscal e realidade empresarial para apoiar decisões de gestão e crescimento.",
    audience: "Para empresários e profissionais que precisam interpretar melhor o cenário do negócio, organizar prioridades e tomar decisões com apoio profissional.",
    scope: ["Entendimento dos objetivos e dos principais desafios da empresa.", "Leitura das informações disponíveis sobre a operação.", "Identificação de prioridades contábeis, fiscais e de organização.", "Orientação sobre próximos passos e acompanhamento conforme o escopo combinado."],
    documents: ["Descrição da empresa, da atividade e dos objetivos.", "Informações contábeis e gerenciais já disponíveis.", "Lista das decisões ou dificuldades que motivaram a consultoria."],
    question: "Como começa uma consultoria estratégica?",
    answer: "Começa com uma conversa sobre a situação da empresa e seus objetivos. A partir desse diagnóstico, são definidos os dados necessários, as prioridades e o escopo da orientação."
  },
  {
    slug: "gestao-fiscal", title: "Gestão fiscal",
    short: "Organize prazos, documentos e obrigações da empresa.",
    description: "A BRÁZ apoia a gestão fiscal de empresas com organização de documentos, atenção às obrigações e orientação para uma rotina mais previsível.",
    audience: "Para empresas que desejam organizar a rotina fiscal, acompanhar obrigações e reduzir a insegurança causada por documentos dispersos ou falta de acompanhamento.",
    scope: ["Entendimento da atividade e da rotina fiscal existente.", "Organização dos documentos necessários ao acompanhamento.", "Identificação de obrigações e prioridades da empresa.", "Orientação sobre prazos, comunicação e envio de informações."],
    documents: ["CNPJ e informações cadastrais da empresa.", "Documentos fiscais e registros da operação.", "Histórico e informações da rotina contábil atual."],
    question: "A gestão fiscal inclui acompanhamento contínuo?",
    answer: "O acompanhamento é definido conforme a necessidade da empresa e o escopo contratado. Na conversa inicial, a BRÁZ esclarece quais rotinas e entregas farão parte do atendimento."
  },
  {
    slug: "imposto-de-renda", title: "Imposto de Renda",
    short: "Organize sua declaração com orientação profissional.",
    description: "A BRÁZ atende pessoas físicas, empresários e profissionais autônomos que precisam de apoio para organizar informações e preparar a declaração de Imposto de Renda.",
    audience: "Para quem precisa de orientação sobre documentos, rendimentos, bens ou situações que exigem atenção antes da entrega da declaração.",
    scope: ["Análise das informações e dos documentos apresentados.", "Organização de rendimentos, bens e demais informações pertinentes.", "Esclarecimento de dúvidas sobre a preparação da declaração.", "Orientação sobre documentos complementares conforme o caso."],
    documents: ["Informes de rendimentos e informações das fontes pagadoras.", "Documentos de bens, direitos e movimentações relevantes.", "Declaração anterior, quando disponível, e documentos relacionados ao seu caso."],
    question: "Preciso enviar os documentos pessoalmente?",
    answer: "O atendimento pode ser presencial em Brasília ou online. Os canais de envio de documentos são combinados durante o atendimento; evite enviar dados sensíveis antes de confirmar o canal com o profissional."
  },
  {
    slug: "planejamento-tributario", title: "Planejamento tributário",
    short: "Avalie o enquadramento com visão de negócio.",
    description: "A BRÁZ analisa a realidade da empresa para orientar o planejamento tributário, considerando atividade, operação e informações contábeis disponíveis.",
    audience: "Para empresários que querem avaliar o enquadramento do negócio e entender alternativas legais compatíveis com a atividade e a operação.",
    scope: ["Análise da atividade e das informações da empresa.", "Leitura do enquadramento e da organização contábil atual.", "Avaliação de cenários conforme a realidade do negócio.", "Orientação para decisões fundamentadas, sem promessas de economia antes da análise."],
    documents: ["Informações sobre atividades e estrutura da empresa.", "Dados contábeis e fiscais disponíveis.", "Objetivos e mudanças previstas para a operação."],
    question: "Planejamento tributário garante pagar menos impostos?",
    answer: "Não é possível garantir economia antes de analisar a empresa. O planejamento busca decisões adequadas à realidade do negócio e à legislação, com avaliação das alternativas aplicáveis."
  },
  {
    slug: "folha-de-pagamento", title: "Folha de pagamento",
    short: "Uma rotina trabalhista organizada e acompanhada.",
    description: "A BRÁZ apoia empresas na organização da folha de pagamento e das informações trabalhistas, com atendimento definido conforme o porte e as necessidades da operação.",
    audience: "Para empresas que precisam organizar dados de colaboradores e acompanhar a rotina relacionada à folha de pagamento.",
    scope: ["Entendimento da estrutura da equipe e da rotina existente.", "Organização dos dados e documentos necessários.", "Apoio às rotinas de folha previstas no escopo do atendimento.", "Orientação sobre comunicação de alterações e envio de informações."],
    documents: ["CNPJ e informações da empresa.", "Dados e documentos necessários dos colaboradores.", "Informações da rotina trabalhista e da folha atual."],
    question: "A BRÁZ atende empresas com equipes pequenas?",
    answer: "A necessidade de atendimento é avaliada conforme a estrutura da empresa. Na primeira conversa, informe a atividade, o tamanho da equipe e quais rotinas precisam de apoio."
  }
];

export const faqs = [
  { question: "Onde a BRÁZ Consultoria Estratégica atende?", answer: "A BRÁZ atende presencialmente em Brasília–DF e online para todo o Brasil. Entre em contato para combinar o formato do atendimento e, para atendimento presencial, confirmar local e disponibilidade." },
  { question: "A BRÁZ atende MEIs e profissionais autônomos?", answer: "Sim. A BRÁZ atende empresas, MEIs e profissionais autônomos com orientação contábil, organização fiscal e consultoria estratégica. A solução é definida conforme a atividade e a necessidade de cada cliente." },
  { question: "Como funciona a abertura ou a regularização de uma empresa?", answer: "O atendimento começa com a análise da atividade, dos documentos e da situação da empresa. Depois, a BRÁZ orienta as etapas aplicáveis à abertura ou regularização e define as prioridades junto ao cliente." },
  { question: "É possível contratar o atendimento contábil online?", answer: "Sim. O atendimento online está disponível para todo o Brasil. A conversa inicial acontece por WhatsApp ou Telegram, e o formato do acompanhamento e o envio de documentos são combinados com Maurício Bráz Júnior." },
  { question: "A BRÁZ faz declaração de Imposto de Renda?", answer: "Sim. Há atendimento para pessoas físicas, empresários e profissionais autônomos. A preparação depende da análise dos documentos e das informações de cada caso." },
  { question: "Quanto custa o atendimento?", answer: "O valor depende do serviço, da complexidade e do acompanhamento necessário. Após entender a sua demanda, a BRÁZ apresenta o escopo e as condições do atendimento." }
];
