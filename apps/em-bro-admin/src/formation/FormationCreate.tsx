import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { SkillTitle } from "../skill/SkillTitle";

export const FormationCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="description" multiline source="description" />
        <ReferenceInput source="skill.id" reference="Skill" label="Skill">
          <SelectInput optionText={SkillTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
