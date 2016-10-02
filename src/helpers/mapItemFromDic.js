export default function (dictionary, item) {
  const itemObj = {}

  for(var key in dictionary) {
    if(dictionary.hasOwnProperty(key)) {
      itemObj[key] = dictionary[key][item]
    }
  }

  return itemObj
}
