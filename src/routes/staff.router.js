const router = require('express').Router();
const db = require('../db/models')

router.put('/:id', async (req, res) => {
  const {email, firstName, lastName, password} = req.body
  let staff;
  if(!req.body.password.length) {
  staff = await db.Admin.update({email, firstName, lastName}, {where: {id: req.params.id}})
  } else {
  staff = await db.Admin.update({email, firstName, lastName, password}, {where: {id: req.params.id}})
  }
  res.status(200).json(staff)
})

router.delete('/:id', async (req, res) => {
  const deleted = await db.Admin.destroy({where: {id: req.params.id}})
  res.status(200). json(deleted)
})




module.exports = router;