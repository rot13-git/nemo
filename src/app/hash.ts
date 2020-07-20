import { Buyer } from "./buyer";
import { Timestamp } from 'rxjs';

export class Hash{
  id:string;
  url:string;
  user_id:Buyer;
  //creation_time:Timestamp(); non mi prende il timestamp
  shurl:string;
  visite:BigInteger;
  //alive:boolean;  ancora da gestire
}
