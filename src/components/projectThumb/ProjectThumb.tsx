// clicável com link para a página do projeto, legenda com contexto do projeto

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './ProjectThumb.css';
import { Link } from 'react-router-dom';

export const ProjectThumb: React.FC = () => {
    const [show, setShow] = useState(false);

  return (
    <>

    <motion.div
      layout
      className="thumbnail"
      onMouseEnter={() => setShow(true)}
      onMouseLeave={() => setShow(false)}

      >
        <AnimatePresence>
        {show &&(
          <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1}}
          exit={{opacity: 0}}
          transition={{duration: .3}}
          whileHover={{scale: 1.2}}
          >
        <Link to="/" 
        className="thumbnail__link"
        >Ver detalhes</Link>
        </motion.div> 
      )}
      </AnimatePresence>
      
    </motion.div>
    </>
  )
}
