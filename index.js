// Code your solution in this file!
function logDriverNames(drivers) {
  drivers.forEach(driver => console.log(driver.name))
}

function logDriversByHometown(drivers, location) {
  drivers.filter(driver => driver.hometown === location).forEach(driver => console.log(driver.name))
}

function driversByRevenue(drivers) {
  let drivers2 = drivers.slice()
   return drivers2.sort(function (a, b) {
    return a.revenue - b.revenue
  })
}

function driversByName(drivers) {
  let drivers2 = drivers.slice()
  return drivers2.sort(function (a, b) {
    return a.localeCompare(b)
  })
}
