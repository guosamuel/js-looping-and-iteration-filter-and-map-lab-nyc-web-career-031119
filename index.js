// Code your solution here:
function driversWithRevenueOver(driver, revenue) {
  return driver.filter(x => x.revenue > revenue);
};

function driverNamesWithRevenueOver(driver, revenue) {
  return driversWithRevenueOver(driver, revenue).map(x => x.name);
};

function exactMatch(driver, attributeObject) {
  return driver.filter(x => helpingExactMatch(x, attributeObject));
};

//helper method
function helpingExactMatch(driverObject, attributeObject) {
  for (const key in driverObject) {
    if (driverObject[key] === Object.values(attributeObject)[0]) {
      return true
    };
  };
};

function exactMatchToList(driver, attributeObject) {
  return exactMatch(driver, attributeObject).map(x => x.name);
};
