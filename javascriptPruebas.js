// Creamos un array con varios elementos
let estudiantes = [
    {name:"Miguel",
    surname:"Abato",
    age:30,
    city:"Sevilla",
    hobby:"Gimnasio",
    favoriteFood:"Pasta",
    favoriteVideoGame:"FIFA",
    favoriteFilm:"Señor de los anillos",
    favoriteBook:"Imperio final",
    petName: "Lupo"
    },
    {name:"Paco",
    surname:"Palote",
    age:40,
    city:"Malaga",
    hobby:"Futbol",
    favoriteFood:"Arroz",
    favoriteVideoGame:"LOL",
    favoriteFilm:"Grease",
    favoriteBook:"50 sombras",
    petName: null
    },
    {name:"Rosa",
    surname:"Martinez",
    age:25,
    city:"Almeria",
    hobby:"Lectura",
    favoriteFood:"Verduras",
    favoriteVideoGame:"League Of Legends",
    favoriteFilm:"mis primeras 50 citas",
    favoriteBook:"No lo llamaes amor",
    petName: null
    },
    {name:"Paco",
    surname:"Porras",
    age:38,
    city:"Huelva",
    hobby:"Tenis",
    favoriteFood:"Pescado",
    favoriteVideoGame:"Assasin Creed",
    favoriteFilm:"Mr.Robot",
    favoriteBook:"Comic DC",
    petName: "Kiara"
    }
];
// Mostramos el array por pantalla
// funcion para ordenar alfabeticamente por apellidos los objetos del array.
function OrdenAlfabetico (array){
    estudiantes.sort(function(a, b) { // sort ordena los elementos de array
        let surnameA = a.surname.toUpperCase(); // crea variable surname y 
        let surnameB = b.surname.toUpperCase(); //toUpperCase lo hace mayuscula
    
        if (surnameA < surnameB) {             
            return -1;
        } else if (surnameA > surnameB) {   
            return 1;
        } else {
            return 0;
        }
    });
    
    estudiantes.forEach(function(estudiante) {
        console.log(estudiante);
    });
}
// Funcion para ordenar por edad a los estudiantes.
function OrdenarEdad (array){
    estudiantes.sort(function(a, b){
        return a.age - b.age;
    });
    
    estudiantes.forEach(function(estudiante){
        console.log(estudiante.name,estudiante.age);
    });
}
// Funcion para mostrar la edad media de los estudiantes.
function MediaEdad (array){
    let sumaEdades = 0;

    for(let i = 0; i < estudiantes.length; i++){
        sumaEdades = sumaEdades + estudiantes[i].age;
    }

    let edadMedia = sumaEdades / estudiantes.length;

    console.log("La edad media de los estudiantes es: ",edadMedia);
}
// Funcion para mostrar los estudiantes que juegan al LOL
function JuegaLOL (array){
    let juegan = []
    for (i = 0; i < array.length; i++){
        if (array[i].favoriteVideoGame == "LOL" || array[i].favoriteVideoGame == "League Of Legends"){
            juegan.push(array[i].name)
        }
    }
    console.log("Los estudiantes que juegan al LOL son: ",juegan)
}
// Funcion para mostrar el nombre repetido en el array.
function Repetidos (array){
    let nombres = []
    for(i = 0; i < array.length; i ++){
        nombres.push(array[i].name)
    }
    let duplicados = []
    for (i = 0; i < nombres.length; i ++){
        let nombre = nombres[i]
        if(!duplicados.find(n => n == nombre) && nombres.slice(i + 1).find(n => n == nombre)){
            duplicados.push(nombre)
        }
    }
    console.log("Los nombres que se repiten son: ",duplicados)
}
// Funcion para mostrar los nombres de quien tiene mascotas.
function mascotas (array){
    let nombre = []
    for (i = 0; i < array.length; i++){
        if (array[i].petName != null) {
            nombre.push(array[i].name)
        }
    }
    console.log("Los estudiantes que tienen mascotas son: ",nombre)
}
// invocamos las funciones
OrdenAlfabetico(estudiantes);
OrdenarEdad(estudiantes);
MediaEdad(estudiantes);
mascotas(estudiantes);
JuegaLOL(estudiantes);
Repetidos(estudiantes);

