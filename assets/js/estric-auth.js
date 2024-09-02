if (JSON.parse(localStorage.getItem('user')) && localStorage.getItem('token')){
    window.location.href = "/map.html";
}