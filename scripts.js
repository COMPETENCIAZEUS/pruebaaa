document.addEventListener('DOMContentLoaded', function() {
    // Datos de ejemplo
    const categories = {
        beginner: {
            men: [
                {
                    name: 'Juan Pérez',
                    position: 1,
                    points: 95,
                    events: 4,
                    heats: 'Heat 1',
                    lane: 3,
                    schedule: '10:00 AM',
                    eventDetails: [
                        { name: 'Evento 1', repetitions: 50, additionalInfo: 'Info del evento 1' },
                        { name: 'Evento 2', repetitions: 60, additionalInfo: 'Info del evento 2' },
                        { name: 'Evento 3', repetitions: 45, additionalInfo: 'Info del evento 3' },
                        { name: 'Evento 4', repetitions: 55, additionalInfo: 'Info del evento 4' }
                    ]
                },
                {
                    name: 'Carlos Díaz',
                    position: 2,
                    points: 90,
                    events: 4,
                    heats: 'Heat 1',
                    lane: 4,
                    schedule: '10:00 AM',
                    eventDetails: [
                        { name: 'Evento 1', repetitions: 45, additionalInfo: 'Info del evento 1' },
                        { name: 'Evento 2', repetitions: 55, additionalInfo: 'Info del evento 2' },
                        { name: 'Evento 3', repetitions: 50, additionalInfo: 'Info del evento 3' },
                        { name: 'Evento 4', repetitions: 60, additionalInfo: 'Info del evento 4' }
                    ]
                },
            ],
            women: [
                {
                    name: 'Ana López',
                    position: 1,
                    points: 98,
                    events: 4,
                    heats: 'Heat 2',
                    lane: 2,
                    schedule: '11:00 AM',
                    eventDetails: [
                        { name: 'Evento 1', repetitions: 60, additionalInfo: 'Info del evento 1' },
                        { name: 'Evento 2', repetitions: 65, additionalInfo: 'Info del evento 2' },
                        { name: 'Evento 3', repetitions: 70, additionalInfo: 'Info del evento 3' },
                        { name: 'Evento 4', repetitions: 68, additionalInfo: 'Info del evento 4' }
                    ]
                },
                {
                    name: 'María Gómez',
                    position: 2,
                    points: 85,
                    events: 4,
                    heats: 'Heat 2',
                    lane: 3,
                    schedule: '11:00 AM',
                    eventDetails: [
                        { name: 'Evento 1', repetitions: 55, additionalInfo: 'Info del evento 1' },
                        { name: 'Evento 2', repetitions: 60, additionalInfo: 'Info del evento 2' },
                        { name: 'Evento 3', repetitions: 62, additionalInfo: 'Info del evento 3' },
                        { name: 'Evento 4', repetitions: 61, additionalInfo: 'Info del evento 4' }
                    ]
                },
            ]
        },
        intermediate: {
            men: [
                {
                    name: 'Luis Rodríguez',
                    position: 1,
                    points: 100,
                    events: 4,
                    heats: 'Heat 3',
                    lane: 1,
                    schedule: '12:00 PM',
                    eventDetails: [
                        { name: 'Evento 1', repetitions: 70, additionalInfo: 'Info del evento 1' },
                        { name: 'Evento 2', repetitions: 75, additionalInfo: 'Info del evento 2' },
                        { name: 'Evento 3', repetitions: 80, additionalInfo: 'Info del evento 3' },
                        { name: 'Evento 4', repetitions: 85, additionalInfo: 'Info del evento 4' }
                    ]
                },
                {
                    name: 'Pedro Fernández',
                    position: 2,
                    points: 90,
                    events: 4,
                    heats: 'Heat 3',
                    lane: 2,
                    schedule: '12:00 PM',
                    eventDetails: [
                        { name: 'Evento 1', repetitions: 65, additionalInfo: 'Info del evento 1' },
                        { name: 'Evento 2', repetitions: 70, additionalInfo: 'Info del evento 2' },
                        { name: 'Evento 3', repetitions: 75, additionalInfo: 'Info del evento 3' },
                        { name: 'Evento 4', repetitions: 80, additionalInfo: 'Info del evento 4' }
                    ]
                },
            ],
            women: [
                {
                    name: 'Laura Ramírez',
                    position: 1,
                    points: 94,
                    events: 4,
                    heats: 'Heat 4',
                    lane: 1,
                    schedule: '1:00 PM',
                    eventDetails: [
                        { name: 'Evento 1', repetitions: 65, additionalInfo: 'Info del evento 1' },
                        { name: 'Evento 2', repetitions: 68, additionalInfo: 'Info del evento 2' },
                        { name: 'Evento 3', repetitions: 70, additionalInfo: 'Info del evento 3' },
                        { name: 'Evento 4', repetitions: 72, additionalInfo: 'Info del evento 4' }
                    ]
                },
                {
                    name: 'Elena Morales',
                    position: 2,
                    points: 87,
                    events: 4,
                    heats: 'Heat 4',
                    lane: 2,
                    schedule: '1:00 PM',
                    eventDetails: [
                        { name: 'Evento 1', repetitions: 62, additionalInfo: 'Info del evento 1' },
                        { name: 'Evento 2', repetitions: 64, additionalInfo: 'Info del evento 2' },
                        { name: 'Evento 3', repetitions: 66, additionalInfo: 'Info del evento 3' },
                        { name: 'Evento 4', repetitions: 68, additionalInfo: 'Info del evento 4' }
                    ]
                },
            ]
        },
        advanced: {
            men: [
                {
                    name: 'David Hernández',
                    position: 1,
                    points: 105,
                    events: 4,
                    heats: 'Heat 5',
                    lane: 1,
                    schedule: '2:00 PM',
                    eventDetails: [
                        { name: 'Evento 1', repetitions: 80, additionalInfo: 'Info del evento 1' },
                        { name: 'Evento 2', repetitions: 85, additionalInfo: 'Info del evento 2' },
                        { name: 'Evento 3', repetitions: 90, additionalInfo: 'Info del evento 3' },
                        { name: 'Evento 4', repetitions: 95, additionalInfo: 'Info del evento 4' }
                    ]
                },
                {
                    name: 'Jorge Castillo',
                    position: 2,
                    points: 95,
                    events: 4,
                    heats: 'Heat 5',
                    lane: 2,
                    schedule: '2:00 PM',
                    eventDetails: [
                        { name: 'Evento 1', repetitions: 78, additionalInfo: 'Info del evento 1' },
                        { name: 'Evento 2', repetitions: 80, additionalInfo: 'Info del evento 2' },
                        { name: 'Evento 3', repetitions: 82, additionalInfo: 'Info del evento 3' },
                        { name: 'Evento 4', repetitions: 84, additionalInfo: 'Info del evento 4' }
                    ]
                },
            ],
            women: [
                {
                    name: 'Lucía Martínez',
                    position: 1,
                    points: 99,
                    events: 4,
                    heats: 'Heat 6',
                    lane: 1,
                    schedule: '3:00 PM',
                    eventDetails: [
                        { name: 'Evento 1', repetitions: 75, additionalInfo: 'Info del evento 1' },
                        { name: 'Evento 2', repetitions: 78, additionalInfo: 'Info del evento 2' },
                        { name: 'Evento 3', repetitions: 80, additionalInfo: 'Info del evento 3' },
                        { name: 'Evento 4', repetitions: 83, additionalInfo: 'Info del evento 4' }
                    ]
                },
                {
                    name: 'Sara Mendoza',
                    position: 2,
                    points: 87,
                    events: 4,
                    heats: 'Heat 6',
                    lane: 2,
                    schedule: '3:00 PM',
                    eventDetails: [
                        { name: 'Evento 1', repetitions: 70, additionalInfo: 'Info del evento 1' },
                        { name: 'Evento 2', repetitions: 72, additionalInfo: 'Info del evento 2' },
                        { name: 'Evento 3', repetitions: 74, additionalInfo: 'Info del evento 3' },
                        { name: 'Evento 4', repetitions: 76, additionalInfo: 'Info del evento 4' }
                    ]
                }
            ]
        }
    };

    // Función para renderizar tablas por categoría y género
    function renderCategory(category
    // Función para renderizar tablas por categoría y género
    function renderCategory(category, gender, containerId) {
        const container = document.getElementById(containerId);
        let participants = categories[category][gender];

        // Ordenar participantes por puntaje (de mayor a menor)
        participants.sort((a, b) => b.points - a.points);
        
        let tableHtml = `<table class="table table-striped">
                            <thead>
                                <tr>
                                    <th>Posición</th>
                                    <th>Nombre</th>
                                    <th>Puntaje</th>
                                </tr>
                            </thead>
                            <tbody>`;

        participants.forEach(participant => {
            tableHtml += `<tr>
                            <td>${participant.position}</td>
                            <td><a href="#" class="participant-link" data-category="${category}" data-gender="${gender}" data-name="${participant.name}">${participant.name}</a></td>
                            <td>${participant.points}</td>
                          </tr>`;
        });

        tableHtml += `  </tbody>
                        </table>`;
        
        container.innerHTML = tableHtml;
    }

    // Renderizar todas las categorías y géneros
    function renderAllCategories() {
        renderCategory('beginner', 'men', 'beginner-men');
        renderCategory('beginner', 'women', 'beginner-women');
        renderCategory('intermediate', 'men', 'intermediate-men');
        renderCategory('intermediate', 'women', 'intermediate-women');
        renderCategory('advanced', 'men', 'advanced-men');
        renderCategory('advanced', 'women', 'advanced-women');
    }

    // Mostrar detalles del participante en el modal
    function showParticipantDetails(category, gender, name) {
        const participant = categories[category][gender].find(p => p.name === name);
        if (!participant) return;

        let modalBody = document.querySelector('#participantModal .modal-body');
        modalBody.innerHTML = `
            <h5>${participant.name}</h5>
            <p><strong>Posición:</strong> ${participant.position}</p>
            <p><strong>Puntaje:</strong> ${participant.points}</p>
            <p><strong>Eventos realizados:</strong> ${participant.events}</p>
            <p><strong>Heat:</strong> ${participant.heats}</p>
            <p><strong>Carril:</strong> ${participant.lane}</p>
            <p><strong>Horario:</strong> ${participant.schedule}</p>
            <h6>Detalles de eventos:</h6>
            <ul>
                ${participant.eventDetails.map(event => `
                    <li>
                        <p><strong>${event.name}</strong></p>
                        <p>Repeticiones: ${event.repetitions}</p>
                        <p>Información adicional: ${event.additionalInfo}</p>
                    </li>
                `).join('')}
            </ul>
        `;

        $('#participantModal').modal('show');
    }

    // Inicializar el renderizado de todas las categorías
    renderAllCategories();

    // Evento para mostrar el modal con los detalles del participante
    document.addEventListener('click', function(e) {
        if (e.target.classList.contains('participant-link')) {
            e.preventDefault();
            const category = e.target.getAttribute('data-category');
            const gender = e.target.getAttribute('data-gender');
            const name = e.target.getAttribute('data-name');
            showParticipantDetails(category, gender, name);
        }
    });
