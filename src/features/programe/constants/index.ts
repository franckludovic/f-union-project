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
    title: "Quels sont les premiers etapes pour travailler sa visibilite",
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
    title: "Quels sont les premiers etapes pour travailler sa visibilite",
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
    title: "Quels sont les premiers etapes pour travailler sa visibilite",
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
    title: "CEREMONIIE OUVERTURE",
    hall: "Salle 1",
    startTime: "08:00",
    endTime: "11:30",
    speakers: [
      { id: "sp_j2_1_1", name: "Aminata Diallo", role: "Intervenante", imageUrl: intervenant1.src },
      { id: "sp_j2_1_2", name: "Béatrice Eto", role: "Intervenante", imageUrl: intervenant2.src },
      { id: "sp_j2_1_3", name: "Catherine Ngono", role: "Intervenante", imageUrl: intervenant3.src },
      { id: "sp_j2_1_4", name: "Daphné Bikoi", role: "Intervenante", imageUrl: intervenant4.src },
      { id: "sp_j2_1_5", name: "Esther Moudio", role: "Intervenante", imageUrl: intervenant5.src },
      { id: "sp_j2_1_6", name: "Fatimatou Sali", role: "Intervenante", imageUrl: intervenant6.src },
      { id: "sp_j2_1_7", name: "Grace Ndoumbé", role: "Intervenante", imageUrl: intervenant7.src },
      { id: "sp_j2_1_8", name: "Hélène Abena", role: "Modératrice", imageUrl: intervenant8.src }
    ]
  },
  {
    id: "j2_s2",
    title: "Table Ronde1 : Leadership féminin, talents et performance économique : quels enjeux réels pour le Cameroun ?",
    hall: "Salle 1",
    startTime: "11:30",
    endTime: "13:00",
    speakers: [
      { id: "sp_j2_2_1", name: "Isabelle Tchouameni", role: "Intervenante", imageUrl: intervenant1.src },
      { id: "sp_j2_2_2", name: "Juliette Kamga", role: "Intervenante", imageUrl: intervenant2.src },
      { id: "sp_j2_2_3", name: "Khadija Moussa", role: "Intervenante", imageUrl: intervenant3.src },
      { id: "sp_j2_2_4", name: "Linda Belibi", role: "Intervenante", imageUrl: intervenant4.src }
    ]
  },
  {
    id: "j2_s3",
    title: "ATELIER: Faire carrière dans la tech et briser les plafonds de verre",
    hall: "Salle 1 (divisé)",
    startTime: "14:00",
    endTime: "15:00",
    speakers: [
      { id: "sp_j2_3_1", name: "Monique Ondoua", role: "Intervenante", imageUrl: intervenant5.src },
      { id: "sp_j2_3_2", name: "Nathalie Bassong", role: "Intervenante", imageUrl: intervenant6.src },
      { id: "sp_j2_3_3", name: "Olivia Atangana", role: "Intervenante", imageUrl: intervenant7.src },
      { id: "sp_j2_3_4", name: "Paulette Emandje", role: "Intervenante", imageUrl: intervenant8.src },
      { id: "sp_j2_3_5", name: "Quitterie Njoh", role: "Modératrice", imageUrl: intervenant1.src }
    ]
  },
  {
    id: "j2_s4",
    title: "Workshop: Scale Up Room sous forme de Pitch Compétitif",
    hall: "Salle 1 (divisé)",
    startTime: "14:00",
    endTime: "15:00",
    speakers: [
      { id: "sp_j2_4_1", name: "Rose Nnanga", role: "Intervenante", imageUrl: intervenant2.src },
      { id: "sp_j2_4_2", name: "Sylvie Abomo", role: "Intervenante", imageUrl: intervenant3.src },
      { id: "sp_j2_4_3", name: "Tatiana Mballa", role: "Intervenante", imageUrl: intervenant4.src },
      { id: "sp_j2_4_4", name: "Ursule Wonje", role: "Intervenante", imageUrl: intervenant5.src },
      { id: "sp_j2_4_5", name: "Valérie Mvogo", role: "Intervenante", imageUrl: intervenant6.src }
    ]
  },
  {
    id: "j2_s5",
    title: "Table ronde 2 “Leadership féminin dans les industries créatives : créer, influencer, engager”",
    hall: "Salle 2",
    startTime: "15:00",
    endTime: "16:00",
    speakers: [
      { id: "sp_j2_5_1", name: "Wendy Eyenga", role: "Intervenante", imageUrl: intervenant7.src },
      { id: "sp_j2_5_2", name: "Xaverie Mendouga", role: "Intervenante", imageUrl: intervenant8.src },
      { id: "sp_j2_5_3", name: "Yvonne Ebéné", role: "Intervenante", imageUrl: intervenant1.src },
      { id: "sp_j2_5_4", name: "Zoé Biloung", role: "Intervenante", imageUrl: intervenant2.src },
      { id: "sp_j2_5_5", name: "Alice Megne", role: "Modératrice", imageUrl: intervenant3.src }
    ]
  },
  {
    id: "j2_s6",
    title: "ATELIER VIP: Un atelier pratique sur la préparation média avec Thierry Ntamack",
    hall: "Salle 2",
    startTime: "15:00",
    endTime: "16:30",
    speakers: [
      { id: "sp_j2_6_1", name: "Thierry Ntamack", role: "Intervenant", imageUrl: intervenant4.src },
      { id: "sp_j2_6_2", name: "Blandine Ngosso", role: "Experte", imageUrl: intervenant5.src }
    ]
  },
  {
    id: "j2_s7",
    title: "ATELIER VIP : WorkShop sur le Personal Branding",
    hall: "Salle 1 (divisé)",
    startTime: "16:00",
    endTime: "17:00",
    speakers: [
      { id: "sp_j2_7_1", name: "Celine Bityeki", role: "Intervenante", imageUrl: intervenant6.src },
      { id: "sp_j2_7_2", name: "Denise Bekolo", role: "Intervenante", imageUrl: intervenant7.src },
      { id: "sp_j2_7_3", name: "Elisabeth Mpondo", role: "Intervenante", imageUrl: intervenant8.src },
      { id: "sp_j2_7_4", name: "Florette Ekambi", role: "Modératrice", imageUrl: intervenant1.src }
    ]
  },
  {
    id: "j2_s8",
    title: "F-UNION LOUNGE TALK : La solitude du Pouvoir",
    hall: "Salle 2",
    startTime: "17:00",
    endTime: "18:00",
    speakers: [
      { id: "sp_j2_8_1", name: "Gabrielle Ondoa", role: "Speaker", imageUrl: intervenant2.src },
      { id: "sp_j2_8_2", name: "Honorine Djoko", role: "Speaker", imageUrl: intervenant3.src }
    ]
  },
  {
    id: "j2_s9",
    title: "F-UNION LOUNGE AFTERWORK",
    hall: "Terrasse",
    startTime: "18:00",
    endTime: "20:00",
    speakers: []
  },
  {
    id: "j2_s10",
    title: "Studio Photo Link & Espace MakeUP",
    hall: "Salle 5",
    startTime: "09:00",
    endTime: "12:00",
    speakers: []
  },
  {
    id: "j2_s11",
    title: "Studio PRO 360 : Espace PodCast",
    hall: "Salle 4",
    startTime: "09:00",
    endTime: "18:00",
    speakers: []
  },
  {
    id: "j2_s12",
    title: "Salle VIP permanente : Tea, Coffee, Eau",
    hall: "Internal Garden - N°07",
    startTime: "09:00",
    endTime: "12:00",
    speakers: []
  },
  {
    id: "j2_s13",
    title: "The Clinic",
    hall: "HALL",
    startTime: "09:00",
    endTime: "18:00",
    speakers: []
  }
];

