import { useNavigate } from "react-router"

export default function SidebarButton({ label, active, path  }) {
   
    let navigate = useNavigate();

    return (

    <button
      onClick={() => navigate(path)}

      className={`
        w-full text-left sm:w-auto sm:text-center
        px-4 py-2 sm:px-6 sm:py-2 rounded-full font-bold shadow-md border-2
        transition-all duration-200
        text-base sm:text-lg
        ${active
          ? 'bg-gradient-to-br from-purple-600 via-blue-500 to-purple-950 text-white border-purple-300 scale-105'
          : ' hover:bg-blue-950 text-white border-purple-300 hover:scale-105 hover:border-white'}
      `}
    >
      {label}
    </button>
  );
}
