import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Footer from "./components/Footer"
import BlogList from "./components/BlogList"
import ViewBlog from "./components/ViewBlog"
import Post from "./components/Post"
import Edit from "./components/Edit"

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<BlogList />} />
          <Route path="/view/:id" element={<ViewBlog />} />
          <Route path="/post" element={<Post />} />
          <Route path="/edit/:id" element={<Edit />} />
        </Routes>
      </Router>

      <Footer />
    </>
  )
}

export default App
