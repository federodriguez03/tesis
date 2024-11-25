import { Calendar } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction'; // Para soporte interactivo
import 'bootstrap/dist/css/bootstrap.min.css'; // Si usas Bootstrap
import '@fullcalendar/common/main.css';
import '@fullcalendar/daygrid/main.css';

document.addEventListener('DOMContentLoaded', function () {
    const calendarEl = document.getElementById('calendar');

    const calendar = new Calendar(calendarEl, {
        plugins: [dayGridPlugin, interactionPlugin],
        initialView: 'dayGridMonth',
        locale: 'es', // Cambiar idioma a español
        events: [
            { title: 'Turno 1', start: '2024-11-25' },
            { title: 'Turno 2', start: '2024-11-26T10:00:00' },
            { title: 'Turno 3', start: '2024-11-27T14:00:00' }
        ],
        dateClick: function (info) {
            alert('Has hecho clic en ' + info.dateStr);
        },
    });

    calendar.render();
});