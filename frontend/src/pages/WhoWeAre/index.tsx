import NavBar from "components/NavBar";
import Footer from "components/Footer";
import Section from "components/Section";

const page = () => {
    return (
        <>
            <div className="conteiner">
                <div>
                    <NavBar />
                </div>
            </div>
            <div className="conteiner">
                <Section />
            </div>
            <div className="conteiner">
                <div>
                    <Footer />
                </div>
            </div>
        </>
    );
}
export default page;