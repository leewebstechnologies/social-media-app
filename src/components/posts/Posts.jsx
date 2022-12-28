import Post from "../post/Post";
import "./posts.scss";

const Posts = () => {
  //TEMPORARY
  const posts = [
    {
      id: 1,
      name: "Bilal Philps",
      userId: 1,
      profilePic:
        "https://bilalphilips.com/wp-content/uploads/2016/10/drbilal.jpg",
      desc: "International Online University is one of the best universities in the world.",
      img: "https://afrogistmedia.com/wp-content/uploads/2021/06/Featured.jpg",
    },
    {
      id: 2,
      name: "Bola Ayeni",
      userId: 2,
      profilePic:
        "https://afrogistmedia.com/wp-content/uploads/2021/06/Featured.jpg",
      desc: "Nigeria will soon be great.",
    },
  ];

  return <div className="posts">
    {posts.map(post=>(
      <Post post={post} key={post.id}/>
    ))}
  </div>;
};

export default Posts;
