import test from 'ava';
import {isAWSFifoQueue} from '../index';

test('should check on the FIFO queue name', t => {
	t.false(isAWSFifoQueue('someQueue'));
	t.false(isAWSFifoQueue('eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee.fifo'));
	t.false(isAWSFifoQueue('+++.fifo'));
	t.false(isAWSFifoQueue('.fifo'));
	t.false(isAWSFifoQueue('@.fifo'));
	t.false(isAWSFifoQueue('@.fifo '));
	t.false(isAWSFifoQueue('@.fifo-bar'));
	t.false(isAWSFifoQueue('.fifo-queue'));

	t.true(isAWSFifoQueue('correct-fifo-queue.fifo'));
	t.true(isAWSFifoQueue('correct_fifo_queue.fifo'));
	t.true(isAWSFifoQueue('correctfifoqueue.fifo'));
	t.true(isAWSFifoQueue('1234.fifo'));
	t.true(isAWSFifoQueue('correctFifoQueue.fifo'));
	t.true(isAWSFifoQueue('eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee.fifo'));
});
