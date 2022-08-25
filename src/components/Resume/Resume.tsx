import { IResume, ResumeProps } from './Resume.props';

export function Resume({ resume }): JSX.Element {
    return (
        <div>
            {resume.name}
            {resume.desiredPosition}
        </div>
    );
}
