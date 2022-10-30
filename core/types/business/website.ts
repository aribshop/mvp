import { Templates } from "../itemplate";

export default interface Website {
  id: string;
  name: string;
  subname: string;
  description: string;
  user: string;
  template: Templates;
}
