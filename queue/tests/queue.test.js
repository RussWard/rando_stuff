const Queue = require('../queue.js');


let queue;
describe('Queue', () => {
  beforeEach(() => {
    queue = new Queue();
    [1, 2, 3, 4].forEach(val => queue.push(val))
  })
  it('returns the values in the order they were passed in', () => {
    expect(queue.pop()).toBe(1)
    expect(queue.pop()).toBe(2)
    expect(queue.pop()).toBe(3)
    expect(queue.pop()).toBe(4)
  })
  it('holds in the outStack the values that have not yet been poped', () => {
    queue.pop();
    expect(queue.outStack).toEqual(expect.arrayContaining([4, 3, 2]));
  })
  it('adds a value to the bottom of the outStack with the push method', () => {
    queue.push(5);
    expect(queue.outStack).toEqual(expect.arrayContaining([5, 4, 3, 2, 1]));
  })
})