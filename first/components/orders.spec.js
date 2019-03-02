const getAllOrders = require('./orders');
describe('Test Cases for function ', () => {
  it('first test case', () => {
    const test = getAllOrders(2);
    expect(test).toEqual(3);
  })

  it('first test case', () => {
    const test = getAllOrders(5);
    expect(test).toEqual(6);
  })
})