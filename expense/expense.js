const  yargs = require('yargs')
const exUtil=  require('./exUtil.js')

yargs.command({


    command:'add',
    describe: 'add a transaction',
    builder:{


        amount:{
            describe: ' income or expense ',
            demandOption:true,
            type:'string'
        },

        desc:{
            describe: ' describe income or expense ',
            demandOption:true,
            type:'string'
        }

    },

    handler(argv){

        console.log( ' adding txn././././')
        exUtil.addTxn(argv.amount,argv.desc)

    }

})



yargs.command({


    command:'stats',
    describe:' is profit or loss net ',
    handler(){

        exUtil.getStats()

    }




})

yargs.parse()