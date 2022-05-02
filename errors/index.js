class ByggError extends Error{}

class InvalidFile extends ByggError{
  constructor(message){
    super()
    this.message = message
    this.errorCode = 400
  }
}
class FileExists extends ByggError{
  constructor(fileName){
    super()
    this.message = fileName + " already exists. Please change the name and upload again"
    this.errorCode = 500
  }
}

module.exports = {
  ByggError,
  InvalidFile,
  FileExists
}