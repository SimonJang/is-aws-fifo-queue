/**
 * Validation function
 *
 * @param name - Name of the SQS queue to be validated.
 */
export function isAWSFifoQueue(name: string): boolean {
	return /^[a-zA-Z_-]{1,75}\.fifo$/.test(name);
}
