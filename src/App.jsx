
import { useState } from "react";
import "./App.css";
import { NODES } from "./data/nodes";
import { calculateAllocation } from "./engine/allocationEngine";
5 import { rankOpportunities } from "./engine/pulseEngine";
export default function App() {
  const [capital, setCapital] = useState(100000);
  const [corePct, setCorePct] = useState(60);
const prices={

CCJ:41,
ORCL:150,
CEG:182,
NVDA:172,
MSFT:560,
GOOGL:310,
AMZN:265,
META:920,
AAPL:310,
TSLA:410,

};
  const allocation = calculateAllocation(capital, corePct, NODES.length);

  const coreNodes = NODES.filter(n => n.portfolio === "core");
  const civNodes = NODES.filter(n => n.portfolio === "civilization");

const ranked = rankOpportunities(NODES, prices);
const topFive = ranked.slice(0, 5);
  return (
    <div className="app">
      <h1>🌍 Civilization Stack</h1>
      <p className="subtitle">Mission Control v4.0</p>

      <div className="card">
        <label>Total Portfolio Value</label>
        <input
          type="number"
          value={capital}
          onChange={(e)=>setCapital(Number(e.target.value))}
        />

        <label>Core Allocation: {corePct}%</label>

        <input
          type="range"
          min="20"
          max="80"
          value={corePct}
          onChange={(e)=>setCorePct(Number(e.target.value))}
        />
      </div>

      <div className="grid">
        <div className="card stat">
          <h3>Core</h3>
          <h2>${allocation.coreDollars.toLocaleString()}</h2>
        </div>

        <div className="card stat">
          <h3>Satellite</h3>
          <h2>${allocation.satelliteDollars.toLocaleString()}</h2>
        </div>

        <div className="card stat">
          <h3>Per Node</h3>
          <h2>${allocation.perNode.toLocaleString(undefined,{maximumFractionDigits:0})}</h2>
        </div>
      </div>
<div className="section">

  <h2>🔥 Opportunity Radar</h2>

  {topFive.map(node => (

    <div key={node.id} className="node">

      <div>
        <strong>{node.ticker}</strong>
        <p>{node.buy.message}</p>
      </div>

      <div>
        {node.score}
      </div>

    </div>

  ))}

</div>
      <div className="section">
        <h2>🚀 Big 7 Core</h2>

        {coreNodes.map(node=>(
          <div key={node.id} className="node">
            <div>
              <strong>{node.ticker}</strong>
              <p>{node.mission}</p>
            </div>

            <span>{node.dependency}/100</span>
          </div>
        ))}
      </div>

      <div className="section">
        <h2>🏗 Civilization Infrastructure</h2>

        {civNodes.map(node=>(
          <div key={node.id} className="node">
            <div>
              <strong>{node.ticker}</strong>
              <p>{node.mission}</p>
            </div>

            <span>{node.dependency}/100</span>
          </div>
        ))}
      </div>
    </div>
  );
}