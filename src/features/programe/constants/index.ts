import { Session } from "../types";
import intervenant1 from "@/core/assets/intervenant1.png";
import intervenant2 from "@/core/assets/intervenant2.png";
import intervenant3 from "@/core/assets/intervenant3.png";
import intervenant4 from "@/core/assets/intervenant4.png";
import intervenant5 from "@/core/assets/intervenant5.png";
import intervenant6 from "@/core/assets/intervenant6.png";
import intervenant7 from "@/core/assets/intervenant7.png";
import intervenant8 from "@/core/assets/intervenant8.png";

export const JOUR_1_SESSIONS: Session[] = [
  {
    id: "s1",
    title: "Cérémonie d'ouverture",
    hall: "Salle 2",
    startTime: "08:30",
    endTime: "09:30",
    speakers: [
      {
        id: "sp1",
        name: "Ursule Wonje",
        role: "Feminie",
        imageUrl: intervenant1.src
      },
      {
        id: "sp2",
        name: "Jane Doe",
        role: "Feminie",
        imageUrl: intervenant2.src
      }
    ]
  },
  {
    id: "s2",
    title: "Quels sont les premiers étapes pour travailler sa visibilite",
    hall: "Salle 1",
    startTime: "09:30",
    endTime: "10:30",
    speakers: [
      {
        id: "sp3",
        name: "Jane Doe",
        role: "Feminie",
        imageUrl: intervenant3.src
      },
      {
        id: "sp4",
        name: "Jane Doe",
        role: "Feminie",
        imageUrl: intervenant4.src
      },
      {
        id: "sp5",
        name: "Jane Doe",
        role: "Feminie",
        imageUrl: intervenant5.src
      },
      {
        id: "sp6",
        name: "Jane Doe",
        role: "Feminie",
        imageUrl: intervenant6.src
      }
    ]
  },
  {
    id: "s3",
    title: "Quels sont les premiers étapes pour travailler sa visibilite",
    hall: "Salle 1",
    startTime: "10:45",
    endTime: "11:45",
    speakers: [
      {
        id: "sp7",
        name: "Jane Doe",
        role: "Feminie",
        imageUrl: intervenant7.src
      },
      {
        id: "sp8",
        name: "Jane Doe",
        role: "Feminie",
        imageUrl: intervenant8.src
      },
      {
        id: "sp9",
        name: "Jane Doe",
        role: "Feminie",
        imageUrl: intervenant1.src
      }
    ]
  },
  {
    id: "s4",
    title: "Quels sont les premiers étapes pour travailler sa visibilite",
    hall: "Salle 2",
    startTime: "12:00",
    endTime: "13:00",
    speakers: [
      {
        id: "sp10",
        name: "Jane Doe",
        role: "Feminie",
        imageUrl: intervenant2.src
      },
      {
        id: "sp11",
        name: "Jane Doe",
        role: "Feminie",
        imageUrl: intervenant3.src
      },
      {
        id: "sp12",
        name: "Jane Doe",
        role: "Feminie",
        imageUrl: intervenant4.src
      },
      {
        id: "sp13",
        name: "Jane Doe",
        role: "Feminie",
        imageUrl: intervenant5.src
      }
    ]
  }
];

