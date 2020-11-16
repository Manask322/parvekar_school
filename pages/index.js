import Head from 'next/head'


export default function Home() {
  return (
    <>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />

      <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossOrigin="anonymous"></script>
      <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js" integrity="sha384-9/reFTGAW83EW2RDu2S0VKaIzap3H66lZH81PoYlFhbGU+6BZp6G7niu735Sk7lN" crossOrigin="anonymous"></script>
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/js/bootstrap.min.js" integrity="sha384-w1Q4orYjBQndcko6MimVbzY0tgp4pWB4lZ7lr30WKz0vr/aWKhXdBNmNb5D92v7s" crossOrigin="anonymous"></script>
    </Head>
    <div style={{backgroundColor: "#FAF6F6", fontFamily:"sans-serif"}}>
    <header style={{color: "#372807", backgroundColor: "white"}}>
        <div className="container" style={{paddingTop: "1%"}}>
          <div className="row">
            <div className="col col-5 col-sm-3 text-right ">
                <img className=" img-fluid img-thumbnail img-responsive center-block" src="logo.jpeg" />
            </div>
            <div className="col col-7 col-sm-9 text-left" style={{maxHeight: "169px",overflow: "scroll"}}>
                <h3 style={{textAlign: "justify", textShadow: "3%", marginTop: "2%"}}>
                    आबासाहेब देशमुख पारवेकर प्राथमिक व माध्यमिक आश्रम शाळा, जरूर <br></br> तालुका : घाटंजी , जिल्हा : यवतमाळ
                </h3>
            </div>
          </div>
        </div>
        <div className="container">
        <hr></hr>
        <ul className="nav justify-content-center" style={{marginTop: "-15px", fontSize: "20px"}}>
          <li className="nav-item">
            <a className="nav-link active" href="#principal" style={{color: "black"}}>प्राध्यापक</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#ach" style={{color: "black"}}>उपक्रम</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#teachers" style={{color: "black"}}>कर्मचारी</a>
          </li>
        </ul>
        </div>
    </header>
    <section>
        <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
          <ol className="carousel-indicators">
            <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
          </ol>
          <div className="carousel-inner">
              <div className="carousel-item active">
                <img className="d-block w-100 img-thumbnail" src="school_1.jpg" alt="First slide" />
                <div className="carousel-caption d-none d-md-block">
                  <h5>School</h5>
                </div>
              </div>
              <div className="carousel-item">
                <img className="d-block w-100 img-thumbnail" src="school_1.jpg" alt="Second slide" />
                <div className="carousel-caption d-none d-md-block">
                  <h5>School</h5>
                </div>
              </div>
              <div className="carousel-item">
                <img className="d-block w-100 img-thumbnail" src="school_1.jpg" alt="Second slide" />
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
    <hr></hr>
    <section className="container-fluid" style={{paddingTop:"2%", maxWidth:"80%"}} id="principal">
      <h3 className="text-center">
      आमचे प्राध्यापक
      </h3>
      <div className="row" style={{marginTop:"3%"}}>
        <div className="col col-12 col-sm-6" style={{maxHeight : "170px", overflow: "scroll"}}>  
            <div className="row">
              <div className="col col-lg-3" >
                <figure className="figure">
                  <img src="principal.jpg" className="figure-img img-fluid img-thumbnail rounded" style={{display: "inline-block", maxHeight: "120px", border:"1px solid #B3B0AA"}} />
                  <figcaption className="figure-caption text-center" > <b>संकेत किनकर</b> ​</figcaption>
                </figure>
              </div>
              <div className="col col-lg-9" style={{maxHeight : "170px", overflow: "scroll"}}>
                  तुमच्याकडे जर जुने स्मार्ट मोबाइल फोन ,लॅपटॉप ,टॅबलेट किंवा कॉम्प्युटर असतील? तर ते *शारदाश्रम विद्यामंदिर* च्या अशा विद्यार्थ्यांना डोनेट करा ज्यांच्याकडे ऑनलाइन प्रशिक्षण घेण्यासाठी कोणतेही साहित्य उपलब्ध नाही.
                  आम्ही 15 ऑगस्ट पर्यंत जवळपास 100 + वरील उपकरणे जमा करण्याची मोहीम हाती घेतली आहे .जेणेकरून विद्यार्थी शिक्षणावाचून वंचित राहणार नाहीत.
                  आपले नाव ,फोन नंबर,पत्ता आणि उपकारणाची संक्षिप्त माहिती द्यावी.
                  तुम्ही शाळेत या वस्तू खालील पत्त्यावर पोचवू शकता.
              </div>
            </div>
        </div>
        <div className="col col-12 col-sm-6" style={{maxHeight : "170px", overflow: "scroll"}}>
            <div className="row">
              <div className="col col-lg-3">
                <figure className="figure" >
                  <img src="principal.jpg" className="figure-img img-fluid img-thumbnail rounded" style={{display: "inline-block", maxHeight: "120px", border:"1px solid #B3B0AA"}} />
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
    <hr></hr>
    <section className="container p-4" id="" style={{textAlign:"center"}}>
      <h3>शाळा</h3>
      <div>
          महाराष्ट्र राज्यात डोंगराळ व दुर्गम भागात राहणा-या अनुसूचित जमातीचे सामाजीक व शैक्षणिक प्रगती होण्यासाठी सन 1972-73 
          पासून क्षेत्रविकासाचा दृष्टीकोन स्विकारण्यात आला अशा भागाचा मूलभूत विकास व्हावा आणि त्याचा फायदा सर्वांना व्हावा यासाठी 
          तेथे मूळ केंद्रस्थान म्हणून आश्रमशाळा आसावी या शाळेत आदिवासी विद्यार्थ्यांची इ. 10 वी पर्यंतच्या शिक्षणाची सोय उपलब्ध आहे. 
          सदर आश्रमशाळेतील विद्यार्थ्यांना निवास, भोजन, गणवेश,आंथरुण पांघरुण, पुस्तके व इतर लेखन साहित्य इ. सुविधा शासनाकडून मोफत पुरविण्यात येतात.
      </div>
    </section>
    <hr></hr>
    <section className="container p-2">
      <h3 style={{textAlign: "center"}}>उपक्रम</h3>
    <div className="card-deck p-4" id="ach">
        <div className="card">
          <img className="card-img-top" src="kabaddi.jpg" alt="Card image cap" />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
          </div>
        </div>
        <div className="card">
          <img className="card-img-top" src="kabaddi.jpg" alt="Card image cap" />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
          </div>
        </div>
        <div className="card">
          <img className="card-img-top" src="kabaddi.jpg" alt="Card image cap" />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
          </div>
        </div>
        <div className="card">
          <img className="card-img-top" src="kabaddi.jpg" alt="Card image cap" />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
          </div>
        </div>
      </div>
    </section>
    <hr></hr>
    <section className="container p-2" id="teachers"  style={{textAlign: "center"}}>
      <h3>
          कर्मचारी
      </h3>
      <div className="row p-4">
        <div className="col col-4 col-sm-2">
                <figure className="figure">
                  <img src="principal.jpg" className="figure-img img-fluid img-thumbnail rounded" style={{display: "inline-block", maxHeight: "140px",border:"1px solid #B3B0AA"}} />
                  <figcaption className="figure-caption text-center" >संकेत किनकर <br></br> (कर्मचारी)​</figcaption>
                </figure>
        </div>
        <div className="col col-4 col-sm-2">
                <figure className="figure">
                  <img src="principal.jpg" className="figure-img img-fluid img-thumbnail rounded" style={{display: "inline-block", maxHeight: "140px",border:"0.5px solid #B3B0AA"}} />
                  <figcaption className="figure-caption text-center" >संकेत किनकर <br></br> (कर्मचारी) ​</figcaption>
                </figure>
        </div>
        <div className="col col-4 col-sm-2">
                <figure className="figure">
                  <img src="principal.jpg" className="figure-img img-fluid img-thumbnail rounded" style={{display: "inline-block", maxHeight: "140px",border:"0.5px solid #B3B0AA"}} />
                  <figcaption className="figure-caption text-center" > संकेत किनकर <br></br> (कर्मचारी) ​</figcaption>
                </figure>
        </div>
        <div className="col col-4 col-sm-2">
                <figure className="figure">
                  <img src="principal.jpg" className="figure-img img-fluid img-thumbnail rounded" style={{display: "inline-block", maxHeight: "140px",border:"0.5px solid #B3B0AA"}} />
                  <figcaption className="figure-caption text-center" >संकेत किनकर <br></br> (कर्मचारी) ​</figcaption>
                </figure>
        </div>
        <div className="col col-4 col-sm-2">
                <figure className="figure">
                  <img src="principal.jpg" className="figure-img img-fluid img-thumbnail rounded" style={{display: "inline-block", maxHeight: "140px",border:"0.5px solid #B3B0AA"}} />
                  <figcaption className="figure-caption text-center" >संकेत किनकर <br></br> (कर्मचारी)​</figcaption>
                </figure>
        </div>
        <div className="col col-4 col-sm-2">
                <figure className="figure">
                  <img src="principal.jpg" className="figure-img img-fluid img-thumbnail rounded" style={{display: "inline-block", maxHeight: "140px",border:"0.5px solid #B3B0AA"}} />
                  <figcaption className="figure-caption text-center" >संकेत किनकर <br></br> (कर्मचारी) ​</figcaption>
                </figure>
        </div>
        <div className="col col-4 col-sm-2">
                <figure className="figure">
                  <img src="principal.jpg" className="figure-img img-fluid img-thumbnail rounded" style={{display: "inline-block", maxHeight: "140px",border:"0.5px solid #B3B0AA"}} />
                  <figcaption className="figure-caption text-center" >संकेत किनकर <br></br> (कर्मचारी) ​</figcaption>
                </figure>
        </div>
      </div>
    </section>
    <section style={{backgroundColor: "#F8F1E3"}}>
        <div className="container p-5">
            <div className="row text-center">
              <div className="col">
                <b>Address : </b> Jarur, MH.
              </div>
              <div className="col">
                <b>Contact : </b> 9404237451
              </div>
            </div>
        </div>
    </section>
    </div>
    </>
  )
}
