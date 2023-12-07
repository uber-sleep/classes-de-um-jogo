// Classe
class myHero {
    // Propriedades
    constructor(name, age, type) {
        this.name = name;
        this.age = age;
        this.type = type;
    }
    // Método
    atacar() {
        // Variavél de ataque
        let atackType = this.type;
        // Condicional de tipo de ataque
        switch (atackType) {
            case "mago": 
                atackType = "magia"
                break;
            case "guerreiro":
                atackType = "espada"
                break;
            case "monge":
                atackType = "artes marciais"
                break;
            case "ninja":
                atackType = "shuriken"
                break;
            default:
                atackType = "... ? Herói desarmado, tente novamente"
                break;
        };
        // Mensagem de saída
        console.log(`o ${this.type} atacou usando ${atackType}`);
    };
};

// Criação de objetos
let newAdventureOne = new myHero("Maria", 25, "mago");
let newAdventureTwo = new myHero("João", 30, "guerreiro");
let newAdventureThree = new myHero("Pedro", 50, "monge");
let newAdventureFour = new myHero("Ana", 20, "ninja");
let newAdventureFive = new myHero("José", 35, "rogue"); // Objeto adicionado para demonstrar funcionamento do código em caso de entrada não reconhecida
// Chamando métodos
newAdventureOne.atacar(); 
newAdventureTwo.atacar(); 
newAdventureThree.atacar();  
newAdventureFour.atacar();  
newAdventureFive.atacar();  