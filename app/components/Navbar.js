import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-slate-500 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-lg font-bold" style={{ fontFamily: 'Noto+Sans+Mongolian, cursive' }}>
          Inventory MS
        </div>
        <div className="flex space-x-4">
          <Link href="/" legacyBehavior>
            <a className="text-white bg-slate-700 px-4 py-2 rounded-full">Home</a>
          </Link>
          <Link href="/inventory" legacyBehavior>
            <a className="text-white bg-slate-700 px-4 py-2 rounded-full">Inventory</a>
          </Link>
        </div>
        <div>
          <a
            href="mailto:ahmmoallim@gmail.com?subject=Feedback%20for%20Inventory%20MS&body=Please%20enter%20your%20feedback%20here..."
            className="bg-green-500 text-white px-4 py-2 rounded-full"
          >
            Feedback
          </a>
        </div>
      </div>
    </nav>
  );
}
