// This file is created by egg-ts-helper@1.33.0
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportHelloController from '../../../app/controller/HelloController';

declare module 'egg' {
  interface IController {
    helloController: ExportHelloController;
  }
}
