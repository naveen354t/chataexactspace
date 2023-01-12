import React, { useState } from "react";
import Sidebar from "../sideBar/sidebar";
import InputEmoji from "react-input-emoji";
import { v4 as uuidv4 } from "uuid";
import colorArray from "../chatBox/colors";
import "./chat.css";

const user_list = ["Alan", "Bob", "Carol", "Dean", "Elin"];

const date = new Date();
const showTime = date.getHours() + ":" + date.getMinutes();

const Chat = () => {
  const [text, setText] = useState("");
  const [messages, setMessages] = useState([]);

  if (text.length === 1 && text.charAt(0) === "@") {
  }

  const handleCount = (id) => {
    //console.log(id);
    let temp = messages.map((item) => {
      if (item.id === id) {
        return { ...item, count: item.count + 1 };
      }
      return item;
    });
    setMessages(temp);
  };

  function handleOnEnter(text) {
    const results = user_list[Math.floor(Math.random() * user_list.length)];
    const colors = colorArray[Math.floor(Math.random() * colorArray.length)];
    const newmessage = {
      id: uuidv4(),
      messages: text,
      userName: results,
      time: showTime,
      color: colors,
      count: 0,
    };
    setMessages([...messages, newmessage]);
  }
  return (
    <div className="app-container">
      <Sidebar />
      <div className="ChatBox-container">
        <div className="chat-header">
          <div className="chat-header-sub">
            <div>
              <div className="title">Introductions</div>
              <div className="title-sub">
                This Channel Is Company Wide Chatter
              </div>
            </div>
            <div className="profile-container">
              <div> 3|100</div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="profile"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zM4 19.235v-.11a6.375 6.375 0 0112.75 0v.109A12.318 12.318 0 0110.374 21c-2.331 0-4.512-.645-6.374-1.766z"
                />
              </svg>
            </div>
          </div>
          <hr />
        </div>
        <div className="chat-body">
          {messages.map((items) => {
            return (
              <ul key={items.id} className="chat-main">
                <li>
                  <div className="chatbody-header">
                    <div
                      className="user-n"
                      style={{ backgroundColor: items.color }}
                    >
                      {items.userName.charAt(0)}
                    </div>
                    <p className="user-name">{items.userName}</p>
                    <h4>{items.time}</h4>
                  </div>
                  <span className="messages">{items.messages}</span>

                  <button
                    className="count"
                    onClick={() => handleCount(items.id)}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="like-icon"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6.633 10.5c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V3a.75.75 0 01.75-.75A2.25 2.25 0 0116.5 4.5c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 01-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 00-1.423-.23H5.904M14.25 9h2.25M5.904 18.75c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 01-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 10.203 4.167 9.75 5 9.75h1.053c.472 0 .745.556.5.96a8.958 8.958 0 00-1.302 4.665c0 1.194.232 2.333.654 3.375z"
                      />
                    </svg>
                  </button>
                  <span>{items.count}</span>
                </li>
              </ul>
            );
          })}
        </div>
        <div className="input">
          <InputEmoji
            value={text}
            onChange={setText}
            cleanOnEnter
            onEnter={handleOnEnter}
            placeholder="Type a message"
            theme="dark"
          />
        </div>
      </div>
    </div>
  );
};

export default Chat;
