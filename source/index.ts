export const isAWSFifoQueue = (name: string): boolean => /^[a-zA-Z_-]{1,75}\.fifo/.test(name);

export default isAWSFifoQueue;
