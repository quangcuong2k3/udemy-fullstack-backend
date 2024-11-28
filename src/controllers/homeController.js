
const getHomepage = (req, res) => {
    //process data
    //call model
    res.send('Hello World! && cuong ne')
}
const getABC = (req, res) => {
    res.render('sample.ejs')
}

module.exports = {
    getHomepage, getABC
}