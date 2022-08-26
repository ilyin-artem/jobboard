export interface IVacancies {
    id: number;
    jobTitle?: string;
    jobCategory?: string;
    companyDetails?: {
        name?: string;
        link?: string;
        industry?: string;
        about?: string;
    };
    position?: {
        jobExperience?: [string];
        jobDescription?: string;
        responsibilities?: string;
        experience?: string;
        skills?: string;
        languageSkills?: [
            {
                language?: string;
                skill?: string;
            }
        ];
        additionalInformation?: string;
    };
    jobDetails: {
        jobLocation?: string;
        remoteJob?: boolean;
        workHours?: string;
        salary?: {
            from?: number;
            s;
            to?: number;
        };
    };
    contacts?: {
        name: string;
        email?: string;
        social?: [string];
    };
}

export interface VacancyProps extends React.HTMLAttributes<HTMLDivElement> {
    vacancy: IVacancies;
}
