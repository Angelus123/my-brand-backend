import { truth } from "../truthy/truthy";
describe("testing general function with jest", () => {
  it("compare true and true", () => {
    const resp = truth();
    expect(resp).toEqual(true);
  });
});
