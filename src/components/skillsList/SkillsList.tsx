import React from 'react';
import './SkillsList.css';
import { motion } from 'framer-motion';

type Props = {
    list: string[];
    key: string;
}
const SkillsList: React.FC<Props> = ({list, key}) => {
    return(
        <motion.ul
        className="list__skills"
        key={key}
        initial={{height: 0}}
        animate={{ height: "auto" }}
        exit={{ height: 0 }}
        transition={{ duration: 0.5 }}
        >
            {list.map((item) => {
               return <li>{item}</li>
            })}
        </motion.ul>
    )
}
export default SkillsList;