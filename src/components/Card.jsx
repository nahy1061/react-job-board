import React from 'react'
import { Bookmark } from 'lucide-react'

const Card = (props) => {
  return (
    <div className="card">

        <div className="top">
            <img src={props.brandLogo} alt="logo" />
            <button>Save <Bookmark size={12} /></button>
        </div>

        <div className="core">
            <h3>{props.companyName} <span>{props.datePosted}</span></h3>
            <h2>{props.position}</h2>
            <div className="tags">
                <h4>{props.tag1}</h4>
                <h4>{props.tag2}</h4>
            </div>
        </div>

            <div className="bottom">
                <div>
                    <h3>{props.pay}</h3>
                    <p>{props.location}</p>
                </div>
                <button>Apply Now</button>
            </div>
     
    </div>
  )
}

export default Card