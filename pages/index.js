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
                <img className="d-block w-100 img-thumbnail" src="slide_photo1.jpeg" alt="First slide" />
                <div className="carousel-caption d-none d-md-block">
                  <h5> <b>क्रिडा सामने</b></h5>
                </div>
              </div>
              <div className="carousel-item">
                <img className="d-block w-100 img-thumbnail" src="slide_photo2.jpeg" alt="Second slide" />
                <div className="carousel-caption d-none d-md-block">
                  <h5> <b>राष्ट्रीय दिन</b> </h5>
                </div>
              </div>
              <div className="carousel-item">
                <img className="d-block w-100 img-thumbnail" src="slide_photo3.jpeg" alt="Second slide" />
                <div className="carousel-caption d-none d-md-block">
                  <h5> <b>सांस्कृतिक कार्यक्रम</b> </h5>
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
      आमचे मुख्याधापक
      </h3>
      <div className="row" style={{marginTop:"3%"}}>
        <div className="col col-12 col-sm-6" style={{maxHeight : "170px", overflow: "scroll"}}>  
            <div className="row">
              <div className="col col-lg-3" >
                <figure className="figure">
                  <img src="principal.jpg" className="figure-img img-fluid rounded" style={{display: "inline-block", maxHeight: "120px", border:"1px solid #B3B0AA"}} />
                  <figcaption className="figure-caption text-center" > <b>संकेत किनकर</b> <br/> <small>(प्राथमिक मुख्याधापक)</small></figcaption>
                </figure>
              </div>
              <div className="col col-lg-9" style={{maxHeight : "170px", overflow: "scroll"}}>
                  तुमच्याकडे जर जुने स्मार्ट मोबाइल फोन ,लॅपटॉप ,टॅबलेट किंवा कॉम्प्युटर असतील? तर ते *शारदाश्रम विद्यामंदिर* च्या अशा विद्यार्थ्यांना डोनेट करा ज्यांच्याकडे ऑनलाइन प्रशिक्षण घेण्यासाठी कोणतेही साहित्य उपलब्ध नाही.
                  <br></br>
                  <div>
                  <span style={{float:'right'}}>- <b>संकेत किनकर </b></span><br/>
                  <span style={{float:'right'}}><small>[M.A. D.ed. B.ed. M.ed.]</small></span>
                  </div>
              </div>
            </div>
        </div>
        <div className="col col-12 col-sm-6" style={{maxHeight : "170px", overflow: "scroll"}}>
            <div className="row">
              <div className="col col-lg-3">
                <figure className="figure" >
                  <img src="tekam.jpeg" className="figure-img img-fluid rounded" style={{display: "inline-block", maxHeight: "120px", border:"1px solid #B3B0AA"}} />
                  <figcaption className="figure-caption text-center" > <b>रामदास टेकाम</b><br/><small>(माध्यमिक मुख्याधापक)</small> ​</figcaption>
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
          <img className="card-img-top" src="krida.jpeg" alt="Card image cap" />
          <div className="card-body">
            <h5 className="card-title text-center"> <b>क्रीडा</b></h5>
            {/* <p className="card-text"></p> */}
          </div>
        </div>
        <div className="card">
          <img className="card-img-top" src="pariksha.jpeg" alt="Card image cap" />
          <div className="card-body">
            <h5 className="card-title text-center"> <b>स्पर्धा परीक्षा </b></h5>
            {/* <p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p> */}
          </div>
        </div>
        <div className="card">
          <img className="card-img-top" src="pariksha.jpeg" alt="Card image cap" />
          <div className="card-body">
            <h5 className="card-title text-center">जयंती</h5>
            {/* <p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p> */}
          </div>
        </div>
        <div className="card">
          <img className="card-img-top" src="pariksha.jpeg" alt="Card image cap" />
          <div className="card-body">
            <h5 className="card-title text-center">जयंती</h5>
            {/* <p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p> */}
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
                  <img src="tekam.jpeg" className="figure-img img-fluid rounded" style={{display: "inline-block", maxHeight: "140px",border:"0.01px solid #B3B0AA"}} />
                  <figcaption className="figure-caption text-center" >रामदास टेकाम<br></br>(माध्यमिक मुख्याधापक)​</figcaption>
                </figure>
        </div>
        <div className="col col-4 col-sm-2">
                <figure className="figure">
                  <img src="principal.jpg" className="figure-img img-fluid img-thumbnail rounded" style={{display: "inline-block", maxHeight: "140px",border:"0.5px solid #B3B0AA"}} />
                  <figcaption className="figure-caption text-center" > संकेत किनकर <br></br> (प्राथमिक मुख्याधापक) ​</figcaption>
                </figure>
        </div>
        <div className="col col-4 col-sm-2">
                <figure className="figure">
                  <img src="sandipw.jpeg" className="figure-img img-fluid rounded" style={{display: "inline-block", maxHeight: "140px",border:"0.5px solid #B3B0AA"}} />
                  <figcaption className="figure-caption text-center" >सन्दिप वन्कर <br></br> (प्रयोग्शला परिचर) ​</figcaption>
                </figure>
        </div>
        <div className="col col-4 col-sm-2">
                <figure className="figure">
                  <img src="gunvantm.jpeg" className="figure-img img-fluid img-thumbnail rounded" style={{display: "inline-block", maxHeight: "140px",border:"0.5px solid #B3B0AA"}} />
                  <figcaption className="figure-caption text-center" >गुनवन्त मसुलकर<br></br> (प्रथमिक शिक्षक) ​</figcaption>
                </figure>
        </div>
        <div className="col col-4 col-sm-2">
                <figure className="figure">
                  <img src="parbata.jpeg" className="figure-img img-fluid img-thumbnail rounded" style={{display: "inline-block", maxHeight: "140px",border:"0.5px solid #B3B0AA"}} />
                  <figcaption className="figure-caption text-center" >पर्बता डोदवर <br></br>(स्वयम्पकी)</figcaption>
                </figure>
        </div>
        <div className="col col-4 col-sm-2">
                <figure className="figure">
                  <img src="principal.jpg" className="figure-img img-fluid img-thumbnail rounded" style={{display: "inline-block", maxHeight: "140px",border:"0.5px solid #B3B0AA"}} />
                  <figcaption className="figure-caption text-center" >भुपल कोवे<br></br> (स्वयम्पकी) ​</figcaption>
                </figure>
        </div>
        <div className="col col-4 col-sm-2">
                <figure className="figure">
                  <img src="datta.jpeg" className="figure-img img-fluid img-thumbnail rounded" style={{display: "inline-block", maxHeight: "140px",border:"0.5px solid #B3B0AA"}} />
                  <figcaption className="figure-caption text-center" >दत्ता कसरेवर<br></br> (कामथी) ​</figcaption>
                </figure>
        </div>
        <div className="col col-4 col-sm-2">
                <figure className="figure">
                  <img src="tukaram.jpeg" className="figure-img img-fluid img-thumbnail rounded" style={{display: "inline-block", maxHeight: "140px",border:"0.5px solid #B3B0AA"}} />
                  <figcaption className="figure-caption text-center" >तुकारम काले <br></br> (प्रथमिक शिक्षक) ​</figcaption>
                </figure>
        </div>
        <div className="col col-4 col-sm-2">
                <figure className="figure">
                  <img src="neeta.jpeg" className="figure-img img-fluid img-thumbnail rounded" style={{display: "inline-block", maxHeight: "140px",border:"0.5px solid #B3B0AA"}} />
                  <figcaption className="figure-caption text-center" >निता पातील<br></br> (माध्यमिक शिक्षक ) ​</figcaption>
                </figure>
        </div>
        <div className="col col-4 col-sm-2">
                <figure className="figure">
                  <img src="kaudu.jpeg" className="figure-img img-fluid img-thumbnail rounded" style={{display: "inline-block", maxHeight: "140px",border:"0.5px solid #B3B0AA"}} />
                  <figcaption className="figure-caption text-center" >कौदु षेवर्कर <br></br> (स्वयम्पकी) ​</figcaption>
                </figure>
        </div>
        <div className="col col-4 col-sm-2">
                <figure className="figure">
                  <img src="indira.jpeg" className="figure-img img-fluid img-thumbnail rounded" style={{display: "inline-block", maxHeight: "140px",border:"0.5px solid #B3B0AA"}} />
                  <figcaption className="figure-caption text-center" >इन्दिरा मसराम<br></br> (अधिक्षिका) ​</figcaption>
                </figure>
        </div>
        <div className="col col-4 col-sm-2">
                <figure className="figure">
                  <img src="vandana.jpeg" className="figure-img img-fluid img-thumbnail rounded" style={{display: "inline-block", maxHeight: "140px",border:"0.5px solid #B3B0AA"}} />
                  <figcaption className="figure-caption text-center" >वन्दना कर्मिल्कर <br></br> (स्वयम्पकी) ​</figcaption>
                </figure>
        </div>
        <div className="col col-4 col-sm-2">
                <figure className="figure">
                  <img src="padmakar.jpeg" className="figure-img img-fluid img-thumbnail rounded" style={{display: "inline-block", maxHeight: "140px",border:"0.5px solid #B3B0AA"}} />
                  <figcaption className="figure-caption text-center" >पद्मकर इङोले <br></br> (अधिक्षक) ​</figcaption>
                </figure>
        </div>
        <div className="col col-4 col-sm-2">
                <figure className="figure">
                  <img src="vinod.jpeg" className="figure-img img-fluid img-thumbnail rounded" style={{display: "inline-block", maxHeight: "140px",border:"0.5px solid #B3B0AA"}} />
                  <figcaption className="figure-caption text-center" >विनोद भोयर<br></br> (मध्यमिक शिक्षक) ​</figcaption>
                </figure>
        </div>
        <div className="col col-4 col-sm-2">
                <figure className="figure">
                  <img src="satish.jpeg" className="figure-img img-fluid img-thumbnail rounded" style={{display: "inline-block", maxHeight: "140px",border:"0.5px solid #B3B0AA"}} />
                  <figcaption className="figure-caption text-center" >सतिश वतिले<br></br> (मध्यमिक शिक्षक) ​</figcaption>
                </figure>
        </div>
        <div className="col col-4 col-sm-2">
                <figure className="figure">
                  <img src="dadarao.jpeg" className="figure-img img-fluid img-thumbnail rounded" style={{display: "inline-block", maxHeight: "140px",border:"0.5px solid #B3B0AA"}} />
                  <figcaption className="figure-caption text-center" >ददरओ बोर्दे<br></br> (प्रथमिक शिक्षक) ​</figcaption>
                </figure>
        </div>
        <div className="col col-4 col-sm-2">
                <figure className="figure">
                  <img src="dauji.jpeg" className="figure-img img-fluid img-thumbnail rounded" style={{display: "inline-block", maxHeight: "140px",border:"0.5px solid #B3B0AA"}} />
                  <figcaption className="figure-caption text-center" >दग्दुजी वघ <br></br> (प्रथमिक शिक्षक) ​</figcaption>
                </figure>
        </div>
        <div className="col col-4 col-sm-2">
                <figure className="figure">
                  <img src="savita.jpeg" className="figure-img img-fluid img-thumbnail rounded" style={{display: "inline-block", maxHeight: "140px",border:"0.5px solid #B3B0AA"}} />
                  <figcaption className="figure-caption text-center" >सविता रामापुरे<br></br> (प्रथमिक शिक्षक) ​</figcaption>
                </figure>
        </div>
        <div className="col col-4 col-sm-2">
                <figure className="figure">
                  <img src="taksande.jpeg" className="figure-img img-fluid img-thumbnail rounded" style={{display: "inline-block", maxHeight: "140px",border:"0.5px solid #B3B0AA"}} />
                  <figcaption className="figure-caption text-center" >तक्सन्दे<br></br> ( मध्यमिक शिक्षक ) ​</figcaption>
                </figure>
        </div>
        <div className="col col-4 col-sm-2">
                <figure className="figure">
                  <img src="lata.jpeg" className="figure-img img-fluid img-thumbnail rounded" style={{display: "inline-block", maxHeight: "140px",border:"0.5px solid #B3B0AA"}} />
                  <figcaption className="figure-caption text-center" >लता देव्रे<br></br> (प्रथमिक शिक्षक) ​</figcaption>
                </figure>
        </div>
        <div className="col col-4 col-sm-2">
                <figure className="figure">
                  <img src="vidyadhar.jpeg" className="figure-img img-fluid img-thumbnail rounded" style={{display: "inline-block", maxHeight: "140px",border:"0.5px solid #B3B0AA"}} />
                  <figcaption className="figure-caption text-center" >विद्यधर रौत<br></br> (प्रथमिक शिक्षक) ​</figcaption>
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
