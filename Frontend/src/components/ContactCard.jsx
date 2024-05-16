import React, { useState } from "react";
import "./contactCard.css";
import userIcon from "/public/user_png.png";
function ContactCard({ contact }) {
  const [name, setName] = useState("");
  return (
    <>
      <div className="wrapper">
        <div className="searchBar flex items-center">
          <input
            className=" w-full"
            placeholder="Search contact"
            type={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
      </div>
      <div className="cardContainer">
        {contact
          .filter((item) => {
            return name === ""
              ? item
              : item.name.toLowerCase().includes(name.toLowerCase());
          })
          .map((cn, i) => (
            <div className="cards">
              <img src={userIcon} alt="" />
              <div className=" flex flex-col justify-between gap-3 p-2 w-full">
                <p className="contactname self-center" key={i}>
                  {cn.name}
                </p>
                <p className=" flex justify-between items-center">
                  <p className="contactnumber" key={i}>
                    {cn.number}
                  </p>
                  <p className="contactemail" key={i}>
                    {cn.email}
                  </p>
                </p>
              </div>
            </div>
          ))}
      </div>
    </>
  );
}

export default ContactCard;
