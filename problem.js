// Write a Javascript Function to find the Number  of Occurrence of Each element in the Array, can use any one of the Method Map, Filter, Object Method, For, Foreach 

// Input = [3,4,3,5,3,6] 

// Expected Output : [3:3,4:1,5:1,6:1] 

// Output may be a  [Key : Val ]- List      or       {Key : Val }- Object


const Input = [3,4,3,5,3,6];

const count = {};

for (const element of Input) {
  if (count[element]) {
    count[element] += 1;
  } else {
    count[element] = 1;
  }
}

console.log(count); 