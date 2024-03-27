const express = require('express')
const router = express.Router()

const siteController = require('../app/controllers/SiteController')


router.put('/:id', siteController.update)
router.get('/:id', siteController.edit)
router.delete('/:id', siteController.delete)
router.post('/', siteController.add)
router.get('/', siteController.index)

module.exports = router