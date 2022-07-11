const { Router } = require("express");
const RouteUser = require("../routes/UserRouter");
const category = require("../routes/CategoryRouter.js");
const Sponsor = require("../routes/SponsorRouter.js");
const Score = require("../routes/ScoreRouter.js");
const Subtournament = require("../routes/SubtRouter.js");
const router = Router();
const inscription = require("../routes/InscriptionRouter.js");

// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.use("/category", category);
router.use("/user", RouteUser);
router.use("/sponsor", Sponsor);
router.use("/score", Score);
router.use("/subtournament", Subtournament);
router.use("/inscription", inscription);

module.exports = router;
