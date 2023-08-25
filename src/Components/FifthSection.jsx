import React from "react";
import style from "./FifthSection.module.css";
import ContentDos from "./ContentDos";
import Qualidade from "./Qualidade";
import Conversao from "./Conversao";
import Tecnologia from "./Tecnologias";
import '../App.css'

import "./dos.css";

const Tabeamento = () => {
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <div className={style.containerfifthSection}>
        <div>
          <p
            style={{
              fontSize: "52px",
              fontWeight: "600",
              lineHeight: "initial",
            }}
          >
            <span>Preciso de uma equipe </span>
           
            de marketing completo ?
          </p>
          <p style={{ margin: "0px" }}>Nada disso !</p>
          <p style={{ color: "#525252", marginBottom: "40px" }}>
            O que Adianta ter muitos colaboradores em um projeto sem uma
            estrategia clara
          </p>
        </div>
        <div style={{ width: "100%", display: "flex", flexDirection: "column", alignItems: "center"}} class="row">
          <div style={{width: '100%'}} class="col-3">
            <div
              class="nav flex-column nav-pills"
              id="v-pills-tab"
              role="tablist"
              aria-orientation="vertical"
            >
              <a
                className={style.nav}
                class="nav-link active"
                id="v-pills-first-tab"
                data-toggle="pill"
                href="#v-pills-home"
                role="tab"
                aria-controls="v-pills-home"
                aria-selected="true"
              >
                Custo Benefício
              </a>

              <a
                className={style.nav}
                class="nav-link"
                id="v-pills-especializacao-tab"
                data-toggle="pill"
                href="#v-pills-especializacao"
                role="tab"
                aria-controls="v-pills-especializacao"
                aria-selected="false"
              >
                Tecnologias
              </a>
              <a
                className={style.nav}
                class="nav-link"
                id="v-pills-resultados-mensuraveis-tab"
                data-toggle="pill"
                href="#v-pills-resultados-mensuraveis"
                role="tab"
                aria-controls="v-pills-resultados-mensuraveis"
                aria-selected="false"
              >
                Conversão Eficaz
              </a>
              <a
                className={style.nav}
                class="nav-link"
                id="v-pills-core-business-tab"
                data-toggle="pill"
                href="#v-pills-core-business"
                role="tab"
                aria-controls="v-pills-core-business"
                aria-selected="false"
              >
                Qualidade
              </a>
              
            </div>
          </div>
          <div class="col-9">
            <div class="tab-content" id="v-pills-tabContent">
              <div
                class="tab-pane fade show active"
                id="v-pills-home"
                role="tabpanel"
                aria-labelledby="v-pills-home-tab"
              >
                <ContentDos />
              </div>
              <div
                class="tab-pane fade"
                id="v-pills-especializacao"
                role="tabpanel"
                aria-labelledby="v-pills-especializacao-tab"
              >
                <Tecnologia />
              </div>
              <div
                class="tab-pane fade"
                id="v-pills-resultados-mensuraveis"
                role="tabpanel"
                aria-labelledby="v-pills-resultados-mensuraveis-tab"
              >
                <Conversao />
              </div>
              <div
                class="tab-pane fade"
                id="v-pills-core-business"
                role="tabpanel"
                aria-labelledby="v-pills-core-business-tab"
              >
                <Qualidade />
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tabeamento;
