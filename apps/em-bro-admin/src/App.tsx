import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { CollaboratorList } from "./collaborator/CollaboratorList";
import { CollaboratorCreate } from "./collaborator/CollaboratorCreate";
import { CollaboratorEdit } from "./collaborator/CollaboratorEdit";
import { CollaboratorShow } from "./collaborator/CollaboratorShow";
import { ManagerList } from "./manager/ManagerList";
import { ManagerCreate } from "./manager/ManagerCreate";
import { ManagerEdit } from "./manager/ManagerEdit";
import { ManagerShow } from "./manager/ManagerShow";
import { ProgressionList } from "./progression/ProgressionList";
import { ProgressionCreate } from "./progression/ProgressionCreate";
import { ProgressionEdit } from "./progression/ProgressionEdit";
import { ProgressionShow } from "./progression/ProgressionShow";
import { SkillList } from "./skill/SkillList";
import { SkillCreate } from "./skill/SkillCreate";
import { SkillEdit } from "./skill/SkillEdit";
import { SkillShow } from "./skill/SkillShow";
import { OneOnOneMeetingList } from "./oneOnOneMeeting/OneOnOneMeetingList";
import { OneOnOneMeetingCreate } from "./oneOnOneMeeting/OneOnOneMeetingCreate";
import { OneOnOneMeetingEdit } from "./oneOnOneMeeting/OneOnOneMeetingEdit";
import { OneOnOneMeetingShow } from "./oneOnOneMeeting/OneOnOneMeetingShow";
import { VisualizationList } from "./visualization/VisualizationList";
import { VisualizationCreate } from "./visualization/VisualizationCreate";
import { VisualizationEdit } from "./visualization/VisualizationEdit";
import { VisualizationShow } from "./visualization/VisualizationShow";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { SkillLevelList } from "./skillLevel/SkillLevelList";
import { SkillLevelCreate } from "./skillLevel/SkillLevelCreate";
import { SkillLevelEdit } from "./skillLevel/SkillLevelEdit";
import { SkillLevelShow } from "./skillLevel/SkillLevelShow";
import { FormationList } from "./formation/FormationList";
import { FormationCreate } from "./formation/FormationCreate";
import { FormationEdit } from "./formation/FormationEdit";
import { FormationShow } from "./formation/FormationShow";
import { ObjectiveList } from "./objective/ObjectiveList";
import { ObjectiveCreate } from "./objective/ObjectiveCreate";
import { ObjectiveEdit } from "./objective/ObjectiveEdit";
import { ObjectiveShow } from "./objective/ObjectiveShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"EMBro"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="Collaborator"
          list={CollaboratorList}
          edit={CollaboratorEdit}
          create={CollaboratorCreate}
          show={CollaboratorShow}
        />
        <Resource
          name="Manager"
          list={ManagerList}
          edit={ManagerEdit}
          create={ManagerCreate}
          show={ManagerShow}
        />
        <Resource
          name="Progression"
          list={ProgressionList}
          edit={ProgressionEdit}
          create={ProgressionCreate}
          show={ProgressionShow}
        />
        <Resource
          name="Skill"
          list={SkillList}
          edit={SkillEdit}
          create={SkillCreate}
          show={SkillShow}
        />
        <Resource
          name="OneOnOneMeeting"
          list={OneOnOneMeetingList}
          edit={OneOnOneMeetingEdit}
          create={OneOnOneMeetingCreate}
          show={OneOnOneMeetingShow}
        />
        <Resource
          name="Visualization"
          list={VisualizationList}
          edit={VisualizationEdit}
          create={VisualizationCreate}
          show={VisualizationShow}
        />
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
        <Resource
          name="SkillLevel"
          list={SkillLevelList}
          edit={SkillLevelEdit}
          create={SkillLevelCreate}
          show={SkillLevelShow}
        />
        <Resource
          name="Formation"
          list={FormationList}
          edit={FormationEdit}
          create={FormationCreate}
          show={FormationShow}
        />
        <Resource
          name="Objective"
          list={ObjectiveList}
          edit={ObjectiveEdit}
          create={ObjectiveCreate}
          show={ObjectiveShow}
        />
      </Admin>
    </div>
  );
};

export default App;
