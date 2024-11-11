import ContentWindow from "./ContentWindow";
import HeaderBar from "./HeaderBar";

export default function BorderFrame({ 
    width = '100%', 
    height = '100%', 
    padding = 10,
    innerOffset = { x: 20, y: 10 },
    borderColor = '#6fc0ba',
    shadowColor = '#005b8e',
    showOuterBorder = true,
    children
  }) {
    return (
        <div style={{ width, height, padding }}>
          <div className="relative w-full h-full">
            {showOuterBorder && (
              <div
                className="
                  absolute 
                  w-full h-full
                  border-2 rounded-[3px] 
                  z-10
                "
                style={{
                  borderColor,
                  boxShadow: `0 0 2px ${shadowColor}, inset 0 0 2px ${shadowColor}`
                }}
              />
            )}
            <div>
              <div
                className="
                  absolute 
                  border-2 rounded-[3px]
                  z-20
                  bg-tronBackground
                  p-[4px]
                "
                style={{
                  borderColor,
                  boxShadow: `0 0 2px ${shadowColor}, inset 0 0 2px ${shadowColor}`,
                  left: innerOffset.x,
                  top: innerOffset.y,
                  right: innerOffset.x,
                  bottom: innerOffset.y
                }}
              >
                {/* Render children here */}
                {children}
              </div>
            </div>
          </div>
        </div>
      );
}