export const JOUR_2_SESSIONS: Session[] = [
  {
    id: "j2_s1",
    title: "Accueil & Installation",
    hall: "HALL",
    startTime: "08:30",
    endTime: "09:30",
    speakers: []
  },
  {
    id: "j2_s2",
    title: "Plénière d’ouverture",
    hall: "Grande Salle",
    startTime: "09:30",
    endTime: "11:30",
    speakers: [
      { id: "sp_j2_2_1", name: "Henriette Ekwe", role: "Journaliste", imageUrl: intervenant1.src },
      { id: "sp_j2_2_2", name: "Kah Walla", role: "CEO at STRATEGIES", imageUrl: intervenant2.src }
    ]
  },
  {
    id: "j2_s3",
    title: "Table Ronde : Leadership féminin, talents et performance économique : quels enjeux réels pour le Cameroun ?",
    hall: "Salle 1",
    startTime: "11:30",
    endTime: "13:00",
    speakers: [
      { id: "sp_j2_3_1", name: "Stella Onana Oyono", role: "Modératrice / Strategic Advisor", imageUrl: intervenant3.src },
      { id: "sp_j2_3_2", name: "Henriette EKWE", role: "Keynote / Journaliste", imageUrl: intervenant4.src },
      { id: "sp_j2_3_3", name: "Pr Viviane Ondoua", role: "Directrice GPE-Cameroun", imageUrl: intervenant5.src },
      { id: "sp_j2_3_4", name: "Gwendoline Abunaw", role: "MD Cameroon & CEMAC Head", imageUrl: intervenant6.src },
      { id: "sp_j2_3_5", name: "Hermine Dolores Boum", role: "Administratrice indépendante", imageUrl: intervenant7.src },
      { id: "sp_j2_3_6", name: "Laurice EBOTO", role: "Délégation UE", imageUrl: intervenant8.src },
      { id: "sp_j2_3_7", name: "Chrys MABIALA", role: "Expert Information Engineering", imageUrl: intervenant1.src }
    ]
  },
  {
    id: "j2_s4",
    title: "PANEL 1 : « Faire carrière dans la tech et briser les plafonds de verre »",
    hall: "Tech Zone",
    startTime: "14:00",
    endTime: "15:00",
    speakers: [
      { id: "sp_j2_4_1", name: "CIT", role: "Modératrice", imageUrl: intervenant2.src },
      { id: "sp_j2_4_2", name: "Belinda NGONO", role: "Regional Business Development", imageUrl: intervenant3.src },
      { id: "sp_j2_4_3", name: "Gozem representative", role: "Intervenante", imageUrl: intervenant4.src },
      { id: "sp_j2_4_4", name: "Santher Mbacham", role: "Communication Lead CIT", imageUrl: intervenant5.src }
    ]
  },
  {
    id: "j2_s5",
    title: "Workshop : Scale Up Room ”5 entrepreneurs, 5 défis stratégiques, face à un panel d’experts”",
    hall: "Workshop Room",
    startTime: "14:00",
    endTime: "15:00",
    speakers: [
      { id: "sp_j2_5_1", name: "Aurélie Chazai", role: "Expert Droit", imageUrl: intervenant6.src },
      { id: "sp_j2_5_2", name: "Coretta Minlend", role: "Expert Finance", imageUrl: intervenant7.src },
      { id: "sp_j2_5_3", name: "Sandrine Soppo Priso", role: "Expert Fiscalité", imageUrl: intervenant8.src },
      { id: "sp_j2_5_4", name: "Charlotte Ndow Soko", role: "Country Manager IFC", imageUrl: intervenant1.src },
      { id: "sp_j2_5_5", name: "Diane Audrey Ngako", role: "Marketing & Pub", imageUrl: intervenant2.src },
      { id: "sp_j2_5_6", name: "Genuka representative", role: "Digital Expert", imageUrl: intervenant3.src },
      { id: "sp_j2_5_7", name: "Laure Krans Nana", role: "Consultante Qualité", imageUrl: intervenant4.src }
    ]
  },
  {
    id: "j2_s6",
    title: "PANEL 2 : “Leadership féminin dans les industries créatives : créer, influencer, engager”",
    hall: "Salle 2",
    startTime: "15:00",
    endTime: "16:00",
    speakers: [
      { id: "sp_j2_6_1", name: "Aimee Catherine Moukouri", role: "Modératrice / Journaliste", imageUrl: intervenant5.src },
      { id: "sp_j2_6_2", name: "Syndy Emade", role: "International Actress & Producer", imageUrl: intervenant6.src },
      { id: "sp_j2_6_3", name: "Sandrine Nanga", role: "Artiste", imageUrl: intervenant7.src },
      { id: "sp_j2_6_4", name: "Kameni", role: "Artiste", imageUrl: intervenant8.src },
      { id: "sp_j2_6_5", name: "Chantal Edie", role: "Documentarian and Curator", imageUrl: intervenant1.src },
      { id: "sp_j2_6_6", name: "Rodolpha Bwanga", role: "Deputy MD TRACE", imageUrl: intervenant2.src },
      { id: "sp_j2_6_7", name: "Comfort", role: "Kissy wears", imageUrl: intervenant3.src },
      { id: "sp_j2_6_8", name: "MOFEAC representative", role: "Intervenante", imageUrl: intervenant4.src }
    ]
  },
  {
    id: "j2_s7",
    title: "Workshop : Un atelier pratique sur la préparation média avec Thierry Ntamack",
    hall: "VIP Room",
    startTime: "15:00",
    endTime: "16:30",
    speakers: [
      { id: "sp_j2_7_1", name: "Thierry Ntamack", role: "Expert Médias", imageUrl: intervenant5.src }
    ]
  },
  {
    id: "j2_s8",
    title: "ATELIER VIP : WorkShop sur le Personal Branding",
    hall: "VIP Room",
    startTime: "16:00",
    endTime: "17:00",
    speakers: [
      { id: "sp_j2_8_1", name: "Rose DIKA F-Union", role: "Modératrice", imageUrl: intervenant6.src },
      { id: "sp_j2_8_2", name: "Scensoria representative", role: "Intervenante", imageUrl: intervenant7.src },
      { id: "sp_j2_8_3", name: "Edithe Nken Hot", role: "Founder and CEO", imageUrl: intervenant8.src },
      { id: "sp_j2_8_4", name: "Gaelle Ngue", role: "Avocate Gerante", imageUrl: intervenant1.src }
    ]
  },
  {
    id: "j2_s9",
    title: "F-UNION LOUNGE TALK : La solitude du Pouvoir",
    hall: "F-UNION LOUNGE",
    startTime: "17:00",
    endTime: "18:00",
    speakers: [
      { id: "sp_j2_9_1", name: "Vanesse KAME", role: "Modératrice", imageUrl: intervenant2.src },
      { id: "sp_j2_9_2", name: "Esther Tiako", role: "Ex-DG CCA BANK", imageUrl: intervenant3.src },
      { id: "sp_j2_9_3", name: "Kate Fotso", role: "Speaker", imageUrl: intervenant4.src }
    ]
  },
  {
    id: "j2_s10",
    title: "F-UNION LOUNGE AFTERWORK",
    hall: "F-UNION LOUNGE",
    startTime: "18:00",
    endTime: "20:00",
    speakers: []
  }
];

