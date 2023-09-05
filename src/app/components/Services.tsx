type ServicesProps = {
  title?: string;
};

export default function Services({ title = "Serviços" }: ServicesProps) {
  return (
    <>
      <h1 className="c-section__title">
        <span>{title}</span>
      </h1>
      <ul className="c-services">
        <li className="c-services__item">
          <h3>Know How</h3>
          <p>
            Explico os avanços nos tratamentos e técnicas odontológicas - e como
            os equipamentos, materiais e suprimentos ajudam os profissionais da
            área a oferecer os tratamentos e serviços, identificando formas de
            melhorar a eficiência e o serviço da prática.
          </p>
        </li>
        <li className="c-services__item">
          <h3>Expertise</h3>
          <p>
            Explico as funções dos produtos aos clientes e forneço-lhes
            informações sobre o equipamento em questão.
          </p>
        </li>
        <li className="c-services__item">
          <h3>Vendedor</h3>
          <p>
            Negocio produtos odontológicos, como máquinas de raio-x,
            equipamentos de laboratório, consultórios, equipamentos de
            esterilização e materiais para próteses dentárias.
          </p>
        </li>
        <li className="c-services__item">
          <h3>Prospecção</h3>
          <p>
            Apresentar informações sobre novos produtos ou serviços aos
            dentistas, através de demonstrações no consultório ou em feiras.
          </p>
        </li>
        <li className="c-services__item">
          <h3>Negociação</h3>
          <p>
            Preparar orçamentos para equipamentos, kits acadêmicos e materiais,
            baseados nos custos fornecidos pelos fabricantes ou fornecedores.
          </p>
        </li>
        <li className="c-services__item">
          <h3>Business Hunter</h3>
          <p>
            Identifico oportunidades de novos negócios, contactando potenciais
            clientes, pesquisando as suas necessidades e apresentando soluções.
          </p>
        </li>
      </ul>
    </>
  );
}
