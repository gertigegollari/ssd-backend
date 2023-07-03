import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  NumberInput,
} from "react-admin";

export const ProductCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Description" multiline source="description" />
        <TextInput label="Images" source="images" />
        <NumberInput label="Price" source="price" />
        <TextInput label="Title" source="title" />
      </SimpleForm>
    </Create>
  );
};
