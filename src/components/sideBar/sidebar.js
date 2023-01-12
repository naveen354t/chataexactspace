import React from "react";
import "./sidebar.css";

const Sidebar = () => {
  return (
    <div className="sidebar-container">
      <div className="person-host-container">
        <div className="person-host">
          B<div className="dot-symbol"></div>
        </div>
        <div>
          <div className="name">Bob</div>
          <div className="role">React Developer At Exact Space</div>
        </div>
      </div>
      <div className="conversation-container">
        <h1>Conversations</h1>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="plus-icon"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      </div>
      <div className="has-container">
        <div className="has-symbol">#</div>
        <div className="organization">Poland Office</div>
      </div>
      <div className="has-container active">
        <div className="has-symbol">#</div>
        <div className="organization">Introductions</div>
      </div>
      <div className="has-container">
        <div className="has-symbol">#</div>
        <div className="organization">India Office</div>
      </div>
    </div>
  );
};

export default Sidebar;
