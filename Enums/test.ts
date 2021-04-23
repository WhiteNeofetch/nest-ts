enum Direction {
    UP = 'UP',
    Down = "DOWN",
    Left = "LEFT",
    Right = "RIGHT",
}

enum Decision {
    Yes = 1,
    NO = calcEnum()
}

function calcEnum(){
    return 2;
}

function  runEnum(obj: {UP: string}){

}

runEnum(Direction)

enum Test {
    A
}

let test = Test.A;
let nameA  = Test[test] // A

const enum ConstEnum{
    A,
    B
}

let c = ConstEnum.A;

enum Dice{
    One = 1,
    Two,
    Three
}

function ruDice(dice:Dice){
    switch (dice) {
        case Dice.One:
            return 'один';
        case Dice.Two:
            return 'два';
        case Dice.Three:
            return 'три'
        default:
            const a: never = dice;
    }
}