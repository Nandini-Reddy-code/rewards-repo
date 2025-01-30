import { CalculateRewardPoints } from "../CalculateRewardPoints";

describe("CalculateRewardPoints", () => {
  test("CalculateRewardPoints", () => {
  expect(CalculateRewardPoints(120)).toBe(90);
  expect(CalculateRewardPoints(75)).toBe(25);
  expect(CalculateRewardPoints(50)).toBe(0);
  expect(CalculateRewardPoints(200)).toBe(250)
  });
});
