
const devs_list = document.querySelector('.developer-list');
const product_list = document.querySelector('.product-list');
const student_list = document.querySelector('.student-list');


fetch('https://my-json-server.typicode.com/Muhammad-Imran-Hossain/myapi/devs').then( data => data.json()).then( data => {
   
    let devs = '';
    data.map( data => {
        devs += `
        <div class="products">
             <img onclick="showDevs(${data.id})" src="${data.photo}" alt="Image">

            <div class="detailes">
                <h2>${data.name}</h2>
                <p>${data.skill}</p>
                <p class="des"><b>Location:</b> ${data.location}</p>

               
            </div>
        </div>
        
        `;
    });

    devs_list.innerHTML = devs;

});

// products

fetch('https://my-json-server.typicode.com/Muhammad-Imran-Hossain/myapi/products').then( data => data.json()).then( data => {
   
    let products = '';
    data.map( data => {
        products += `
        <div class="products">
             <img onclick="showProduct(${data.id})" src="${data.photo}" alt="Image">

            <div class="detailes">
                <h2>${data.name}</h2>
                <p>${data.price} tk</p>
                <p class="des"><b>Category:</b> ${data.category}</p>

               
            </div>
        </div>
        
        `;
    });

    product_list.innerHTML = products;

});


// student
fetch('https://my-json-server.typicode.com/Muhammad-Imran-Hossain/myapi/students').then( data => data.json()).then( data => {
   
    let students = '';
    data.map( data => {
        students += `
        <div class="products">
             <img onclick="showStudent(${data.id})" src="${data.photo}" alt="Image">

            <div class="detailes">
                <h2>${data.name}</h2>
                <p> <b>Roll no: </b>${data.id}</p>
                <p class="des"><b>Location:</b> ${data.location}</p>

               
            </div>
        </div>
        
        `;
    });

    student_list.innerHTML = students;

});




