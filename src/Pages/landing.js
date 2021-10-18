import Button from "../Components/Button/Button";
import Menubar from "../Components/Menubar/Menubar";
import Profile from "../Components/Profile/Profile";
import Table from "../Components/Table/Table";

function Landing() {
  return (
    <div className="flex flex-row">
      <Menubar></Menubar>
      <div className="flex flex-col p-10 w-screen">
        <Profile></Profile>
        <Button></Button>
        <Table></Table>
      </div>
    </div>
  );
};
export default Landing;