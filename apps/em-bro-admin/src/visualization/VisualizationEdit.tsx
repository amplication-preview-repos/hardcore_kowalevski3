import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  SelectInput,
  ReferenceInput,
} from "react-admin";
import { CollaboratorTitle } from "../collaborator/CollaboratorTitle";

export const VisualizationEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <div />
        <SelectInput
          source="typeField"
          label="type"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <ReferenceInput
          source="collaborator.id"
          reference="Collaborator"
          label="Collaborator"
        >
          <SelectInput optionText={CollaboratorTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
