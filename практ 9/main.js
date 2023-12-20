let check = false;
while(!check)
{
    check = confirm("Желаете пройти регистрацию на сайте?");
    if (!check)
        alert("Попробуй еще раз");
    else alert("Круто");
}

let login = prompt("Введите логин", "Админ");
if (login == null || login == "")
    alert("Отменено");
else if (login == "Админ")
{
    let password = prompt("Введите пароль", "Я главный");
    if (password == "Я главный")
        alert("Здравствуйте!");
    else if (password == null || password == "")
        alert("Отменено");
    else alert("Неверный пароль");
}
else alert("Я вас не знаю");
