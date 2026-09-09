export function calculateAllocation(totalCapital, corePct, nodeCount) {
  const coreDollars = totalCapital * (corePct / 100);
  const satelliteDollars = totalCapital - coreDollars;
  const perNode = satelliteDollars / nodeCount;

  return {
    coreDollars,
    satelliteDollars,
    perNode,
  };
}

export function remainingToTarget(currentValue, targetValue) {
  return Math.max(0, targetValue - currentValue);
}