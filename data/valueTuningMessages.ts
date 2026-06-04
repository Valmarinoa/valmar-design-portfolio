import type { Locale } from "@/lib/i18n";

export type ValueTuningContent = {
  hero: {
    tags: string[];
    titleLine2: string;
    titleLine3: string;
    descDesktop: string;
    descMobile: string;
    collaboration: string;
    scroll: string;
  };
  problem: {
    label: string;
    heading: string;
    para1: string;
    questionIntro: string;
    questionBold: string;
    para3: string;
  };
  hypothesis: {
    label: string;
    heading: string;
    p1: string;
    p2: string;
    p3: string;
    p4: string;
    videoLabel: string;
    videoCaption: string;
  };
  sensoryProtocol: {
    label: string;
    heading: string;
    paragraphs: string[];
  };
  blindfoldProtocol: {
    label: string;
    heading: string;
    philosophyQuote: string;
    philosophyAuthor: string;
    p1: string;
    p2: string;
    col1Heading: string;
    col1Text: string;
    col2Heading: string;
    col2Text: string;
    col3Heading: string;
    col3Text: string;
    largeQuote: string;
  };
  expectationGap: {
    label: string;
    heading: string;
    p1: string;
    p2: string;
    brandToggles: Array<{ label: string }>;
    brandSummaries: Array<{ heading: string; text: string }>;
  };
  researchFindings: {
    label: string;
    heading: string;
    description: string;
    findings: Array<{ theme: string; insight: string }>;
  };
  framework: {
    label: string;
    heading: string;
    description: string;
    footnote: string;
    parameters: Array<{ param: string }>;
  };
  deliverable: {
    label: string;
    heading: string;
    intro: string;
    items: string[];
    closing: string;
  };
  fit: {
    label: string;
    heading: string;
    items: string[];
  };
  impact: {
    label: string;
    heading: string;
    description: string;
    cards: Array<{ title: string; desc: string }>;
  };
  reflection: {
    label: string;
    heading: string;
    body: string;
  };
  service: {
    label: string;
    heading: string;
    paragraphs: string[];
    cta: string;
    email: string;
  };
  footer: string;
};

