// types/portfolio.d.ts

export interface PersonalDetails {
    name: string;
    title: string;
    email: string;
    phone: string;
    location: string;
    summary: string;
    social: {
        linkedin: string;
        github: string;
    };
}

export interface Metric {
    label: string;
    value: string;
    icon: string;
}

export interface Project {
    id: string;
    title: string;
    company: string;
    description: string;
    impact: string;
    tags: string[];
    type: string;
}

export interface Skills {
    frontend: string[];
    backend: string[];
    infrastructure: string[];
    data_ai: string[];
}

export interface Experience {
    role: string;
    company: string;
    period: string;
    highlights: string[];
}

export interface Education {
    degree: string;
    institution: string;
    details: string;
}

export interface CoCurricular {
    certifications: string[];
    industrialVisits: string[];
}

export interface PersonalInfoExtra {
    dob: string;
    gender: string;
    nationality: string;
    passportNumber: string;
    maritalStatus: string;
    languages: string[];
    hobbies: string[];
}

export interface AdditionalInternship {
    company: string;
    role: string;
    period: string;
    description: string;
    achievement: string;
}

export interface MiniProject {
    title: string;
    description: string;
    toolsUsed: string;
    learningOutcome: string;
}

// Main Portfolio Data Wrapper (portfolio_data.json)
export interface PortfolioData {
    personal: PersonalDetails;
    metrics: Metric[];
    projects: Project[];
    skills: Skills;
    experience: Experience[];
}

// Extra Portfolio Data Wrapper (portfolio_extra.json)
export interface PortfolioExtraData {
    education: Education[];
    coCurricular: CoCurricular;
    awards: string[];
    personalDetails: PersonalInfoExtra;
    additionalInternships: AdditionalInternship[];
    miniProjects: MiniProject[];
}
