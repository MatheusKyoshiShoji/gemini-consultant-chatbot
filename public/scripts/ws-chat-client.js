const socket = new WebSocket('ws://localhost:8080/ws');

socket.onmessage = (event) => {
    const message = event.data;
    renderMessage(`Server: ${message}`);
}

socket.onopen = (event) => {
    console.log('WebSocket do cliente conectado.');
    renderMessage('Manda pro pai!');
}

socket.onclose = (event) => {
    console.log('WebSocket is closed now.');
    renderMessage('Disconnected from the server.');
}

socket.onerror = (error) => {
    console.error('WebSocket error:', error);
    renderMessage('An error occurred. Please try again later.');
}