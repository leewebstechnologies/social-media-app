import { useContext } from "react";
import "./comments.scss";
import { AuthContext } from "../../context/authContext";

const Comments = () => {
  const { currentUser } = useContext(AuthContext);
  //Temporary
  const comments = [
    {
      id: 1,
      desc: "React is a JavaScript library created by Facebook. It creates a virtual DOM in memory.",
      userId: 1,
      profilePicture:
        "https://images.unsplash.com/photo-1620932934088-fbdb2920e484?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8YWZyaWNhbiUyMG1hbnxlbnwwfHwwfHw%3D&w=1000&q=80",
    },
    {
      id: 2,
      desc: "React allows us to easily create SPAs",
      userId: 2,
      profilePicture:
        "https://i.pinimg.com/564x/45/59/15/4559158a67c49906fbaec38158a15f20.jpg",
    },
  ];
  return (
    <div className="comments">
      <div className="write">
        <img src={currentUser.profilePic} alt="" />
        <input type="text" placeholder="write a comment" />
        <button>Send</button>
      </div>
      {comments.map((comment) => (
        <div className="comment">
          <img src={comment.profilePicture} alt="" />
          <div className="info">
            <span>{comment.name}</span>
            <p>{comment.desc}</p>
          </div>
          <span className="date">1 hour ago</span>
        </div>
      ))}
    </div>
  );
};

export default Comments;
