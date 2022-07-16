import React from "react";
import { Route } from "react-router-dom";
import DetailsUser from "./components/DetailsUser/DetailsUser.jsx";
import LandingPage from "./components/LandingPage/LandingPage.jsx";
import HomeAdmin from "./components/HomeAdmin/HomeAdmin.jsx";
import NavBar from "./components/NavBar/NavBar";
import { Inscription }  from "./components/Inscription/Inscription.jsx";
import { Users } from "./components/Users/Users.jsx";
import { FormScore } from "./components/FormScore/FormScore.jsx";
import { FormSponsor } from "./components/FormSponsor/FormSponsor.jsx";
import { FormTournament } from "./components/Tournament/FormTournament.jsx";
import  LogIn  from "./components/LogIn/LogIn.jsx";
import {FormUserRegister} from "./components/FormUserRegister/FormUserRegister.jsx"
import ControlPanel from "./components/controlPanel/ControlPanel.jsx";
import ProfileUser from "./components/Profile/ProfileUser/ProfileUser.jsx";
import RouteGuard from "./components/RouteGuard/RouteGuard.js";
import CreateGallery from "./components/Gallery/CreateGallery/CreateGallery.jsx";

function App() {
  return (
    <div className="App">
      <Route path={"/"} component={NavBar} />
      <RouteGuard exact path={"/Users"} component={Users} admin={false} />
      <RouteGuard
        exact
        path={"/HomeAdmin"}
        component={HomeAdmin}
        admin={true}
      />
      {/* <Route exact path={"/HomeAdmin"} component={HomeAdmin} /> */}
      <Route exact path={"/"} component={LandingPage} />
      <Route exact path={"/Users/:userId"} component={DetailsUser} />
      <Route exact path={"/CreateScore/:userId"} component={FormScore} />
      <Route exact path={"/sponsor"} component={FormSponsor} />
      <Route exact path={"/tournament"} component={FormTournament} />
      <Route exact path={"/inscription/:tournament_id"} component = {Inscription}/>
      <Route exact path={"/login"} component={LogIn} />
      <Route exact path={"/cpanel"} component={ControlPanel}/>
      <Route exact path={"/SignIn"} component={FormUserRegister}/>
      <Route exact path={"/Profile/:userId"} component={ProfileUser}/>
      {/* ////////////////ImagesFromDataBase/////////// */}
      <Route exact path={"/CreateGallery"} component={CreateGallery}/>
      {/* ////////////////ImagesFromDataBase/////////// */}
      <Route exact path={"/cpanel"} component={ControlPanel} />
      <Route exact path={"/SignIn"} component={FormUserRegister} />
      <Route exact path={"/Profile/:userId"} component={ProfileUser} />
    </div>
  );
}

export default App;
