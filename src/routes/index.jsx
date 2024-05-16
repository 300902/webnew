import { Routes, Route } from "react-router-dom";
import Home from '../components/Home';
import About from "../components/About";
import Program from "../components/Program";
import News from "../components/News";
import Activity from "../components/Activity";
import Anggota from "../components/Anggota";

function RoutesIndex() {
    console.log("RoutesIndex")
    return (
        <Routes>

            {/* route "/" */}
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/program" element={<Program />} />
            <Route path="/news" element={<News />} />
            <Route path="/activity" element={<Activity />} />
            <Route path="/anggota" element={<Anggota />} />

            {/* route "/posts/create" */}
            {/* <Route path="/posts/create" element={<PostCreate />} /> */}

            {/* route "/posts/edit/:id" */}
            {/* <Route path="/posts/edit/:id" element={<PostEdit />} /> */}

        </Routes>
    )
}

export default RoutesIndex