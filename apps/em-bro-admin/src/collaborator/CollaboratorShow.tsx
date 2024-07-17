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

import { COLLABORATOR_TITLE_FIELD } from "./CollaboratorTitle";
import { SKILL_TITLE_FIELD } from "../skill/SkillTitle";

export const CollaboratorShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="seniority" source="seniority" />
        <TextField label="lastname" source="lastname" />
        <TextField label="firstname" source="firstname" />
        <ReferenceManyField
          reference="SkillLevel"
          target="collaboratorId"
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
          reference="Visualization"
          target="collaboratorId"
          label="Visualizations"
        >
          <Datagrid rowClick="show">
            <TextField label="ID" source="id" />
            <DateField source="createdAt" label="Created At" />
            <DateField source="updatedAt" label="Updated At" />
            <TextField label="data" source="data" />
            <TextField label="type" source="typeField" />
            <ReferenceField
              label="Collaborator"
              source="collaborator.id"
              reference="Collaborator"
            >
              <TextField source={COLLABORATOR_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
