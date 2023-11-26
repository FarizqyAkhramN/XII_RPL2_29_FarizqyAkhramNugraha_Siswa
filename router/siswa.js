const express = require('express')
const router = express.Router()

const usercontroller = require('../controllers/siswa')

router.get('/semuasiswa', usercontroller.index)
router.get('/siswa/:id', usercontroller.show)

  router.post('/tambahsiswa', usercontroller.store)
  
  router.put('/mengubahsiswa/:id', usercontroller.update)
  
  router.delete('/menghapussiswa/:id', usercontroller.delete)

  module.exports = router