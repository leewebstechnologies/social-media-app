import { useContext } from "react";
import "./stories.scss";
import { AuthContext } from "../../context/authContext";

const Stories = () => {
  const { currentUser } = useContext(AuthContext);

  //TEMPORARY
  const stories = [
    {
      id: 1,
      name: "Monsuru Babalola",
      img: "https://media.istockphoto.com/id/543330644/photo/homeless-african.jpg?s=612x612&w=0&k=20&c=3KjlXjUarWZObiZfO9qzWgirkWUS1JBSvBlzLAvFwhM=",
    },
    {
      id: 2,
      name: "Tom Ebuke",
      img: "https://media.istockphoto.com/id/1368539874/photo/old-african-man.jpg?s=612x612&w=0&k=20&c=uXxBhnDum9z0WDQMrxcSuJznZpK2r5WvP_RiRTlCaME=",
    },
    {
      id: 3,
      name: "Abubakar Abdullahi",
      img: "https://media.istockphoto.com/id/183512839/photo/rural-kid.jpg?s=612x612&w=0&k=20&c=err5gZFo8B7pYxMRIlykoXUX7Gr8OFHxMNC9akBhApw=",
    },
    {
      id: 4,
      name: "Chukwudi Chinonso",
      img: "https://media.istockphoto.com/id/1353973291/photo/young-african-villager-siting-down-on-the-traditional-chair.jpg?s=612x612&w=0&k=20&c=g514QBbo3dMSQBKCHuihkC1AaBzODOuW-pJgCNFpxko=",
    },
  ];

  return (
    <div className="stories">
      <div className="story">
        <img src={currentUser.profilePic} alt="" />
        <span>{currentUser.name}</span>
        <button>+</button>
      </div>
      {stories.map((story) => (
        <div className="story" key={story.id}>
          <img src={story.img} alt="" />
          <span>{story.name}</span>
        </div>
      ))}
    </div>
  );
};

export default Stories;
