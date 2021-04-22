let a: number = 4;
let b: string = 'sfsfsads';
let c = true;

let d: string [] = ['sds','123','asd'];


//I CANt type this )
let e: any = 3;
e = 'fasd';

function test(a: string): string | number{
    return 'asd';
}

const test2 = (a:number): void =>{
    return;
}

d = d.map ((x) => x.toLowerCase())

function  countCoord(coord:{lat: number, long?:number}) {

}

function printIt(id:number| string){
    if (typeof id === 'number'){
        console.log(id.toString());
    } else if(typeof id === 'string'){
        id.toUpperCase()
    }
}

function getSum(a:number | number[]){
    if(Array.isArray(a)){

    }
}

const x: undefined = undefined;
const z: null = null;