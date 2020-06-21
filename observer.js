let data = {
    name: "Alice",
    age: 32,
    arr: [1, 2, 3],
    obj: {
        grade: 1,
        lastN: "Wang",
        learn: {

        }
    }
}


// 重写数组中的一些原型方法
const arrayProto = Array.prototype;
const arrayMethod = Object.create(arrayProto);
["push", "pop", "shift", "unshift", "splice", "sort", "reverse"].forEach(method => {
    arrayMethod[method] = function () {
        arrayProto[method].call(this, ...arguments);
        render();
    }
})

function observeEach(data, key, value) {
    observe(value);  // 如果是对象，递归
    Object.defineProperty(data, key, {
        get() {
            console.log("读")
            return value
        },
        set(newValue) {
            if (value === newValue) {
                return;
            }
            console.log("写");
            value = newValue;
            render();
        }
    })
}

function render() {
    console.log("页面渲染了");
}

function observe(data) {
    if (Array.isArray(data)) { // 如果是数组
        data.__proto__ = arrayMethod;
        return;
    } else if (typeof data === "object") {
        for (let prop in data) {  // 如果是对象
            observeEach(data, prop, data[prop]);
        }
    }
}


function $set(data, key, value) {
    if (Array.isArray(data)) {   // 数组
        data.splice(key, 1, value);
        return value;
    }

    data[key] = value;   // 对象的话
    render();
    // observeEach(data, key, value);
    // render()
    return value;
}

function $delete(data, key) {
    if (Array.isArray(data)) {
        data.splice(key, 1);
        return;
    }

    delete data[key];
    render();
}



observe(data);