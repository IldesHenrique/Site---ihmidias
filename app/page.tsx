import Image from 'next/image';

const services = [
  { n: '01', title: 'Tráfego pago', text: 'Campanhas no Meta e Google pensadas para gerar demanda, oportunidades e vendas.' },
  { n: '02', title: 'Estratégia digital', text: 'Diagnóstico, posicionamento e plano de mídia alinhados ao momento real do negócio.' },
  { n: '03', title: 'Criativos que convertem', text: 'Conceitos e peças que interrompem o scroll, comunicam valor e levam à ação.' },
  { n: '04', title: 'Análise & otimização', text: 'Leitura contínua dos dados para investir melhor, reduzir desperdícios e escalar.' },
];

const steps = [
  ['01', 'Diagnóstico', 'Entendemos seu negócio, oferta, público e cenário competitivo.'],
  ['02', 'Estratégia', 'Definimos canais, mensagem, segmentação e metas que fazem sentido.'],
  ['03', 'Execução', 'Colocamos campanhas e criativos no ar com acompanhamento próximo.'],
  ['04', 'Otimização', 'Lemos os sinais, testamos hipóteses e aceleramos o que funciona.'],
];

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#inicio" aria-label="IH Mídias — início">
          <Image src="/ih-logo.png" alt="Logo IH Mídias" width={54} height={54} priority />
          <span>IH <b>Mídias</b></span>
        </a>
        <nav aria-label="Navegação principal">
          <a href="#servicos">Serviços</a><a href="#metodo">Método</a><a href="#resultados">Resultados</a><a href="#sobre">Sobre</a>
        </nav>
        <a className="button button-small" href="https://wa.me/554388635665" target="_blank" rel="noreferrer">Falar com a IH</a>
      </header>

      <section className="hero" id="inicio">
        <div className="hero-copy">
          <p className="eyebrow"><span /> Estratégia que vira resultado</p>
          <h1>Seu negócio precisa ser <em>visto.</em><br />E escolhido.</h1>
          <p className="lead">Transformamos mídia paga em crescimento real — com estratégia, criatividade e dados trabalhando para atrair as pessoas certas.</p>
          <div className="hero-actions">
            <a className="button" href="https://wa.me/554388635665" target="_blank" rel="noreferrer">Quero atrair mais clientes <span>↗</span></a>
            <a className="text-link" href="#servicos">Conheça nosso trabalho <span>↓</span></a>
          </div>
          <div className="proof-row">
            <div><strong>Estratégia</strong><span>antes do clique</span></div><div><strong>Dados</strong><span>sem achismos</span></div><div><strong>Resultado</strong><span>que faz sentido</span></div>
          </div>
        </div>
        <div className="hero-art" aria-label="Painel visual de campanhas e crescimento">
          <div className="hero-grid" />
          <div className="metric-card metric-main"><span>Crescimento</span><strong>+247%</strong><small>alcance qualificado</small><i>↗</i></div>
          <div className="metric-card metric-roi"><span>Retorno</span><strong>4,8x</strong><small>sobre investimento</small></div>
          <div className="chart" aria-hidden="true"><i/><i/><i/><i/><i/><i/><i/></div>
          <div className="hero-statement">ANÚNCIOS<br/><b>QUE MOVEM</b><br/>NEGÓCIOS.</div>
          <div className="triangle-cluster" aria-hidden="true">▲ ▲ ▲<br/>▲ ▲</div>
        </div>
      </section>

      <section className="marquee" aria-label="Especialidades"><div>TRÁFEGO PAGO <b>✦</b> ESTRATÉGIA <b>✦</b> CRIATIVIDADE <b>✦</b> PERFORMANCE <b>✦</b> TRÁFEGO PAGO</div></section>

      <section className="section services" id="servicos">
        <div className="section-head"><div><p className="eyebrow"><span/> O que fazemos</p><h2>Não é sobre<br/>aparecer. É sobre<br/><em>acontecer.</em></h2></div><p>Unimos mídia, mensagem e inteligência para fazer sua marca chegar a quem realmente importa — e transformar atenção em negócio.</p></div>
        <div className="service-grid">{services.map((service) => <article className="service-card" key={service.n}><span>{service.n}</span><h3>{service.title}</h3><p>{service.text}</p><i>↗</i></article>)}</div>
      </section>

      <section className="results" id="resultados">
        <div className="case-image"><Image src="/case-dados.png" alt="Peça da IH Mídias sobre dados e negócio real" fill sizes="(max-width: 800px) 100vw, 45vw" /></div>
        <div className="result-copy"><p className="eyebrow"><span/> O que guia nosso trabalho</p><h2>Dados são só<br/>a ponta.</h2><p>Por trás de cada métrica existe uma pessoa tomando uma decisão. Por isso, olhamos além do painel: conectamos comportamento, mensagem e oportunidade para criar campanhas que movimentam o negócio.</p><div className="result-stat"><strong>Estratégia + criação + mídia</strong><span>Uma operação integrada, do primeiro insight à próxima decisão.</span></div><a className="text-link" href="https://www.instagram.com/ildes.henrique" target="_blank" rel="noreferrer">Veja mais no Instagram <span>↗</span></a></div>
      </section>

      <section className="section method" id="metodo">
        <div className="section-head"><div><p className="eyebrow"><span/> Método IH</p><h2>Clareza em<br/>cada <em>movimento.</em></h2></div><p>Sem fórmulas prontas. Um processo simples, transparente e orientado ao que seu negócio precisa agora.</p></div>
        <div className="steps">{steps.map(([n,title,text]) => <article key={n}><span>{n}</span><div><h3>{title}</h3><p>{text}</p></div></article>)}</div>
      </section>

      <section className="about" id="sobre">
        <div className="about-visual"><Image src="/case-publico.png" alt="Peça da IH Mídias sobre comunicação com o público certo" fill sizes="(max-width: 800px) 100vw, 38vw" /></div>
        <div className="about-copy"><Image src="/ih-logo.png" alt="Logo IH Mídias" width={86} height={86}/><p className="eyebrow"><span/> Sobre a IH Mídias</p><h2>Comunicação<br/>com direção.</h2><p>A IH Mídias nasceu para ajudar donos de negócios a faturar mais com anúncios e estratégias personalizadas. Aqui, cada campanha começa com uma pergunta: o que precisa acontecer no seu negócio?</p><blockquote>“Menos vaidade.<br/><b>Mais resultado real.</b>”</blockquote></div>
      </section>

      <section className="cta">
        <div className="cta-pattern"/><p className="eyebrow"><span/> Vamos conversar?</p><h2>Seu próximo cliente<br/>pode estar a <em>um clique.</em></h2><p>Conte o seu desafio. A gente ajuda a transformar intenção em estratégia — e estratégia em crescimento.</p><a className="button button-dark" href="https://wa.me/554388635665" target="_blank" rel="noreferrer">Chamar no WhatsApp <span>↗</span></a>
      </section>

      <footer><a className="brand" href="#inicio"><Image src="/ih-logo.png" alt="Logo IH Mídias" width={48} height={48}/><span>IH <b>Mídias</b></span></a><p>Estratégia e anúncios online para negócios que querem crescer.</p><div><a href="https://www.instagram.com/ildes.henrique" target="_blank" rel="noreferrer">Instagram ↗</a><a href="https://wa.me/554388635665" target="_blank" rel="noreferrer">WhatsApp ↗</a></div><small>© 2026 IH Mídias. Todos os direitos reservados.</small></footer>
      <a className="whatsapp" href="https://wa.me/554388635665" target="_blank" rel="noreferrer" aria-label="Falar com a IH Mídias no WhatsApp">WA</a>
    </main>
  );
}
