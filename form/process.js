const express = require('express');

const app = express();

app.use(express.urlencoded());

app.get('/', function(request, response, next){

    response.send(`
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
    <div class="formulario__caja caja__dark">
    
    <form method="POST" action="/" class="formulario__contacto" >
        <div class="formulario__inputs mb-3">
            <label class="titulo__dark" for="name">Name</label>
            <input class="form-control text__boxes" type="text" name="name" placeholder="Your name" title="Only letters and blank spaces are accepted" pattern="^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\\s]+$" required>
        </div>
        
        <div class="formulario__inputs mb-3">
            <label class="titulo__dark" for="email">E-mail</label>
            <input class="form-control text__boxes" type="email" name="email" placeholder=" Your e-mail" title="Invalid Email " required>
        </div>
       
        <div class="formulario__inputs mb-3">
            <label class="titulo__dark" for="mensaje">Message</label>
            <textarea class="form-control text__boxes" name="mensaje" cols="50" rows="4" placeholder="Your message" data-pattern=" ^.{1,255}$" required ></textarea>
        </div>

        <div class=" submit mb-3">
            <input class="formulario__submit boton titulo__dark" type="submit" value="Add">
        </div>
    `);

});
const bp = require('body-parser');

app.post('/',function(request, response, next){
    response.send(request.body);
});
app.use(bp.json());
app.use(bp.urlencoded({extended:true}));

app.listen(2000);
