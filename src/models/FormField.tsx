interface FormField {
  value: any;
  key: string;
  label: string;
  type: "text" | "number" | "password" | "date";
  placeholder?: string;
}
