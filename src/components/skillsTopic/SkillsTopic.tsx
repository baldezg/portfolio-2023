import React from "react";
import { Plus } from "../../icons";

type Props = {
    fnc: () => void;
    title: string;
   
}
const SkillsTopic: React.FC<Props> = ({fnc, title}) => {
    return (
        <button
        className="skills__topic"
        onClick={fnc}
        >
            <h4>{title}</h4>
            <div
              className="topic__info"    
            >
                <Plus className="icon" />
            </div>
        </button>
    )
}

export default SkillsTopic;