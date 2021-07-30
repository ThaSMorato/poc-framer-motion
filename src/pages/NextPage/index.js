import { motion } from "framer-motion";
import { useHistory } from 'react-router-dom';
import './styles.css';

export const NextPage = () => {
    const variantsTitle = {
        hidden: { opacity: 0, scale: 0 },
        visible: { opacity: 1, scale: 1.2 },
      }

      const history = useHistory();

      const handleClickHomePage = () => {
        history.push('/')
      }
      
    return (
        <main>
            <div className="container">
          
                <motion.img
                    src="https://i.picsum.photos/id/593/300/300.jpg?hmac=wyPh1WjUanAHdNW0I2tKYB3tjs2UvCLW07c2q-_1okg"
                    layoutId="image-picsum"
                    className="image"
                    transition={{ duration: 0.5 }}
                />

                <motion.div
                    animate={{x : [150, -200, 100, -150, 50, -100, 0]}}
                    transition={{ duration: 1.5 }}
                    className="title__wrapper"
                    layoutId="title"
                >
                    <motion.h1
                        initial="hidden"
                        animate="visible"
                        transition={{ duration: 1.5 }}
                        variants={variantsTitle}
                        className="title"
                    >
                        POC - Framer Motion
                    </motion.h1>
                </motion.div>

                
                <motion.button 
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="author__wrapper"
                    layoutId="author"
                    onClick={handleClickHomePage}
                >
                    Click for home page
                </motion.button>

                
                <motion.div
                    animate={{
                    scale: [1, 2, 2, 1, 1],
                    rotate: [0, 0, 270, 270, 0],
                    borderRadius: ["20%", "20%", "50%", "50%", "20%"],
                    }}
                    layoutId="circle"
                    transition={{ duration: 1.5 }}
                    className="white__bg"
                />
                <span className="author" >
                    Thales Silva Morato
                </span>
            </div>
        </main>
    )
}