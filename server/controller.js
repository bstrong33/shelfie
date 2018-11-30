module.exports = {
    getInventory: (req, res) => {
        const dbInstance = req.app.get('db');

        dbInstance.get_inventory()
        .then( inventory => res.status(200).send(inventory))
        .catch( error => {
            res.status(500).send( 'Get inventory error')
            console.log(error)
        })
    },
    postProduct: (req, res) => {
        // res.sendStatus(200)
        
        const dbInstance = req.app.get('db');
        let { name, price, img_url } = req.body

       dbInstance.create_product(name, price, img_url)
       .then( () => {
           res.sendStatus(200)
        })
       .catch( error => {
        res.status(500).send( 'Get inventory error' )
        console.log(error)
       })
    },
    deleteProduct: (req, res) => {
        const dbInstance = req.app.get('db');
        let { id } = req.params
        // console.log(req.params)
        
        dbInstance.delete_product(id)
        .then( () => {
            res.sendStatus(200)
        })
        .catch( error => {
            res.status(500).send( 'Get inventory error' )
            console.log(error)
           })
    },
    putProduct: (req, res) => {
        res.sendStatus(200)
        const dbInstance = req.app.get('db');
        let { id } = req.params
        let { name, price, img_url } = req.body
        
        dbInstance.update_product(id, name, price, img_url)
        .then( () => {
            res.sendStatus(200)
        })
        .catch( error => {
            res.status(500).send( 'Get inventory error' )
            console.log(error)
           })

    }
}