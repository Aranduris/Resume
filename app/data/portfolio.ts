import type { StaticImageData } from "next/image";

import clinicalNlpImage from "../../public/images/studies/clinical-nlp.png";
import dentalRadiographImage from "../../public/images/studies/dental-radiograph.png";
import linkedRecordsImage from "../../public/images/studies/linked-records.png";

export type EvidenceReference = {
  kind: "Paper" | "Manuscript" | "Presentation" | "Project" | "Thesis";
  label: string;
  href: string;
};

export type Project = {
  number: string;
  label: string;
  title: string;
  summary: string;
  tags: string[];
  note: string;
  evidenceLabel: string;
  evidenceHref: string;
  image: StaticImageData;
  imageAlt: string;
  tone: "blue" | "mint" | "sand";
};

export type RepositoryProject = {
  number: string;
  domain: string;
  title: string;
  summary: string;
  tools: string[];
  href: string;
};

export type ResearchEntry = {
  year: string;
  status: string;
  role: string;
  title: string;
  venue: string;
  href?: string;
};

export type PresentationEntry = {
  year: string;
  title: string;
  venue: string;
  role?: string;
};

export type SkillGroup = {
  index: string;
  title: string;
  detail: string;
  evidence: EvidenceReference[];
};

const githubProjectsRoot = "https://github.com/Aranduris/Projects";

// -----------------------------------------------------------------------------
// Selected healthcare work
// -----------------------------------------------------------------------------

export const projects: Project[] = [
  {
    number: "01",
    label: "Computer vision",
    title: "Dental radiograph segmentation and decision support",
    summary:
      "Developed and evaluated dental-radiograph models for teeth, caries, periodontal bone levels, restorations, calculus, fractures, and bone structures. The work also includes a clinician-facing decision-support application.",
    tags: ["PyTorch", "Transformers", "Clinical validation"],
    note: "Two active manuscripts · 2026",
    evidenceLabel: "Related manuscripts",
    evidenceHref: "#research",
    image: dentalRadiographImage,
    imageAlt: "Dental radiograph model output",
    tone: "blue",
  },
  {
    number: "02",
    label: "Clinical NLP",
    title: "Information extraction from clinical conversations",
    summary:
      "Engineered NLP workflows to extract and code qualitative information from physician–patient communication in cancer care. The resulting study is in press at JMIR.",
    tags: ["NLP", "Clinical text", "Information extraction"],
    note: "JMIR · in press",
    evidenceLabel: "View research record",
    evidenceHref: "#research",
    image: clinicalNlpImage,
    imageAlt: "Clinical NLP workflow or model output",
    tone: "mint",
  },
  {
    number: "03",
    label: "Linked clinical data",
    title: "Periodontitis prediction using EHR and EDR data",
    summary:
      "Built machine-learning models using linked electronic health and dental records to study periodontitis and related clinical and social factors.",
    tags: ["EHR + EDR", "Machine learning", "Applied statistics"],
    note: "JDR Clinical & Translational Research · 2025",
    evidenceLabel: "Open paper",
    evidenceHref: "https://doi.org/10.1177/23800844251408849",
    image: linkedRecordsImage,
    imageAlt: "Linked EHR and EDR analysis figure",
    tone: "sand",
  },
];

// -----------------------------------------------------------------------------
// Public projects across domains
// -----------------------------------------------------------------------------

