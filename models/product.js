const fs = require('fs')
const path = require('path')

const p = path.join(path.dirname(process.mainModule.filename), 'data', 'products.json');
const getProductsFromFile = (cb) => {

        fs.readFile(p, (err, fileContent) => {
            if(err){
                cb([])
            }else{
                cb(JSON.parse(fileContent));
            }
        })
}
module.exports = class Product {
    constructor(ti){
        this.title = ti
    }

    save() {
        getProductsFromFile(prouducts => {
            prouducts.push(this)
            fs.writeFile(p, JSON.stringify(prouducts), err => {
                console.log(err)
            });
        });
    }

    static fetchAll(cb){
        getProductsFromFile(cb);
    }
}