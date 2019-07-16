import React from "react"
import Moment from 'react-moment'
import moment from 'moment'

function SpiceTable(props) {

    let style = { backgroundColor: "#fff" } // default styling 

    let spices = props.spices.map(spice => {

        let today = moment()
        let dateAdded = moment(spice.dateAdded)
        let numDaysSinceAddition = today.diff(dateAdded, 'd') 
        let freshnessPercentage = (spice.shelfLife - numDaysSinceAddition) / spice.shelfLife * 100

        if (freshnessPercentage <= 0 ) {
            style = { backgroundColor: "#f3c7c4" } // expired
        } else if (freshnessPercentage < 25) {
            style = { backgroundColor: "#fbe7b5" } // "iffy"
        } else {
            style = { backgroundColor: "#b8e0cd" } // fresh! 
        }

        return (
            <tr 
                className="spice"
                key={spice.id}
                style={style}
            >
                <td className="name">
                    <a href={spice.url}>{spice.name}</a>
                </td>
                <td className="expiration">
                    <Moment add={{ days: spice.shelfLife }} fromNow>
                        {spice.dateAdded}
                    </Moment>
                </td>
            </tr>
        )
    })

    return(
        <table className="spiceTable">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Expiration</th>
                </tr>
            </thead>            
            <tbody>
                {spices}
            </tbody>
        </table>
    )
}

export default SpiceTable