export interface IResume {
    id: 1;
    name: string;
    desiredPosition: string;
}

export interface ResumeProps extends React.HTMLAttributes<HTMLDivElement> {
    vacancy: IResume;
}
