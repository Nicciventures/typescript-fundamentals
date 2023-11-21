const prefix = '🐉 ';

export default async function updateOutput(id: string) {
 // TO DO 
}
// run our samples
runTheLearningSamples();

function runTheLearningSamples() {
  // hoisted
  function displayProductInfo(id: number, name: string) {
    console.log(`${prefix} typed parameters`);
    console.log(`product id=${id} and name=${name}`);
  }

  displayProductInfo(10, 'Pizza')

  console.log(`${prefix} function declaration`)
  console.log(addNumbersDeclaration(7, 11));
  
  function addNumbersDeclaration(x: number, y: number) {
    const sum = x + y;
    return sum;
  }

  const addNumbersExpression = function(x: number, y: number) {
    const sum: number = x + y;
    return sum;
  }

  console.log(`${prefix} function declaration`)
  console.log(addNumbersExpression(77, 111));

}