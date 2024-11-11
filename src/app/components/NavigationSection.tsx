export default function NavigationSection() {
    const menuItems = [
      { id: 'projects', label: 'PROJECTS', status: 'ACTIVE' },
      { id: 'skills', label: 'SKILLS', status: 'ACTIVE' },
      { id: 'experience', label: 'EXPERIENCE', status: 'ACTIVE' },
      { id: 'contact', label: 'CONTACT', status: 'ACTIVE' },
    ];
  
    return (
      <div className="p-6 space-y-3">
        {menuItems.map((item) => (
          <div 
            key={item.id}
            className="
              flex items-center justify-between 
              px-4 py-2
              border border-tron-darkBorder
              hover:border-tron-accent hover:shadow-tron
              cursor-pointer transition-all duration-300
              group
            "
          >
            <div className="flex items-center gap-4">
              <span className="text-tron-accent group-hover:text-tron-blue">&gt;</span>
              <span className="text-tron-text group-hover:text-tron-blue">{item.label}</span>
            </div>
            <span className="text-tron-gray text-sm">{item.status}</span>
          </div>
        ))}
      </div>
    );
  }