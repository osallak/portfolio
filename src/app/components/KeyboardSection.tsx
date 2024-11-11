export default function KeyboardSection() {
    return (
      <div className="w-full h-full flex flex-col justify-end p-4">
        <div className="grid grid-cols-10 gap-1 text-center text-tron-text text-sm">
          {['ESC', '1', '2', '3', '4', '5', '6', '7', '8', '9'].map((key) => (
            <div 
              key={key}
              className="
                border border-tron-darkBorder 
                px-2 py-1
                hover:border-tron-accent 
                hover:shadow-tron
              "
            >
              {key}
            </div>
          ))}
        </div>
        {/* Add more keyboard rows as needed */}
      </div>
    );
  }