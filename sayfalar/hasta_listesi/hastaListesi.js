const ekleButonuDOM = document.getElementById("ekleBtn");
var modal = document.getElementById("myModal");
var span = document.getElementsByClassName("close")[0];


ekleButonuDOM.onclick = () => {
    modal.style.display = "block";
}

span.onclick = () => {
    modal.style.display = "none";
}

window.onclick = (event) => {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}



// veri çekip yazdırma 
const HastaListesiDOM = document.getElementById("HastaListesi");

async function getUserData() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        const userList = await response.json();
        getUserList(userList);
    } catch (error) {
        console.log(error);
    } finally {
        console.log("işlem tamamlandı.");
    }
}

function getUserList(userList) {

    let userTable = "";

    userList.forEach(user => {
        userTable += `
        
                        <tr>
                            <td>${user.email}</td>
                            <td>${user.name}</td>
                            <td>${user.username}</td>
                            <td>${user.phone}</td>
                            <td>
                                <button class="btn btn-primary btn-sm">Düzenle</button>
                                <button class="btn btn-danger btn-sm">Sil</button>
                            </td>
                        </tr>

        `

    });

    HastaListesiDOM.innerHTML = userTable;
}

getUserData();