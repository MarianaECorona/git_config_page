 // Función para verificar si todos los checkboxes están marcados
function checkCompletion() {
    const checkboxes = document.querySelectorAll('.checklist-item');
    const congratsDiv = document.getElementById('congratulations');
    
    let allChecked = true;
    checkboxes.forEach(checkbox => {
        if (!checkbox.checked) {
            allChecked = false;
            }
        });
                
            if (allChecked) {
                congratsDiv.classList.remove('hidden');
                congratsDiv.classList.add('show');
                        
                // Agregar confetti animado
                createConfetti();
            } else {
                congratsDiv.classList.add('hidden');
                congratsDiv.classList.remove('show');
                
            }
        }
            
 // Función para crear confetti animado
function createConfetti() {
    const confettiCount = 50;
    const container = document.body;
                
    for (let i = 0; i < confettiCount; i++) {
        const confetti = document.createElement('div');
        confetti.className = 'confetti-piece';
        confetti.innerHTML = ['🎉', '🎊', '✨', '⭐', '💫'][Math.floor(Math.random() * 5)];
        confetti.style.left = Math.random() * 100 + 'vw';
        confetti.style.animationDelay = Math.random() * 3 + 's';
        confetti.style.animationDuration = (Math.random() * 3 + 2) + 's';
        container.appendChild(confetti);
                    
        // Remover confetti después de la animación
        setTimeout(() => {
            if (confetti.parentNode) {
                            confetti.parentNode.removeChild(confetti);
            }
        }, 5000);
    }
}
            
// Agregar event listeners a todos los checkboxes
document.addEventListener('DOMContentLoaded', function() {
    const checkboxes = document.querySelectorAll('.checklist-item');
    checkboxes.forEach(checkbox => {
        checkbox.addEventListener('change', checkCompletion);
    });
});