import { Service } from "egg";

export default class ManageAppService extends Service {
  public async register(appdoc: { name: string; desc?: string }) {}
}
