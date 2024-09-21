function updateTime() {
    const now = new Date();

    // Create an options object for formatting
    const options = {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true  // Set to `false` for 24-hour format
    };

    // Time in New York (EST)
    const estTime = new Intl.DateTimeFormat('en-US', { ...options, timeZone: 'America/New_York' }).format(now);
    document.getElementById('nyc-time').innerHTML = estTime;

    // Time in London (GMT)
    const gmtTime = new Intl.DateTimeFormat('en-GB', { ...options, timeZone: 'Europe/London' }).format(now);
    document.getElementById('london-time').innerHTML = gmtTime;

    // Time in Tokyo (JST)
    const jstTime = new Intl.DateTimeFormat('ja-JP', { ...options, timeZone: 'Asia/Tokyo' }).format(now);
    document.getElementById('tokyo-time').innerHTML = jstTime;

    // Time in Sydney (AEST)
    const aestTime = new Intl.DateTimeFormat('en-AU', { ...options, timeZone: 'Australia/Sydney' }).format(now);
    document.getElementById('sydney-time').innerHTML = aestTime;

    // Time in India (IST)
    const istTime = new Intl.DateTimeFormat('en-IN', { ...options, timeZone: 'Asia/Kolkata' }).format(now);
    document.getElementById('india-time').innerHTML = istTime;
}

// Update time every second
setInterval(updateTime, 1000);