export const repositoryProjects: RepositoryProject[] = [
  {
    number: "01",
    domain: "Bioinformatics + NLP",
    title: "Protein function prediction",
    summary:
      "Evaluated amino-acid property grouping as a representation for protein-function prediction across machine-learning and deep-learning models.",
    tools: ["Python", "R", "CNN", "RNN", "SQL"],
    href: `${githubProjectsRoot}/tree/main/Amino-Acid%20Property%20Grouping`,
  },
  {
    number: "02",
    domain: "Data engineering + biology",
    title: "Crop-virus sequence database",
    summary:
      "Built a searchable Flask application and structured database for crop-virus, coding-sequence, motif, and host-plant data.",
    tools: ["Flask", "Python", "SQL", "HTML/CSS"],
    href: `${githubProjectsRoot}/tree/main/Viral%20Sequences%20%20For%20Crops%20DB`,
  },
  {
    number: "03",
    domain: "Sports analytics",
    title: "League of Legends esports analytics",
    summary:
      "Analyzed professional match data and developed models for player, champion, and match outcomes using statistical and machine-learning methods.",
    tools: ["Python", "Logistic regression", "Plotly", "Jupyter"],
    href: `${githubProjectsRoot}/tree/main/Applications%20of%20Machine%20Learning%20-%20Esports`,
  },
  {
    number: "04",
    domain: "Environmental analytics",
    title: "Air-quality forecasting in India",
    summary:
      "Examined seasonal pollution patterns and compared forecasting approaches while reporting uncertainty where model results disagreed.",
    tools: ["Time series", "R", "Python", "Visualization"],
    href: `${githubProjectsRoot}/tree/main/Air%20Quality%20Predictions%20-%20India`,
  },
  {
    number: "05",
    domain: "Network analysis",
    title: "Threat identification",
    summary:
      "Used communication-network structure and message topics to prioritize potential participants in a simulated fraud investigation.",
    tools: ["Network analysis", "Gephi", "Python", "Risk scoring"],
    href: `${githubProjectsRoot}/tree/main/Threat%20Identification`,
  },
];

// -----------------------------------------------------------------------------
// Publications and manuscripts
// -----------------------------------------------------------------------------

export const publications: ResearchEntry[] = [
  {
    year: "2026",
    status: "In press",
    role: "Co-author",
    title:
      "Automated extraction and coding of qualitative data within physician–patient communication in cancer care",
    venue: "JMIR",
  },
  {
    year: "2026",
    status: "In press",
    role: "Acknowledged",
    title:
      "The association of social determinants of health with dental care use and expenditures among older adults in the United States",
    venue: "Frontiers in Oral Health",
  },
  {
    year: "2026",
    status: "Published",
    role: "Acknowledged",
    title:
      "Current adoption of the prosthodontic diagnostic index for clinical care",
    venue: "Journal of Prosthodontics",
    href: "https://doi.org/10.1111/jopr.70154",
  },
  {
    year: "2025",
    status: "Published",
    role: "Co-author",
    title:
      "Periodontitis prediction model with linked electronic health/dental records",
    venue: "JDR Clinical & Translational Research",
    href: "https://doi.org/10.1177/23800844251408849",
  },
  {
    year: "2025",
    status: "Published",
    role: "Acknowledged",
    title:
      "LinkMD: Linking medical and dental records with four linking algorithms",
    venue: "Journal of Dental Research",
    href: "https://doi.org/10.1177/00220345251383863",
  },
  {
    year: "2025",
    status: "Published",
    role: "Acknowledged",
    title:
      "Building and evaluating an orthodontic NLP model for automated clinical note information extraction",
    venue: "Orthodontics & Craniofacial Research",
    href: "https://doi.org/10.1111/ocr.12944",
  },
  {
    year: "2025",
    status: "Published",
    role: "Co-author",
    title:
      "Painful prescriptions: Opioid and antibiotic use for dental pain in the emergency department",
    venue: "Medical Informatics",
    href: "https://doi.org/10.3233/SHTI250862",
  },
  {
    year: "2025",
    status: "Published",
    role: "Co-author",
    title:
      "Social determinants of health’s impact on periodontal disease using machine learning & dental records",
    venue: "Journal of Dental Research",
    href: "https://doi.org/10.1177/00220345251328968",
  },
  {
    year: "2023",
    status: "Thesis",
    role: "First author",
    title:
      "Application of amino acid property grouping to predict protein function using NLP algorithms",
    venue: "Ramapo College of New Jersey",
    href: "https://www.ramapo.edu/dmc/ms-thesis-archive/",
  },
];

export const submittedManuscripts: ResearchEntry[] = [
  {
    year: "2026",
    status: "Major revision",
    role: "Co-author",
    title:
      "Developing, testing, and validating a clinical decision support system to improve dental radiograph quality",
    venue: "Oral Surgery, Oral Medicine, Oral Pathology and Oral Radiology",
  },
  {
    year: "2026",
    status: "Submitted",
    role: "Co-author",
    title:
      "Clinical development & validation of a clinical decision support system for dental radiographic findings",
    venue: "Journal of Periodontology",
  },
  {
    year: "2026",
    status: "Peer review",
    role: "Acknowledged",
    title:
      "Social determinants of health and periodontal disease: Human vs. generative AI tools evidence synthesis",
    venue: "Frontiers in Oral Health",
  },
];

