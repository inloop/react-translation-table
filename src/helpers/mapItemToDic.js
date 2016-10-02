export default function (dictionary, itemObj, title) {
  const newDictionary = { ...dictionary }

  for (var key in itemObj) {
    if (itemObj.hasOwnProperty(key)) {
      newDictionary[key][title] = itemObj[key]
    }
  }

  return newDictionary
}
