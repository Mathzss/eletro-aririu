import React, { useState, useEffect } from "react";
import { SpeedInsights } from "@vercel/speed-insights/react";
import {
  Zap,
  Settings,
  Snowflake,
  MapPin,
  Phone,
  Navigation,
  ExternalLink,
  Clock,
  CheckCircle,
  Menu,
  X,
} from "lucide-react";

/**
 * COMPONENTE PRINCIPAL: App
 * Estrutura de Landing Page Única (SPA)
 */
export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Informações da Oficina
  const config = {
    nome: "Eletro Aririú",
    whatsapp: "5548984022945", //número real
    endereco: "Av. Bom Jesus de Nazaré, 1958 - Aririu, Palhoça - SC, 88135-101",
    googleMapsUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14136.91427508493!2d-48.675!3d-27.65!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x952737f000000000%3A0x0!2zRWxldHJvIEFyaXJpw7o!5e0!3m2!1spt-BR!2sbr!4v1700000000000!5m2!1spt-BR!2sbr",
    rotaUrl:
      "https://www.google.com/maps/dir/?api=1&destination=Eletro+Aririu+Palhoça",
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white font-sans selection:bg-orange-500 selection:text-white">
      {/* NAVBAR */}
      <nav className="fixed w-full z-50 bg-black/90 backdrop-blur-md border-b border-white/10">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <img
              src="/logo.png"
              alt="Eletro Aririú Logo"
              className="h-10 w-auto"
            />
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-8 text-sm font-medium uppercase tracking-wider">
            <a href="#inicio" className="hover:text-blue-500 transition">
              Início
            </a>
            <a href="#promocoes" className="hover:text-orange-500 transition">
              Promoções
            </a>
            <a href="#servicos" className="hover:text-blue-500 transition">
              Serviços
            </a>
            <a href="#localizacao" className="hover:text-blue-500 transition">
              Localização
            </a>
          </div>

          <div className="flex items-center gap-4">
            <a
              href={`https://wa.me/${config.whatsapp}`}
              className="hidden sm:flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-5 py-2 rounded-full font-bold transition-all transform hover:scale-105"
            >
              <Phone size={18} /> <span className="text-sm">WhatsApp</span>
            </a>
            <button
              className="md:hidden text-white"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-slate-900 border-b border-white/10 p-4 flex flex-col gap-4 animate-in slide-in-from-top duration-300">
            <a
              href="#inicio"
              onClick={() => setIsMenuOpen(false)}
              className="p-2 border-b border-white/5"
            >
              Início
            </a>
            <a
              href="#promocoes"
              onClick={() => setIsMenuOpen(false)}
              className="p-2 border-b border-white/5"
            >
              Promoções
            </a>
            <a
              href="#servicos"
              onClick={() => setIsMenuOpen(false)}
              className="p-2 border-b border-white/5"
            >
              Serviços
            </a>
            <a
              href="#localizacao"
              onClick={() => setIsMenuOpen(false)}
              className="p-2"
            >
              Localização
            </a>
          </div>
        )}
      </nav>

      {/* HERO SECTION */}
      <section id="inicio" className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/20 blur-[120px] rounded-full"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-orange-600/10 blur-[120px] rounded-full"></div>
        </div>

        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="flex-1 text-center md:text-left z-10">
            <h2 className="text-blue-500 font-bold uppercase tracking-widest mb-2">
              Excelência Automóvel
            </h2>
            <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight">
              A energia que o seu{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">
                veículo precisa.
              </span>
            </h1>
            <p className="text-slate-400 text-lg mb-8 max-w-lg">
              Especialistas em elétrica e mecânica geral. Tecnologia de ponta e
              confiança para você rodar tranquilo.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <a
                href={config.rotaUrl}
                target="_blank"
                className="flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-bold transition-all shadow-lg shadow-blue-900/20"
              >
                <Navigation size={20} /> Traçar Rota
              </a>
              <a
                href="#servicos"
                className="flex items-center justify-center gap-2 border border-slate-700 hover:bg-slate-800 text-white px-8 py-4 rounded-xl font-bold transition-all"
              >
                Ver Serviços
              </a>
            </div>
          </div>

          <div className="flex-1 relative group">
            <div className="absolute inset-0 bg-blue-500 rounded-full blur-2xl opacity-20 group-hover:opacity-30 transition-opacity"></div>
            <div className="relative z-10 w-72 h-72 md:w-[450px] md:h-[450px] mx-auto bg-slate-800 border-4 border-slate-700 rounded-3xl overflow-hidden shadow-2xl rotate-3 group-hover:rotate-0 transition-transform duration-500">
              <img
                src="/mascote.png"
                alt="Mascote Eletro Aririú"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* PROMOÇÕES */}
      <section id="promocoes" className="py-16">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-r from-orange-600 to-orange-400 rounded-3xl p-8 md:p-12 shadow-2xl shadow-orange-900/20 relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:scale-110 transition-transform">
              <Zap size={150} />
            </div>

            <div className="relative z-10 flex flex-col md:flex-row items-center gap-8 justify-between">
              <div className="text-center md:text-left">
                <span className="bg-white text-orange-600 px-3 py-1 rounded-full text-xs font-black uppercase tracking-widest mb-4 inline-block">
                  Oferta Especial
                </span>
                <h3 className="text-4xl font-black text-white mb-2">
                  Troca de Gás do Ar condicionado!
                </h3>
                <p className="text-orange-50 text-lg">
                  Traga seu veículo para trocar o gás e deixe o calor de lado.
                  Entre em Contato conosco!
                </p>
              </div>
              <a
                href={`https://wa.me/${config.whatsapp}?text=Quero%20arrumar%20meu%20ar_condicionado,%20vim%20pelo%20site!`}
                className="bg-black text-white px-10 py-4 rounded-full font-black uppercase tracking-tighter hover:bg-slate-900 transition-all transform hover:scale-105 shadow-xl"
              >
                Entrar em Contato
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* SERVIÇOS */}
      <section id="servicos" className="py-24 bg-slate-900/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black mb-4 uppercase italic">
              O que fazemos por você
            </h2>
            <div className="h-1.5 w-24 bg-blue-600 mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ServiceCard
              icon={<Zap className="text-blue-500" size={32} />}
              title="Elétrica"
              items={[
                "Baterias",
                "Alternadores",
                "Injeção Eletrônica",
                "Iluminação LED",
              ]}
            />
            <ServiceCard
              icon={<Settings className="text-slate-400" size={32} />}
              title="Mecânica Geral"
              items={[
                "Suspensão",
                "Freios",
                "Troca de Óleo",
                "Troca de Óleo de cambio automático",
                "Embreagem",
              ]}
            />
            <ServiceCard
              icon={<Snowflake className="text-cyan-400" size={32} />}
              title="Ar Condicionado"
              items={[
                "Higienização",
                "Recarga de Gás",
                "Troca de Filtros",
                "Reparo de Fugas",
              ]}
            />
          </div>
        </div>
      </section>

      {/* LOCALIZAÇÃO */}
      <section id="localizacao" className="py-24">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-12 items-stretch">
            {/* Info */}
            <div className="flex-1 flex flex-col justify-center">
              <h2 className="text-3xl font-black mb-8 flex items-center gap-3">
                <MapPin className="text-blue-500" /> Onde nos encontrar
              </h2>

              <div className="space-y-6 mb-10">
                <div className="flex gap-4">
                  <div className="bg-slate-800 p-3 rounded-lg">
                    <Clock className="text-blue-400" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-200 uppercase text-sm">
                      Horário de Funcionamento
                    </h4>
                    <p className="text-slate-400 italic">
                      Segunda a Sexta: 07:00 - 18:00
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="bg-slate-800 p-3 rounded-lg">
                    <MapPin className="text-blue-400" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-200 uppercase text-sm">
                      Endereço
                    </h4>
                    <p className="text-slate-400">
                      Av. Bom Jesus de Nazaré, 1958 - Aririu, Palhoça - SC,
                      88135-101
                    </p>
                  </div>
                </div>
              </div>

              <a
                href={config.rotaUrl}
                target="_blank"
                className="group flex items-center justify-between bg-slate-800 hover:bg-slate-700 border border-slate-700 p-5 rounded-2xl transition-all"
              >
                <div className="flex items-center gap-4">
                  <div className="bg-blue-600 p-3 rounded-xl">
                    <Navigation size={24} />
                  </div>
                  <span className="font-bold text-lg">
                    Abrir no GPS (Google Maps)
                  </span>
                </div>
                <ExternalLink className="text-slate-500 group-hover:text-blue-400" />
              </a>
            </div>

            {/* Mapa Iframe */}
            <div className="flex-1 min-h-[400px] bg-slate-800 rounded-3xl overflow-hidden border-2 border-slate-800 shadow-inner">
              <iframe
                src={config.googleMapsUrl}
                className="w-full h-full filter grayscale invert contrast-75"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-black py-12 border-t border-white/5">
        <div className="container mx-auto px-4 text-center">
          <div className="flex justify-center mb-6 opacity-50 grayscale hover:grayscale-0 transition-all">
            {/* Logo Footer */}
            <div className="flex items-center gap-2 font-black italic text-xl">
              <span className="text-white">ELETRO</span>
              <span className="text-blue-500">ARIRIÚ</span>
            </div>
          </div>
          <p className="text-slate-600 text-sm mb-2 uppercase tracking-widest">
            Qualidade e confiança em cada peça.
          </p>
          <p className="text-slate-700 text-xs">
            © 2026 Eletro Aririu Automóveis. Todos os direitos reservados.
          </p>
        </div>
      </footer>

      {/* Floating WhatsApp Mobile */}
      <a
        href={`https://wa.me/${config.whatsapp}`}
        className="md:hidden fixed bottom-6 right-6 z-50 bg-green-600 p-4 rounded-full shadow-2xl shadow-green-900/40 animate-bounce"
      >
        <Phone size={30} />
      </a>
    </div>
  );
}

/**
 * COMPONENTE: ServiceCard
 */
function ServiceCard({ icon, title, items }) {
  return (
    <div className="bg-slate-900/40 border border-white/5 p-8 rounded-3xl hover:border-blue-500/30 transition-all group">
      <div className="mb-6 transform group-hover:scale-110 transition-transform duration-300">
        {icon}
      </div>
      <h3 className="text-2xl font-bold mb-4 uppercase italic tracking-tighter">
        {title}
      </h3>
      <ul className="space-y-3">
        {items.map((item, idx) => (
          <li
            key={idx}
            className="flex items-center gap-2 text-slate-400 text-sm"
          >
            <CheckCircle size={14} className="text-blue-500/60" /> {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
