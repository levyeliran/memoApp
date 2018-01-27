import {Injectable} from '@angular/core';
import {AndroidPermissions} from "@ionic-native/android-permissions";
import {AppLogger} from "./appLogger";


@Injectable()
export class AppPermission {

  logger: AppLogger;

  constructor(private androidPermissions: AndroidPermissions) {
    this.logger = new AppLogger();
  }

  getPermission(permissionType: string): Promise<any> {
    const permission = this.androidPermissions.PERMISSION[permissionType];
    return this.androidPermissions.checkPermission(permission).then(
      result => {
        this.logger.log(`Has ${permissionType} permission? = ${result.hasPermission}`);
        return Promise.resolve(true);
      },
      err => {
        //this.androidPermissions.PERMISSION.CAMERA
        return this.androidPermissions.requestPermission(permission).then( result =>{
          this.logger.log(`After Request - Has ${permissionType} permission? = ${result.hasPermission}`);
          return Promise.resolve(true);
        }, err => {
          return Promise.reject(false);
        });
      });
  }

}
