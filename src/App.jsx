import MyNav from "./Components/MyNav";
import MyFooter from "./Components/MyFooter";
import AllTheBooks from "./Pages/AllTheBooks";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./Pages/About";
import NotFound from "./Pages/NotFound";
import BooksDetails from "./Pages/BookDetails";
import { AsinProvider } from "./ContextAsin/ContextAsin";
import { CommentsProvider } from "./ContextAsin/ContextComments";

function App() {
    return (
        <AsinProvider>
            <CommentsProvider>
                <BrowserRouter>
                    <MyNav />
                    <Routes>
                        <Route path="/" element={<AllTheBooks />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/BookDetails/:id" element={<BooksDetails />} />
                        <Route path="*" element={<NotFound />} />
                    </Routes>
                    <MyFooter />
                </BrowserRouter>
            </CommentsProvider>
        </AsinProvider>
    );
}

export default App;
