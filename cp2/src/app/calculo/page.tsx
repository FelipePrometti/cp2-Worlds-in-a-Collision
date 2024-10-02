"use client";
import Cabecalho from '../components/Cabecalho/Cabecalho';
import Menu from '../components/Menu/Menu';
import Rodape from '../components/Rodape/Rodape';
import { useState } from 'react';


export default function Calculo() {
  const [orbitalPeriod, setOrbitalPeriod] = useState<number | null>(null);
  const [velocity, setVelocity] = useState<number>(0);
  const [radius, setRadius] = useState<number>(0);

  const handleCalculation = () => {
    if (velocity > 0 && radius > 0) {
      const period = (2 * Math.PI * radius) / velocity;
      setOrbitalPeriod(period);
    }
  };

  return (
    <div>
      <Cabecalho />
      <Menu />
      <main className="p-4">
        <h2 className="text-2xl font-bold mb-4">Cálculo da Órbita Planetária</h2>
        <p>Utilize a fórmula de Velikovsky para calcular o período orbital de um corpo celeste:</p>

        <div className="mt-4">
          <label htmlFor="velocity" className="block mb-2">Velocidade (km/s):</label>
          <input
            type="number"
            id="velocity"
            className="border border-gray-400 p-2 mb-4 w-full"
            value={velocity}
            onChange={(e) => setVelocity(parseFloat(e.target.value))}
          />

          <label htmlFor="radius" className="block mb-2">Raio da Órbita (km):</label>
          <input
            type="number"
            id="radius"
            className="border border-gray-400 p-2 mb-4 w-full"
            value={radius}
            onChange={(e) => setRadius(parseFloat(e.target.value))}
          />

          <button
            className="bg-blue-500 text-white px-4 py-2"
            onClick={handleCalculation}
          >
            Calcular Período Orbital
          </button>

          {orbitalPeriod !== null && (
            <div className="mt-4">
              <h3 className="text-xl">Período Orbital: {orbitalPeriod.toFixed(2)} segundos</h3>
            </div>
          )}
        </div>
      </main>
      <Rodape />
    </div>
  );
}
