let greet: Function;

greet = () => {
    console.log('Hello World');

}

const add = (a: number, b: number, c?: number) => {
    c ? console.log(a + b + c) : console.log(a + b);
    ;


}

add(2, 3)

const mines = (a: number, b: number, c: number = 1): void => {
    c ? console.log(a - b - c) : console.log(a - b);
    ;


}

mines(9, 1, 4)

// DECLARING TYPE!

type StrOrNum = string | number;
type objWithName = { name: string, uid: StrOrNum };

const logDetails = (uid: string | number, item: string) => {
    console.log(`${item} has a uid of ${uid}`);

}

const greet2 = (user: objWithName) => {
    console.log(`${user.name} says hello ${user.uid} times :)`);

}

const user = {
    name: 'Yunus',
    uid: 'five'
}
greet2(user)