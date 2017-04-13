# hapi-decorator-luizalabs

> **About**

> This project is Hapi's decorator for luizalabs' pattern.

## Usage

To sucesses response:
```
function service (request, reply) {
  reply.success();
}
```

To error response:
```
function service (request, reply) {
  let err = new Error('Bad Request');
  err.userMessage = "Bad Request";
  err.developerMessage = "Bad Request";
  err.errorCode = 20000;
  err.moreInfo = "";

  reply.error(err);
}
```

More informations, options, parameters in the [usage documentation page](docs/index.html)

### 1) Fork the repository
[Click here to fork the repository](https://bitbucket.org/aldooliveira-luizalabs/hapi-decorator-luizalabs)

>OBS: Talk with the staff to fork the correct branch that you are working at the current moment.

### 2) Set up the environment
#### Install the projects dependencies. In the forked folder install the dependencies:
```
npm install
```
## Documentation
* [docs/README](index.html)

## Staff
- [Aldo Oliveira](https://github.com/aldooliveira-luizalabs) - Developer

## FIXME
- Using your IDE search in all files for the string "FIXME" to search update on code
