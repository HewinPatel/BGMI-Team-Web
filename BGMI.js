// Function to toggle the menu visibility
function toggleMenu() {
    const navbar = document.getElementById('navbar');
    navbar.classList.toggle('show'); // Toggle the show class to display/hide nav
}

// Sample data for players
const players = {
    player1: {
        img: 'C:/Users/hdpat/OneDrive/Documents/HewinBGMI.jpg' , // Use forward slashes for file paths
        name: 'Hewin Bechra',
        role: 'Assaulter',
        stats: 'Matches: 11519 | Kills: 31813 | Top Perfomances: 6290',
        birthDate: 'December 19, 2005',
        Belongs: 'Rajkot, Gujarat',
        Details: 'Top fragger with exceptional close-range skills and strategic gameplay.Known for aggressive pushing and high kill consistency.A top-tier fragger with razor-sharp reflexes, dominating in intense face-offs and securing key kills for the team.',
        Instagram: 'https://instagram.com/hewin.patel/',
    },
    player2: {
        img: 'C:/Users/hdpat/OneDrive/Documents/HarshBGMI.jpg',
        name: 'Harsh Vansjaliya',
        role: 'IGL',
        stats: 'Matches: 11585 | Kills: 25754 | Top Perfomances: 6620',
        birthDate:'January 29, 2002',
        Belongs:'Vadodara, Gujarat', 
        Details: 'Leads with strategic precision, coordinating moves and make quick decisions under pressure.Known for their tactical foresight and ability towards victory with a balance of aggression and control.',
        Instagram: 'https://www.instagram.com/hewin.patel/',
    },
    player3: {
        img: 'C:/Users/hdpat/OneDrive/Documents/AntidoteBGMI.jpg',
        name: 'Dhruvil Savsani',
        role: 'Free men',
        stats: 'Matches: 3857 | Kills: 9058 | Top Perfomances: 2318',
        birthDate:'June 14, 2006',
        Belongs:'Valsad, Gujarat', 
        Details: 'A versatile role that adapts to every situation on the battlefield.With unmatchable flexibility, they support the team by switching between offense and defense, providing crucial backup and seizing oppurtunities.',
        Instagram: 'https://www.instagram.com/hewin.patel/',
    },
    player4: {
        img: 'C:/Users/hdpat/OneDrive/Documents/PrinceBGMI.jpg',
        name: 'Prince Patel',
        role: 'Supporter',
        stats: 'Matches: 1280 | Kills: 3952 | Top Perfomances: 899',
        birthDate:'Undefined Date',
        Belongs:'Jam Jodhpur, Gujarat', 
        Details: 'Always ready to backup the team with precise cover fire and timely resources.Known for their steady aim and calm under pressure,they ensure the squad has what they need to survive the thrive in critical moments.',
        Instagram: 'https://www.instagram.com/hewin.patel/',
    },
    player5: {
        img: 'C:/Users/hdpat/OneDrive/Documents/ParthikBGMI.jpg',
        name: 'Parthik Kavar',
        role: 'Aspiring Player',
        stats: 'Matches: 936 | Kills: 1376 | Top Perfomances: 556',
        birthDate:'October 10, 2005',
        Belongs:'Valsad, Gujarat', 
        Details: 'Aspiring talent with a relentless drive to improve and make an impact on the team.With a hunger for learning and a passion for the game, they bring fresh energy and determination. ',
        Instagram: 'https://www.instagram.com/hewin.patel/',
    },
    player6: {
        img: 'C:/Users/hdpat/OneDrive/Documents/NinjaBGMI.jpg',
        name: 'Abhay Thummar',
        role: 'Sniper',
        stats: 'Matches: 6345 | Kills: 11173 | Top Perfomances: 3985',
        birthDate:'Undefined Date',
        Belongs:'Ahmedabad, Gujarat', 
        Details: 'A master of long-range engagements, this sniper combines pinpoint accuracy with patience, taking out enemies before they even know what hit them.With eagle-eyed focus, this sniper dominates the battlefield from afar, providing vital support and covering teammates.',
        Instagram: 'https://www.instagram.com/hewin.patel/',
    },
    player7: {
        img: '',
        name: 'Jaimin Poshiya',
        role: 'Assaulter',
        stats: 'Matches: 7174 | Kills: 14343 | Top Perfomances: 4132',
        birthDate:'July 07, 2002',
        Belongs:'Vadodara, Gujarat', 
        Details: 'Dominates intense face-offs sharp aim and expert recoil control, setting the pace for the teams attacks.Strategic yet aggressive, this assaulter excels in close-quarters combat, creating game-changing moments with every push.',
        Instagram: 'https://www.instagram.com/hewin.patel/',
    },
    player8: {
        img: '',
        name: 'Sanskar Patel',
        role: 'Assaulter',
        stats: 'Matches: 7980 | Kills: 20806 | Top Perfomances: 4456',
        birthDate:'Undefined Date',
        Belongs:'Khambhat, Gujarat', 
        Details: 'Known for explosive entry tactics and bold plays, this assaulter disrupts enemy plans and opens paths for teammates.Relentless in every push, this assaulter thrives under pressure, turning intense firefights into clear victories.',
        Instagram: 'https://www.instagram.com/hewin.patel/',
    },
    player9: {
        img: 'C:/Users/hdpat/OneDrive/Documents/TatsoomiBGMI.jpg',
        name: 'Dip Kantariya',
        role: 'IGL',
        stats: 'Matches: 484 | Kills: 1178 | Top Perfomances: 323',
        birthDate:'September 23 1997, ',
        Belongs:'Valsad, Gujarat', 
        Details: 'Known for strategic brilliance, this IGLs leadership ensures that every move is calculated, and the team moves as one, achieving success through teamwork.The backbone of the team, this IGL provides vision, leadership, and direction, turning chaotic moments into well-executed plays.',
        Instagram: 'https://www.instagram.com/hewin.patel/',
    },
    // Add more players as needed
};

