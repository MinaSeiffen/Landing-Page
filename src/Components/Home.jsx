import { motion } from "framer-motion";

const Home = () => {
    return (
        <>
            <div className="grid grid-cols-2 gap-4 container">


                <div className="">
                    <h1 className="text-6xl text-white">Your Second Chance at Success</h1>

                    <p className="text-xl mb-8">The multichain trader ecosystem for $TON & $SOL</p>

                    <button className="group relative h-12 w-48 overflow-hidden rounded-3xl bg-blue-500 text-lg font-bold text-white">
                        Hover me!
                        <div className="absolute inset-0 h-full w-full scale-0 rounded-3xl transition-all duration-300 group-hover:scale-100 group-hover:bg-white/30"></div>
                    </button>

                    <button className="group relative h-12 w-48 overflow-hidden rounded-3xl bg-white text-lg shadow">
                        <div className="absolute inset-0 w-3 bg-blue-400 transition-all duration-[250ms] ease-out group-hover:w-full" />
                        <span className="relative text-black group-hover:text-white">Hover me!</span>
                    </button>

                    <div className="mt-6">
                        <h1 className="text-3xl text-white">Jetton Address</h1>
                        <a href="#">EQDv68b3JaWBO_DrP6u13Oq7KsnKhR926kMxcOJwACDY_uQC</a>

                        <h1 className="text-3xl text-white">Why Scam? NFT Collection</h1>
                        <a href="#">getgems.io</a>
                    </div>
                </div>



                <div className="flex">

                    <motion.div
                        initial={{ scale: 0 }}
                        animate={{ rotate: 360, scale: 0.5 }}
                        transition={{
                            type: "spring",
                            stiffness: 260,
                            damping: 20,
                        }}
                    >
                        <img src="./02.png"  alt="" />
                    </motion.div>

                    <motion.div
                        initial={{ scale: 0 }}
                        animate={{ rotate: 360, scale: 0.5 }}
                        transition={{
                            type: "spring",
                            stiffness: 260,
                            damping: 20,
                        }}
                    >
                        <img src="./15.png" alt="" />
                    </motion.div>

                    <motion.div
                        initial={{ scale: 0 }}
                        animate={{ rotate: 360, scale: 0.5 }}
                        transition={{
                            
                            type: "spring",
                            stiffness: 260,
                            damping: 20,
                            delay: 0.5,
                            rotate: {
                                duration: 20,
                                repeat: Infinity, 
                                ease: "linear" 
                            }
                            
                        }}
                    >
                        <img src="./77.png" className="" alt="" />
                    </motion.div>


                </div>
            </div>
        </>
    )
}

export default Home
