import React from "react";
import "./index.css";

function Sidebar() {
  const menuItems = [
   {label:"Internal Audit", icon:"https://res.cloudinary.com/dkd9zrifr/image/upload/v1733047921/internalaudit_jffgwj.png" },
   {label:"UAT Testing", icon: "https://res.cloudinary.com/dkd9zrifr/image/upload/v1733047921/uat_tdgtif.png"},
   {label: "Intract", icon:"https://res.cloudinary.com/dkd9zrifr/image/upload/v1733047921/link_xnztzh.png"},
    {label:"Queue", icon:"https://res.cloudinary.com/dkd9zrifr/image/upload/v1733047920/queue_yg4sci.png"},
    {label:"Workflow", icon:"https://res.cloudinary.com/dkd9zrifr/image/upload/v1733047920/work_bsahrt.png"},
    {label:"Admin", icon:"https://res.cloudinary.com/dkd9zrifr/image/upload/v1733047920/admin_xqbenm.png"},
    {label:"Asset", icon:"https://res.cloudinary.com/dkd9zrifr/image/upload/v1733047920/asset_sesu3q.png"},
    {label:"Parent", icon:"https://res.cloudinary.com/dkd9zrifr/image/upload/v1733047920/parent_gh6tve.png"},
    {label:"Option One", icon:"https://res.cloudinary.com/dkd9zrifr/image/upload/v1733047918/option1_dn33bi.png"},
    {label:"Option Two", icon:"https://res.cloudinary.com/dkd9zrifr/image/upload/v1733047918/option2_zvznqc.png"},
    {label:"All Accessories", icon:"https://res.cloudinary.com/dkd9zrifr/image/upload/v1733047917/all_wfkn2f.png"},
    {label:"Internal Audit", icon:"https://res.cloudinary.com/dkd9zrifr/image/upload/v1733047917/internal_last_nwwv0j.png"},
    {label:"Decorating", icon:"https://res.cloudinary.com/dkd9zrifr/image/upload/v1733047917/decorate_h7rowr.png"},
    {label:"Presenting", icon:"https://res.cloudinary.com/dkd9zrifr/image/upload/v1733047917/gift_ahqdwm.png"},
  ];

  return (
    <div className="sidebar">
      <img className="risk-image" src="https://res.cloudinary.com/dkd9zrifr/image/upload/v1733045330/riskhawk-logo_1_vyftfv.png" alt="Risk Hawk"/> 
      
      <ul>
        {menuItems.map((item, index) => (
          <li key={index}>
            <img src={item.icon} alt={item.label} className="menu-icon" />
            {item.label}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Sidebar;
