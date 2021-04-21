<template>
<div>
  <div class="absolute z-0">
    <svg
        class="canvas-mobile flex-1 md:hidden"
        :viewBox="`0 0 800 2000`"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        preserveAspectRatio="xMidYMin meet"
      >
        <defs>
          <filter id="dropshadow" height="130%">
            <feGaussianBlur in="SourceAlpha" stdDeviation="5" />
            <!-- stdDeviation is how much to blur -->
            <feOffset dx="2" dy="2" result="offsetblur" />
            <!-- how much to offset -->
            <feComponentTransfer>
              <feFuncA type="linear" slope="0.1" />
              <!-- slope is the opacity of the shadow -->
            </feComponentTransfer>
            <feMerge>
              <feMergeNode />
              <!-- this contains the offset blurred image -->
              <feMergeNode in="SourceGraphic" />
              <!-- this contains the element that the filter is applied to -->
            </feMerge>
          </filter>

          <g id="brackets">
            <path
              d="M108.78 0h26.51a21 21 0 0 120.08 27.16l-86.78 283A21 21 0 0 148.52 325H22a21 21 0 0 1-20.08-27.16l86.78-283A21 21 0 0 1108.78 0z"
            />
            <path
              d="M158.29 0h-51.62a9 9 0 0 0-9 9 9.12 9.12 0 0 0.39 2.64l94.14 307a9 9 0 008.6 6.36h51.62a9 9 0 0 09-9 9.12 9.12 0 0 0-.39-2.64l-94.14-307a9 9 0 00-8.6-6.36z"
            />
          </g>

          <pattern
            id="dots4"
            viewBox="0,0,90,90"
            x="0"
            y="0"
            width="100%"
            height="100%"
          >
          </pattern>
        </defs>

        <g
          style="transform: scale(4) translate(45px, 1px)"
          fill="white"
          filter="url(#dropshadow)"
        >
          <use id="top" href="#brackets" />
          <use
            id="bottom"
            href="#brackets"
            style="
              transform: scale(1, -1) translate(0, 545px);
              transform-origin: center;
            "
          />
        </g>
    </svg>
  </div>
  <div class="relative w-screen md:h-scrollerheight">
      <svg class="hidden md:block absolute -bottom-16 z-1 right-1/3" width="" height="399px" viewBox="0 0 377 399" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
        <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
            <g id="IE_desktop_SaMD" transform="translate(-925.000000, -611.000000)">
                <g id="Secondary-section" transform="translate(-34.000000, 611.000000)">
                    <g id="Big-Icon-" style="mix-blend-mode: multiply;" transform="translate(959.000000, 0.000000)">
                        <rect id="Rectangle" fill="#966CE0" style="mix-blend-mode: darken;" x="66" y="0" width="311" height="399" rx="10"></rect>
                        <rect id="Rectangle" fill="#B594F0" x="175" y="321" width="102" height="19"></rect>
                        <ellipse id="Oval" fill="#4BBFE1" style="mix-blend-mode: multiply;" cx="69" cy="180.5" rx="69" ry="68.5"></ellipse>
                    </g>
                </g>
            </g>
        </g>
    </svg>
    <div class="relative justify-items-center z-1">
      <svg class="my-8 md:hidden" width="100vw" height="105px" viewBox="0 0 104 105" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
          <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
              <g id="IE_mobile_SAMD" transform="translate(-134.000000, -116.000000)">
                  <g id="Icon-2" transform="translate(134.000000, 116.000000)">
                      <ellipse id="Oval" fill="#4BBFE1" cx="21.3870968" cy="52.08" rx="21.3870968" ry="21"></ellipse>
                      <rect id="Rectangle" fill="#966CE0" style="mix-blend-mode: multiply;" x="21.8064516" y="0" width="82.1935484" height="105" rx="6"></rect>
                      <rect id="Rectangle" fill="#B594F0" x="50.3225806" y="84" width="26.8387097" height="4.2"></rect>
                  </g>
              </g>
          </g>
      </svg>
      <div class="relative md:ml-32 md:pl-12 md:py-32 md:bg-transparent md:w-4/12">
        <h1 class="text-2xl md:text-5xl tracking-wide leading-normal text-ie-purple mb-4 ml-8">
          Custom Software Development
        </h1>
        <p class="ml-8 mr-10 text-base leading-normal text-gray-600 pb-6">
          We minimize the guesswork associated with feature planning and requirements gathering by starting with user behavior research. Our Quality
          Management System is aligned with ISO 13485 and IEC 62304. Building on a scalable infrastructure, we implement the right languages and
          frameworks, so your applications are reliable, fast and intuitive.
        </p>
        <svg class="md:ml-8" width="" height="13px" viewBox="0 0 23 13" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
            <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                <g id="IE_mobile_SEM" transform="translate(-176.000000, -544.000000)">
                    <g id="Scrolll-arrow" transform="translate(50.000000, 250.000000)">
                        <image style="filter: opacity(0.3)" x="126" y="294" width="23" height="13" xlink:href="data:image/png;base64,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JgIIIIAAAuMSIE0vShNZGjc5tkcAAQQQQKBjBLouTWSpY4E3XQQQQAABBCYl0FVpIkuTJsZ+CCCAAAIIdJRA16SJLHU06KaNAAIIIIDAtAS6Ik1kadqk2B8BBBBAAIGOEyhdmshSxwNu+ggggAACCFRF4O677/5QOlYv/bf4HUUl/EyWqkqI4yCAAAIIIIDAPIF77733/emHUqSpt3379hOnTp26wOVFAAEEEEAAAQQqJfDAAw/s37Rp02w6aOQ7Tb09e/YcqxSMgyGAAAIIIIAAAmcTeOSRRy7fsmXLD9NrEaWpt3///i+dPR8/I4AAAggggAACtRCYm5ubueqqq76eDh7mV3QzMzOz6QPst9QCxEERQAABBBBAAIG1CBw8ePBjAX5F19u5c+d3jx8/vnOteXgdAQQQQAABBBColcCJEye25nq3KcncmU984hN31ArAwRFAAAEEEEAAgVEJHDly5IZLL730e2n7HH5N17vpppu+4F/BjXr1bIcAAggggAACjRI4fPjwgR07dhxPJ21cnDZu3Ng7cODA4ZMnT25rdNJOhgACCCCAAAIITELg6NGjb+7/i7T+h63T/nXKU6//BZR33nnnHbOzs5snGat9EEAAAQQQQACB1gncf//97+rL07nnnns6DaYKeer172Ldeuutn+p/zUHrEzQABBAonsDG4mdoggggkBWB9CHx1zzxxBN/cObMmaueeeaZy3/605/ueu655y4+a5BXLPz8TP8xfXD7hfTZqJ/t3r3739MXTvauvvrqf/3oRz/6ePr12wtn7eNHBBBAoFYChKlWvA6OAALjEHj22WfP+8UvfrH5oosueuH1r3/986RoHHq2RQCBOgn8PxjpEIlno5wAAAAAAElFTkSuQmCC"></image>
                        <use fill="grey" fill-rule="evenodd" xlink:href="#rect-1"></use>
                    </g>
                </g>
            </g>
        </svg>
      </div>
    </div>
  </div>
  <!-- #efefef url(//ideaevolver.com/wp-content/themes/idea-evolver/assets-img/service-background-pattern.svg) center -5px/100% repeat -->
  <!-- style="background: #efefef url('/images/background-pattern.svg') center -5px/100% repeat" -->
  <!-- class="bg-stripes bg-repeat bg-center bg-gray-200" -->
  <section class="relative z-1" style="background: #efefef url('/images/background-pattern.svg') center -5px/100% repeat">
    <div class="relative z-1 py-12 mt-12">
      <svg class="md:hidden" width="353px" height="194px" viewBox="0 0 353 194" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
          <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
              <g id="IE_mobile_SAMD" transform="translate(-6.000000, -707.000000)">
                  <g id="Software-Development-Process" transform="translate(6.000000, 707.000000)">
                      <circle id="Oval" fill="#4BBFE1" cx="279.5" cy="35.5" r="9.5"></circle>
                      <rect id="Rectangle" fill="#966CE0" style="mix-blend-mode: multiply;" x="280" y="13" width="22" height="23" rx="3"></rect>
                      <g id="Phone-graphic-" transform="translate(176.448480, 96.596445) rotate(-1.000000) translate(-176.448480, -96.596445) translate(1.948480, 3.096445)">
                          <polygon id="Fill-2" fill="#FFFFFF" points="333.983005 111.897806 205.531504 167.94749 19.9830045 76.7107921 143.912416 26.9474905"></polygon>
                          <g id="Group-14" style="mix-blend-mode: multiply;" transform="translate(110.120187, 56.227947)" fill="#966CE0">
                              <path d="M161.098993,17.7050733 L38.9448682,65.4632212 C36.4389661,66.4429445 33.6439857,66.3715191 31.1913952,65.2650822 L4.30259027,53.1347385 C3.29573576,52.6805163 2.84773874,51.4960796 3.30196091,50.4892251 C3.51524884,50.016439 3.90386581,49.6450025 4.3858065,49.4532954 L125.380716,1.32376593 C127.074282,0.650096824 128.963822,0.663546741 130.647626,1.36125628 L161.136346,13.994714 C162.156781,14.4175464 162.641233,15.5875453 162.218401,16.6079798 C162.010072,17.1107477 161.605854,17.5069081 161.098993,17.7050733 Z" id="Fill-8"></path>
                          </g>
                          <g id="Group-26" transform="translate(160.797591, 62.193814)" fill="#4F77FF">
                              <g id="Group-10" transform="translate(0.042688, 0.158688)">
                                  <path d="M168.845503,38.1414185 L43.5529673,89.4691053 C40.9854589,90.5209179 38.0963646,90.4587191 35.5765029,89.2973813 L14.9325636,79.7831347 C13.9294058,79.3208057 13.4909773,78.1327939 13.9533063,77.129636 C14.1642354,76.6719638 14.5401634,76.3107877 15.0059085,76.1183394 L139.883878,24.5181043 C141.609093,23.8052367 143.547576,23.8109717 145.268542,24.5340349 L168.862031,34.44683 C169.88037,34.8746846 170.359052,36.0470562 169.931197,37.0653951 C169.726047,37.5536741 169.335598,37.9406449 168.845503,38.1414185 Z" id="Fill-16"></path>
                              </g>
                          </g>
                          <g id="Group-39" transform="translate(14.998245, 0.612413)">
                              <g id="Group-36" transform="translate(30.645802, 0.012838)">
                                  <mask id="mask-2" fill="white">
                                      <use xlink:href="#path-1"></use>
                                  </mask>
                                  <g id="Clip-35"></g>
                              </g>
                              <path d="M153.58177,27.6889373 L32.6324669,74.2165156 C30.1127637,75.1858117 27.3081958,75.0951394 24.8563642,73.9651126 L4.31040608,64.495668 C3.3072548,64.0333247 2.86884329,62.8453067 3.33118656,61.8421554 C3.54663752,61.3746891 3.93402397,61.0082867 4.4127525,60.8191759 L120.676609,14.8918061 C124.602388,13.3410172 128.98193,13.4043461 132.861227,15.0679977 L153.651973,23.9841885 C154.667129,24.4195419 155.137152,25.5954119 154.701798,26.6105677 C154.489172,27.1063687 154.085271,27.4952474 153.58177,27.6889373 Z" id="Fill-28" fill="#966CE0" style="mix-blend-mode: multiply;"></path>
                          </g>
                      </g>
                  </g>
              </g>
          </g>
          <g id="Group-48" style="mix-blend-mode: multiply;" transform="translate(227.251506, 73.180322)">
            <g id="Clip-47"></g>
            <path d="M6.06425856,16.17175 C14.0530228,19.87 27.0052814,19.870125 34.9938897,16.171875 C42.9823422,12.473875 42.9821863,6.47775 34.9932662,2.7795 C30.9984943,0.930125 25.764057,0.005625 20.5282167,0.005625 C15.2936236,0.005875 10.0577833,0.930375 6.06394677,2.77925 C-1.9246616,6.4775 -1.9245057,12.4735 6.06425856,16.17175 Z" id="Fill-46" fill="#4BBFE1" style="mix-blend-mode: multiply;" mask="url(#mask-4)"></path>
          </g>
        <svg class="md:hidden" width="17px" height="17px" x="300px" y="150px" viewBox="0 0 17 17" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
            <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                <g id="IE_mobile_SAMD" transform="translate(-302.000000, -871.000000)" fill="#4BBFE1">
                    <g id="Product-Development.---Column-1" transform="translate(29.000000, 871.000000)">
                        <circle id="Oval" style="mix-blend-mode: multiply;" cx="281.5" cy="8.5" r="8.5"></circle>
                    </g>
                </g>
            </g>
        </svg>
      </svg>

      <svg class="md:hidden" width="100%" height="26px" viewBox="0 0 25 26" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
          <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
              <g id="IE_mobile_SAMD" transform="translate(-71.000000, -922.000000)" fill="#966CE0">
                  <g id="Product-Development.---Column-1" transform="translate(29.000000, 871.000000)">
                      <rect id="Rectangle" style="mix-blend-mode: multiply;" x="-50" y="70" width="25" height="26" rx="4"></rect>
                  </g>
              </g>
          </g>
      </svg>
      <div class="relative md:flex md:flex-row md:mt-14 md:mx-40">
