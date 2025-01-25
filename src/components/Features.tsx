import { motion } from "framer-motion";
import { Search, Shield, Upload, Brain } from "lucide-react";

const features = [
  {
    icon: Upload,
    title: "Easy Document Upload",
    description: "Drag-and-drop interface for quick document uploads with real-time progress tracking",
  },
  {
    icon: Brain,
    title: "AI-Powered Search",
    description: "Natural language search capabilities for intuitive document retrieval",
  },
  {
    icon: Shield,
    title: "Secure Storage",
    description: "Enterprise-grade security for your sensitive medical documents",
  },
];

export const Features = () => {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold"
          >
            Key Features
          </motion.h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass p-6 rounded-2xl hover-slide"
            >
              <div className="h-12 w-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                <feature.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground mb-4">{feature.description}</p>
              <button className="group flex items-center text-primary">
                Learn more
                <feature.icon className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};