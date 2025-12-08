import React from 'react';
import Marquee from './components/Marquee';
import SectionHeader from './components/SectionHeader';
import ServiceCard from './components/ServiceCard';
import Button from './components/Button';
import { MoveUpRight, Mail, Linkedin, PlayCircle, BarChart3, Bot, Settings2, Users } from 'lucide-react';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-cream text-main font-sans selection:bg-main selection:text-white relative">
      <Marquee />

      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-20">
        
        {/* --- Hero Section --- */}
        <section className="flex flex-col items-center text-center min-h-[74vh] mb-0">
          
          <div className="flex-1 flex flex-col justify-center items-center w-full max-w-5xl">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-normal font-serif leading-tight tracking-[-0.04em] text-main">
              Je structure vos opérations pour que vos CSM se concentrent sur ce qui compte :{" "}
              <span className="font-serif italic font-normal tracking-[-0.04em] text-transparent bg-clip-text bg-gradient-to-r from-[#FE6502] via-[#6A41BA] to-[#127CAE] pr-2">vos clients</span>
            </h1>

            <div className="flex flex-col items-center mt-28">
              <p className="font-sans font-medium text-main/60 text-sm leading-relaxed tracking-[-0.02em] mb-8">Vous avez un projet en tête ?</p>
              <div className="group relative cursor-pointer">
                <div className="absolute -inset-1 bg-gradient-to-r from-gray-200 to-gray-300 rounded-full blur opacity-25 group-hover:opacity-75 transition duration-200"></div>
                <button className="relative flex items-center bg-main text-cream pl-3 pr-6 py-2 rounded-full gap-3 hover:scale-105 transition-transform duration-300 text-left shadow-xl">
                  <img 
                    src="./avatar.jpg" 
                    alt="Avatar" 
                    className="w-9 h-9 rounded-full border-2 border-cream/20"
                  />
                  <div className="flex flex-col">
                    <span className="font-medium tracking-tight text-sm">Discussons-en</span>
                    <span className="text-[10px] text-cream/60 font-light tracking-wide leading-none mt-0.5">Prenez rendez-vous en un clic</span>
                  </div>
                </button>
              </div>
            </div>
          </div>

          {/* Logos */}
          <div className="w-full pb-6 pt-0 mt-auto overflow-hidden">
            <div className="flex flex-wrap justify-center gap-12 md:gap-24 items-center opacity-40 grayscale hover:grayscale-0 transition-all duration-500 text-main">
               {/* Using text for logos as placeholders */}
               <span className="font-bold text-xl font-mono">make</span>
               <span className="font-bold text-xl font-sans">n8n</span>
               <span className="font-bold text-xl flex items-center gap-1"><div className="w-4 h-4 bg-main rotate-45"></div>Vitally</span>
               <span className="font-bold text-xl">HubSpot</span>
               <span className="font-bold text-xl italic">pipedrive</span>
               <span className="font-bold text-xl flex items-center gap-1"><div className="w-4 h-3 bg-main rounded-sm"></div>Airtable</span>
            </div>
          </div>
        </section>

        <SectionHeader text="/ PRESTATIONS" />

        {/* --- Services Grid --- */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-24">
          
          <ServiceCard title="Automatisation">
            <div className="w-full h-full p-6 relative flex flex-col items-center justify-center bg-white/40">
               {/* Visual approximation of automation flow */}
               <div className="bg-[#2B0608] text-[#EBE7E0] px-4 py-2 rounded-full text-sm font-bold shadow-lg flex items-center gap-2 mb-8 animate-bounce font-mono">
                  <PlayCircle size={16} /> Backing Up
               </div>
               <div className="absolute bottom-6 left-6 right-6 bg-[#EBE7E0] p-4 rounded-lg shadow-sm text-xs text-main/80 border border-main/10 font-mono">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-semibold text-main">Invitations</span>
                    <span className="bg-main text-[#EBE7E0] text-[10px] px-2 py-0.5 rounded-full">invite this person</span>
                  </div>
                  <p className="tracking-tighter">Fuel your application's growth by making it seamless to invite teams.</p>
               </div>
            </div>
          </ServiceCard>

          <ServiceCard title="Implémentation">
             <div className="w-full h-full p-4 flex items-center justify-center">
                {/* Mockup of a dashboard */}
                <div className="w-4/5 bg-white rounded-lg shadow-md border border-gray-100 p-3 scale-95 hover:scale-100 transition-transform duration-500">
                   <div className="flex gap-2 mb-3">
                      <div className="w-2 h-2 rounded-full bg-red-400"></div>
                      <div className="w-2 h-2 rounded-full bg-yellow-400"></div>
                      <div className="w-2 h-2 rounded-full bg-green-400"></div>
                   </div>
                   <div className="space-y-2">
                      <div className="h-2 bg-gray-100 rounded w-3/4"></div>
                      <div className="h-2 bg-gray-100 rounded w-1/2"></div>
                      <div className="mt-4 p-2 bg-blue-50 rounded border border-blue-100 flex items-center gap-2">
                        <BarChart3 size={16} className="text-blue-500" />
                        <span className="text-[10px] font-medium text-blue-700 font-mono">Analytics Engine</span>
                      </div>
                   </div>
                </div>
             </div>
          </ServiceCard>

          <ServiceCard title="Agent IA">
            <div className="w-full h-full p-6 flex flex-col justify-end">
               {/* Chat Interface Mockup */}
               <div className="bg-white rounded-t-xl shadow-sm border border-main/10 p-4 w-full font-mono text-xs">
                  <div className="flex items-start gap-3 mb-4">
                     <div className="bg-main/10 p-1 rounded-full"><Bot size={14} className="text-main"/></div>
                     <div className="text-[10px] text-main/80 bg-gray-50 p-2 rounded-tr-lg rounded-bl-lg rounded-br-lg tracking-tight">
                        The total recognized revenue for Q4 2024 is <span className="font-bold text-main">$148,124.00</span>.
                     </div>
                  </div>
                  <div className="flex items-start gap-3 justify-end mb-2">
                     <div className="text-[10px] text-main/80 bg-main/5 p-2 rounded-tl-lg rounded-bl-lg rounded-br-lg tracking-tight">
                        What is the forecast?
                     </div>
                  </div>
                  <div className="mt-2 relative">
                     <input disabled placeholder="Ask sequence..." className="w-full text-[10px] p-2 bg-gray-50 rounded border border-gray-200" />
                  </div>
               </div>
            </div>
          </ServiceCard>

          <ServiceCard title="Data">
            <div className="w-full h-full p-4 flex items-center justify-center overflow-hidden">
                <div className="w-full bg-white rounded shadow-sm border border-gray-200 text-[10px] overflow-hidden font-mono">
                   <div className="flex border-b border-gray-100 bg-gray-50 font-medium text-main/60">
                      <div className="flex-1 p-2">Customer</div>
                      <div className="flex-1 p-2">Total</div>
                      <div className="flex-1 p-2">Jan</div>
                   </div>
                   <div className="flex border-b border-gray-50 text-main">
                      <div className="flex-1 p-2 flex items-center gap-1"><div className="w-2 h-2 rounded-full bg-main"></div> Intercom</div>
                      <div className="flex-1 p-2">$170k</div>
                      <div className="flex-1 p-2 text-main/40">$14k</div>
                   </div>
                   <div className="flex border-b border-gray-50 text-main">
                      <div className="flex-1 p-2 flex items-center gap-1"><div className="w-2 h-2 rounded-full bg-main/60"></div> DocuSign</div>
                      <div className="flex-1 p-2">$124k</div>
                      <div className="flex-1 p-2 text-main/40">-</div>
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
                      src="./laurene.jpg" 
                      alt="Laurène Watrelot sur scène"
                      className="relative rounded-xl w-full object-cover aspect-[4/5] grayscale hover:grayscale-0 transition-all duration-500 border-4 border-white rotate-2 shadow-[0_1px_4px_0_rgba(0,0,0,0.1)]" 
                   />
                </div>
              </div>

              {/* Text Column */}
              <div className="lg:col-span-7 flex flex-col gap-12">
                 
                 {/* Intro Text */}
                 <div>
                   <h2 className="text-3xl md:text-4xl font-normal leading-snug tracking-[-0.02em] mb-8">
                      Hello, moi c'est Laurène <span className="text-main/60">— j'aide les startups à mieux s'occuper de leurs clients grâce à des outils bien pensés.</span>
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