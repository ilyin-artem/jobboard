import { VacancyProps } from './Vacancy.props';
import { ButtonLink } from '@/components/Button/Button';

export function Vacancy({ vacancy }: VacancyProps): JSX.Element {
    return (
        <>
            <li className="grid list-none grid-cols-2 rounded-xl bg-white p-5 ">
                {/* {vacancy.jobTitle} */}
                <h2 className=" col-span-2 text-3xl xl:text-5xl xl:font-medium">
                    Actor/Actress
                </h2>
                <span className="col-span-2 pt-2.5 pb-4 pb-6 text-sm xl:order-2  xl:col-span-1 xl:pt-5 xl:text-base">
                    07.04.2022
                </span>

                <p className="col-span-2 mb-6 text-gray-500 xl:col-span-1 xl:row-span-2">
                    Right now we are looking for young, vibrant and charismatic
                    people to join ours team. Our candidates should&nbsp;have a
                    desire to become on-screen actors and a f...
                </p>
                <span className="col-span-2  xl:col-span-1 xl:text-2xl">
                    TheSoul Publishing
                </span>
                <ButtonLink href='href="/vacancy/69s'>Details</ButtonLink>
                <a className="" href="/vacancy/69">
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
                </a>
            </li>
        </>
    );
}
