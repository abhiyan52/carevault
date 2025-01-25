import { motion } from "framer-motion";
import { CheckCircle2, ArrowRight, Search } from "lucide-react";
import { useNavigate } from "react-router-dom";

export const UploadSuccess = () => {
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
          <div className="w-20 h-20 mx-auto rounded-full bg-[#5F9E9E]/10 flex items-center justify-center">
            <CheckCircle2 className="w-12 h-12 text-[#5F9E9E]" />
          </div>

          <div className="space-y-4">
            <h1 className="text-3xl font-bold">Your documents are ready!</h1>
            <p className="text-xl text-muted-foreground">
              You can now ask questions like: "Show me all blood test reports."
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => navigate("/upload")}
              className="inline-flex items-center justify-center gap-2 px-6 py-3 font-medium text-[#5F9E9E] border-2 border-[#5F9E9E] rounded-full hover:bg-[#5F9E9E]/10 transition-colors"
            >
              Upload More Documents <ArrowRight className="w-5 h-5" />
            </button>
            <button
              className="inline-flex items-center justify-center gap-2 px-6 py-3 font-medium text-white bg-[#5F9E9E] rounded-full opacity-50 cursor-not-allowed"
            >
              Try Search Now <Search className="w-5 h-5" />
            </button>
          </div>

          <p className="text-sm text-muted-foreground pt-8">
            This is a demo. Files will not be saved permanently.
          </p>
        </motion.div>
      </section>
    </div>
  );
}; 