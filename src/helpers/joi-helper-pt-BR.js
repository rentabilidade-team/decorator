'use strict';

module.exports.errorMessages = {
  root: 'value',
  key: '"{{!key}}" ',
  messages: {
    wrapArrays: true
  },
  any: {
    unknown: 'não é permitido',
    invalid: 'contém um valor inválido',
    empty: 'não permite valor vazio',
    required: 'é obrigatório',
    allowOnly: 'deve ser uma das seguintes opções: {{valids}}',
    default: 'threw an error when running default method'
  },
  alternatives: {
    base: 'não encontrado entre as alternativas validas'
  },
  array: {
    base: 'deve ser um array',
    includes: 'Na posição {{pos}} não corresponde a nenhum dos tipos permitidos',
    includesSingle: 'valor único de "{{!key}}" não corresponde a nenhum dos tipos permitidos',
    includesOne: 'Na posição {{pos}} falhou porque {{reason}}',
    includesOneSingle: 'valor único de "{{!key}}" falhou porque {{reason}}',
    includesRequiredUnknowns: 'Não contém  {{unknownMisses}} valor(es) requerido(s)',
    includesRequiredKnowns: 'Não contém {{knownMisses}}',
    includesRequiredBoth: 'Não contém {{knownMisses}} e {{unknownMisses}} outros valor(es) requerido(s)',
    excludes: 'Na posição {{pos}} contém um valor excluído',
    excludesSingle: 'valor único de "{{!key}}" contém um valor excluído',
    min: 'deve conter pelo menos {{limit}} itens',
    max: 'deve conter menos {{limit}} itens ou ser igual à {{limit}}',
    length: 'deve conter {{limit}} itens',
    ordered: 'Na posição {{pos}} falhou porque {{reason}}',
    orderedLength: 'Na posição {{pos}} falhou porque o array deve conter no máximo {{limit}} itens',
    sparse: 'não pode ser um array disperso',
    unique: 'Posição {{pos}} contém um valor duplicado'
  },
  boolean: {
    base: 'deve ser um valor booleano'
  },
  binary: {
    base: 'deve ser um `buffer` ou uma `string`',
    min: 'deve ter pelo menos {{limit}} bytes',
    max: 'deve ter menos do que {{limit}} bytes',
    length: 'deve ter {{limit}} bytes'
  },
  date: {
    base: 'deve ser um número em milisegundos ou uma data válida',
    min: 'deve ser maior ou igual a "{{limit}}"',
    max: 'deve ser menor ou igual a "{{limit}}"',
    isoDate: 'deve ser uma data valida no formato ISO 8601',
    timestamp: {
      javascript: 'deve ser uma data e hora valida ou um número em milisegundos',
      unix: 'deve ser uma data e hora valida ou um número em segundos'
    },
    ref: 'referência "{{ref}}" que não é uma data'
  },
  function: {
    base: 'deve ser uma função must be a Function',
    arity: 'deve ter uma aridade de {{n}}',
    minArity: 'deve ter uma aridade maior ou igual a {{n}}',
    maxArity: 'deve ter uma aridade menor ou igual a {{n}}'
  },
  object: {
    base: 'deve ser um objeto',
    child: 'filho "{{!key}}" falhou porque {{reason}}',
    min: 'deve ter pelo menos {{limit}} filho(s)',
    max: 'deve ter menos do que ou ser igual {{limit}} filho(s)',
    length: 'deve ter {{limit}} filho(s)',
    allowUnknown: 'não é permitido',
    with: 'falta uma informação requerida "{{peer}}"',
    without: 'informação proibida "{{peer}}"',
    missing: 'deve conter pelo menos um {{peers}}',
    xor: 'contém conflito entre informações exclusivas {{peers}}',
    or: 'deve conter pelo menos um {{peers}}',
    and: 'contém {{present}} sem o requerido {{missing}}',
    nand: '!!"{{main}}" não pode existir simultaneamente com {{peers}}',
    assert: '!!"{{ref}}" validação falhou porque "{{ref}}" falhou para {{message}}',
    rename: {
      multiple: 'impossível renomear filho "{{from}}" porque múltiplos nomes estão desabilitados e outra chave já renomeou para "{{to}}"',
      override: 'impossível renomear filho "{{from}}" porque sobrescrita esta desabilitada e o destino "{{to}}" existe'
    },
    type: 'deve ser uma instância "{{type}}"'
  },
  number: {
    base: 'deve ser um número',
    min: 'deve ser maior do que ou igual a {{limit}}',
    max: 'deve ser menor do que ou igual a {{limit}}',
    less: 'deve ser menor do que {{limit}}',
    greater: 'deve ser maior do que {{limit}}',
    float: 'deve ser um float ou double',
    integer: 'deve ser um inteiro',
    negative: 'deve ser um número negativo',
    positive: 'deve ser um número positivo',
    precision: 'não deve ter mais do que {{limit}} casas decimais',
    ref: 'referência "{{ref}}" que é ndecorator hapiot um número',
    multiple: 'deve ser multiplo de {{multiple}}'
  },
  string: {
    base: 'deve ser uma string',
    min: 'tamanho deve ter ao menos {{limit}} characters long',
    max: 'length must be less than or equal to {{limit}} caracteres',
    length: 'deve ter {{limit}} caracteres',
    alphanum: 'deve conter apenas caracteres alfa numéricos',
    token: 'deve conter apenas caracteres alfa numéricos e underline caracter',
    regex: {
      base: 'com o valor "{{!value}}" falhou na validação com o padrão: {{pattern}}',
      name: 'com o valor "{{!value}}" falhou ao validar com o padrão {{name}}'
    },
    email: 'deve ser um e-mail valido',
    uri: 'deve ser uma uri valida',
    uriCustomScheme: 'deve ser uma uri valida e coincidindo com o padrão {{scheme}}',
    isoDate: 'deve ser uma data valida no formato ISO 8601',
    guid: 'deve ser um GUID válido',
    hex: 'deve conter apenas hexadecimal caracteres',
    hostname: 'deve conter um hostname válido',
    lowercase: 'deve conter apenas caracteres em letras minúsculas',
    uppercase: 'deve conter apenas caracteres em letras maiúsculas',
    trim: 'não pode conter espaços em branco no início ou fim',
    creditCard: 'deve ser um cartão de crédito',
    ref: 'referência "{{ref}}" não é um número',
    ip: 'deve ser um endereço de IP valido de acordo com {{cidr}} CIDR',
    ipVersion: 'deve ser um endereço de IP valido seguindo a versão {{version}} de acordo com {{cidr}} CIDR'
  }
};