import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  NumberInput,
} from "react-admin";

export const ProductEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="Description" multiline source="description" />
        <TextInput label="Images" source="images" />
        <NumberInput label="Price" source="price" />
        <TextInput label="Title" source="title" />
      </SimpleForm>
    </Edit>
  );
};
