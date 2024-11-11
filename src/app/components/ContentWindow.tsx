import BorderFrame from "./BorderFrame";
import HeaderBar from "./HeaderBar";

export default function ContentWindow({ 
    title = "README", 
    extension = ".TXT", 
    endText = "END. PROGRAM",
    children
  }) {
    return (
      <div className="w-full h-full flex flex-col">
        <BorderFrame showOuterBorder={false}>
          <div className="w-full h-full border border-tron-cyber-green flex flex-col">
            <HeaderBar 
              leftText={{
                main: title,
                accent1: extension,
                accent2: "",
              }}
              rightText={endText}
            />
            <div className="flex-1 overflow-auto">
              {children}
            </div>
          </div>
        </BorderFrame>
      </div>
    );
}