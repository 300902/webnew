import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import gambarImage from '../assets/image/gambar.png';

function NavigationBar() {
  return (
    <>
      <Navbar bg="transparent" variant='dark'>
        <Container>
          <Navbar.Brand href="#home" style={{ color: 'red' }}>Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home" style={{ color: 'red' }}>Beranda</Nav.Link>
            <Nav.Link href="#features" style={{ color: 'red' }}>Tentang</Nav.Link>
            <Nav.Link href="#pricing" style={{ color: 'red' }}>Program Strategis</Nav.Link>
            <Nav.Link href="#pricing" style={{ color: 'red' }}>Berita</Nav.Link>
            <Nav.Link href="#pricing" style={{ color: 'red' }}>Kegiatan</Nav.Link>
            <Nav.Link href="#pricing" style={{ color: 'red' }}>Anggota</Nav.Link>
          </Nav>
          <Button variant="primary" className="ml-auto">GABUNG</Button>
        </Container>
      </Navbar>
      <div className="d-flex justify-content-center">
        <Image
          src={gambarImage}
          width="100%"
          height="auto"
          className="d-inline-block align-top"
          alt="Image"
        />
        
      </div>
    </>
  );
}

export default NavigationBar;