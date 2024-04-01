import axios from "axios";
const UserServices=
{
  getuser: ():Promise<any>=> {
    const data  =  axios.get(
      `http://localhost:5000/user`,
      );
      return data;
      ;
    }

}
export default  UserServices