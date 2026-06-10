import React from "react";
import Card from "./components/Card";

const App = () => {
  const jobOpenings = [
    {
      brandLogo: "src/assets/logos/google.png",
      companyName: "Google",
      datePosted: "2 days ago",
      position: "Flutter Developer",
      tag1: "Full Time",
      tag2: "Junior Level",
      pay: "$45/hr",
      location: "Mountain View, CA",
    },
    {
      brandLogo: "src/assets/logos/microsoft.png",
      companyName: "Microsoft",
      datePosted: "5 days ago",
      position: "React Native Developer",
      tag1: "Remote",
      tag2: "Mid Level",
      pay: "$50/hr",
      location: "Redmond, WA",
    },
    {
      brandLogo: "src/assets/logos/amazon.png",
      companyName: "Amazon",
      datePosted: "1 week ago",
      position: "Mobile App Engineer",
      tag1: "Full Time",
      tag2: "Senior Level",
      pay: "$65/hr",
      location: "Seattle, WA",
    },
    {
      brandLogo: "src/assets/logos/netflix.png",
      companyName: "Netflix",
      datePosted: "3 days ago",
      position: "Android Developer",
      tag1: "Remote",
      tag2: "Senior Level",
      pay: "$70/hr",
      location: "Los Gatos, CA",
    },
    {
      brandLogo: "src/assets/logos/spotify.png",
      companyName: "Spotify",
      datePosted: "2 weeks ago",
      position: "Machine Learning Engineer",
      tag1: "Part Time",
      tag2: "Junior Level",
      pay: "$40/hr",
      location: "New York, NY",
    },
    {
      brandLogo: "src/assets/logos/airbnb.png",
      companyName: "Airbnb",
      datePosted: "4 days ago",
      position: "iOS Developer",
      tag1: "Full Time",
      tag2: "Mid Level",
      pay: "$58/hr",
      location: "San Francisco, CA",
    },
    {
      brandLogo: "src/assets/logos/meta.png",
      companyName: "Meta",
      datePosted: "1 day ago",
      position: "Backend Developer",
      tag1: "Full Time",
      tag2: "Junior Level",
      pay: "$55/hr",
      location: "Menlo Park, CA",
    },
    {
      brandLogo: "src/assets/logos/apple.png",
      companyName: "Apple",
      datePosted: "3 weeks ago",
      position: "iOS Engineer",
      tag1: "Full Time",
      tag2: "Senior Level",
      pay: "$75/hr",
      location: "Cupertino, CA",
    },
    {
      brandLogo: "src/assets/logos/shopify.png",
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
