// Obtener el ID de la mascota desde la URL
const params = new URLSearchParams(window.location.search);
const mascotaId = params.get("id");

// Datos simulados de ejemplo
const mascotas = {
    terry: {
        nombre: "TERRY",
        especie: "Perro",
        raza: "Labrador",
        edad: "5 años",
        historial: [
            { fecha: "2024-01-15", detalle: "Vacuna antirrábica aplicada." },
            { fecha: "2024-05-10", detalle: "Chequeo general: estado saludable." },
            { fecha: "2024-07-20", detalle: "Tratamiento para infección de oído." }
        ]
    },
    mia: {
        nombre: "MIA",
        especie: "Gato",
        raza: "Siamés",
        edad: "3 años",
        historial: [
            { fecha: "2023-10-25", detalle: "Desparasitación interna." },
            { fecha: "2024-02-15", detalle: "Vacuna triple felina aplicada." }
        ]
    }
};

// Obtener los datos de la mascota
const mascota = mascotas[mascotaId];

if (mascota) {
    // Mostrar datos generales
    document.getElementById("nombre-mascota").textContent = mascota.nombre;
    const datosMascota = document.getElementById("datos-mascota");
    datosMascota.innerHTML = `
        <li><strong>Especie:</strong> ${mascota.especie}</li>
        <li><strong>Raza:</strong> ${mascota.raza}</li>
        <li><strong>Edad:</strong> ${mascota.edad}</li>
    `;

    // Mostrar historial médico
    const historialMedico = document.getElementById("historial-medico");
    mascota.historial.forEach(evento => {
        const li = document.createElement("li");
        li.textContent = `${evento.fecha} - ${evento.detalle}`;
        historialMedico.appendChild(li);
    });
} else {
    document.getElementById("nombre-mascota").textContent = "Mascota no encontrada";
}