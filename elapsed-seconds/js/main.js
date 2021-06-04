/*
Elapsed Seconds
by jhoffner

Complete the function so that it returns the number of seconds that have elapsed between the start and end times given.

Tips:
The start/end times are given as Date (JS/CoffeeScript), DateTime (C#), Time (Nim), datetime(Python) and Time (Ruby) instances.
The start time will always be before the end time.
*/

function elapsedSeconds(startDate, endDate){
  let startTotal = startDate.getSeconds() + (startDate.getMinutes() * 60)
  let endTotal = endDate.getSeconds() + (endDate.getMinutes() * 60)
  return endTotal - startTotal
}