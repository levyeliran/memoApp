import {Injectable} from "@angular/core";
import {EventCrud} from "./events/eventCrud.service";
import {EventDispatcherService} from "../dispatcher/appEventDispathcer.service";
import {EventActions} from "./events/eventActions";


@Injectable()
export class AppStoreService{

  constructor(public eventCrud: EventCrud,
              public eventDispatcherService: EventDispatcherService){  }

  public initAppStore(): Promise<any>{
    //init the store with all relevant events
    //todo get by month & userId?
    this.eventCrud.getEvents();

    return Promise.all([
      this.eventDispatcherService.on(EventActions.getEvents)
    ])
  }

  public addEvent(event:any){
    this.eventCrud.createEvent(event);
  }

}


/*
export class AppComponent {
  itemsRef: AngularFireList<any>;
  items: Observable<any[]>;
  constructor(db: AngularFireDatabase) {
    this.itemsRef = db.list('messages');
    this.items = this.itemsRef.valueChanges();
  }
  addItem(newName: string) {
    this.itemsRef.push({ text: newName });
  }
  updateItem(key: string, newText: string) {
    this.itemsRef.update(key, { text: newText });
  }
  deleteItem(key: string) {
    this.itemsRef.remove(key);
  }
  deleteEverything() {
    this.itemsRef.remove();
  }
}*/
