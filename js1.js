// if,else, nested if & function
function Login() {
    var username = document.getElementById("name").value;
    username = username.toLowerCase();
    var password = document.getElementById("pw").value;
    password = password.toLowerCase();
  
    if (username == "wildan" && password == "wildan123") {
      window.alert("Login Berhasil");
      window.location.href = "succes.html";
    } else {
      window.alert("Username atau password anda salah!");
    }
  }

// switch case
let password = 'wildan123';
switch (password) {
    case 'wildan123':
        window.alert('login berhasil');
        break;
    case 'wildanaja123':
        window.alert('password salah');
        break;
    case 'wildsn123':
        window.alert('password salah');
}

// for statement
for (let a = 2; a<10; a++ ){
    console.log(a);
}

// while, do while
let a = 2;
while (a<9) {
    a++;
    console.log(a + "</br>");
}

do {
    a++;
} while (a<9);

console.log(a + "</br>")
