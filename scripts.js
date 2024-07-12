document.addEventListener('DOMContentLoaded', () => {
    const lastUpdateTime = document.getElementById('last-update-time');
    lastUpdateTime.innerText = new Date().toLocaleString();

    const competitors = {
        beginnerMen: [
            { 
                name: 'Alan Navarro',
                score: 0, 
                lane: '1 HEAT: 1',
                events: [
                    {name: 'Evento 1', reps: 0, extra: 'Sin datos'}, 
                    {name: 'Evento 2', reps: 0, extra: 'Sin datos'}, 
                    {name: 'Evento 3', reps: 0, extra: 'Sin datos'}, 
                    {name: 'Evento 4', reps: 0, extra: 'Sin datos'}
                ] 
            },
            { 
                name: 'Ángel Castro',
                score: 0, 
                lane: '2 HEAT: 1',
                events: [
                    {name: 'Evento 1', reps: 0, extra: 'Sin datos'}, 
                    {name: 'Evento 2', reps: 0, extra: 'Sin datos'}, 
                    {name: 'Evento 3', reps: 0, extra: 'Sin datos'}, 
                    {name: 'Evento 4', reps: 0, extra: 'Sin datos'}
                ] 
            },
            { 
                name: 'NAMELESS',
                score: 0, 
                lane: '3 HEAT: 2',
                events: [
                    {name: 'Evento 1', reps: 0, extra: 'Sin datos'}, 
                    {name: 'Evento 2', reps: 0, extra: 'Sin datos'}, 
                    {name: 'Evento 3', reps: 0, extra: 'Sin datos'}, 
                    {name: 'Evento 4', reps: 0, extra: 'Sin datos'}
                ] 
            }
        ],
        beginnerWomen: [
            { 
                name: 'Norma Ángel',
                score: 0, 
                lane: '1 HEAT: 1',
                events: [
                    {name: 'Evento 1', reps: 0, extra: 'Sin datos'}, 
                    {name: 'Evento 2', reps: 0, extra: 'Sin datos'}, 
                    {name: 'Evento 3', reps: 0, extra: 'Sin datos'}, 
                    {name: 'Evento 4', reps: 0, extra: 'Sin datos'}
                ] 
            },
            { 
                name: 'Gaylid Cruz',
                score: 0, 
                lane: '2 HEAT: 1',
                events: [
                    {name: 'Evento 1', reps: 11, extra: 'Sin datos'}, 
                    {name: 'Evento 2', reps: 13, extra: 'Sin datos'}, 
                    {name: 'Evento 3', reps: 15, extra: 'Sin datos'}, 
                    {name: 'Evento 4', reps: 17, extra: 'Sin datos'}
                ] 
            },
            { 
                name: 'Margarita Martinez',
                score: 0, 
                lane: '3 HEAT: 1',
                events: [
                    {name: 'Evento 1', reps: 11, extra: 'Sin datos'}, 
                    {name: 'Evento 2', reps: 13, extra: 'Sin datos'}, 
                    {name: 'Evento 3', reps: 15, extra: 'Sin datos'}, 
                    {name: 'Evento 4', reps: 17, extra: 'Sin datos'}
                ] 
            }
        ],
        intermediateMen: [
            { 
                name: 'Erick Buendia',
                score: 0, 
                lane: '1 HEAT: 1',
                events: [
                    {name: 'Evento 1', reps: 0, extra: 'Sin datos'}, 
                    {name: 'Evento 2', reps: 0, extra: 'Sin datos'}, 
                    {name: 'Evento 3', reps: 0, extra: 'Sin datos'}, 
                    {name: 'Evento 4', reps: 0, extra: 'Sin datos'}
                ] 
            },
            { 
                name: 'Cesar Pérez',
                score: 0, 
                lane: '2 HEAT: 1',
                events: [
                    {name: 'Evento 1', reps: 0, extra: 'Sin datos'}, 
                    {name: 'Evento 2', reps: 0, extra: 'Sin datos'}, 
                    {name: 'Evento 3', reps: 0, extra: 'Sin datos'}, 
                    {name: 'Evento 4', reps: 0, extra: 'Sin datos'}
                ] 
            },
            { 
                name: 'Jahir Hernández',
                score: 0, 
                lane: '3 HEAT: 1',
                events: [
                    {name: 'Evento 1', reps: 0, extra: 'Sin datos'}, 
                    {name: 'Evento 2', reps: 0, extra: 'Sin datos'}, 
                    {name: 'Evento 3', reps: 0, extra: 'Sin datos'}, 
                    {name: 'Evento 4', reps: 0, extra: 'Sin datos'}
                ] 
            }
        ],
        intermediateWomen: [
            { 
                name: 'Montserrat Gochi',
                score: 0, 
                lane: '1 HEAT: 1',
                events: [
                    {name: 'Evento 1', reps: 0, extra: 'Sin datos'}, 
                    {name: 'Evento 2', reps: 0, extra: 'Sin datos'}, 
                    {name: 'Evento 3', reps: 0, extra: 'Sin datos'}, 
                    {name: 'Evento 4', reps: 0, extra: 'Sin datos'}
                ] 
            },
            { 
                name: 'Sofia Navarro',
                score: 0, 
                lane: '2 HEAT: 1',
                events: [
                    {name: 'Evento 1', reps: 0, extra: 'Sin datos'}, 
                    {name: 'Evento 2', reps: 0, extra: 'Sin datos'}, 
                    {name: 'Evento 3', reps: 0, extra: 'Sin datos'}, 
                    {name: 'Evento 4', reps: 0, extra: 'Sin datos'}
                ] 
            },
            { 
                name: 'Lucía Navarro',
                score: 0, 
                lane: '3 HEAT: 1',
                events: [
                    {name: 'Evento 1', reps: 0, extra: 'Sin datos'}, 
                    {name: 'Evento 2', reps: 0, extra: 'Sin datos'}, 
                    {name: 'Evento 3', reps: 0, extra: 'Sin datos'}, 
                    {name: 'Evento 4', reps: 0, extra: 'Sin datos'}
                ] 
            }
        ]
    };

    function populateTable(category, tableId) {
        const tableBody = document.querySelector(`#${tableId} tbody`);
        tableBody.innerHTML = '';
        const sortedCompetitors = competitors[category].sort((a, b) => b.score - a.score);
        sortedCompetitors.forEach(competitor => {
            const row = document.createElement('tr');
            row.addEventListener('click', () => openPopup(competitor));

            const nameCell = document.createElement('td');
            nameCell.textContent = competitor.name;

            const scoreCell = document.createElement('td');
            scoreCell.textContent = competitor.score;

            row.appendChild(nameCell);
            row.appendChild(scoreCell);
            tableBody.appendChild(row);
        });
    }

    function openPopup(competitor) {
        const popup = document.getElementById('popup');
        const popupDetails = document.getElementById('popup-details');
        const instagramButton = document.getElementById('instagram-button');

        popupDetails.innerHTML = `
            <p><strong>Nombre:</strong> ${competitor.name}</p>
            <p><strong>Puntaje:</strong> ${competitor.score}</p>
            <p><strong>Carril:</strong> ${competitor.lane}</p>
            <p><strong>Eventos:</strong></p>
            <ul>
                ${competitor.events.map(event => `<li>${event.name}: ${event.reps} repeticiones, ${event.extra}</li>`).join('')}
            </ul>
        `;

        instagramButton.onclick = () => {
            redirectToInstagram(`https://www.instagram.com/search/${competitor.name.replace(/\s+/g, '')}`);
        };

        popup.classList.remove('hidden');
    }

    function closePopup() {
        const popup = document.getElementById('popup');
        popup.classList.add('hidden');
    }

    window.redirectToInstagram = function(url) {
        window.location.href = url;
    };

    window.closePopup = closePopup;

    populateTable('beginnerMen', 'beginner-men-table');
    populateTable('beginnerWomen', 'beginner-women-table');
    populateTable('intermediateMen', 'intermediate-men-table');
    populateTable('intermediateWomen', 'intermediate-women-table');
});
