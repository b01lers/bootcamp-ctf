import Timer from '@/app/(home)/Timer';
import { BsChevronCompactDown } from 'react-icons/bs';
import { getConfig } from '@/util/config';


export default async function Header() {
    const config = await getConfig();

    return (
        <header className="container flex flex-col items-center justify-center h-screen">
            <div className="relative before:-z-10 before:absolute before:-left-1 before:-bottom-1 before:shadow-[0_0_300px_200px_rgb(251_190_36_/_0.225)] after:-z-10 after:absolute after:-right-1 after:top-20 after:shadow-[0_0_300px_200px_rgb(225_29_72_/_0.225)]">
                <img
                    src="/assets/logo-uwu.png"
                    className="-mb-7 max-h-96"
                />
            </div>

            <Timer
                startTime={config.data.startTime}
                endTime={config.data.endTime}
            />
            <p className="mb-2 max-w-3xl text-center text-pretty">
                {/* TODO */}
                b01lers CTF is the public competitive CTF hosted by the b01lers CTF team at Purdue University.
                Join our discord at <a href="https://discord.gg/tBMqujE" target="_blank" rel="noopener noreferrer" className="text-theme-bright hover:underline">discord.gg/tBMqujE</a>{' '}
                and look out for further info soon!
            </p>
            <div className="flex divide-x divide-primary text-sm">
                <a href="#rules" className="px-4 py-2 uppercase hover:underline">Rules</a>
                <a href="#prizes" className="px-4 py-2 uppercase hover:underline">Prizes</a>
                {/* <a href="#sponsors" className="px-4 py-2 uppercase hover:underline">Sponsors</a> */}
            </div>

            <a href="#rules" className="text-inherit text-4xl mt-6 sm:mt-12 sm:mb-8 text-primary">
                <BsChevronCompactDown className="animate-bounce" />
                <span className="sr-only">Jump to Rules</span>
            </a>
        </header>
    )
}
