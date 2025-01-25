import { motion } from "framer-motion";
import { ArrowRight, Shield, Lock, Clock } from "lucide-react";
import { useNavigate } from "react-router-dom";

export const TryNow = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      <section className="container mx-auto px-4 py-16 md:py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center space-y-8 max-w-3xl mx-auto"
        >
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
            Try CareVault Free – No Signup Needed!
          </h1>
          
          <p className="text-xl text-muted-foreground">
            Securely upload and organize medical documents in seconds. No personal data required.
          </p>

          <button
            onClick={() => navigate("/upload")}
            className="inline-flex items-center gap-2 px-8 py-4 text-lg font-medium text-white bg-[#5F9E9E] rounded-full hover:bg-[#5F9E9E]/90 transition-colors"
          >
            Upload Documents Now <ArrowRight className="w-5 h-5" />
          </button>

          <div className="flex flex-wrap justify-center gap-8 pt-8">
            <div className="flex items-center gap-2 text-muted-foreground">
              <Shield className="w-5 h-5 text-[#2A5C8A]" />
              <span>HIPAA-Compliant</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <Lock className="w-5 h-5 text-[#2A5C8A]" />
              <span>Encrypted</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <Clock className="w-5 h-5 text-[#2A5C8A]" />
              <span>Files deleted after 24 hours</span>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
}; 