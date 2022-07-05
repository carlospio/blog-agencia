import Link from "next/link";


function Header(){
return(
    <header className="bg-white shadow flex flex-center justify-around">
    <div className="">
     <Link href="/">
       <a className="">
         <img src="images/logo.png" alt="" width="220px" />
       </a>
     </Link>
    </div>
    <div className="flex flex-center justify-end">
    <Link href="/">
       <a className="text-sm font-bold text-gray-700 p-3">
         Home
       </a>
     </Link>
       <Link href="/">
       <a className="text-sm font-bold text-gray-700 p-3">
         Marketing Digital
       </a>
     </Link>
       <Link href="/">
       <a className="text-sm font-bold text-gray-700 p-3">
         Marketing Indústrial
       </a>
     </Link>
     <Link href="/">
       <a className="text-sm font-bold text-gray-700 p-3">
         Redes Sociais
       </a>
     </Link>
     <Link href="/">
       <a className="text-sm font-bold text-gray-700 p-3">
         SEO
       </a>
     </Link>
    </div>
  


  
   
 </header>
)
}

export default Header