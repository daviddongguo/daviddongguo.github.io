<template>
  <section class="col-md-9 card-wrapper pull-right">
    <div class="card background-card">
      <h4 class="text-uppercase">Background</h4>
      <hr />
      <div class="background-details">
        <div class="detail" id="about">
          <div class="icon">
            <i class="fs-lg icon-board"></i
            ><span class="mobile-title">About</span>
          </div>
          <div class="info">
            <h4 class="title text-uppercase">About</h4>
            <div class="card card-nested">
              <div class="content mop-wrapper" itemprop="description">
                <p>{{ resume.basics.summary }}<br /></p>
              </div>
            </div>
          </div>
        </div>

        <div class="detail" id="skills">
          <div class="icon">
            <i class="fs-lg icon-tools"></i
            ><span class="mobile-title">Skills</span>
          </div>
          <div class="info">
            <h4 class="title text-uppercase">Skills</h4>
            <div class="content">
              <ul class="list-unstyled clear-margin">
                <li class="card card-nested card-skills">
                  <div
                    class="skill-level"
                    data-toggle="tooltip"
                    title="Master"
                    data-placement="left"
                  >
                    <div class="skill-progress master"></div>
                  </div>
                  <div class="skill-info">
                    <strong>back-end</strong>
                    <div class="space-top labels">
                      <span class="label label-keyword"><p>C#</p> </span>
                      <span class="label label-keyword"><p>.net</p> </span>
                      <span class="label label-keyword"><p>ASP.NET</p> </span>
                      <span class="label label-keyword"><p>.Net MVC</p> </span>
                      <span class="label label-keyword"><p>LINQ</p> </span>
                    </div>
                    <div class="space-top labels">
                      <span class="label label-keyword"><p>Java</p></span>
                      <span class="label label-keyword"
                        ><p>Spring Boot</p></span
                      >
                    </div>
                    <div class="space-top labels">
                      <span class="label label-keyword"><p>Node.js</p></span>
                      <span class="label label-keyword"><p>Next.js</p></span>
                      <span class="label label-keyword"><p>TypeScript</p></span>
                    </div>
                    <div class="space-top labels">
                      <span class="label label-keyword"
                        ><p>MSSQL Server</p></span
                      >
                      <span class="label label-keyword"><p>SQLite</p></span>
                      <span class="label label-keyword"><p>MySQL</p></span>
                      <span class="label label-keyword"><p>MongoDB</p></span>
                      <span class="label label-keyword"><p>SQL</p></span>
                    </div>
                  </div>
                </li>
                <li class="card card-nested card-skills">
                  <div
                    class="skill-level"
                    data-toggle="tooltip"
                    title="Master"
                    data-placement="left"
                  >
                    <div class="skill-progress master"></div>
                  </div>
                  <div class="skill-info">
                    <strong>front-end</strong>
                    <div class="space-top labels">
                      <span class="label label-keyword"><p>HTML</p></span>
                      <span class="label label-keyword"><p>JavaScript</p></span>
                      <span class="label label-keyword"><p>CSS</p></span>
                      <span class="label label-keyword"><p>Bootstrap</p></span>
                      <span class="label label-keyword"><p>Vue</p> </span>
                      <span class="label label-keyword"><p>React</p></span>
                      <span class="label label-keyword"><p>Next.js</p></span>
                      <span class="label label-keyword"><p>Blazor</p></span>
                    </div>
                    <div class="space-top labels">
                      <span class="label label-keyword"><p>Swift</p></span>
                      <span class="label label-keyword"><p>SwiftUI</p></span>
                    </div>
                    <div class="space-top labels">
                      <span class="label label-keyword"><p>Android</p></span>
                      <span class="label label-keyword"><p>Kotlin</p></span>
                      <span class="label label-keyword"
                        ><p>Jetpack Compose UI</p></span
                      >
                      <span class="label label-keyword"><p>Room</p></span>
                      <span class="label label-keyword"><p>Realm</p></span>
                    </div>
                    <div class="space-top labels">
                      <span class="label label-keyword"><p>Flutter</p></span>
                    </div>
                  </div>
                </li>
                <li class="card card-nested card-skills">
                  <div
                    class="skill-level"
                    data-toggle="tooltip"
                    title="Master"
                    data-placement="left"
                  >
                    <div class="skill-progress master"></div>
                  </div>
                  <div class="skill-info">
                    <strong>other skills</strong>
                    <div class="space-top labels">
                      <span class="label label-keyword"
                        ><p>Clean Architecture</p></span
                      >
                      <span class="label label-keyword"
                        ><p>Microservices</p></span
                      >
                      <span class="label label-keyword"
                        ><p>MVVM Pattern</p></span
                      >
                    </div>
                    <div class="space-top labels">
                      <span class="label label-keyword"><p>CI / CD</p></span>
                      <span class="label label-keyword"
                        ><p>GitHub Actions</p></span
                      >
                      <span class="label label-keyword"><p>Travis CI</p></span>
                      <span class="label label-keyword"
                        ><p>Azure DevOps</p></span
                      >
                    </div>
                    <div class="space-top labels">
                      <span class="label label-keyword"><p>Git</p></span>
                      <span class="label label-keyword"><p>GitHub</p></span>
                      <span class="label label-keyword"
                        ><p>Unit Testing</p></span
                      >
                      <span class="label label-keyword"
                        ><p>Selenium test</p></span
                      >
                    </div>
                    <div class="space-top labels">
                      <span class="label label-keyword"><p>Linux</p></span>
                      <span class="label label-keyword"><p>Vim</p></span>
                      <span class="label label-keyword"
                        ><p>Visual Studio Code</p></span
                      >
                      <span class="label label-keyword"><p>Vim</p></span>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div class="detail" id="education">
          <div class="icon">
            <i class="fs-lg icon-graduation-cap"></i
            ><span class="mobile-title">Education</span>
          </div>
          <div class="info">
            <h4 class="title text-uppercase">Education</h4>
            <div class="content">
              <ul class="list-unstyled clear-margin">
                <li class="card card-nested">
                  <div class="content">
                    <p class="clear-margin relative">
                      <strong>Mobile Application Development, AEC,&nbsp;</strong
                      >John Abbott College
                    </p>

                    <p class="text-muted clear-margin">
                      <small>Nov, 2022 - Nov, 2023</small>
                    </p>
                    <i></i>
                  </div>
                </li>
                <li class="card card-nested">
                  <div class="content">
                    <p class="clear-margin relative">
                      <strong
                        >Internet Programming and Development,
                        AEC,&nbsp;</strong
                      >CEGEP - John Abbott College
                    </p>
                    <p class="text-muted clear-margin">
                      <small>Apr, 2018 - May, 2019</small>
                    </p>
                    <i></i>
                  </div>
                </li>
                <li class="card card-nested">
                  <div class="content">
                    <p class="clear-margin relative">
                      <strong>.NET Foundation &amp; Real Project ,&nbsp;</strong
                      >Victoria Training Center (Montreal)
                    </p>
                    <p class="text-muted clear-margin">
                      <small>2018 - 2019</small>
                    </p>
                    <i></i>
                  </div>
                </li>
                <li class="card card-nested">
                  <div class="content">
                    <p class="clear-margin relative">
                      <strong>Engineering, Master's degree,&nbsp;</strong
                      >Beijing Forestry University
                    </p>
                    <p class="text-muted clear-margin">
                      <small>Sep, 1997 - Jun, 2004</small>
                    </p>
                    <i></i>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="detail" id="work-experience">
          <div class="icon">
            <i class="fs-lg icon-office"></i
            ><span class="mobile-title">Work Experience</span>
          </div>
          <div class="info">
            <h4 class="title text-uppercase">Work Experience</h4>
            <ul class="list-unstyled clear-margin">
              <li class="card card-nested clearfix">
                <div class="content">
                  <p class="clear-margin relative">
                    <strong>Internship</strong>,&nbsp;Health Services I&amp;IT
                    Cluster Integrated Health Solutions Branch Ministry of
                    Health ON
                  </p>
                  <p class="text-muted">
                    <small
                      ><span class="space-right">May, 2019 - Aug, 2019</span
                      ><span
                        ><i class="icon-clock mr-5"></i>4 months</span
                      ></small
                    >
                  </p>
                  <div class="mop-wrapper space-bottom">
                    <p>
                      As a co-op student, working for Generic Data Collection
                      Project. Main responsible is developing a tool that
                      retrieves data from existed MS Excel files by using .NET
                      Core, NOPI and writing APIs based on MongoDB, NodeJs.
                    </p>
                  </div>
                </div>
              </li>
              <li class="card card-nested clearfix">
                <div class="content">
                  <p class="clear-margin relative">
                    <strong>Senior Civil Engineer / Project Manager</strong
                    >,&nbsp;China Merchants Chongqing Communications Research
                    &amp; Design Institute Co., Ltd.
                  </p>
                  <p class="text-muted">
                    <small
                      ><span class="space-right">July, 2010 - Aug, 2017</span
                      ><span
                        ><i class="icon-clock mr-5"></i>7 years</span
                      ></small
                    >
                  </p>
                  <div class="mop-wrapper space-bottom"></div>
                </div>
              </li>
              <li class="card card-nested clearfix">
                <div class="content">
                  <p class="clear-margin relative">
                    <strong>Intermediate Engineer</strong>,&nbsp;China Merchants
                    Chongqing Communications Research &amp; Design Institute
                    Co., Ltd.
                  </p>
                  <p class="text-muted">
                    <small
                      ><span class="space-right">Jul, 2006 - Jul, 2010</span
                      ><span
                        ><i class="icon-clock mr-5"></i>4 years</span
                      ></small
                    >
                  </p>
                  <div class="mop-wrapper space-bottom"></div>
                </div>
              </li>

              <li class="card card-nested clearfix">
                <div class="content">
                  <p class="clear-margin relative">
                    <strong>Junior Engineer</strong>,&nbsp;China Merchants
                    Chongqing Communications Research &amp; Design Institute
                    Co., Ltd.
                  </p>
                  <p class="text-muted">
                    <small
                      ><span class="space-right">Jul, 2004 - Jul, 2006</span
                      ><span
                        ><i class="icon-clock mr-5"></i>2 years</span
                      ></small
                    >
                  </p>
                  <div class="mop-wrapper space-bottom"></div>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div class="detail" id="projects-experience">
          <div class="icon">
            <i class="fs-lg icon-code"></i
            ><span class="mobile-title">Projects Experience</span>
          </div>
          <div class="info">
            <h4 class="title text-uppercase">Personal Projects</h4>
            <ul class="list-unstyled clear-margin">
              <li class="card card-nested clearfix">
                <div class="content">
                  <p class="clear-margin relative">
                    <i
                      class="icon-circle current-event"
                      rel="tooltip"
                      title="Currently Working"
                      data-placement="left"
                    ></i
                    ><a
                      href="https://github.com/dongguowu/food-recipe-share"
                      target="_blank"
                      ><strong
                        >Food recipe share mobile application / Team
                        work</strong
                      ></a
                    >
                  </p>
                  <p class="text-muted">
                    <small
                      ><span class="space-right"
                        >Jun, 2023 - Present</span
                      ></small
                    >
                  </p>
                  <div class="mop-wrapper space-bottom"></div>
                </div>
              </li>

              <li class="card card-nested clearfix">
                <div class="content">
                  <p class="clear-margin relative">
                    <i
                      class="icon-circle current-event"
                      rel="tooltip"
                      title="Currently Working"
                      data-placement="left"
                    ></i
                    ><a
                      href="https://github.com/dongguowu/books-store-2021"
                      target="_blank"
                      ><strong>Books Store Website (Personal)</strong></a
                    >
                  </p>
                  <p class="text-muted">
                    <small
                      ><span class="space-right"
                        >Aug, 2018 - Present</span
                      ></small
                    >
                  </p>
                  <div class="mop-wrapper space-bottom"></div>
                </div>
              </li>
              <li class="card card-nested clearfix">
                <div class="content">
                  <p class="clear-margin relative">
                    <a
                      href="https://github.com/dongguowu/books-store-2023-mobile"
                      target="_blank"
                      ><strong>Books store mobile application </strong></a
                    >
                  </p>
                  <p class="text-muted">
                    <small
                      ><span class="space-right">Feb, 2021 - Feb, 2021</span
                      ><span><i class="icon-clock mr-5"></i>1 day</span></small
                    >
                  </p>
                  <div class="mop-wrapper space-bottom"></div>
                </div>
              </li>
              <li class="card card-nested clearfix">
                <div class="content">
                  <p class="clear-margin relative">
                    <a
                      href="https://github.com/dongguowu/books-store-2023-web"
                      target="_blank"
                      ><strong
                        >https://github.com/dongguowu/books-store-2023-web</strong
                      ></a
                    >
                  </p>
                  <p class="text-muted">
                    <small
                      ><span class="space-right">May, 2019 - Aug, 2019</span
                      ><span
                        ><i class="icon-clock mr-5"></i>3 months</span
                      ></small
                    >
                  </p>
                  <div class="mop-wrapper space-bottom"></div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { ResumeInfo } from '../resumeInfo'
defineProps<{ resume: ResumeInfo }>()
</script>
<style scoped></style>
