import { Router } from 'express';
const router = Router();

router.get('/', (req, res) => {
    res.json({ name: "Hello Im a Exercise" });
});

export default router;