import { motion } from "framer-motion";
import { VoiceIcon, Search, Users, Shield, Upload, Eye, Headphones } from "lucide-react";

const features = [
  {
    icon: Eye,
    title: "Senior-First Design",
    description: "Simple voice commands, large text, and one-tap actions for effortless use",
  },
  {
    icon: Search,
    title: "Instant Answers",
    description: "Find medical reports via natural language search ('Show my 2023 lab results')",
  },
  {
    icon: Users,
    title: "Family Care Coordination",
    description: "Securely share records and get emergency alerts for loved ones",
  },
  {
    icon: Shield,
    title: "HIPAA-Secure",
    description: "End-to-end encryption and Face ID/Touch ID login for peace of mind",
  },
  {
    icon: Upload,
    title: "Free & Easy Start",
    description: "Organize 50+ documents at no cost—no tech skills needed",
  },
  {
    icon: Headphones,
    title: "24/7 Support",
    description: "Get help anytime with video tutorials and dedicated helpline support",
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
            Why Choose CareVault?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-4 text-lg text-muted-foreground"
          >
          </motion.p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass p-6 rounded-2xl hover:shadow-lg transition-shadow hover-slide"
            >
              <div className="h-12 w-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                <feature.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};