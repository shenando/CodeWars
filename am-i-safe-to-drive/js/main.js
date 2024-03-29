/*
Am I safe to drive?

Your task is to write a kata that will work out if you are safe to drive! You will be given some alcoholic drinks, a time when you stopped drinking and the time you would like to drive.

You will need to return the total units (to 2 decimal places) of the alcoholic drinks and a boolean value true if you are able to drive or false if you are still unable to drive.
Task
Create a method called drive that takes an array of drinks in the format [[strength, volume]] a time when you finished drinking and a time when you would like to drive.

eg. drive([[10.0,100]], "20:00", "21:00") and it must return [1.0, false]
Rules
1. On average it takes a person 1 hour for their body to remove 1 unit of alcohol.

2. Units of alcohol are calculated by strength (ABV) x volume (ml) / 1000 = units. More information can be found here

3. Data passed will be in the format ([[strength,volume]], finished, drive_time). Where finished is the time you stopped drinking and drive_time is the time you would like to drive.

4. If the finished >= drive_time then you can assume that it is the next day.

5. Times are passed as strings and are in 24 hour format.

6. Return total units to 2 decimal places rounded. For example 1.10 => 1.1 and 1.236 => 1.24

7. Return true if you are able to drive and false if you are not.
Example
alcohol = [[5.2,568],[5.2,568],[5.2,568],[12.0,175],[12.0,175],[12.0,175]];
drive(alcohol, "23:00", "08:15");
should return

[15.16, false]
Good luck and enjoy!
*/

function drive(drinks, finished, drive_time) {
  let arr = []
  let alchUnits = drinks.map(el => (el[0] * el[1]) / 1000).reduce((a, b) => a+b).toFixed(2)
  let unitTrim = alchUnits.split('')
  if (unitTrim[unitTrim.length - 1] === '0') {
    unitTrim.pop()
  } 
  arr.push(+unitTrim.join(''))
  
  let time
  
  let fin = +finished.replace(':', '.')
  let drive = +drive_time.replace(':', '.')
  
  if (fin < drive) {
    time = drive - fin
  } else {
    time = (drive - fin) + 24
  }
    
  if (+unitTrim.join('') - time > 0) {
    arr.push(false)
  } else {
    arr.push(true)
  }
  
  return arr
}