<!-- 
        <svg class="absolute mt-16 p-10" width="1396px" height="1462px" viewBox="0 0 1396 1462" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
            <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                <g id="IE_desktop_SaMD" transform="translate(-229.000000, -1158.000000)">
                    <g id="Secondary-section" transform="translate(-34.000000, 611.000000)">
                        <g id="geometric-shapes-" transform="translate(263.000000, 547.000000)">
                            <ellipse id="Oval" fill="#4BBFE1" style="mix-blend-mode: multiply;" cx="28.5" cy="28" rx="28.5" ry="28"></ellipse>
                            <rect id="Rectangle" fill="#966CE0" style="mix-blend-mode: multiply;" x="745" y="628" width="48" height="39" rx="4"></rect>
                            <ellipse id="Oval" fill="#4BBFE1" style="mix-blend-mode: multiply;" transform="translate(783.000000, 701.500000) scale(1, -1) translate(-783.000000, -701.500000) " cx="783" cy="701.5" rx="21" ry="22.5"></ellipse>
                            <circle id="Oval" fill="#4BBFE1" cx="54.5" cy="501.5" r="10.5"></circle>
                            <rect id="Rectangle" fill="#966CE0" style="mix-blend-mode: multiply;" x="11" y="467" width="46" height="39" rx="4"></rect>
                            <circle id="Oval" fill="#4BBFE1" cx="1346.5" cy="1378.5" r="10.5"></circle>
                            <circle id="Oval" fill="#4BBFE1" style="mix-blend-mode: multiply;" cx="1379.5" cy="774.5" r="10.5"></circle>
                            <circle id="Oval" fill="#4BBFE1" style="mix-blend-mode: multiply;" cx="113" cy="946" r="8"></circle>
                            <rect id="Rectangle" fill="#966CE0" style="mix-blend-mode: multiply;" x="1340" y="1379" width="28" height="31" rx="4"></rect>
                            <rect id="Rectangle" fill="#966CE0" style="mix-blend-mode: multiply;" x="1352" y="10" width="44" height="46" rx="4"></rect>
                            <circle id="Oval" fill="#4BBFE1" style="mix-blend-mode: multiply;" cx="1347.5" cy="54.5" r="19.5"></circle>
                            <path d="M271.12777,1420 L285.87223,1420 C287.655267,1420 288.30184,1420.18565 288.953691,1420.53427 C289.605543,1420.88288 290.11712,1421.39446 290.465735,1422.04631 C290.814349,1422.69816 291,1423.34473 291,1425.12777 L291,1439.87223 C291,1441.65527 290.814349,1442.30184 290.465735,1442.95369 C290.11712,1443.60554 289.605543,1444.11712 288.953691,1444.46573 C288.30184,1444.81435 287.655267,1445 285.87223,1445 L271.12777,1445 C269.344733,1445 268.69816,1444.81435 268.046309,1444.46573 C267.394457,1444.11712 266.88288,1443.60554 266.534265,1442.95369 C266.185651,1442.30184 266,1441.65527 266,1439.87223 L266,1425.12777 C266,1423.34473 266.185651,1422.69816 266.534265,1422.04631 C266.88288,1421.39446 267.394457,1420.88288 268.046309,1420.53427 C268.69816,1420.18565 269.344733,1420 271.12777,1420 Z" id="Rectangle" fill="#966CE0" style="mix-blend-mode: darken;"></path>
                            <circle id="Oval" fill="#4BBFE1" style="mix-blend-mode: multiply;" cx="266" cy="1445" r="17"></circle>
                            <path d="M1174.12777,923 L1197.87223,923 C1199.65527,923 1200.30184,923.185651 1200.95369,923.534265 C1201.60554,923.88288 1202.11712,924.394457 1202.46573,925.046309 C1202.81435,925.69816 1203,926.344733 1203,928.12777 L1203,951.87223 C1203,953.655267 1202.81435,954.30184 1202.46573,954.953691 C1202.11712,955.605543 1201.60554,956.11712 1200.95369,956.465735 C1200.30184,956.814349 1199.65527,957 1197.87223,957 L1174.12777,957 C1172.34473,957 1171.69816,956.814349 1171.04631,956.465735 C1170.39446,956.11712 1169.88288,955.605543 1169.53427,954.953691 C1169.18565,954.30184 1169,953.655267 1169,951.87223 L1169,928.12777 C1169,926.344733 1169.18565,925.69816 1169.53427,925.046309 C1169.88288,924.394457 1170.39446,923.88288 1171.04631,923.534265 C1171.69816,923.185651 1172.34473,923 1174.12777,923 Z" id="Rectangle" fill="#966CE0" style="mix-blend-mode: darken;"></path>
                            <path d="M129.12777,897 L152.87223,897 C154.655267,897 155.30184,897.185651 155.953691,897.534265 C156.605543,897.88288 157.11712,898.394457 157.465735,899.046309 C157.814349,899.69816 158,900.344733 158,902.12777 L158,925.87223 C158,927.655267 157.814349,928.30184 157.465735,928.953691 C157.11712,929.605543 156.605543,930.11712 155.953691,930.465735 C155.30184,930.814349 154.655267,931 152.87223,931 L129.12777,931 C127.344733,931 126.69816,930.814349 126.046309,930.465735 C125.394457,930.11712 124.88288,929.605543 124.534265,928.953691 C124.185651,928.30184 124,927.655267 124,925.87223 L124,902.12777 C124,900.344733 124.185651,899.69816 124.534265,899.046309 C124.88288,898.394457 125.394457,897.88288 126.046309,897.534265 C126.69816,897.185651 127.344733,897 129.12777,897 Z" id="Rectangle" fill="#966CE0" style="mix-blend-mode: darken;"></path>
                            <circle id="Oval" fill="#4BBFE1" style="mix-blend-mode: multiply;" cx="1203" cy="931" r="17"></circle>
                        </g>
                    </g>
                </g>
            </g>
        </svg> -->
        <div class="relative md:inline-block mx-8 md:mx-0 md:mr-4 text-gray-600 bg-white p-8 md:p-14 md:flex-1 md:h-1/6">
          <h4 class="text-2xl pb-2">
            Product Development
          </h4>
          <svg width="62px" height="3px" viewBox="0 0 62 3" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
              <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                  <g id="IE_mobile_SEM" transform="translate(-62.000000, -1120.000000)" fill="#4BBFE1">
                      <g id="SEO" transform="translate(16.000000, 1030.000000)">
                          <g id="Group-2" transform="translate(14.000000, 14.000000)">
                              <polygon id="Rectangle" points="32 76 73.5535038 76 94 76 94 79 32 79"></polygon>
                          </g>
                      </g>
                  </g>
              </g>
          </svg>
          <p class="pt-4">
            Our objective for developing digital software products is to cultivate, maintain and increase a company's market share by satisfying
            consumer demand. A product/market fit can be established through our research process before any development begins. Services
            include the conceptualization, design, and development of newly created or newly rebranded digital products and med tech device software.
          </p>
          <div class="absolute md:hidden -bottom-2.5 right-10 w-5 h-5 rounded-md" style="background-color: #966CE0"></div>
          <div class="absolute md:hidden-bottom-2.5 right-10 w-5 h-2.5 rounded-b-md" style="mix-blend-mode: multiply; background-color: #efefef;"></div>
        </div>
        <div class="relative mx-8 md:mx-0 text-gray-600 bg-white p-8 mt-16 md:mt-12 md:p-14 md:flex-1">
          <div class="absolute md:hidden -top-6 left-20 w-10 h-6 rounded-sm" style="background-color: #966CE0"></div>
          <div class="absolute md:hidden -top-3 w-6 h-3 bg-blue-500 rounded-full" style="mix-blend-mode: multiply; left: 6.7rem; border-bottom-left-radius: 4rem; border-bottom-right-radius: 4rem;"></div>
          <div class="absolute md:hidden -top-1.5 left-56 w-3 h-1.5 bg-blue-500 rounded-full" style="mix-blend-mode: multiply; border-bottom-left-radius: 4rem; border-bottom-right-radius: 4rem;"></div>
          <h4 class="text-2xl pb-2">
            Medical Device Software
          </h4>
          <svg width="62px" height="3px" viewBox="0 0 62 3" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
              <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                  <g id="IE_mobile_SEM" transform="translate(-62.000000, -1120.000000)" fill="#4BBFE1">
                      <g id="SEO" transform="translate(16.000000, 1030.000000)">
                          <g id="Group-2" transform="translate(14.000000, 14.000000)">
                              <polygon id="Rectangle" points="32 76 73.5535038 76 94 76 94 79 32 79"></polygon>
                          </g>
                      </g>
                  </g>
              </g>
          </svg>
          <p class="pt-4">
            Medical device software has a long history of living within proprietary hardware devices, but in recent years, has taken home inside
            our everyday devices like phones and watches. The software living in common devices is reaching more people and solving old problems
            on larger scales.
          </p>
          <p class="pt-4">
            Clients appreciate our harmonious blend of regulatory rigor, scalable development practices, and engaging design patterns.
            Our ISO 13485 aligned Quality Management System (QMS) guides our regulated technology practices to ensure safe and successful
            product launches under any safety classification. We build medical device software on modern technology stacks designed for security,
            scalability, fast responses, and best in class user design. The validated tools and infrastructure we offer beneath your custom
            software layer facilitates a fast and cost-efficient program.
          </p>
        </div>
        <div class="absolute md:hidden -bottom-3 right-24 h-5 w-5 rounded-full bg-blue-500" style="mix-blend-mode: multiply"></div>
      </div>
      <div class="hidden md:block">
        <svg width="100vw" height="692px" viewBox="0 0 1259 692" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
            <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                <g id="IE_desktop_SaMD" transform="translate(-359.000000, -2004.000000)">
                    <g id="Secondary-section" transform="translate(-34.000000, 611.000000)">
                        <g id="Software-Development-Process" transform="translate(393.000000, 1393.000000)">
                            <g id="Phone-graphic-" transform="translate(629.666196, 346.249834) rotate(-1.000000) translate(-629.666196, -346.249834) translate(6.666196, 11.749834)">
                                <polygon id="Fill-2" fill="#FFFFFF" points="1190.72098 402.081839 731.926695 603.192122 69.1972573 275.828314 511.839851 97.2740233"></polygon>
                                <g id="Group-14" style="mix-blend-mode: multiply;" transform="translate(390.653770, 199.541340)" fill="#966CE0">
                                    <path d="M581.51955,61.6980075 L133.207885,237.888821 C128.175478,239.866605 122.556695,239.722495 117.63229,237.489338 L10.6965181,188.995283 C8.18160933,187.854803 7.06741477,184.891525 8.20789492,182.376616 C8.74074809,181.201605 9.70717859,180.27805 10.9051454,179.799031 L452.417105,3.2558804 C456.061129,1.79877948 460.131083,1.82785806 463.753915,3.33687845 L581.613216,52.4288841 C584.162345,53.4906746 585.368072,56.4179038 584.306281,58.9670334 C583.785552,60.2171919 582.779977,61.2026479 581.51955,61.6980075 Z" id="Fill-8"></path>
                                </g>
                                <g id="Group-26" transform="translate(572.524493, 223.943690)" fill="#4F77FF">
                                    <g id="Group-10" transform="translate(0.152167, 0.563437)">
                                        <path d="M606.571609,133.507718 L148.924818,320.250358 C143.805442,322.339318 138.049685,322.215736 133.024689,319.908967 L48.850582,281.268094 C46.3409589,280.116029 45.2404405,277.147645 46.3925053,274.638022 C46.9201939,273.488521 47.863926,272.581725 49.0335679,272.100325 L502.487379,85.4685935 C506.172938,83.9516979 510.310655,83.9639054 513.987199,85.5025214 L606.612836,124.265911 C609.160185,125.331965 610.361013,128.261207 609.294959,130.808557 C608.781936,132.034432 607.802013,133.005652 606.571609,133.507718 Z" id="Fill-16"></path>
                                    </g>
                                </g>
                                <g id="Group-39" transform="translate(52.755820, 0.625708)">
                                    <g id="Group-36" transform="translate(109.713656, 0.045777)">
                                        <mask id="mask-2" fill="white">
                                            <use xlink:href="#path-1"></use>
                                        </mask>
                                        <g id="Clip-35"></g>
                                    </g>
                                    <path d="M554.73777,96.8529414 L110.571506,267.036913 C105.547992,268.961691 99.9608858,268.781561 95.0717864,266.537199 L10.8931215,227.894616 C8.38349414,226.742561 7.28296459,223.77418 8.43501997,221.264553 C8.97395138,220.090549 9.94634388,219.170688 11.148439,218.69772 L442.518098,48.9740368 C449.855751,46.087015 458.035037,46.2049535 465.2864,49.3023369 L554.912875,87.585834 C557.452334,88.6705509 558.631635,91.6085258 557.546918,94.1479844 C557.015248,95.3926896 556.001672,96.3686727 554.73777,96.8529414 Z" id="Fill-28" fill="#966CE0" style="mix-blend-mode: multiply;"></path>
                                </g>
                            </g>
                        </g>
                    </g>
                </g>
            </g>
            <g id="Group-48" style="mix-blend-mode: multiply;" transform="translate(808.104240, 260.922569)">
              <g id="Clip-47"></g>
              <path d="M21.7425856,59.5801316 C50.3852281,73.2052632 96.8238137,73.2057237 125.465897,59.5805921 C154.107422,45.9563816 154.106863,23.8653947 125.463662,10.2402632 C111.140943,3.42677632 92.3735703,0.0207236842 73.6011673,0.0207236842 C54.8332357,0.0216447368 36.0608327,3.42769737 21.7414677,10.2393421 C-6.90061597,23.8644737 -6.90005703,45.955 21.7425856,59.5801316 Z" id="Fill-46" fill="#4BBFE1" style="mix-blend-mode: multiply;" mask="url(#mask-4)"></path>
            </g>
        </svg>
      </div>
      <div class="absolute md:hidden bottom-0 left-24 w-7 h-10 rounded-md" style="background-color: #966CE0"></div>
      <div class="absolute md:hidden bottom-2 w-6 h-6 bg-blue-500 rounded-full" style="mix-blend-mode: multiply; left: 5.3rem;"></div>
    </div>
    <footer class="w-screen">
      <p class="text-gray-600 text-xs text-center p-5 bg-transparent">&copy; 2021 IDEA EVOLVER. All rights reserved.</p>
    </footer>
  </section>
</div>
</template>

<script>
export default {
  layout: "scroller",
};
</script>

<style lang="scss" scoped>
</style>