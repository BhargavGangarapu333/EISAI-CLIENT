import { Department } from "./department";

 export class  Mapper {
  static mapDepartmentsData(response: Department[]) {
    const departmentsList: Department[] = [];
    if (response !== undefined && response !== null) {
      response.forEach(department => {
        const dept = new Department();
        dept.deptId = department['deptId'];
        dept.deptName = department['deptName'];
        dept.deptCode = department['deptCode'];
        departmentsList.push(dept);
      });
    }
    return departmentsList;
  }
}
