//arr of int (num)
//target
//return indices of 2 nums that add up to target

//args - num, target
//return - indices that add up to target 

//iterate through the array
//for loop: array (i)
    //for loop (j)
//if arr[i] + arr[j] === target return [indexOf(arr[i]), indexOf(arr[j])]

[1, 2, 3, 4, 5, 6, 6, 5]

{
  1: 1,
  5: 2
}

//spend more time clarifying the parameters of properties (what am I working with, what are special cases, is it the first number that meets that condition or any?)
//be clear on what you're returning (ex: what if there is no arr or no input in arr - edge cases), what if nums don't add up to target
//WORK THROUGH EXAMPLES
//first write through function, then write test functions below (2-3 cases)
//ex : so if I had an arr that is [1, 2, 3, 4, 5] and my target is 7 I would return [1, 4]

function getToTarget(arr, target) {
  //pseudocode here
}

getToTarget([1, 2], 3)
getToTarget([1, 1], 3)
getToTarget([1, 2, 2, 3, 4, 5], 7)

//get people TALKING
// clarify the parameters, know that the word or string or whatever coming in has no funny bisnuess
//make sure you are clear on what the function should do, what it takes in, and what you're returning 
  //ex: if you return a string instead of a number
  // 'Just to make sure we're on the same page, I'd love to walking through some examples with you (provide input, would it return "...."?)
  //PULL THE INTERVIEWER INTO THE CONVERSATION, don't want them just sitting there
//"Ok, i'm feeling good. I feel like we understand what's happening and that we have some good test cases here"
  //BUILD THAT REPORT
//ASK BEFORE: HOW LONG, HOW MANY QUESTIONS (or bring it up first thing)