import { useSelector } from "react-redux";
import Button from "./Button";
import UserList from "./UserList";

const Main = () => {
  const { users } = useSelector((store) => store.user);
  // console.log(users);

  return (
    <>
      <Button>Add User</Button>

      <div className="grid gap-5 md:grid-cols-2">
        {users.length ? 
          <UserList /> 
            : 
          <p className="text-center col-span-2 font-semibold text-gray-700">No User</p>
        }
      </div>
    </>
  );
}

export default Main;