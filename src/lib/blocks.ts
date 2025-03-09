export type BlockType = "movement" | "sound" | "control" | "event";

export interface Block {
  id: string;
  type: BlockType;
  content: string;
  properties?: Record<string, any>;
}

export const blockDefinitions: Record<BlockType, { label: string; color: string }> = {
  movement: {
    label: "Movement",
    color: "bg-blue-500 text-white",
  },
  sound: {
    label: "Sound",
    color: "bg-green-500 text-white",
  },
  control: {
    label: "Control",
    color: "bg-yellow-500 text-black",
  },
  event: {
    label: "Event",
    color: "bg-red-500 text-white",
  },
};

/**
 * Generates a new block with a unique ID.
 * @param type - The type of the block.
 * @param content - The content or label of the block.
 * @param properties - Optional additional properties for the block.
 * @returns A new block object.
 */
export const createBlock = (
  type: BlockType,
  content: string,
  properties: Record<string, any> = {}
): Block => {
  return {
    id: crypto.randomUUID(),
    type,
    content,
    properties,
  };
};

/**
 * Validates a block to ensure it adheres to the required structure.
 * @param block - The block to validate.
 * @returns True if the block is valid, false otherwise.
 */
export const validateBlock = (block: Block): boolean => {
  return (
    typeof block.id === "string" &&
    Object.keys(blockDefinitions).includes(block.type) &&
    typeof block.content === "string"
  );
};

/**
 * Executes a sequence of blocks.
 * @param blocks - The array of blocks to execute.
 * @returns A promise that resolves when all blocks are executed.
 */
export const executeBlocks = async (blocks: Block[]): Promise<void> => {
  for (const block of blocks) {
    if (!validateBlock(block)) {
      console.error(`Invalid block: ${block.id}`);
      continue;
    }

    switch (block.type) {
      case "movement":
        console.log(`Executing movement block: ${block.content}`);
        break;
      case "sound":
        console.log(`Playing sound: ${block.content}`);
        break;
      case "control":
        console.log(`Control action: ${block.content}`);
        break;
      case "event":
        console.log(`Event triggered: ${block.content}`);
        break;
      default:
        console.warn(`Unknown block type: ${block.type}`);
    }
  }
};