export const JOUR_3_SESSIONS: Session[] = [
  {
    id: "j3_s1",
    title: "Mentoring 1:1 & Pitch des banques",
    hall: "Salle 1 (divisé)",
    startTime: "08:00",
    endTime: "12:00",
    speakers: [
      { id: "sp_j3_1_1", name: "Irène Belinga", role: "Mentor", imageUrl: intervenant1.src },
      { id: "sp_j3_1_2", name: "Josiane Ngo", role: "Mentor", imageUrl: intervenant2.src },
      { id: "sp_j3_1_3", name: "Kelly Mbarga", role: "Mentor", imageUrl: intervenant3.src },
      { id: "sp_j3_1_4", name: "Louise Foe", role: "Mentor", imageUrl: intervenant4.src }
    ]
  },
  {
    id: "j3_s2",
    title: "Competition: Pitch your Job",
    hall: "Salle 6",
    startTime: "08:00",
    endTime: "11:30",
    speakers: [
      { id: "sp_j3_2_1", name: "Marie-Claire Atangana", role: "Jury", imageUrl: intervenant5.src },
      { id: "sp_j3_2_2", name: "Nina Eyenga", role: "Jury", imageUrl: intervenant6.src },
      { id: "sp_j3_2_3", name: "Odile Mballa", role: "Jury", imageUrl: intervenant7.src },
      { id: "sp_j3_2_4", name: "Priscille Nnomo", role: "Jury", imageUrl: intervenant8.src }
    ]
  },
  {
    id: "j3_s3",
    title: "Table Ronde : Ce que les entreprises attendent vraiment des jeunes talents aujourd’hui",
    hall: "Salle 6",
    startTime: "14:00",
    endTime: "15:30",
    speakers: [
      { id: "sp_j3_3_1", name: "Rachelle Moumie", role: "Membre", imageUrl: intervenant1.src },
      { id: "sp_j3_3_2", name: "Solange Ekotto", role: "Membre", imageUrl: intervenant2.src },
      { id: "sp_j3_3_3", name: "Thérèse Biloa", role: "Membre", imageUrl: intervenant3.src },
      { id: "sp_j3_3_4", name: "Ursule Ngono", role: "Modératrice", imageUrl: intervenant4.src }
    ]
  },
  {
    id: "j3_s4",
    title: "Workshop Finance Alternative",
    hall: "Salle 2",
    startTime: "10:30",
    endTime: "11:30",
    speakers: [
      { id: "sp_j3_4_1", name: "Viviane Abondo", role: "Co-panéliste", imageUrl: intervenant5.src },
      { id: "sp_j3_4_2", name: "Wanda Engoulou", role: "Co-panéliste", imageUrl: intervenant6.src }
    ]
  },
  {
    id: "j3_s5",
    title: "Réinventer sa carrière : clés et opportunités pour une transition professionnelle réussie",
    hall: "Salle 2",
    startTime: "11:30",
    endTime: "12:30",
    speakers: [
      { id: "sp_j3_5_1", name: "Xena Bassa", role: "Membre", imageUrl: intervenant7.src },
      { id: "sp_j3_5_2", name: "Yolande Edibi", role: "Membre", imageUrl: intervenant8.src },
      { id: "sp_j3_5_3", name: "Zita Amougou", role: "Membre", imageUrl: intervenant1.src },
      { id: "sp_j3_5_4", name: "Aline Bikoko", role: "Modératrice", imageUrl: intervenant2.src }
    ]
  },
  {
    id: "j3_s6",
    title: "ATELIER TRUE",
    hall: "Salle 2",
    startTime: "14:00",
    endTime: "15:30",
    speakers: [
      { id: "sp_j3_6_1", name: "Berthe Ngalle", role: "Intervenante", imageUrl: intervenant3.src },
      { id: "sp_j3_6_2", name: "Clarisse Menye", role: "Intervenante", imageUrl: intervenant4.src },
      { id: "sp_j3_6_3", name: "Dorothée Nlend", role: "Intervenante", imageUrl: intervenant5.src },
      { id: "sp_j3_6_4", name: "Evelyne Essomba", role: "Intervenante", imageUrl: intervenant6.src },
      { id: "sp_j3_6_5", name: "Félicité Mvogo", role: "Intervenante", imageUrl: intervenant7.src },
      { id: "sp_j3_6_6", name: "Georgette Ndengue", role: "Intervenante", imageUrl: intervenant8.src },
      { id: "sp_j3_6_7", name: "Henriette Abomo", role: "Intervenante", imageUrl: intervenant1.src },
      { id: "sp_j3_6_8", name: "Isabel Ebogo", role: "Modératrice", imageUrl: intervenant2.src }
    ]
  },
  {
    id: "j3_s7",
    title: "PANEL : L’Écosystème Transgénérationnel : Réparer et bâtir l’économie de demain",
    hall: "Salle 2",
    startTime: "15:30",
    endTime: "16:30",
    speakers: [
      { id: "sp_j3_7_1", name: "Jeannette Mbida", role: "Intervenante", imageUrl: intervenant3.src },
      { id: "sp_j3_7_2", name: "Karelle Fosting", role: "Intervenante", imageUrl: intervenant4.src },
      { id: "sp_j3_7_3", name: "Lydie Ngon", role: "Intervenante", imageUrl: intervenant5.src },
      { id: "sp_j3_7_4", name: "Madeleine Efoua", role: "Intervenante", imageUrl: intervenant6.src }
    ]
  },
  {
    id: "j3_s8",
    title: "Le Grand Proces",
    hall: "Salle 1",
    startTime: "15:30",
    endTime: "16:30",
    speakers: [
      { id: "sp_j3_8_1", name: "Nadine Etoundi", role: "Entreprise", imageUrl: intervenant7.src },
      { id: "sp_j3_8_2", name: "Ondine Balla", role: "Entreprise", imageUrl: intervenant8.src },
      { id: "sp_j3_8_3", name: "Patricia Ngono", role: "Entreprise", imageUrl: intervenant1.src },
      { id: "sp_j3_8_4", name: "Quennie Ndifon", role: "Entreprise", imageUrl: intervenant2.src },
      { id: "sp_j3_8_5", name: "Rosalie Moudourou", role: "Entreprise", imageUrl: intervenant3.src },
      { id: "sp_j3_8_6", name: "Sonia Mandeng", role: "Entreprise", imageUrl: intervenant4.src },
      { id: "sp_j3_8_7", name: "Thérèse Mbede", role: "Modératrice", imageUrl: intervenant5.src }
    ]
  },
  {
    id: "j3_s9",
    title: "AFTER DARK CLOTURE : FLASH TALK",
    hall: "Salle 1",
    startTime: "16:00",
    endTime: "18:00",
    speakers: [
      { id: "sp_j3_9_1", name: "Ursule Wonje", role: "Intervenante", imageUrl: intervenant6.src },
      { id: "sp_j3_9_2", name: "Virginie Ambassa", role: "Modératrice", imageUrl: intervenant7.src }
    ]
  },
  {
    id: "j3_s10",
    title: "Studio Photo Link & Espace MakeUP",
    hall: "Salle 5",
    startTime: "09:00",
    endTime: "12:00",
    speakers: []
  },
  {
    id: "j3_s11",
    title: "Studio PRO 360 : Espace PodCast",
    hall: "Salle 4",
    startTime: "09:00",
    endTime: "18:00",
    speakers: []
  },
  {
    id: "j3_s12",
    title: "Invest Room : Pitch par 8 porteuses de projet devant des banques & investisseurs, Médias",
    hall: "Internal Garden - N°07",
    startTime: "10:30",
    endTime: "13:30",
    speakers: []
  }
];


