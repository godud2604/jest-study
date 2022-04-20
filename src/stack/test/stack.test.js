const Stack = require("../stack");

describe('Stack', () => {
  let stack;

  beforeEach(() => {
    stack = new Stack([]);
  });

  it('is created empty', () => {
    expect(stack.size()).toBe(0);
  });

  it('push', () => {
    stack.push('사과');
    expect(stack.size()).toBe(1);
  });

  describe('pop', () => {
    it('throws an error if stack is empty', () => {
      expect(() => {
        stack.pop();
      }).toThrow('Stack is empty');
    });

    it('returns the last pushed and removes it from the stack', () => {
      stack.push('바나나');
      stack.push('사과');

      expect(stack.pop()).toBe('사과');
      expect(stack.size()).toBe(1);
    });
  });

  // peek : 옅보다 , 배열 안의 인자들을 확인할 때
  describe('peek', () => {
    it('throws an error if stack is empty', () => {
      expect(() => {
        stack.peek();
      }).toThrow('Stack is empty');
    });

    it('returns the last pushed item but keeps it in the stack', () => {
      stack.push('바나나');
      stack.push('사과');

      expect(stack.peek()).toBe('사과');
      expect(stack.size()).toBe(2);
    });
  });
});
