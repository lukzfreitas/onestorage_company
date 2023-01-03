export class Address {
  logradouro: string;
  numero: string;
  bairro: string;
  cidade: string;
  uf: string;
  cep: string;
  municipioIbge: number;
  complemento: string;

  constructor({
    logradouro,
    numero,
    bairro,
    cidade,
    uf,
    cep,
    municipioIbge,
    complemento,
  }) {
    this.logradouro = logradouro;
    this.numero = numero;
    this.bairro = bairro;
    this.cidade = cidade;
    this.uf = uf;
    this.cep = cep;
    this.municipioIbge = municipioIbge;
    this.complemento = complemento;
  }
}

export class AddressCompany {
  principal: Address;
  entrega: Address;
  cobranca: Address;
  correspondencia: Address;

  constructor(
    principal: Address,
    entrega: Address,
    cobranca: Address,
    correspondencia: Address
  ) {
    this.principal = principal;
    this.entrega = entrega;
    this.cobranca = cobranca;
    this.correspondencia = correspondencia;
  }
}
