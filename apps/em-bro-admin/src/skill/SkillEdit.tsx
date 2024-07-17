import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { SkillLevelTitle } from "../skillLevel/SkillLevelTitle";
import { ObjectiveTitle } from "../objective/ObjectiveTitle";
import { FormationTitle } from "../formation/FormationTitle";

export const SkillEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="name" source="name" />
        <ReferenceArrayInput
          source="skillLevels"
          reference="SkillLevel"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={SkillLevelTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="objectives"
          reference="Objective"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={ObjectiveTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="formations"
          reference="Formation"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={FormationTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Edit>
  );
};
