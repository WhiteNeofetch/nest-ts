type Point = {x:number, y:number}

type P = keyof Point;

function MyF(){
    return{a:1}
}

type MyFType = () => {a:number}

type K = ReturnType<MyFType>

const MyArray = [
    {name: 'Вася',age: 30}
]

type Person = typeof MyArray[number];
type Age = typeof MyArray[number]['age']

type Message<T> = T extends {message: unknown} ? T['message'] : never;

interface Email {
    message: string;
}

interface Cat{
    test: number;
}

type EmailMessageContents = Message<Email>

type CatlMessageContents = Message<Cat>

interface Test{
    [key: string]: number;
}

type OptionFlags<Type> = {
    [Property in keyof Type]: boolean
}

type world = 'world'

type Greeting = `hello ${world}`