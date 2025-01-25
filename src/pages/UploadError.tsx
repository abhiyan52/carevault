import { motion } from "framer-motion";
import { XCircle, ArrowRight, Mail } from "lucide-react";
import { useNavigate } from "react-router-dom";

export const UploadError = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      <section className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-xl mx-auto text-center space-y-8"
        >
          <div className="w-20 h-20 mx-auto rounded-full bg-[#FF7F5C]/10 flex items-center justify-center">
            <XCircle className="w-12 h-12 text-[#FF7F5C]" />
          </div>

          <div className="space-y-4">
            <h1 className="text-3xl font-bold">Something went wrong!</h1>
            <p className="text-xl text-muted-foreground">
              Failed to upload documents. Please try again or contact support.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => navigate("/upload")}
              className="inline-flex items-center justify-center gap-2 px-6 py-3 font-medium text-white bg-[#5F9E9E] rounded-full hover:bg-[#5F9E9E]/90 transition-colors"
            >
              Retry Upload <ArrowRight className="w-5 h-5" />
            </button>
            <a
              href="mailto:support@carevault.com"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 font-medium text-[#5F9E9E] border-2 border-[#5F9E9E] rounded-full hover:bg-[#5F9E9E]/10 transition-colors"
            >
              Contact Support <Mail className="w-5 h-5" />
            </a>
          </div>
        </motion.div>
      </section>
    </div>
  );
}; 