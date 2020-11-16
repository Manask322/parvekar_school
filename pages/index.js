import Head from 'next/head'
import styles from '../styles/Home.module.css'


export default function Home() {
  return (
    <>
    <Head>
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />

    <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossOrigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js" integrity="sha384-9/reFTGAW83EW2RDu2S0VKaIzap3H66lZH81PoYlFhbGU+6BZp6G7niu735Sk7lN" crossOrigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/js/bootstrap.min.js" integrity="sha384-w1Q4orYjBQndcko6MimVbzY0tgp4pWB4lZ7lr30WKz0vr/aWKhXdBNmNb5D92v7s" crossOrigin="anonymous"></script>
    </Head>
    <header>
        <div className="container">
          <h2 style={{textAlign: "center",paddingTop:"1.5%"}}>
            आबासाहेब देशमुख पारवेकर प्राथमिक व माध्यमिक आश्रम शाळा, जरूर <br></br> तालुका : घाटंजी , जिल्हा : यवतमाळ
          </h2>
        </div>
        <div className="container">
        <ul className="nav justify-content-center">
          <li className="nav-item">
            <a className="nav-link active" href="#">प्राध्यापक</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">उपक्रम</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">कामगिरी</a>
          </li>
        </ul>
        </div>
    </header>
    <section className="container-fluid">
        <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
          <ol className="carousel-indicators">
            <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
          </ol>
          <div className="carousel-inner">
              <div className="carousel-item active">
                <img className="d-block w-100" src="school.jpg" alt="First slide" />
                <div className="carousel-caption d-none d-md-block">
                  <h5>School</h5>
                </div>
              </div>
              <div className="carousel-item">
                <img className="d-block w-100" src="school.jpg" alt="Second slide" />
                <div className="carousel-caption d-none d-md-block">
                  <h5>School</h5>
                </div>
              </div>
              <div className="carousel-item">
                <img className="d-block w-100" src="school.jpg" alt="Second slide" />
                <div className="carousel-caption d-none d-md-block">
                  <h5>School</h5>
                </div>
              </div>              
          </div>
          <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="sr-only">Previous</span>
          </a>
          <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="sr-only">Next</span>
          </a>
        </div>
    </section>
    <section className="container-lg" style={{paddingTop:"2%", maxWidth:"70%"}}>
      <div className="row">
        <div className="col col-12">  
        <div className="row">
              <div className="col col-lg-3">
                <figure className="figure" >
                  <img src="principal.jpg" className="figure-img img-fluid img-thumbnail rounded" style={{display: "inline-block"}} />
                  <figcaption className="figure-caption text-center" > <b>संकेत किनकर</b> ​</figcaption>
                </figure>
              </div>
              <div className="col col-lg-9">
                  तुमच्याकडे जर जुने स्मार्ट मोबाइल फोन ,लॅपटॉप ,टॅबलेट किंवा कॉम्प्युटर असतील? तर ते *शारदाश्रम विद्यामंदिर* च्या अशा विद्यार्थ्यांना डोनेट करा ज्यांच्याकडे ऑनलाइन प्रशिक्षण घेण्यासाठी कोणतेही साहित्य उपलब्ध नाही.
                  आम्ही 15 ऑगस्ट पर्यंत जवळपास 100 + वरील उपकरणे जमा करण्याची मोहीम हाती घेतली आहे .जेणेकरून विद्यार्थी शिक्षणावाचून वंचित राहणार नाहीत.
                  आपले नाव ,फोन नंबर,पत्ता आणि उपकारणाची संक्षिप्त माहिती द्यावी.
                  तुम्ही शाळेत या वस्तू खालील पत्त्यावर पोचवू शकता.
              </div>
            </div>
        </div>
        <div className="col col-12">
            <div className="row">
              <div className="col col-lg-3">
                <figure className="figure" >
                  <img src="principal.jpg" className="figure-img img-fluid img-thumbnail rounded" style={{display: "inline-block"}} />
                  <figcaption className="figure-caption text-center" > <b>संकेत किनकर</b> ​</figcaption>
                </figure>
              </div>
              <div className="col col-lg-9">
              तुमच्याकडे जर जुने स्मार्ट मोबाइल फोन ,लॅपटॉप ,टॅबलेट किंवा कॉम्प्युटर असतील? तर ते *शारदाश्रम विद्यामंदिर* च्या अशा विद्यार्थ्यांना डोनेट करा ज्यांच्याकडे ऑनलाइन प्रशिक्षण घेण्यासाठी कोणतेही साहित्य उपलब्ध नाही.
              आम्ही 15 ऑगस्ट पर्यंत जवळपास 100 + वरील उपकरणे जमा करण्याची मोहीम हाती घेतली आहे .जेणेकरून विद्यार्थी शिक्षणावाचून वंचित राहणार नाहीत.
              आपले नाव ,फोन नंबर,पत्ता आणि उपकारणाची संक्षिप्त माहिती द्यावी.
              तुम्ही शाळेत या वस्तू खालील पत्त्यावर पोचवू शकता.
              </div>
            </div>
        </div>
      </div>
    </section>
    </>
  )
}
