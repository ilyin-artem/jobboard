import { FormProps } from './Form.props';
import { Button } from '@/components/Button/Button';
import { Input } from '@/components/input/Input';
import clsx from 'clsx';

const baseStyles = {
    solid: 'block w-full appearance-none rounded-md border border-gray-200 bg-gray-50 py-2 px-3 text-gray-900 placeholder:text-gray-400 focus:border-blue-500 focus:bg-white focus:outline-none focus:ring-blue-500 sm:text-sm',
    noBorder:
        'block w-full appearance-none py-2 px-3 text-gray-900 placeholder:text-gray-400  focus:outline-none  sm:text-sm',
};

export function Form({ className, ...props }: FormProps): JSX.Element {
    return (
        <form
            {...props}
            action="#"
            method="POST"
            className={clsx(
                'z-10 flex w-full gap-x-4 rounded-3xl bg-white px-5 ',
                className
            )}
        >
            {/* <div class="select-search">
                <label
                    for="NCzDpNis9L-QfzZ9NhjnW"
                    class="select-trigger"
                    type="button"
                >
                    Job
                    <svg
                        width="17"
                        height="10"
                        viewBox="0 0 17 10"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M1.5 1.5L8.5 8.5L15.5 1.5"
                            stroke="#222222"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        ></path>
                    </svg>
                    <select
                        class="search-select"
                        id="NCzDpNis9L-QfzZ9NhjnW"
                        name="entity"
                    >
                        <option value="vacancy" selected="">
                            Job
                        </option>
                        <option value="resume">Expert</option>
                    </select>
                </label>
            </div> */}
            <select
                className="h-14 outline-none xl:text-2xl"
                id="select-input"
                name="select-input"
                title="select"
                required
            >
                <option>Job</option>
                <option>Expert</option>
            </select>
            <Input
                className="xl:text-2xl"
                label=""
                variant="noBorder"
                id="search-input"
                name="search-input"
                type="text"
                title="search"
                placeholder="full stack developer..."
                autoComplete="email"
                required
            />

            <Button color="white" type="submit" className="hidden xl:block">
                <svg
                    className="fill-gray-400"
                    width="30"
                    height="30"
                    viewBox="0 0 30 30"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path d="M12.2517 24.2711C14.9124 24.2711 17.3659 23.4189 19.3733 21.9986L26.9251 29.4788C27.2756 29.826 27.7377 29.9996 28.2315 29.9996C29.2671 29.9996 30 29.2105 30 28.2006C30 27.7271 29.8407 27.2695 29.4902 26.9381L21.9862 19.4895C23.5635 17.438 24.5035 14.8972 24.5035 12.1356C24.5035 5.46021 18.991 0 12.2517 0C5.52841 0 0 5.44443 0 12.1356C0 18.8109 5.51248 24.2711 12.2517 24.2711ZM12.2517 21.6515C6.99416 21.6515 2.64472 17.3433 2.64472 12.1356C2.64472 6.92784 6.99416 2.61964 12.2517 2.61964C17.5093 2.61964 21.8587 6.92784 21.8587 12.1356C21.8587 17.3433 17.5093 21.6515 12.2517 21.6515Z"></path>
                </svg>
            </Button>
        </form>
    );
}
