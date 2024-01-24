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
    favoriteVideoGame:"Lol",
    favoriteFilm:"Grease",
    favoriteBook:"50 sombras",
    petName: "Mr.Rabbit"
    },
    {name:"Rosa",
    surname:"Martinez",
    age:25,
    city:"Almeria",
    hobby:"Lectura",
    favoriteFood:"Verduras",
    favoriteVideoGame:"Animal crossing",
    favoriteFilm:"mis primeras 50 citas",
    favoriteBook:"No lo llamaes amor",
    petName: "Minnie"
    },
    {name:"Paco",
    surname:"Porras",
    age:38,
    city:"Huelva",
    hobby:"Tenis",
    favoriteFood:"Pescado",
    favoriteVideoGame:"Lol",
    favoriteFilm:"Mr.Robot",
    favoriteBook:"Comic DC",
    petName: "kiara"
    }
];
// Mostramos el array por pantalla
//console.log(estudiantes);
// Mostrar nombres similares
function similares (array){
    let duplicados =[]
    for ( let i = 0; i < array.length; i ++){
        let elemento = array[i].name
        if (!Duplicados == elemento && elemento)
    }

    return duplicados
}
console.log(similares(estudiantes))

