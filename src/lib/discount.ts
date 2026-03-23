export type DiscountInfo = {
  percent: number;
  spotsLeft: number;
};

export const getDiscountInfo = (count: number): DiscountInfo => {
  const remaining = Math.max(10 - count, 0);
  if (count < 10) {
    return { percent: 20, spotsLeft: remaining };
  }
  return { percent: 10, spotsLeft: 0 };
};

export const getCouponLabel = (percent: number) => {
  if (percent >= 20) return "AUTO20";
  return "AUTO10";
};
