const handler = {
  calls: 0,
  returned: null,
  wasCalledWith: [],
  get: function(target, prop) {
    if (prop === "callCount") {
      return () => this.calls;
    }
    if (prop === "returned") {
      return args => this.returned === args;
    }
    if (prop === "wasCalledWith") {
      return arg => this.wasCalledWith.includes(arg);
    }
    return 0;
  },
  apply: function(target, thisArg, argumentsList) {
    this.calls++;
    this.returned = target(...argumentsList);
    this.wasCalledWith = [...this.wasCalledWith, ...argumentsList];
    return target(...argumentsList);
  }
};

function customSpy(fn) {
  return new Proxy(fn, handler);
}

function returns1() {
  return 1;
}
test("", () => {
  const spy = customSpy(returns1);
  expect(spy.callCount()).toBe(0);
  expect(spy.returned(1)).toBeFalsy();
  expect(spy.wasCalledWith("hello")).toBeFalsy();
  spy("hello", "hi", "howdy");
  expect(spy.callCount()).toBe(1);
  expect(spy.returned(1)).toBeTruthy();
  expect(spy.wasCalledWith("hello")).toBeTruthy();
});
