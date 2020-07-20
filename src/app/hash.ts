import { Buyer } from "./buyer";
import { Timestamp } from 'rxjs';

export class Hash{
  id:string;
  url:string;
  buyer:Buyer;
  //creation_time:Timestamp(); non mi prende il timestamp
  shUrl:string;
  visite:BigInteger;
  //alive:boolean;  ancora da gestire
}
