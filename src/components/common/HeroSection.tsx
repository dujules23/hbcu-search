import { useRouter } from "next/router";
import { motion } from "framer-motion";
import { FC } from "react";

interface Props {}

const HeroSection: FC<Props> = (props): JSX.Element => {
  const router = useRouter();

  const handleStartClick = () => {
    router.push("/SchoolSearch");
  };
  return (
    <div className="flex flex-col items-center justify-center h-screen text-center dark:bg-dark-primary">
      <h1 className="text-6xl font-bold mb-16">Welcome to HBCU Search</h1>
      <p className="text-xl mb-36">Click below to begin.</p>
      <motion.button
        whileHover={{ scale: 1.1 }}
        className="px-6 py-2 bg-nav-primary text-white rounded"
        onClick={() => router.push("/SchoolSearch")}
      >
        Get Started
      </motion.button>
    </div>
  );
};

export default HeroSection;
