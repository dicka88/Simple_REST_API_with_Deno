import { Application, Router } from "https://deno.land/x/oak/mod.ts";
import UserController from "../controllers/UserController.ts";
const router = new Router();

router.get("/user", UserController.getUser);
router.post("/user", UserController.addUser);
router.get("/user/:fullname", UserController.detailUser);
router.put("/user/:fullname", UserController.updateUser);
router.delete("/user/:fullname", UserController.deleteUser);

export default router;
