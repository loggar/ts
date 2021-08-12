//constant.ts
export const name = "Toyota"


//vehicle.ts
<reference path = "constant.ts" />
export namespace Vehicle {
  export function getName () {
      return `${name}`
  }
}

//index.ts
<reference path = "constant.ts" />
<reference path = "vehicle.ts" />
Vehicle.getName() // Toyota