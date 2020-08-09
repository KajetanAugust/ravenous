import React from "react";

import './BusinessList.css'
import Business from "../Business/Business";

// component iterates through the fetched businesses and passes them to the <Business />
class BusinessList extends React.Component {
    render() {
        return(
            <div className="BusinessList">
                {
                    this.props.businesses.map(business => {
                        return <Business business={business} key={business.id}/>
                    })
                }
            </div>
        )
    }
}

export default BusinessList;