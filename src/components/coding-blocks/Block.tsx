import React from "react";
import { cn } from "@/lib/utils";

interface BlockProps {
  id: string;
  type: "movement" | "sound" | "control" | "event";
  content: string;
  onClick?: () => void;
}

const Block: React.FC<BlockProps> = ({ id, type, content, onClick }) => {
  const blockStyles = {
    movement: "bg-blue-500 text-white",
    sound: "bg-green-500 text-white",
    control: "bg-yellow-500 text-black",
    event: "bg-red-500 text-white",
  };

  return (
    <div
      id={id}
      className={cn(
        "rounded-lg border border-border p-4 shadow-sm hover:shadow-md transition-shadow cursor-pointer",
        blockStyles[type]
      )}
      onClick={onClick}
    >
      <p className="text-sm font-medium">{content}</p>
    </div>
  );
};

export default Block;
