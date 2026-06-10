import React from "react";
import Card from "./components/Card";
import googleLogo from "./assets/logos/google.png";
import microsoftLogo from "./assets/logos/microsoft.png";
import amazonLogo from "./assets/logos/amazon.png";
import netflixLogo from "./assets/logos/netflix.png";
import spotifyLogo from "./assets/logos/spotify.png";
import airbnbLogo from "./assets/logos/airbnb.png";
import metaLogo from "./assets/logos/meta.png";
import appleLogo from "./assets/logos/apple.png";
import shopifyLogo from "./assets/logos/shopify.png";

const App = () => {
  const jobOpenings = [
    {
      brandLogo: googleLogo,
      companyName: "Google",
      datePosted: "2 days ago",
      position: "Flutter Developer",
      tag1: "Full Time",
      tag2: "Junior Level",
      pay: "$45/hr",
      location: "Mountain View, CA",
    },
    {
      brandLogo: microsoftLogo,
      companyName: "Microsoft",
      datePosted: "5 days ago",
      position: "React Native Developer",
      tag1: "Remote",
      tag2: "Mid Level",
      pay: "$50/hr",
      location: "Redmond, WA",
    },
    {
      brandLogo: amazonLogo,
      companyName: "Amazon",
      datePosted: "1 week ago",
      position: "Mobile App Engineer",
      tag1: "Full Time",
      tag2: "Senior Level",
      pay: "$65/hr",
      location: "Seattle, WA",
    },
    {
      brandLogo: netflixLogo,
      companyName: "Netflix",
      datePosted: "3 days ago",
      position: "Android Developer",
      tag1: "Remote",
      tag2: "Senior Level",
      pay: "$70/hr",
      location: "Los Gatos, CA",
    },
    {
      brandLogo: spotifyLogo,
      companyName: "Spotify",
      datePosted: "2 weeks ago",
      position: "Machine Learning Engineer",
      tag1: "Part Time",
      tag2: "Junior Level",
      pay: "$40/hr",
      location: "New York, NY",
    },
    {
      brandLogo: airbnbLogo,
      companyName: "Airbnb",
      datePosted: "4 days ago",
      position: "iOS Developer",
      tag1: "Full Time",
      tag2: "Mid Level",
      pay: "$58/hr",
      location: "San Francisco, CA",
    },
    {
      brandLogo: metaLogo,
      companyName: "Meta",
      datePosted: "1 day ago",
      position: "Backend Developer",
      tag1: "Full Time",
      tag2: "Junior Level",
      pay: "$55/hr",
      location: "Menlo Park, CA",
    },
    {
      brandLogo: appleLogo,
      companyName: "Apple",
      datePosted: "3 weeks ago",
      position: "iOS Engineer",
      tag1: "Full Time",
      tag2: "Senior Level",
      pay: "$75/hr",
      location: "Cupertino, CA",
    },
    {
      brandLogo: shopifyLogo,
      companyName: "Shopify",
      datePosted: "1 week ago",
      position: "Frontend Mobile Developer",
      tag1: "Remote",
      tag2: "Mid Level",
      pay: "$48/hr",
      location: "Ottawa, ON",
    },
  ];

  return (
    <div className="parent ">
      {jobOpenings.map(function (el, idx) {
        return (
          <div key={idx}>
            <Card
              brandLogo={el.brandLogo}
              companyName={el.companyName}
              datePosted={el.datePosted}
              position={el.position}
              tag1={el.tag1}
              tag2={el.tag2}
              pay={el.pay}
              location={el.location}
            />
          </div>
        );
      })}
    </div>
  );
};

export default App;
