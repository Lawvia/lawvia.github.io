const express = require('express')
const router = express.Router()

router.get('/app-status', async (req, res) => {
    var status = {status:"OK"}
    
    res.send(JSON.stringify(status));
})

router.get('/', function(req, res){
    res.send("hello express")
})

// router.use("/panels", c_panels)
// router.use("/api", c_api)

router.use(function(req, res){
    res.status(404).render("pages/page_404",{})
    return
});

module.exports = router


