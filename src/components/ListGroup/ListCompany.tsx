import { useEffect, useState } from "react";

// @ts-ignore
import { apiCompany } from "@tecno/api";
// @ts-ignore
import { Table } from "@tecno/styleguide";

const ListCompany = () => {
  useEffect(() => {
    document.title = "Lista de empresas";
    fetchData();
  }, []);

  const [companyList, setCompanyList] = useState([]);

  useEffect(() => {
    document.title = "Lista de clientes";
    fetchData();
  }, []);

  const fetchData = async () => {
    const response: any = await apiCompany(
      "GET",
      "search/codigoIbgeUf%3D32",
      null
    );
    const list = response.data.map((item: any) => ({
      key: item.id,
      columns: [item.razaoSocial, item.nomeFantasia, item.cnpj],
    }));
    setCompanyList(list);
  };

  return (
    <Table
      header={["Razão Social", "Nome Fantasia", "CNPJ"]}
      rows={companyList}
      title={"Lista de empresas"}
    />
  );
};

export default ListCompany;
