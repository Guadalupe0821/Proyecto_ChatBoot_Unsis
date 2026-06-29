// Esperamos a que el Webchat de Botpress se cargue e inicialice por completo
window.botpressWebchat.onLoad(function() {
    
    // Forzamos al chat a mostrarse inmediatamente dentro del contenedor
    window.botpressWebchat.sendEvent({ type: 'show' });

    // Configuramos el botón de "Nueva conversación" una vez que Botpress ya existe
    const botonNuevaConve = document.getElementById('btn-nueva-conve');
    if (botonNuevaConve) {
        botonNuevaConve.addEventListener('click', function(e) {
            e.preventDefault();
            window.botpressWebchat.sendEvent({ type: 'reset' });
        });
    }
});

// Esperamos a que el Webchat de Botpress se cargue por completo
/*window.botpressWebchat.onLoad(function() {
    
    // Forzamos al chat a mostrarse de forma inmediata dentro del contenedor designado
    window.botpressWebchat.sendEvent({ type: 'show' });
    
});*/