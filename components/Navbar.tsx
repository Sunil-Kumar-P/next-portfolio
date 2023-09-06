import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
const Navbar = () => {
  return (
    <nav className="bg-gradient-to-r from-blue-500 to-purple-500 p-4 sticky top-0 z-10 flex items-center p-4">
      <div className="flex items-center p-4">
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu />
        </Button>
      </div>
      <div className="flex w-full justify-end">
        <div className="container flex items-center justify-between">
          <ul className="flex space-x-4">
            <li>
              <Link href="#about">About</Link>
            </li>
            <li>
              <Link href="#education">Education</Link>
            </li>
            <li>
              <Link href="#skills">Skills</Link>
            </li>
            <li>
              <Link href="#projects">Projects</Link>
            </li>
            <li>
              <Link href="#internships">Internships</Link>
            </li>
            <li>
              <Link href="#activities">Activities</Link>
            </li>
            <li>
              <Link href="#achievements">Achievements</Link>
            </li>
            <li>
              <Link href="#personal-details">Personal Details</Link>
            </li>
            <li>
              <Link href="#reference">Reference</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
