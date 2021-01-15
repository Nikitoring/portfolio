export function getInLimit(value, min, max) {
  const theValue = Math.max(min, Math.min(value, max));

  return Number(theValue.toFixed(3));
}