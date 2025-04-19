import { navMenu } from "@/frontend/constant/nav-menu";
import { Button } from "@/frontend/components/ui/button";
import { Link } from "react-router";

export default function Header() {
  return (
    <header className="flex h-16 w-full items-center border-b align-middle shadow-sm">
      <div className="container mx-auto flex flex-row items-center gap-2 px-4">
        {navMenu.map((menu) => (
          <Button variant="ghost" asChild key={menu.link}>
            <Link to={menu.link}>{menu.label}</Link>
          </Button>
        ))}
      </div>
    </header>
  );
}
