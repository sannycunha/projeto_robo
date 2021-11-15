import NavBar from "components/NavBar";
import Footer from "components/Footer";

const page = () => {
    return (
        <>
            <div className="conteiner">
                <div>
                    <NavBar />
                </div>
            </div>
            <div> Controle
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