export const presentations: PresentationEntry[] = [
  {
    year: "2026",
    title: "AI ethics and career development",
    venue: "Ramapo College",
    role: "Expert panelist",
  },
  {
    year: "2026",
    title: "Comprehensive dental radiograph segmentation model",
    venue: "IADR/AADOCR/CADR",
  },
  {
    year: "2026",
    title:
      "AI-based reverse engineering for predicting dental diagnosis from procedures",
    venue: "IADR/AADOCR/CADR",
  },
  {
    year: "2025",
    title:
      "Patient Wellness Report Outcomes at Temple University School of Dentistry",
    venue: "IADR/PER",
  },
  {
    year: "2025",
    title:
      "Deep learning models to improve dental radiograph clarity and quality",
    venue: "IADR/PER",
  },
  {
    year: "2025",
    title: "Factors associated with zirconia failures using machine learning",
    venue: "AADOCR/CADR",
  },
  {
    year: "2025",
    title:
      "Racial oral health disparities: A data-driven machine learning approach",
    venue: "AADOCR/CADR",
  },
  {
    year: "2024",
    title: "AI analysis of oral healthcare at a US dental school",
    venue: "ADEE",
  },
];

// -----------------------------------------------------------------------------
// Technical skills with supporting work
// -----------------------------------------------------------------------------

export const skillGroups: SkillGroup[] = [
  {
    index: "01",
    title: "Statistical analysis and visualization",
    detail: "Python · R · SAS · SQL · Excel · Tableau · Power BI",
    evidence: [
      {
        kind: "Paper",
        label: "Periodontitis prediction using linked EHR/EDR data",
        href: "https://doi.org/10.1177/23800844251408849",
      },
      {
        kind: "Project",
        label: "Air-quality forecasting in India",
        href: `${githubProjectsRoot}/tree/main/Air%20Quality%20Predictions%20-%20India`,
      },
    ],
  },
  {
    index: "02",
    title: "Machine learning and model evaluation",
    detail: "scikit-learn · TensorFlow · PyTorch · Keras · MLflow · SHAP",
    evidence: [
      {
        kind: "Thesis",
        label: "Protein-function prediction with amino-acid grouping",
        href: "https://www.ramapo.edu/dmc/ms-thesis-archive/",
      },
      {
        kind: "Project",
        label: "League of Legends esports analytics",
        href: `${githubProjectsRoot}/tree/main/Applications%20of%20Machine%20Learning%20-%20Esports`,
      },
    ],
  },
  {
    index: "03",
    title: "NLP and generative AI",
    detail: "Hugging Face · NLTK · OpenAI API · LangChain · LlamaIndex",
    evidence: [
      {
        kind: "Paper",
        label: "Orthodontic clinical-note information extraction",
        href: "https://doi.org/10.1111/ocr.12944",
      },
      {
        kind: "Manuscript",
        label: "Physician–patient communication coding",
        href: "#research",
      },
    ],
  },
  {
    index: "04",
    title: "Computer vision and clinical imaging",
    detail: "PyTorch · Transformer segmentation · OpenCV · CUDA",
    evidence: [
      {
        kind: "Presentation",
        label: "Comprehensive dental radiograph segmentation model",
        href: "#conference-record",
      },
      {
        kind: "Manuscript",
        label: "Dental radiographic findings decision-support system",
        href: "#research",
      },
    ],
  },
  {
    index: "05",
    title: "Data engineering and record linkage",
    detail: "PySpark · Hadoop · Databricks · Snowflake · MySQL · SQL Server",
    evidence: [
      {
        kind: "Paper",
        label: "LinkMD medical and dental record linkage",
        href: "https://doi.org/10.1177/00220345251383863",
      },
      {
        kind: "Project",
        label: "Crop-virus sequence database",
        href: `${githubProjectsRoot}/tree/main/Viral%20Sequences%20%20For%20Crops%20DB`,
      },
    ],
  },
  {
    index: "06",
    title: "Application development",
    detail: "Flask · FastAPI · Django · Streamlit · REST APIs · HTML/CSS",
    evidence: [
      {
        kind: "Project",
        label: "Searchable crop-virus Flask application",
        href: `${githubProjectsRoot}/tree/main/Viral%20Sequences%20%20For%20Crops%20DB`,
      },
      {
        kind: "Manuscript",
        label: "Clinical decision-support application",
        href: "#research",
      },
    ],
  },
];
