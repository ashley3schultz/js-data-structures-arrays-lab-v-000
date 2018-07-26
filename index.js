// Write your solution here!
const drivers = ["Milo", "Otis", "Garfield"]

function destructivelyAppendDriver(name) {
  drivers.push(name)
  return drivers
}

function destructivelyPrependDriver(name) {
  drivers.unshift(name)
  return drivers
}

function destructivelyRemoveLastDriver() {
  drivers.pop()
  return drivers
}

function destructivelyRemoveFirstDriver() {
  drivers.shift()
  return drivers
}

function appendDriver(name) {
  newdrivers = drivers.slice()
  newdrivers.push(name)
  return newdrivers
}

function prependDriver(name) {
  newdrivers = drivers.slice()
  newdrivers.unshift(name)
  return newdrivers
}
