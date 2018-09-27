const express = require('express');
const fetch = require('node-fetch');
const url = require('url');

const app = express();
const router = express.Router();

const meli = {
    search : "https://api.mercadolibre.com/sites/MLA/search" ,
    item : "https://api.mercadolibre.com/items"
};

app.set('port', process.env.PORT || 3001 );

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "*, Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

router.route('/items/').get(function(req, res){
    const params = url.parse(req.url,true).query;
    fetch(`${meli.search}?q=${params.q}&limit=4`)
        .then(res => res.json())
        .then(data => {
            let categories = [];
            if(data.filters[0] && data.filters[0].values){
                categories = data.filters[0].values[0].path_from_root.map(category => category.name);
            }
            const result = {
                author : {
                    name : 'Mariam',
                    lastname : 'Sleiman'
                },
                categories : categories,
                items : data.results.map(product => {
                    return {
                        id : product.id,
                        title : product.title,
                        price : {
                            amount : Math.trunc(product.price),
                            currency : product.currency_id,
                            decimals : Math.trunc(product.price % 1 * 100)
                        },
                        picture : product.thumbnail,
                        condition : product.condition,
                        free_shipping : product.shipping.free_shipping,
                        region : product.address.state_name
                    }
                }),
            }
            res.json(result);
        });
});

router.route('/items/:item_id').get(function(req, res){
    fetch(`${meli.item}/${req.params.item_id}`)
        .then(res => res.json())
        .then(data => {
            fetch(`${meli.item}/${req.params.item_id}/description`)
                .then(res => res.json())
                .then(descriptionData => {
                    const result = {
                        author : {
                            name : 'Mariam',
                            lastname : 'Sleiman'
                        },
                        item : {
                            id : data.id,
                            title : data.title,
                            price : {
                                currency : data.currency_id,
                                amount :  Math.trunc(data.price),
                                decimals : Math.trunc(data.price % 1 * 100)
                            },
                            picture : data.pictures[0].url,
                            condition : data.condition,
                            free_shipping : data.shipping.free_shipping,
                            sold_quantity : data.sold_quantity,
                            description : descriptionData.plain_text
                        }
                    };
                    res.json(result);
                });
        });
});

app.use('/api', router);

app.listen(app.get('port'), () =>{
    console.log(`server port ${app.get('port')}`);
});
