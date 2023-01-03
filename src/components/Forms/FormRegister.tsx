import { useState } from "react";
import { saveAddressCompanyApi, saveCompanyApi } from "../../api/handle_api";
import { Address, AddressCompany } from "../../models/Address";
import { Company } from "../../models/Company";
import FormAddress from "./FormAddress";
import FormCompany from "./FormCompany";
// @ts-ignore
import { Button, Title, Tab } from "@tecno/styleguide";

const FormRegister = () => {
  const AddressMainMenu = 0;
  const AddressDeliverMenu = 1;
  const AddressChargeMenu = 2;
  const AddressMailMenu = 3;

  const menuItens = [
    { key: AddressMainMenu, label: "Endereço principal" },
    { key: AddressDeliverMenu, label: "Endereço de entrega" },
    { key: AddressChargeMenu, label: "Endereço de cobrança" },
    { key: AddressMailMenu, label: "Endereço de correspondência" },
  ];

  const [menuSelected, setMenuSelected]: [number, Function] =
    useState(AddressMainMenu);

  const [formCompany, setFormCompany]: [FormField[], Function] = useState([
    {
      value: "Isaac e Giovana Financeira Ltda",
      key: "razaoSocial",
      label: "Razão Social",
      type: "text",
      placeholder: "Informe a razão social",
    },
    {
      value: "Isaac e Giovana Financeira Ltda",
      key: "nomeFantasia",
      label: "Nome Fantasia",
      type: "text",
      placeholder: "Informe o nome fantasia",
    },
    {
      value: "70.091.285/0001-07",
      key: "cnpj",
      label: "CNPJ",
      type: "text",
      placeholder: "Informe o CNPJ"      
    },
    {
      value: "989.890.417.715",
      key: "inscricaoEstadual",
      label: "Inscricao Estadual",
      type: "text",
    },
    {
      value: "989.890.417.715",
      key: "inscricaoMunicipal",
      label: "Inscricao Municipal",
      type: "text",
    },
    {
      value: "1 - Simples Nacional",
      key: "tipoRegime",
      label: "Tipo Regime",
      type: "text",
    },
    { value: "123", key: "crt", label: "CRT", type: "text" },
    {
      value: "faleconosco@isaacegiovanafinanceiraltda.com.br",
      key: "email",
      label: "E-mail",
      type: "text",
    },
    {
      value: "www.isaacegiovanafinanceiraltda.com.br",
      key: "site",
      label: "Site",
      type: "text",
    },
    { value: "(11) 3692-7778", key: "contato", label: "Contato", type: "text" },
    {
      value: "2022-06-26",
      key: "dataConstituicao",
      label: "Data Constituição",
      type: "date",
    },
    { value: "1", key: "tipo", label: "Tipo", type: "text" },
    {
      value: "989.890.417.715",
      key: "inscricaoJuntaComercial",
      label: "Inscrição Junta Comercial",
      type: "text",
    },
    {
      value: "2022-06-26",
      key: "dataInscJuntaComercial",
      label: "Data Inscrição Junta Comercial",
      type: "date",
    },
    {
      value: "12",
      key: "codigoIbgeCidade",
      label: "Código IBGE Cidade",
      type: "text",
    },
    { value: "32", key: "codigoIbgeUf", label: "Código IBGE UF", type: "text" },
    { value: "123", key: "cei", label: "CEI", type: "text" },
    {
      value: "123",
      key: "codigoCnaePrincipal",
      label: "Código CNAE",
      type: "text",
    },
  ]);

  const [formAddressMain, setFormAddressMain]: [FormField[], Function] =
    useState([
      {
        value: "Rua endereço principal",
        key: "logradouro",
        label: "Logradouro",
        type: "text",
      },
      { value: "123", key: "numero", label: "Número", type: "text" },
      {
        value: "Centro Histórico",
        key: "bairro",
        label: "Bairro",
        type: "text",
      },
      { value: "Porto Alegre", key: "cidade", label: "Cidade", type: "text" },
      { value: "RS", key: "uf", label: "UF", type: "text" },
      { value: "90022-999", key: "cep", label: "CEP", type: "text" },
      {
        value: "123",
        key: "municipioIbge",
        label: "Município IBGE",
        type: "text",
      },
      { value: "444", key: "complemento", label: "Complemento", type: "text" },
    ]);

  const [formAddressDeliver, setFormAddressDeliver]: [FormField[], Function] =
    useState([
      {
        value: "Rua endereço entrega",
        key: "logradouro",
        label: "Logradouro",
        type: "text",
      },
      { value: "123", key: "numero", label: "Número", type: "text" },
      {
        value: "Centro Histórico",
        key: "bairro",
        label: "Bairro",
        type: "text",
      },
      { value: "Porto Alegre", key: "cidade", label: "Cidade", type: "text" },
      { value: "RS", key: "uf", label: "UF", type: "text" },
      { value: "90022-999", key: "cep", label: "CEP", type: "text" },
      {
        value: "123",
        key: "municipioIbge",
        label: "Município IBGE",
        type: "text",
      },
      { value: "444", key: "complemento", label: "Complemento", type: "text" },
    ]);

  const [formAddressCharge, setFormAddressCharge]: [FormField[], Function] =
    useState([
      {
        value: "Rua endereço cobrança",
        key: "logradouro",
        label: "Logradouro",
        type: "text",
      },
      { value: "123", key: "numero", label: "Número", type: "text" },
      {
        value: "Centro Histórico",
        key: "bairro",
        label: "Bairro",
        type: "text",
      },
      { value: "Porto Alegre", key: "cidade", label: "Cidade", type: "text" },
      { value: "RS", key: "uf", label: "UF", type: "text" },
      { value: "90022-999", key: "cep", label: "CEP", type: "text" },
      {
        value: "123",
        key: "municipioIbge",
        label: "Município IBGE",
        type: "text",
      },
      { value: "444", key: "complemento", label: "Complemento", type: "text" },
    ]);

  const [formAddressMail, setFormAddressMail]: [FormField[], Function] =
    useState([
      {
        value: "Rua endereço correspondência",
        key: "logradouro",
        label: "Logradouro",
        type: "text",
      },
      { value: "123", key: "numero", label: "Número", type: "text" },
      {
        value: "Centro Histórico",
        key: "bairro",
        label: "Bairro",
        type: "text",
      },
      { value: "Porto Alegre", key: "cidade", label: "Cidade", type: "text" },
      { value: "RS", key: "uf", label: "UF", type: "text" },
      { value: "90022-999", key: "cep", label: "CEP", type: "text" },
      {
        value: "123",
        key: "municipioIbge",
        label: "Município IBGE",
        type: "text",
      },
      { value: "444", key: "complemento", label: "Complemento", type: "text" },
    ]);

  const submit = (e: any) => {
    e.preventDefault();
    saveAddress();
    saveCompany();
  };

  const saveAddress = async () => {
    const addressMain = new Address(
      formAddressMain.reduce(
        (_, form): any => ({ ..._, [form.key]: form.value }),
        {}
      )
    );
    const addressDeliver = new Address(
      formAddressDeliver.reduce(
        (_, form): any => ({ ..._, [form.key]: form.value }),
        {}
      )
    );
    const addressCharge = new Address(
      formAddressCharge.reduce(
        (_, form): any => ({ ..._, [form.key]: form.value }),
        {}
      )
    );
    const addressMail = new Address(
      formAddressMail.reduce(
        (_, form): any => ({ ..._, [form.key]: form.value }),
        {}
      )
    );
    const addressCompany = new AddressCompany(
      addressMain,
      addressDeliver,
      addressCharge,
      addressMail
    );
    await saveAddressCompanyApi(addressCompany);
  };

  const saveCompany = async () => {
    const company = new Company(
      formCompany.reduce(
        (_, form): any => ({ ..._, [form.key]: form.value }),
        {}
      )
    );
    await saveCompanyApi(company);
  };

  const Actions = () => {
    return (
      <div className="col-sm">
        <div className="col-sm">
          <div className="form-group float-right">
            <Button title="Limpar formulário" type="reset" style="danger" />
            <Button title="Salvar" type="submit" style="primary" />
          </div>
        </div>
      </div>
    );
  };

  const renderAddress = (params: number) => {
    switch (params) {
      case AddressMainMenu:
        return (
          <FormAddress key={AddressMainMenu} formFieldList={formAddressMain} />
        );
      case AddressDeliverMenu:
        return (
          <FormAddress
            key={AddressDeliverMenu}
            formFieldList={formAddressDeliver}
          />
        );
      case AddressChargeMenu:
        return (
          <FormAddress
            key={AddressChargeMenu}
            formFieldList={formAddressCharge}
          />
        );
      case AddressMailMenu:
        return (
          <FormAddress key={AddressMailMenu} formFieldList={formAddressMail} />
        );
    }
  };

  return (
    <div className="row p-3">
      <div className="col-sm">
        <Title label="Cadastro de Empresas" />
        <form onSubmit={submit}>
          <FormCompany
            formFieldList={formCompany}
            setFormField={setFormCompany}
          />
          <Tab
            menuSelected={menuSelected}
            menuItens={menuItens}
            onSelectMenuItem={(key: number) => setMenuSelected(key)}
          />
          {renderAddress(menuSelected)}
          <Actions />
        </form>
      </div>
    </div>
  );
};

export default FormRegister;
