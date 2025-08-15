// Check and log the site name based on the URL
(function() {
    let hostname = window.location.hostname.toLowerCase();

    if (hostname.includes("facebook.com")) {
        console.log("You are on Facebook.");
    } 
    else if (hostname.includes("whatsapp.com")) {
        console.log("You are on WhatsApp Web.");
    } 
    else if (hostname.includes("youtube.com")) {
        console.log("You are on YouTube.");
    } 
    else if (hostname.includes("instagram.com")) {
        console.log("You are on Instagram.");
    } 
    else {
        console.log("This is not Facebook, WhatsApp, YouTube, or Instagram.");
    }
})();

