// This file is created by egg-ts-helper@1.25.6
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportHome from '../../../app/controller/home';
import ExportManageApp from '../../../app/controller/manage/app';

declare module 'egg' {
  interface IController {
    home: ExportHome;
    manage: {
      app: ExportManageApp;
    }
  }
}
