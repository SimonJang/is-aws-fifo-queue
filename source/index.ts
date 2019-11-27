/**
 * Validation function
 *
 * @param name - Name of the SQS queue to be validated.
 */
export function isAWSFifoQueue(name: string): boolean {
	return /^[a-zA-Z0-9_-]{1,75}\.fifo$/.test(name);
}
