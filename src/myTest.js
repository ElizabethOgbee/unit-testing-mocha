class MyClass{
    consteuctor() {
        console.log("Initiated")
    }

    add(arg1, arg2) {
        let result;
        result = arg1 + arg2;
        return result;
    }
}

module.exports = MyClass;