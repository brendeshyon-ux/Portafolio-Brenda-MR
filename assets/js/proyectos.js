let isProjectModalOpen = false;

function openProjectModal(modalId, event) {
    const modal = document.getElementById(modalId);
    if (!modal) return;

    isProjectModalOpen = true;

    modal.style.display = "block";
    document.body.style.overflow = "hidden";

    // Asegura que estemos en PROYECTOS
    if (location.hash !== '#work') {
        history.replaceState(null, null, '#work');
    }

    if (event) {
        event.preventDefault();
        event.stopPropagation();
    }
}

function closeProjectModal(event) {
    if (event) {
        event.preventDefault();
        event.stopPropagation();
    }

    const modals = document.querySelectorAll('.modal-overlay');
    modals.forEach(modal => modal.style.display = "none");

    document.body.style.overflow = "auto";
    isProjectModalOpen = false;

    // FORZAR volver a PROYECTOS
    history.replaceState(null, null, '#work');

}

window.onclick = function (event) {
    if (event.target.classList.contains('modal-overlay')) {
        closeProjectModal(event);
    }
};
