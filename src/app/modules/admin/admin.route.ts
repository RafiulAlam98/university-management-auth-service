import { AdminController } from "./admin.controller"
import { AdminValidation } from './admin.validation';
import { RequestValidation } from './../../middlewares/validateRequest';
import express from "express"

const router = express.Router()

router.get('/:id', AdminController.getSingleAdmin)
router.get('/', AdminController.getAllAdmins)

router.delete('/:id', AdminController.deleteAdmin)

router.patch(
  '/:id',
  RequestValidation.ValidateRequest(AdminValidation.updateAdmin),
  AdminController.updateAdmin
)

export const AdminRoutes = {router}
