import React from 'react';
import Marquee from './components/Marquee';
import SectionHeader from './components/SectionHeader';
import ServiceCard from './components/ServiceCard';
import Button from './components/Button';
import { MoveUpRight, Mail, BarChart3, TrendingUp, Rocket, Database, Users, MessageSquare, StickyNote, Mic, FileCheck, GraduationCap, LineChart, Sparkles, FileText, ArrowRight, Settings2 } from 'lucide-react';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-cream text-main font-sans selection:bg-main selection:text-white relative">
      <Marquee />

      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-20">
        
        {/* --- Hero Section --- */}
        <section className="flex flex-col items-center text-center min-h-[74vh] mb-0">
          
          <div className="flex-1 flex flex-col justify-center items-center w-full max-w-5xl">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-normal font-serif leading-tight tracking-[-0.04em] text-main">
              Je structure vos opérations pour que vos équipes se concentrent sur ce qui compte :{" "}
              <span className="font-serif italic font-normal tracking-[-0.04em] text-transparent bg-clip-text bg-gradient-to-r from-[#FE6502] via-[#6A41BA] to-[#127CAE] pr-2">vos clients</span>
            </h1>

            <div className="flex flex-col items-center mt-28">
              <p className="font-sans font-medium text-main/60 text-sm leading-relaxed tracking-[-0.02em] mb-8">
                Vous avez un projet en tête ?
              </p>
            
              {/* Hero CTA: meeting booking */}
              <a
                href="https://meet.laurene-wat.com/intro"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative cursor-pointer"
                aria-label="Prendre rendez-vous"
              >
                <div className="absolute -inset-1 bg-gradient-to-r from-gray-200 to-gray-300 rounded-full blur opacity-25 group-hover:opacity-75 transition duration-200"></div>
              
                <div className="relative flex items-center bg-main text-cream pl-3 pr-6 py-2 rounded-full gap-3 hover:scale-105 transition-transform duration-300 text-left shadow-xl">
                  <img
                    src={`${import.meta.env.BASE_URL}images/thumbnail.jpg`}
                    alt="Avatar"
                    className="w-9 h-9 rounded-full border-2 border-cream/20"
                  />
                  <div className="flex flex-col">
                    <span className="font-medium tracking-tight text-sm">Discussons-en</span>
                    <span className="text-[10px] text-cream/60 font-light tracking-wide leading-none mt-0.5">
                      Prenez rendez-vous en un clic
                    </span>
                  </div>
                  <MoveUpRight className="w-4 h-4 text-cream/80" />
                </div>
              </a>



          {/* Logos */}
          <div className="w-full pb-6 pt-0 mt-auto overflow-hidden">
            <div className="flex flex-wrap justify-center gap-8 md:gap-16 items-center">
              <img src={`${import.meta.env.BASE_URL}images/make-full-logo.png`} alt="Make" className="h-6 md:h-8 w-auto object-contain opacity-40 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-500" />
              <img src={`${import.meta.env.BASE_URL}images/n8n-full-logo.svg`} alt="n8n" className="h-6 md:h-8 w-auto object-contain opacity-40 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-500" />
              <img src={`${import.meta.env.BASE_URL}images/vitally-full-logo.svg`} alt="Vitally" className="h-6 md:h-8 w-auto object-contain opacity-40 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-500" />
              <img src={`${import.meta.env.BASE_URL}images/hubspot-full-logo.svg`} alt="HubSpot" className="h-6 md:h-8 w-auto object-contain opacity-40 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-500" />
              <img src={`${import.meta.env.BASE_URL}images/zendesk-full-logo.png`} alt="Zendesk" className="h-6 md:h-8 w-auto object-contain opacity-40 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-500" />
              <img src={`${import.meta.env.BASE_URL}images/airtable-full-logo.svg`} alt="Airtable" className="h-6 md:h-8 w-auto object-contain opacity-40 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-500" />

            </div>
          </div>
        </section>

        <SectionHeader text="/ PRESTATIONS" />

        {/* --- Services Grid --- */}
        <section className="grid grid-cols-1 md:grid-cols-5 gap-2 mb-24">
          
          <ServiceCard title="Automatisation" className="md:col-span-2">
            <div className="w-full h-full relative flex flex-col items-center justify-center p-4 overflow-hidden">
               {/* Abstract background flow line */}
               <div className="absolute inset-0 flex items-center justify-center opacity-30 pointer-events-none">
                  <div className="w-[1px] h-full bg-gradient-to-b from-transparent via-main/10 to-transparent dashed"></div>
               </div>

               {/* Notification 1: Upsell */}
               <div className="relative bg-white border border-main/10 rounded-lg p-3 shadow-[0_4px_12px_-2px_rgba(0,0,0,0.05)] w-[90%] max-w-[260px] mb-4 transform -rotate-1 hover:rotate-0 transition-transform duration-500 cursor-default select-none group">
                  <div className="flex items-center gap-3">
                     <div className="bg-[#EBE7E0] p-1.5 rounded-md text-main group-hover:bg-main group-hover:text-cream transition-colors duration-300">
                        <TrendingUp size={16} />
                     </div>
                     <div>
                        <div className="text-xs font-semibold text-main tracking-tight">Playbook Upsell</div>
                        <div className="text-[10px] text-main/60 font-medium">Déclenché automatiquement</div>
                     </div>
                     <div className="ml-auto h-1.5 w-1.5 rounded-full bg-green-500/80"></div>
                  </div>
               </div>

               {/* Notification 2: Onboarding */}
               <div className="relative bg-white border border-main/10 rounded-lg p-3 shadow-[0_4px_12px_-2px_rgba(0,0,0,0.05)] w-[90%] max-w-[260px] transform rotate-1 translate-x-4 hover:translate-x-0 hover:rotate-0 transition-all duration-500 cursor-default select-none group">
                  <div className="flex items-center gap-3 mb-2">
                     <div className="bg-[#EBE7E0] p-1.5 rounded-md text-main group-hover:bg-main group-hover:text-cream transition-colors duration-300">
                        <Rocket size={16} />
                     </div>
                     <div className="flex-1">
                        <div className="text-xs font-semibold text-main tracking-tight">Onboarding Client</div>
                        <div className="text-[10px] text-main/60 font-medium">Étape 2/5 validée</div>
                     </div>
                  </div>
                  {/* Progress bar */}
                  <div className="w-full bg-gray-100 rounded-full h-1 overflow-hidden mt-1">
                     <div className="bg-main h-full rounded-full w-2/5 group-hover:w-1/2 transition-all duration-700 ease-out"></div>
                  </div>
               </div>
            </div>
          </ServiceCard>

          <ServiceCard title="Implémentation" className="md:col-span-3">
             <div className="w-full h-full p-4 flex items-center justify-center relative overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-[0.03]" 
                     style={{ backgroundImage: 'radial-gradient(#2B0608 1px, transparent 1px)', backgroundSize: '16px 16px' }}>
                </div>

                <div className="flex items-center justify-between w-full max-w-lg px-2 sm:px-6 z-10">
                   
                   {/* Left Column: Chaos / Unstructured Data */}
                   <div className="relative w-32 h-48 flex-shrink-0">
                      {/* Floating Particles */}
                      <div className="absolute top-8 left-2 p-2 bg-white border border-main/10 shadow-sm rounded rotate-[-12deg] z-10">
                         <Database size={14} className="text-orange-600 opacity-60"/>
                      </div>
                      <div className="absolute top-2 left-16 p-2 bg-white border border-main/10 shadow-sm rounded rotate-[8deg] z-0">
                         <FileText size={14} className="text-blue-600 opacity-60"/>
                      </div>
                      <div className="absolute top-20 left-10 p-2 bg-white border border-main/10 shadow-sm rounded rotate-[-6deg] z-20">
                         <Users size={14} className="text-purple-600 opacity-60"/>
                      </div>
                      <div className="absolute bottom-8 left-4 p-2 bg-white border border-main/10 shadow-sm rounded rotate-[15deg] z-10">
                         <MessageSquare size={14} className="text-green-600 opacity-60"/>
                      </div>
                      <div className="absolute bottom-4 left-20 p-2 bg-white border border-main/10 shadow-sm rounded rotate-[-4deg] z-0">
                         <Mail size={14} className="text-red-400 opacity-60"/>
                      </div>
                      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-2 bg-white border border-main/10 shadow-sm rounded rotate-[24deg] -z-10 blur-[1px]">
                         <StickyNote size={14} className="text-yellow-500 opacity-40"/>
                      </div>
                      
                      {/* Abstract connection lines indicating mess */}
                      <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-20" viewBox="0 0 160 192">
                         <path d="M40 40 Q 80 80 60 100 T 80 160" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" />
                         <path d="M100 30 Q 60 60 90 90" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" />
                      </svg>
                   </div>

                   {/* Connector: Cleanup Process */}
                   <div className="flex-1 flex justify-center items-center mx-4 opacity-100 z-20 text-main/30">
                      <div className="relative flex items-center">
                          {/* Line */}
                          <div className="w-12 h-[1px] bg-gradient-to-r from-transparent via-main/30 to-main/30"></div>
                          
                          {/* Central Processor Icon */}
                          <div className="bg-white border border-main/10 p-1.5 rounded-full shadow-sm z-10 mx-[-8px]">
                             <Settings2 size={14} className="text-main/60 animate-spin-slow" style={{ animationDuration: '8s' }} />
                          </div>

                          {/* Arrow Head */}
                          <div className="w-8 h-[1px] bg-gradient-to-r from-main/30 to-transparent relative">
                            <ArrowRight size={12} className="absolute right-0 top-1/2 -translate-y-1/2 text-main/40" />
                          </div>
                      </div>
                   </div>

                   {/* Right Column: Custom Views (Structured & Tidy) */}
                   <div className="relative w-40 flex-shrink-0 flex flex-col justify-center gap-3">
                       
                       {/* Onboarding (Top) */}
                       <div className="w-full bg-white border border-main/10 rounded-lg p-3 shadow-[0_2px_8px_-2px_rgba(0,0,0,0.05)] hover:shadow-md transition-all duration-300 z-20">
                           <div className="flex items-center justify-between mb-2 border-b border-gray-50 pb-1.5">
                               <span className="text-[10px] font-bold text-main uppercase tracking-wider">Onboarding</span>
                               <div className="flex gap-1">
                                  <div className="w-1.5 h-1.5 rounded-full bg-orange-400"></div>
                                  <div className="w-1.5 h-1.5 rounded-full bg-blue-400"></div>
                               </div>
                           </div>
                           <div className="space-y-1.5">
                               <div className="flex items-center gap-2">
                                   <div className="w-4 h-4 rounded bg-gray-50 flex items-center justify-center">
                                       <BarChart3 size={10} className="text-main/40"/>
                                   </div>
                                   <div className="h-1 bg-gray-100 rounded w-2/3"></div>
                               </div>
                           </div>
                       </div>

                       {/* Support (Middle) */}
                       <div className="w-full bg-white border border-main/10 rounded-lg p-3 shadow-[0_2px_8px_-2px_rgba(0,0,0,0.05)] hover:shadow-md transition-all duration-300 z-10 ml-2">
                           <div className="flex items-center justify-between mb-2 border-b border-gray-50 pb-1.5">
                                <span className="text-[9px] font-bold text-main uppercase tracking-wider">Support</span>
                                <div className="w-1 h-1 rounded-full bg-purple-400"></div>
                           </div>
                            <div className="space-y-1">
                               <div className="h-1 bg-gray-100 rounded w-full"></div>
                               <div className="h-1 bg-gray-50 rounded w-1/2"></div>
                           </div>
                       </div>
                       
                       {/* Sales (Bottom) */}
                       <div className="w-full bg-white border border-main/10 rounded-lg p-3 shadow-[0_2px_8px_-2px_rgba(0,0,0,0.05)] hover:shadow-md transition-all duration-300 z-0 ml-4">
                           <div className="flex items-center justify-between mb-2 border-b border-gray-50 pb-1.5">
                                <span className="text-[9px] font-bold text-main uppercase tracking-wider">Sales</span>
                                <div className="w-1 h-1 rounded-full bg-green-400"></div>
                           </div>
                           <div className="space-y-1">
                               <div className="h-1 bg-gray-100 rounded w-3/4"></div>
                           </div>
                       </div>
                   </div>

                </div>
             </div>
          </ServiceCard>

          <ServiceCard title="Agents IA" className="md:col-span-3">
             <div className="w-full h-full p-2 flex items-center justify-center">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full">
                   
                   {/* Agent 1: Copilote RDV */}
                   <div className="bg-white rounded-xl border border-main/10 shadow-sm p-4 hover:scale-[1.02] transition-all duration-300 flex flex-col justify-between h-32 group">
                      <div className="flex justify-between items-start">
                         <div className="p-2 rounded-lg bg-orange-50 text-orange-600 group-hover:bg-orange-600 group-hover:text-white transition-colors">
                            <Mic size={16} />
                         </div>
                         <div className="flex gap-1">
                            <span className="animate-pulse w-1 h-1 bg-red-500 rounded-full"></span>
                         </div>
                      </div>
                      <div>
                         <h4 className="font-semibold text-xs text-main mb-2">Copilote RDV</h4>
                         <div className="flex items-center gap-2 bg-gray-50 rounded-md p-1.5 border border-gray-100">
                             <FileCheck size={12} className="text-green-600"/>
                             <span className="text-[10px] text-main/60 font-medium">Synthèse générée</span>
                         </div>
                      </div>
                   </div>

                   {/* Agent 2: Formateur CSM */}
                   <div className="bg-white rounded-xl border border-main/10 shadow-sm p-4 hover:scale-[1.02] transition-all duration-300 flex flex-col justify-between h-32 group sm:mt-8">
                      <div className="flex justify-between items-start">
                         <div className="p-2 rounded-lg bg-blue-50 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                            <GraduationCap size={16} />
                         </div>
                         <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                            <Sparkles size={12} className="text-amber-400"/>
                         </div>
                      </div>
                      <div>
                         <h4 className="font-semibold text-xs text-main mb-2">Formateur CSM</h4>
                         <div className="relative h-1.5 w-full bg-gray-100 rounded-full overflow-hidden mb-1">
                            <div className="absolute top-0 left-0 h-full w-[85%] bg-blue-500 rounded-full"></div>
                         </div>
                         <span className="text-[10px] text-main/60 font-medium block text-right">Score: 85/100</span>
                      </div>
                   </div>

                   {/* Agent 3: Analyste Portefeuille */}
                   <div className="bg-white rounded-xl border border-main/10 shadow-sm p-4 hover:scale-[1.02] transition-all duration-300 flex flex-col justify-between h-32 group">
                      <div className="flex justify-between items-start">
                         <div className="p-2 rounded-lg bg-purple-50 text-purple-600 group-hover:bg-purple-600 group-hover:text-white transition-colors">
                            <LineChart size={16} />
                         </div>
                      </div>
                      <div>
                         <h4 className="font-semibold text-xs text-main mb-2">Analyste portefeuille</h4>
                         <div className="flex items-center gap-2">
                             <div className="px-2 py-0.5 rounded-full bg-green-100 text-green-700 text-[9px] font-bold tracking-wide uppercase">
                                Opportunité
                             </div>
                         </div>
                      </div>
                   </div>

                </div>
             </div>
          </ServiceCard>

          <ServiceCard title="Data" className="md:col-span-2">
            <div className="w-full h-full p-4 flex items-center justify-center overflow-hidden">
                <div className="w-[115%] -mr-[15%] relative bg-white rounded-l-xl border-y border-l border-main/5 shadow-sm overflow-hidden flex flex-col">
                   {/* Table Header */}
                   <div className="grid grid-cols-4 gap-2 p-3 bg-gray-50/80 border-b border-gray-100">
                      <div className="text-[9px] font-bold text-main/40 uppercase tracking-wider">Client</div>
                      <div className="text-[9px] font-bold text-main/40 uppercase tracking-wider">ARR</div>
                      <div className="text-[9px] font-bold text-main/40 uppercase tracking-wider">Santé</div>
                      <div className="text-[9px] font-bold text-main/40 uppercase tracking-wider text-right pr-4">Usage</div>
                   </div>

                   {/* Row 1 */}
                   <div className="grid grid-cols-4 gap-2 p-3 items-center border-b border-gray-50 hover:bg-gray-50/30 transition-colors">
                      <div className="flex items-center gap-2">
                         <div className="w-6 h-6 shrink-0 rounded-full bg-gray-100"></div>
                         <div className="h-2 w-12 bg-gray-100 rounded"></div>
                      </div>
                      <div className="h-2 w-8 bg-gray-100 rounded"></div>
                      <div className="flex">
                         <div className="h-4 w-10 bg-green-50 rounded-full flex items-center justify-center px-1.5">
                            <div className="w-full h-1 bg-green-300 rounded-full"></div>
                         </div>
                      </div>
                      <div className="flex justify-end pr-4">
                          <div className="w-12 h-1.5 bg-gray-100 rounded-full overflow-hidden">
                             <div className="h-full w-[80%] bg-main/20 rounded-full"></div>
                          </div>
                      </div>
                   </div>

                   {/* Row 2 */}
                   <div className="grid grid-cols-4 gap-2 p-3 items-center border-b border-gray-50 hover:bg-gray-50/30 transition-colors">
                      <div className="flex items-center gap-2">
                         <div className="w-6 h-6 shrink-0 rounded-full bg-gray-100"></div>
                         <div className="h-2 w-16 bg-gray-100 rounded"></div>
                      </div>
                      <div className="h-2 w-10 bg-gray-100 rounded"></div>
                      <div className="flex">
                         <div className="h-4 w-10 bg-orange-50 rounded-full flex items-center justify-center px-1.5">
                            <div className="w-full h-1 bg-orange-300 rounded-full"></div>
                         </div>
                      </div>
                      <div className="flex justify-end pr-4">
                          <div className="w-12 h-1.5 bg-gray-100 rounded-full overflow-hidden">
                             <div className="h-full w-[45%] bg-main/20 rounded-full"></div>
                          </div>
                      </div>
                   </div>

                   {/* Row 3 */}
                   <div className="grid grid-cols-4 gap-2 p-3 items-center border-b border-gray-50 hover:bg-gray-50/30 transition-colors">
                      <div className="flex items-center gap-2">
                         <div className="w-6 h-6 shrink-0 rounded-full bg-gray-100"></div>
                         <div className="h-2 w-10 bg-gray-100 rounded"></div>
                      </div>
                      <div className="h-2 w-8 bg-gray-100 rounded"></div>
                      <div className="flex">
                         <div className="h-4 w-10 bg-green-50 rounded-full flex items-center justify-center px-1.5">
                            <div className="w-full h-1 bg-green-300 rounded-full"></div>
                         </div>
                      </div>
                      <div className="flex justify-end pr-4">
                          <div className="w-12 h-1.5 bg-gray-100 rounded-full overflow-hidden">
                             <div className="h-full w-[90%] bg-main/20 rounded-full"></div>
                          </div>
                      </div>
                   </div>

                    {/* Row 4 (Cut off) */}
                   <div className="grid grid-cols-4 gap-2 p-3 items-center border-b border-gray-50 opacity-50">
                      <div className="flex items-center gap-2">
                         <div className="w-6 h-6 shrink-0 rounded-full bg-gray-100"></div>
                         <div className="h-2 w-14 bg-gray-100 rounded"></div>
                      </div>
                      <div className="h-2 w-12 bg-gray-100 rounded"></div>
                      <div className="flex">
                         <div className="h-4 w-10 bg-red-50 rounded-full flex items-center justify-center px-1.5">
                            <div className="w-full h-1 bg-red-300 rounded-full"></div>
                         </div>
                      </div>
                      <div className="flex justify-end pr-4">
                          <div className="w-12 h-1.5 bg-gray-100 rounded-full overflow-hidden">
                             <div className="h-full w-[20%] bg-main/20 rounded-full"></div>
                          </div>
                      </div>
                   </div>

                   {/* Row 5 (Barely visible) */}
                   <div className="grid grid-cols-4 gap-2 p-3 items-center opacity-20">
                      <div className="flex items-center gap-2">
                         <div className="w-6 h-6 shrink-0 rounded-full bg-gray-100"></div>
                         <div className="h-2 w-8 bg-gray-100 rounded"></div>
                      </div>
                      <div className="h-2 w-8 bg-gray-100 rounded"></div>
                   </div>
                </div>
            </div>
          </ServiceCard>

        </section>

        {/* --- About Section (Mixed with Conferences/Podcasts) --- */}
        <section className="mb-24">
           <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
              {/* Photo */}
              <div className="lg:col-span-5 flex justify-center lg:sticky lg:top-24">
                <div className="relative w-4/5 max-w-sm">
                   <img 
                   src={`${import.meta.env.BASE_URL}images/laurene.jpg`}  
                   alt="Laurène Watrelot sur scène"
                   className="relative rounded-xl w-full object-cover aspect-[4/5] transition-transform duration-500 border-4 border-white -rotate-2 hover:rotate-0 shadow-[0_1px_4px_0_rgba(0,0,0,0.1)]" 
                   />
                </div>
              </div>

              {/* Text Column */}
              <div className="lg:col-span-7 flex flex-col gap-12">
                 
                 {/* Intro Text */}
                 <div>
                   <h2 className="text-3xl md:text-4xl font-normal leading-snug tracking-[-0.02em] mb-8">
                      Hello, moi c'est Laurène <span className="text-main/60">- j'aide les startups à mieux s'occuper de leurs clients grâce à des outils bien pensés.</span>
                   </h2>

                   <div className="space-y-8">
                      <div>
                         <h3 className="font-medium text-sm text-main mb-1 tracking-[-0.02em]">
                            Vision stratégique
                         </h3>
                         <p className="font-medium text-main/60 text-sm leading-relaxed tracking-[-0.02em]">
                            Ex-Head of CS et membre du COMEX : je structure vos ops avec une vision globale, pas en silo.
                         </p>
                      </div>

                      <div>
                         <h3 className="font-medium text-sm text-main mb-1 tracking-[-0.02em]">
                            Double casquette métier & technique
                         </h3>
                         <p className="font-medium text-main/60 text-sm leading-relaxed tracking-[-0.02em]">
                            Je comprends vos enjeux ET je maîtrise les outils pour construire des solutions qui tiennent dans la durée.
                         </p>
                      </div>

                      <div>
                         <h3 className="font-medium text-sm text-main mb-1 tracking-[-0.02em]">
                            Expérience Terrain
                         </h3>
                         <p className="font-medium text-main/60 text-sm leading-relaxed tracking-[-0.02em]">
                            J'ai fait grandir une équipe CS du stade pre-seed jusqu'à la série B.
                         </p>
                      </div>
                   </div>
                 </div>

                 {/* Conférences Block */}
                <div className="bg-cream-dark rounded-xl">
                  <div className="px-3 py-2">
                    <div className="text-xs uppercase tracking-[0.01em] font-medium font-mono text-main/60">/ Conférences</div>
                  </div>
                  <div className="space-y-1 px-2 pb-2">
                    <a href="#" className="block bg-white rounded-lg shadow-[0_1px_4px_0_rgba(0,0,0,0.1)] hover:shadow-md transition-all group border border-transparent px-2 py-3">
                      <div className="flex justify-between items-start">
                        <h4 className="font-medium text-sm text-main group-hover:underline decoration-1 underline-offset-4 transition-all tracking-[-0.02em]">Just For Fun — Quand Le No‑Code Ne Se Prend Pas Au Sérieux</h4>
                        <MoveUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity text-main/60" />
                      </div>
                      <p className="text-sm font-medium text-main/60 mt-1 tracking-[-0.02em]">Grande Journée par No‑Code France, 2025</p>
                    </a>

                    <a href="#" className="block bg-white rounded-lg shadow-[0_1px_4px_0_rgba(0,0,0,0.1)] hover:shadow-md transition-all group border border-transparent px-2 py-3">
                      <div className="flex justify-between items-start">
                        <h4 className="font-medium text-sm text-main group-hover:underline decoration-1 underline-offset-4 transition-all tracking-[-0.02em]">Ne Laissez Pas Les Impayés Freiner Votre Business!</h4>
                        <MoveUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity text-main/60" />
                      </div>
                      <p className="text-sm font-medium text-main/60 mt-1 tracking-[-0.02em]">No‑Code France, Table Ronde #10, 2023</p>
                    </a>
                  </div>
                </div>

                {/* Podcasts Block */}
                <div className="bg-cream-dark rounded-xl mt-2">
                  <div className="px-3 py-2">
                    <div className="text-xs uppercase tracking-[0.01em] font-medium font-mono text-main/60">/ Podcasts</div>
                  </div>
                  <div className="space-y-1 px-2 pb-2">
                    <a href="#" className="block bg-white rounded-lg shadow-[0_1px_4px_0_rgba(0,0,0,0.1)] hover:shadow-md transition-all group border border-transparent px-2 py-3">
                      <div className="flex justify-between items-start">
                        <h4 className="font-medium text-sm text-main group-hover:underline decoration-1 underline-offset-4 transition-all tracking-[-0.02em]">Déployer Le No‑Code Dans Sa Boîte</h4>
                        <MoveUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity text-main/60" />
                      </div>
                      <p className="text-sm font-medium text-main/60 mt-1 tracking-[-0.02em]">No‑Code Talks avec Pierre Simonin, 2023</p>
                    </a>

                    <a href="#" className="block bg-white rounded-lg shadow-[0_1px_4px_0_rgba(0,0,0,0.1)] hover:shadow-md transition-all group border border-transparent px-2 py-3">
                      <div className="flex justify-between items-start">
                        <h4 className="font-medium text-sm text-main group-hover:underline decoration-1 underline-offset-4 transition-all tracking-[-0.02em]">Comment Les "No‑Code Ops" Impactent Le Service Client En Startup</h4>
                        <MoveUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity text-main/60" />
                      </div>
                      <p className="text-sm font-medium text-main/60 mt-1 tracking-[-0.02em]">Radio Contournement, 2021</p>
                    </a>
                  </div>
                </div>

              </div>
           </div>
        </section>

        {/* --- Footer --- */}
        <footer className="flex justify-center gap-4 pb-12">
           <Button variant="outline" className="rounded-full px-6 bg-transparent border-main/20 text-main" icon={<MoveUpRight size={14} />}>LinkedIn</Button>
           <Button variant="outline" className="rounded-full px-6 bg-transparent border-main/20 text-main" icon={<Mail size={14} />}>Mail</Button>
        </footer>

      </main>
    </div>
  );
};

export default App;
