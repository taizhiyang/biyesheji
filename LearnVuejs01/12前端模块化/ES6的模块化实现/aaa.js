var name='小明'
var age=23
var flag=true

function sum(num1,num2){
    return num1+num2
}
if (flag){
    console.log(sum(10, 20));
}
//1.导出方式一
export {
    flag,sum
}
//2.导出方式二
// export var num1=1000;
// export var height=1.90;
var num1=1000;
var height=1.90;
export {num1,height}
//3.导出函数/类
export function mul(num1,num2){
    return num1*num2
}
export class Person{
    run(){
        console.log('在奔跑');
    }
}
//4.export default(唯一)
//导出的是一个东西，导入时可以任意定义名字

// const address='北京市'
// export default address
export default function (argument){
    console.log(argument);
}

