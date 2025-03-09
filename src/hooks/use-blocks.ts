import { useState, useCallback } from "react";
import { Block, validateBlock, executeBlocks } from "@/lib/blocks";

/**
 * Custom hook to manage the state and logic of coding blocks.
 * @returns An object containing blocks state, methods to manipulate blocks, and execution logic.
 */
const useBlocks = () => {
  const [blocks, setBlocks] = useState<Block[]>([]);

  /**
   * Adds a new block to the blocks state.
   * @param block - The block to add.
   */
  const addBlock = useCallback((block: Block) => {
    setBlocks((prevBlocks) => [...prevBlocks, block]);
  }, []);

  /**
   * Removes a block from the blocks state by its ID.
   * @param blockId - The ID of the block to remove.
   */
  const removeBlock = useCallback((blockId: string) => {
    setBlocks((prevBlocks) => prevBlocks.filter((block) => block.id !== blockId));
  }, []);

  /**
   * Updates a block's properties in the blocks state.
   * @param blockId - The ID of the block to update.
   * @param updatedProperties - The updated properties for the block.
   */
  const updateBlock = useCallback((blockId: string, updatedProperties: Partial<Block>) => {
    setBlocks((prevBlocks) =>
      prevBlocks.map((block) =>
        block.id === blockId ? { ...block, ...updatedProperties } : block
      )
    );
  }, []);

  /**
   * Validates all blocks in the blocks state.
   * @returns True if all blocks are valid, false otherwise.
   */
  const validateBlocks = useCallback(() => {
    return blocks.every(validateBlock);
  }, [blocks]);

  /**
   * Executes all blocks in the blocks state sequentially.
   */
  const executeAllBlocks = useCallback(async () => {
    if (!validateBlocks()) {
      console.error("Some blocks are invalid. Execution aborted.");
      return;
    }

    await executeBlocks(blocks);
  }, [blocks, validateBlocks]);

  return {
    blocks,
    addBlock,
    removeBlock,
    updateBlock,
    validateBlocks,
    executeAllBlocks,
  };
};

export default useBlocks;
