type TextContent = {
  main: string;
  accent1?: string;
  accent2?: string;
};

interface HeaderBarProps {
  leftText: TextContent;
  rightText?: string;
}

export default function HeaderBar({ leftText, rightText }: HeaderBarProps) {
  return (
    <div
      className="
        w-full 
        text-white 
        py-[1px]
        relative
        flex
        overflow-hidden
        font-body
        whitespace-nowrap
        border-b border-tron-cyber-green
        border-t border-tron-cyber-green
        text-xs
        bg-black
      "
    >
      <div
        className="
          flex-1
          px-2
          overflow-hidden
          text-ellipsis
        "
      >
        {leftText.main}
        {leftText.accent1 && (
          <span className="text-tronAccent"> {leftText.accent1}</span>
        )}
        {leftText.accent2 && (
          <span className="text-tronText"> {leftText.accent2}</span>
        )}
      </div>
      <div
        className="
          text-right 
          px-2
          flex-shrink-0
        "
      >
        {rightText}
      </div>
    </div>
  );
}
