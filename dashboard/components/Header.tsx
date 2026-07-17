import Link from 'next/link';

interface HeaderProps {
  isLoading: boolean;
  runCount: number;
}

export function Header({ isLoading, runCount }: HeaderProps) {
  return (
    <header className="flex justify-between items-end border-b-4 border-black pb-4 mb-4">
      <h1 className="font-hand text-6xl font-bold tracking-widest text-[#e3d2b8]" style={{ textShadow: '4px 4px 0 #000' }}>
        ISAAC TRACKER
      </h1>
      <div className="flex items-center gap-6">
        <div className="font-pixel text-2xl text-[#8b0000] bg-[#e3d2b8] px-4 py-1 border-4 border-black shadow-[4px_4px_0_#000]">
          {isLoading ? 'LOADING...' : `${runCount} RUNS FOUND`}
        </div>
        <Link 
          href="/login"
          className="font-pixel text-2xl text-white bg-black hover:bg-[#2a221d] px-6 py-1 border-4 border-white shadow-[4px_4px_0_rgba(0,0,0,1)] transition-colors"
        >
          LOGIN
        </Link>
      </div>
    </header>
  );
}
