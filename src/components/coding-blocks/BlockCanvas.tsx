import React, { useState } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { cn } from "@/lib/utils";

interface BlockData {
  id: string;
  type: 'movement' | 'sound' | 'control' | 'event';
  content: string;
}

interface BlockCanvasProps {
  blocks: BlockData[];
  onBlocksChange: (blocks: BlockData[]) => void;
}

const BlockCanvas: React.FC<BlockCanvasProps> = ({ blocks, onBlocksChange }) => {
  const handleDragEnd = (result: any) => {
    if (!result.destination) return;

    const items = Array.from(blocks);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    onBlocksChange(items);
  };

  return (
    <div className="p-4 bg-background rounded-lg border border-border">
      <DragDropContext onDragEnd={handleDragEnd}>
        <Droppable droppableId="blocks">
          {(provided) => (
            <div
              {...provided.droppableProps}
              ref={provided.innerRef}
              className="space-y-2"
            >
              {blocks.map((block, index) => (
                <Draggable key={block.id} draggableId={block.id} index={index}>
                  {(provided) => (
                    <div
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                    >
                      <Block
                        id={block.id}
                        type={block.type}
                        content={block.content}
                      />
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
  );
};

export default BlockCanvas;