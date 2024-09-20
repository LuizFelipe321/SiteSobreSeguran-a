let viewers = 15000;
    let users = 600000;

    updateCounter(document.getElementById('viewers'), viewers, 2000);
    updateCounter(document.getElementById('users'), users, 3000);

    function updateCounter(element, target, duration) {
        let start = 0;
        let stepTime = Math.abs(Math.floor(duration / target));
        let timer = setInterval(() => {
            start += 1;
            element.innerHTML = start;
            if (start >= target) {
                clearInterval(timer);
            }
        }, stepTime);
    }

    updateCounter(document.getElementById('viewers'), viewers, 2000);
    updateCounter(document.getElementById('users'), users, 3000);

    document.getElementById('loginBtn').addEventListener('click', function() {
        const username = document.getElementById('username').value;
        if (username) {
            users += 1;
            document.getElementById('users').innerHTML = users;
            document.getElementById('username').value = ''; 
            alert("Login realizado com sucesso!");
        } else {
            alert("Por favor, digite seu nome de usuário.");
        }
    });
 
