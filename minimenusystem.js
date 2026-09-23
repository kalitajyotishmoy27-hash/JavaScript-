function menuChoice(choice){
    switch(choice){
        case 1:
            return "Start Game";
            break;
        case 2:
            return "Load Game";
            break;
        case 3:
            return "settings";
            break;
        case 4:
            return "Exit";
            break;
        default :
            return "Invalid choice";                
    }
}
console.log(menuChoice(4));