const fs = require('fs')
const path = require('path')
const {UnsupportedFileType, FileExists, Unauthorized, Forbidden} = require('../errors')

module.exports = {
  getAll: (req, res) => {
    const images = fs.readdirSync(path.join('public', 'images'))
    res.json({images})
  },
  
  upload: (req, res) => {
    if(req.user.userRole == 'client') { throw new Unauthorized }
    if(!req.files.image.mimetype.startsWith('image/')){ 
      throw new UnsupportedFileType('Only images are supported') 
    }
    
    if(fs.existsSync(path.join('public','images', req.files.image.name))){
      throw new FileExists(req.files.image.name)
    }
    
    fs.copyFileSync(req.files.image.tempFilePath, path.join('public','images', req.files.image.name))
    
    res.json({message: 'Image uploaded'})
  }
}