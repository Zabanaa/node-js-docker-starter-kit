const router = require("express").Router()
const Ninja = require("../models").Ninja

// GET /api/ninjas
router.get("/", (req, res) => {
    Ninja.find({})
        .then( ninjas => res.send(ninjas) )
})

// GET /api/ninjas/:id
router.get("/:id", (req, res) => {
    Ninja.find({_id: req.params.id})
        .then( ninja => res.send(ninja) )
})

// POST /api/ninjas
router.post("/", (req, res) => {
    // create new ninja
    Ninja.create(req.body)
        .then( newNinja => res.send(newNinja) )
})

// PUT /api/ninjas/:id
router.put("/:id", (req, res) => {
    // update object
})

// DELETE /api/ninjas/:id
router.delete("/:id", (req, res) => {
    // delete one
})

module.exports = router

