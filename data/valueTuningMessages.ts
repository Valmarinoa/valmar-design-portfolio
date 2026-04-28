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
    description: string;
    steps: Array<{ title: string; desc: string; insight: string }>;
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
    quote: string;
    parameters: Array<{ param: string; insight: string }>;
  };
  designCriteria: {
    label: string;
    heading: string;
    description: string;
    sealLabel: string;
    sealQuote: string;
    sections: Array<{
      category: string;
      criteria: Array<{ label: string; desc: string }>;
    }>;
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
    description: string;
    cta: string;
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
        "A self-developed research methodology designed to decode how products communicate value through the senses. By separating brand expectation from embodied experience, the study reveals how materiality, weight, sound, texture, and even smell silently translate brand narratives, and how our perception of luxury is rooted as much in primal sensory instincts as in cultural symbolism.",
      descMobile:
        "Value Tuning unlocks products' secret language of luxury through touch, sound, weight, even smell. It reveals if they truly feel premium... or fall flat. Perfect for Signify's shift from Philips' tech-trust vibe to cozy smart-home magic.",
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
      p4: "In other words, value exists on a spectrum between projection and embodied reality.",
      videoLabel: "Methodology Trailer",
      videoCaption:
        "A short introduction to the research method: mapping brand expectations, removing visual bias, and evaluating products through touch, sound, weight, and material interaction.",
    },
    sensoryProtocol: {
      label: "The Protocol",
      heading: "The Sensory Protocol",
      description:
        "I designed a research protocol that moves participants through three stages: expectation, sensory encounter, and reflection...",
      steps: [
        {
          title: "The Expectations",
          desc: `Before touching any product, users associate emotional words with each brand. "Authentic," "warm," "youthful"; these form the baseline of what the brand promises.`,
          insight:
            "WordCloud mapping reveals the halo effect: brand narrative shapes anticipated experience.",
        },
        {
          title: "The Blind Test",
          desc: "Blindfolded, users evaluate the same products through touch, sound, and scent alone. No logos. No color. Just the raw sensory encounter. Every gesture is recorded.",
          insight:
            "Stripping away visual identity exposes the gap between narrative and material reality.",
        },
        {
          title: "The Reveal",
          desc: "Finally, users see the product. The reveal tests whether visual branding confirms or contradicts their blind sensory assessment. The distance becomes visible.",
          insight:
            "Cognitive dissonance occurs when premium branding meets poor sensory execution.",
        },
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
        { label: "premium smart lighting." },
        { label: "accessible home goods" },
        { label: "consumer tech ecosystem" },
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
        "From the research, I distilled six measurable attributes that determine whether a product feels \"premium\" or \"cheap,\" regardless of its price.",
      quote:
        "Perceived quality is not the sum of individual sensory inputs, but their coherence.",
      parameters: [
        {
          param: "Physicality",
          insight:
            "Every choice and tolerance of materials is expected to serve a purpose. Users sense when design is rushed or corners are cut.",
        },
        {
          param: "Transparency",
          insight:
            "People value real access to content. Windows, viewing holes, immediate product visibility build trust and reduce anxiety.",
        },
        {
          param: "Order",
          insight:
            "The sequence of opening must be coherent. This order is echo of its 'contentchaos' signals carelessness, clarity signals attention and detail.",
        },
        {
          param: "Stratification",
          insight:
            "Layering the opening journey determines first impressions. Each step should reveal, not obscure.",
        },
        {
          param: "Alignment",
          insight:
            "Service must align with emotions, states of mind. The product should meet the user in their everyday life.",
        },
        {
          param: "Context",
          insight:
            "Material choices determine distance between object and user. Fabric reads 'home'; plastic reads 'office'.",
        },
      ],
    },
    designCriteria: {
      label: "Design Criteria",
      heading: "From Insight to Design Criteria",
      description:
        "Each sensory audit evaluates specific, measurable attributes derived from user research. These parameters serve as both diagnostic tools and design targets.",
      sealLabel: "Key Insight",
      sealQuote:
        "Perceived quality is not the sum of individual sensory inputs, but their coherence. A product that sounds premium but feels cheap creates cognitive dissonance. The goal is alignment across all five parameters.",
      sections: [
        {
          category: "Packaging Hierarchy",
          criteria: [
            {
              label: "Product Visibility",
              desc: "User should see product within 3 seconds of opening. Viewing holes or transparent layers preferred.",
            },
            {
              label: "Documentation Layering",
              desc: "Manuals and warranties underneath product, not on top. Loose paper creates 'messy' perception.",
            },
            {
              label: "Single-Motion Access",
              desc: "Opening → Product removal should require ≤2 distinct actions. More steps = frustration.",
            },
            {
              label: "Cable Management",
              desc: "Cables must not be trapped in box folds. Entanglement signals poor planning.",
            },
          ],
        },
        {
          category: "Material Confidence",
          criteria: [
            {
              label: "Temperature Neutrality",
              desc: `Materials should feel neutral-to-warm (18-22°C) within 3 seconds. Cold plastic = "cheap".`,
            },
            {
              label: "Surface Continuity",
              desc: "Transitions between materials should be seamless or intentionally layered, not abrupt.",
            },
            {
              label: "Weight Substance",
              desc: `Actual weight should exceed visual expectation by 15-20%. Lightness = "flimsy".`,
            },
            {
              label: "Texture Intention",
              desc: "Micro-texture should signal purpose: grip zones vs. display surfaces.",
            },
          ],
        },
        {
          category: "Contextual Fit",
          criteria: [
            {
              label: "Domestic vs. Industrial",
              desc: `Soft-touch materials read "home"; hard plastic reads "office." Context determines appropriateness.`,
            },
            {
              label: "Blending vs. Standing Out",
              desc: "Product should be sleek enough to disappear, distinctive enough to invite touch.",
            },
            {
              label: "Orientation Clarity",
              desc: "Form should indicate usage: flat base, curved front, hard edges where wall meets.",
            },
          ],
        },
      ],
    },
    impact: {
      label: "The Impact",
      heading: "Beyond the Report",
      description:
        "Research only matters if it changes decisions. Value Tuning was designed to give designers leverage in budget conversations.",
      cards: [
        {
          title: "Strategic",
          desc: "Demonstrated that sensorial investment in packaging directly affected brand positioning against Apple and Google. The 'Volkswagen vs Audi' metaphor became internal shorthand.",
        },
        {
          title: "Tactical",
          desc: "Identified specific friction points like cable entanglement, documentation layering, material transitions—for immediate redesign in the HUE line.",
        },
        {
          title: "Political",
          desc: "Gave designers user-generated evidence to advocate for quality budgets, shifting the conversation from 'what can we save?' to 'what must we value?'",
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
      description:
        "Engagements run over 2–4 days and deliver a full sensory audit report with design criteria and strategic recommendations. Suited to product companies, packaging teams, and brand strategists preparing for repositioning or launch.",
      cta: "Let's Work together",
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
        "Uma metodologia de pesquisa desenvolvida para decodificar como os produtos comunicam valor através dos sentidos. Ao separar a expectativa de marca da experiência incorporada, o estudo revela como a materialidade, o peso, o som, a textura e até o olfato traduzem silenciosamente as narrativas de marca, e como nossa percepção de luxo está enraizada tanto em instintos sensoriais primitivos quanto em simbolismo cultural.",
      descMobile:
        "Value Tuning desvenda a linguagem secreta do luxo através do toque, som, peso e até olfato. Revela se os produtos realmente parecem premium... ou decepcionam. Ideal para a transição da Signify da confiança técnica da Philips para a magia do lar inteligente e aconchegante.",
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
      p4: "Em outras palavras, o valor existe em um espectro entre projeção e realidade incorporada.",
      videoLabel: "Trailer da Metodologia",
      videoCaption:
        "Uma breve introdução ao método de pesquisa: mapeamento de expectativas de marca, eliminação do viés visual e avaliação de produtos através do toque, som, peso e interação material.",
    },
    sensoryProtocol: {
      label: "O Protocolo",
      heading: "O Protocolo Sensorial",
      description:
        "Desenvolvi um protocolo de pesquisa que conduz os participantes por três etapas: expectativa, encontro sensorial e reflexão...",
      steps: [
        {
          title: "As Expectativas",
          desc: `Antes de tocar qualquer produto, os participantes associam palavras emocionais a cada marca. "Autêntico", "caloroso", "jovem" — essas palavras formam a base do que a marca promete.`,
          insight:
            "O mapeamento em WordCloud revela o efeito halo: a narrativa de marca molda a experiência antecipada.",
        },
        {
          title: "O Teste às Cegas",
          desc: "Vendados, os participantes avaliam os mesmos produtos apenas pelo toque, som e olfato. Sem logos. Sem cores. Apenas o encontro sensorial bruto. Cada gesto é registrado.",
          insight:
            "Remover a identidade visual expõe a lacuna entre a narrativa e a realidade material.",
        },
        {
          title: "A Revelação",
          desc: "Por fim, os participantes veem o produto. A revelação testa se a identidade visual confirma ou contradiz sua avaliação sensorial às cegas. A distância torna-se visível.",
          insight:
            "A dissonância cognitiva ocorre quando a marca premium encontra uma execução sensorial deficiente.",
        },
      ],
    },
    blindfoldProtocol: {
      label: "O Método",
      heading: "O Protocolo da Venda nos Olhos",
      philosophyQuote:
        "Os sentidos não são meros receptores passivos de informação, mas participantes ativos na construção da realidade.",
      philosophyAuthor: "— David Howes, The Empire of the Senses",
      p1: "A identidade visual exerce um poder imenso. Um logo, uma paleta de cores, uma fotografia cuidadosamente encenada — esses elementos preparam nossas expectativas antes mesmo de tocarmos um produto. Mas esse preparo é também uma distorção. Quando vemos a embalagem de uma marca de luxo, não estamos vivenciando o objeto; estamos vivenciando a narrativa que fomos condicionados a associar a ela.",
      p2: "O protocolo da venda nos olhos elimina essa variável. Ao excluir a visão, acessamos o que David Howes chama de \"ordem sensorial\" — a hierarquia da percepção que opera abaixo do reconhecimento consciente de marca. O toque torna-se primário. O som torna-se informação. Temperatura, peso e textura falam sem a interferência do viés visual.",
      col1Heading: "Viés Visual",
      col1Text:
        "O reconhecimento do logo ativa associações de qualidade pré-condicionadas. Julgamos o que esperamos, não o que sentimos.",
      col2Heading: "Condicionamento Narrativo",
      col2Text:
        "A narrativa de marca cria um \"efeito halo\" que mascara inconsistências sensoriais. O olho perdoa o que a mão não consegue.",
      col3Heading: "Verdade Proximal",
      col3Text:
        "Objetos próximos ao corpo — segurados, tocados, manipulados — são julgados por critérios diferentes dos objetos vistos à distância.",
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
        "A avaliação sensorial às cegas revelou o vocabulário não expresso da qualidade. Os usuários percebem imediatamente quando a intenção de design se alinha com a execução — e quando não se alinha.",
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
            "Os usuários categorizam intuitivamente os produtos em níveis. A consistência importa mais do que a qualidade absoluta — materiais incompatíveis criam dissonância cognitiva.",
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
        "Com base na pesquisa, destilei seis atributos mensuráveis que determinam se um produto parece \"premium\" ou \"barato\", independentemente do seu preço.",
      quote:
        "A qualidade percebida não é a soma de inputs sensoriais individuais, mas a coerência entre eles.",
      parameters: [
        {
          param: "Fisicalidade",
          insight:
            "Cada escolha e tolerância de materiais deve cumprir um propósito. Os usuários percebem quando o design foi apressado ou os custos foram cortados.",
        },
        {
          param: "Transparência",
          insight:
            "As pessoas valorizam o acesso real ao conteúdo. Janelas, orifícios de visualização e visibilidade imediata do produto geram confiança e reduzem a ansiedade.",
        },
        {
          param: "Ordem",
          insight:
            "A sequência de abertura deve ser coerente. Essa ordem é um reflexo do seu conteúdo — o caos sinaliza descuido, a clareza sinaliza cuidado.",
        },
        {
          param: "Estratificação",
          insight:
            "Estruturar em camadas a jornada de abertura determina as primeiras impressões. Cada etapa deve revelar, não ocultar.",
        },
        {
          param: "Alinhamento",
          insight:
            "O serviço deve alinhar-se às emoções e estados de espírito. O produto deve encontrar o usuário em sua vida cotidiana.",
        },
        {
          param: "Contexto",
          insight:
            "As escolhas de material determinam a distância entre objeto e usuário. Tecido remete a 'lar'; plástico remete a 'escritório'.",
        },
      ],
    },
    designCriteria: {
      label: "Critérios de Design",
      heading: "Do Insight aos Critérios de Design",
      description:
        "Cada auditoria sensorial avalia atributos específicos e mensuráveis derivados da pesquisa com usuários. Esses parâmetros servem tanto como ferramentas de diagnóstico quanto como metas de design.",
      sealLabel: "Insight Chave",
      sealQuote:
        "A qualidade percebida não é a soma de inputs sensoriais individuais, mas a coerência entre eles. Um produto que soa premium mas parece barato ao toque cria dissonância cognitiva. O objetivo é o alinhamento em todos os cinco parâmetros.",
      sections: [
        {
          category: "Hierarquia de Embalagem",
          criteria: [
            {
              label: "Visibilidade do Produto",
              desc: "O usuário deve ver o produto em até 3 segundos após a abertura. Orifícios de visualização ou camadas transparentes são preferíveis.",
            },
            {
              label: "Disposição da Documentação",
              desc: "Manuais e garantias abaixo do produto, não por cima. Papéis soltos criam uma percepção de 'bagunça'.",
            },
            {
              label: "Acesso em Movimento Único",
              desc: "Abertura → remoção do produto deve exigir ≤2 ações distintas. Mais etapas = frustração.",
            },
            {
              label: "Gerenciamento de Cabos",
              desc: "Os cabos não devem ficar presos nas dobras da caixa. O emaranhamento sinaliza planejamento deficiente.",
            },
          ],
        },
        {
          category: "Confiança nos Materiais",
          criteria: [
            {
              label: "Neutralidade Térmica",
              desc: `Os materiais devem parecer neutros a mornos (18-22°C) em até 3 segundos. Plástico frio = "barato".`,
            },
            {
              label: "Continuidade da Superfície",
              desc: "As transições entre materiais devem ser suaves ou intencionalmente em camadas, não abruptas.",
            },
            {
              label: "Substância do Peso",
              desc: `O peso real deve superar a expectativa visual em 15-20%. Leveza = "frágil".`,
            },
            {
              label: "Intenção da Textura",
              desc: "A microtextura deve sinalizar propósito: zonas de preensão versus superfícies de exibição.",
            },
          ],
        },
        {
          category: "Adequação Contextual",
          criteria: [
            {
              label: "Doméstico vs. Industrial",
              desc: `Materiais de toque suave remetem a "lar"; plástico duro remete a "escritório". O contexto determina a adequação.`,
            },
            {
              label: "Integrar vs. Destacar",
              desc: "O produto deve ser elegante o suficiente para se dissolver no ambiente, mas distinto o suficiente para convidar ao toque.",
            },
            {
              label: "Clareza de Orientação",
              desc: "A forma deve indicar o uso: base plana, frente curva, bordas rígidas onde encontra a parede.",
            },
          ],
        },
      ],
    },
    impact: {
      label: "O Impacto",
      heading: "Além do Relatório",
      description:
        "A pesquisa só importa se mudar decisões. O Value Tuning foi projetado para dar aos designers influência nas conversas sobre orçamento.",
      cards: [
        {
          title: "Estratégico",
          desc: "Demonstrou que o investimento sensorial na embalagem afeta diretamente o posicionamento de marca em relação à Apple e Google. A metáfora 'Volkswagen vs Audi' tornou-se um atalho interno.",
        },
        {
          title: "Tático",
          desc: "Identificou pontos de atrito específicos — emaranhamento de cabos, disposição da documentação, transições de materiais — para redesenho imediato na linha HUE.",
        },
        {
          title: "Político",
          desc: "Forneceu aos designers evidências geradas por usuários para defender orçamentos de qualidade, mudando a conversa de 'o que podemos economizar?' para 'o que devemos valorizar?'",
        },
      ],
    },
    reflection: {
      label: "Reflexão",
      heading: "Em um Mundo Cada Vez Mais Digital",
      body: "Encontramos as marcas primeiro pela tela: através de imagens, campanhas e narrativas cuidadosamente construídas, muito antes de tocarmos o próprio produto. Quando ele finalmente chega às nossas mãos, a expectativa já está formada.\nA primeira interação física é implacável. O peso de uma tampa. A temperatura de um material. A resistência de uma dobradiça. Esses não são detalhes — são veredictos. Em um instante, confirmam ou contradizem silenciosamente tudo o que uma marca afirmou.\nTrabalhar com a Signify tornou isso visceral: mesmo a tecnologia mais sofisticada perde seu valor se o primeiro toque parecer errado. Em contextos premium, essa lacuna entre promessa e sensação não é percebida como nuance. É sentida como decepção — e a decepção é cara.\nO Value Tuning opera precisamente nesse ponto de tensão. Traduz a narrativa de marca em decisões de design tangíveis, identificando onde a percepção falha, onde o valor se perde e onde pode ser amplificado. Em luxo, beleza, automotivo e tecnologia de consumo, o desafio é sempre o mesmo: não apenas projetar produtos que funcionem, mas garantir que se sintam exatamente como imaginados — ou melhor.\nPorque o valor não é comunicado. É verificado — através do corpo.\nQuando seu produto for finalmente segurado, ele justificará tudo o que veio antes?",
    },
    service: {
      label: "Serviço",
      heading: "Execute uma auditoria Value Tuning para sua marca",
      description:
        "Os engajamentos ocorrem ao longo de 2 a 4 dias e entregam um relatório completo de auditoria sensorial com critérios de design e recomendações estratégicas. Indicado para empresas de produtos, equipes de embalagem e estrategistas de marca se preparando para reposicionamento ou lançamento.",
      cta: "Vamos trabalhar juntos",
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
        "Una metodología de investigación propia diseñada para descifrar cómo los productos comunican valor a través de los sentidos. Al separar la expectativa de marca de la experiencia incorporada, el estudio revela cómo la materialidad, el peso, el sonido, la textura e incluso el olfato traducen silenciosamente las narrativas de marca, y cómo nuestra percepción del lujo está enraizada tanto en instintos sensoriales primitivos como en simbolismo cultural.",
      descMobile:
        "Value Tuning desbloquea el lenguaje secreto del lujo a través del tacto, el sonido, el peso e incluso el olfato. Revela si los productos realmente se sienten premium... o decepcionan. Ideal para la transición de Signify de la confianza técnica de Philips a la magia del hogar inteligente y acogedor.",
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
      p4: "En otras palabras, el valor existe en un espectro entre proyección y realidad incorporada.",
      videoLabel: "Tráiler de la Metodología",
      videoCaption:
        "Una breve introducción al método de investigación: mapeo de expectativas de marca, eliminación del sesgo visual y evaluación de productos a través del tacto, el sonido, el peso y la interacción material.",
    },
    sensoryProtocol: {
      label: "El Protocolo",
      heading: "El Protocolo Sensorial",
      description:
        "Diseñé un protocolo de investigación que lleva a los participantes a través de tres etapas: expectativa, encuentro sensorial y reflexión...",
      steps: [
        {
          title: "Las Expectativas",
          desc: `Antes de tocar cualquier producto, los participantes asocian palabras emocionales con cada marca. "Auténtico", "cálido", "juvenil" — estas forman la línea base de lo que la marca promete.`,
          insight:
            "El mapeo en WordCloud revela el efecto halo: la narrativa de marca moldea la experiencia anticipada.",
        },
        {
          title: "La Prueba a Ciegas",
          desc: "Con los ojos vendados, los participantes evalúan los mismos productos solo a través del tacto, el sonido y el olfato. Sin logos. Sin color. Solo el encuentro sensorial en estado puro. Cada gesto es registrado.",
          insight:
            "Eliminar la identidad visual expone la brecha entre la narrativa y la realidad material.",
        },
        {
          title: "La Revelación",
          desc: "Finalmente, los participantes ven el producto. La revelación pone a prueba si la identidad visual confirma o contradice su evaluación sensorial a ciegas. La distancia se vuelve visible.",
          insight:
            "La disonancia cognitiva ocurre cuando el branding premium se encuentra con una ejecución sensorial deficiente.",
        },
      ],
    },
    blindfoldProtocol: {
      label: "El Método",
      heading: "El Protocolo de la Venda",
      philosophyQuote:
        "Los sentidos no son simples receptores pasivos de información sino participantes activos en la construcción de la realidad.",
      philosophyAuthor: "— David Howes, The Empire of the Senses",
      p1: "La identidad visual ejerce un inmenso poder. Un logo, una paleta de colores, una fotografía cuidadosamente escenificada — estos elementos preparan nuestras expectativas antes de que toquemos jamás un producto. Pero este condicionamiento es también una distorsión. Cuando vemos el embalaje de una marca de lujo, no estamos experimentando el objeto; estamos experimentando la narrativa que hemos sido condicionados a asociar con él.",
      p2: "El protocolo de la venda elimina esta variable. Al excluir la vista, accedemos a lo que David Howes llama el \"orden sensorial\" — la jerarquía de percepción que opera por debajo del reconocimiento consciente de marca. El tacto se vuelve primario. El sonido se convierte en información. La temperatura, el peso y la textura hablan sin la interferencia del sesgo visual.",
      col1Heading: "Sesgo Visual",
      col1Text:
        "El reconocimiento del logo activa asociaciones de calidad precondicionadas. Juzgamos lo que esperamos, no lo que sentimos.",
      col2Heading: "Condicionamiento Narrativo",
      col2Text:
        "La narrativa de marca crea un \"efecto halo\" que enmascara inconsistencias sensoriales. El ojo perdona lo que la mano no puede.",
      col3Heading: "Verdad Proximal",
      col3Text:
        "Los objetos cercanos al cuerpo — sostenidos, tocados, manipulados — son juzgados con criterios diferentes a los objetos vistos desde la distancia.",
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
        "La evaluación sensorial a ciegas reveló el vocabulario no expresado de la calidad. Los usuarios perciben de inmediato cuando la intención de diseño se alinea con la ejecución — y cuando no.",
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
            "Los usuarios categorizan intuitivamente los productos en niveles. La consistencia importa más que la calidad absoluta — los materiales inconsistentes crean disonancia cognitiva.",
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
        "A partir de la investigación, destilé seis atributos medibles que determinan si un producto se siente \"premium\" o \"barato\", independientemente de su precio.",
      quote:
        "La calidad percibida no es la suma de inputs sensoriales individuales, sino su coherencia.",
      parameters: [
        {
          param: "Fisicalidad",
          insight:
            "Cada elección y tolerancia de materiales se espera que sirva a un propósito. Los usuarios perciben cuando el diseño fue apresurado o se recortaron costos.",
        },
        {
          param: "Transparencia",
          insight:
            "Las personas valoran el acceso real al contenido. Las ventanas, los orificios de visualización y la visibilidad inmediata del producto generan confianza y reducen la ansiedad.",
        },
        {
          param: "Orden",
          insight:
            "La secuencia de apertura debe ser coherente. Este orden es un eco de su contenido — el caos señala descuido, la claridad señala cuidado.",
        },
        {
          param: "Estratificación",
          insight:
            "Estratificar el recorrido de apertura determina las primeras impresiones. Cada paso debe revelar, no ocultar.",
        },
        {
          param: "Alineación",
          insight:
            "El servicio debe alinearse con las emociones y estados de ánimo. El producto debe encontrarse con el usuario en su vida cotidiana.",
        },
        {
          param: "Contexto",
          insight:
            "Las elecciones de material determinan la distancia entre objeto y usuario. La tela evoca 'hogar'; el plástico evoca 'oficina'.",
        },
      ],
    },
    designCriteria: {
      label: "Criterios de Diseño",
      heading: "Del Insight a los Criterios de Diseño",
      description:
        "Cada auditoría sensorial evalúa atributos específicos y medibles derivados de la investigación con usuarios. Estos parámetros sirven tanto como herramientas de diagnóstico como objetivos de diseño.",
      sealLabel: "Insight Clave",
      sealQuote:
        "La calidad percibida no es la suma de inputs sensoriales individuales, sino su coherencia. Un producto que suena premium pero se siente barato al tacto genera disonancia cognitiva. El objetivo es la alineación en todos los cinco parámetros.",
      sections: [
        {
          category: "Jerarquía de Embalaje",
          criteria: [
            {
              label: "Visibilidad del Producto",
              desc: "El usuario debería ver el producto en los primeros 3 segundos de apertura. Se prefieren orificios de visualización o capas transparentes.",
            },
            {
              label: "Disposición de la Documentación",
              desc: "Los manuales y garantías deben ir debajo del producto, no encima. El papel suelto crea percepción de 'desorden'.",
            },
            {
              label: "Acceso en Un Solo Movimiento",
              desc: "Apertura → extracción del producto debe requerir ≤2 acciones distintas. Más pasos = frustración.",
            },
            {
              label: "Gestión de Cables",
              desc: "Los cables no deben quedar atrapados en los pliegues de la caja. El enredo señala una planificación deficiente.",
            },
          ],
        },
        {
          category: "Confianza en los Materiales",
          criteria: [
            {
              label: "Neutralidad Térmica",
              desc: `Los materiales deben sentirse neutros a cálidos (18-22°C) en 3 segundos. El plástico frío = "barato".`,
            },
            {
              label: "Continuidad de la Superficie",
              desc: "Las transiciones entre materiales deben ser fluidas o intencionalmente estratificadas, no abruptas.",
            },
            {
              label: "Sustancia del Peso",
              desc: `El peso real debe superar la expectativa visual en un 15-20%. La ligereza = "endeble".`,
            },
            {
              label: "Intención de la Textura",
              desc: "La microtextura debe señalar propósito: zonas de agarre frente a superficies decorativas.",
            },
          ],
        },
        {
          category: "Adecuación Contextual",
          criteria: [
            {
              label: "Doméstico vs. Industrial",
              desc: `Los materiales de tacto suave evocan "hogar"; el plástico duro evoca "oficina". El contexto determina la idoneidad.`,
            },
            {
              label: "Integrarse vs. Destacarse",
              desc: "El producto debe ser lo suficientemente elegante para desaparecer, pero lo suficientemente distintivo para invitar al tacto.",
            },
            {
              label: "Claridad de Orientación",
              desc: "La forma debe indicar el uso: base plana, frente curvo, bordes firmes donde se apoya en la pared.",
            },
          ],
        },
      ],
    },
    impact: {
      label: "El Impacto",
      heading: "Más Allá del Informe",
      description:
        "La investigación solo importa si cambia decisiones. Value Tuning fue diseñado para dar a los diseñadores influencia en las conversaciones sobre presupuesto.",
      cards: [
        {
          title: "Estratégico",
          desc: "Demostró que la inversión sensorial en el packaging afecta directamente el posicionamiento de marca frente a Apple y Google. La metáfora 'Volkswagen vs. Audi' se convirtió en un referente interno.",
        },
        {
          title: "Táctico",
          desc: "Identificó puntos de fricción específicos — enredo de cables, disposición de la documentación, transiciones de materiales — para el rediseño inmediato de la línea HUE.",
        },
        {
          title: "Político",
          desc: "Proporcionó a los diseñadores evidencias generadas por usuarios para abogar por presupuestos de calidad, cambiando la conversación de '¿qué podemos ahorrar?' a '¿qué debemos valorar?'",
        },
      ],
    },
    reflection: {
      label: "Reflexión",
      heading: "En un Mundo Cada Vez Más Digital",
      body: "Encontramos las marcas primero a través de la pantalla: mediante imágenes, campañas y narrativas cuidadosamente construidas, mucho antes de tocar el producto en sí. Para cuando llega a nuestras manos, la expectativa ya está formada.\nLa primera interacción física es implacable. El peso de una tapa. La temperatura de un material. La resistencia de una bisagra. Estos no son detalles — son veredictos. En un instante, confirman o contradicen silenciosamente todo lo que una marca ha afirmado.\nTrabajar con Signify hizo esto visceral: incluso la tecnología más sofisticada pierde su valor si el primer toque se siente equivocado. En contextos premium, esa brecha entre promesa y sensación no se percibe como matiz. Se siente como decepción — y la decepción es costosa.\nValue Tuning opera precisamente en este punto de tensión. Traduce la narrativa de marca en decisiones de diseño tangibles, identificando dónde se rompe la percepción, dónde se pierde el valor y dónde puede amplificarse. En lujo, belleza, automoción y tecnología de consumo, el desafío es siempre el mismo: no solo diseñar productos que funcionen, sino asegurar que se sientan exactamente como se imaginaron — o mejor.\nPorque el valor no se comunica. Se verifica — a través del cuerpo.\n¿Cuando tu producto sea finalmente sostenido, justificará todo lo que vino antes?",
    },
    service: {
      label: "Servicio",
      heading: "Realiza una auditoría Value Tuning para tu marca",
      description:
        "Los compromisos se llevan a cabo durante 2 a 4 días y entregan un informe completo de auditoría sensorial con criterios de diseño y recomendaciones estratégicas. Adecuado para empresas de productos, equipos de packaging y estrategas de marca que se preparan para un reposicionamiento o lanzamiento.",
      cta: "Trabajemos juntos",
    },
    footer:
      "Value Tuning es una metodología de investigación original desarrollada por Valentina Marino en Signify (Philips), 2018–2019.\nConcepto, diseño del protocolo y framework © Valentina Marino.\nTodos los derechos reservados.",
  },
};

export function getValueTuningContent(locale: Locale): ValueTuningContent {
  return content[locale];
}
