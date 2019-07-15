import React from "react"
import Moment from 'react-moment';

function SpiceTable(props) {

    let spices = props.spices.map(spice => {
        
        let style = { backgroundColor: "#fff" } 
        // switch (freshness) {
        //     case fresh:
        //         style = { backgroundColor: "#b8e0cd" }
        //         break;
        //     case iffy:
        //         style = { backgroundColor: "#fbe7b5" }
        //         break;
        //     case fresh:
        //         style = { backgroundColor: "#f3c7c4" }
        //         break;
        //     default:
        //         style = { backgroundColor: "#fff" };
        // }

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
                    <Moment
                        fromNow
                        add={{ days: spice.shelfLife }}
                    >
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