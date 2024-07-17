import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  SelectInput,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { SkillLevelTitle } from "../skillLevel/SkillLevelTitle";
import { VisualizationTitle } from "../visualization/VisualizationTitle";

export const CollaboratorEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <SelectInput
          source="seniority"
          label="seniority"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <TextInput label="lastname" source="lastname" />
        <TextInput label="firstname" source="firstname" />
        <ReferenceArrayInput
          source="skillLevels"
          reference="SkillLevel"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={SkillLevelTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="visualizations"
          reference="Visualization"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={VisualizationTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Edit>
  );
};
