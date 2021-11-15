import 'assets/css/carousel.css';
import img_01 from 'assets/img/carousel/imagem1.jpg';
import img_02 from 'assets/img/carousel/imagem2.jpg';
import img_03 from 'assets/img/carousel/imagem3.jpg';
import img_04 from 'assets/img/carousel/imagem4.jpg';
import img_05 from 'assets/img/carousel/imagem5.jpg';

function Carousel() {
  return (
    <div className="conteiner">
      <div className="card mb-3 bg-transparent pt-0 pb-0 mr-0 mb-0">
        <div className="row no-gutters">

          <div className="col-md-5">
            <div className="card-body">
              <h1 className="card-title font-weight-bold">Galeria de fotos</h1>
              <p className="card-text">Lorem Ipsum é simplesmente um texto fictício da indústri
                tipográfica e de impressão. Lorem Ipsum é o texto fictício
                padrão do setor desde os anos 1500, quando uma impressora
                desconhecida pegou uma galera do tipo e a mexeu para fazer
                um livro de espécimes. Ele sobreviveu não apenas cinco
                séculos, mas também o salto para a composição...</p>
              <p className="card-text"><small className="text-muted">Last updated 20 mins ago</small></p>
            </div>
          </div>

          <div className="col-md-7 ">
            <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img src={img_01} className="d-block w-100" alt="..." />
                </div>
                <div className="carousel-item">
                  <img src={img_02} className="d-block w-100" alt="..." />
                </div>
                <div className="carousel-item">
                  <img src={img_03} className="d-block w-100" alt="..." />
                </div>
                <div className="carousel-item">
                  <img src={img_04} className="d-block w-100" alt="..." />
                </div>
                <div className="carousel-item">
                  <img src={img_05} className="d-block w-100" alt="..." />
                </div>
              </div>
              <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Carousel;