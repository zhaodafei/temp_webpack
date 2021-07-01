interface inter2 {
    length: number;
}

function fn2<T extends inter2>(name: T): number {
    return name.length;
}

fn2<string>("daFei");
fn2<Array<string>>(["论语", "史记"]);