// Function to open the modal with specific player info
function openModal(playerId) {
    const player = players[playerId];
     if (player) {
        document.getElementById('modalImage').src = player.img;
        document.getElementById('modalName').textContent = player.name;
        document.getElementById('modalRole').textContent = player.role;
        document.getElementById('modalStats').textContent = player.stats;
        document.getElementById('modalbirthDate').textContent = `Born: ${player.birthDate}`;
        document.getElementById('modalBelongs').textContent = `Belongs: ${player.Belongs}`;
        document.getElementById('modalDetails').textContent = player.Details;
        document.getElementById('modalInstagram').href = player.instagram;
        document.getElementById('modalInstagram').textContent = `Follow ${player.name} on Instagram`;

        document.getElementById('playerModal').style.display = 'flex'; // Show modal
    } else {
        console.error(`Player with ID ${playerId} not found.`);
    }
    
    // Set the modal content with the player's info
    // document.getElementById('modalImage').src = player.img;
    // document.getElementById('modalName').textContent = player.name;
    // document.getElementById('modalRole').textContent = player.role;
    // document.getElementById('modalStats').textContent = player.stats;
    // document.getElementById('modalBirthDate').textContent = player.birthDate;
    // document.getElementById('modalBelongs').textContent = player.Belongs;
    //document.getElementById('modalBelongs').textContent = `Belongs: ${player.belongs}`; 
    //document.getElementById('modalInstagram').href = player.Instagram;
    //document.getElementById(`modalInstagram`).textContent = `Follow ${player.name} on Instagram`;

    
    // Display the modal
    //document.getElementById('playerModal').style.display = 'flex';
}
// Function to close the modal
function closeModal() {
    document.getElementById('playerModal').style.display = 'none';
}

// Dynamically add player cards to the page
function createPlayerCards() {
    const playerContainer = document.getElementById('playerContainer');

    for (let playerId in players) {
        const player = players[playerId];
        
        // Create the card
        const card = document.createElement('div');
        card.classList.add('player-card');
        card.innerHTML = `
            <h3>${player.name}</h3>
        `;
        
        // Add click event to open modal with player info
        card.addEventListener('click', () => openModal(playerId));

        // Append card to container
        playerContainer.appendChild(card);
    }
}

// Call createPlayerCards on page load to display all player cards
document.addEventListener('DOMContentLoaded', createPlayerCards);
