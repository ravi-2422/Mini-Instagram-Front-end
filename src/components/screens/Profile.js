import React from "react";

const Profile = () => {
  return (
    <div style={{
      maxWidth:"660px",
      margin:"0px auto"
    }} >
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          margin: "18px 0px",
          borderBottom: "1px solid grey",
        }}
      >
        <div>
          <img
            style={{ width: "160px", height: "160px", borderRadius: "80px" }}
            src="https://images.unsplash.com/photo-1519625594242-7db544018926?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjJ8fHBlcnNvbnxlbnwwfDJ8MHx8&auto=format&fit=crop&w=500&q=60"
          />
        </div>
        <div>
          <h1>Ragni singh</h1>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              width: "108%",
            }}
          >
            <h6>40 posts</h6>
            <h6>40 followers</h6>
            <h6>40 following</h6>
          </div>
        </div>
      </div>

      <div className="gallery">
        <img className="item" src="https://images.unsplash.com/photo-1519625594242-7db544018926?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjJ8fHBlcnNvbnxlbnwwfDJ8MHx8&auto=format&fit=crop&w=500&q=60"/>
        <img className="item" src="https://images.unsplash.com/photo-1519625594242-7db544018926?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjJ8fHBlcnNvbnxlbnwwfDJ8MHx8&auto=format&fit=crop&w=500&q=60"/>
        <img className="item" src="https://images.unsplash.com/photo-1519625594242-7db544018926?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjJ8fHBlcnNvbnxlbnwwfDJ8MHx8&auto=format&fit=crop&w=500&q=60"/>
        <img className="item" src="https://images.unsplash.com/photo-1519625594242-7db544018926?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjJ8fHBlcnNvbnxlbnwwfDJ8MHx8&auto=format&fit=crop&w=500&q=60"/>
        <img className="item" src="https://images.unsplash.com/photo-1519625594242-7db544018926?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjJ8fHBlcnNvbnxlbnwwfDJ8MHx8&auto=format&fit=crop&w=500&q=60"/>
        <img className="item" src="https://images.unsplash.com/photo-1519625594242-7db544018926?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjJ8fHBlcnNvbnxlbnwwfDJ8MHx8&auto=format&fit=crop&w=500&q=60"/>
        <img className="item" src="https://images.unsplash.com/photo-1519625594242-7db544018926?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjJ8fHBlcnNvbnxlbnwwfDJ8MHx8&auto=format&fit=crop&w=500&q=60"/>
        <img className="item" src="https://images.unsplash.com/photo-1519625594242-7db544018926?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjJ8fHBlcnNvbnxlbnwwfDJ8MHx8&auto=format&fit=crop&w=500&q=60"/>
        <img className="item" src="https://images.unsplash.com/photo-1519625594242-7db544018926?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjJ8fHBlcnNvbnxlbnwwfDJ8MHx8&auto=format&fit=crop&w=500&q=60"/>
        <img className="item" src="https://images.unsplash.com/photo-1519625594242-7db544018926?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjJ8fHBlcnNvbnxlbnwwfDJ8MHx8&auto=format&fit=crop&w=500&q=60"/>
        <img className="item" src="https://images.unsplash.com/photo-1519625594242-7db544018926?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjJ8fHBlcnNvbnxlbnwwfDJ8MHx8&auto=format&fit=crop&w=500&q=60"/>
        <img className="item" src="https://images.unsplash.com/photo-1519625594242-7db544018926?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjJ8fHBlcnNvbnxlbnwwfDJ8MHx8&auto=format&fit=crop&w=500&q=60"/>
        <img className="item" src="https://images.unsplash.com/photo-1519625594242-7db544018926?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjJ8fHBlcnNvbnxlbnwwfDJ8MHx8&auto=format&fit=crop&w=500&q=60"/>
        
      </div>
    </div>
  );
};

export default Profile;
