import { VacancyProps } from './Vacancy.props';
import { ButtonLink } from '@/components/Button/Button';
import { useMediaQuery } from 'react-responsive';
import { breakpoints } from '@/constants';

export function Vacancy({ vacancy }: VacancyProps): JSX.Element {
    const isXlScreen = useMediaQuery({
        query: `(min-width: ${breakpoints.xl})`,
    });
    return (
        <>
            <li className="grid list-none grid-cols-2 rounded-xl bg-white p-5 xl:order-1">
                <h2 className="col-span-2 text-3xl  xl:order-1  xl:row-span-2 xl:text-5xl">
                    {vacancy.jobTitle}
                </h2>
                <span className="col-span-2 pt-2.5 pb-4 text-sm text-gray-400 xl:order-2  xl:col-span-1 xl:pb-6 xl:pt-5 xl:text-base">
                    07.04.2022
                </span>

                <p className="col-span-2 mb-6 text-gray-500 xl:order-4 xl:col-span-1 xl:mb-0">
                    {vacancy.position?.jobDescription?.length < 200
                        ? vacancy.position?.jobDescription
                        : vacancy.position?.jobDescription?.substring(0, 200) +
                          '...'}
                </p>
                <span className="row-span-2 flex xl:order-3  xl:row-span-1 xl:justify-end xl:text-2xl">
                    {vacancy.companyDetails?.name}
                </span>

                <ButtonLink
                    className="row-span-2 h-[60px] w-[60px] place-self-end xl:order-5 xl:row-span-1 xl:h-[60px] xl:w-[200px]"
                    href='href="/vacancy/69s'
                >
                    {isXlScreen ? (
                        'Details'
                    ) : (
                        <svg
                            width="26"
                            height="16"
                            viewBox="0 0 26 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <rect
                                width="26"
                                height="2"
                                rx="1"
                                transform="matrix(-1 0 0 1 26 7)"
                                fill="#F5F5F5"
                            ></rect>
                            <path
                                d="M18 1L25 8L18 15"
                                stroke="#F5F5F5"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            ></path>
                        </svg>
                    )}
                </ButtonLink>
            </li>
        </>
    );
}
