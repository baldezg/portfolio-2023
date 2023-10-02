import { motion } from 'framer-motion';
import React from 'react';

type Props = {
    list: string[];
}
const SkillsList: React.FC<Props> = ({list}) => {
    return(
        <motion.ul
        className="list__skills"
        key="development"
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