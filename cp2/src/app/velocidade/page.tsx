import Cabecalho from '../components/Cabecalho/Cabecalho';
import Menu from '../components/Menu/Menu';
import Rodape from '../components/Rodape/Rodape';

export default function Velocidade() {
  return (
    <div>
      <Cabecalho />
      <Menu />
      <main className="p-4">
        <h2 className="text-2xl font-bold mb-4">Velocidade e Trajetória de Vênus</h2>
        <p>
          Velikovsky propôs que Vênus foi ejetada de Júpiter como um cometa, e durante seu caminho, passou próximo à Terra, causando grandes catástrofes. Ele sugeriu que a velocidade inicial de Vênus foi drasticamente alterada durante essas passagens.
        </p>

        <section className="mt-8">
          <h3 className="text-xl font-bold mb-4">Trajetória de Vênus</h3>
          <p>
            A trajetória de Vênus foi, segundo Velikovsky, altamente elíptica em seu estado inicial como cometa. Ele acreditava que o planeta adquiriu sua órbita atual após múltiplas interações com a Terra e outros planetas.
          </p>

          <h3 className="text-xl font-bold mt-4 mb-4">Mudanças de Velocidade</h3>
          <p>
            Velikovsky afirmou que a velocidade de Vênus foi alterada significativamente ao longo do tempo, estabilizando-se apenas após as interações gravitacionais e eletromagnéticas com outros planetas.
          </p>
        </section>
      </main>
      <Rodape />
    </div>
  );
}