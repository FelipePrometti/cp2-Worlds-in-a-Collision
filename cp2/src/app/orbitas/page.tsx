import Cabecalho from '../components/Cabecalho/Cabecalho';
import Menu from '../components/Menu/Menu';
import Rodape from '../components/Rodape/Rodape';

export default function Orbitas() {
  return (
    <div>
      <Cabecalho />
      <Menu />
      <main className="p-4">
        <h2 className="text-2xl font-bold mb-4">Órbitas Planetárias e Instabilidade</h2>
        <p>
          Velikovsky sugeriu que certos corpos celestes, como Vênus e Marte, passaram próximos à Terra, perturbando as órbitas planetárias e causando catástrofes globais. Ele acreditava que essas passagens resultavam em instabilidade no sistema solar.
        </p>

        <section className="mt-8">
          <h3 className="text-xl font-bold mb-4">Perturbações Orbitais</h3>
          <p>
            As órbitas planetárias, de acordo com Velikovsky, não eram estáveis em longos períodos de tempo. Ele propôs que encontros planetários periódicos causavam mudanças significativas nas trajetórias dos corpos celestes.
          </p>

          <h3 className="text-xl font-bold mt-4 mb-4">Impactos Históricos</h3>
          <p>
            Velikovsky apontou eventos históricos e mitológicos como evidências desses encontros e instabilidades nas órbitas, sugerindo que esses eventos afetaram civilizações antigas.
          </p>
        </section>
      </main>
      <Rodape />
    </div>
  );
}