export function getBuyStatus(node, currentPrice) {

  if (node.pullback) {
    return {
      status:"WATCH",
      color:"blue",
      message:`Buy after ${node.pullback}% pullback`
    };
  }

  if (node.buyMin && node.buyMax) {

    if (currentPrice < node.buyMin)
      return {status:"CHEAP",color:"green",message:"Below buy zone"};

    if (currentPrice <= node.buyMax)
      return {status:"BUY",color:"lime",message:"Inside buy zone"};

    return {status:"WAIT",color:"orange",message:"Above buy zone"};
  }

  if (node.buyMax) {

    if(currentPrice<=node.buyMax)
      return {status:"BUY",color:"lime",message:"Below trigger"};

    return {status:"WAIT",color:"orange",message:"Above trigger"};
  }

  return {
    status:"HOLD",
    color:"gray",
    message:"Monitor"
  };

}