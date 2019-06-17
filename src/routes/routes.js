import DashboardLayout from "@/pages/Layout/DashboardLayout.vue";

import UserList from "../pages/User/UserList";
import RoleList from "../pages/User/RoleList";
import ResumeList from "../pages/GetResume/ResumeList";
import ProjectRequire from "../pages/Require/ProjectRequire";
import ProjectManage from "../pages/Project/ProjectManage";
import GetResume from "../pages/GetResume/GetResume";
import OperationList from "../pages/User/OperationList"


const routes = [
  {
    path: "/",
    component: DashboardLayout,
    redirect: "/table",
    children: [
        {
            path: "user",
            name: "新增简历",
            component: GetResume
        },
      {
        path: "table",
        name: "用户信息列表",
        component: UserList
      },
      {
        path: "role",
        name: "角色用户关联",
        component: RoleList
      },
        {
            path: "operation",
            name: "操作记录查看",
            component: OperationList
        },
      {
        path: "resume",
        name: "简历管理",
        component: ResumeList
      },
      {
        path: "projectRequire",
        name: "需求查询/列表",
        component: ProjectRequire
      },
      {
        path: "projectManage",
        name: "项目管理",
        component: ProjectManage
      },
    ]
  }
];

export default routes;
