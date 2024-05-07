import { Link } from "react-router-dom"
const Navbar = () => {
  
  return (
    <nav className="bg-black py-4">
      <div className="container mx-auto flex justify-between items-center">
       
        <div className="flex items-center">
        <Link to={`/`}>
          <a className="text-white text-2xl font-bold mr-6">
            Home
          </a>
        </Link>
        </div>

        <div className="flex items-center gap-3">
          <Link to={`/post`}>
           <a className="text-white text-2xl font-bold mr-6">
            Post A Blog
          </a>
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
