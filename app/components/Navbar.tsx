import Link from "next/link";
import { ModeToggle } from "./ModeToggle";

export default function Navbar() {
    return (
        <nav className="w-full relative flex items-center justify-between max-w-2xl mx-auto px-4 py-5">
            <Link href="/" className="font-bold text-3xl hover:scale-125 hover:shadow-lg transform transition-transform duration-300 ease-in-out">
            KHANS<span className="text-primary"> BLOG</span>
            </Link>

            <ModeToggle />
        </nav>
    );
}


// import Link from "next/link";
// import { ModeToggle } from "./ModeToggle";

// export default function Navbar() {
//     return (
//         <header className="dark:bg-gray-900 body-font">
//             <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
//                 <Link href="/" className="font-bold text-3xl hover:scale-125 hover:shadow-lg transform transition-transform duration-300 ease-in-out">
//                     KHANS<span className="text-primary"> BLOG</span>
//                 </Link>
//                 <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
//                     <Link className="mr-12 text-xl hover:text-gray-600" href="">Home</Link>
//                     <Link className="mr-12 text-xl hover:text-gray-600" href="">About</Link>
//                     <Link className="mr-12 text-xl hover:text-gray-600" href="">Blog</Link>
//                 </nav>
//                 <ModeToggle />
//             </div>
//         </header>
//     );
// }
