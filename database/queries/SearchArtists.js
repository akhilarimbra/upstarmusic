const Artist = require('../models/artist')

/**
 * Searches through the Artist collection
 * @param {object} criteria An object with a name, age, and yearsActive
 * @param {string} sortProperty The property to sort the results by
 * @param {integer} offset How many records to skip in the result set
 * @param {integer} limit How many records to return in the result set
 * @return {promise} A promise that resolves with the artists, count, offset, and limit
 */
module.exports = (criteria, sortProperty, offset = 0, limit = 20) => {
  console.log(
    `Criteria: ${criteria}\nSortProperty: ${sortProperty}\nOffset: ${offset}\nLimit: ${limit}`
  )
  console.log(criteria)

  const sortOffsetLimitQuery = Artist.find()
    .sort({ [sortProperty]: 1 })
    .skip(offset)
    .limit(limit)

  const countQuery = Artist.count()
    .sort({ [sortProperty]: 1 })
    .skip(offset)
    .limit(limit)

  return Promise.all([sortOffsetLimitQuery, countQuery]).then(results => {
    return {
      all: results[0],
      count: results[1],
      offset: offset,
      limit: limit
    }
  })
}