const content: Record<Locale, ValueTuningContent> = {
  en: {
    hero: {
      tags: ["Sensory Audit", "Brand Transformation", "Brand Strategy"],
      titleLine2: "The Hidden Language",
      titleLine3: "of Brand Perception",
      descDesktop:
        "Originally developed for Signify/Philips to close the gap between technical trust and emotional meaning, Value Tuning uses the senses as its instrument to adapt to wherever that distance exists: between what a brand promises and what a product delivers, between an ethical story and a sensory truth, between democratic design and the feeling of quality in your hands.",
      descMobile:
        "Originally developed for Signify/Philips to close the gap between technical trust and emotional meaning, Value Tuning uses the senses as its instrument to adapt to wherever that distance exists: between what a brand promises and what a product delivers, between an ethical story and a sensory truth, between democratic design and the feeling of quality in your hands.",
      collaboration: "In collaboration with",
      scroll: "Scroll",
    },
    problem: {
      label: "The Brief",
      heading: "From Technical Trust, to Emotional Experience",
      para1:
        "For decades, Philips Lighting built its reputation on engineering reliability and technical excellence. But with the emergence of connected devices and the Smart Home ecosystem, the company began repositioning itself under a new name: Signify.\nA brand built on technical trust and engineering reliability needed to transition into a space defined by domestic intimacy, atmosphere, and emotional experience.",
      questionIntro: "This shift raised an important question:",
      questionBold:
        " how can physical products express this transition through their sensory qualities?",
      para3:
        "I was invited to explore the gap between inherited brand perception and the embodied experience of these new domestic technologies, design and materiality.\nTo do so, I developed a qualitative research methodology designed to isolate how people interpret products through touch, sound, weight, and materiality, beyond brand recognition alone.",
    },
    hypothesis: {
      label: "Research Premise",
      heading: "The Value Spectrum",
      p1: "I proposed that there is a measurable distance between what people expect from a brand and what they actually feel when encountering its products through the senses.",
      p2: "This gap becomes visible in the moment where brand narrative meets embodied experience: in the weight of an object, the resistance of a hinge, the texture of a surface, the sound of opening, the order of packaging.",
      p3: "When expectation and sensory experience align, trust is reinforced. When they diverge, disappointment emerges. Brand value, then, does not live in image alone, but in the relationship between promise and perception.",
      p4: "Value Tuning operates precisely in this space, making the invisible measurable, and the measurable actionable.",
      videoLabel: "Methodology Trailer",
      videoCaption:
        "A short introduction to the research method: mapping brand expectations, removing visual bias, and evaluating products through touch, sound, weight, and material interaction.",
    },
    sensoryProtocol: {
      label: "The Method",
      heading: "Designed to Make the Gap Visible",
      paragraphs: [
        "Value Tuning is a structured sensory research protocol conducted with real users, real products, and deliberately constrained conditions. It separates what people expect from a brand from what they actually feel when they encounter its products through touch, sound, weight, and materiality.",
        "The method moves through three designed moments, each one stripping away a layer of assumption until only honest perception remains.",
        "The output is not a qualitative impression. It is a mapped distance: between brand promise and lived material experience, rendered as a diagnostic you can act on.",
      ],
    },
    blindfoldProtocol: {
      label: "The Method",
      heading: "The Blindfold Protocol",
      philosophyQuote:
        "The senses are not merely passive receptors of information but active participants in the construction of reality.",
      philosophyAuthor: "— David Howes, The Empire of the Senses",
      p1: "Visual branding wields immense power. A logo, a color palette, a carefully staged photograph. these elements prime our expectations before we ever touch a product. But this priming is also a distortion. When we see a luxury brand's packaging, we are not experiencing the object; we are experiencing the narrative we have been conditioned to associate with it.",
      p2: "The blindfold protocol removes this variable. By excluding sight, we access what David Howes calls the \"sensory order\", the hierarchy of perception that operates beneath conscious brand recognition. Touch becomes primary. Sound becomes information. Temperature, weight, and texture speak without the interference of visual bias.",
      col1Heading: "Visual Bias",
      col1Text:
        "Logo recognition triggers pre-conditioned quality associations. We judge what we expect, not what we feel.",
      col2Heading: "Narrative Conditioning",
      col2Text:
        "Brand storytelling creates a \"halo effect\" that masks sensory inconsistencies. The eye forgives what the hand cannot.",
      col3Heading: "Proximal Truth",
      col3Text:
        "Objects close to the body—held, touched, manipulated—are judged by different criteria than objects viewed from distance.",
      largeQuote:
        "What feels like home? What invites the hand to linger? These questions cannot be answered through visual analysis alone. The blindfold reveals the gap between what a brand promises and what a product actually delivers to the senses.",
    },
    expectationGap: {
      label: "Value Alignment",
      heading: "Expectations vs. Perception",
      p1: "This map compares how participants positioned each brand before interacting with the object and how they positioned it again after the blindfolded sensorial test.",
      p2: "The distance between both judgments reveals the gap between brand promise and lived material experience. When perception falls below expectation, disappointment emerges. When perception exceeds expectation, the product creates surplus value.",
      brandToggles: [
        { label: "All Items" },
        { label: "Brand A" },
        { label: "Brand B" },
        { label: "Brand C" },
      ],
      brandSummaries: [
        {
          heading: "Brand A",
          text: "Brand A performs best in sensorial uplift. Blindfolded interaction raises perceived value, showing strong coherence between material experience and brand positioning.",
        },
        {
          heading: "Brand B",
          text: "Expectations begin around the ordinary-to-average range, but tactile perception tends to fall slightly lower. The product feels more generic than the brand suggests.",
        },
        {
          heading: "Brand C",
          text: "Brand C starts with the highest expectations. Perception remains high, but the brand also carries the greatest risk of slight disappointment because the promise is already so elevated.",
        },
      ],
    },
    researchFindings: {
      label: "Research Findings",
      heading: "What Users Actually Feel",
      description:
        "Blind sensory evaluation revealed the unspoken vocabulary of quality. Users immediately sense when design intention aligns with execution, and when it doesn't.",
      findings: [
        {
          theme: "Tamper Evidence",
          insight:
            "Tamper-evident packaging creates emotional security and perceived newness. Users read packaging mechanics as a signal of care, integrity, and product freshness.",
        },
        {
          theme: "The Entanglement Problem",
          insight:
            "Cable management and internal packaging structure directly impact first impression. Complexity signals disrespect for user time.",
        },
        {
          theme: "The Quality Hierarchy",
          insight:
            "Users intuitively categorize products into tiers. Consistency matters more than absolute quality—mismatched materials create cognitive dissonance.",
        },
        {
          theme: "Contextual Mismatch",
          insight:
            "Material choices determine spatial belonging. Hard plastic reads 'industrial'; soft-touch reads 'domestic'. Context determines appropriateness.",
        },
        {
          theme: "Emotional Bonding",
          insight:
            "Seamless transitions between soft-touch fabric and hardware create objects that invite touch. Users describe these as something I can grab and play with: domestic, personal, home-worthy.",
        },
        {
          theme: "Encounter with Content",
          insight:
            "Material choices determine spatial belonging. Hard plastic reads 'industrial'; soft-touch reads 'domestic'. Context determines appropriateness.",
        },
      ],
    },
    framework: {
      label: "The Framework",
      heading: "Six Parameters of Perceived Value",
      description:
        "From the research, I distilled six measurable parameters that determine whether a product feels premium or falls short, regardless of its price point. These parameters form the diagnostic spine of every Value Tuning engagement.",
      footnote:
        "The full parameter framework, scoring rubric, and design criteria are delivered as part of the audit report.",
      parameters: [
        { param: "Physicality" },
        { param: "Transparency" },
        { param: "Order" },
        { param: "Stratification" },
        { param: "Alignment" },
        { param: "Context" },
      ],
    },
    deliverable: {
      label: "The Deliverable",
      heading: "What a Value Tuning Engagement Produces",
      intro:
        "Every engagement concludes with a structured audit report tailored to your product and brand context. It includes:",
      items: [
        "A mapped gap analysis between brand expectation and sensory perception across your product range",
        "Scored evaluation across the six Value Tuning parameters",
        "Specific material, structural, and experiential friction points identified in user sessions",
        "Design criteria and prioritized recommendations your team can act on immediately",
        "Strategic framing to support internal conversations about quality investment",
      ],
      closing:
        "The report is designed to give designers and brand teams user-generated evidence, not just observations.",
    },
    fit: {
      label: "Fit",
      heading: "This Is For You If...",
      items: [
        "You're repositioning a brand and need to know if your products are keeping pace with the new narrative",
        "You're preparing a product line for launch in a premium or luxury segment",
        "You sense a gap between how your brand is perceived and how your products actually feel, but can't locate it",
        "Your design team needs user evidence to advocate for quality in budget conversations",
      ],
    },
    impact: {
      label: "The Impact",
      heading: "Beyond the Report",
      description: "A report is the beginning, not the end.",
      cards: [
        {
          title: "Strategic",
          desc: "Positions the gap between brand promise and product reality as a measurable, actionable distance, giving leadership a new lens on where quality investment creates the most return.",
        },
        {
          title: "Tactical",
          desc: "Surfaces the specific moments where perception breaks: the first touch, the opening sequence, the material encounter. Each finding maps directly to a design decision.",
        },
        {
          title: "Political",
          desc: "Turns subjective experience into evidence. Designers leave with something they can defend in a room where budgets are decided.",
        },
      ],
    },
    reflection: {
      label: "Reflection",
      heading: "In an Increasingly Digital World",
      body: "We encounter brands screen-first: through images, campaigns, and carefully constructed narratives, long before we ever touch the product itself. By the time it reaches our hands, expectation is already formed.\nThe first physical interaction is unforgiving. A lid's weight. The temperature of a material. The resistance of a hinge. These are verdicts which instantly confirm or quietly contradict everything a brand has claimed.\nWorking with Signify made this visceral: even the most sophisticated technology loses its value if the first touch feels wrong. In premium contexts that gap between promise and sensation isn't perceived as nuance. It's felt as disappointment, and disappointment is expensive.\nValue Tuning operates precisely at this point of tension, translating brand narrative into tangible design decisions, identifying where perception breaks, where value is lost, and where it can be amplified. Across luxury, beauty, automotive, and consumer technology, the challenge is always the same: not only to design products that function, but to ensure they feel exactly as imagined (or better).\nBecause value is not communicated, but verified through the 'body' of the object.\nWhen your product is finally held, will it justify everything that came before?",
    },
    service: {
      label: "Service",
      heading: "Run a Value Tuning audit for your brand",
      paragraphs: [
        "Engagements run over 2–4 days and deliver a full sensory audit report with design criteria and strategic recommendations. Suited to product companies, packaging teams, and brand strategists preparing for repositioning or launch.",
        "Each engagement is scoped to your product and context, reach out to discuss fit.",
      ],
      cta: "Let's Work together",
      email: "studio@valmar.studio",
    },
    footer:
      "Value Tuning is an original research methodology developed by Valentina Marino at Signify (Philips), 2018–2019.\nConcept, protocol design, and framework © Valentina Marino.\nAll rights reserved.",
  },

  "pt-br": {
    hero: {
      tags: ["Auditoria Sensorial", "Transformação de Marca", "Estratégia de Marca"],
      titleLine2: "A Linguagem Oculta",
      titleLine3: "da Percepção de Marca",
      descDesktop:
        "Desenvolvido originalmente para a Signify/Philips para fechar a lacuna entre confiança técnica e significado emocional, o Value Tuning usa os sentidos como instrumento para se adaptar aonde quer que essa distância exista: entre o que uma marca promete e o que um produto entrega, entre uma narrativa ética e uma verdade sensorial, entre design democrático e a sensação de qualidade nas suas mãos.",
      descMobile:
        "Desenvolvido originalmente para a Signify/Philips para fechar a lacuna entre confiança técnica e significado emocional, o Value Tuning usa os sentidos como instrumento para se adaptar aonde quer que essa distância exista: entre o que uma marca promete e o que um produto entrega, entre uma narrativa ética e uma verdade sensorial, entre design democrático e a sensação de qualidade nas suas mãos.",
      collaboration: "Em colaboração com",
      scroll: "Rolar",
    },
    problem: {
      label: "O Briefing",
      heading: "Da Confiança Técnica à Experiência Emocional",
      para1:
        "Durante décadas, a Philips Lighting construiu sua reputação sobre confiabilidade de engenharia e excelência técnica. Mas com o surgimento dos dispositivos conectados e o ecossistema de Casa Inteligente, a empresa começou a se reposicionar sob um novo nome: Signify.\nUma marca construída sobre confiança técnica e confiabilidade de engenharia precisava fazer a transição para um espaço definido por intimidade doméstica, atmosfera e experiência emocional.",
      questionIntro: "Essa transição levantou uma questão importante:",
      questionBold:
        " como os produtos físicos podem expressar essa transição através de suas qualidades sensoriais?",
      para3:
        "Fui convidada a explorar a lacuna entre a percepção de marca herdada e a experiência incorporada dessas novas tecnologias domésticas, design e materialidade.\nPara isso, desenvolvi uma metodologia de pesquisa qualitativa projetada para isolar como as pessoas interpretam produtos através do toque, som, peso e materialidade, além do mero reconhecimento de marca.",
    },
    hypothesis: {
      label: "Premissa de Pesquisa",
      heading: "O Espectro de Valor",
      p1: "Propus que existe uma distância mensurável entre o que as pessoas esperam de uma marca e o que realmente sentem ao encontrar seus produtos através dos sentidos.",
      p2: "Essa lacuna torna-se visível no momento em que a narrativa de marca encontra a experiência incorporada: no peso de um objeto, na resistência de uma dobradiça, na textura de uma superfície, no som de uma abertura, na ordem de uma embalagem.",
      p3: "Quando expectativa e experiência sensorial se alinham, a confiança é reforçada. Quando divergem, surge a decepção. O valor de marca, portanto, não vive apenas na imagem, mas na relação entre promessa e percepção.",
      p4: "O Value Tuning opera precisamente nesse espaço, tornando o invisível mensurável e o mensurável acionável.",
      videoLabel: "Trailer da Metodologia",
      videoCaption:
        "Uma breve introdução ao método de pesquisa: mapeamento de expectativas de marca, eliminação do viés visual e avaliação de produtos através do toque, som, peso e interação material.",
    },
    sensoryProtocol: {
      label: "O Método",
      heading: "Projetado para Tornar a Lacuna Visível",
      paragraphs: [
        "O Value Tuning é um protocolo estruturado de pesquisa sensorial conduzido com usuários reais, produtos reais e condições deliberadamente controladas. Ele separa o que as pessoas esperam de uma marca do que realmente sentem ao encontrar seus produtos através do toque, som, peso e materialidade.",
        "O método percorre três momentos projetados, cada um removendo uma camada de suposição até restar apenas a percepção honesta.",
        "O resultado não é uma impressão qualitativa, mas sim uma distância mapeada: entre a promessa da marca e a experiência material vivida, transformada em um diagnóstico acionável.",
      ],
    },
    blindfoldProtocol: {
      label: "O Método",
      heading: "O Protocolo da Venda nos Olhos",
      philosophyQuote:
        "Os sentidos não são meros receptores passivos de informação, mas participantes ativos na construção da realidade.",
      philosophyAuthor: "— David Howes, The Empire of the Senses",
      p1: "A identidade visual exerce um poder imenso. Um logo, uma paleta de cores, uma fotografia cuidadosamente encenada, esses elementos preparam nossas expectativas antes mesmo de tocarmos um produto. Mas esse preparo é também uma distorção. Quando vemos a embalagem de uma marca de luxo, não estamos vivenciando o objeto; estamos vivenciando a narrativa que fomos condicionados a associar a ela.",
      p2: "O protocolo da venda nos olhos elimina essa variável. Ao excluir a visão, acessamos o que David Howes chama de \"ordem sensorial\", a hierarquia da percepção que opera abaixo do reconhecimento consciente de marca. O toque torna-se primário. O som torna-se informação. Temperatura, peso e textura falam sem a interferência do viés visual.",
      col1Heading: "Viés Visual",
      col1Text:
        "O reconhecimento do logo ativa associações de qualidade pré-condicionadas. Julgamos o que esperamos, não o que sentimos.",
      col2Heading: "Condicionamento Narrativo",
      col2Text:
        "A narrativa de marca cria um \"efeito halo\" que mascara inconsistências sensoriais. O olho perdoa o que a mão não consegue.",
      col3Heading: "Verdade Proximal",
      col3Text:
        "Objetos próximos ao corpo, segurados, tocados, manipulados, são julgados por critérios diferentes dos objetos vistos à distância.",
      largeQuote:
        "O que parece lar? O que convida a mão a demorar? Essas perguntas não podem ser respondidas apenas pela análise visual. A venda nos olhos revela a lacuna entre o que uma marca promete e o que um produto realmente entrega aos sentidos.",
    },
    expectationGap: {
      label: "Alinhamento de Valor",
      heading: "Expectativas vs. Percepção",
      p1: "Este mapa compara como os participantes posicionaram cada marca antes de interagir com o objeto e como a posicionaram novamente após o teste sensorial com venda nos olhos.",
      p2: "A distância entre ambos os julgamentos revela a lacuna entre a promessa de marca e a experiência material vivida. Quando a percepção fica abaixo da expectativa, surge a decepção. Quando supera a expectativa, o produto cria valor excedente.",
      brandToggles: [
        { label: "Todos os Itens" },
        { label: "iluminação inteligente premium." },
        { label: "produtos domésticos acessíveis" },
        { label: "ecossistema de tecnologia de consumo" },
      ],
      brandSummaries: [
        {
          heading: "Marca A",
          text: "A Marca A apresenta o melhor desempenho em valorização sensorial. A interação vendada eleva o valor percebido, demonstrando forte coerência entre experiência material e posicionamento de marca.",
        },
        {
          heading: "Marca B",
          text: "As expectativas começam em torno da faixa ordinária a mediana, mas a percepção tátil tende a cair um pouco mais. O produto parece mais genérico do que a marca sugere.",
        },
        {
          heading: "Marca C",
          text: "A Marca C começa com as maiores expectativas. A percepção permanece elevada, mas a marca também carrega o maior risco de ligeira decepção porque a promessa já é muito alta.",
        },
      ],
    },
    researchFindings: {
      label: "Resultados de Pesquisa",
      heading: "O Que os Usuários Realmente Sentem",
      description:
        "A avaliação sensorial às cegas revelou o vocabulário não expresso da qualidade. Os usuários percebem imediatamente quando a intenção de design se alinha com a execução, e quando não se alinha.",
      findings: [
        {
          theme: "Evidência de Violação",
          insight:
            "A embalagem com evidência de violação cria segurança emocional e percepção de novidade. Os usuários leem as mecânicas da embalagem como um sinal de cuidado, integridade e frescura do produto.",
        },
        {
          theme: "O Problema do Emaranhamento",
          insight:
            "O gerenciamento de cabos e a estrutura interna da embalagem impactam diretamente a primeira impressão. A complexidade sinaliza desrespeito pelo tempo do usuário.",
        },
        {
          theme: "A Hierarquia de Qualidade",
          insight:
            "Os usuários categorizam intuitivamente os produtos em níveis. A consistência importa mais do que a qualidade absoluta, materiais incompatíveis criam dissonância cognitiva.",
        },
        {
          theme: "Incompatibilidade Contextual",
          insight:
            "As escolhas de material determinam a pertença espacial. Plástico duro remete a 'industrial'; toque suave remete a 'doméstico'. O contexto determina a adequação.",
        },
        {
          theme: "Vínculo Emocional",
          insight:
            "Transições suaves entre tecido de toque suave e hardware criam objetos que convidam ao toque. Os usuários descrevem-nos como algo que posso pegar e brincar: doméstico, pessoal, adequado para o lar.",
        },
        {
          theme: "O Encontro com o Conteúdo",
          insight:
            "As escolhas de material determinam a pertença espacial. Plástico duro remete a 'industrial'; toque suave remete a 'doméstico'. O contexto determina a adequação.",
        },
      ],
    },
    framework: {
      label: "O Framework",
      heading: "Seis Parâmetros de Valor Percebido",
      description:
        "Com base na pesquisa, destilei seis parâmetros mensuráveis que determinam se um produto parece premium ou fica aquém, independentemente do seu preço. Esses parâmetros formam a espinha dorsal diagnóstica de cada engajamento Value Tuning.",
      footnote:
        "O framework completo de parâmetros, a rubrica de pontuação e os critérios de design são entregues como parte do relatório de auditoria.",
      parameters: [
        { param: "Fisicalidade" },
        { param: "Transparência" },
        { param: "Ordem" },
        { param: "Estratificação" },
        { param: "Alinhamento" },
        { param: "Contexto" },
      ],
    },
    deliverable: {
      label: "A Entrega",
      heading: "O Que um Engajamento Value Tuning Produz",
      intro:
        "Cada engajamento conclui com um relatório de auditoria estruturado, adaptado ao seu produto e contexto de marca. Ele inclui:",
      items: [
        "Uma análise mapeada da lacuna entre expectativa de marca e percepção sensorial em sua linha de produtos",
        "Avaliação pontuada nos seis parâmetros do Value Tuning",
        "Pontos de atrito material, estrutural e experiencial identificados nas sessões com usuários",
        "Critérios de design e recomendações priorizadas que sua equipe pode implementar imediatamente",
        "Enquadramento estratégico para apoiar conversas internas sobre investimento em qualidade",
      ],
      closing:
        "O relatório foi projetado para dar a designers e equipes de marca evidências geradas por usuários, não apenas observações.",
    },
    fit: {
      label: "Adequação",
      heading: "Isso É Para Você Se...",
      items: [
        "Você está reposicionando uma marca e precisa saber se seus produtos acompanham a nova narrativa",
        "Você está preparando uma linha de produtos para lançamento em um segmento premium ou de luxo",
        "Você percebe uma lacuna entre como sua marca é vista e como seus produtos realmente parecem, mas não consegue localizá-la",
        "Sua equipe de design precisa de evidências de usuários para defender qualidade em conversas de orçamento",
      ],
    },
    impact: {
      label: "O Impacto",
      heading: "Além do Relatório",
      description: "Um relatório é o começo, não o fim.",
      cards: [
        {
          title: "Estratégico",
          desc: "Posiciona a lacuna entre a promessa da marca e a realidade do produto como uma distância mensurável e acionável, oferecendo à liderança uma nova lente sobre onde o investimento em qualidade gera mais retorno.",
        },
        {
          title: "Tático",
          desc: "Revela os momentos específicos em que a percepção se rompe: o primeiro toque, a sequência de abertura, o encontro com o material. Cada achado mapeia diretamente para uma decisão de design.",
        },
        {
          title: "Político",
          desc: "Transforma experiência subjetiva em evidência. Os designers saem com algo que podem defender em uma sala onde os orçamentos são decididos.",
        },
      ],
    },
    reflection: {
      label: "Reflexão",
      heading: "Em um Mundo Cada Vez Mais Digital",
      body: "Encontramos as marcas primeiro pela tela: através de imagens, campanhas e narrativas cuidadosamente construídas, muito antes de tocarmos o próprio produto. Quando ele finalmente chega às nossas mãos, a expectativa já está formada.\nA primeira interação física é implacável. O peso de uma tampa. A temperatura de um material. A resistência de uma dobradiça. Esses não são detalhes, são veredictos. Em um instante, confirmam ou contradizem silenciosamente tudo o que uma marca afirmou.\nTrabalhar com a Signify tornou isso visceral: mesmo a tecnologia mais sofisticada perde seu valor se o primeiro toque parecer errado. Em contextos premium, essa lacuna entre promessa e sensação não é percebida como nuance. É sentida como decepção, e a decepção é cara.\nO Value Tuning opera precisamente nesse ponto de tensão. Traduz a narrativa de marca em decisões de design tangíveis, identificando onde a percepção falha, onde o valor se perde e onde pode ser amplificado. Em luxo, beleza, automotivo e tecnologia de consumo, o desafio é sempre o mesmo: não apenas projetar produtos que funcionem, mas garantir que se sintam exatamente como imaginados, ou melhor.\nPorque o valor não é comunicado. É verificado, através do corpo.\nQuando seu produto for finalmente segurado, ele justificará tudo o que veio antes?",
    },
    service: {
      label: "Serviço",
      heading: "Execute uma auditoria Value Tuning para sua marca",
      paragraphs: [
        "Os engajamentos ocorrem ao longo de 2 a 4 dias e entregam um relatório completo de auditoria sensorial com critérios de design e recomendações estratégicas. Indicado para empresas de produtos, equipes de embalagem e estrategistas de marca se preparando para reposicionamento ou lançamento.",
        "Cada engajamento é dimensionado para seu produto e contexto, entre em contato para discutir a adequação.",
      ],
      cta: "Vamos trabalhar juntos",
      email: "studio@valmar.studio",
    },
    footer:
      "Value Tuning é uma metodologia de pesquisa original desenvolvida por Valentina Marino na Signify (Philips), 2018–2019.\nConceito, design do protocolo e framework © Valentina Marino.\nTodos os direitos reservados.",
  },

  es: {
    hero: {
      tags: ["Auditoría Sensorial", "Transformación de Marca", "Estrategia de Marca"],
      titleLine2: "El Lenguaje Oculto",
      titleLine3: "de la Percepción de Marca",
      descDesktop:
        "Desarrollado originalmente para Signify/Philips para cerrar la brecha entre la confianza técnica y el significado emocional, Value Tuning usa los sentidos como instrumento para adaptarse dondequiera que exista esa distancia: entre lo que una marca promete y lo que un producto entrega, entre una historia ética y una verdad sensorial, entre el diseño democrático y la sensación de calidad en sus manos.",
      descMobile:
        "Desarrollado originalmente para Signify/Philips para cerrar la brecha entre la confianza técnica y el significado emocional, Value Tuning usa los sentidos como instrumento para adaptarse dondequiera que exista esa distancia: entre lo que una marca promete y lo que un producto entrega, entre una historia ética y una verdad sensorial, entre el diseño democrático y la sensación de calidad en sus manos.",
      collaboration: "En colaboración con",
      scroll: "Desplazar",
    },
    problem: {
      label: "El Encargo",
      heading: "De la Confianza Técnica a la Experiencia Emocional",
      para1:
        "Durante décadas, Philips Lighting construyó su reputación sobre la confiabilidad de ingeniería y la excelencia técnica. Pero con el surgimiento de los dispositivos conectados y el ecosistema del Hogar Inteligente, la empresa comenzó a reposicionarse bajo un nuevo nombre: Signify.\nUna marca construida sobre confianza técnica y confiabilidad de ingeniería necesitaba hacer la transición hacia un espacio definido por la intimidad doméstica, la atmósfera y la experiencia emocional.",
      questionIntro: "Este cambio planteó una pregunta importante:",
      questionBold:
        " ¿cómo pueden los productos físicos expresar esta transición a través de sus cualidades sensoriales?",
      para3:
        "Fui invitada a explorar la brecha entre la percepción de marca heredada y la experiencia incorporada de estas nuevas tecnologías domésticas, el diseño y la materialidad.\nPara ello, desarrollé una metodología de investigación cualitativa diseñada para aislar cómo las personas interpretan los productos a través del tacto, el sonido, el peso y la materialidad, más allá del simple reconocimiento de marca.",
    },
    hypothesis: {
      label: "Premisa de Investigación",
      heading: "El Espectro de Valor",
      p1: "Propuse que existe una distancia medible entre lo que las personas esperan de una marca y lo que realmente sienten al encontrar sus productos a través de los sentidos.",
      p2: "Esta brecha se vuelve visible en el momento en que la narrativa de marca se encuentra con la experiencia incorporada: en el peso de un objeto, la resistencia de una bisagra, la textura de una superficie, el sonido de una apertura, el orden de un embalaje.",
      p3: "Cuando expectativa y experiencia sensorial se alinean, la confianza se refuerza. Cuando divergen, emerge la decepción. El valor de marca, entonces, no vive solo en la imagen, sino en la relación entre promesa y percepción.",
      p4: "Value Tuning opera precisamente en este espacio, haciendo lo invisible medible y lo medible accionable.",
      videoLabel: "Tráiler de la Metodología",
      videoCaption:
        "Una breve introducción al método de investigación: mapeo de expectativas de marca, eliminación del sesgo visual y evaluación de productos a través del tacto, el sonido, el peso y la interacción material.",
    },
    sensoryProtocol: {
      label: "El Método",
      heading: "Diseñado para Hacer Visible la Brecha",
      paragraphs: [
        "Value Tuning es un protocolo estructurado de investigación sensorial realizado con usuarios reales, productos reales y condiciones deliberadamente controladas. Separa lo que las personas esperan de una marca de lo que realmente sienten al encontrar sus productos a través del tacto, el sonido, el peso y la materialidad.",
        "El método avanza por tres momentos diseñados, cada uno eliminando una capa de suposición hasta que solo queda la percepción honesta.",
        "El resultado no es una impresión cualitativa. Es una distancia mapeada: entre la promesa de marca y la experiencia material vivida, convertida en un diagnóstico sobre el que puede actuar.",
      ],
    },
    blindfoldProtocol: {
      label: "El Método",
      heading: "El Protocolo de la Venda",
      philosophyQuote:
        "Los sentidos no son simples receptores pasivos de información sino participantes activos en la construcción de la realidad.",
      philosophyAuthor: "— David Howes, The Empire of the Senses",
      p1: "La identidad visual ejerce un inmenso poder. Un logo, una paleta de colores, una fotografía cuidadosamente escenificada, estos elementos preparan nuestras expectativas antes de que toquemos jamás un producto. Pero este condicionamiento es también una distorsión. Cuando vemos el embalaje de una marca de lujo, no estamos experimentando el objeto; estamos experimentando la narrativa que hemos sido condicionados a asociar con él.",
      p2: "El protocolo de la venda elimina esta variable. Al excluir la vista, accedemos a lo que David Howes llama el \"orden sensorial\", la jerarquía de percepción que opera por debajo del reconocimiento consciente de marca. El tacto se vuelve primario. El sonido se convierte en información. La temperatura, el peso y la textura hablan sin la interferencia del sesgo visual.",
      col1Heading: "Sesgo Visual",
      col1Text:
        "El reconocimiento del logo activa asociaciones de calidad precondicionadas. Juzgamos lo que esperamos, no lo que sentimos.",
      col2Heading: "Condicionamiento Narrativo",
      col2Text:
        "La narrativa de marca crea un \"efecto halo\" que enmascara inconsistencias sensoriales. El ojo perdona lo que la mano no puede.",
      col3Heading: "Verdad Proximal",
      col3Text:
        "Los objetos cercanos al cuerpo, sostenidos, tocados, manipulados, son juzgados con criterios diferentes a los objetos vistos desde la distancia.",
      largeQuote:
        "¿Qué se siente como hogar? ¿Qué invita a la mano a demorarse? Estas preguntas no pueden responderse solo mediante el análisis visual. La venda revela la brecha entre lo que una marca promete y lo que un producto realmente entrega a los sentidos.",
    },
    expectationGap: {
      label: "Alineación de Valor",
      heading: "Expectativas vs. Percepción",
      p1: "Este mapa compara cómo los participantes posicionaron cada marca antes de interactuar con el objeto y cómo lo posicionaron nuevamente después de la prueba sensorial con los ojos vendados.",
      p2: "La distancia entre ambos juicios revela la brecha entre la promesa de marca y la experiencia material vivida. Cuando la percepción cae por debajo de la expectativa, emerge la decepción. Cuando supera la expectativa, el producto crea valor excedente.",
      brandToggles: [
        { label: "Todos los Artículos" },
        { label: "iluminación inteligente premium." },
        { label: "artículos del hogar accesibles" },
        { label: "ecosistema de tecnología de consumo" },
      ],
      brandSummaries: [
        {
          heading: "Marca A",
          text: "La Marca A presenta el mejor desempeño en valorización sensorial. La interacción con los ojos vendados eleva el valor percibido, demostrando una fuerte coherencia entre la experiencia material y el posicionamiento de marca.",
        },
        {
          heading: "Marca B",
          text: "Las expectativas comienzan alrededor del rango ordinario a promedio, pero la percepción táctil tiende a caer ligeramente. El producto se siente más genérico de lo que sugiere la marca.",
        },
        {
          heading: "Marca C",
          text: "La Marca C comienza con las expectativas más altas. La percepción se mantiene alta, pero la marca también conlleva el mayor riesgo de ligera decepción porque la promesa ya es muy elevada.",
        },
      ],
    },
    researchFindings: {
      label: "Hallazgos de Investigación",
      heading: "Lo Que los Usuarios Realmente Sienten",
      description:
        "La evaluación sensorial a ciegas reveló el vocabulario no expresado de la calidad. Los usuarios perciben de inmediato cuando la intención de diseño se alinea con la ejecución, y cuando no.",
      findings: [
        {
          theme: "Evidencia de Manipulación",
          insight:
            "El embalaje con evidencia de manipulación crea seguridad emocional y percepción de novedad. Los usuarios leen los mecanismos del embalaje como una señal de cuidado, integridad y frescura del producto.",
        },
        {
          theme: "El Problema del Enredo",
          insight:
            "La gestión de cables y la estructura interna del embalaje impactan directamente en la primera impresión. La complejidad señala falta de respeto por el tiempo del usuario.",
        },
        {
          theme: "La Jerarquía de Calidad",
          insight:
            "Los usuarios categorizan intuitivamente los productos en niveles. La consistencia importa más que la calidad absoluta, los materiales inconsistentes crean disonancia cognitiva.",
        },
        {
          theme: "Incompatibilidad Contextual",
          insight:
            "Las elecciones de material determinan la pertenencia espacial. El plástico duro evoca 'industrial'; el tacto suave evoca 'doméstico'. El contexto determina la idoneidad.",
        },
        {
          theme: "Vínculo Emocional",
          insight:
            "Las transiciones fluidas entre tela suave y hardware crean objetos que invitan al tacto. Los usuarios los describen como algo que puedo agarrar y jugar: doméstico, personal, digno del hogar.",
        },
        {
          theme: "El Encuentro con el Contenido",
          insight:
            "Las elecciones de material determinan la pertenencia espacial. El plástico duro evoca 'industrial'; el tacto suave evoca 'doméstico'. El contexto determina la idoneidad.",
        },
      ],
    },
    framework: {
      label: "El Framework",
      heading: "Seis Parámetros de Valor Percibido",
      description:
        "A partir de la investigación, destilé seis parámetros medibles que determinan si un producto se siente premium o queda corto, independientemente de su precio. Estos parámetros forman la columna vertebral diagnóstica de cada compromiso Value Tuning.",
      footnote:
        "El framework completo de parámetros, la rúbrica de puntuación y los criterios de diseño se entregan como parte del informe de auditoría.",
      parameters: [
        { param: "Fisicalidad" },
        { param: "Transparencia" },
        { param: "Orden" },
        { param: "Estratificación" },
        { param: "Alineación" },
        { param: "Contexto" },
      ],
    },
    deliverable: {
      label: "La Entrega",
      heading: "Qué Produce un Compromiso Value Tuning",
      intro:
        "Cada compromiso concluye con un informe de auditoría estructurado, adaptado a su producto y contexto de marca. Incluye:",
      items: [
        "Un análisis mapeado de la brecha entre expectativa de marca y percepción sensorial en su gama de productos",
        "Evaluación puntuada en los seis parámetros de Value Tuning",
        "Puntos de fricción material, estructural y experiencial identificados en las sesiones con usuarios",
        "Criterios de diseño y recomendaciones priorizadas que su equipo puede implementar de inmediato",
        "Marco estratégico para apoyar conversaciones internas sobre inversión en calidad",
      ],
      closing:
        "El informe está diseñado para dar a diseñadores y equipos de marca evidencia generada por usuarios, no solo observaciones.",
    },
    fit: {
      label: "Adecuación",
      heading: "Esto Es Para Usted Si...",
      items: [
        "Está reposicionando una marca y necesita saber si sus productos siguen el ritmo de la nueva narrativa",
        "Está preparando una línea de productos para lanzamiento en un segmento premium o de lujo",
        "Percibe una brecha entre cómo se ve su marca y cómo realmente se sienten sus productos, pero no puede ubicarla",
        "Su equipo de diseño necesita evidencia de usuarios para defender la calidad en conversaciones de presupuesto",
      ],
    },
    impact: {
      label: "El Impacto",
      heading: "Más Allá del Informe",
      description: "Un informe es el comienzo, no el final.",
      cards: [
        {
          title: "Estratégico",
          desc: "Posiciona la brecha entre la promesa de marca y la realidad del producto como una distancia medible y accionable, ofreciendo al liderazgo una nueva lente sobre dónde la inversión en calidad genera el mayor retorno.",
        },
        {
          title: "Táctico",
          desc: "Pone al descubierto los momentos específicos en que la percepción se quiebra: el primer tacto, la secuencia de apertura, el encuentro con el material. Cada hallazgo se traduce directamente en una decisión de diseño.",
        },
        {
          title: "Político",
          desc: "Convierte la experiencia subjetiva en evidencia. Los diseñadores salen con algo que pueden defender en una sala donde se deciden los presupuestos.",
        },
      ],
    },
    reflection: {
      label: "Reflexión",
      heading: "En un Mundo Cada Vez Más Digital",
      body: "Encontramos las marcas primero a través de la pantalla: mediante imágenes, campañas y narrativas cuidadosamente construidas, mucho antes de tocar el producto en sí. Para cuando llega a nuestras manos, la expectativa ya está formada.\nLa primera interacción física es implacable. El peso de una tapa. La temperatura de un material. La resistencia de una bisagra. Estos no son detalles, son veredictos. En un instante, confirman o contradicen silenciosamente todo lo que una marca ha afirmado.\nTrabajar con Signify hizo esto visceral: incluso la tecnología más sofisticada pierde su valor si el primer toque se siente equivocado. En contextos premium, esa brecha entre promesa y sensación no se percibe como matiz. Se siente como decepción, y la decepción es costosa.\nValue Tuning opera precisamente en este punto de tensión. Traduce la narrativa de marca en decisiones de diseño tangibles, identificando dónde se rompe la percepción, dónde se pierde el valor y dónde puede amplificarse. En lujo, belleza, automoción y tecnología de consumo, el desafío es siempre el mismo: no solo diseñar productos que funcionen, sino asegurar que se sientan exactamente como se imaginaron, o mejor.\nPorque el valor no se comunica. Se verifica, a través del cuerpo.\n¿Cuando tu producto sea finalmente sostenido, justificará todo lo que vino antes?",
    },
    service: {
      label: "Servicio",
      heading: "Realiza una auditoría Value Tuning para tu marca",
      paragraphs: [
        "Los compromisos se llevan a cabo durante 2 a 4 días y entregan un informe completo de auditoría sensorial con criterios de diseño y recomendaciones estratégicas. Adecuado para empresas de productos, equipos de packaging y estrategas de marca que se preparan para un reposicionamiento o lanzamiento.",
        "Cada compromiso se adapta a su producto y contexto, contáctenos para evaluar la adecuación.",
      ],
      cta: "Trabajemos juntos",
      email: "studio@valmar.studio",
    },
    footer:
      "Value Tuning es una metodología de investigación original desarrollada por Valentina Marino en Signify (Philips), 2018–2019.\nConcepto, diseño del protocolo y framework © Valentina Marino.\nTodos los derechos reservados.",
  },
};

export function getValueTuningContent(locale: Locale): ValueTuningContent {
  return content[locale];
}
