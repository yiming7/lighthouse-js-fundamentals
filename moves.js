const finalPosition = function (moves) {
    // Your code in here ...
    let x = 0;
    let y = 0;
    for (let direction of moves){
        switch (direction){
        case "north":
            y++;
            break;
        case "south":
            y--;
            break;
        case "west":
            x--;
            break;
        case "east":
            x++;
            break;
        }
    }
    return[x,y];
}

const moves = ['north', 'north', 'west', 'west', 'north', 'east','north']

console.log(finalPosition(moves));


