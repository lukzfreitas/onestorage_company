import { useState } from "react";
import FormRegister from "./components/Forms/FormRegister";
import ListCompany from "./components/ListGroup/ListCompany";
// @ts-ignore
import { Tab } from "@tecno/styleguide";

const Main = () => {
  const Register = 0;
  const List = 1;
  const menuItens = [
    { key: Register, label: "Cadastro de empresas" },
    { key: List, label: "Lista de empresas" },
  ];

  const [menuSelected, setMenuSelected]: [number, Function] =
    useState(Register);

  return (
    <div style={{ height: "92vh", overflow: "hidden", overflowY: "scroll" }}>
      <Tab
        menuSelected={menuSelected}
        menuItens={menuItens}
        onSelectMenuItem={(key: number) => setMenuSelected(key)}
      />
      {menuSelected == List ? <ListCompany /> : <FormRegister />}
    </div>
  );
};

export default Main;
