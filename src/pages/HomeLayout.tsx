import { Header, Loading, Navbar } from "@/components";

import { Outlet, useNavigation } from "react-router-dom";

function HomeLayout() {
  const navigation = useNavigation();
  // console.log(navigation);
  const isPageLoading = navigation.state === "loading";

  return (
    <>
      <Header></Header>
      <Navbar></Navbar>
      <div className="align-element py-20">
        {isPageLoading ? <Loading></Loading> : <Outlet></Outlet>}
      </div>
    </>
  );
}
export default HomeLayout;
