"use client";

export function ShadowLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-white text-black selection:bg-black/10 selection:text-black p-6 lg:p-12 font-mono">
      <div className="max-w-[1600px] mx-auto">
        {children}
      </div>
      
      <style jsx global>{`
        @font-face {
          font-family: 'Calibre';
          src: url('/fonts/Calibre-Medium.woff2') format('woff2');
          font-weight: 500;
          font-style: normal;
        }
        
        body {
          font-family: 'Calibre', 'San Francisco', 'SF Pro Text', -apple-system, system-ui, sans-serif;
          margin: 0;
          padding: 0;
          color: black;
          line-height: 1.1;
        }
        
        .font-mono {
          font-family: 'SF Mono', 'Fira Code', 'Fira Mono', 'Roboto Mono', monospace;
        }
      `}</style>
    </div>
  );
}