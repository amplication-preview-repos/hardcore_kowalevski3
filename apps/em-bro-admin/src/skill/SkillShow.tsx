import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { COLLABORATOR_TITLE_FIELD } from "../collaborator/CollaboratorTitle";
import { SKILL_TITLE_FIELD } from "./SkillTitle";

export const SkillShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="name" source="name" />
        <ReferenceManyField
          reference="SkillLevel"
          target="skillId"
          label="SkillLevels"
        >
          <Datagrid rowClick="show">
            <TextField label="ID" source="id" />
            <DateField source="createdAt" label="Created At" />
            <DateField source="updatedAt" label="Updated At" />
            <TextField label="level" source="level" />
            <ReferenceField
              label="Collaborator"
              source="collaborator.id"
              reference="Collaborator"
            >
              <TextField source={COLLABORATOR_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField label="Skill" source="skill.id" reference="Skill">
              <TextField source={SKILL_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="Objective"
          target="skillId"
          label="Objectives"
        >
          <Datagrid rowClick="show">
            <TextField label="ID" source="id" />
            <DateField source="createdAt" label="Created At" />
            <DateField source="updatedAt" label="Updated At" />
            <TextField label="description" source="description" />
            <ReferenceField label="Skill" source="skill.id" reference="Skill">
              <TextField source={SKILL_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="Formation"
          target="skillId"
          label="Formations"
        >
          <Datagrid rowClick="show">
            <TextField label="ID" source="id" />
            <DateField source="createdAt" label="Created At" />
            <DateField source="updatedAt" label="Updated At" />
            <TextField label="description" source="description" />
            <ReferenceField label="Skill" source="skill.id" reference="Skill">
              <TextField source={SKILL_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
