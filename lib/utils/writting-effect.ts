let timeout;
interface iTxtType {
  txt: string;
  isDeleting: boolean;
  loopNum: number;
  toRotate: string[];
  el: HTMLElement;
  period: number;
}
export default class TxtType implements iTxtType {
  public txt: string;
  public isDeleting: boolean;
  public loopNum: number;
  static tick: () => {};
  constructor(
    public el: HTMLElement,
    public toRotate: string[],
    public period: number
  ) {
    this.toRotate = toRotate;
    this.el = el;
    this.period = period || 2000;
    this.loopNum = 0;
    this.txt = "";
    this.tick();
    this.isDeleting = false;
  }
  tick() {
    const i = this.loopNum % this.toRotate.length;
    const fullTxt: string = this.toRotate[i];

    if (this.isDeleting) {
      this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
      this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    this.el.innerHTML = '<span class="wrap">' + this.txt + "</span>";

    let delta = 200 - Math.random() * 100;

    if (this.isDeleting) {
      delta /= 2;
    }
    const that = this
    timeout = setTimeout(function () {
      that.tick();
    }, 40);
    if (this.txt === fullTxt) {
      clearTimeout(timeout);
    }
  }
}
