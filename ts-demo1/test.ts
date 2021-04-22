let c: 'test' = 'test';

type actionType = 'up' | 'down';

function  performAction(action: actionType | ComplexAction){
    switch (action){
        case "down":
            return -1;
        case "up":
            return 1;
    }
}

interface ComplexAction{
    s: string;
}