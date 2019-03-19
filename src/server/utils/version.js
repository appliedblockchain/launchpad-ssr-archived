'use strict'

const { readFile } = require('fs')
const path = require('path')
const readFileAsync = require('util').promisify(readFile)

const GIT_COMMIT_SHA_DEFAULT = 'No commit was passed into this build'

const getCommitHash = async () => {
  if (process.env.CI === 'true') {
    return null
  }

  let hash
  try {
    const head = await readFileAsync(path.join(__dirname, '../.git/HEAD'))
    const branchName = head.toString().trim().slice(16)
    hash = await readFileAsync(path.join(__dirname, `../.git/refs/heads/${branchName}`))
  } catch (e) {
    hash = GIT_COMMIT_SHA_DEFAULT
  }


  return hash.toString().trim()
}

export default getCommitHash
