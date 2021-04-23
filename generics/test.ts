function logTime<T>(num: T):T{
    console.log(new Date());
    return num;
}

logTime<string>('asd')
logTime<number>(5)

function logTime2<T>(num: T):T{
    if(typeof num == 'string'){
        num.toLocaleUpperCase()
    }
    return num;
}

interface MyInterface{
    transform:<T, F>(a:T) => F
}

class MyGenClass<T> {
    value: T | undefined
}

const a = new MyGenClass<number>()
a.value

interface TimeStamp{
    stamp: number;
}

function logTimeStamp<T extends TimeStamp>(num: T): T{
    console.log(num.stamp)
    return num
}