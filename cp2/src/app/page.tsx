import Cabecalho from './components/Cabecalho/Cabecalho';
import Menu from './components/Menu/Menu';
import Rodape from './components/Rodape/Rodape';

export default function Home() {
  return (
    <div>
      <Cabecalho />
      <Menu />
      <main className="p-4">
        <h2 className="text-2xl font-bold mb-4">Bem-vindo ao Projeto Worlds in Collision</h2>
        <p>
          Explore as ideias de Immanuel Velikovsky sobre eventos cósmicos que afetaram a Terra no passado. 
          Navegue pelos tópicos de órbitas instáveis, forças gravitacionais e o cálculo de Velikovsky.
        </p>
      </main>
      <Rodape />
    </div>
  );
}