import { sum } from "../sum";
test("Sum function should calculate the sum of two numbers", ()=>{

   const res = sum(2,5);

   //assertion
   expect(res).toBe(7);

});