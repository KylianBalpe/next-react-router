import { Button } from "@/components/ui/button";
import { Link } from "react-router";

export default function HomePage() {
  return (
    <div className="flex h-screen w-full flex-col items-center justify-center gap-4">
      <h1 className="text-4xl font-bold">Home Page</h1>
      <Button asChild>
        <Link to="/login">Login</Link>
      </Button>
    </div>
  );
}
