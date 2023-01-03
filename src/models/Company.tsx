export class Company {
  id: string;
  empresaId: string;
  razaoSocial: string;
  nomeFantasia: string;
  cnpj: string;
  inscricaoEstadual: string;
  inscricaoMunicipal: string;
  tipoRegime: string;
  crt: string;
  email: string;
  site: string;
  contato: string;
  dataConstituicao: Date;
  tipo: string;
  inscricaoJuntaComercial: string;
  dataInscJuntaComercial: Date;
  codigoIbgeCidade: number;
  codigoIbgeUf: number;
  cei: string;
  codigoCnaePrincipal: string;
  empresaEnderecoPrincipalId: string;

  constructor({
    id,
    empresaId,
    razaoSocial,
    nomeFantasia,
    cnpj,
    inscricaoEstadual,
    inscricaoMunicipal,
    tipoRegime,
    crt,
    email,
    site,
    contato,
    dataConstituicao,
    tipo,
    inscricaoJuntaComercial,
    dataInscJuntaComercial,
    codigoIbgeCidade,
    codigoIbgeUf,
    cei,
    codigoCnaePrincipal,
    empresaEnderecoPrincipalId,
  }) {
    this.id = id;
    this.empresaId = empresaId;
    this.razaoSocial = razaoSocial;
    this.nomeFantasia = nomeFantasia;
    this.cnpj = cnpj;
    this.inscricaoEstadual = inscricaoEstadual;
    this.inscricaoMunicipal = inscricaoMunicipal;
    this.tipoRegime = tipoRegime;
    this.crt = crt;
    this.email = email;
    this.site = site;
    this.contato = contato;
    this.dataConstituicao = dataConstituicao;
    this.tipo = tipo;
    this.inscricaoJuntaComercial = inscricaoJuntaComercial;
    this.dataInscJuntaComercial = dataInscJuntaComercial;
    this.codigoIbgeCidade = codigoIbgeCidade;
    this.codigoIbgeUf = codigoIbgeUf;
    this.cei = cei;
    this.codigoCnaePrincipal = codigoCnaePrincipal;
    this.empresaEnderecoPrincipalId = empresaEnderecoPrincipalId;
  }

  static serialize(obj: Company) {
    return JSON.stringify(obj);
  }

  static deserialize(json: any) {
    return new Company(json);
  }
}
