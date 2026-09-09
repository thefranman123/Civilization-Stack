import { getBuyStatus } from "./buyZoneEngine";

export function rankOpportunities(nodes, prices){

  return nodes.map(node=>{

    const price=prices[node.ticker]??null;

    const buy=getBuyStatus(node,price);

    let score=node.dependency;

    if(buy.status==="BUY") score+=20;
    if(buy.status==="CHEAP") score+=30;
    if(node.portfolio==="core") score+=5;

    return{
      ...node,
      currentPrice:price,
      buy,
      score
    };

  }).sort((a,b)=>b.score-a.score);

}