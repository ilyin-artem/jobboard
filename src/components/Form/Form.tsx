import { FormProps } from './Form.props';
import { Button } from '@/components/Button/Button';
import { Input } from '@/components/input/Input';

const baseStyles = {
    solid: 'block w-full appearance-none rounded-md border border-gray-200 bg-gray-50 py-2 px-3 text-gray-900 placeholder:text-gray-400 focus:border-blue-500 focus:bg-white focus:outline-none focus:ring-blue-500 sm:text-sm',
    noBorder:
        'block w-full appearance-none py-2 px-3 text-gray-900 placeholder:text-gray-400  focus:outline-none  sm:text-sm',
};

export function Form({ ...props }: FormProps): JSX.Element {
    return (
        <form
            {...props}
            action="#"
            method="POST"
            className="z-10 mt-10 flex w-full gap-x-4 rounded-3xl bg-white px-10 xl:mt-4"
        >
            <Input
                className="h-14 xl:text-2xl"
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

            <Button color="white" type="submit" className="">
                поиск {/* <span aria-hidden="true"> &rarr;</span> */}
            </Button>
        </form>
    );
}
