const router = require('express').Router();

const authRoutes = require('./views/authRouter');
const roleRoutes =  require('./views/roleRouter');
const user_roleRoutes =  require('./views/user_roleRouter');
const appointmentRoutes = require('./views/appointmentRouter');
const userRoutes = require('./views/userRouter');
const specialtyRoutes = require('./views/specialtyRouter');

router.use('/', authRoutes);
router.use('/', roleRoutes);
router.use('/', user_roleRoutes);
router.use('/', appointmentRoutes);
router.use('/', userRoutes);
router.use('/', specialtyRoutes);

module.exports = router;