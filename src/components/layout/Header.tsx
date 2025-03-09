import React from "react";
import { Link } from "react-router-dom";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="w-full bg-primary text-primary-foreground shadow-sm">
      <div className="container mx-auto flex items-center justify-between px-4 py-3">
        {/* Logo Section */}
        <div className="flex items-center gap-4">
          <Link to="/" className="text-xl font-bold">
            KidsCode
          </Link>
        </div>

        {/* Navigation Links */}
        <nav className="hidden md:flex items-center gap-6">
          <Link
            to="/workspace"
            className="text-sm font-medium hover:text-primary-foreground/80"
          >
            Workspace
          </Link>
          <Link
            to="/tutorials"
            className="text-sm font-medium hover:text-primary-foreground/80"
          >
            Tutorials
          </Link>
          <Link
            to="/characters"
            className="text-sm font-medium hover:text-primary-foreground/80"
          >
            Characters
          </Link>
          <Link
            to="/dashboard"
            className="text-sm font-medium hover:text-primary-foreground/80"
          >
            Dashboard
          </Link>
        </nav>

        {/* Profile and Achievements */}
        <div className="flex items-center gap-4">
          {/* Achievement Badges */}
          <div className="hidden sm:flex items-center gap-2">
            <Badge variant="default">🏆 5 Achievements</Badge>
            <Badge variant="secondary">⭐ Level 3</Badge>
          </div>

          {/* Profile Avatar */}
          <div className="relative">
            <Avatar className="h-10 w-10">
              <AvatarImage
                src="https://via.placeholder.com/150"
                alt="User Avatar"
              />
              <AvatarFallback>U</AvatarFallback>
            </Avatar>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            aria-label="Open Menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
