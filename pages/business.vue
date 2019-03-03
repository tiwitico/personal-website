<template>
    <section>
        <div id="business-header">
            <div class="container">
                <h1>Business</h1>
                <p>I will put my business idea regarding my agency in here.</p>
            </div>
        </div>
        <div id="business-grid">
            <div class="container">
                <div class="row">
                    <div class="col-sm-12 col-md-4">
                        <a class="business-grid-item business-grid-odd" @click="showModal('bmcModal')">
                            <span>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 480 480">
                                    <path class="business-grid-bmc-icon" d="m96 88c.003906-4.414062 3.585938-7.996094 8-8h272c4.414062.003906 7.996094 3.585938 8 8v8h16v-8c-.015625-13.25-10.75-23.984375-24-24h-104v-40c-.015625-13.25-10.75-23.984375-24-24h-16c-13.25.015625-23.984375 10.75-24 24v40h-104c-13.25.015625-23.984375 10.75-24 24v8h16zm128-64c.003906-4.414062 3.585938-7.996094 8-8h16c4.414062.003906 7.996094 3.585938 8 8v40h-32zm0 0" fill="#FFFFFF"/>
                                    <path class="business-grid-bmc-icon" d="m424 376h-24v-40h-16v40h-288v-40h-16v40h-24c-13.25.015625-23.984375 10.75-24 24v8c.015625 13.25 10.75 23.984375 24 24h56v48h16v-48h224v48h16v-48h56c13.25-.015625 23.984375-10.75 24-24v-8c-.015625-13.25-10.75-23.984375-24-24zm8 32c-.003906 4.414062-3.585938 7.996094-8 8h-368c-4.414062-.003906-7.996094-3.585938-8-8v-8c.003906-4.414062 3.585938-7.996094 8-8h368c4.414062.003906 7.996094 3.585938 8 8zm0 0" fill="#FFFFFF"/>
                                    <path class="business-grid-bmc-icon" d="m208 296v-160c-.015625-13.25-10.75-23.984375-24-24h-160c-13.25.015625-23.984375 10.75-24 24v160c.015625 13.25 10.75 23.984375 24 24h160c13.25-.015625 23.984375-10.75 24-24zm-192 0v-160c.003906-4.414062 3.585938-7.996094 8-8h160c4.414062.003906 7.996094 3.585938 8 8v160c-.003906 4.414062-3.585938 7.996094-8 8h-160c-4.414062-.003906-7.996094-3.585938-8-8zm0 0" fill="#FFFFFF"/>
                                    <path class="business-grid-bmc-icon" d="m136 336v8c.007812 8.832031 7.167969 15.992188 16 16h168c13.25-.015625 23.984375-10.75 24-24v-160c-.015625-13.25-10.75-23.984375-24-24h-96v16h96c4.414062.003906 7.996094 3.585938 8 8v160c-.003906 4.414062-3.585938 7.996094-8 8h-168v-8zm0 0" fill="#FFFFFF"/>
                                    <path class="business-grid-bmc-icon" d="m456 112h-160c-8.832031.007812-15.992188 7.167969-16 16v8h16v-8h160c4.414062.003906 7.996094 3.585938 8 8v160c-.003906 4.414062-3.585938 7.996094-8 8h-96v16h96c13.25-.015625 23.984375-10.75 24-24v-160c-.015625-13.25-10.75-23.984375-24-24zm0 0" fill="#FFFFFF"/>
                                    <path class="business-grid-bmc-icon" d="m64 240v-64h-16v64c-8.832031.007812-15.992188 7.167969-16 16v16c.007812 8.832031 7.167969 15.992188 16 16h16c8.832031-.007812 15.992188-7.167969 16-16h56v-16h-56c-.007812-8.832031-7.167969-15.992188-16-16zm0 32h-16v-16h16zm0 0" fill="#FFFFFF"/>
                                    <path class="business-grid-bmc-icon" d="m48 144h16v16h-16zm0 0" fill="#FFFFFF"/>
                                    <path class="business-grid-bmc-icon" d="m152 256h16v16h-16zm0 0" fill="#FFFFFF"/>
                                    <path class="business-grid-bmc-icon" d="m112 192v-16h-16v16c-8.832031.007812-15.992188 7.167969-16 16v16c.007812 8.832031 7.167969 15.992188 16 16h16c8.832031-.007812 15.992188-7.167969 16-16h8v-16h-8c-.007812-8.832031-7.167969-15.992188-16-16zm-16 32v-16h16l.011719 16zm0 0" fill="#FFFFFF"/>
                                    <path class="business-grid-bmc-icon" d="m96 144h16v16h-16zm0 0" fill="#FFFFFF"/>
                                    <path class="business-grid-bmc-icon" d="m152 208h16v16h-16zm0 0" fill="#FFFFFF"/>
                                    <path class="business-grid-bmc-icon" d="m280 232c8.832031-.007812 15.992188-7.167969 16-16h16v-16h-16c-.007812-8.832031-7.167969-15.992188-16-16h-16c-8.832031.007812-15.992188 7.167969-16 16h-16v16h16c.007812 8.832031 7.167969 15.992188 16 16v64h16zm-16-32h16l.011719 16h-16.011719zm0 0" fill="#FFFFFF"/>
                                    <path class="business-grid-bmc-icon" d="m264 312h16v16h-16zm0 0" fill="#FFFFFF"/>
                                    <path class="business-grid-bmc-icon" d="m400 256h-8v16h8c.007812 8.832031 7.167969 15.992188 16 16h16c8.832031-.007812 15.992188-7.167969 16-16v-16c-.007812-8.832031-7.167969-15.992188-16-16v-48c8.832031-.007812 15.992188-7.167969 16-16v-16c-.007812-8.832031-7.167969-15.992188-16-16h-16c-8.832031.007812-15.992188 7.167969-16 16h-8v16h8c.007812 8.832031 7.167969 15.992188 16 16v48c-8.832031.007812-15.992188 7.167969-16 16zm15.988281-96h16.011719v16h-16zm16.011719 112h-16l-.011719-16h16.011719zm0 0" fill="#FFFFFF"/>
                                    <path class="business-grid-bmc-icon" d="m360 256h16v16h-16zm0 0" fill="#FFFFFF"/>
                                    <path class="business-grid-bmc-icon" d="m360 160h16v16h-16zm0 0" fill="#FFFFFF"/>
                                </svg>
                                <h4 class="business-grid-item-text">
                                    Business Model Canvas
                                </h4>
                            </span>
                        </a>
                        <b-modal centered ref="bmcModal" size="lg" hide-footer title="Business Model Canvas">
                            <p>Business Model Canvas is a strategic management and lean startup template for developing new or documenting existing business models. It is a visual chart with elements describing a firm's or product's value proposition, infrastructure, customers, and finances. It assists firms in aligning their activities by illustrating potential trade-offs.</p>
                            <div class="d-block text-center">
                                <img src="@/static/blog.jpg" alt="Business Model Canvas">
                            </div>
                            <b-btn class="mt-3" variant="outline-danger" block @click="hideModal('bmcModal')">Close Me</b-btn>
                        </b-modal>
                    </div>
                    <div class="col-sm-12 col-md-4">
                        <a class="business-grid-item business-grid-even" @click="showModal('elevatorModal')">
                            <span>
                                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 480 480" style="enable-background:new 0 0 480 480;" xml:space="preserve">
                                    <path d="M160,0C93.726,0,40,53.726,40,120v88c0.035,30.913,25.087,55.965,56,56h8v-16h-8c-22.08-0.026-39.974-17.92-40-40v-88    c0-57.438,46.562-104,104-104s104,46.562,104,104v88c-0.026,22.08-17.92,39.974-40,40h-8v16h8c30.913-0.035,55.965-25.087,56-56    v-88C280,53.726,226.274,0,160,0z" fill="#FFFFFF"/>
                                    <path d="M65.928,377.032l5.848-9.208l-13.512-8.576l-5.848,9.216c-17.687,27.872-16.374,63.76,3.304,90.264V480h16v-24    c0.001-1.817-0.617-3.581-1.752-5C52.96,429.738,51.337,400.02,65.928,377.032z" fill="#FFFFFF"/>
                                    <path d="M440,0H336c-22.08,0.026-39.974,17.92-40,40v80c0.026,22.08,17.92,39.974,40,40h16v32    c-0.001,3.235,1.947,6.153,4.936,7.392c0.971,0.405,2.012,0.611,3.064,0.608c2.122,0,4.156-0.844,5.656-2.344L403.312,160H440    c22.08-0.026,39.974-17.92,40-40V40C479.974,17.92,462.08,0.026,440,0z M464,120c0,13.255-10.745,24-24,24h-40    c-2.122,0-4.156,0.844-5.656,2.344L368,172.688V152c0-4.418-3.582-8-8-8h-24c-13.255,0-24-10.745-24-24V40    c0-13.255,10.745-24,24-24h104c13.255,0,24,10.745,24,24V120z" fill="#FFFFFF"/>
                                    <rect x="336" y="40" width="56" height="16" fill="#FFFFFF"/>
                                    <rect x="408" y="40" width="32" height="16" fill="#FFFFFF"/>
                                    <rect x="336" y="72" width="104" height="16" fill="#FFFFFF"/>
                                    <rect x="336" y="104" width="56" height="16" fill="#FFFFFF"/>
                                    <path d="M267.584,368.464l-5.848-9.216l-13.512,8.576l5.848,9.216c14.592,22.985,12.969,52.701-4.04,73.96    c-1.135,1.419-1.753,3.183-1.752,5v24h16v-21.272C283.958,432.224,285.271,396.336,267.584,368.464z" fill="#FFFFFF"/>
                                    <path d="M472,272h-72c-30.016,0.035-54.666,23.729-55.888,53.72L320,369.128V336c-0.035-30.913-25.087-55.965-56-56h-29.24    l-0.216-0.168L234.4,280H216c-8.837,0-16-7.163-16-16v-18.824c24.719-14.272,39.962-40.633,40-69.176v-64    c-0.012-13.255-3.31-26.3-9.6-37.968c-2.015-3.712-6.569-5.219-10.4-3.44L84.592,134.304c-2.804,1.32-4.593,4.141-4.592,7.24V176    c0.038,28.543,15.281,54.904,40,69.176V264c0,8.837-7.163,16-16,16H56c-30.913,0.035-55.965,25.087-56,56v144h16V336    c0.026-22.08,17.92-39.974,40-40h25.456l72.04,100.656c1.48,2.069,3.856,3.31,6.4,3.344H160c2.518,0,4.889-1.186,6.4-3.2l76-100.8    H264c22.08,0.026,39.974,17.92,40,40v64c0.004,4.418,3.589,7.997,8.007,7.993c2.902-0.003,5.575-1.576,6.985-4.113L356.704,336    h45.864l-78,144h18.2L420.8,336h3.2c30.913-0.035,55.965-25.087,56-56C480,275.582,476.418,272,472,272z M96,176v-29.376    l123.528-58.128C222.483,95.98,224,103.954,224,112v64c0,35.346-28.654,64-64,64C124.654,240,96,211.346,96,176z M160.168,378.496    L135.48,344h50.688L160.168,378.496z M198.272,328H124l-22.904-32H104c17.673,0,32-14.327,32-32v-11.688    c15.622,4.917,32.378,4.917,48,0V264c0,17.673,14.327,32,32,32h6.4L198.272,328z M424,320h-63.2    c3.825-18.613,20.198-31.979,39.2-32h63.2C459.375,306.613,443.002,319.979,424,320z" fill="#FFFFFF"/>
                                </svg>
                                <h4 class="business-grid-item-text">
                                    Elevator Pitch
                                </h4>
                            </span>
                        </a>
                        <b-modal centered ref="elevatorModal" size="sm" hide-footer title="Elevator Pitch">
                            <p>"Ordent helps small, medium businesses, and also organizations that have no online presence to design and build their online strategy that is better than most of software agencies because we provide maintenance services, localization support, and cloud management services for hosting".</p>
                            <b-btn class="mt-3" variant="outline-danger" block @click="hideModal('elevatorModal')">Close Me</b-btn>
                        </b-modal>
                    </div>
                    <div class="col-sm-12 col-md-4">
                        <a class="business-grid-item business-grid-odd" @click="showModal('personaModal')">
                            <span>
                                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 60 60" style="enable-background:new 0 0 60 60;" xml:space="preserve">
                                    <path d="M55.517,46.55l-9.773-4.233c-0.23-0.115-0.485-0.396-0.704-0.771l6.525-0.005c0.114,0.011,2.804,0.257,4.961-0.67  c0.817-0.352,1.425-1.047,1.669-1.907c0.246-0.868,0.09-1.787-0.426-2.523c-1.865-2.654-6.218-9.589-6.354-16.623  c-0.003-0.121-0.397-12.083-12.21-12.18c-1.739,0.014-3.347,0.309-4.81,0.853c-0.319-0.813-0.789-1.661-1.488-2.459  C30.854,3.688,27.521,2.5,23,2.5s-7.854,1.188-9.908,3.53c-2.368,2.701-2.148,5.976-2.092,6.525v5.319c-0.64,0.729-1,1.662-1,2.625  v4c0,1.217,0.553,2.352,1.497,3.109c0.916,3.627,2.833,6.36,3.503,7.237v3.309c0,0.968-0.528,1.856-1.377,2.32l-8.921,4.866  C1.801,46.924,0,49.958,0,53.262V57.5h44h2h14v-3.697C60,50.711,58.282,47.933,55.517,46.55z M44,55.5H2v-2.238  c0-2.571,1.402-4.934,3.659-6.164l8.921-4.866C16.073,41.417,17,39.854,17,38.155v-4.019l-0.233-0.278  c-0.024-0.029-2.475-2.994-3.41-7.065l-0.091-0.396l-0.341-0.22C12.346,25.803,12,25.176,12,24.5v-4c0-0.561,0.238-1.084,0.67-1.475  L13,18.728V12.5l-0.009-0.131c-0.003-0.027-0.343-2.799,1.605-5.021C16.253,5.458,19.081,4.5,23,4.5  c3.905,0,6.727,0.951,8.386,2.828c0.825,0.932,1.24,1.973,1.447,2.867c0.016,0.07,0.031,0.139,0.045,0.208  c0.014,0.071,0.029,0.142,0.04,0.21c0.013,0.078,0.024,0.152,0.035,0.226c0.008,0.053,0.016,0.107,0.022,0.158  c0.015,0.124,0.027,0.244,0.035,0.355c0.001,0.009,0.001,0.017,0.001,0.026c0.007,0.108,0.012,0.21,0.015,0.303  c0,0.018,0,0.033,0.001,0.051c0.002,0.083,0.002,0.162,0.001,0.231c0,0.01,0,0.02,0,0.03c-0.004,0.235-0.02,0.375-0.02,0.378  L33,18.728l0.33,0.298C33.762,19.416,34,19.939,34,20.5v4c0,0.873-0.572,1.637-1.422,1.899l-0.498,0.153l-0.16,0.495  c-0.669,2.081-1.622,4.003-2.834,5.713c-0.297,0.421-0.586,0.794-0.837,1.079L28,34.123v4.125c0,0.253,0.025,0.501,0.064,0.745  c0.008,0.052,0.022,0.102,0.032,0.154c0.039,0.201,0.091,0.398,0.155,0.59c0.015,0.045,0.031,0.088,0.048,0.133  c0.078,0.209,0.169,0.411,0.275,0.605c0.012,0.022,0.023,0.045,0.035,0.067c0.145,0.256,0.312,0.499,0.504,0.723l0.228,0.281h0.039  c0.343,0.338,0.737,0.632,1.185,0.856l9.553,4.776C42.513,48.374,44,50.78,44,53.457V55.5z M58,55.5H46v-2.043  c0-3.439-1.911-6.53-4.986-8.068l-6.858-3.43c0.169-0.386,0.191-0.828,0.043-1.254c-0.245-0.705-0.885-1.16-1.63-1.16h-2.217  c-0.046-0.081-0.076-0.17-0.113-0.256c-0.05-0.115-0.109-0.228-0.142-0.349C30.036,38.718,30,38.486,30,38.248v-3.381  c0.229-0.28,0.47-0.599,0.719-0.951c1.239-1.75,2.232-3.698,2.954-5.799C35.084,27.47,36,26.075,36,24.5v-4  c0-0.963-0.36-1.896-1-2.625v-5.319c0.026-0.25,0.082-1.069-0.084-2.139c1.288-0.506,2.731-0.767,4.29-0.78  c9.841,0.081,10.2,9.811,10.21,10.221c0.147,7.583,4.746,14.927,6.717,17.732c0.169,0.24,0.22,0.542,0.139,0.827  c-0.046,0.164-0.178,0.462-0.535,0.615c-1.68,0.723-3.959,0.518-4.076,0.513h-6.883c-0.643,0-1.229,0.327-1.568,0.874  c-0.338,0.545-0.37,1.211-0.086,1.783c0.313,0.631,0.866,1.474,1.775,1.927l9.747,4.222C56.715,49.396,58,51.482,58,53.803V55.5z" fill="#FFFFFF"/>
                                </svg>
                                <h4 class="business-grid-item-text">
                                    Customer Persona
                                </h4>
                            </span>
                        </a>
                        <b-modal centered ref="personaModal" size="lg" hide-footer title="Customer Persona">
                            <p>Customer persona is fictional characters designers use to reflect customer types, pinpointing who they are and what they do with products in relevant contexts.</p>
                            <div class="d-block text-center">
                                <img src="@/static/customer_persona-min.jpg" alt="Customer Persona">
                            </div>
                            <b-btn class="mt-3" variant="outline-danger" block @click="hideModal('personaModal')">Close Me</b-btn>
                        </b-modal>
                    </div>
                    <div class="col-sm-12 col-md-4">
                        <a @click="showModal('empathyModal')" class="business-grid-item business-grid-even">
                            <span>
                                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 480 480" style="enable-background:new 0 0 480 480;" xml:space="preserve">
                                    <path d="M376,4c-57.438,0-104,46.562-104,104v6.56l-31.52,86.72c-0.878,2.439-0.521,5.152,0.96,7.28    c1.492,2.151,3.942,3.436,6.56,3.44h40v48c0,4.418,3.582,8,8,8h80v32c0,4.418,3.582,8,8,8h88c4.418,0,8-3.582,8-8V108    C480,50.562,433.438,4,376,4z M464,292h-72v-32c0-4.418-3.582-8-8-8h-80v-48c0-4.418-3.582-8-8-8h-36.56l28.08-77.28    c0.316-0.872,0.479-1.792,0.48-2.72v-8c0-48.601,39.399-88,88-88c48.601,0,88,39.399,88,88V292z" fill="#FFFFFF"/>
                                    <path d="M360.4,107.12c-11.804,11.779-30.916,11.779-42.72,0l-11.36,11.36c18.081,18.045,47.359,18.045,65.44,0L360.4,107.12z" fill="#FFFFFF"/>
                                    <path d="M239.52,369.28L208,282.56V276c0-57.438-46.562-104-104-104S0,218.562,0,276v192c0,4.418,3.582,8,8,8h88    c4.418,0,8-3.582,8-8v-32h80c4.418,0,8-3.582,8-8v-48h40c2.618-0.004,5.068-1.289,6.56-3.44    C240.041,374.432,240.398,371.719,239.52,369.28z M184,364c-4.418,0-8,3.582-8,8v48H96c-4.418,0-8,3.582-8,8v32H16V276    c0-48.601,39.399-88,88-88s88,39.399,88,88v8c0.001,0.928,0.164,1.848,0.48,2.72L220.56,364H184z" fill="#FFFFFF"/>
                                    <path d="M162.32,275.12c-11.804,11.779-30.916,11.779-42.72,0l-11.36,11.36c18.081,18.045,47.359,18.045,65.44,0L162.32,275.12z" fill="#FFFFFF"/>
                                    <path d="M128,68c-22.091,0-40,17.909-40,40v20.72l-10.32-10.4l-11.36,11.36l24,24c3.111,3.137,8.177,3.158,11.314,0.046    c0.016-0.015,0.031-0.031,0.046-0.046l24-24l-11.36-11.36L104,128.72V108c0-13.255,10.745-24,24-24h96V68H128z" fill="#FFFFFF"/>
                                    <rect x="240" y="68" width="16" height="16" fill="#FFFFFF"/>
                                    <path d="M437.68,326.32c-3.111-3.137-8.177-3.158-11.314-0.046c-0.016,0.015-0.031,0.031-0.046,0.046l-24,24l11.36,11.36    l10.32-10.4V388c0,13.255-10.745,24-24,24H240v16h160c22.091,0,40-17.909,40-40v-36.72l10.32,10.4l11.36-11.36L437.68,326.32z" fill="#FFFFFF"/>
                                    <rect x="208" y="412" width="16" height="16" fill="#FFFFFF"/>
                                </svg>
                                <h4 class="business-grid-item-text">
                                    Empathy Map
                                </h4>
                            </span>
                        </a>
                        <b-modal centered ref="empathyModal" size="lg" hide-footer title="Empathy Map">
                            <p>An empathy map is a collaborative tool teams can use to gain a deeper insight into their customers. Much like a user persona, an empathy map can represent a group of users, such as a customer segment. The empathy map was originally created by Dave Gray and has been gaining popularity with the agile community.</p>
                            <div class="d-block text-center">
                                <img src="@/static/empathy_map-min.jpg" alt="Empathy Map">
                            </div>
                            <b-btn class="mt-3" variant="outline-danger" block @click="hideModal('empathyModal')">Close Me</b-btn>
                        </b-modal>
                    </div>
                    <div class="col-sm-12 col-md-4">
                        <a @click="showModal('marketSizingModal')" class="business-grid-item business-grid-odd">
                            <span>
                                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Layer_1" x="0px" y="0px" viewBox="0 0 402.56 402.56" style="enable-background:new 0 0 402.56 402.56;" xml:space="preserve">
                                    <polygon points="38.613,234.88 38.4,274.56 96.64,274.56 116.693,265.173 9.6,372.48 39.68,402.56 147.2,295.253 137.813,316.587     137.813,373.76 177.493,374.187 177.493,234.88   " fill="#FFFFFF"/>
                                    <polygon points="306.987,128.213 285.653,137.6 392.96,30.08 362.88,0 255.573,107.307 264.96,87.04 264.96,28.8 225.28,29.013     225.28,167.893 364.587,167.893 364.16,128.213   " fill="#FFFFFF"/>
                                </svg>
                                <h4 class="business-grid-item-text">
                                    Market Sizing
                                </h4>
                            </span>
                        </a>
                        <b-modal centered ref="marketSizingModal" size="lg" hide-footer title="Market Sizing">
                            <div class="d-block text-center">
                                <h3>
                                    Top-Down Analysis
                                </h3>
                                <p>
                                    <b>MSMEs target</b><br>
                                    There are 59,4 million micro, small, and medium businesses in Indonesia.<br>
                                    Only 8% of MSMEs (3,79 million) in Indonesia has online presences.<br>
                                    Only 18% of MSMEs (682,200) that have online presences also have websites.<br>
                                    <b>There are 3,107,800 potential clients.</b>
                                </p>
                                <hr>
                                <p>
                                    <b>NGOs target</b><br>
                                    There are 2141 NGOs in Indonesia.<br>
                                    There are 54% NGOs that already have websites.<br>
                                    <b>There are 968 potential clients.</b>
                                </p>
                            </div>
                            <b-btn class="mt-3" variant="outline-danger" block @click="hideModal('marketSizingModal')">Close Me</b-btn>
                        </b-modal> 
                    </div>
                    <div class="col-sm-12 col-md-4">
                        <a @click="showModal('swotModal')" class="business-grid-item business-grid-even">
                            <span>
                                <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                                    viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve">
                                        <path d="M505.418,34.829c-1.288-1.529-3.131-2.484-5.123-2.654l-111.428-9.517L386.847,6.6c-0.52-4.131-4.299-7.059-8.42-6.54
                                            L275.06,13.056c-0.407-0.106-0.824-0.186-1.258-0.223L131.726,0.697c-4.091-0.36-7.805,2.786-8.153,6.869l-2.118,24.8
                                            L11.406,46.202c-4.072,0.512-7.051,4.345-6.54,8.42L61.04,501.43c0.255,2.038-0.182,3.996,0.651,5.967
                                            c1.168,2.761,3.948,4.604,6.947,4.604h369.909c4.165,0,7.539-3.374,7.539-7.539v-9.819l14.601,1.247
                                            c4.091,0.355,7.805-2.784,8.153-6.869L507.163,40.33C507.334,38.337,506.707,36.359,505.418,34.829z M61.099,381.023
                                            L20.768,60.221l40.331-5.07V381.023z M137.955,16.362l65.98,5.635l-67.182,8.447L137.955,16.362z M372.828,15.961l3.852,30.637
                                            H129.129L372.828,15.961z M454.459,480.225l-8.373-0.715V259.195c0-4.164-3.374-7.539-7.539-7.539s-7.539,3.374-7.539,7.539
                                            v237.727H76.177V61.676h354.832v162.338c0,4.165,3.374,7.539,7.539,7.539s7.539-3.374,7.539-7.539V54.137
                                            c0-4.164-3.374-7.539-7.539-7.539h-46.671l-1.087-8.643l100.709,8.602L454.459,480.225z"/>
                                        <path d="M398.34,86.806h-40.208c-2.521,0-4.875,1.259-6.272,3.357l-17.064,25.596c-18.367-13.157-40.854-20.912-65.12-20.912
                                            c-4.164,0-7.539,3.374-7.539,7.539v104.54c0,4.164,3.374,7.539,7.539,7.539h104.54c4.165,0,7.539-3.374,7.539-7.539
                                            c0-32.097-13.566-61.081-35.26-81.533l15.673-23.509h36.173c4.164,0,7.539-3.374,7.539-7.539S402.504,86.806,398.34,86.806z
                                            M366.387,199.387h-89.172v-89.172c18.283,1.412,35.15,7.932,49.206,18.107l-6.727,10.091c-2.101,3.15-1.485,7.513,1.417,9.95
                                            c3.398,2.854,8.669,2.101,11.128-1.586l5.757-8.636C354.025,154.063,364.543,175.527,366.387,199.387z"/>
                                        <path d="M398.34,336.092h-68.195l-12.016-19.225c19.465-20.17,31.459-47.598,31.459-77.775c0-4.165-3.374-7.539-7.539-7.539
                                            h-97.001v-97.001c0-4.164-3.375-7.539-7.539-7.539c-61.8,0-112.079,50.279-112.079,112.079c0,61.8,50.279,112.079,112.079,112.079
                                            c26.123,0,50.185-8.984,69.264-24.023l12.8,20.48c1.378,2.204,3.794,3.543,6.393,3.543h72.374c4.164,0,7.539-3.374,7.539-7.539
                                            S402.504,336.092,398.34,336.092z M292.153,275.304c-2.206-3.533-6.859-4.605-10.389-2.398c-3.531,2.206-4.605,6.858-2.398,10.389
                                            l19.364,30.982c-16.709,13.631-38.026,21.817-61.22,21.817c-53.486,0-97.001-43.515-97.001-97.001
                                            c0-50.95,39.485-92.851,89.462-96.711v96.711c0,4.164,3.375,7.539,7.539,7.539h96.711c-1.684,21.801-10.608,41.604-24.362,57.004
                                            L292.153,275.304z"/>
                                        <path d="M173.177,376.3h-64.332c-4.163,0-7.539,3.374-7.539,7.539s3.375,7.539,7.539,7.539h64.332
                                            c4.164,0,7.539-3.374,7.539-7.539S177.341,376.3,173.177,376.3z"/>
                                        <path d="M269.676,376.3h-64.332c-4.164,0-7.539,3.374-7.539,7.539s3.375,7.539,7.539,7.539h64.332
                                            c4.164,0,7.539-3.374,7.539-7.539S273.84,376.3,269.676,376.3z"/>
                                        <path d="M213.385,416.508h-104.54c-4.163,0-7.539,3.374-7.539,7.539c0,4.165,3.375,7.539,7.539,7.539h104.54
                                            c4.164,0,7.539-3.374,7.539-7.539C220.924,419.882,217.548,416.508,213.385,416.508z"/>
                                        <path d="M269.676,416.508h-24.125c-4.163,0-7.539,3.374-7.539,7.539c0,4.165,3.375,7.539,7.539,7.539h24.125
                                            c4.164,0,7.539-3.374,7.539-7.539C277.214,419.882,273.84,416.508,269.676,416.508z"/>
                                        <path d="M141.011,456.715h-32.166c-4.163,0-7.539,3.374-7.539,7.539s3.375,7.539,7.539,7.539h32.166
                                            c4.164,0,7.539-3.374,7.539-7.539S145.175,456.715,141.011,456.715z"/>
                                        <path d="M269.676,456.715h-96.498c-4.163,0-7.539,3.374-7.539,7.539s3.375,7.539,7.539,7.539h96.498
                                            c4.164,0,7.539-3.374,7.539-7.539S273.84,456.715,269.676,456.715z"/>
                                </svg>
                                <h4 class="business-grid-item-text">
                                    SWOT Analysis
                                </h4>
                            </span>
                        </a>
                        <b-modal centered ref="swotModal" size="lg" hide-footer title="SWOT Analysis">
                            <div class="d-block text-center">
                                <img src="@/static/SWOT_analysis-min.jpg" alt="SWOT Analysis">
                            </div>
                            <b-btn class="mt-3" variant="outline-danger" block @click="hideModal('swotModal')">Close Me</b-btn>
                        </b-modal>                        
                    </div>
                    <div class="col-sm-12 col-md-4">
                        <a href="https://goo.gl/forms/vwwmzNeXcULdaX302" target="_blank" class="business-grid-item business-grid-odd">
                            <span>
                                <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 480 480" style="enable-background:new 0 0 480 480;" xml:space="preserve">
                                    <rect x="95.998" y="32" width="16" height="16"/>
                                    <rect x="127.998" y="32" width="16" height="16"/>
                                    <rect x="159.998" y="32" width="16" height="16"/>
                                    <rect x="295.998" y="32" width="152" height="16"/>
                                    <rect x="319.998" y="120" width="128" height="16"/>
                                    <rect x="383.998" y="152" width="64" height="16"/>
                                    <rect x="383.998" y="184" width="64" height="16"/>
                                    <rect x="383.998" y="216" width="64" height="16"/>
                                    <rect x="319.998" y="248" width="128" height="16"/>
                                    <rect x="319.998" y="376" width="128" height="16"/>
                                    <rect x="383.998" y="280" width="64" height="16"/>
                                    <rect x="383.998" y="312" width="64" height="16"/>
                                    <rect x="383.998" y="344" width="64" height="16"/>
                                    <rect x="383.998" y="408" width="64" height="16"/>
                                        <path d="M471.998,0h-400c-4.424,0-8,3.584-8,8v64v48h-56c-3.08,0-5.872,1.76-7.208,4.536c-1.328,2.768-0.96,6.064,0.96,8.464
                                            l30.248,37.808V208c0,19.312,13.768,35.472,32,39.192V296h-56c-3.08,0-5.872,1.76-7.208,4.536c-1.328,2.768-0.96,6.064,0.96,8.464
                                            l30.248,37.808V384c0,19.312,13.768,35.472,32,39.192V472c0,4.416,3.576,8,8,8h368c22.056,0,40-17.944,40-40V72V8
                                            C479.998,3.584,476.422,0,471.998,0z M47.998,208v-40c0-1.816-0.616-3.576-1.752-5l-21.6-27h47.352h176c13.232,0,24,10.768,24,24
                                            v48c0,13.232-10.768,24-24,24h-176C58.766,232,47.998,221.232,47.998,208z M47.998,384v-40c0-1.816-0.616-3.576-1.752-5l-21.6-27
                                            h47.352h176c13.232,0,24,10.768,24,24v48c0,13.232-10.768,24-24,24h-176C58.766,408,47.998,397.232,47.998,384z M463.998,440
                                            c0,13.232-10.768,24-24,24h-360v-40h168c22.056,0,40-17.944,40-40v-48c0-22.056-17.944-40-40-40h-168v-48h168
                                            c22.056,0,40-17.944,40-40v-48c0-22.056-17.944-40-40-40h-168V80h384V440z M463.998,64h-384V16h384V64z"/>
                                    <rect x="71.998" y="160" width="64" height="16"/>
                                    <rect x="151.998" y="160" width="40" height="16"/>
                                    <rect x="207.998" y="160" width="40" height="16"/>
                                    <rect x="71.998" y="192" width="40" height="16"/>
                                    <rect x="127.998" y="192" width="120" height="16"/>
                                    <rect x="183.998" y="368" width="64" height="16"/>
                                    <rect x="127.998" y="368" width="40" height="16"/>
                                    <rect x="71.998" y="368" width="40" height="16"/>
                                    <rect x="207.998" y="336" width="40" height="16"/>
                                    <rect x="71.998" y="336" width="120" height="16"/>
                                </svg>
                                <h4 class="business-grid-item-text">
                                    Survey Question
                                </h4>
                            </span>
                        </a>
                    </div>
                    <div class="col-sm-12 col-md-4">
                        <a @click="showModal('swotModal')" class="business-grid-item business-grid-even">
                            <span>
                                <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve">
                                    <path d="M501.801,466.153H61.144l55.608-61.873c4.883,2.589,10.446,4.062,16.348,4.062c13.586,0,25.382-7.781,31.188-19.115
                                        l56.818,14.347c1.503,17.938,16.574,32.078,34.895,32.078c19.314,0,35.027-15.713,35.027-35.027
                                        c0-10.651-4.784-20.201-12.31-26.63l46.335-110.741l32.997,84.143c-7.887,6.429-12.936,16.213-12.936,27.157
                                        c0,19.314,15.714,35.027,35.028,35.027s35.027-15.713,35.027-35.027c0-3.946-0.666-7.738-1.875-11.28l40.474-40.476
                                        c3.983-3.983,3.983-10.441,0-14.425c-3.983-3.982-10.441-3.982-14.424,0l-38.182,38.182c-5.859-4.411-13.141-7.029-21.023-7.029
                                        c-1.082,0-2.151,0.056-3.209,0.153l-40.571-103.457l40.757-97.409c0.997,0.086,2.003,0.139,3.022,0.139
                                        c16.219,0,29.893-11.081,33.861-26.07h64.21c5.633,0,10.199-4.567,10.199-10.199c0-5.632-4.566-10.199-10.199-10.199h-64.971
                                        c-4.753-13.712-17.79-23.588-33.099-23.588c-19.314,0-35.028,15.713-35.028,35.028c0,11.011,5.112,20.845,13.081,27.272
                                        l-32.53,77.746l-47.52-121.177c7.14-6.417,11.641-15.717,11.641-26.051c0-19.315-15.714-35.028-35.028-35.028
                                        S219.73,42.399,219.73,61.714c0,8.356,2.946,16.036,7.847,22.063l-84.08,127.394c-3.644-1.288-7.561-1.996-11.64-1.996
                                        c-4.185,0-8.199,0.74-11.922,2.092l-72.226-95.035V12.062c0-5.632-4.566-10.199-10.199-10.199S27.31,6.43,27.31,12.062v100.287
                                        H10.199C4.566,112.348,0,116.916,0,122.548c0,5.632,4.566,10.199,10.199,10.199h17.112v102.502H10.199
                                        C4.566,235.249,0,239.816,0,245.448c0,5.632,4.566,10.199,10.199,10.199h17.112v104.986H10.199C4.566,360.633,0,365.2,0,370.832
                                        c0,5.632,4.566,10.199,10.199,10.199h17.112v95.321c0,5.632,4.566,10.199,10.199,10.199h87.873v13.387
                                        c0,5.632,4.566,10.199,10.199,10.199c5.633,0,10.199-4.567,10.199-10.199v-13.387h102.502v13.387
                                        c0,5.632,4.566,10.199,10.199,10.199s10.199-4.567,10.199-10.199v-13.387h104.984v13.387c0,5.632,4.566,10.199,10.199,10.199
                                        s10.199-4.567,10.199-10.199v-13.387h107.735c5.633,0,10.199-4.567,10.199-10.199S507.434,466.153,501.801,466.153z
                                        M380.143,359.926c8.065,0,14.629,6.563,14.629,14.63c0,8.065-6.563,14.629-14.629,14.629c-8.067,0-14.63-6.563-14.63-14.629
                                        C365.513,366.489,372.076,359.926,380.143,359.926z M380.142,89.297c8.067,0,14.629,6.563,14.629,14.63
                                        c0,8.067-6.563,14.63-14.629,14.63c-8.067,0-14.63-6.563-14.63-14.63C365.512,95.86,372.075,89.297,380.142,89.297z
                                        M133.1,387.943c-8.067,0-14.629-6.563-14.629-14.63c0-8.066,6.563-14.629,14.629-14.629s14.629,6.563,14.629,14.629
                                        C147.728,381.381,141.166,387.943,133.1,387.943z M256,415.254c-8.067,0-14.629-6.563-14.629-14.629
                                        c0-8.067,6.563-14.63,14.629-14.63s14.629,6.563,14.629,14.63C270.629,408.691,264.067,415.254,256,415.254z M254.759,47.089
                                        c8.067,0,14.63,6.563,14.63,14.63s-6.563,14.63-14.63,14.63s-14.629-6.563-14.629-14.63S246.692,47.089,254.759,47.089z
                                        M131.857,229.578c8.068,0,14.63,6.562,14.63,14.629s-6.563,14.63-14.63,14.63s-14.629-6.563-14.629-14.63
                                        C117.229,236.141,123.792,229.578,131.857,229.578z M47.71,149.948l55.91,73.566c-4.263,5.802-6.789,12.957-6.789,20.692
                                        c0,19.315,15.713,35.028,35.027,35.028c19.314,0,35.028-15.713,35.028-35.028c0-7.832-2.584-15.071-6.945-20.911l84.539-128.09
                                        c3.252,1,6.703,1.541,10.278,1.541c1.65,0,3.272-0.123,4.862-0.345l54.735,139.574l-54.336,129.86
                                        c-1.32-0.151-2.66-0.238-4.02-0.238c-13.145,0-24.617,7.282-30.607,18.021l-57.53-14.528
                                        c-2.093-17.328-16.88-30.805-34.764-30.805c-19.314,0-35.027,15.713-35.027,35.027c0,5.995,1.516,11.642,4.182,16.581
                                        L47.71,450.583V149.948z"/>
                                    <path d="M488.529,272.375c-3.983-3.983-10.441-3.983-14.424,0l-8.07,8.07c-3.983,3.984-3.983,10.441,0,14.425
                                        c1.992,1.991,4.602,2.987,7.212,2.987c2.61,0,5.221-0.996,7.212-2.987l8.07-8.07C492.511,282.816,492.511,276.359,488.529,272.375
                                        z"/>
                            </svg>
                                <h4 class="business-grid-item-text">
                                    Value Curve
                                </h4>
                            </span>
                        </a>
                        <b-modal centered ref="swotModal" size="lg" hide-footer title="Value Curve">
                            <div class="d-block">
                                <p>The concept of a Value Curve is to use a diagram to compare products on a range of factors by rating them on a scale from low to high. These can be features, benefits or ways in which a product is distributed or consumed. The combination of these various factors defines the product or service.</p>
                                <p>In this occasion, I would like to share my value curve analysis about my company, Ordent. I compare with 2 agencies in Jakarta and Bandung, and also a web developer freelancer that already works for 4 years.</p>
                                <p>Blue represents Ordent, my company. Red represents a big software agency in Bandung, Indonesia. Yellow represents a freelancer that works in my coworking space. And green represents a small agency in Jakarta, Indonesia.</p>
                                <img src="@/static/value_curve.png" alt="Value Curve" style="max-width:50% !important;">
                            </div>
                            <b-btn class="mt-3" variant="outline-danger" block @click="hideModal('swotModal')">Close Me</b-btn>
                        </b-modal>                        
                    </div>
                </div>
                <div class="row">
                    <div class="col-sm-12">
                        <img src="@/static/more_to_come.png" alt="More to come" style="display:block;margin:3em auto 0 auto;max-height: 25%;">
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        head () {
            return {
                title: "Business | Tiwi's Personal Blog",
                meta: [
                        { hid: 'description', name: 'description', content: 'Pratiwi Sukmawati\'s personal blog'},
                    ],
                    bodyAttrs: {
                        style: 'height:100%;'
                    }
                }
        },
        data () {
            return {
                dialog: false
            }
        },
        methods: {
            showModal (str) {
                console.log(str);
                this.$refs[str].show();
            },
            hideModal (str) {
                this.$refs[str].hide();
            }
        },
        mounted: function(){
            document.getElementsByTagName('img').draggable = false;
        }
    }
