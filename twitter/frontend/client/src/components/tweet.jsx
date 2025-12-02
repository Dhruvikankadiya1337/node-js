// // src/components/tweet.jsx
// import React, { useState } from "react";
// 

// const Tweet = ({ tweet, handleEdit, handleDelete }) => {
//   const [isEditing, setIsEditing] = useState(false);
//   const [updatedText, setUpdatedText] = useState(tweet.tweet);

//   const saveEdit = () => {
//     handleEdit(tweet.id, updatedText);
//     setIsEditing(false);
//   };

//   return (
//     <div className="tweet">
//       <div className="tweet-content">
//         <h4>@{tweet.username}</h4>
//         {isEditing ? (
//           <>
//             <textarea
//               value={updatedText}
//               onChange={(e) => setUpdatedText(e.target.value)}
//             />
//             <button className="edit-btn" onClick={saveEdit}>💾 Save</button>
//           </>
//         ) : (
//           <p>{tweet.tweet}</p>
//         )}
//         <div className="tweet-actions">
//           {!isEditing && (
//             <button className="edit-btn" onClick={() => setIsEditing(true)}>✏️</button>
//           )}
//           <button className="delete-btn" onClick={() => handleDelete(tweet.id)}>🗑️</button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Tweet;






// import React, { useState } from "react";

// const Tweet = ({ tweet, fetchTweets }) => {
//   const [isEditing, setIsEditing] = useState(false);
//   const [updatedText, setUpdatedText] = useState(tweet?.tweet || "");

//   const handleDelete = async () => {
//     await fetch(`http://localhost:5000/api/tweets/${tweet.id}`, { method: "DELETE" });
//     fetchTweets();
//   };

//   const handleUpdate = async () => {
//     if (updatedText.trim().length < 5) {
//       alert("Tweet must be at least 5 characters long");
//       return;
//     }
//     await fetch(`http://localhost:5000/api/tweets/${tweet.id}`, {
//       method: "PUT",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({ tweet: updatedText })
//     });
//     setIsEditing(false);
//     fetchTweets();
//   };

//   return (
//     <div className="tweet">
//       <h4>{tweet?.username}</h4>
//       {isEditing ? (
//         <>
//           <textarea value={updatedText} onChange={(e) => setUpdatedText(e.target.value)} />
//           <button onClick={handleUpdate}>Save</button>
//         </>
//       ) : (
//         <p>{tweet?.tweet} {tweet?.edited && <span>(Edited)</span>}</p>
//       )}
//       <small>{new Date(tweet?.createdAt).toLocaleString()}</small>
//       {!isEditing && (
//         <>
//           <button onClick={() => setIsEditing(true)}>Edit</button>
//           <button onClick={handleDelete}>Delete</button>
//         </>
//       )}
//     </div>
//   );
// };

// export default Tweet;




import React, { useState } from "react";

function Tweet({ tweet, fetchTweets }) {
  const defaultTweet = {
    id: 999,
    username: "demo_user",
    tweet: "This is a demo tweet 😊",
    createdAt: new Date().toISOString()
  };

  const currentTweet = tweet || defaultTweet;

  const [isEditing, setIsEditing] = useState(false);
  const [newText, setNewText] = useState(currentTweet.tweet);

  const handleDelete = async () => {
    if (!tweet) return;
    await fetch(`/api/tweets/${tweet.id}`, { method: "DELETE" });
    fetchTweets();
  };

  const handleUpdate = async () => {
    if (newText.length < 5) {
      alert("Tweet must be at least 5 characters long");
      return;
    }

    if (!tweet) return;

    await fetch(`/api/tweets/${tweet.id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ tweet: newText })
    });

    setIsEditing(false);
    fetchTweets();
  };

  return (
    <div className="tweet">
      <h4>@{currentTweet.username}</h4>

      {isEditing ? (
        <>
          <textarea
            value={newText}
            onChange={(e) => setNewText(e.target.value)}
          />
          <button onClick={handleUpdate}>💾</button>
        </>
      ) : (
        <p>{currentTweet.tweet}</p>
      )}

      <small>{new Date(currentTweet.createdAt).toLocaleString()}</small>

      {!isEditing && tweet && (
        <div className="buttons">
          <button onClick={() => setIsEditing(true)}>✏️</button>
          <button onClick={handleDelete}>🗑️</button>
        </div>
      )}
    </div>
  );
}

export default Tweet;
