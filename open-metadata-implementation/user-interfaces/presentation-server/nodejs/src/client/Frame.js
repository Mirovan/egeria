/* SPDX-License-Identifier: Apache-2.0 */
/* Copyright Contributors to the ODPi Egeria project. */
import React, { useContext } from "react";
import Search20 from "@carbon/icons-react/lib/search/20";
import Notification20 from "@carbon/icons-react/lib/notification/20";
import AppSwitcher20 from "@carbon/icons-react/lib/app-switcher/20";
import HeaderContainer from "carbon-components-react/lib/components/UIShell/HeaderContainer";
import { Content } from "carbon-components-react/lib/components/UIShell";
import { Link, Route, Switch } from "react-router-dom";
import Egeriawhite110 from "./images/Egeria_logo_white_110";
import Home from "./components/Home";
import GlossaryAuthor from "./components/GlossaryAuthor/GlossaryAuthor";
import RepositoryExplorer from "./components/RepositoryExplorer/RepositoryExplorer";
import TypeExplorer from "./components/TypeExplorer/TypeExplorer";
import Dino from "./components/Dino/Dino";
import ServerAuthor from "./components/ServerAuthor/ServerAuthor";
import { IdentificationContext } from "./contexts/IdentificationContext";

import {
  Header,
  HeaderMenuButton,
  HeaderName,
  HeaderGlobalBar,
  HeaderGlobalAction,
  SkipToContent,
  SideNav,
  SideNavItems,
  SideNavLink,
  SideNavMenu,
} from "carbon-components-react/lib/components/UIShell";

export default function Frame() {
  const identificationContext = useContext(IdentificationContext);
  console.log("Frame context", { identificationContext });
  const rootUrl = identificationContext.getBrowserURL("");
  const homeUrl = identificationContext.getBrowserURL("home");
  const glossaryAuthorUrl = identificationContext.getBrowserURL(
    "glossary-author"
  );
  const rexUrl = identificationContext.getBrowserURL("repository-explorer");
  const typeUrl = identificationContext.getBrowserURL("type-explorer");
  const serverUrl = identificationContext.getBrowserURL("server-author");
  const dinoUrl = identificationContext.getBrowserURL("dino");

  return (
    <div className="container">
      <HeaderContainer
        render={({ isSideNavExpanded, onClickSideNavExpand }) => (
          <>
            <Header aria-label="Egeria governance solutions">
              <SkipToContent />
              <HeaderMenuButton
                aria-label="Open menu"
                onClick={onClickSideNavExpand}
                isActive={isSideNavExpanded}
              />
              <HeaderName href="#" prefix="">
                <Egeriawhite110 />
              </HeaderName>

              <HeaderGlobalBar>
                <HeaderGlobalAction aria-label="Search" onClick={() => {}}>
                  <Search20 />
                </HeaderGlobalAction>
                <HeaderGlobalAction
                  aria-label="Notifications"
                  onClick={() => {}}
                >
                  <Notification20 />
                </HeaderGlobalAction>
                <HeaderGlobalAction
                  aria-label="App Switcher"
                  onClick={() => {}}
                >
                  <AppSwitcher20 />
                </HeaderGlobalAction>
              </HeaderGlobalBar>
              <SideNav
                aria-label="Side navigation"
                expanded={isSideNavExpanded}
              >
                <SideNavItems>
                  <SideNavLink element={Link} to={homeUrl} isActive>
                    Home
                  </SideNavLink>
                  <SideNavMenu title="Solutions" defaultExpanded="true">
                    <SideNavLink
                      // uncomment (and import) if we want to show the icon
                      // renderIcon={EgeriaGlossAuth32}
                      element={Link}
                      to={glossaryAuthorUrl}
                    >
                      Glossary Author
                    </SideNavLink>
                  </SideNavMenu>
                  <SideNavMenu title="Ecosystem Tools" defaultExpanded="true">
                    <SideNavLink element={Link} to={rexUrl}>
                      Repository Explorer
                    </SideNavLink>
                    <SideNavLink element={Link} to={typeUrl}>
                      Type Explorer
                    </SideNavLink>
                    <SideNavLink element={Link} to={serverUrl}>
                      Server Author
                    </SideNavLink>
                    <SideNavLink element={Link} to={dinoUrl}>
                      Dino
                    </SideNavLink>
                  </SideNavMenu>
                </SideNavItems>
              </SideNav>
            </Header>

            <Content id="main-content">
              <div className="bx--row">
                <section className="bx--offset-lg-3 bx--col-lg-13">
                  <Route path={rootUrl} exact>
                    <Home />
                  </Route>
                  <Route path={homeUrl}>
                    <Home />
                  </Route>
                  <Route path={glossaryAuthorUrl}>
                    <GlossaryAuthor />
                  </Route>
                  <Route path={rexUrl}>
                    <RepositoryExplorer />
                  </Route>
                  <Route path={typeUrl}>
                    <TypeExplorer />
                  </Route>
                  <Route path={serverUrl}>
                    <ServerAuthor />
                  </Route>
                  <Route path={dinoUrl}>
                    <Dino />
                  </Route>
                </section>
              </div>
            </Content>
          </>
        )}
      />
    </div>
  );
}
