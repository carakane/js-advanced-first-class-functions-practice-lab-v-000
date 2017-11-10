// Code your solution in this file!
function logDriverNames(drivers) {
  drivers.forEach(driver => console.log(driver.name))
}

function logDriversByHometown(drivers, location) {
  drivers.filter(driver => driver.hometown === location).forEach(driver => console.log(driver.name))
}

function driversByRevenue(drivers) {
   return drivers.sort(function (a, b) {
    return a.revenue - b.revenue
  })
}
