import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-blue-600 text-white p-4">
      <ul className="flex gap-4">
        <li><Link href="#sobre">Sobre</Link></li>
        <li><Link href="#projetos">Projetos</Link></li>
        <li><Link href="#contato">Contato</Link></li>
      </ul>
    </nav>
  );
}
