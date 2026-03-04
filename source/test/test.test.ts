import {describe, it, expect} from 'vitest';
import {isAWSFifoQueue} from '../index';

describe('isAWSFifoQueue', () => {
	it('should reject invalid FIFO queue names', () => {
		expect(isAWSFifoQueue('someQueue')).toBe(false);
		expect(isAWSFifoQueue('eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee.fifo')).toBe(false);
		expect(isAWSFifoQueue('+++.fifo')).toBe(false);
		expect(isAWSFifoQueue('.fifo')).toBe(false);
		expect(isAWSFifoQueue('@.fifo')).toBe(false);
		expect(isAWSFifoQueue('@.fifo ')).toBe(false);
		expect(isAWSFifoQueue('@.fifo-bar')).toBe(false);
		expect(isAWSFifoQueue('.fifo-queue')).toBe(false);
	});

	it('should accept valid FIFO queue names', () => {
		expect(isAWSFifoQueue('correct-fifo-queue.fifo')).toBe(true);
		expect(isAWSFifoQueue('correct_fifo_queue.fifo')).toBe(true);
		expect(isAWSFifoQueue('correctfifoqueue.fifo')).toBe(true);
		expect(isAWSFifoQueue('1234.fifo')).toBe(true);
		expect(isAWSFifoQueue('correctFifoQueue.fifo')).toBe(true);
		expect(isAWSFifoQueue('eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee.fifo')).toBe(true);
	});
});
