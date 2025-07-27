import Scene from '@/components/Scene';
import Header from '@/components/sections/Header';
import About from '@/components/sections/About';
import Projects from '@/components/sections/Projects';
import Skills from '@/components/sections/Skills';
import Programming from '@/components/sections/Programming';
import Education from '@/components/sections/Education';
import Extracurriculars from '@/components/sections/Extracurriculars';
import FloatingAstronaut from '@/components/FloatingAstronaut';

export default function Home() {
  
  return (
    <main className="min-h-screen relative bg-[#F2F3F5] text-black dark:bg-black dark:text-white transition-colors duration-300">
      <Scene />
      <div className="fixed top-2 right-2 sm:top-4 sm:right-4 z-[9999] 
                w-12 h-12 
                xs:w-16 xs:h-16 
                sm:w-20 sm:h-20 
                md:w-24 md:h-24 
                lg:w-32 lg:h-32 
                xl:w-40 xl:h-40 
                2xl:w-56 2xl:h-56 
                flex items-center justify-center cursor-pointer 
                drop-shadow-[0_2px_12px_rgba(255,255,255,0.4)]
                sm:drop-shadow-[0_4px_24px_rgba(255,255,255,0.7)]
                transition-all duration-300 ease-in-out
                hover:scale-110 active:scale-95">
        <FloatingAstronaut />
      </div>
      
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-start text-black dark:text-white px-4 py-16 overflow-y-auto">
        <Header />
        
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
    
          <div className="md:col-span-2 space-y-8">
            <About />
            <Projects />
          </div>

          <div className="space-y-8">
            <Education />
            <Skills />
            <Programming />
            <Extracurriculars />
          </div>
        </div>
      </div>
    </main>
  );
}
