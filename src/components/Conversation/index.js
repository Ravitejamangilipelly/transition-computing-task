import React from "react";
import "./index.css";

function Conversation() {
  return (
    <div className="conversation">
      <h3>Conversation</h3>
      <div className="message">
        <p><strong>Rachel Adams</strong> <span>9:08 PM</span></p>
        <p>Lorem ipsum dolor sit amet consectetur. Et tincidunt odio vivamus ac aliquam. Placerat maecenas quis ut elementum praesent imperdiet. Egestas mattis pellentesque nibh dui sed malesuada dolor eget ipsum. Molestie nam morbi id arcu volutpat arcu.</p>
      </div>
      <div className="message reply">
        <p><strong>You</strong> <span>9:10 PM</span></p>
        <p>Lorem ipsum dolor sit amet consectetur. Et tincidunt odio vivamus ac aliquam. Placerat maecenas quis ut elementum praesent imperdiet. Egestas mattis pellentesque nibh dui sed malesuada dolor eget ipsum. Molestie nam morbi id arcu volutpat arcu.</p>
      </div>
    </div>
  );
}

export default Conversation;
