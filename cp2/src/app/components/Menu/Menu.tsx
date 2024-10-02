import Link from "next/link"

export default function Menu(){
    return(
        <nav>
        <ul>
            <li> <Link href="/">Home</Link> </li>
            <li> <Link href="/calculo">Calculo</Link> </li>
            <li> <Link href="/forcas">Forças Gravitacionais e Eletromagnéticas</Link> </li>
            <li> <Link href="/orbitas">Órbitas Planetárias e Instabilidade</Link> </li>
            <li> <Link href="/velocidade">Velocidade e Trajetória de Vênus</Link> </li>           

        </ul>
    </nav>
    )
}