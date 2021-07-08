import "./index.less"; // 引入样式
console.log("ts 版本");


// demo1
let foo: { name: string, age: number; } = {name: "daFei", age: 18};
console.log(foo);

// demo2
function bar<T>(name: T): T {
    console.log(name);
    return name;
}
bar<String>("daFei"); // 字符串
