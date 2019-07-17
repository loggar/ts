interface ICircleWithArea extends ICircle {
  getArea: () => number;
}

const circle3: ICircleWithArea = {
  id: "003",
  center: { x: 0, y: 0 },
  radius: 6,
  color: "#fff",
  getArea: function() {
    return this.radius ** 2 * Math.PI;
  }
};
