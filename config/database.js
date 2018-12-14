if(process.env.NODE_ENV === 'production') {
    module.exports = { mongoURI:
        'mongodb://kenny:kenny4real@ds157873.mlab.com:57873/vidjotdb-prod'
    }
} else {
    module.exports = { mongoURI: 'mongodb://localhost/vidjot-dev'}
}