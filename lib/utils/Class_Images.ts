interface iImages {
  name: string;
  aos: string;
  path: string;
  id: number;
  width: number;
}

class ImageModel implements iImages {
  public id: number;
  static lastId = -1;
  constructor(
    public name: string,
    public aos: string,
    public path: string,
    public width: number
  ) {
    this.id = ++ImageModel.lastId;
  }
}

export const Images = [
  new ImageModel("red", "fade-up-right", "/photos/design_feather.png", 150),
  new ImageModel("green", "fade-up-left", "/photos/pen_design.png", 100),
  new ImageModel("yellow", "fade-down", "/photos/yellow_pen_design.png", 100),
];
