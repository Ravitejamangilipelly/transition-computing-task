import React from "react";
import "./index.css";

function ProfileCard() {
  return (
    <div className="profile-sec">
    <div className="profile-card">
      <p className="profile-text-b">CB</p>
      <h1 className="hs-text">Hannibal Smith</h1>
      <p>1 Market Street San Francisco, CA 94105</p>

      <div className="profile-info">
        <p><strong>Customer ID:</strong> 12345</p>
        <p><strong>Email:</strong> rachel@sample.com</p>
        <p><strong>Phone:</strong> 8051289805</p>
        <p><strong>Loyalty Tier:</strong> Silver</p>
      </div>
    </div>
    </div>
  );
}

export default ProfileCard;
