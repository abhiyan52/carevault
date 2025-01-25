import { motion } from "framer-motion";
import { Upload, Search, Users, Shield, LineChart, Headphones, Eye } from "lucide-react";

const features = [
  {
    icon: Upload,
    title: "Simple Document Management",
    description: "One-click upload for medical reports with automatic organization by date and type",
  },
  {
    icon: Search,
    title: "Voice-Activated Search",
    description: "Find documents using natural language - just ask and get instant results",
  },
  {
    icon: Eye,
    title: "Elderly-Friendly Design",
    description: "Large text, high contrast interface, and voice guidance for easy navigation",
  },
  {
    icon: Users,
    title: "Family & Caregiver Access",
    description: "Securely share records with family members and healthcare providers",
  },
  {
    icon: LineChart,
    title: "Health Insights",
    description: "Visualize health trends and track medications with smart reminders",
  },
  {
    icon: Shield,
    title: "Uncompromising Security",
    description: "HIPAA-compliant encryption with Face/Touch ID login",
  },
  {
    icon: Headphones,
    title: "24/7 Support",
    description: "Instant help with video tutorials and dedicated helpline support",
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
            Designed with simplicity and dignity in mind - no tech skills needed
          </motion.p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass p-6 rounded-2xl hover:shadow-lg transition-shadow"
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