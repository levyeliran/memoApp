export class EventStore{
  events: Event[] = [];
  currentEvent: Event;
};

export const EventStatus = {
  //ui use
  canCreateEvent: 1,
  //fb use
  invited: 2,
  joined: 3,
  rejected: 4,
  active: 5,
  passed: 6
};

export class Event{
  key:any;
  typeKey:any;
  creatorKey:any;
  typeName:string;
  creatorName:string;
  title:string;
  initials:string; //Y&R for example
  description:string;
  location:any;
  startDate:any;
  endDate:any;
  creationDate:any;
  updateDate:any;
  introPicUrl:string;
  numOfParticipates:number;
  status:number;
};