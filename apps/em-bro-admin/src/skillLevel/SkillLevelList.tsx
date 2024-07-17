import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  DateField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { COLLABORATOR_TITLE_FIELD } from "../collaborator/CollaboratorTitle";
import { SKILL_TITLE_FIELD } from "../skill/SkillTitle";

export const SkillLevelList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"SkillLevels"}
      perPage={50}
      pagination={<Pagination />}
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
    </List>
  );
};
