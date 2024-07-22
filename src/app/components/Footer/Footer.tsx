import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="flex justify-center items-center px-4 text-center py-4">
      <p>All Rights Reserved © 2024</p>
      <li className="hover:underline"><Link href="/app">View Dapp</Link></li>

    </footer>
  );
}
