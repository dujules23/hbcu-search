import { ReactNode } from "react";
import { motion } from "framer-motion";

interface PageContentProps {
  children: ReactNode;
}

const PageContent: React.FC<PageContentProps> = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.div>
  );
};

export default PageContent;