</script>

<style lang="scss">
    #business-header{
        background: url('~static/business-bg.jpg') no-repeat center center;
        background-size: cover;
        color: #333;
        min-height: 3em;
        padding: 200px 0;
        text-align: center;
        h1{
            font-size: 5em;
        }
    }

    #business-grid{
        font-family: 'Raleway', 'helvetica-neue', 'sans-serif';
        margin-bottom: 3em;
        padding: 3em 0;
        .business-grid-item{
            display: block;
            margin-bottom: 3em;
            padding: 5em 0 3em 0;
            text-align: center;
            text-decoration: none;
            span{
                display: block;
                height: 5em;
                svg{
                    fill: #fff;
                    max-height: 60px;
                    max-width: 60px;
                }
                .business-grid-item-text{
                    color: #fff;
                    display: none;
                    font-size: 1.7em;
                    font-weight: 700;
                }
            }
        }
        .business-grid-item:hover{
            cursor: pointer;
            svg{
                display: none;
            }
            .business-grid-item-text{
                display: block;
                -webkit-transition: all 0.2s ease-out;
                -moz-transition: all 0.2s ease-out;
                -ms-transition: all 0.2s ease-out;
                -o-transition: all 0.2s ease-out;
                transition: all 0.2s ease-out;
            }
        }
        .business-grid-odd{
            background: #9AD7DA;
            .business-grid-bmc-icon{
                fill: #fff;
            }
        }
        .business-grid-even{
            background: #F7BEC7;
            .business-grid-bmc-icon{
                fill: #fff;
            }
        }
    }

    .modal-dialog{
        max-width: 80%;
        .modal-content{
            border-radius: 0;
            font-family: 'Raleway', 'helvetica-nueu', 'sans-serif';
            p{
                margin-bottom: 20px;
            }
            .btn{
                border: 1px solid #333;
                border-radius: 0;
                color: #333;
                font-weight: 700;
            }
            .btn:hover{
                background: #9AD7DA;
                border-color: #fff;
                color: #fff;
            }
            .d-block{
                img{
                    min-width: 100%;
                    max-width: 100%;
                }
            }
            .modal-title{
                font-weight: 700;
            }
        }
    }
</style>


