interface ICircle {
  readonly id: string;
  center: {
    x: number;
    y: number;
  };
  radius: number;
  color?: string; // Optional property
}

const circle1: ICircle = {
  id: "001",
  center: { x: 0 },
  radius: 8
}; /* Error! Property 'y' is missing in type '{ x: number; }' 
but required in type '{ x: number; y: number; }'. */

const circle2: ICircle = {
  id: "002",
  center: { x: 0, y: 0 },
  radius: 8
}; // Okay

circle2.color = "#666"; // Okay
circle2.id = "003"; /* Error! 
Cannot assign to 'id' because it is a read-only property. */
