export default function HeaderBar({
    leftText = {
      main: 'ENCOM TOUCH APP',
      accent1: 'OS',
      accent2: '12',
    },
    rightText = 'OS | 012',
  }) {
    return (
      <div
        className="
          w-full 
          text-white 
          py-[1px]
          px-[2px]
          relative
          flex
          overflow-hidden
          font-body
          whitespace-nowrap
          border-b border-tron-cyber-green
        "
      >
        <div
          className="
            flex-1
            bg-black 
            -ml-[5px] 
            px-2
            overflow-hidden
            text-ellipsis
          "
        >
          {leftText.main}{' '}
          <span className="text-tronAccent">{leftText.accent1}</span>
          <span className="text-tronText">{leftText.accent2}</span>
        </div>
        <div
          className="
            bg-black 
            text-right 
            -mr-[5px] 
            px-2
            ml-1
            flex-shrink-0
          "
        >
          {rightText}
        </div>

      </div>
    );
  }