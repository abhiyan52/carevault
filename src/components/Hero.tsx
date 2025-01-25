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
            Built for Seniors, Trusted by Families
          </span>
        </span>
        
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight animate-fade-up">
          CareVault
        </h1>
        
        <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto animate-fade-up">
          Your secure medical document hub with voice-activated search, family sharing, and elderly-friendly design. Organize, access, and share your health records with confidence.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-up">
          <button className="px-8 py-3 rounded-full bg-primary text-primary-foreground hover:opacity-90 transition-opacity">
            Try Free
          </button>
          <button className="px-8 py-3 rounded-full bg-secondary text-secondary-foreground hover:opacity-90 transition-opacity">
            Watch Demo
          </button>
        </div>
      </motion.div>
    </section>
  );
};