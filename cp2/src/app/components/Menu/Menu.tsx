import Link from 'next/link';

export default function Menu() {
  return (
    <nav className="bg-gray-700 p-2 text-white">
      <ul className="flex justify-center space-x-4">
        <li><Link href="/">Home</Link></li>
        <li><Link href="/orbitas">Órbitas e Instabilidade</Link></li>
        <li><Link href="/forcas">Forças Gravitacionais</Link></li>
        <li><Link href="/velocidade">Velocidade e Trajetória de Vênus</Link></li>
        <li><Link href="/calculo">Cálculo de Velikovsky</Link></li>
      </ul>
    </nav>
  );
}