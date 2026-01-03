// Header scroll
window.addEventListener('scroll', () => {
    const header = document.querySelector('.header');
    header.classList.toggle('scrolled', window.scrollY > 50);
});

// Mobile menu
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');
const mobileOverlay = document.querySelector('.mobile-menu-overlay');

function toggleMobileMenu() {
    menuToggle.classList.toggle('active');
    navLinks.classList.toggle('active');
    mobileOverlay.classList.toggle('active');
    
    // Prevenir scroll del body cuando el menú está abierto
    if (navLinks.classList.contains('active')) {
        document.body.style.overflow = 'hidden';
    } else {
        document.body.style.overflow = '';
    }
}

menuToggle.addEventListener('click', toggleMobileMenu);

// Cerrar al hacer click en el overlay
mobileOverlay.addEventListener('click', toggleMobileMenu);

// Cerrar al hacer click en un link
navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        if (navLinks.classList.contains('active')) {
            toggleMobileMenu();
        }
    });
});

// FAQ Accordion
document.querySelectorAll('.faq-question').forEach(button => {
    button.addEventListener('click', () => {
        const faqItem = button.parentElement;
        const isActive = faqItem.classList.contains('active');
        
        // Close all FAQs
        document.querySelectorAll('.faq-item').forEach(item => {
            item.classList.remove('active');
        });
        
        // Open clicked FAQ if it wasn't active
        if (!isActive) {
            faqItem.classList.add('active');
        }
    });
});

// Scroll reveal
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.2 });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// ===== TIMELINE INTERACTIVO =====
const timelineSteps = document.querySelectorAll('.process-step-timeline');
const timelineLine = document.querySelector('.timeline-line');

// Animar la línea de progreso cuando entra en viewport
const timelineObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            timelineLine.classList.add('animated');
            timelineObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.3 });

if (timelineLine) {
    timelineObserver.observe(timelineLine);
}

// Click en los círculos del timeline
timelineSteps.forEach((step, index) => {
    const circle = step.querySelector('.step-circle');
    
    circle.addEventListener('click', () => {
        // Remover active de todos
        timelineSteps.forEach(s => {
            s.classList.remove('active');
            s.querySelector('.step-circle').classList.remove('active');
        });
        
        // Marcar completados los anteriores
        timelineSteps.forEach((s, i) => {
            if (i < index) {
                s.querySelector('.step-circle').classList.add('completed');
            } else {
                s.querySelector('.step-circle').classList.remove('completed');
            }
        });
        
        // Activar el clickeado
        step.classList.add('active');
        circle.classList.add('active');
    });
});

// Auto-avance del timeline (opcional, cada 3 segundos)
let currentStep = 0;
const autoAdvanceTimeline = () => {
    if (!timelineSteps.length) return;
    
    const step = timelineSteps[currentStep];
    const circle = step.querySelector('.step-circle');
    
    // Remover active de todos
    timelineSteps.forEach(s => {
        s.classList.remove('active');
        s.querySelector('.step-circle').classList.remove('active');
    });
    
    // Marcar completados los anteriores
    timelineSteps.forEach((s, i) => {
        if (i < currentStep) {
            s.querySelector('.step-circle').classList.add('completed');
        } else {
            s.querySelector('.step-circle').classList.remove('completed');
        }
    });
    
    // Activar el actual
    step.classList.add('active');
    circle.classList.add('active');
    
    currentStep = (currentStep + 1) % timelineSteps.length;
};

// Iniciar auto-avance (comentar si no quieres que sea automático)
// setInterval(autoAdvanceTimeline, 3000);

// ===== FORMULARIO DE CONTACTO =====
const contactForm = document.getElementById('contact-form');
const formInputs = contactForm.querySelectorAll('.form-input, .form-select, .form-textarea');

// Validación en tiempo real
formInputs.forEach(input => {
    input.addEventListener('blur', () => {
        validateField(input);
    });
    
    input.addEventListener('input', () => {
        if (input.classList.contains('error')) {
            validateField(input);
        }
    });
});

function validateField(field) {
    const value = field.value.trim();
    let isValid = true;
    
    // Campo requerido
    if (field.hasAttribute('required') && !value) {
        isValid = false;
    }
    
    // Email
    if (field.type === 'email' && value) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        isValid = emailRegex.test(value);
    }
    
    // Toggle error class
    if (isValid) {
        field.classList.remove('error');
    } else {
        field.classList.add('error');
    }
    
    return isValid;
}

// Submit del formulario
contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    // Validar todos los campos
    let isFormValid = true;
    formInputs.forEach(input => {
        if (!validateField(input)) {
            isFormValid = false;
        }
    });
    
    if (!isFormValid) {
        return;
    }
    
    // Deshabilitar botón
    const submitBtn = contactForm.querySelector('.form-submit');
    submitBtn.disabled = true;
    submitBtn.innerHTML = '<span>Enviando...</span>';
    
    // Recopilar datos
    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        phone: document.getElementById('phone').value || 'No proporcionado',
        budget: document.getElementById('budget').value,
        projectType: document.getElementById('project-type').value,
        message: document.getElementById('message').value
    };
    
    // Simular envío (aquí conectarías con tu backend o servicio de email)
    try {
        // Simular delay de red
        await new Promise(resolve => setTimeout(resolve, 1500));
        
        // AQUÍ INTEGRARÍAS CON TU BACKEND
        // Por ejemplo: await fetch('/api/contact', { method: 'POST', body: JSON.stringify(formData) })
        
        // Mostrar mensaje de éxito
        const successMsg = contactForm.querySelector('.form-success-message');
        successMsg.classList.add('show');
        
        // Limpiar formulario
        contactForm.reset();
        formInputs.forEach(input => input.classList.remove('error'));
        
        // Ocultar mensaje después de 5 segundos
        setTimeout(() => {
            successMsg.classList.remove('show');
        }, 5000);
        
        // Log para desarrollo (eliminar en producción)
        console.log('Formulario enviado:', formData);
        
    } catch (error) {
        // Mostrar mensaje de error
        const errorMsg = contactForm.querySelector('.form-error-message');
        errorMsg.classList.add('show');
        
        setTimeout(() => {
            errorMsg.classList.remove('show');
        }, 5000);
        
        console.error('Error:', error);
    } finally {
        // Reactivar botón
        submitBtn.disabled = false;
        submitBtn.innerHTML = `
            <span>Solicitar Propuesta Gratis</span>
            <svg viewBox="0 0 24 24">
                <line x1="5" y1="12" x2="19" y2="12"/>
                <polyline points="12 5 19 12 12 19"/>
            </svg>
        `;
    }
});
