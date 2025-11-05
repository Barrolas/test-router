import React from 'react';
import NavbarComponent from '../components/Navbar';
import Container from 'react-bootstrap/Container';

function HomePrincipal() {
    return (
        <>
            <NavbarComponent />
            <Container className="mt-3">
                <div className="row">
                    <div className="col-md-12">
                        <h1>Página principal</h1>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Esta es la pagina principal.
                        </p>
                    </div>
                </div>
            </Container>
        </>
    );
}

export default HomePrincipal;