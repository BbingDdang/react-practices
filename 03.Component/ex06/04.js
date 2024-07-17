import fs from 'fs';
import update from 'react-addons-update';

console.log("== Sol =========================================");
const order = JSON.parse(fs.readFileSync('./json/data.json', 'utf-8'))

const updateOrder = update(order, {
    // property change
    receive: {
        $set : "강남구 논현동..."
    },
    // nest object property change
    payment: {
        method: {
            $set: "mobile"
        }
    },
    products: {
        // array elements object property change  0 -> index
        0: {
            ammount: {
                $set: 200
            }
        },
        // array elements add

        $push : [{
            no: "c002-003",
            name: '블루양말',
            price: 2000,
            amount: 1
        }]
    }

})

console.log(updateOrder, order);
