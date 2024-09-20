import React, { useState } from 'react';

const ReservaForm = () => {
    const [formData, setFormData] = useState({
      nombre: '',
      email: '',
      telefono: '',
      fecha: '',
      hora: '',
      personas: ''
    });
  
    const [validated, setValidated] = useState(false);
    const [formSubmitted, setFormSubmitted] = useState(false); // Nuevo estado para mostrar el mensaje de éxito
    const [submitting, setSubmitting] = useState(false); // Estado para deshabilitar el botón al enviar
  
    const handleInputChange = (e) => {
      const { id, value } = e.target;
      setFormData({
        ...formData,
        [id]: value
      });
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      const form = e.target;
      if (form.checkValidity() === false) {
        e.stopPropagation();
        setValidated(true);
      } else {
        setSubmitting(true); // Deshabilitar el botón de envío
        // Simulación de un envío a una API (puedes reemplazar con Fetch u otra lógica)
        setTimeout(() => {
          alert('Reserva realizada con éxito');
          setFormSubmitted(true); // Mostrar mensaje de éxito
          setSubmitting(false); // Habilitar el botón nuevamente
          setFormData({
            nombre: '',
            email: '',
            telefono: '',
            fecha: '',
            hora: '',
            personas: ''
          });
          setValidated(false); // Resetear validación
        }, 1000); // Simulación de un retraso de 1 segundo en la reserva
      }
    };

  return (
    <section id="reservar" className="container my-5">
      <h2 className="text-center">Reserva una Mesa</h2>
      <form className={`needs-validation ${validated ? 'was-validated' : ''}`} noValidate onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="nombre">Nombre Completo</label>
          <input
            type="text"
            className="form-control"
            id="nombre"
            value={formData.nombre}
            onChange={handleInputChange}
            required
          />
          <div className="invalid-feedback">Por favor, ingresa tu nombre completo.</div>
        </div>

        <div className="form-group">
          <label htmlFor="email">Correo Electrónico</label>
          <input
            type="email"
            className="form-control"
            id="email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
          <div className="invalid-feedback">Por favor, ingresa un correo válido.</div>
        </div>

        <div className="form-group">
          <label htmlFor="telefono">Teléfono</label>
          <input
            type="tel"
            className="form-control"
            id="telefono"
            value={formData.telefono}
            onChange={handleInputChange}
            required
          />
          <div className="invalid-feedback">Por favor, ingresa un número de teléfono.</div>
        </div>

        <div className="form-group">
          <label htmlFor="fecha">Fecha de la Reserva</label>
          <input
            type="date"
            className="form-control"
            id="fecha"
            value={formData.fecha}
            onChange={handleInputChange}
            required
          />
          <div className="invalid-feedback">Por favor, selecciona una fecha.</div>
        </div>

        <div className="form-group">
          <label htmlFor="hora">Hora de la Reserva</label>
          <input
            type="time"
            className="form-control"
            id="hora"
            value={formData.hora}
            onChange={handleInputChange}
            required
          />
          <div className="invalid-feedback">Por favor, selecciona una hora.</div>
        </div>

        <div className="form-group">
          <label htmlFor="personas">Número de Personas</label>
          <input
            type="number"
            className="form-control"
            id="personas"
            min="1"
            value={formData.personas}
            onChange={handleInputChange}
            required
          />
          <div className="invalid-feedback">Por favor, ingresa el número de personas.</div>
        </div>

        <button type="submit" className="btn btn-primary">Reservar</button>
      </form>
    </section>
  );
};

export default ReservaForm;
