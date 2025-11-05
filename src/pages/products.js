import React from 'react';
import NavbarComponent from '../components/Navbar';
import Container from 'react-bootstrap/Container';

function ProductsPrincipal() {
    return (
        <>
            <NavbarComponent />
            <Container className="mt-3">
                <div className="row">
                    <div className="col-md-12">
                        <h1>Productos destacados</h1>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Esta es la pagina de productos.
                        </p>
                    </div>
                </div>
            </Container>
        </>
    );      
}

export default ProductsPrincipal;