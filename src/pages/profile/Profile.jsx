import "./profile.scss";
import FacebookTwoToneIcon from "@mui/icons-material/FacebookTwoTone";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import PinterestIcon from "@mui/icons-material/Pinterest";
import TwitterIcon from "@mui/icons-material/Twitter";
import PlaceIcon from "@mui/icons-material/Place";
import LanguageIcon from "@mui/icons-material/Language";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Posts from "../../components/posts/Posts";

const Profile = () => {
  return (
    <div className="profile">
      <div className="images">
        <img
          src="https://media.istockphoto.com/id/1353970283/photo/african-woman-in-rural-africa.jpg?s=612x612&w=0&k=20&c=wRWSwlmpe4w5UbgBFOHrQWQHK_7SoIpTHRhyeB_ScLo="
          alt=""
          className="cover"
        />
        <img
          src="hhttps://media.istockphoto.com/id/1288237815/photo/african-woman-sitting-down-in-the-yard-of-her-village.jpg?s=612x612&w=0&k=20&c=7ByeW8wmSSVYC9kytaD2SyikLf2jBFoxfT52mnFNYyU="
          alt=""
          className="profilePic"
        />
      </div>
      <div className="profileContainer">
        <div className="uInfo">
          <div className="left">
            <a href="http://facebook.com">
              <FacebookTwoToneIcon fontSize="large" />
            </a>
            <a href="http://facebook.com">
              <InstagramIcon fontSize="large" />
            </a>
            <a href="http://facebook.com">
              <TwitterIcon fontSize="large" />
            </a>
            <a href="http://facebook.com">
              <LinkedInIcon fontSize="large" />
            </a>
            <a href="http://facebook.com">
              <PinterestIcon fontSize="large" />
            </a>
          </div>
          <div className="center">
            <span>Ali Ajibade</span>
            <div className="info">
              <div className="item">
                <PlaceIcon />
                <span>Nigeria</span>
              </div>
              <div className="item">
                <LanguageIcon />
                <span>Leewebs</span>
              </div>
            </div>
            <button>follow</button>
          </div>
          <div className="right">
            <EmailOutlinedIcon />
            <MoreVertIcon />
          </div>
        </div>
        <Posts />
      </div>
    </div>
  );
};

export default Profile;
