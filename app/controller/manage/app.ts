import { Controller } from "egg";

export default class ManageAppController extends Controller {
  /**
   * 注册一个应用 返回应用的详细信息
   */
  public async register() {
    const { name, desc } = this.ctx.body;
    const app_monitor = await this.service.manage.app.register({ name, desc });
    return app_monitor;
  }
}
