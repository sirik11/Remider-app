import React from "react";
import "../css/styles.css";
const NavBar = () => {
  const date = new Date();
  const options = { weekday: "long", month: "long", day: "numeric" };
  return (
    <div>
      <div className="nav">
        <img
          src="https://img.freepik.com/premium-photo/freelancer-workspace-flat-lay-paper-page-attached-clipboard-glowing-phone-screen-table-desk-workflow-process-home-office_93633-1285.jpg?size=626&ext=jpg&uid=R74358115&ga=GA1.1.1885561231.1681220908&semt=ais"
          alt="todo"
        />
        {/* Image Author : https://www.freepik.com/author/attostock */}
        <div className="date">
          <p> {date.toLocaleDateString("en-US", options)} </p>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
