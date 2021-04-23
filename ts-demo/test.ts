type Point = {
    x:number,
    y:number
};

type D3Point = Point & {
    z:number;
}

interface IPoint{
    x:number,
    y:number
};

interface I3DPOINT extends IPoint{
    z:number;
}

type stringOrNumber = string | number;

//cast type
//const myCanvas = document.getElementById('canvas') as HTMLCanvasElement
const c = (point:IPoint) =>{
    const d: I3DPOINT = point as I3DPOINT;
}



// function print(coord: I3DPOINT){
//
// }

interface ITest{
    a:number;
}

interface ITest{
    b:number;
}

