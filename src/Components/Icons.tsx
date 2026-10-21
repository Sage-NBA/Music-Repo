import { Home, Library } from "lucide-react";
import { Link } from "react-router-dom";

const icons = [
  {
    title: "Home",
    icon: Home,
    path: "/",
  },
  {
    title: "Library",
    icon: Library,
    path: "/Library",
  },
];

function Icons() {
  return (
    <div className="w-fit h-full border-r bg-gray-300 border-black px-5">
      {icons.map((sam) => {
        const Icon = sam.icon;

        return (
          <div>
            <Link to={sam.path} className="flex  py-5 gap-2 " key={sam.title}>
              <Icon />
              <p>{sam.title}</p>
            </Link>
          </div>
        );
      })}
    </div>
  );
}

export default Icons;