export const JOUR_3_SESSIONS: Session[] = [
  {
    id: "j3_s1",
    title: "Mentoring 1:1 & Pitch des banques",
    hall: "Mentoring Area",
    startTime: "08:00",
    endTime: "12:00",
    speakers: [
      { id: "sp_j3_1_1", name: "Pechens Pokossy Doumbe", role: "Pharmacienne & Fondatrice", imageUrl: intervenant1.src },
      { id: "sp_j3_1_2", name: "Hariett Muchu", role: "Mentor", imageUrl: intervenant2.src },
      { id: "sp_j3_1_3", name: "Camerounaises in Tech", role: "Mentor", imageUrl: intervenant3.src },
      { id: "sp_j3_1_4", name: "Jocelyne Ngassam", role: "Management Expert", imageUrl: intervenant4.src },
      { id: "sp_j3_1_5", name: "Fadimatou Noutchemo", role: "Country Manager Afrijet", imageUrl: intervenant5.src },
      { id: "sp_j3_1_6", name: "Karen Naira Ngon", role: "Mentor", imageUrl: intervenant6.src }
    ]
  },
  {
    id: "j3_s2",
    title: "F-Union Talents Africa 2035 Challenge “Pitch your future. Build Africa”",
    hall: "Main Hall",
    startTime: "08:00",
    endTime: "11:30",
    speakers: []
  },
  {
    id: "j3_s3",
    title: "Workshop Finance Alternative",
    hall: "Salle 2",
    startTime: "10:30",
    endTime: "11:30",
    speakers: []
  },
  {
    id: "j3_s4",
    title: "Réinventer sa carrière : clés et opportunités pour une transition professionnelle réussie",
    hall: "Salle 2",
    startTime: "11:30",
    endTime: "12:30",
    speakers: [
      { id: "sp_j3_4_1", name: "Anabelle KOUNG", role: "Modératrice", imageUrl: intervenant7.src },
      { id: "sp_j3_4_2", name: "Aurélie Guifo", role: "Directrice Affaires Juridiques", imageUrl: intervenant8.src },
      { id: "sp_j3_4_3", name: "Manuela Kamadjou", role: "Managing Director", imageUrl: intervenant1.src },
      { id: "sp_j3_4_4", name: "Linda Loretta Nganko", role: "Executive HR Director", imageUrl: intervenant2.src }
    ]
  },
  {
    id: "j3_s5",
    title: "Table Ronde : Ce que les entreprises attendent vraiment des jeunes talents aujourd’hui",
    hall: "Salle 1",
    startTime: "14:00",
    endTime: "15:30",
    speakers: [
      { id: "sp_j3_5_1", name: "Erika Wilson", role: "CSR & Impact Leader", imageUrl: intervenant3.src },
      { id: "sp_j3_5_2", name: "Honoré Nkouel", role: "HR Director CFAO", imageUrl: intervenant4.src },
      { id: "sp_j3_5_3", name: "Laetissia Enonga", role: "Sustainable Transformation Advocate", imageUrl: intervenant5.src },
      { id: "sp_j3_5_4", name: "Christian Tchoupe", role: "Founder KF Heart", imageUrl: intervenant6.src }
    ]
  },
  {
    id: "j3_s6",
    title: "ATELIER TRUE",
    hall: "Salle 2",
    startTime: "14:00",
    endTime: "15:30",
    speakers: []
  },
  {
    id: "j3_s7",
    title: "PANEL : L’Écosystème Transgénérationnel : Réparer et bâtir l’économie de demain",
    hall: "Grande Salle",
    startTime: "15:30",
    endTime: "16:30",
    speakers: [
      { id: "sp_j3_7_1", name: "Marie Andre bembong sohaing", role: "IFC Investment Project Lead", imageUrl: intervenant7.src },
      { id: "sp_j3_7_2", name: "Henriette Noutchougouin", role: "Intervenante", imageUrl: intervenant8.src },
      { id: "sp_j3_7_3", name: "Yelena N", role: "Digital Marketing Manager", imageUrl: intervenant1.src },
      { id: "sp_j3_7_4", name: "Patrice-Adèle Ekoka", role: "Directeur Régional CC", imageUrl: intervenant2.src },
      { id: "sp_j3_7_5", name: "Claudine Simo Mam", role: "Expert Comptable", imageUrl: intervenant3.src }
    ]
  },
  {
    id: "j3_s8",
    title: "Le Grand Procès : Inclusion & ESG : ambitions, contraintes et réalités africaines",
    hall: "Salle 1",
    startTime: "15:30",
    endTime: "16:30",
    speakers: [
      { id: "sp_j3_8_1", name: "Amandine Bonny", role: "Modératrice / Journaliste", imageUrl: intervenant4.src }
    ]
  },
  {
    id: "j3_s9",
    title: "AFTER DARK CLOTURE : FLASH TALK",
    hall: "Salle 1",
    startTime: "17:30",
    endTime: "19:00",
    speakers: [
      { id: "sp_j3_9_1", name: "Siliki Nsangue", role: "Stratégie de communication", imageUrl: intervenant5.src },
      { id: "sp_j3_9_2", name: "Michaella Notche", role: "CEO EHIA Consulting", imageUrl: intervenant6.src },
      { id: "sp_j3_9_3", name: "Prisca Heuya", role: "Fondatrice KEM Care", imageUrl: intervenant7.src },
      { id: "sp_j3_9_4", name: "Caroline Ekeh", role: "General Counsel", imageUrl: intervenant8.src },
      { id: "sp_j3_9_5", name: "Yolande Bodiong", role: "Chef d'entreprise Maraboo", imageUrl: intervenant1.src },
      { id: "sp_j3_9_6", name: "Jocelyne Ngassam", role: "Management & Commercial Expert", imageUrl: intervenant2.src }
    ]
  }
];


