import clsx from 'clsx';
import Link from 'next/link';
import { HeaderProps } from './Header.props';
import logo from '@/images/logo.png';
import Image from 'next/image';
import { Fragment } from 'react';
import { Popover, Transition } from '@headlessui/react';

export function Header({ ...props }: HeaderProps): JSX.Element {
    return (
        <header
            {...props}
            className="relative flex w-full justify-between pt-5 xl:fixed xl:top-1/2 xl:-mt-14"
        >
            <div className="relative ml-[10px]  h-[60px] w-[60px] rounded-full bg-white xl:ml-4 xl:h-[80px] xl:w-[80px]">
                <Link href="/">
                    <a>
                        <Image
                            src={logo}
                            alt="logo"
                            width={80}
                            height={80}
                            // layout="fixed"
                            priority
                        />
                    </a>
                </Link>
            </div>

            <MobileNavigation className="mr-[10px] xl:mr-4" />
        </header>
    );
}

function MobileNavigation({ className }) {
    return (
        <Popover>
            {({ open, close }) => (
                <>
                    <Popover.Button
                        className={
                            (clsx(
                                'relative z-10 flex items-center justify-center [&:not(:focus-visible)]:focus:outline-none'
                            ),
                            className)
                        }
                    >
                        <span className="sr-only ">Toggle Navigation</span>
                        <svg
                            viewBox="-13 -13 40 40"
                            aria-hidden="true"
                            className="flex h-[60px] w-[60px] items-center justify-center overflow-visible rounded-full bg-white stroke-slate-700  xl:h-[80px] xl:w-[80px]"
                            fill="fill"
                            strokeWidth={2}
                            strokeLinecap="round"
                        >
                            <path
                                d="M0 1H14M0 7H14M0 13H14"
                                className={clsx('origin-center transition', {
                                    'scale-90 opacity-0': open,
                                })}
                            />
                            <path
                                d="M2 2L12 12M12 2L2 12"
                                className={clsx('origin-center transition', {
                                    'scale-90 opacity-0': !open,
                                })}
                            />
                        </svg>
                    </Popover.Button>
                    <Transition.Root>
                        <Transition.Child
                            as={Fragment}
                            enter="duration-150 ease-out"
                            enterFrom="opacity-0"
                            enterTo="opacity-100"
                            leave="duration-150 ease-in"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                        >
                            <Popover.Overlay className="fixed inset-0 bg-slate-300/50" />
                        </Transition.Child>
                        <Transition.Child
                            as={Fragment}
                            enter="duration-150 ease-out"
                            enterFrom="opacity-0 scale-95"
                            enterTo="opacity-100 scale-100"
                            leave="duration-100 ease-in"
                            leaveFrom="opacity-100 scale-100"
                            leaveTo="opacity-0 scale-95"
                        >
                            <Popover.Panel
                                as="ul"
                                className="absolute inset-x-0 top-full mt-4 origin-top space-y-4 rounded-2xl bg-white p-6 text-lg tracking-tight text-slate-900 shadow-xl ring-1 ring-slate-900/5"
                            >
                                <li>
                                    <Link href="#features">
                                        <a
                                            className="block w-full hover:text-blue-800"
                                            onClick={() => close()}
                                        >
                                            Features
                                        </a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#testimonials">
                                        <a
                                            className="block w-full hover:text-blue-800"
                                            onClick={() => close()}
                                        >
                                            Testimonials
                                        </a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#pricing">
                                        <a
                                            className="block w-full hover:text-blue-800"
                                            onClick={() => close()}
                                        >
                                            Pricing
                                        </a>
                                    </Link>
                                </li>
                                <li className="border-t border-slate-300/40 pt-4 hover:text-blue-800">
                                    <Link href="/login">
                                        <a className="block w-full">Sign in</a>
                                    </Link>
                                </li>
                            </Popover.Panel>
                        </Transition.Child>
                    </Transition.Root>
                </>
            )}
        </Popover>
    );
}
