export default function TronBorder({ children, className = "" }) {
    return (
      <div className={`relative ${className}`}>
        <div className="absolute w-full h-full border-2 border-tronAccent rounded-md z-10"
          style={{
            boxShadow: '0 0 2px #1B8CD8, inset 0 0 2px #1B8CD8'
          }}
        />
        <div className="absolute w-[calc(100%-4px)] h-[calc(100%-4px)] m-[2px] border-2 border-tronAccent rounded-[2px] z-20"
          style={{
            boxShadow: '0 0 2px #1B8CD8, inset 0 0 2px #1B8CD8'
          }}
        />
        <div className="relative z-30 h-full">
          {children}
        </div>
      </div>
    );
  }
