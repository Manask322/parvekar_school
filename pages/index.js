import Head from 'next/head'
import styles from '../styles/Home.module.css'
import {Container, Button, Row, Col, Carousel,Image, Card} from 'react-bootstrap'

export default function Home() {
  return (
    <div style={{fontFamily : "monospace"}}>
      <div style={{backgroundColor:"ivory"}}>
        <Container fluid="lg">
          <Row style={{padding: "0.5%"}}>
            <Col sm={3} style={{textAlign: "right"}}>
              <Image 
              src="data:image/jpeg;base64,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"
              thumbnail 
              width="60%"
              />
 
            </Col>
            <Col sm={9}>
              <h1 style={{textAlign: "left", marginTop:"3%", fontWeight: "bold"}}>
                Abasahed Parvekar Ashram Shala <br></br> Jarur
              </h1>
            </Col>
          </Row>
        </Container>
      </div>
      <div>
        <Carousel keyboard={true}>
          <Carousel.Item >
            <Image
              src="https://lh3.googleusercontent.com/4b8sK-AH20shd6rfMLGdggXSWkL97efnKPVwBHzQPvddcY3-7fS7qn40UqDQjv_QDXvxPTamma-w0xplrAakAkynx3180NfaxJ6FEc1Qjy2N3cRvslY7BaqBG261eUMxGEaGQA3IW0GN7UgjWQJlwlXMHzirTOlYm_OOD01L4G0PmsnEhOSHeIW1HrUoT-Fn7kOw-LuFYj22V3G6E-Tj4cIDJmPyJEMHs-DdhXvJIz_rvuh4-YbyHB67AODCGf1kjLiirtF-1wotZje6Fioh5keyOcarbd85jHPrWebErcsFSBZj7btY9jeYJg5zWBvibMqcpZJsnZPCI0HmYwlZB-7C6cyAd5KOtNsxK8EKmzl04fN8bItDGysYfuhMWhG9zb-a3I-DpsfO51UDs3iNJQP6eK6PiH7oSjll96S-S_GkLc02OrK7L0OMxz-Hnh0Hm8nxAKQ4Wq9T_XtNRwNSlVtzKu4dPXCyCh3cYcEZx-4mDDLzKE27kAepCnorSLsYTfDsfAZoskNXFDGXjzNittvHxbYr1Y8aywB8IhHRuh_2qcPx1fh3bJ5mez41PUQzqvvo_h1Kp4BqqfqhOOPjKZN7IsDL9UdpQ-Ym_alHoR_nRo3UhqEsz3Fo4XNO8Ea_5HxPTC3wWu3VqmzpFHOc4LP_y8mOEn3Ne-iMpHzhjETuFd_heiFLM7knY62abl0=w2048-h693-no?authuser=0"
              alt="First slide"
              fluid
            />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://lh3.googleusercontent.com/4b8sK-AH20shd6rfMLGdggXSWkL97efnKPVwBHzQPvddcY3-7fS7qn40UqDQjv_QDXvxPTamma-w0xplrAakAkynx3180NfaxJ6FEc1Qjy2N3cRvslY7BaqBG261eUMxGEaGQA3IW0GN7UgjWQJlwlXMHzirTOlYm_OOD01L4G0PmsnEhOSHeIW1HrUoT-Fn7kOw-LuFYj22V3G6E-Tj4cIDJmPyJEMHs-DdhXvJIz_rvuh4-YbyHB67AODCGf1kjLiirtF-1wotZje6Fioh5keyOcarbd85jHPrWebErcsFSBZj7btY9jeYJg5zWBvibMqcpZJsnZPCI0HmYwlZB-7C6cyAd5KOtNsxK8EKmzl04fN8bItDGysYfuhMWhG9zb-a3I-DpsfO51UDs3iNJQP6eK6PiH7oSjll96S-S_GkLc02OrK7L0OMxz-Hnh0Hm8nxAKQ4Wq9T_XtNRwNSlVtzKu4dPXCyCh3cYcEZx-4mDDLzKE27kAepCnorSLsYTfDsfAZoskNXFDGXjzNittvHxbYr1Y8aywB8IhHRuh_2qcPx1fh3bJ5mez41PUQzqvvo_h1Kp4BqqfqhOOPjKZN7IsDL9UdpQ-Ym_alHoR_nRo3UhqEsz3Fo4XNO8Ea_5HxPTC3wWu3VqmzpFHOc4LP_y8mOEn3Ne-iMpHzhjETuFd_heiFLM7knY62abl0=w2048-h693-no?authuser=0"
              alt="Second slide"
            />
            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://lh3.googleusercontent.com/4b8sK-AH20shd6rfMLGdggXSWkL97efnKPVwBHzQPvddcY3-7fS7qn40UqDQjv_QDXvxPTamma-w0xplrAakAkynx3180NfaxJ6FEc1Qjy2N3cRvslY7BaqBG261eUMxGEaGQA3IW0GN7UgjWQJlwlXMHzirTOlYm_OOD01L4G0PmsnEhOSHeIW1HrUoT-Fn7kOw-LuFYj22V3G6E-Tj4cIDJmPyJEMHs-DdhXvJIz_rvuh4-YbyHB67AODCGf1kjLiirtF-1wotZje6Fioh5keyOcarbd85jHPrWebErcsFSBZj7btY9jeYJg5zWBvibMqcpZJsnZPCI0HmYwlZB-7C6cyAd5KOtNsxK8EKmzl04fN8bItDGysYfuhMWhG9zb-a3I-DpsfO51UDs3iNJQP6eK6PiH7oSjll96S-S_GkLc02OrK7L0OMxz-Hnh0Hm8nxAKQ4Wq9T_XtNRwNSlVtzKu4dPXCyCh3cYcEZx-4mDDLzKE27kAepCnorSLsYTfDsfAZoskNXFDGXjzNittvHxbYr1Y8aywB8IhHRuh_2qcPx1fh3bJ5mez41PUQzqvvo_h1Kp4BqqfqhOOPjKZN7IsDL9UdpQ-Ym_alHoR_nRo3UhqEsz3Fo4XNO8Ea_5HxPTC3wWu3VqmzpFHOc4LP_y8mOEn3Ne-iMpHzhjETuFd_heiFLM7knY62abl0=w2048-h693-no?authuser=0"
              alt="Third slide"
            />
            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
      <div>
        <Container>
          <Row style={{padding:"1%"}}>
            <Col>
              <Card border="dark">
                  <Row>
                      <Col>
                        <Card.Img
                          variant="top" 
                          src="https://lh3.googleusercontent.com/i94mr_X0fWNbVRLYSI30zPt5AanjC2rjjJjwb93LwpuqzIaELuAK9RccoXq-_p2mbCArUAXBGI8cZQJY0SjdlUZRsRM1fX1Za9Bqp144QVHqzU9ks2NIPJv6BUZMoHSRN5owhkKQsGul7KdZOAKppHcxDAKCcEeXnepl-ffJMXWrRAicL-xoCDm7x9ipCgzPZlUHxoe46BoDOprIGc01ND7mYox7eDHJ3sDAWaT4lhtI0bpPLWAEOkUkr_Xavi-ZroLdVmRTXalWsFd_ldl53QdzJe-ybHw0ppc1Ctx2j2qujw4U587YRtLchBRfBMp-FnJuqt8XMVFasX7Vzh_0C_bT7RPsmRsiWUAHC_jMpJZa225WD4KhqEck3uy6j1nOkboNKaH40RloccabTsu7UazNRHpdMVeY5Bel9RD2L5WzfPHneHgEOhRMJRsudleYf-6XkSAOkhanuis2gC9miFBQ62UJQkDhtP2kK08i-IrcZHGhI4nluYtJ_za4iiaHMvuvaqSeH_DUCXSxANYkYCxvuhNVM4eKpI0_WZ7CfnKPa5VBIB-746EvbKPMzSxj9o47nD4eLEpuVfs0SBlcXyFPcOae1OXiOZcz461IYy4ru19YUP0X7Wm6NuW7ZRzibVv3RzKdIqWgs85Qgvu1SAfBSgQsmRb8omwVwBAVSnMYI68fw5yzhANf90yW2Q=w1168-h1532-no?authuser=1" 
                          roundedCircle
                        />
                      </Col>
                      <Col>
                      <Card.Body>
                          <h4>
                          Sanket Kinkar
                          </h4>
                          <small style={{float:"right"}}>Principal (Primary)</small>

                        <br></br>
                        <Card.Text>
                            Details
                        </Card.Text>
                        </Card.Body>
                      </Col>
                  </Row>
              </Card>
            </Col>
            <Col>
            <Card border="dark">
                  <Row>
                      <Col>
                        <Card.Img
                          variant="top" 
                          src="https://lh3.googleusercontent.com/i94mr_X0fWNbVRLYSI30zPt5AanjC2rjjJjwb93LwpuqzIaELuAK9RccoXq-_p2mbCArUAXBGI8cZQJY0SjdlUZRsRM1fX1Za9Bqp144QVHqzU9ks2NIPJv6BUZMoHSRN5owhkKQsGul7KdZOAKppHcxDAKCcEeXnepl-ffJMXWrRAicL-xoCDm7x9ipCgzPZlUHxoe46BoDOprIGc01ND7mYox7eDHJ3sDAWaT4lhtI0bpPLWAEOkUkr_Xavi-ZroLdVmRTXalWsFd_ldl53QdzJe-ybHw0ppc1Ctx2j2qujw4U587YRtLchBRfBMp-FnJuqt8XMVFasX7Vzh_0C_bT7RPsmRsiWUAHC_jMpJZa225WD4KhqEck3uy6j1nOkboNKaH40RloccabTsu7UazNRHpdMVeY5Bel9RD2L5WzfPHneHgEOhRMJRsudleYf-6XkSAOkhanuis2gC9miFBQ62UJQkDhtP2kK08i-IrcZHGhI4nluYtJ_za4iiaHMvuvaqSeH_DUCXSxANYkYCxvuhNVM4eKpI0_WZ7CfnKPa5VBIB-746EvbKPMzSxj9o47nD4eLEpuVfs0SBlcXyFPcOae1OXiOZcz461IYy4ru19YUP0X7Wm6NuW7ZRzibVv3RzKdIqWgs85Qgvu1SAfBSgQsmRb8omwVwBAVSnMYI68fw5yzhANf90yW2Q=w1168-h1532-no?authuser=1" 
                          roundedCircle
                        />
                      </Col>
                      <Col>
                      <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                          <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                          </Card.Text>
                        </Card.Body>
                      </Col>
                  </Row>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
      <div>Achievements Cards</div>
      <div>Faculty details</div>
      <div>Contact Details</div>
    </div>

  )
}
