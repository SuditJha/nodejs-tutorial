# Day 1 
## Date - 20 Feb 2024

### Client and Server 

### Import and Export
- Learned About import and exports in 

### Module Wrapper Fn
#### Systax
```
function(exports, require, module, __filename, __dirname){
    //The code automatically wrapped by this function
    const sudit = {
        name: "Sudit",
        age: 23,
        developer: true
    }
    console.log(exports, require, module, __filename, __dirname)
    module.exports  = sudit
}
```

### OS Module 
#### (Built-in NodeJS module)

This module contains functions that tells us about info of our OS on which the program is currently _RUNNING_.

```
const os = require('os')

console.log(os.freemem()) // Displays Free Memory
console.log(os.homedir()) // Displays home directory
console.log(os.hostname()) //Displays Host name (codespaces-d9dce1)
console.log(os.platform()) // Displays platform - linux
console.log(os.release()) // Release Version - 6.2.0-1019-azure 
console.log(os.type()) // OS type - Linux
```

### Path Module 
#### (Built-in NodeJS module)

```
const path = require('path')
path.basename()
path.dirname()
path.extname(__filename) // gives extension of file
```

### FS(File System) Module 
#### (Built-in NodeJS module)