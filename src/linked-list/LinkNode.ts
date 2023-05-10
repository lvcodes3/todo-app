export class LinkNode {
  data: string;
  next: null | LinkNode;

  constructor(data: string) {
    this.data = data;
    this.next = null;
  }
}
