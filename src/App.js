import logo from './logo.svg';
import './App.css';
import React from 'react';
import { SocialIcon } from 'react-social-icons';
import 'react-awesome-button/dist/styles.css';

const buttonStyle = {
  height:180, 
  width: 180
}

function App() {
  return (
    <div className="App">
        <img src={logo} className="App-logo" alt="logo" />
        <div>
        <div style={{display: "flex", alignItems: "center", justifyContent:"center", flexDirection: "row", flexWrap:"wrap"}}>
        <SocialIcon className="avatar" style={buttonStyle} network="facebook" />
        <SocialIcon style={buttonStyle} className="avatar" network="instagram" />
        <SocialIcon style={buttonStyle} className="avatar" network="discord" />
        <SocialIcon style={buttonStyle} className="avatar" network="google" />
        <SocialIcon style={buttonStyle} className="avatar" network="twitter" />
        <SocialIcon style={buttonStyle} className="avatar" network="telegram" />
        <SocialIcon style={buttonStyle} className="avatar" network="email" />
        <SocialIcon style={buttonStyle} className="avatar" network="behance" />
        <SocialIcon style={buttonStyle} className="avatar" network="clubhouse" />
        <SocialIcon style={buttonStyle} className="avatar" network="codepen" />
        <SocialIcon style={buttonStyle} className="avatar" network="dribbble" />
        <SocialIcon style={buttonStyle} className="avatar" network="dropbox" />
        <SocialIcon style={buttonStyle} className="avatar" network="fivehundredpix" />
        <SocialIcon style={buttonStyle} className="avatar" network="flickr" />
        <SocialIcon style={buttonStyle} className="avatar" network="foursquare" />
        <SocialIcon style={buttonStyle} className="avatar" network="github" />
        <SocialIcon style={buttonStyle} className="avatar" network="gitlab" />
        <SocialIcon style={buttonStyle} className="avatar" network="google_play" />
        <SocialIcon style={buttonStyle} className="avatar" network="groupme" />
        <SocialIcon style={buttonStyle} className="avatar" network="itch.io" />
        <SocialIcon style={buttonStyle} className="avatar" network="itunes" />
        <SocialIcon style={buttonStyle} className="avatar" network="linkedin" />
        <SocialIcon style={buttonStyle} className="avatar" network="linktree" />
        <SocialIcon style={buttonStyle} className="avatar" network="medium" />
        <SocialIcon style={buttonStyle} className="avatar" network="meetup" />
        <SocialIcon style={buttonStyle} className="avatar" network="pinterest" />
        <SocialIcon style={buttonStyle} className="avatar" network="reddit" />
        <SocialIcon style={buttonStyle} className="avatar" network="pixiv" />
        <SocialIcon style={buttonStyle} className="avatar" network="ravelry" />
        <SocialIcon style={buttonStyle} className="avatar" network="rdio" />
        <SocialIcon style={buttonStyle} className="avatar" network="rss" />
        <SocialIcon style={buttonStyle} className="avatar" network="sharethis" />
        <SocialIcon style={buttonStyle} className="avatar" network="slack" />
        <SocialIcon style={buttonStyle} className="avatar" network="smugmug" />
        <SocialIcon style={buttonStyle} className="avatar" network="snapchat" />
        <SocialIcon style={buttonStyle} className="avatar" network="soundcloud" />
        <SocialIcon style={buttonStyle} className="avatar" network="spotify" />
        <SocialIcon style={buttonStyle} className="avatar" network="squarespace" />
        <SocialIcon style={buttonStyle} className="avatar" network="stackoverflow" />
        <SocialIcon style={buttonStyle} className="avatar" network="tiktok" />
        <SocialIcon style={buttonStyle} className="avatar" network="tumblr" />
        <SocialIcon style={buttonStyle} className="avatar" network="twitch" />
        <SocialIcon style={buttonStyle} className="avatar" network="vevo" />
        <SocialIcon style={buttonStyle} className="avatar" network="codepen" />
        <SocialIcon style={buttonStyle} className="avatar" network="upwork" />
        <SocialIcon style={buttonStyle} className="avatar" network="vimeo" />
        <SocialIcon style={buttonStyle} className="avatar" network="vine" />
        <SocialIcon style={buttonStyle} className="avatar" network="vk" />
        <SocialIcon style={buttonStyle} className="avatar" network="vsco" />
        <SocialIcon style={buttonStyle} className="avatar" network="wechat" />
        <SocialIcon style={buttonStyle} className="avatar" network="whatsapp" />
        <SocialIcon style={buttonStyle} className="avatar" network="yelp" />
        <SocialIcon style={buttonStyle} className="avatar" network="youtube" />
        </div>
        </div>
    </div>
  );
}

export default App;
