import React from "react";
import "./index.css";

function ActionLauncher() {
  const actions = ["Add Action", "Fee Reversal", "Retail Onboarding", "Address Update"];

  return (
    <div className="action-launcher">
      <h3>Action Launcher</h3>
      <ul>
        {actions.map((action, index) => (
          <li key={index}>
            <button>{action}</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ActionLauncher;
