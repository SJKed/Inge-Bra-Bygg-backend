class ControllerError extends Error{}

class NotFound extends ControllerError{
  constructor(message){
    super()
    this.message = `${message} not found`
    this.errorCode = 404
  }
}

class Forbidden extends ControllerError{
  constructor(){
    super()
    this.message = 'Aja baja, no can do'
    this.errorCode = 403
  }
}

class BadLogin extends ControllerError{
  constructor(){
    super()
    this.message = `We couldn't find a match for that username and password`
    this.errorCode = 401
  }
}

class UnsupportedFileType extends ControllerError{
  constructor(message){
    super()
    this.message = message
    this.errorCode = 415
  }
}

class FileExists extends ControllerError{
  constructor(fileName){
    super()
    this.message = `${fileName} already exists. Please change the name and upload again`
    this.errorCode = 500
  }
}

class Unauthorized extends ControllerError{
  constructor(){
    super()
    this.message = `You're not authorized to preform this action`
    this.errorCode = 401
  }
}

class BadRequest extends ControllerError{
  constructor(...message){
    super()
    this.message = `missing ${message.join(', ')}`
    this.errorCode = 400
  }
}

module.exports = {
  ControllerError,
  NotFound,
  Forbidden,
  BadLogin,
  UnsupportedFileType,
  FileExists,
  Unauthorized,
  BadRequest
}
