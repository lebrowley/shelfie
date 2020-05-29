
module.exports = {
    //GET
    getProducts: (req, res) => {
        const dbInstance = req.app.get('db')

        dbInstance.get_products()
        .then( products => res.status(200).send(products))
        .catch(err => {
            res.status(500).send(err)
            console.log(err)
        })
    }, 

    //POST
    newProduct: (req, res) => {
        const dbInstance = req.app.get('db')
        const {name, price, img} = req.body

        dbInstance.create_product([name, price, img])
        .then( () => res.sendStatus(200))
        .catch(err => {
            res.status(500).send(err)
            console.log(err)
        })
    }, 

    //DELETE
    deleteProduct: (res, req) => {
        const dbInstance = req.app.get('db')
        const {id} = req.params

        dbInstance.delete_product(id)
        .then( () => res.sendStatus(200))
        .catch(err => {
            res.status(500).send(err)
            console.log(err)
        })
    }, 

    //PUT
    updateProduct: (req, res) => {
        const dbInstance = req.app.get('db')
        const {id} = req.params
        
        dbInstance.update_product(id)
    }
};