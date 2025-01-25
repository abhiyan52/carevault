import { motion } from "framer-motion";

export const Hero = () => {
  return (
    <section className="min-h-[80vh] flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center max-w-3xl mx-auto space-y-8"
      >
        <span className="inline-flex animate-fade-down">
          <span className="px-3 py-1 text-sm font-medium bg-secondary rounded-full">
            Intelligent Document Management
          </span>
        </span>
        
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight animate-fade-up">
          DocuQuest Scan
        </h1>
        
        <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto animate-fade-up">
          A secure and intelligent medical document management system. Upload, organize, and search your medical documents using natural language queries, powered by advanced OCR and AI technology.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-up">
          <button className="px-8 py-3 rounded-full bg-primary text-primary-foreground hover:opacity-90 transition-opacity">
            Start Scanning
          </button>
          <button className="px-8 py-3 rounded-full bg-secondary text-secondary-foreground hover:opacity-90 transition-opacity">
            Learn More
          </button>
        </div>
      </motion.div>
    </section>
  );
};