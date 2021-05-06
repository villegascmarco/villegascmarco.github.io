$('#contactForm').on('submit', function (event) {
    event.preventDefault(); // prevent reload

    var formData = new FormData(this);
    formData.append('service_id', 'service_b1bo8vm');
    formData.append('template_id', 'template_duc8yc8');
    formData.append('user_id', 'user_5WtJQxzxnW31Qmxufe1yZ');

    $.ajax('https://api.emailjs.com/api/v1.0/email/send-form', {
        type: 'POST',
        data: formData,
        contentType: false, // auto-detection
        processData: false // no need to parse formData to string
    }).done(function () {
        alert('Your mail is sent!');
    }).fail(function (error) {
        alert('Oops... ' + JSON.stringify(error));
    });
});

function toggleMenu() {
    const menuToggle = document.querySelector('.toggle');
    const sidebarToggle = document.querySelector('.sidebar');
    menuToggle.classList.toggle('active')
    sidebarToggle.classList.toggle('active')
}

function getAge() {
    var today = new Date();
    var birthDate = new Date('1999/04/07');
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    document.getElementById('age').innerText = age;
}