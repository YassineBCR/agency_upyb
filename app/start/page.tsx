"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ArrowLeft, Check, Rocket, Monitor, ShoppingBag, Megaphone, Search } from "lucide-react";
import Link from "next/link";
import { Meteors } from "@/components/meteors";

// --- CONFIGURATION DES ÉTAPES ---
const steps = [
  { id: 1, title: "Votre Besoin" },
  { id: 2, title: "Budget" },
  { id: 3, title: "Détails" },
  { id: 4, title: "Contact" },
];

export default function StartPage() {
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  // État pour stocker les réponses
  const [formData, setFormData] = useState({
    service: "",
    budget: "",
    description: "",
    name: "",
    email: "",
    phone: "",
  });

  const handleNext = () => {
    if (currentStep < steps.length) setCurrentStep(currentStep + 1);
    else handleSubmit();
  };

  const handlePrev = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1);
  };

  const handleSubmit = () => {
    // ICI : C'est là que vous enverrez les données à votre API/Email plus tard
    console.log("Formulaire envoyé :", formData);
    setIsSubmitted(true);
  };

  // Mise à jour des champs
  const updateField = (field: string, value: string) => {
    setFormData({ ...formData, [field]: value });
  };

  return (
    <main className="min-h-screen bg-upyb-deep text-white flex flex-col items-center justify-center p-6 relative overflow-hidden">
      
      {/* Fond animé */}
      <div className="absolute inset-0 z-0">
        <Meteors number={30} />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-upyb-purple/20 via-upyb-deep to-black opacity-80" />
      </div>

      {/* --- HEADER --- */}
      <header className="absolute top-0 left-0 w-full p-6 z-20 flex justify-between items-center">
         <Link href="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-colors">
                <ArrowLeft size={20} />
            </div>
            <span className="font-bold tracking-wide">Retour</span>
         </Link>
         <div className="flex items-center gap-2">
            <Rocket className="text-upyb-purple" />
            <span className="font-bold text-xl tracking-widest">UPYB</span>
         </div>
      </header>

      {/* --- CONTENEUR FORMULAIRE --- */}
      <div className="w-full max-w-2xl relative z-10">
        
        {isSubmitted ? (
          // ECRAN DE SUCCÈS
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white/5 backdrop-blur-xl border border-white/10 p-10 rounded-3xl text-center"
          >
            <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-[0_0_30px_rgba(34,197,94,0.4)]">
                <Check size={40} className="text-white" />
            </div>
            <h2 className="text-3xl font-bold mb-4">Mission Reçue !</h2>
            <p className="text-gray-300 mb-8 text-lg">
                Merci {formData.name}. Nos équipes analysent votre demande.<br/>
                Nous vous recontacterons sous 24h pour organiser le décollage.
            </p>
            <Link href="/" className="px-8 py-3 rounded-full bg-white text-black font-bold hover:bg-gray-200 transition-colors">
                Retour à la base
            </Link>
          </motion.div>
        ) : (
          // FORMULAIRE MULTI-ÉTAPES
          <motion.div
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             className="bg-black/40 backdrop-blur-xl border border-white/10 p-8 md:p-12 rounded-[2rem] shadow-2xl relative overflow-hidden"
          >
             {/* Barre de progression */}
             <div className="absolute top-0 left-0 w-full h-1 bg-white/10">
                <motion.div 
                    className="h-full bg-gradient-to-r from-upyb-blue to-upyb-purple"
                    initial={{ width: "0%" }}
                    animate={{ width: `${(currentStep / steps.length) * 100}%` }}
                />
             </div>

             <div className="mb-8">
                <span className="text-upyb-purple font-bold tracking-widest text-sm uppercase">Étape {currentStep}/{steps.length}</span>
                <h2 className="text-3xl md:text-4xl font-bold mt-2">{steps[currentStep - 1].title}</h2>
             </div>

             <div className="min-h-[300px]">
                <AnimatePresence mode="wait">
                    
                    {/* ÉTAPE 1 : SERVICE */}
                    {currentStep === 1 && (
                        <motion.div 
                            key="step1"
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            className="grid grid-cols-1 md:grid-cols-2 gap-4"
                        >
                            {[
                                { id: "web", label: "Site Web / Webapp", icon: Monitor },
                                { id: "ecommerce", label: "E-Commerce", icon: ShoppingBag },
                                { id: "marketing", label: "Marketing / Ads", icon: Megaphone },
                                { id: "seo", label: "SEO / Google", icon: Search },
                            ].map((item) => (
                                <button
                                    key={item.id}
                                    onClick={() => updateField("service", item.label)}
                                    className={`p-6 rounded-2xl border flex flex-col items-center gap-4 transition-all
                                        ${formData.service === item.label 
                                            ? "bg-upyb-purple/20 border-upyb-purple text-white shadow-[0_0_20px_rgba(122,60,255,0.3)]" 
                                            : "bg-white/5 border-white/10 hover:bg-white/10 text-gray-400 hover:text-white"
                                        }`}
                                >
                                    <item.icon size={32} />
                                    <span className="font-semibold">{item.label}</span>
                                </button>
                            ))}
                        </motion.div>
                    )}

                    {/* ÉTAPE 2 : BUDGET */}
                    {currentStep === 2 && (
                        <motion.div 
                            key="step2"
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            className="space-y-3"
                        >
                            {["Moins de 1k€", "1k€ - 3k€", "3k€ - 10k€", "Plus de 10k€"].map((budget) => (
                                <button
                                    key={budget}
                                    onClick={() => updateField("budget", budget)}
                                    className={`w-full p-5 rounded-xl border text-left transition-all font-medium text-lg
                                        ${formData.budget === budget 
                                            ? "bg-upyb-blue/20 border-upyb-blue text-white" 
                                            : "bg-white/5 border-white/10 hover:bg-white/10 text-gray-400 hover:text-white"
                                        }`}
                                >
                                    {budget}
                                </button>
                            ))}
                        </motion.div>
                    )}

                    {/* ÉTAPE 3 : DESCRIPTION */}
                    {currentStep === 3 && (
                        <motion.div 
                            key="step3"
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                        >
                            <label className="block text-gray-400 mb-2 text-sm">Racontez-nous votre vision</label>
                            <textarea 
                                value={formData.description}
                                onChange={(e) => updateField("description", e.target.value)}
                                placeholder="J'ai besoin d'un site pour..."
                                className="w-full h-48 bg-white/5 border border-white/10 rounded-xl p-4 text-white placeholder-gray-600 focus:outline-none focus:border-upyb-purple focus:ring-1 focus:ring-upyb-purple transition-all resize-none"
                            />
                        </motion.div>
                    )}

                    {/* ÉTAPE 4 : CONTACT */}
                    {currentStep === 4 && (
                        <motion.div 
                            key="step4"
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            className="space-y-4"
                        >
                            <div className="space-y-2">
                                <label className="text-sm text-gray-400">Nom & Prénom</label>
                                <input 
                                    type="text" 
                                    value={formData.name}
                                    onChange={(e) => updateField("name", e.target.value)}
                                    className="w-full bg-white/5 border border-white/10 rounded-xl p-3 focus:border-upyb-blue outline-none"
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm text-gray-400">Email Professionnel</label>
                                <input 
                                    type="email" 
                                    value={formData.email}
                                    onChange={(e) => updateField("email", e.target.value)}
                                    className="w-full bg-white/5 border border-white/10 rounded-xl p-3 focus:border-upyb-blue outline-none"
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm text-gray-400">Téléphone</label>
                                <input 
                                    type="tel" 
                                    value={formData.phone}
                                    onChange={(e) => updateField("phone", e.target.value)}
                                    className="w-full bg-white/5 border border-white/10 rounded-xl p-3 focus:border-upyb-blue outline-none"
                                />
                            </div>
                        </motion.div>
                    )}

                </AnimatePresence>
             </div>

             {/* FOOTER ACTIONS */}
             <div className="flex justify-between mt-8 pt-6 border-t border-white/10">
                <button 
                    onClick={handlePrev}
                    disabled={currentStep === 1}
                    className={`flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-colors ${currentStep === 1 ? "opacity-0 pointer-events-none" : "hover:bg-white/10"}`}
                >
                    <ArrowLeft size={18} /> Précédent
                </button>

                <button 
                    onClick={handleNext}
                    // Désactive si champs vides (validation simple)
                    disabled={
                        (currentStep === 1 && !formData.service) ||
                        (currentStep === 2 && !formData.budget) ||
                        (currentStep === 4 && (!formData.name || !formData.email))
                    }
                    className="flex items-center gap-2 px-8 py-3 rounded-full bg-white text-black font-bold hover:bg-upyb-purple hover:text-white transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                >
                    {currentStep === steps.length ? "Envoyer" : "Suivant"} <ArrowRight size={18} />
                </button>
             </div>

          </motion.div>
        )}
      </div>

    </main>
  );
}