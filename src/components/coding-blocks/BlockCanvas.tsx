import React, { useState } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { cn } from "@/lib/utils";

interface Block {
  id: string;
  type: string;
  content: string;
}

interface BlockCanvasProps {
  blocks: Block[];
  onBlocksChange: (updatedBlocks: Block[]) => void;
}

const BlockCanvas: React.FC<BlockCanvasProps> = ({ blocks, onBlocksChange }) => {
  const [localBlocks, setLocalBlocks] = useState(blocks);

  const handleDragEnd = (result: any) => {
    if (!result.destination) return;

    const reorderedBlocks = Array.from(localBlocks);
    const [removed] = reorderedBlocks.splice(result.source.index, 1);
    reorderedBlocks.splice(result.destination.index, 0, removed);

    setLocalBlocks(reorderedBlocks);
    onBlocksChange(reorderedBlocks);
  };

  return (
    <main className="w-full min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <DragDropContext onDragEnd={handleDragEnd}>
          <Droppable droppableId="blockCanvas">
            {(provided) => (
              <div
                ref={provided.innerRef}
                {...provided.droppableProps}
                className={cn(
                  "space-y-4 p-6 rounded-lg border border-border bg-card shadow-sm"
                )}
              >
                {localBlocks.map((block, index) => (
                  <Draggable key={block.id} draggableId={block.id} index={index}>
                    {(provided) => (
                      <div
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        className={cn(
                          "rounded-lg border border-border bg-muted p-4 shadow-sm hover:shadow-md transition-shadow"
                        )}
                      >
                        <p className="text-sm font-medium">{block.content}</p>
                      </div>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </DragDropContext>
      </div>
    </main>
  );
};

export default BlockCanvas;
