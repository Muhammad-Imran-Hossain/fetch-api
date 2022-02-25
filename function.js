
const modal= document.querySelector('.modal');
const modal_dev = document.querySelector('.modal-dev');
const modal_product = document.querySelector('.modal-product');
const modal_student = document.querySelector('.modal-student');
const cart = document.querySelector('.cart');


// developers



function showDevs(id){
 
    modal_dev.classList.add('active');
    modal_dev.addEventListener('click',function(e){
        if(e.target == modal_dev){
            modal_dev.classList.remove('active');
        }
    });

   
const devs = document.querySelector('.devs-content');
        devs.innerHTML = '';
        
    fetch('https://my-json-server.typicode.com/Muhammad-Imran-Hossain/myapi/devs/'+ id).then(data => data.json()).then(data =>{

    devs.innerHTML = `

    <div class="modal-body">
        <div class="image">
            <img src="${data.photo}" alt="Image">
        </div>
        <div class="modal-des">
            <h2>${data.name}</h2>
            <p> ${data.skill}</p>
            <p><b>Location: </b>${data.location}</p>

            <button onclick="closeDevModal()" class="cart">Hire</button>
        </div>
    </div>
    
    `;

    });

};

function closeDevModal(){

    modal_dev.classList.remove('active');
};



// product

function showProduct(id){
 
    modal_product.classList.add('active');
    modal_product.addEventListener('click',function(e){
        if(e.target == modal_product){
            modal_product.classList.remove('active');
        }
    });

    
    
   
const product = document.querySelector('.products-content');
        product.innerHTML = '';
        
    fetch('https://my-json-server.typicode.com/Muhammad-Imran-Hossain/myapi/products//'+ id).then(data => data.json()).then(data =>{

    product.innerHTML = `

            <div class="modal-body">
                <div class="image">
                    <img src="${data.photo}" alt="Image">
                </div>
                <div class="modal-des">
                    <h2>${data.name}</h2>
                    <p> ${data.price} tk</p>
                    <p><b>Description: </b>${data.details}</p>

                    <button onclick="closeProductModal()" class="cart">Add to cart</button>
                </div>
            </div>
            
    `;

    });

};

function closeProductModal(){

    modal_product.classList.remove('active');
};



// Students



function showStudent(id){
 
    modal_student.classList.add('active');
    modal_student.addEventListener('click',function(e){
        if(e.target == modal_student){
            modal_student.classList.remove('active');
        }
    });

    
    
   
const student_content = document.querySelector('.students-content');
    student_content.innerHTML = '';
        
    fetch('https://my-json-server.typicode.com/Muhammad-Imran-Hossain/myapi/students/'+ id).then(data => data.json()).then(data =>{

        student_content.innerHTML = `

            <div class="modal-body">
                <div class="image">
                    <img src="${data.photo}" alt="Image">
                </div>
                <div class="modal-des">
                    <h2>${data.name}</h2>
                    <p><b>Roll: </b> ${data.id}</p>
                    <p><b>Address: </b> ${data.location}</p>
                    <p><b>Father Name: </b> ${data.father}</p>
                    <p><b>Mother Name: </b> ${data.mother}</p>
                    <h4>Marks</h4>
                    <hr>
                    <p><b>Bangla: </b> ${data.ban}</p>
                    <p><b>English: </b> ${data.eng}</p>
                    <p><b>Physics: </b> ${data.phy}</p>
                    <p><b>Chemistry: </b> ${data.che}</p>
                    <p><b>Biology: </b> ${data.bio}</p>
                    <p><b>Math: </b> ${data.math}</p>

                    <button onclick="closeModal()" class="cart">Send Message</button>
                </div>
            </div>
    
    `;

    });

};

function closeModal(){

    modal_student.classList.remove('active');
};