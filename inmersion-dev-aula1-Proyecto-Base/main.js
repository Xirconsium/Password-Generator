let cantidad = document.getElementById('cantidad');
let boton = document.getElementById('generar');
const cadenaCaracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_'
let contrasena =document.getElementById('contrasena')

function generar(){

    let numeroDigitado = parseInt (cantidad.value);
    
    if( numeroDigitado < 8){
        alert("La cantidad de caracteres tiene que ser mayor que 8");
    
    }
let password = '';
    for(let i=0; i < numeroDigitado; i ++ ){
        let caracteraleatorio = cadenaCaracteres [Math.floor (Math.random() * cadenaCaracteres.length)];
        console.log (caracteraleatorio);
        
        password+= caracteraleatorio;
        
    }
    contrasena.value=password;
}
 










