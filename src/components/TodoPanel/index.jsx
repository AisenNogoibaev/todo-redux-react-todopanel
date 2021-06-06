import React from 'react'
import ali from './images/ali.jpg'
import { Link} from 'react-router-dom'
import { motion } from "framer-motion"
import { useSelector} from "react-redux";
export const TodoPanel = ({todo, id}) => {

  const todos = useSelector((state) => state);
console.log(todos)
    return <div>
            <div className="avatar">
        <Link to="/">

        <motion.h1 className="area"
            animate={{   scale: 2 }}
            transition={{ duration: 0.5 }}>You</motion.h1>
        </Link>

                <motion.img   whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.9 }} width="350px" src={ali} alt="" />
            </div>
            <div className="exp-scale">   
                <h3>You</h3>
                <p>Level: {todos.level}</p>
                <progress className="exp-scale" value={todos.allExp} max="200"></progress>
            </div>
    </div>
}