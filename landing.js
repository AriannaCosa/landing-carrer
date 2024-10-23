import React from 'react';
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { User, Mail, Star, Target, Users, Mic, Brain, Award } from 'lucide-react';

const LandingPage = () => {
  const testimonials = [
    {
      name: "Marco Rossi",
      role: "CEO Startup",
      text: "Questo corso ha trasformato il mio modo di presentare. Ora mi sento sicuro in ogni situazione.",
      image: "/api/placeholder/100/100"
    },
    {
      name: "Laura Bianchi",
      role: "Marketing Manager",
      text: "Ho imparato tecniche che uso quotidianamente. Il mio team ha notato un enorme miglioramento.",
      image: "/api/placeholder/100/100"
    },
    {
      name: "Giuseppe Verdi",
      role: "Libero Professionista",
      text: "Investimento eccellente. Ho triplicato le conversioni nelle mie presentazioni commerciali.",
      image: "/api/placeholder/100/100"
    }
  ];

  const features = [
    {
      icon: <Mic className="w-12 h-12 text-blue-500" />,
      title: "Tecniche Vocali",
      description: "Impara a modulare la voce e utilizzare il tono giusto"
    },
    {
      icon: <Brain className="w-12 h-12 text-blue-500" />,
      title: "Gestione dell'Ansia",
      description: "Strategie pratiche per superare la paura del palco"
    },
    {
      icon: <Users className="w-12 h-12 text-blue-500" />,
      title: "Linguaggio del Corpo",
      description: "Padroneggia la comunicazione non verbale"
    },
    {
      icon: <Target className="w-12 h-12 text-blue-500" />,
      title: "Struttura del Discorso",
      description: "Crea presentazioni che catturano l'attenzione"
    }
  ];
};

export default LandingPage;