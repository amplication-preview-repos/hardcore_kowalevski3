import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  NumberInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { CollaboratorTitle } from "../collaborator/CollaboratorTitle";
import { SkillTitle } from "../skill/SkillTitle";

export const SkillLevelEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <NumberInput step={1} label="level" source="level" />
        <ReferenceInput
          source="collaborator.id"
          reference="Collaborator"
          label="Collaborator"
        >
          <SelectInput optionText={CollaboratorTitle} />
        </ReferenceInput>
        <ReferenceInput source="skill.id" reference="Skill" label="Skill">
          <SelectInput optionText={SkillTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
