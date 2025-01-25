import { motion } from "framer-motion";
import { ArrowRight, Play, Users, Heart, Building2, UserCog, Globe2 } from "lucide-react";
import { useNavigate } from "react-router-dom";

export const Hero = () => {
  const navigate = useNavigate();

  return (
    <>
      <section className="min-h-[80vh] flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto space-y-6"
        >
          <span className="inline-flex animate-fade-down">
            <span className="px-3 py-1 text-sm font-medium bg-secondary rounded-full">
              Built for Seniors, Trusted by Families
            </span>
          </span>
          
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight animate-fade-up">
            CareVault
          </h1>
          
          <div className="space-y-4 animate-fade-up">
            <p className="text-lg sm:text-xl text-foreground font-medium max-w-2xl mx-auto">
              Your secure medical document hub with voice-activated search, designed for peace of mind.
            </p>
            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
              Simply ask "Show Mom's latest blood work" or "Find Dad's medication list" and instantly access what you need. Share records with family members, set medication reminders, and keep everyone in sync—all in one elderly-friendly app that puts clarity and ease-of-use first.
            </p>
          </div>
          
          <div className="flex flex-col items-center gap-6 animate-fade-up">
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button
                onClick={() => navigate("/try-now")}
                className="px-8 py-3 rounded-full bg-primary text-primary-foreground hover:opacity-90 transition-opacity flex items-center gap-2"
              >
                Try Free <ArrowRight className="w-4 h-4" />
              </button>
              <button className="px-8 py-3 rounded-full bg-secondary text-secondary-foreground hover:opacity-90 transition-opacity flex items-center gap-2">
                <Play className="w-4 h-4" /> Watch Demo
              </button>
            </div>
            
            <div className="flex flex-col items-center gap-3 text-sm text-muted-foreground">
              <div className="flex items-center gap-4">
                <span className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  Free for up to 50 documents
                </span>
                <span className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  No credit card required
                </span>
              </div>
              <div className="flex items-center gap-2">
                <div className="flex -space-x-2">
                  <img className="w-8 h-8 rounded-full border-2 border-background" src="https://i.pravatar.cc/100?img=1" alt="User" />
                  <img className="w-8 h-8 rounded-full border-2 border-background" src="https://i.pravatar.cc/100?img=2" alt="User" />
                  <img className="w-8 h-8 rounded-full border-2 border-background" src="https://i.pravatar.cc/100?img=3" alt="User" />
                </div>
                <span>Trusted by 10,000+ families</span>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/5">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold mb-4">Who CareVault Is For</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Designed for everyone involved in elderly care, from patients to providers
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Primary Audience */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-6"
            >
              <h3 className="text-xl font-semibold flex items-center gap-2">
                <Users className="w-5 h-5 text-primary" />
                Primary Audience
              </h3>
              <div className="space-y-4">
                <div className="p-4 rounded-lg bg-background">
                  <h4 className="font-medium mb-2">Elderly Patients (65+)</h4>
                  <ul className="text-sm text-muted-foreground space-y-2">
                    <li>• Managing chronic conditions requiring frequent updates</li>
                    <li>• Prefer voice commands and simple interfaces</li>
                  </ul>
                </div>
                <div className="p-4 rounded-lg bg-background">
                  <h4 className="font-medium mb-2">Family Caregivers</h4>
                  <ul className="text-sm text-muted-foreground space-y-2">
                    <li>• Adult children coordinating care for aging parents</li>
                    <li>• Busy professionals needing remote access</li>
                  </ul>
                </div>
              </div>
            </motion.div>

            {/* Secondary Audience */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="space-y-6"
            >
              <h3 className="text-xl font-semibold flex items-center gap-2">
                <Heart className="w-5 h-5 text-primary" />
                Secondary Audience
              </h3>
              <div className="space-y-4">
                <div className="p-4 rounded-lg bg-background">
                  <h4 className="font-medium mb-2">Healthcare Providers</h4>
                  <ul className="text-sm text-muted-foreground space-y-2">
                    <li>• Doctors and specialists seeking organized histories</li>
                    <li>• Geriatric care teams sharing records with families</li>
                  </ul>
                </div>
                <div className="p-4 rounded-lg bg-background">
                  <h4 className="font-medium mb-2">Senior Living Facilities</h4>
                  <ul className="text-sm text-muted-foreground space-y-2">
                    <li>• Staff managing multiple residents' health data</li>
                    <li>• HIPAA-compliant record management</li>
                  </ul>
                </div>
              </div>
            </motion.div>

            {/* Geographic Focus & Pain Points */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="space-y-6"
            >
              <h3 className="text-xl font-semibold flex items-center gap-2">
                <Globe2 className="w-5 h-5 text-primary" />
                Coverage & Impact
              </h3>
              <div className="space-y-4">
                <div className="p-4 rounded-lg bg-background">
                  <h4 className="font-medium mb-2">Geographic Focus</h4>
                  <ul className="text-sm text-muted-foreground space-y-2">
                    <li>• Initially: Urban/suburban U.S. and Europe</li>
                    <li>• Future: Asia and Latin America with localization</li>
                  </ul>
                </div>
                <div className="p-4 rounded-lg bg-background">
                  <h4 className="font-medium mb-2">Key Pain Points Solved</h4>
                  <ul className="text-sm text-muted-foreground space-y-2">
                    <li>• Simplified tech experience for seniors</li>
                    <li>• Reduced coordination stress for families</li>
                    <li>• Efficient access for healthcare providers</li>
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};