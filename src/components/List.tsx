import React from "react";
import {IPressure as Props} from "../App";  

interface IProps {
    pressure: Props["pressure"]
  }
  const List: React.FC<IProps> = ({pressure}) => {

const renderList = (): JSX.Element[] => {
    return pressure.map((person) => {
        return (
        <li className="List">
            <div className="List-header">
                <h2>{person.up}</h2><h2>/</h2>
                <h2>{person.down}</h2>
            </div>
            <p>{person.pulse}</p>
            <p className="List-note">{person.note}</p>
        </li>
        )
    })
}

return (
    <ul>
    {renderList()}
    </ul>
    )

}


export default List;