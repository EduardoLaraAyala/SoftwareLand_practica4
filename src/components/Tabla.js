import React, { useState } from "react";
import { Table, Button, Modal, ModalHeader, ModalBody } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSoccerBall } from "@fortawesome/free-solid-svg-icons";
import jugadores from "../jugadores.json";


const EjemploTabla = () => {
    const [modalAbierto, setModalAbierto] = useState(false);
    const [urlImagen, setUrlImagen] = useState("");
  
    const abrirModal = (url) => {
        setUrlImagen(url);
        setModalAbierto(true);
    };
    
  return (
    <div style={{ maxWidth: "80%", margin: "auto" }}>
      <Table>
        <thead>
          <tr>
            <th>Jugador</th>
            <th>Nombre</th>
            <th>Equipo</th>
            <th>Icono</th>
            <th>Boton</th>
          </tr>
        </thead>
        <tbody>
          {jugadores.map((jugador, index) => (
            <tr key={jugador.Jugador}>
              <td>{jugador.Jugador}</td>
              <td>{jugador.nombre}</td>
              <td>{jugador.equipo}</td>
              <td>
                <FontAwesomeIcon icon={faSoccerBall} />
              </td>
              <td>
                <Button color="secondary" onClick={() => abrirModal(jugador.urlImagen)}>Info</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      <Modal isOpen={modalAbierto} toggle={() => setModalAbierto(!modalAbierto)}>
        <ModalHeader toggle={() => setModalAbierto(!modalAbierto)}> Quien es</ModalHeader>
        <ModalBody>
          <img src={urlImagen} alt="Imagen del Jugador" style={{ maxWidth: "40%" }} />
        </ModalBody>
      </Modal>
    </div>
  );
};

export default EjemploTabla;
