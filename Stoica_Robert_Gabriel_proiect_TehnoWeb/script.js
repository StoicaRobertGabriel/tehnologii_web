// // const selectProfessor=document.getElementById("sel_professor");
// // const fs = require('fs');

// // const users = [
// //     { username: 'professor', password: 'professor123', role: 'professor' },
// //     { username: 'student', password: 'stud123', role: 'student' }
// // ];

// // fs.writeFileSync('users.json', JSON.stringify(users, null, 2), 'utf8');

// // const rawData = fs.readFileSync('users.json', 'utf8');
// // const users = JSON.parse(rawData);

// // let professors=structuredClone(users);
// // professors = professors.filter(user => user.role === 'professor');
// // professors.forEach(professor => {
// //     let option = document.createElement('option');
// //     option.value = professor.username;
// //     option.text = professor.username;
// //     selectProfessor.add(option);
// // });
// // let professors=users.map(user => Object.values(user));
// // console.log(professors)
// // j=professors.filter(user => user.role === 'professor');
// // j.forEach(professor => {
// //     let option = document.createElement('option');
// //     option.value = professor.username;
// //     option.text = professor.username;
// //     selectProfessor.add(option);
// //     console.log(professor.username)
// // });

// function login() {
//     const username = document.getElementById('username').value;
//     const role = document.getElementById('role').value;

//     if (role === 'student') {
//         window.location.href = 'student.html';
//     } else if (role === 'professor') {
//         window.location.href = 'professor.html';
//     }
// }

// document.getElementById('login').addEventListener('submit', (event)=> {
//     event.preventDefault();

//     const username = document.getElementById('username').value;
//     const password = document.getElementById('password').value;

//     // const rawData = fs.readFileSync('users.json', 'utf8');
//     // const users = JSON.parse(rawData);
//     // users
//     const users = [
//         { username: 'professor', password: 'professor123', role: 'professor' },
//         { username: 'student', password: 'stud123', role: 'student' }
//     ];

//     const user = users.find(u => u.username === username && u.password === password);

//     if (user) {
//         if (user.role === 'professor') {
//             window.location.href = 'professor.html';
//         } else if (user.role === 'student') {
//             window.location.href = 'student.html';
//         }
//     } else {
//         // alert('Invalid username or password!');
//         document.getElementById('message').innerText = "Invalid username or password!";
//     }
// });

// function sendRequest() {
//     const requestText = document.getElementById('requestText').value;
//     const request = `Request from student: ${requestText}\n`;

//     let requests = localStorage.getItem('requests');
//     requests = requests ? requests + request : request;
//     localStorage.setItem('requests', requests);

//     alert('Request sent!');
// }

// function loadRequests() {
//     const requests = localStorage.getItem('requests');
//     const requestsList = document.getElementById('requestsList');
//     requestsList.innerHTML = '';

//     if (requests) {
//         const requestsArray = requests.split('\n').filter(request => request);
//         requestsArray.forEach((request, index) => {
//             const listItem = document.createElement('li');
//             listItem.textContent = request;
//             const acceptButton = document.createElement('button');
//             acceptButton.textContent = 'Accept';
//             acceptButton.onclick = () => handleRequest(index, 'accepted');
//             const declineButton = document.createElement('button');
//             declineButton.textContent = 'Decline';
//             declineButton.onclick = () => handleRequest(index, 'declined');
//             listItem.appendChild(acceptButton);
//             listItem.appendChild(declineButton);
//             requestsList.appendChild(listItem);
//         });
//     }
// }

// function handleRequest(index, action) {
//     let requests = localStorage.getItem('requests');
//     const requestsArray = requests.split('\n').filter(request => request);
//     requestsArray.splice(index, 1);
//     localStorage.setItem('requests', requestsArray.join('\n'));

//     alert(`Request ${action}!`);
//     loadRequests();
// }

// if (window.location.pathname.endsWith('professor.html')) {
//     loadRequests();
// }











function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    const users = [
        { username: 'professor', password: 'professor123', role: 'professor' },
        { username: 'student', password: 'stud123', role: 'student' }
    ];

    const user = users.find(u => u.username === username && u.password === password);

    if (user) {
        localStorage.setItem('loggedInUser', JSON.stringify(user));
        if (user.role === 'professor') {
            window.location.href = 'professor.html';
        } else if (user.role === 'student') {
            window.location.href = 'student.html';
        }
    } else {
        document.getElementById('message').innerText = "Invalid username or password!";
    }
}

