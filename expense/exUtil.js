
const fs = require('fs')
const { number } = require('yargs')
const log = console.log


const filename = 'tx.json'

const loader = (filename) => {

    try {

        return JSON.parse(fs.readFileSync(filename))
    }

    catch (e) {
        log('no data found in ', filename)
        return []
    }



}


const getStats= ()=> {

    const data = loader(filename)

    log('calculating stats..............')
total=0
  data.forEach(  (txn)=>  total= total+ Number.parseInt(txn.amount)    )
  log('net balance is ', total)




}

const addTxn = (amount, desc) => {




    if (amount.startsWith('+')) {

        log('income detected')
        //income 
        //write back 
        //create write data 
      
        writeFile(filename,getTxn(amount,desc,filename))

    }

    else {

        // expense 
        log('expense detected ')
        writeFile(filename,getTxn(amount,desc,filename))
    }

}

const getTxn= (amount,desc,filename) =>{
    const oldData = loader(filename)
    log('txs... adding')
    oldData.push({

        amount: amount,
        desc: desc

    })

    return JSON.stringify(oldData)
    
}


const writeFile = (filename,data) => {
    log('txns writing...')

    fs.writeFileSync(filename,data)
}

module.exports = {

    loader: loader,
    addTxn: addTxn,
    getStats:getStats
}