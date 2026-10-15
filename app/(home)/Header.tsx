import { BsChevronCompactDown } from 'react-icons/bs';


export default function Header() {
    return (
        <header className="container flex flex-col items-center justify-center h-screen">
            <img
                src="/assets/logo-uwu.png"
                alt="b01lers bootcamp CTF"
                className="max-h-96"
            />
            <p className="mb-2 max-w-3xl text-center text-pretty">
                b01lers bootcamp CTF is a Purdue-only CTF hosted by the b01lers CTF team for new members and
                interested students to sharpen their CTF skills. Check out the{' '}
                <a href="https://discord.gg/jrUGtYe" target="_blank" rel="noopener noreferrer" className="text-theme-bright hover:underline">Discord</a>{' '}
                for announcements and enjoy!
            </p>

            <a href="#rules" className="text-inherit text-4xl mt-6 sm:mb-8 text-primary">
                <BsChevronCompactDown className="animate-bounce" />
                <span className="sr-only">Jump to Rules</span>
            </a>
        </header>
    )
}
