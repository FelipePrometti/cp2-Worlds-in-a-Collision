"use client";
import { useEffect, useState } from 'react';
import Cabecalho from './components/Cabecalho/Cabecalho';
import Menu from './components/Menu/Menu';
import Rodape from './components/Rodape/Rodape';
import '../app/globals.css';

interface NasaImage {
  caption: string;
  image: string;
  date: string;
}

export default function Home() {
  const [nasaImages, setNasaImages] = useState<NasaImage[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch('/api/route');
        const data = await response.json();

        if (response.ok) {
          setNasaImages(data);
        } else {
          setError('Erro ao buscar imagens da NASA');
        }
      } catch (err) {
        setError('Erro ao buscar imagens da NASA');
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  const imageBaseUrl = "https://epic.gsfc.nasa.gov/archive/enhanced/";

  return (
    <div>
      <Cabecalho />
      <Menu />
      <main className="p-4">
        <h2 className="text-2xl font-bold mb-4">Bem-vindo ao Projeto Worlds in Collision</h2>
        <p>Explore as ideias de Immanuel Velikovsky e veja imagens da Terra fornecidas pela NASA.</p>

        <section className="mt-8">
          <h3 className="text-xl font-bold mb-4">Imagens da NASA EPIC (2015-10-31)</h3>
          {loading ? (
            <p>Carregando...</p>
          ) : error ? (
            <p>{error}</p>
          ) : nasaImages.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {nasaImages.map((image) => {
                const dateParts = image.date.split(" ")[0].split("-");
                const imagePath = `${imageBaseUrl}${dateParts[0]}/${dateParts[1]}/${dateParts[2]}/png/${image.image}.png`;
                return (
                  <div key={image.image}>
                    <img src={imagePath} alt={image.caption} className="w-full h-auto" />
                    <p>{image.caption}</p>
                  </div>
                );
              })}
            </div>
          ) : (
            <p>Nenhuma imagem encontrada.</p>
          )}
        </section>
      </main>
      <Rodape />
    </div>
  );
}
