import * as React from 'react'
import { SocialIcon } from 'react-social-icons';

interface Props {
  network: string;
}

const priceData: [string][] = [
    ["facebook"],
    ["instagram"],
    ["discord"],
    ["google"],
    ["twitter"],
    ["telegram"],
    ["email"],
    ["behance"],
    ["clubhouse"],
    ["codepen"],
    ["dribbble"],
    ["dropbox"],
    ["fivehundredpix"],
    ["flickr"],
    ["foursquare"],
    ["github"],
    ["gitlab"],
    ["google_play"],
    ["groupme"],
    ["itch.io"],
    ["itunes"],
    ["linkedin"],
    ["linktree"],
    ["medium"],
    ["meetup"],
    ["pinterest"],
    ["reddit"],
    ["pixiv"],
    ["ravelry"],
    ["rdio"],
    ["rss"],
    ["sharethis"],
    ["slack"],
    ["smugmug"],
    ["snapchat"],
    ["soundcloud"],
    ["spotify"],
    ["squarespace"],
    ["stackoverflow"],
    ["tiktok"],
    ["tumblr"],
    ["twitch"],
    ["vevo"],
    ["codepen"],
    ["upwork"],
    ["vimeo"],
    ["vine"],
    ["vk"],
    ["vsco"],
    ["wechat"],
    ["whatsapp"],
    ["yelp"],
    ["youtube"]
] 

const buttonStyle = {
    height:200, 
    width: 200
  }

function Networks({ network }: Props) {
  return (
    <SocialIcon network={network} style={buttonStyle} />
  );
}


export default function Logos() {
  return priceData.map(([network]) => (
    <div style={{display: "flex", alignItems: "center", justifyContent: "center", padding: 10 }}>
<Networks network={network} key={network} />
</div>
  ))
  }