document.getElementById('login').addEventListener('submit', (event) => {
    event.preventDefault();
    login();
});

// function sendRequest() {
//     const requestText = document.getElementById('requestText').value.trim();
//     if (requestText === '') {
//         alert('Request cannot be empty!');
//         return;
//     }

//     const request = `Request from student: ${requestText}`;
//     let requests = JSON.parse(localStorage.getItem('requests')) || [];
//     requests.push(request);
//     localStorage.setItem('requests', JSON.stringify(requests));

//     alert('Request sent!');
//     document.getElementById('requestText').value = '';
// }
function sendRequest() {
    const requestText = document.getElementById('requestText').value;
    const request = `Request from student: ${requestText}\n`;

    // Save request to localStorage
    let requests = localStorage.getItem('requests');
    requests = requests ? requests + request : request;
    localStorage.setItem('requests', requests);

    alert('Request sent!');
}

function loadRequests() {
    const requests = JSON.parse(localStorage.getItem('requests')) || [];
    const requestsList = document.getElementById('requestsList');
    requestsList.innerHTML = '';

    if (requests.length > 0) {
        requests.forEach((request, index) => {
            const listItem = document.createElement('li');
            listItem.className = 'list-group-item d-flex justify-content-between align-items-center';
            listItem.textContent = request;

            const acceptButton = document.createElement('button');
            acceptButton.className = 'btn btn-success btn-sm ms-2';
            acceptButton.textContent = 'Accept';
            acceptButton.onclick = () => handleRequest(index, 'accepted');

            const declineButton = document.createElement('button');
            declineButton.className = 'btn btn-danger btn-sm ms-2';
            declineButton.textContent = 'Decline';
            declineButton.onclick = () => handleRequest(index, 'declined');

            listItem.appendChild(acceptButton);
            listItem.appendChild(declineButton);
            requestsList.appendChild(listItem);
        });
    } else {
        requestsList.innerHTML = '<li class="list-group-item text-center">No requests available</li>';
    }
}

function handleRequest(index, action) {
    let requests = JSON.parse(localStorage.getItem('requests')) || [];
    requests.splice(index, 1);
    localStorage.setItem('requests', JSON.stringify(requests));

    alert(`Request ${action}!`);
    loadRequests();
}

document.addEventListener('DOMContentLoaded', () => {
    if (window.location.pathname.endsWith('professor.html')) {
        loadRequests();
    }
});






// function login() {
//     const username = document.getElementById('username').value;
//     const password = document.getElementById('password').value;

//     const users = [
//         { username: 'professor', password: 'professor123', role: 'professor' },
//         { username: 'student', password: 'stud123', role: 'student' }
//     ];

//     const user = users.find(u => u.username === username && u.password === password);

//     if (user) {
//         localStorage.setItem('loggedInUser', JSON.stringify(user));
//         if (user.role === 'professor') {
//             window.location.href = 'professor.html';
//         } else if (user.role === 'student') {
//             window.location.href = 'student.html';
//         }
//     } else {
//         document.getElementById('message').innerText = "Invalid username or password!";
//     }
// }

// document.getElementById('login').addEventListener('submit', (event) => {
//     event.preventDefault();
//     login();
// });
// function login() {
//     const username = document.getElementById('username').value;
//     const role = document.getElementById('role').value;

//     if (role === 'student') {
//         window.location.href = 'student.html';
//     } else if (role === 'professor') {
//         window.location.href = 'professor.html';
//     }
// }

// document.getElementById('login').addEventListener('submit', (event)=> {
//     event.preventDefault();

//     const username = document.getElementById('username').value;
//     const password = document.getElementById('password').value;

//     const users = [
//         { username: 'professor', password: 'professor123', role: 'professor' },
//         { username: 'student', password: 'stud123', role: 'student' }
//     ];

//     const user = users.find(u => u.username === username && u.password === password);

//     if (user) {
//         if (user.role === 'professor') {
//             window.location.href = 'professor.html';
//         } else if (user.role === 'student') {
//             window.location.href = 'student.html';
//         }
//     } else {
//         // alert('Invalid username or password!');
//         document.getElementById('message').innerText = "Invalid username or password!";
//     }
// });

// function sendRequest() {
//     const requestText = document.getElementById('requestText').value;
//     const request = `Request from student: ${requestText}\n`;

