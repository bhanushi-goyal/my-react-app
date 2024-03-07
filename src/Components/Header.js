import React from "react"

function Header(){
    //check for a comment
    return(
        <div className="bg-slate-700 mb-2">
            <header>
                <ul className="list-none flex flex-wrap justify-center gap-4 text-white">
                    <li className="p-2 flex flex-1 font-thin">Tennis</li>
                    <li className="p-2 font-thin">Home</li>
                    <li className="p-2 font-thin">Why PLT?</li>
                    <li className="p-2 font-thin">Cities</li>
                    <li className="p-2 font-thin">Get the App</li>
                    <li className="p-2 font-thin">Contact US</li>
                    <li className="p-2 font-sans">
                        <button className="bg-white p-1 px-2 text-black rounded">Sign In</button>
                    </li>
                </ul>

            </header>
        </div>
    )
}

export default Header
