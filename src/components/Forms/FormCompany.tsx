// @ts-ignore
import { RowForm } from "@tecno/styleguide";

interface FormCompanyProps {
  formFieldList: FormField[];
  setFormField: Function;
}

const FormCompany = (props: FormCompanyProps) => {
  const setValue = (index: number, value: any) => {
    let form = props.formFieldList;
    form[index].value = value;
    props.setFormField(form);
  };

  return (
    <>
      {props.formFieldList.map((_, index) => {
        var nextIndex = index * 2 + 1;
        index = index * 2;
        if (index < props.formFieldList.length - 1) {
          return (
            <RowForm
              key={index}
              col1={props.formFieldList[index]}
              col2={props.formFieldList[nextIndex]}
              onChangeCol1={(value: any) => setValue(index, value)}
              onChangeCol2={(value: any) => setValue(nextIndex, value)}
            />
          );
        }
      })}
    </>
  );
};

export default FormCompany;