//     // Save request to localStorage
//     let requests = localStorage.getItem('requests');
//     requests = requests ? requests + request : request;
//     localStorage.setItem('requests', requests);

//     alert('Request sent!');
// }

// function loadRequests() {
//     const requests = localStorage.getItem('requests');
//     const requestsList = document.getElementById('requestsList');
//     requestsList.innerHTML = '';

//     if (requests) {
//         const requestsArray = requests.split('\n').filter(request => request);
//         requestsArray.forEach((request, index) => {
//             const listItem = document.createElement('li');
//             listItem.textContent = request;
//             const acceptButton = document.createElement('button');
//             acceptButton.textContent = 'Accept';
//             acceptButton.onclick = () => handleRequest(index, 'accepted');
//             const declineButton = document.createElement('button');
//             declineButton.textContent = 'Decline';
//             declineButton.onclick = () => handleRequest(index, 'declined');
//             listItem.appendChild(acceptButton);
//             listItem.appendChild(declineButton);
//             requestsList.appendChild(listItem);
//         });
//     }
// }

// function handleRequest(index, action) {
//     let requests = localStorage.getItem('requests');
//     const requestsArray = requests.split('\n').filter(request => request);
//     requestsArray.splice(index, 1);
//     localStorage.setItem('requests', requestsArray.join('\n'));

//     alert(`Request ${action}!`);
//     loadRequests();
// }

// // Ensure loadRequests is called when the professor page is loaded
// if (window.location.pathname.endsWith('professor.html')) {
//     loadRequests();
// }


// function login() {
//     const username = document.getElementById('username').value;
//     const password = document.getElementById('password').value;

//     const users = [
//         { username: 'professor', password: 'professor123', role: 'professor' },
//         { username: 'student', password: 'stud123', role: 'student' }
//     ];

//     const user = users.find(u => u.username === username && u.password === password);

//     if (user) {
//         // Store the logged-in user in localStorage without affecting other data
//         localStorage.setItem('loggedInUser', JSON.stringify(user));

//         // Redirect based on user role
//         if (user.role === 'professor') {
//             window.location.href = 'professor.html';
//         } else if (user.role === 'student') {
//             window.location.href = 'student.html';
//         }
//     } else {
//         document.getElementById('message').innerText = "Invalid username or password!";
//     }
// }

// document.getElementById('login').addEventListener('submit', (event) => {
//     event.preventDefault();
//     login();
// });

// function sendRequest() {
//     const requestText = document.getElementById('requestText').value;
//     const request = `Request from student: ${requestText}\n`;

//     // Retrieve existing requests, or create an empty array if none exist
//     let requests = JSON.parse(localStorage.getItem('requests')) || [];
//     requests.push(request);
//     localStorage.setItem('requests', JSON.stringify(requests));

//     alert('Request sent!');
// }

// function loadRequests() {
//     const requests = JSON.parse(localStorage.getItem('requests')) || [];
//     const requestsList = document.getElementById('requestsList');
//     requestsList.innerHTML = '';

//     if (requests.length > 0) {
//         requests.forEach((request, index) => {
//             const listItem = document.createElement('li');
//             listItem.textContent = request;

//             const acceptButton = document.createElement('button');
//             acceptButton.textContent = 'Accept';
//             acceptButton.onclick = () => handleRequest(index, 'accepted');

//             const declineButton = document.createElement('button');
//             declineButton.textContent = 'Decline';
//             declineButton.onclick = () => handleRequest(index, 'declined');

//             listItem.appendChild(acceptButton);
//             listItem.appendChild(declineButton);
//             requestsList.appendChild(listItem);
//         });
//     } else {
//         requestsList.innerHTML = '<li class="list-group-item text-center">No requests available</li>';
//     }
// }

// function handleRequest(index, action) {
//     let requests = JSON.parse(localStorage.getItem('requests')) || [];
//     requests.splice(index, 1);
//     localStorage.setItem('requests', JSON.stringify(requests));

//     alert(`Request ${action}!`);
//     loadRequests();
// }

// // Ensure requests are loaded when professor.html is loaded
// document.addEventListener('DOMContentLoaded', () => {
//     if (window.location.pathname.endsWith('professor.html')) {
//         loadRequests();
//     }
//     if (window.location.pathname.endsWith('student.html')) {
//         // On student page, ensure the user is logged in
//         const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));
//         if (!loggedInUser) {
//             window.location.href = 'login.html'; // Redirect to login if no user is logged in
//         }
//     }
// });
