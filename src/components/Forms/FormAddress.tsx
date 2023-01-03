import { useState } from "react";
// @ts-ignore
import { RowForm } from "@tecno/styleguide";

interface FormAddressProps {
  formFieldList: FormField[];
}

const FormAddress = (props: FormAddressProps) => {
  const [formFieldList, setFormFieldList] = useState(props.formFieldList);

  const setValue = (index: number, value: any) => {
    let form = props.formFieldList;
    form[index].value = value;
    setFormFieldList(form);
  };

  return (
    <>
      {formFieldList.map((_, index) => {
        var nextIndex = index * 2 + 1;
        index = index * 2;
        if (index < formFieldList.length - 1) {
          return (
            <RowForm
              key={index}
              col1={formFieldList[index]}
              col2={formFieldList[nextIndex]}
              onChangeCol1={(value: any) => setValue(index, value)}
              onChangeCol2={(value: any) => setValue(nextIndex, value)}
            />
          );
        }
      })}
    </>
  );
};

export default FormAddress;
