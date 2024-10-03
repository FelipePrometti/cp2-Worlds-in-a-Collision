"use client";

import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

const paginas = {
  orbitas: {
    titulo: 'Órbitas Planetárias e Instabilidade',
    conteudo: 'Velikovsky sugeriu que certos corpos celestes, como Vênus e Marte, passaram próximos à Terra...'
  },
  forcas: {
    titulo: 'Forças Gravitacionais e Eletromagnéticas',
    conteudo: 'Velikovsky propôs que as forças gravitacionais e eletromagnéticas desempenham um papel importante nos encontros...'
  },
  velocidade: {
    titulo: 'Velocidade e Trajetória de Vênus',
    conteudo: 'Velikovsky propôs que Vênus foi ejetada de Júpiter como um cometa, e durante seu caminho...'
  }
};

export default function PaginaDinamica() {
  const router = useRouter();
  const { slug } = router.query;
  const [conteudo, setConteudo] = useState<any>(null);

  useEffect(() => {
    if (slug && typeof slug === 'string') {
      setConteudo(paginas[slug]);
    }
  }, [slug]);

  if (!conteudo) {
    return <p>Carregando...</p>;
  }

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-4">{conteudo.titulo}</h1>
      <p>{conteudo.conteudo}</p>
    </div>
  );
}
