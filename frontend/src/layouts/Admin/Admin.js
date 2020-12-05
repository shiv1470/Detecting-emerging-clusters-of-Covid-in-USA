/*!

=========================================================
* Black Dashboard React v1.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/black-dashboard-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/black-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
// javascript plugin used to create scrollbars on windows
import PerfectScrollbar from "perfect-scrollbar";

// core components
import AdminNavbar from "components/Navbars/AdminNavbar.js";
import Footer from "components/Footer/Footer.js";
import Sidebar from "components/Sidebar/Sidebar.js";
import FixedPlugin from "components/FixedPlugin/FixedPlugin.js";
import Dashboard from "../../views/Dashboard";
import axios from "axios";

import routes from "routes.js";

import logo from "assets/img/react-logo.png";

var ps;

class Admin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      backgroundColor: "blue",
      places: [],
      algorithm: "satscan",
      center: { lat: 40.5, lng: -110 },
      psoParameter: {
        noOfIteration: "",
        pValue: "",
        overlappingThreshold: "",
        county: "",
        numOfCentriods: 0,
      },
      sidebarOpened:
        document.documentElement.className.indexOf("nav-open") !== -1,
    };
  }

  psoParameterChangeHandler = (event, field) => {
    const parameter = { ...this.state.psoParameter };
    parameter[field] = event.target.value;
    this.setState({ psoParameter: parameter });
  };

  transFormedData = (data) => {
    const transData = data.map((place, index) => {
      return {
        id: index + 1,
        name: "Park Slope",
        latitude: place.centre[0],
        longitude: place.centre[1],
        circle: {
          radius: place.radius * 12392,
          options: {
            fillColor: "#000",
            fillOpacity: 0.4,
            strokeColor: "#000",
            strokeOpacity: 1,
            strokeWeight: 1,
          },
        },
      };
    });
    return transData;
  };

  fetchSatScan = () => {
    axios
      .get("http://localhost:4000/app/satscan")
      .then((result) => {
        const places = this.transFormedData(result.data);
        this.setState({ places, algorithm: "satscan" });
      })

      .catch((err) => alert(err));
  };

  fetchPSO = () => {
    axios
      .post("http://localhost:4000/app/pso", this.state.psoParameter)
      .then((result) => {
        const places = this.transFormedData(result.data);
        this.setState({
          places,
          algorithm: "pso",
        });
      })

      .catch((err) => alert(err));
  };
  componentDidMount() {
    if (navigator.platform.indexOf("Win") > -1) {
      document.documentElement.className += " perfect-scrollbar-on";
      document.documentElement.classList.remove("perfect-scrollbar-off");
      ps = new PerfectScrollbar(this.refs.mainPanel, { suppressScrollX: true });
      let tables = document.querySelectorAll(".table-responsive");
      for (let i = 0; i < tables.length; i++) {
        ps = new PerfectScrollbar(tables[i]);
      }
    }
    this.fetchSatScan();
  }
  componentWillUnmount() {
    if (navigator.platform.indexOf("Win") > -1) {
      ps.destroy();
      document.documentElement.className += " perfect-scrollbar-off";
      document.documentElement.classList.remove("perfect-scrollbar-on");
    }
  }
  componentDidUpdate(e) {
    if (e.history.action === "PUSH") {
      if (navigator.platform.indexOf("Win") > -1) {
        let tables = document.querySelectorAll(".table-responsive");
        for (let i = 0; i < tables.length; i++) {
          ps = new PerfectScrollbar(tables[i]);
        }
      }
      document.documentElement.scrollTop = 0;
      document.scrollingElement.scrollTop = 0;
      this.refs.mainPanel.scrollTop = 0;
    }
  }
  // this function opens and closes the sidebar on small devices
  toggleSidebar = () => {
    document.documentElement.classList.toggle("nav-open");
    this.setState({ sidebarOpened: !this.state.sidebarOpened });
  };
  getRoutes = (routes) => {
    return routes.map((prop, key) => {
      if (prop.layout === "/admin") {
        return (
          <Route
            path={prop.layout + prop.path}
            component={prop.component}
            key={key}
          />
        );
      } else {
        return null;
      }
    });
  };
  handleBgClick = (color) => {
    this.setState({ backgroundColor: color });
  };
  getBrandText = (path) => {
    for (let i = 0; i < routes.length; i++) {
      if (
        this.props.location.pathname.indexOf(
          routes[i].layout + routes[i].path
        ) !== -1
      ) {
        return routes[i].name;
      }
    }
    return "Brand";
  };
  render() {
    return (
      <>
        <div className="wrapper">
          <Sidebar
            {...this.props}
            routes={routes}
            bgColor={this.state.backgroundColor}
            logo={{
              outterLink: "#",
              text: "DCS",
              imgSrc: logo,
            }}
            toggleSidebar={this.toggleSidebar}
          />
          <div
            className="main-panel"
            ref="mainPanel"
            data={this.state.backgroundColor}
          >
            <AdminNavbar
              {...this.props}
              brandText={this.getBrandText(this.props.location.pathname)}
              toggleSidebar={this.toggleSidebar}
              sidebarOpened={this.state.sidebarOpened}
            />
            <Dashboard
              places={this.state.places}
              center={this.state.center}
              algorithm={this.state.algorithm}
              satscanHandler={this.fetchSatScan}
              psoHandler={this.fetchPSO}
            />
            {/* <Switch>
              {this.getRoutes(routes)}
              <Redirect from="*" to="/admin/dashboard" />
            </Switch> */}
            {
              // we don't want the Footer to be rendered on map page
              this.props.location.pathname.indexOf("maps") !== -1 ? null : (
                <Footer fluid />
              )
            }
          </div>
        </div>
        <FixedPlugin
          bgColor={this.state.backgroundColor}
          handleBgClick={this.handleBgClick}
          psoParameterChangeHandler={this.psoParameterChangeHandler}
          submitHandler={this.fetchPSO}
        />
      </>
    );
  }
}

export default Admin;
