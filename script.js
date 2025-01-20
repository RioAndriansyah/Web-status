document.addEventListener('DOMContentLoaded', () => {
    const statusMessage = document.getElementById('status-message');
    const logList = document.getElementById('log-list');

    // Fungsi untuk memperbarui status
    function updateStatus(message) {
        statusMessage.textContent = message;

        // Menambahkan log baru
        const logItem = document.createElement('li');
        logItem.textContent = `${new Date().toLocaleString()}: ${message}`;
        logList.appendChild(logItem);
    }

    // Contoh pembaruan status
    updateStatus('Sistem sedang berfungsi dengan baik.');
    
    // Simulasi pemeliharaan
    setTimeout(() => updateStatus('Pemeliharaan dijadwalkan pada pukul 15:00.'), 5000);
});
