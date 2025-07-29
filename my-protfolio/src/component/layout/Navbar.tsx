import MenuItem from "../Navigation/MenuItem";

function Navbar(){
    return(
        <div className="flex justify-around items-center h-14 w-full bg-black text-white">

            <MenuItem title={"About"}/>
            <MenuItem title={"Education"}/>
            <MenuItem title={"Skills"}/>
            <MenuItem title={"Projects"}/> 
            <MenuItem title={"Contact"}/>

        </div>
    )
}

export default Navbar;