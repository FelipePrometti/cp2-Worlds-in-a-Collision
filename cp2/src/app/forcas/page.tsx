import Cabecalho from '../components/Cabecalho/Cabecalho';
import Menu from '../components/Menu/Menu';
import Rodape from '../components/Rodape/Rodape';


export default function Forcas() {
  return (
    <div>
      <Cabecalho />
      <Menu />
      <main className="p-4">
        <h2 className="text-2xl font-bold mb-4">Forças Gravitacionais e Eletromagnéticas</h2>
        <p>
          Velikovsky sugeriu que as forças gravitacionais e eletromagnéticas desempenham um papel importante nos encontros entre corpos celestes. Ele propôs que essas forças são responsáveis pela interação entre planetas durante passagens próximas.
        </p>

        <section className="mt-8">
          <h3 className="text-xl font-bold mb-4">Gravidade</h3>
          <p>
            A gravidade é a força que atrai dois corpos com massa um em direção ao outro. Velikovsky acreditava que essa força, junto com a eletromagnética, poderia causar instabilidade nas órbitas planetárias.
          </p>

          <h3 className="text-xl font-bold mt-4 mb-4">Eletromagnetismo</h3>
          <p>
            As forças eletromagnéticas também são importantes. Velikovsky propôs que durante encontros próximos de corpos celestes, correntes elétricas podem fluir, criando interações eletromagnéticas significativas.
          </p>
        </section>
      </main>
      <Rodape />
    </div>
  );
}