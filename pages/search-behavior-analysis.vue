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
    <svg class="hidden md:block absolute -bottom-20 z-1 right-1/3" width="405px" height="394px" viewBox="0 0 405 394" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
        <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
            <g id="IE_desktop_AR" transform="translate(-872.000000, -627.000000)">
                <g id="Big-Icon" transform="translate(872.000000, 627.000000)">
                    <circle id="Oval" fill="#68DFBA" style="mix-blend-mode: multiply;" cx="197" cy="197" r="197"></circle>
                    <ellipse id="Oval" fill="#4BBFE1" style="mix-blend-mode: multiply;" cx="336" cy="316.5" rx="69" ry="68.5"></ellipse>
                </g>
            </g>
        </g>
    </svg>
    <div class="relative justify-items-center z-1">
        <svg class="my-8 md:hidden" width="100vw" height="105px" viewBox="0 0 108 105" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
            <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                <g id="IE_mobile_Audience" transform="translate(-134.000000, -116.000000)">
                    <g id="Icon-1" transform="translate(134.000000, 116.000000)" style="mix-blend-mode: multiply;">
                        <circle id="Oval" fill="#4BBFE1" cx="87" cy="83" r="21"></circle>
                        <ellipse id="Oval" fill="#68DFBA" style="mix-blend-mode: multiply;" cx="51.5" cy="52.5" rx="51.5" ry="52.5"></ellipse>
                    </g>
                </g>
            </g>
        </svg>

        <div class="relative md:ml-32 md:pl-12 md:py-32 md:bg-transparent md:w-4/12">
            <h1 class="text-2xl md:text-5xl tracking-wide leading-normal text-ie-purple mb-4 ml-8">
            Search Behavior Analysis
            </h1>
            <p class="ml-8 mr-10 text-base leading-normal text-gray-600 pb-6">
            Search behavior is personal, intentional, and precise. Analysis of this dataset provides a unique window into audience
            intent, core needs and their daily lives. Insights from the analysis helps you connect on a more meaningful level by
            delivering targeted content and/or technology at micro-moments that make all the difference.
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
  <section class="relative z-1" style="background: #efefef url('/images/background-pattern.svg') center -5px/250% repeat">
    <div class="relative z-1 py-8 mt-12">
        <div class="relative">
            <svg class="md:hidden mb-12" width="100vw" height="164px" viewBox="0 0 324 164" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                <title>chart</title>
                <defs>
                    <filter id="filter-1">
                        <feColorMatrix in="SourceGraphic" type="matrix" values="0 0 0 0 0.712579 0 0 0 0 0.697820 0 0 0 0 0.697820 0 0 0 1.000000 0"></feColorMatrix>
                    </filter>
                    <filter id="filter-2">
                        <feColorMatrix in="SourceGraphic" type="matrix" values="0 0 0 0 0.847059 0 0 0 0 0.847059 0 0 0 0 0.847059 0 0 0 1.000000 0"></feColorMatrix>
                    </filter>
                    <filter id="filter-3">
                        <feColorMatrix in="SourceGraphic" type="matrix" values="0 0 0 0 0.906335 0 0 0 0 0.906335 0 0 0 0 0.906335 0 0 0 1.000000 0"></feColorMatrix>
                    </filter>
                    <filter id="filter-4">
                        <feColorMatrix in="SourceGraphic" type="matrix" values="0 0 0 0 1.000000 0 0 0 0 1.000000 0 0 0 0 1.000000 0 0 0 1.000000 0"></feColorMatrix>
                    </filter>
                    <filter id="filter-5">
                        <feColorMatrix in="SourceGraphic" type="matrix" values="0 0 0 0 0.294118 0 0 0 0 0.749020 0 0 0 0 0.882353 0 0 0 1.000000 0"></feColorMatrix>
                    </filter>
                </defs>
                <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                    <g id="IE_mobile_Audience" transform="translate(-24.000000, -700.000000)">
                        <g id="chart" transform="translate(24.000000, 696.786828)">
                            <circle id="Oval" fill="#59CBA7" cx="5.5" cy="34.7131722" r="5.5"></circle>
                            <circle id="Oval" fill="#4BBFE1" style="mix-blend-mode: multiply;" transform="translate(286.948272, 14.004505) rotate(-143.000000) translate(-286.948272, -14.004505) " cx="286.948272" cy="14.0045053" r="10"></circle>
                            <ellipse id="Oval" fill="#60D9B3" style="mix-blend-mode: multiply;" transform="translate(303.511443, 30.242157) rotate(-143.000000) translate(-303.511443, -30.242157) " cx="303.511443" cy="30.2421574" rx="20" ry="19"></ellipse>
                            <g id="seats" transform="translate(22.000000, 92.213172)">
                                <g filter="url(#filter-1)" id="Group-9" opacity="0.512044271">
                                    <g style="mix-blend-mode: multiply;" transform="translate(59.572954, 0.000000)">
                                        <g id="Group-4">
                                            <path d="M0.81941623,10.6665 L0.81941623,3.1315 C0.81941623,1.7595 2.17663976,0.6455 3.85074807,0.6455 L18.8340175,0.6455 C20.5071293,0.6455 21.8643528,1.7595 21.8643528,3.1315 L21.8643528,10.6665" id="Fill-1" fill="#FF0000"></path>
                                            <path d="M0.81941623,10.6665 L0.81941623,3.1315 C0.81941623,1.7595 2.17663976,0.6455 3.85074807,0.6455 L18.8340175,0.6455 C20.5071293,0.6455 21.8643528,1.7595 21.8643528,3.1315 L21.8643528,10.6665" id="Stroke-3" stroke="#FFFFFF"></path>
                                        </g>
                                        <g id="Group-8" transform="translate(22.836299, 0.000000)">
                                            <path d="M0.873027556,10.5884 L0.873027556,3.0534 C0.873027556,1.6804 2.23025108,0.5674 3.9043594,0.5674 L18.8876288,0.5674 C20.5607406,0.5674 21.9179642,1.6804 21.9179642,3.0534 L21.9179642,10.5884" id="Fill-5" fill="#FF0000"></path>
                                            <path d="M0.873027556,10.5884 L0.873027556,3.0534 C0.873027556,1.6804 2.23025108,0.5674 3.9043594,0.5674 L18.8876288,0.5674 C20.5607406,0.5674 21.9179642,1.6804 21.9179642,3.0534 L21.9179642,10.5884" id="Stroke-7" stroke="#FFFFFF"></path>
                                        </g>
                                        <g id="Group-12" transform="translate(46.586050, 0.000000)">
                                            <path d="M-0.00287935943,10.6455 L-0.00287935943,3.0905 C-0.00287935943,1.7175 1.34843381,0.6045 3.01647651,0.6045 L17.9712737,0.6045 C19.6393164,0.6045 20.9906295,1.7175 20.9906295,3.0905 L20.9906295,10.6455" id="Fill-9" fill="#FF0000"></path>
                                            <path d="M-0.00287935943,10.6455 L-0.00287935943,3.0905 C-0.00287935943,1.7175 1.34843381,0.6045 3.01647651,0.6045 L17.9712737,0.6045 C19.6393164,0.6045 20.9906295,1.7175 20.9906295,3.0905 L20.9906295,10.6455" id="Stroke-11" stroke="#FFFFFF"></path>
                                        </g>
                                        <g id="Group-16" transform="translate(69.422349, 0.000000)">
                                            <path d="M0.0504384342,10.6143 L0.0504384342,3.0593 C0.0504384342,1.6863 1.4017516,0.5733 3.06979431,0.5733 L18.0245915,0.5733 C19.6926342,0.5733 21.0439473,1.6863 21.0439473,3.0593 L21.0439473,10.6143" id="Fill-13" fill="#FF0000"></path>
                                            <path d="M0.0504384342,10.6143 L0.0504384342,3.0593 C0.0504384342,1.6863 1.4017516,0.5733 3.06979431,0.5733 L18.0245915,0.5733 C19.6926342,0.5733 21.0439473,1.6863 21.0439473,3.0593 L21.0439473,10.6143" id="Stroke-15" stroke="#FFFFFF"></path>
                                        </g>
                                        <g id="Group-20" transform="translate(92.258648, 0.000000)">
                                            <path d="M0.0244140796,10.6299 L0.0244140796,3.0749 C0.0244140796,1.7019 1.38064111,0.5889 3.05574592,0.5889 L18.0639277,0.5889 C19.738036,0.5889 21.094263,1.7019 21.094263,3.0749 L21.094263,10.6299" id="Fill-17" fill="#FF0000"></path>
                                            <path d="M0.0244140796,10.6299 L0.0244140796,3.0749 C0.0244140796,1.7019 1.38064111,0.5889 3.05574592,0.5889 L18.0639277,0.5889 C19.738036,0.5889 21.094263,1.7019 21.094263,3.0749 L21.094263,10.6299" id="Stroke-19" stroke="#FFFFFF"></path>
                                        </g>
                                        <g id="Group-24" transform="translate(115.094947, 0.000000)">
                                            <path d="M0.0774275095,10.6611 L0.0774275095,3.1061 C0.0774275095,1.7331 1.43465104,0.6201 3.10875935,0.6201 L18.1179376,0.6201 C19.7910494,0.6201 21.1482729,1.7331 21.1482729,3.1061 L21.1482729,10.6611" id="Fill-21" fill="#FF0000"></path>
                                            <path d="M0.0774275095,10.6611 L0.0774275095,3.1061 C0.0774275095,1.7331 1.43465104,0.6201 3.10875935,0.6201 L18.1179376,0.6201 C19.7910494,0.6201 21.1482729,1.7331 21.1482729,3.1061 L21.1482729,10.6611" id="Stroke-23" stroke="#FFFFFF"></path>
                                        </g>
                                        <g id="Group-28" transform="translate(137.931246, 0.000000)">
                                            <path d="M0.130939186,10.583 L0.130939186,3.027 C0.130939186,1.655 1.48816271,0.542 3.16227103,0.542 L18.1714493,0.542 C19.8445611,0.542 21.2017846,1.655 21.2017846,3.027 L21.2017846,10.583" id="Fill-25" fill="#FF0000"></path>
                                            <path d="M0.130939186,10.583 L0.130939186,3.027 C0.130939186,1.655 1.48816271,0.542 3.16227103,0.542 L18.1714493,0.542 C19.8445611,0.542 21.2017846,1.655 21.2017846,3.027 L21.2017846,10.583" id="Stroke-27" stroke="#FFFFFF"></path>
                                        </g>
                                    </g>
                                </g>
                                <g filter="url(#filter-2)" id="Group-7">
                                    <g transform="translate(51.629893, 7.000000)">
                                        <g id="Group-32">
                                            <path d="M0.0648021352,14.2583 L0.0648021352,3.9523 C0.0648021352,2.0743 1.55917865,0.5523 3.40309395,0.5523 L19.9070196,0.5523 C21.7509349,0.5523 23.2453114,2.0743 23.2453114,3.9523 L23.2453114,14.2583" id="Fill-29" fill="#FF0000"></path>
                                            <path d="M0.0648021352,14.2583 L0.0648021352,3.9523 C0.0648021352,2.0743 1.55917865,0.5523 3.40309395,0.5523 L19.9070196,0.5523 C21.7509349,0.5523 23.2453114,2.0743 23.2453114,3.9523 L23.2453114,14.2583" id="Stroke-31" stroke="#FFFFFF"></path>
                                        </g>
                                        <g id="Group-36" transform="translate(24.470736, 0.000000)">
                                            <path d="M0.820748498,14.1514 L0.820748498,3.8454 C0.820748498,1.9674 2.31052693,0.4454 4.14876865,0.4454 L20.601913,0.4454 C22.4391758,0.4454 23.9299331,1.9674 23.9299331,3.8454 L23.9299331,14.1514" id="Fill-33" fill="#FF0000"></path>
                                            <path d="M0.820748498,14.1514 L0.820748498,3.8454 C0.820748498,1.9674 2.31052693,0.4454 4.14876865,0.4454 L20.601913,0.4454 C22.4391758,0.4454 23.9299331,1.9674 23.9299331,3.8454 L23.9299331,14.1514" id="Stroke-35" stroke="#FFFFFF"></path>
                                        </g>
                                        <g id="Group-40" transform="translate(50.754120, 0.000000)">
                                            <path d="M0.583676004,14.2295 L0.583676004,3.8955 C0.583676004,2.0175 2.07345444,0.4955 3.91169615,0.4955 L20.3932265,0.4955 C22.2304894,0.4955 23.7212467,2.0175 23.7212467,3.8955 L23.7212467,14.2295" id="Fill-37" fill="#FF0000"></path>
                                            <path d="M0.583676004,14.2295 L0.583676004,3.8955 C0.583676004,2.0175 2.07345444,0.4955 3.91169615,0.4955 L20.3932265,0.4955 C22.2304894,0.4955 23.7212467,2.0175 23.7212467,3.8955 L23.7212467,14.2295" id="Stroke-39" stroke="#FFFFFF"></path>
                                        </g>
                                        <g id="Group-44" transform="translate(76.131180, 0.000000)">
                                            <path d="M0.360405005,14.1865 L0.360405005,3.8525 C0.360405005,1.9745 1.85018344,0.4525 3.68842515,0.4525 L20.1699555,0.4525 C22.0081972,0.4525 23.4979757,1.9745 23.4979757,3.8525 L23.4979757,14.1865" id="Fill-41" fill="#FF0000"></path>
                                            <path d="M0.360405005,14.1865 L0.360405005,3.8525 C0.360405005,1.9745 1.85018344,0.4525 3.68842515,0.4525 L20.1699555,0.4525 C22.0081972,0.4525 23.4979757,1.9745 23.4979757,3.8525 L23.4979757,14.1865" id="Stroke-43" stroke="#FFFFFF"></path>
                                        </g>
                                        <g id="Group-48" transform="translate(101.508240, 0.000000)">
                                            <path d="M0.13814637,14.208 L0.13814637,3.874 C0.13814637,1.996 1.63252288,0.474 3.47643819,0.474 L20.0088375,0.474 C21.8527528,0.474 23.3461474,1.996 23.3461474,3.874 L23.3461474,14.208" id="Fill-45" fill="#FF0000"></path>
                                            <path d="M0.13814637,14.208 L0.13814637,3.874 C0.13814637,1.996 1.63252288,0.474 3.47643819,0.474 L20.0088375,0.474 C21.8527528,0.474 23.3461474,1.996 23.3461474,3.874 L23.3461474,14.208" id="Stroke-47" stroke="#FFFFFF"></path>
                                        </g>
                                        <g id="Group-52" transform="translate(126.885300, 0.000000)">
                                            <path d="M0.893377644,14.251 L0.893377644,3.917 C0.893377644,2.039 2.38315607,0.517 4.22139779,0.517 L20.7019493,0.517 C22.540191,0.517 24.0309483,2.039 24.0309483,3.917 L24.0309483,14.251" id="Fill-49" fill="#FF0000"></path>
                                            <path d="M0.893377644,14.251 L0.893377644,3.917 C0.893377644,2.039 2.38315607,0.517 4.22139779,0.517 L20.7019493,0.517 C22.540191,0.517 24.0309483,2.039 24.0309483,3.917 L24.0309483,14.251" id="Stroke-51" stroke="#FFFFFF"></path>
                                        </g>
                                        <g id="Group-56" transform="translate(152.262360, 0.000000)">
                                            <path d="M0.67059606,14.1436 L0.67059606,3.8096 C0.67059606,1.9316 2.15939566,0.4096 3.99763738,0.4096 L20.4791677,0.4096 C22.3174095,0.4096 23.8081667,1.9316 23.8081667,3.8096 L23.8081667,14.1436" id="Fill-53" fill="#FF0000"></path>
                                            <path d="M0.67059606,14.1436 L0.67059606,3.8096 C0.67059606,1.9316 2.15939566,0.4096 3.99763738,0.4096 L20.4791677,0.4096 C22.3174095,0.4096 23.8081667,1.9316 23.8081667,3.8096 L23.8081667,14.1436" id="Stroke-55" stroke="#FFFFFF"></path>
                                        </g>
                                    </g>
                                </g>
                                <g filter="url(#filter-3)" id="Group-5">
                                    <g transform="translate(34.750890, 16.000000)">
                                        <g id="Group-60">
                                            <path d="M0.228255252,17.1515647 L0.228255252,4.31332941 C0.228255252,1.97438824 2.02047426,0.0780352941 4.23097777,0.0780352941 L24.0204379,0.0780352941 C26.2319421,0.0780352941 28.0231604,1.97438824 28.0231604,4.31332941 L28.0231604,17.1515647" id="Fill-57" fill="#FF0000"></path>
                                            <path d="M0.228255252,17.1515647 L0.228255252,4.31332941 C0.228255252,1.97438824 2.02047426,0.0780352941 4.23097777,0.0780352941 L24.0204379,0.0780352941 C26.2319421,0.0780352941 28.0231604,1.97438824 28.0231604,4.31332941 L28.0231604,17.1515647" id="Stroke-59" stroke="#FFFFFF"></path>
                                        </g>
                                        <g id="Group-64" transform="translate(29.926605, 0.000000)">
                                            <path d="M0.550274278,17.024 L0.550274278,4.26084211 C0.550274278,1.93557895 2.34249329,0.0503157895 4.5529968,0.0503157895 L24.3424569,0.0503157895 C26.5529604,0.0503157895 28.3451795,1.93557895 28.3451795,4.26084211 L28.3451795,17.024" id="Fill-61" fill="#FF0000"></path>
                                            <path d="M0.550274278,17.024 L0.550274278,4.26084211 C0.550274278,1.93557895 2.34249329,0.0503157895 4.5529968,0.0503157895 L24.3424569,0.0503157895 C26.5529604,0.0503157895 28.3451795,1.93557895 28.3451795,4.26084211 L28.3451795,17.024" id="Stroke-63" stroke="#FFFFFF"></path>
                                        </g>
                                        <g id="Group-68" transform="translate(59.853210, 0.000000)">
                                            <path d="M0.855181666,17.1159882 L0.855181666,4.24281176 C0.855181666,1.90281176 2.64740067,0.00751764706 4.85790419,0.00751764706 L24.6813875,0.00751764706 C26.891891,0.00751764706 28.68411,1.90281176 28.68411,4.24281176 L28.68411,17.1159882" id="Fill-65" fill="#FF0000"></path>
                                            <path d="M0.855181666,17.1159882 L0.855181666,4.24281176 C0.855181666,1.90281176 2.64740067,0.00751764706 4.85790419,0.00751764706 L24.6813875,0.00751764706 C26.891891,0.00751764706 28.68411,1.90281176 28.68411,4.24281176 L28.68411,17.1159882" id="Stroke-67" stroke="#FFFFFF"></path>
                                        </g>
                                        <g id="Group-72" transform="translate(90.686682, 0.000000)">
                                            <path d="M0.176609075,17.0676842 L0.176609075,4.26978947 C0.176609075,1.94452632 1.97482882,0.0592631579 4.19273357,0.0592631579 L24.0825901,0.0592631579 C26.3004949,0.0592631579 28.0987146,1.94452632 28.0987146,4.26978947 L28.0987146,17.0676842" id="Fill-69" fill="#FF0000"></path>
                                            <path d="M0.176609075,17.0676842 L0.176609075,4.26978947 C0.176609075,1.94452632 1.97482882,0.0592631579 4.19273357,0.0592631579 L24.0825901,0.0592631579 C26.3004949,0.0592631579 28.0987146,1.94452632 28.0987146,4.26978947 L28.0987146,17.0676842" id="Stroke-71" stroke="#FFFFFF"></path>
                                        </g>
                                        <g id="Group-76" transform="translate(119.706420, 0.000000)">
                                            <path d="M0.497938681,17.0944211 L0.497938681,4.29652632 C0.497938681,1.97126316 2.29015769,0.086 4.5006612,0.086 L24.3241445,0.086 C26.534648,0.086 28.326867,1.97126316 28.326867,4.29652632 L28.326867,17.0944211" id="Fill-73" fill="#FF0000"></path>
                                            <path d="M0.497938681,17.0944211 L0.497938681,4.29652632 C0.497938681,1.97126316 2.29015769,0.086 4.5006612,0.086 L24.3241445,0.086 C26.534648,0.086 28.326867,1.97126316 28.326867,4.29652632 L28.326867,17.0944211" id="Stroke-75" stroke="#FFFFFF"></path>
                                        </g>
                                        <g id="Group-80" transform="translate(149.633025, 0.000000)">
                                            <path d="M0.819457368,17.1423529 L0.819457368,4.26917647 C0.819457368,1.93023529 2.61167638,0.0338823529 4.82217989,0.0338823529 L24.6456632,0.0338823529 C26.8571674,0.0338823529 28.6483857,1.93023529 28.6483857,4.26917647 L28.6483857,17.1423529" id="Fill-77" fill="#FF0000"></path>
                                            <path d="M0.819457368,17.1423529 L0.819457368,4.26917647 C0.819457368,1.93023529 2.61167638,0.0338823529 4.82217989,0.0338823529 L24.6456632,0.0338823529 C26.8571674,0.0338823529 28.6483857,1.93023529 28.6483857,4.26917647 L28.6483857,17.1423529" id="Stroke-79" stroke="#FFFFFF"></path>
                                        </g>
                                        <g id="Group-84" transform="translate(180.466497, 0.000000)">
                                            <path d="M0.140765163,17.0147368 L0.140765163,4.21684211 C0.140765163,1.89157895 1.9389849,0.00631578947 4.15688966,0.00631578947 L24.0477502,0.00631578947 C26.265655,0.00631578947 28.0638747,1.89157895 28.0638747,4.21684211 L28.0638747,17.0147368" id="Fill-81" fill="#FF0000"></path>
                                            <path d="M0.140765163,17.0147368 L0.140765163,4.21684211 C0.140765163,1.89157895 1.9389849,0.00631578947 4.15688966,0.00631578947 L24.0477502,0.00631578947 C26.265655,0.00631578947 28.0638747,1.89157895 28.0638747,4.21684211 L28.0638747,17.0147368" id="Stroke-83" stroke="#FFFFFF"></path>
                                        </g>
                                    </g>
                                </g>
                                <g filter="url(#filter-4)" id="Group-6">
                                    <g transform="translate(0.000000, 30.000000)">
                                        <path d="M33.2518321,44.8744255 L0.877005545,45.0000982 C-0.273805247,44.9922436 -0.294549475,44.15868 0.829590165,43.1366073 L9.03936569,36.5790436 C10.1635053,35.5569709 12.0087539,34.7351891 13.1585769,34.7429878 L43.533067,34.9511891 C44.6838778,34.9580618 44.8439047,35.5029709 43.5804824,36.8136982 L37.3463477,43.3732255 C36.2212202,44.3943164 35.1109101,44.9873345 33.2518321,44.8744255" id="Fill-85" fill="#FFFFFF"></path>
                                        <path d="M113.514883,45 L82.2705876,44.9645015 C81.1392305,44.9635421 80.588761,44.1662848 81.0411076,43.1838642 L84.9267746,36.8758412 C85.3791212,35.89438 86.6625688,35.0990415 87.7949071,35.1 L117.664501,35.1287827 C118.795858,35.1297421 119.346327,35.9269995 118.893981,36.9084607 L116.479176,43.1972957 C116.027811,44.1797163 114.64624,45.0009586 113.514883,45" id="Fill-88" fill="#FFFFFF"></path>
                                        <path d="M156.85787,44.9414394 L122.971343,45 C121.77091,45.0047529 120.865846,44.6143198 120.869824,43.6348795 L123.017245,37.053156 C123.316604,35.8377292 124.025089,35.1873271 125.225522,35.1806121 L155.887945,35.1 C157.088377,35.0942755 158.057305,35.8837753 158.052316,36.8632156 L159.039205,43.1561913 C159.034216,44.1356315 158.057305,44.9356836 156.85787,44.9414394" id="Fill-90" fill="#FFFFFF"></path>
                                        <path d="M42.4060566,32.4 L16.6658394,32.4 C14.4875557,32.4 12.7232444,30.6582423 12.7232444,28.5099772 L12.7232444,3.89002281 C12.7232444,1.74175771 14.4875557,0 16.6658394,0 L42.4060566,0 C44.5833546,0 46.3486516,1.74175771 46.3486516,3.89002281 L46.3486516,28.5099772 C46.3486516,30.6582423 44.5833546,32.4 42.4060566,32.4" id="Fill-92" fill="#FFFFFF"></path>
                                        <path d="M42.4060566,32.4 L16.6658394,32.4 C14.4875557,32.4 12.7232444,30.6582423 12.7232444,28.5099772 L12.7232444,3.89002281 C12.7232444,1.74175771 14.4875557,0 16.6658394,0 L42.4060566,0 C44.5833546,0 46.3486516,1.74175771 46.3486516,3.89002281 L46.3486516,28.5099772 C46.3486516,30.6582423 44.5833546,32.4 42.4060566,32.4 Z" id="Stroke-94" fill="#FFFFFF"></path>
                                        <path d="M79.6666429,32.4 L53.9264257,32.4 C51.748142,32.4 49.9838307,30.6582423 49.9838307,28.5099772 L49.9838307,3.89002281 C49.9838307,1.74175771 51.748142,0 53.9264257,0 L79.6666429,0 C81.843941,0 83.6092379,1.74175771 83.6092379,3.89002281 L83.6092379,28.5099772 C83.6092379,30.6582423 81.843941,32.4 79.6666429,32.4" id="Fill-96" fill="#FFFFFF"></path>
                                        <path d="M79.6666429,32.4 L53.9264257,32.4 C51.748142,32.4 49.9838307,30.6582423 49.9838307,28.5099772 L49.9838307,3.89002281 C49.9838307,1.74175771 51.748142,0 53.9264257,0 L79.6666429,0 C81.843941,0 83.6092379,1.74175771 83.6092379,3.89002281 L83.6092379,28.5099772 C83.6092379,30.6582423 81.843941,32.4 79.6666429,32.4 Z" id="Stroke-98" fill="#FFFFFF"></path>
                                        <path d="M116.023282,32.4 L90.2733694,32.4 C88.0987485,32.4 86.3356222,30.660331 86.3356222,28.514642 L86.3356222,3.88535796 C86.3356222,1.73966903 88.0987485,0 90.2733694,0 L116.023282,0 C118.197903,0 119.961029,1.73966903 119.961029,3.88535796 L119.961029,28.514642 C119.961029,30.660331 118.197903,32.4 116.023282,32.4" id="Fill-100" fill="#FFFFFF"></path>
                                        <path d="M116.023282,32.4 L90.2733694,32.4 C88.0987485,32.4 86.3356222,30.660331 86.3356222,28.514642 L86.3356222,3.88535796 C86.3356222,1.73966903 88.0987485,0 90.2733694,0 L116.023282,0 C118.197903,0 119.961029,1.73966903 119.961029,3.88535796 L119.961029,28.514642 C119.961029,30.660331 118.197903,32.4 116.023282,32.4 Z" id="Stroke-102" fill="#FFFFFF"></path>
                                        <path d="M153.283869,32.4 L127.533956,32.4 C125.359335,32.4 123.596209,30.660331 123.596209,28.514642 L123.596209,3.88535796 C123.596209,1.73869769 125.359335,0 127.533956,0 L153.283869,0 C155.458489,0 157.221616,1.73869769 157.221616,3.88535796 L157.221616,28.514642 C157.221616,30.660331 155.458489,32.4 153.283869,32.4" id="Fill-104" fill="#FFFFFF"></path>
                                        <path d="M153.283869,32.4 L127.533956,32.4 C125.359335,32.4 123.596209,30.660331 123.596209,28.514642 L123.596209,3.88535796 C123.596209,1.73869769 125.359335,0 127.533956,0 L153.283869,0 C155.458489,0 157.221616,1.73869769 157.221616,3.88535796 L157.221616,28.514642 C157.221616,30.660331 155.458489,32.4 153.283869,32.4 Z" id="Stroke-106" fill="#FFFFFF"></path>
                                        <path d="M190.54434,32.4 L164.794657,32.4 C162.618988,32.4 160.856795,30.6613023 160.856795,28.514642 L160.856795,3.88535796 C160.856795,1.73966903 162.618988,0 164.794657,0 L190.54434,0 C192.719024,0 194.482202,1.73966903 194.482202,3.88535796 L194.482202,28.514642 C194.482202,30.6613023 192.719024,32.4 190.54434,32.4" id="Fill-108" fill="#FFFFFF"></path>
                                        <path d="M190.54434,32.4 L164.794657,32.4 C162.618988,32.4 160.856795,30.6613023 160.856795,28.514642 L160.856795,3.88535796 C160.856795,1.73966903 162.618988,0 164.794657,0 L190.54434,0 C192.719024,0 194.482202,1.73966903 194.482202,3.88535796 L194.482202,28.514642 C194.482202,30.6613023 192.719024,32.4 190.54434,32.4 Z" id="Stroke-110" fill="#FFFFFF"></path>
                                        <path d="M226.896131,32.4 L201.146449,32.4 C198.971764,32.4 197.208586,30.660331 197.208586,28.514642 L197.208586,3.88535796 C197.208586,1.73966903 198.971764,0 201.146449,0 L226.896131,0 C229.070816,0 230.833994,1.73966903 230.833994,3.88535796 L230.833994,28.514642 C230.833994,30.660331 229.070816,32.4 226.896131,32.4" id="Fill-112" fill="#FFFFFF"></path>
                                        <path d="M226.896131,32.4 L201.146449,32.4 C198.971764,32.4 197.208586,30.660331 197.208586,28.514642 L197.208586,3.88535796 C197.208586,1.73966903 198.971764,0 201.146449,0 L226.896131,0 C229.070816,0 230.833994,1.73966903 230.833994,3.88535796 L230.833994,28.514642 C230.833994,30.660331 229.070816,32.4 226.896131,32.4 Z" id="Stroke-114" fill="#FFFFFF"></path>
                                        <path d="M264.156717,32.4 L238.407035,32.4 C236.232351,32.4 234.469173,30.660331 234.469173,28.514642 L234.469173,3.88535796 C234.469173,1.73966903 236.232351,0 238.407035,0 L264.156717,0 C266.331402,0 268.09458,1.73966903 268.09458,3.88535796 L268.09458,28.514642 C268.09458,30.660331 266.331402,32.4 264.156717,32.4" id="Fill-116" fill="#FFFFFF"></path>
                                        <path d="M264.156717,32.4 L238.407035,32.4 C236.232351,32.4 234.469173,30.660331 234.469173,28.514642 L234.469173,3.88535796 C234.469173,1.73966903 236.232351,0 238.407035,0 L264.156717,0 C266.331402,0 268.09458,1.73966903 268.09458,3.88535796 L268.09458,28.514642 C268.09458,30.660331 266.331402,32.4 264.156717,32.4 Z" id="Stroke-118" fill="#FFFFFF"></path>
                                        <path d="M245.985789,45 L277.835664,44.9527712 C278.968305,44.9508436 279.337644,44.122953 278.662984,43.1023056 L272.358604,36.946616 C270.774876,35.598282 269.535865,35.098078 267.834933,35.1 L238.621651,35.1481948 C238.058285,35.1501223 236.70404,35.9789767 237.38067,36.9986604 L242.711963,43.1553137 C243.387609,44.1759612 244.854133,45.0019242 245.985789,45" id="Fill-120" fill="#FFFFFF"></path>
                                        <path d="M229.975556,35.100442 L199.518247,35.2136185 C198.376184,35.2145858 197.820506,36.0377755 198.277133,37.05056 L202.007408,43.1678943 C202.464035,44.1816461 203.759627,45.0009665 203.964663,45 L237.089426,44.9700122 C239.168515,44.9690449 239.240822,43.6563911 238.786177,42.6426393 L233.810826,36.8687037 C232.43104,35.0365989 231.116628,35.0994747 229.975556,35.100442" id="Fill-122" fill="#FFFFFF"></path>
                                        <path d="M191.198743,35.1019164 L162.600504,35.1 C161.467064,35.1009582 160.629261,35.553223 160.91213,36.8918117 L161.994497,43.2225603 C162.447283,44.204703 163.731979,45.0009573 164.864437,45 L196.727455,44.9712535 C197.859912,44.9702953 198.4119,44.1721246 197.959113,43.1890237 L194.533257,36.7825783 C194.08047,35.8004355 192.331201,35.1009582 191.198743,35.1019164" id="Fill-124" fill="#FFFFFF"></path>
                                        <path d="M74.3135004,44.8915883 L42.1713041,45 C41.0158526,44.9980812 40.6230191,44.2785348 41.0849993,43.2759668 L46.9394207,36.9151765 C47.831313,35.9740098 48.7121819,35.0990414 49.8676335,35.1 L80.3743598,35.129742 C81.5298113,35.1307014 82.0920041,35.945228 81.6300239,36.947796 L77.4401342,43.2020934 C76.978154,44.2046614 75.4689519,44.8935071 74.3135004,44.8915883" id="Fill-126" fill="#FFFFFF"></path>
                                    </g>
                                </g>
                            </g>
                            <g id="gree-diagram" transform="translate(91.000000, 18.213172)" fill="#65D8B4">
                                <path d="M33.7605634,27.8120805 C36.5025405,27.8120805 38.7253521,30.0348922 38.7253521,32.7768693 L38.7253521,148 L38.7253521,148 L28.7957746,148 L28.7957746,32.7768693 C28.7957746,30.0348922 31.0185863,27.8120805 33.7605634,27.8120805 Z" id="Rectangle"></path>
                                <path d="M4.96478873,35.7583893 C7.70676584,35.7583893 9.92957746,37.9812009 9.92957746,40.723178 L9.92957746,148 L9.92957746,148 L0,148 L0,40.723178 C-3.35795348e-16,37.9812009 2.22281163,35.7583893 4.96478873,35.7583893 Z" id="Rectangle"></path>
                                <path d="M63.5492958,20.8590604 C66.2912729,20.8590604 68.5140845,23.081872 68.5140845,25.8238491 L68.5140845,148 L68.5140845,148 L58.584507,148 L58.584507,25.8238491 C58.584507,23.081872 60.8073187,20.8590604 63.5492958,20.8590604 Z" id="Rectangle"></path>
                                <path d="M77.4507042,14.8993289 C80.1926813,14.8993289 82.415493,17.1221405 82.415493,19.8641176 L82.415493,148 L82.415493,148 L72.4859155,148 L72.4859155,19.8641176 C72.4859155,17.1221405 74.7087271,14.8993289 77.4507042,14.8993289 Z" id="Rectangle"></path>
                                <path d="M106.246479,14.8993289 C108.988456,14.8993289 111.211268,17.1221405 111.211268,19.8641176 L111.211268,148 L111.211268,148 L101.28169,148 L101.28169,19.8641176 C101.28169,17.1221405 103.504502,14.8993289 106.246479,14.8993289 Z" id="Rectangle"></path>
                                <path d="M121.140845,2.97986577 C123.882822,2.97986577 126.105634,5.2026774 126.105634,7.9446545 L126.105634,148 L126.105634,148 L116.176056,148 L116.176056,7.9446545 C116.176056,5.2026774 118.398868,2.97986577 121.140845,2.97986577 Z" id="Rectangle"></path>
                                <path d="M136.035211,16.885906 C138.777188,16.885906 141,19.1087177 141,21.8506948 L141,148 L141,148 L131.070423,148 L131.070423,21.8506948 C131.070423,19.1087177 133.293234,16.885906 136.035211,16.885906 Z" id="Rectangle"></path>
                                <path d="M92.3450704,35.7583893 C95.0870475,35.7583893 97.3098592,37.9812009 97.3098592,40.723178 L97.3098592,148 L97.3098592,148 L87.3802817,148 L87.3802817,40.723178 C87.3802817,37.9812009 89.6030933,35.7583893 92.3450704,35.7583893 Z" id="Rectangle"></path>
                                <path d="M47.6619718,14.8993289 C50.4039489,14.8993289 52.6267606,17.1221405 52.6267606,19.8641176 L52.6267606,148 L52.6267606,148 L42.6971831,148 L42.6971831,19.8641176 C42.6971831,17.1221405 44.9199947,14.8993289 47.6619718,14.8993289 Z" id="Rectangle"></path>
                                <path d="M19.8591549,0 C22.601132,-5.03693022e-16 24.8239437,2.22281163 24.8239437,4.96478873 L24.8239437,148 L24.8239437,148 L14.8943662,148 L14.8943662,4.96478873 C14.8943662,2.22281163 17.1171778,5.03693022e-16 19.8591549,0 Z" id="Rectangle"></path>
                            </g>
                            <!-- filter="url(#filter-5)" -->
                            <g id="blue-diagram">
                                <g transform="translate(91.000000, 100.213172)">
                                    <rect id="Rectangle" fill="#4bbfe1" x="28.7957746" y="12" width="9.92957746" height="54"></rect>
                                    <rect id="Rectangle" fill="#4bbfe1" x="0" y="23" width="9.92957746" height="43"></rect>
                                    <rect id="Rectangle" fill="#4bbfe1" x="58.584507" y="9" width="9.92957746" height="57"></rect>
                                    <rect id="Rectangle" fill="#4bbfe1" x="72.4859155" y="0" width="9.92957746" height="66"></rect>
                                    <rect id="Rectangle" fill="#4bbfe1" x="101.28169" y="7" width="9.92957746" height="59"></rect>
                                    <rect id="Rectangle" fill="#4bbfe1" x="116.176056" y="26" width="9.92957746" height="40"></rect>
                                    <rect id="Rectangle" fill="#4bbfe1" x="131.070423" y="7" width="9.92957746" height="59"></rect>
                                    <rect id="Rectangle" fill="#4bbfe1" x="87.3802817" y="16" width="9.92957746" height="50"></rect>
                                    <rect id="Rectangle" fill="#4bbfe1" x="42.6971831" y="16" width="9.92957746" height="50"></rect>
                                    <rect id="Rectangle" fill="#4bbfe1" x="14.8943662" y="0" width="9.92957746" height="66"></rect>
                                </g>
                            </g>
                        </g>
                    </g>
                </g>
            </svg>
            <div class="md:hidden absolute -bottom-10 right-14 h-5 w-5 rounded-full bg-blue-500" style="mix-blend-mode: multiply"></div>
            <div class="md:hidden absolute -bottom-18 left-16 w-6 h-6 rounded-full bg-blue-500 z-behind"></div>
            <div class="md:hidden absolute w-6 h-6 rounded-full -bottom-20 left-12 z-behind" style="mix-blend-mode: multiply; background-color:#60D9B3;"></div>
        </div>
    <div class="relative md:flex md:flex-row md:mt-12 md:mx-40">
      <div class="relative md:inline-block mx-8 md:mx-0 md:mt-16 md:mr-4 text-gray-600 bg-white p-8 md:p-14 md:flex-1 md:h-1/6">
        <h4 class="text-4xl pb-2">
          Research & Analysis
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
        <p class="pt-4 md:leading-5">
          We identify value in every click by organizing PPC accounts and assets to create efficiency and pinpoint learnings.
          Advertising strategy, keywords and creative are informed by natural language search behavior and desired high value
          actions. Messaging heavily impacts CTR, so specific calls-to-action are incorporated into ads to maximize clicks and
          guide on-site behavior. By focusing on what really matters to your audience, we redefine customer journeys at
          decision making moments.
        </p>
      </div>
      <div class="relative mx-8 md:mx-0 text-gray-600 bg-white p-8 mt-16 md:mt-0 md:p-14 md:flex-1 md:h-1/6">
        <div class="md:hidden absolute -top-3 left-20 w-5 h-5 rounded-full bg-blue-500 z-behind" style="left: 5.25rem;"></div>
        <div class="md:hidden absolute w-8 h-8 rounded-full -top-5 left-24 z-behind" style="mix-blend-mode: multiply; background-color:#60D9B3;"></div>
        <h4 class="text-4xl pb-2">
          Insights & Imagination
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
        <p class="pt-4 md:leading-5">
          We identify value in every click by organizing PPC accounts and assets to create efficiency and pinpoint learnings.
          Advertising strategy, keywords and creative are informed by natural language search behavior and desired high
          value actions. Messaging heavily impacts CTR, so specific calls-to-action are incorporated into ads to maximize
          clicks and guide on-site behavior. By focusing on what really matters to your audience, we redefine customer
          journeys at decision making moments.
        </p>
        <div class="md:hidden absolute bottom-0 right-5 w-4 h-4 rounded-full bg-blue-500" style=""></div>
        <div class="md:hidden absolute w-6 h-6 rounded-full -bottom-2 right-7" style="mix-blend-mode: multiply; background-color:#60D9B3;"></div>
        <div class="md:hidden absolute -bottom-6 left-10 w-3 h-3 rounded-full bg-blue-500" style=""></div>
      </div>
    </div>
    <div class="hidden md:block">
        <svg width="100vw" height="687px" viewBox="0 0 1112 687" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
            <title>Diagram</title>
            <defs>
                <filter id="filter-1">
                    <feColorMatrix in="SourceGraphic" type="matrix" values="0 0 0 0 0.746065 0 0 0 0 0.746065 0 0 0 0 0.746065 0 0 0 1.000000 0"></feColorMatrix>
                </filter>
                <filter id="filter-2">
                    <feColorMatrix in="SourceGraphic" type="matrix" values="0 0 0 0 0.858824 0 0 0 0 0.858824 0 0 0 0 0.858824 0 0 0 1.000000 0"></feColorMatrix>
                </filter>
                <filter id="filter-3">
                    <feColorMatrix in="SourceGraphic" type="matrix" values="0 0 0 0 0.906335 0 0 0 0 0.906335 0 0 0 0 0.906335 0 0 0 1.000000 0"></feColorMatrix>
                </filter>
                <filter id="filter-4">
                    <feColorMatrix in="SourceGraphic" type="matrix" values="0 0 0 0 1.000000 0 0 0 0 1.000000 0 0 0 0 1.000000 0 0 0 1.000000 0"></feColorMatrix>
                </filter>
                <filter id="filter-5">
                    <feColorMatrix in="SourceGraphic" type="matrix" values="0 0 0 0 0.294118 0 0 0 0 0.749020 0 0 0 0 0.882353 0 0 0 1.000000 0"></feColorMatrix>
                </filter>
            </defs>
            <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                <g id="IE_desktop_AR" transform="translate(-401.000000, -1687.000000)">
                    <g id="Secondary-section" transform="translate(-12.000000, 996.000000)">
                        <g id="Diagram" transform="translate(413.000000, 686.000000)">
                            <g id="seats" transform="translate(92.000000, 442.000000)">
                                <g id="Group-9" opacity="0.512044271">
                                    <g style="mix-blend-mode: multiply;" transform="translate(201.591778, 0.000000)">
                                        <g id="Group-4" transform="translate(0.000000, 1.050420)">
                                            <path d="M0.644182895,34.104812 L0.644182895,8.52851326 C0.644182895,3.87148847 5.19523055,0.0902015765 10.8088576,0.0902015765 L61.0508198,0.0902015765 C66.6611054,0.0902015765 71.2121531,3.87148847 71.2121531,8.52851326 L71.2121531,34.104812" id="Fill-1" fill="#D0D0D0"></path>
                                            <path d="M0.644182895,34.104812 L0.644182895,8.52851326 C0.644182895,3.87148847 5.19523055,0.0902015765 10.8088576,0.0902015765 L61.0508198,0.0902015765 C66.6611054,0.0902015765 71.2121531,3.87148847 71.2121531,8.52851326 L71.2121531,34.104812" id="Stroke-3" stroke="#FFFFFF"></path>
                                        </g>
                                        <g id="Group-8" transform="translate(76.574774, 0.000000)">
                                            <path d="M0.823952619,34.8901347 L0.823952619,9.31383603 C0.823952619,4.6534169 5.37500027,0.875524342 10.9886273,0.875524342 L61.2305895,0.875524342 C66.8408751,0.875524342 71.3919228,4.6534169 71.3919228,9.31383603 L71.3919228,34.8901347" id="Fill-5" fill="#D0D0D0"></path>
                                            <path d="M0.823952619,34.8901347 L0.823952619,9.31383603 C0.823952619,4.6534169 5.37500027,0.875524342 10.9886273,0.875524342 L61.2305895,0.875524342 C66.8408751,0.875524342 71.3919228,4.6534169 71.3919228,9.31383603 L71.3919228,34.8901347" id="Stroke-7" stroke="#FFFFFF"></path>
                                        </g>
                                        <g id="Group-12" transform="translate(154.057308, 1.000000)">
                                            <path d="M0.0420884519,34.0839511 L0.0420884519,8.43976578 C0.0420884519,3.77934666 4.57331746,0.00145409403 10.1666053,0.00145409403 L60.3130942,0.00145409403 C65.906382,0.00145409403 70.437611,3.77934666 70.437611,8.43976578 L70.437611,34.0839511" id="Fill-9" fill="#D0D0D0"></path>
                                            <path d="M0.0420884519,34.0839511 L0.0420884519,8.43976578 C0.0420884519,3.77934666 4.57331746,0.00145409403 10.1666053,0.00145409403 L60.3130942,0.00145409403 C65.906382,0.00145409403 70.437611,3.77934666 70.437611,8.43976578 L70.437611,34.0839511" id="Stroke-11" stroke="#FFFFFF"></path>
                                        </g>
                                        <g id="Group-16" transform="translate(230.683826, 0.000000)">
                                            <path d="M0.16913037,34.978048 L0.16913037,9.33386259 C0.16913037,4.67344347 4.70035938,0.895550906 10.2936472,0.895550906 L60.4401361,0.895550906 C66.0334239,0.895550906 70.5646529,4.67344347 70.5646529,9.33386259 L70.5646529,34.978048" id="Fill-13" fill="#D0D0D0"></path>
                                            <path d="M0.16913037,34.978048 L0.16913037,9.33386259 C0.16913037,4.67344347 4.70035938,0.895550906 10.2936472,0.895550906 L60.4401361,0.895550906 C66.0334239,0.895550906 70.5646529,4.67344347 70.5646529,9.33386259 L70.5646529,34.978048" id="Stroke-15" stroke="#FFFFFF"></path>
                                        </g>
                                        <g id="Group-20" transform="translate(307.258599, 0.000000)">
                                            <path d="M0.0818653946,35.0309995 L0.0818653946,9.38681419 C0.0818653946,4.72639506 4.6295716,0.9485025 10.2465401,0.9485025 L60.5720384,0.9485025 C66.1856655,0.9485025 70.7333717,4.72639506 70.7333717,9.38681419 L70.7333717,35.0309995" id="Fill-17" fill="#D0D0D0"></path>
                                            <path d="M0.0818653946,35.0309995 L0.0818653946,9.38681419 C0.0818653946,4.72639506 4.6295716,0.9485025 10.2465401,0.9485025 L60.5720384,0.9485025 C66.1856655,0.9485025 70.7333717,4.72639506 70.7333717,9.38681419 L70.7333717,35.0309995" id="Stroke-19" stroke="#FFFFFF"></path>
                                        </g>
                                        <g id="Group-24" transform="translate(383.833373, 1.050420)">
                                            <path d="M0.259630252,34.0864826 L0.259630252,8.44229721 C0.259630252,3.78187808 4.8106779,0.00398551983 10.424305,0.00398551983 L60.7531447,0.00398551983 C66.3634303,0.00398551983 70.914478,3.78187808 70.914478,8.44229721 L70.914478,34.0864826" id="Fill-21" fill="#D0D0D0"></path>
                                            <path d="M0.259630252,34.0864826 L0.259630252,8.44229721 C0.259630252,3.78187808 4.8106779,0.00398551983 10.424305,0.00398551983 L60.7531447,0.00398551983 C66.3634303,0.00398551983 70.914478,3.78187808 70.914478,8.44229721 L70.914478,34.0864826" id="Stroke-23" stroke="#FFFFFF"></path>
                                        </g>
                                        <g id="Group-28" transform="translate(460.408147, 0.000000)">
                                            <path d="M0.439065831,34.8718053 L0.439065831,9.22422564 C0.439065831,4.56720085 4.99011348,0.789308285 10.6037405,0.789308285 L60.9325803,0.789308285 C66.5428659,0.789308285 71.0939136,4.56720085 71.0939136,9.22422564 L71.0939136,34.8718053" id="Fill-25" fill="#D0D0D0"></path>
                                            <path d="M0.439065831,34.8718053 L0.439065831,9.22422564 C0.439065831,4.56720085 4.99011348,0.789308285 10.6037405,0.789308285 L60.9325803,0.789308285 C66.5428659,0.789308285 71.0939136,4.56720085 71.0939136,9.22422564 L71.0939136,34.8718053" id="Stroke-27" stroke="#FFFFFF"></path>
                                        </g>
                                    </g>
                                </g>
                                <g id="Group-7">
                                    <g transform="translate(172.727667, 24.350649)">
                                        <g id="Group-32">
                                            <path d="M0.217355739,46.0143147 L0.217355739,11.9955917 C0.217355739,5.79656576 5.2297108,0.772648014 11.4144695,0.772648014 L66.7710243,0.772648014 C72.955783,0.772648014 77.9681381,5.79656576 77.9681381,11.9955917 L77.9681381,46.0143147" id="Fill-29" fill="#DBDBDB"></path>
                                            <path d="M0.217355739,46.0143147 L0.217355739,11.9955917 C0.217355739,5.79656576 5.2297108,0.772648014 11.4144695,0.772648014 L66.7710243,0.772648014 C72.955783,0.772648014 77.9681381,5.79656576 77.9681381,11.9955917 L77.9681381,46.0143147" id="Stroke-31" stroke="#FFFFFF"></path>
                                        </g>
                                        <g id="Group-36" transform="translate(84.181878, 0.000000)">
                                            <path d="M0.649422164,45.6614521 L0.649422164,11.6427292 C0.649422164,5.44370321 5.6463546,0.41978546 11.8120833,0.41978546 L66.9983102,0.41978546 C73.1607557,0.41978546 78.1609713,5.44370321 78.1609713,11.6427292 L78.1609713,45.6614521" id="Fill-33" fill="#DBDBDB"></path>
                                            <path d="M0.649422164,45.6614521 L0.649422164,11.6427292 C0.649422164,5.44370321 5.6463546,0.41978546 11.8120833,0.41978546 L66.9983102,0.41978546 C73.1607557,0.41978546 78.1609713,5.44370321 78.1609713,11.6427292 L78.1609713,45.6614521" id="Stroke-35" stroke="#FFFFFF"></path>
                                        </g>
                                        <g id="Group-40" transform="translate(171.288406, 0.000000)">
                                            <path d="M0.905990246,45.9192497 L0.905990246,11.8081026 C0.905990246,5.60907659 5.90292268,0.585158836 12.0686514,0.585158836 L67.3500892,0.585158836 C73.5125348,0.585158836 78.5127503,5.60907659 78.5127503,11.8081026 L78.5127503,45.9192497" id="Fill-37" fill="#DBDBDB"></path>
                                            <path d="M0.905990246,45.9192497 L0.905990246,11.8081026 C0.905990246,5.60907659 5.90292268,0.585158836 12.0686514,0.585158836 L67.3500892,0.585158836 C73.5125348,0.585158836 78.5127503,5.60907659 78.5127503,11.8081026 L78.5127503,45.9192497" id="Stroke-39" stroke="#FFFFFF"></path>
                                        </g>
                                        <g id="Group-44" transform="translate(256.406737, 0.000000)">
                                            <path d="M0.157107008,45.7773125 L0.157107008,11.6661653 C0.157107008,5.46713936 5.15403944,0.443221607 11.3197682,0.443221607 L66.6012059,0.443221607 C72.7669347,0.443221607 77.7638671,5.46713936 77.7638671,11.6661653 L77.7638671,45.7773125" id="Fill-41" fill="#DBDBDB"></path>
                                            <path d="M0.157107008,45.7773125 L0.157107008,11.6661653 C0.157107008,5.46713936 5.15403944,0.443221607 11.3197682,0.443221607 L66.6012059,0.443221607 C72.7669347,0.443221607 77.7638671,5.46713936 77.7638671,11.6661653 L77.7638671,45.7773125" id="Stroke-43" stroke="#FFFFFF"></path>
                                        </g>
                                        <g id="Group-48" transform="translate(340.473325, 0.000000)">
                                            <path d="M0.463362916,45.8482811 L0.463362916,11.7371339 C0.463362916,5.53810797 5.47571798,0.514190222 11.6604767,0.514190222 L67.1125362,0.514190222 C73.297295,0.514190222 78.3063568,5.53810797 78.3063568,11.7371339 L78.3063568,45.8482811" id="Fill-45" fill="#DBDBDB"></path>
                                            <path d="M0.463362916,45.8482811 L0.463362916,11.7371339 C0.463362916,5.53810797 5.47571798,0.514190222 11.6604767,0.514190222 L67.1125362,0.514190222 C73.297295,0.514190222 78.3063568,5.53810797 78.3063568,11.7371339 L78.3063568,45.8482811" id="Stroke-47" stroke="#FFFFFF"></path>
                                        </g>
                                        <g id="Group-52" transform="translate(427.695143, 0.000000)">
                                            <path d="M0.893030828,45.9902184 L0.893030828,11.8790712 C0.893030828,5.6800452 5.88996326,0.656127451 12.055692,0.656127451 L67.3338466,0.656127451 C73.4995753,0.656127451 78.4997909,5.6800452 78.4997909,11.8790712 L78.4997909,45.9902184" id="Fill-49" fill="#DBDBDB"></path>
                                            <path d="M0.893030828,45.9902184 L0.893030828,11.8790712 C0.893030828,5.6800452 5.88996326,0.656127451 12.055692,0.656127451 L67.3338466,0.656127451 C73.4995753,0.656127451 78.4997909,5.6800452 78.4997909,11.8790712 L78.4997909,45.9902184" id="Stroke-51" stroke="#FFFFFF"></path>
                                        </g>
                                        <g id="Group-56" transform="translate(512.813474, 0.000000)">
                                            <path d="M0.145789158,45.6357054 L0.145789158,11.5245582 C0.145789158,5.32553221 5.13943846,0.301614464 11.3051672,0.301614464 L66.586605,0.301614464 C72.7523337,0.301614464 77.7525492,5.32553221 77.7525492,11.5245582 L77.7525492,45.6357054" id="Fill-53" fill="#DBDBDB"></path>
                                            <path d="M0.145789158,45.6357054 L0.145789158,11.5245582 C0.145789158,5.32553221 5.13943846,0.301614464 11.3051672,0.301614464 L66.586605,0.301614464 C72.7523337,0.301614464 77.7525492,5.32553221 77.7525492,11.5245582 L77.7525492,45.6357054" id="Stroke-55" stroke="#FFFFFF"></path>
                                        </g>
                                    </g>
                                </g>
                                <g id="Group-5">
                                    <g transform="translate(116.773634, 52.521008)">
                                        <g id="Group-60">
                                            <path d="M0.765139522,57.2337567 L0.765139522,14.3933251 C0.765139522,6.58841673 6.77287685,0.26039916 14.182755,0.26039916 L80.5194459,0.26039916 C87.9326784,0.26039916 93.9370614,6.58841673 93.9370614,14.3933251 L93.9370614,57.2337567" id="Fill-57" fill="#E7E7E7"></path>
                                            <path d="M0.765139522,57.2337567 L0.765139522,14.3933251 C0.765139522,6.58841673 6.77287685,0.26039916 14.182755,0.26039916 L80.5194459,0.26039916 C87.9326784,0.26039916 93.9370614,6.58841673 93.9370614,14.3933251 L93.9370614,57.2337567" id="Stroke-59" stroke="#FFFFFF"></path>
                                        </g>
                                        <g id="Group-64" transform="translate(101.369384, 0.000000)">
                                            <path d="M0.792843155,56.8080808 L0.792843155,14.218178 C0.792843155,6.45891243 6.80058048,0.167900813 14.2104586,0.167900813 L80.5471495,0.167900813 C87.9570277,0.167900813 93.964765,6.45891243 93.964765,14.218178 L93.964765,56.8080808" id="Fill-61" fill="#E7E7E7"></path>
                                            <path d="M0.792843155,56.8080808 L0.792843155,14.218178 C0.792843155,6.45891243 6.80058048,0.167900813 14.2104586,0.167900813 L80.5471495,0.167900813 C87.9570277,0.167900813 93.964765,6.45891243 93.964765,14.218178 L93.964765,56.8080808" id="Stroke-63" stroke="#FFFFFF"></path>
                                        </g>
                                        <g id="Group-68" transform="translate(202.738768, 0.000000)">
                                            <path d="M0.763186482,57.1150401 L0.763186482,14.1580118 C0.763186482,6.34957028 6.77092381,0.0250859435 14.180802,0.0250859435 L80.6315426,0.0250859435 C88.0414207,0.0250859435 94.0491581,6.34957028 94.0491581,14.1580118 L94.0491581,57.1150401" id="Fill-65" fill="#E7E7E7"></path>
                                            <path d="M0.763186482,57.1150401 L0.763186482,14.1580118 C0.763186482,6.34957028 6.77092381,0.0250859435 14.180802,0.0250859435 L80.6315426,0.0250859435 C88.0414207,0.0250859435 94.0491581,6.34957028 94.0491581,14.1580118 L94.0491581,57.1150401" id="Stroke-67" stroke="#FFFFFF"></path>
                                        </g>
                                        <g id="Group-72" transform="translate(303.992851, 0.000000)">
                                            <path d="M0.59201522,56.9538524 L0.59201522,14.2480349 C0.59201522,6.48876927 6.61986774,0.197757652 14.0545557,0.197757652 L80.7277877,0.197757652 C88.1624757,0.197757652 94.1903282,6.48876927 94.1903282,14.2480349 L94.1903282,56.9538524" id="Fill-69" fill="#E7E7E7"></path>
                                            <path d="M0.59201522,56.9538524 L0.59201522,14.2480349 C0.59201522,6.48876927 6.61986774,0.197757652 14.0545557,0.197757652 L80.7277877,0.197757652 C88.1624757,0.197757652 94.1903282,6.48876927 94.1903282,14.2480349 L94.1903282,56.9538524" id="Stroke-71" stroke="#FFFFFF"></path>
                                        </g>
                                        <g id="Group-76" transform="translate(402.322306, 0.000000)">
                                            <path d="M0.617407833,57.0430717 L0.617407833,14.3372541 C0.617407833,6.57798853 6.62514516,0.286976912 14.0350233,0.286976912 L80.4857639,0.286976912 C87.8956421,0.286976912 93.9033794,6.57798853 93.9033794,14.3372541 L93.9033794,57.0430717" id="Fill-73" fill="#E7E7E7"></path>
                                            <path d="M0.617407833,57.0430717 L0.617407833,14.3372541 C0.617407833,6.57798853 6.62514516,0.286976912 14.0350233,0.286976912 L80.4857639,0.286976912 C87.8956421,0.286976912 93.9033794,6.57798853 93.9033794,14.3372541 L93.9033794,57.0430717" id="Stroke-75" stroke="#FFFFFF"></path>
                                        </g>
                                        <g id="Group-80" transform="translate(503.691690, 0.000000)">
                                            <path d="M0.643434263,57.2030176 L0.643434263,14.2459893 C0.643434263,6.44108098 6.65117159,0.113063407 14.0610497,0.113063407 L80.5117904,0.113063407 C87.9250229,0.113063407 93.9294058,6.44108098 93.9294058,14.2459893 L93.9294058,57.2030176" id="Fill-77" fill="#E7E7E7"></path>
                                            <path d="M0.643434263,57.2030176 L0.643434263,14.2459893 C0.643434263,6.44108098 6.65117159,0.113063407 14.0610497,0.113063407 L80.5117904,0.113063407 C87.9250229,0.113063407 93.9294058,6.44108098 93.9294058,14.2459893 L93.9294058,57.2030176" id="Stroke-79" stroke="#FFFFFF"></path>
                                        </g>
                                        <g id="Group-84" transform="translate(604.945773, 0.000000)">
                                            <path d="M0.471862045,56.7771702 L0.471862045,14.0713526 C0.471862045,6.31208704 6.49971456,0.0210754158 13.9344026,0.0210754158 L80.6110001,0.0210754158 C88.0456882,0.0210754158 94.0735407,6.31208704 94.0735407,14.0713526 L94.0735407,56.7771702" id="Fill-81" fill="#E7E7E7"></path>
                                            <path d="M0.471862045,56.7771702 L0.471862045,14.0713526 C0.471862045,6.31208704 6.49971456,0.0210754158 13.9344026,0.0210754158 L80.6110001,0.0210754158 C88.0456882,0.0210754158 94.0735407,6.31208704 94.0735407,14.0713526 L94.0735407,56.7771702" id="Stroke-83" stroke="#FFFFFF"></path>
                                        </g>
                                    </g>
                                </g>
                                <g id="Group-6">
                                    <g transform="translate(0.000000, 98.787242)">
                                        <path d="M111.435351,149.743303 L2.93906876,150.162665 C-0.917591059,150.136455 -0.987110249,147.354903 2.78016776,143.944306 L30.2932148,122.062104 C34.0604928,118.651508 40.2443902,115.909271 44.0977396,115.935295 L145.890386,116.63005 C149.747046,116.652984 150.283337,118.471313 146.049287,122.845133 L125.157115,144.733887 C121.386527,148.141207 117.665595,150.120074 111.435351,149.743303" id="Fill-85" fill="#FFFFFF"></path>
                                        <path d="M380.41726,150.162338 L275.709675,150.043881 C271.91821,150.04068 270.073446,147.380279 271.589375,144.102 L284.611234,123.052501 C286.127162,119.777423 290.428322,117.123425 294.223076,117.126623 L394.323685,117.22267 C398.11515,117.225871 399.959914,119.886272 398.443985,123.16135 L390.35136,144.14682 C388.83872,147.4251 384.208726,150.165536 380.41726,150.162338" id="Fill-88" fill="#FFFFFF"></path>
                                        <path d="M525.670641,149.966924 L412.108264,150.162338 C408.085309,150.178198 405.052208,148.875346 405.06554,145.607011 L412.262093,123.64419 C413.265323,119.588382 415.639636,117.418029 419.662591,117.395621 L522.420174,117.126623 C526.443129,117.107521 529.690252,119.742035 529.673532,123.01037 L532.980849,144.009657 C532.964129,147.277991 529.690252,149.947718 525.670641,149.966924" id="Fill-90" fill="#FFFFFF"></path>
                                        <path d="M142.113487,108.116883 L55.851469,108.116883 C48.5514858,108.116883 42.6388298,102.304741 42.6388298,95.1361071 L42.6388298,12.980776 C42.6388298,5.81214244 48.5514858,0 55.851469,0 L142.113487,0 C149.410167,0 155.326126,5.81214244 155.326126,12.980776 L155.326126,95.1361071 C155.326126,102.304741 149.410167,108.116883 142.113487,108.116883" id="Fill-92" fill="#FFFFFF"></path>
                                        <path d="M142.113487,108.116883 L55.851469,108.116883 C48.5514858,108.116883 42.6388298,102.304741 42.6388298,95.1361071 L42.6388298,12.980776 C42.6388298,5.81214244 48.5514858,0 55.851469,0 L142.113487,0 C149.410167,0 155.326126,5.81214244 155.326126,12.980776 L155.326126,95.1361071 C155.326126,102.304741 149.410167,108.116883 142.113487,108.116883 Z" id="Stroke-94" fill="#FFFFFF"></path>
                                        <path d="M266.983194,108.116883 L180.721176,108.116883 C173.421193,108.116883 167.508537,102.304741 167.508537,95.1361071 L167.508537,12.980776 C167.508537,5.81214244 173.421193,0 180.721176,0 L266.983194,0 C274.279874,0 280.195833,5.81214244 280.195833,12.980776 L280.195833,95.1361071 C280.195833,102.304741 274.279874,108.116883 266.983194,108.116883" id="Fill-96" fill="#FFFFFF"></path>
                                        <path d="M266.983194,108.116883 L180.721176,108.116883 C173.421193,108.116883 167.508537,102.304741 167.508537,95.1361071 L167.508537,12.980776 C167.508537,5.81214244 173.421193,0 180.721176,0 L266.983194,0 C274.279874,0 280.195833,5.81214244 280.195833,12.980776 L280.195833,95.1361071 C280.195833,102.304741 274.279874,108.116883 266.983194,108.116883 Z" id="Stroke-98" fill="#FFFFFF"></path>
                                        <path d="M388.823545,108.116883 L302.529034,108.116883 C295.241326,108.116883 289.332641,102.311711 289.332641,95.1516735 L289.332641,12.9652096 C289.332641,5.80517261 295.241326,0 302.529034,0 L388.823545,0 C396.111252,0 402.019937,5.80517261 402.019937,12.9652096 L402.019937,95.1516735 C402.019937,102.311711 396.111252,108.116883 388.823545,108.116883" id="Fill-100" fill="#FFFFFF"></path>
                                        <path d="M388.823545,108.116883 L302.529034,108.116883 C295.241326,108.116883 289.332641,102.311711 289.332641,95.1516735 L289.332641,12.9652096 C289.332641,5.80517261 295.241326,0 302.529034,0 L388.823545,0 C396.111252,0 402.019937,5.80517261 402.019937,12.9652096 L402.019937,95.1516735 C402.019937,102.311711 396.111252,108.116883 388.823545,108.116883 Z" id="Stroke-102" fill="#FFFFFF"></path>
                                        <path d="M513.693251,108.116883 L427.39874,108.116883 C420.111033,108.116883 414.202348,102.311711 414.202348,95.1516735 L414.202348,12.9652096 C414.202348,5.80193131 420.111033,0 427.39874,0 L513.693251,0 C520.980959,0 526.889644,5.80193131 526.889644,12.9652096 L526.889644,95.1516735 C526.889644,102.311711 520.980959,108.116883 513.693251,108.116883" id="Fill-104" fill="#FFFFFF"></path>
                                        <path d="M513.693251,108.116883 L427.39874,108.116883 C420.111033,108.116883 414.202348,102.311711 414.202348,95.1516735 L414.202348,12.9652096 C414.202348,5.80193131 420.111033,0 427.39874,0 L513.693251,0 C520.980959,0 526.889644,5.80193131 526.889644,12.9652096 L526.889644,95.1516735 C526.889644,102.311711 520.980959,108.116883 513.693251,108.116883 Z" id="Stroke-106" fill="#FFFFFF"></path>
                                        <path d="M638.562572,108.116883 L552.268834,108.116883 C544.977613,108.116883 539.072055,102.314952 539.072055,95.1516735 L539.072055,12.9652096 C539.072055,5.80517261 544.977613,0 552.268834,0 L638.562572,0 C645.850493,0 651.759351,5.80517261 651.759351,12.9652096 L651.759351,95.1516735 C651.759351,102.314952 645.850493,108.116883 638.562572,108.116883" id="Fill-108" fill="#FFFFFF"></path>
                                        <path d="M638.562572,108.116883 L552.268834,108.116883 C544.977613,108.116883 539.072055,102.314952 539.072055,95.1516735 L539.072055,12.9652096 C539.072055,5.80517261 544.977613,0 552.268834,0 L638.562572,0 C645.850493,0 651.759351,5.80517261 651.759351,12.9652096 L651.759351,95.1516735 C651.759351,102.314952 645.850493,108.116883 638.562572,108.116883 Z" id="Stroke-110" fill="#FFFFFF"></path>
                                        <path d="M760.386676,108.116883 L674.092938,108.116883 C666.805017,108.116883 660.896159,102.311711 660.896159,95.1516735 L660.896159,12.9652096 C660.896159,5.80517261 666.805017,0 674.092938,0 L760.386676,0 C767.674597,0 773.583455,5.80517261 773.583455,12.9652096 L773.583455,95.1516735 C773.583455,102.311711 767.674597,108.116883 760.386676,108.116883" id="Fill-112" fill="#FFFFFF"></path>
                                        <path d="M760.386676,108.116883 L674.092938,108.116883 C666.805017,108.116883 660.896159,102.311711 660.896159,95.1516735 L660.896159,12.9652096 C660.896159,5.80517261 666.805017,0 674.092938,0 L760.386676,0 C767.674597,0 773.583455,5.80517261 773.583455,12.9652096 L773.583455,95.1516735 C773.583455,102.311711 767.674597,108.116883 760.386676,108.116883 Z" id="Stroke-114" fill="#FFFFFF"></path>
                                        <path d="M885.256383,108.116883 L798.962645,108.116883 C791.674723,108.116883 785.765866,102.311711 785.765866,95.1516735 L785.765866,12.9652096 C785.765866,5.80517261 791.674723,0 798.962645,0 L885.256383,0 C892.544304,0 898.453162,5.80517261 898.453162,12.9652096 L898.453162,95.1516735 C898.453162,102.311711 892.544304,108.116883 885.256383,108.116883" id="Fill-116" fill="#FFFFFF"></path>
                                        <path d="M885.256383,108.116883 L798.962645,108.116883 C791.674723,108.116883 785.765866,102.311711 785.765866,95.1516735 L785.765866,12.9652096 C785.765866,5.80517261 791.674723,0 798.962645,0 L885.256383,0 C892.544304,0 898.453162,5.80517261 898.453162,12.9652096 L898.453162,95.1516735 C898.453162,102.311711 892.544304,108.116883 885.256383,108.116883 Z" id="Stroke-118" fill="#FFFFFF"></path>
                                        <path d="M824.360978,150.162338 L931.098012,150.004738 C934.893782,149.998306 936.131533,147.235684 933.870574,143.829844 L912.742992,123.288672 C907.435516,118.789361 903.283275,117.12021 897.583019,117.126623 L799.681876,117.287446 C797.793894,117.293879 793.255474,120.059717 795.523033,123.462341 L813.389555,144.006729 C815.653814,147.412569 820.56851,150.168759 824.360978,150.162338" id="Fill-120" fill="#FFFFFF"></path>
                                        <path d="M770.706613,117.128098 L668.636418,117.505762 C664.809076,117.508989 662.946856,120.255925 664.477129,123.635527 L676.97823,144.048709 C678.508503,147.431539 682.850362,150.165563 683.537491,150.162338 L794.547002,150.06227 C801.514557,150.059042 801.756878,145.678794 800.233244,142.295964 L783.559577,123.028683 C778.935564,116.915057 774.530635,117.12487 770.706613,117.128098" id="Fill-122" fill="#FFFFFF"></path>
                                        <path d="M640.755645,117.133018 L544.915667,117.126623 C541.117221,117.129821 538.309532,118.639002 539.257497,123.105793 L542.884782,144.231126 C544.402185,147.508479 548.707529,150.165532 552.502683,150.162338 L659.283764,150.066412 C663.078918,150.063215 664.928767,147.399767 663.411364,144.119217 L651.930447,122.741287 C650.413044,119.463935 644.550799,117.129821 640.755645,117.133018" id="Fill-124" fill="#FFFFFF"></path>
                                        <path d="M249.043451,149.800574 L141.326772,150.162338 C137.45456,150.155935 136.138075,147.754851 137.686288,144.409341 L157.305944,123.18376 C160.294902,120.043142 163.246918,117.123425 167.11913,117.126623 L269.354933,117.225871 C273.227145,117.229072 275.111197,119.947099 273.562983,123.292609 L259.521597,144.16283 C257.973384,147.50834 252.915663,149.806977 249.043451,149.800574" id="Fill-126" fill="#FFFFFF"></path>
                                    </g>
                                </g>
                            </g>
                            <g id="bars" transform="translate(306.000000, 107.000000)">
                                <g id="green-chart" fill="#65D8B4">
                                    <path d="M131.312775,107.888112 C142.056782,107.888112 150.76652,116.59785 150.76652,127.341856 L150.76652,580 L150.76652,580 L111.859031,580 L111.859031,127.341856 C111.859031,116.59785 120.568769,107.888112 131.312775,107.888112 Z" id="Rectangle"></path>
                                    <path d="M19.4537445,139.524476 C30.1977509,139.524476 38.907489,148.234214 38.907489,158.97822 L38.907489,580 L38.907489,580 L0,580 L0,158.97822 C2.23695237e-15,148.234214 8.70973808,139.524476 19.4537445,139.524476 Z" id="Rectangle"></path>
                                    <path d="M248.035242,81.9300699 C258.779249,81.9300699 267.488987,90.639808 267.488987,101.383814 L267.488987,580 L267.488987,580 L228.581498,580 L228.581498,101.383814 C228.581498,90.639808 237.291236,81.9300699 248.035242,81.9300699 Z" id="Rectangle"></path>
                                    <path d="M303.964758,57.5944056 C314.708764,57.5944056 323.418502,66.3041437 323.418502,77.0481501 L323.418502,580 L323.418502,580 L284.511013,580 L284.511013,77.0481501 C284.511013,66.3041437 293.220751,57.5944056 303.964758,57.5944056 Z" id="Rectangle"></path>
                                    <path d="M415.823789,57.5944056 C426.567795,57.5944056 435.277533,66.3041437 435.277533,77.0481501 L435.277533,580 L435.277533,580 L396.370044,580 L396.370044,77.0481501 C396.370044,66.3041437 405.079782,57.5944056 415.823789,57.5944056 Z" id="Rectangle"></path>
                                    <path d="M475.806167,12.1678322 C486.550174,12.1678322 495.259912,20.8775703 495.259912,31.6215767 L495.259912,580 L495.259912,580 L456.352423,580 L456.352423,31.6215767 C456.352423,20.8775703 465.062161,12.1678322 475.806167,12.1678322 Z" id="Rectangle"></path>
                                    <path d="M532.546256,66.5174825 C543.290262,66.5174825 552,75.2272206 552,85.971227 L552,580 L552,580 L513.092511,580 L513.092511,85.971227 C513.092511,75.2272206 521.802249,66.5174825 532.546256,66.5174825 Z" id="Rectangle"></path>
                                    <path d="M360.704846,139.524476 C371.448852,139.524476 380.15859,148.234214 380.15859,158.97822 L380.15859,580 L380.15859,580 L341.251101,580 L341.251101,158.97822 C341.251101,148.234214 349.960839,139.524476 360.704846,139.524476 Z" id="Rectangle"></path>
                                    <path d="M187.242291,57.5944056 C197.986297,57.5944056 206.696035,66.3041437 206.696035,77.0481501 L206.696035,580 L206.696035,580 L167.788546,580 L167.788546,77.0481501 C167.788546,66.3041437 176.498284,57.5944056 187.242291,57.5944056 Z" id="Rectangle"></path>
                                    <path d="M76.1938326,0 C86.937839,-1.97364196e-15 95.6475771,8.70973808 95.6475771,19.4537445 L95.6475771,580 L95.6475771,580 L56.7400881,580 L56.7400881,19.4537445 C56.7400881,8.70973808 65.4498262,1.97364196e-15 76.1938326,0 Z" id="Rectangle"></path>
                                </g>
                                <g id="blue-chart">
                                    <g transform="translate(0.000000, 328.000000)">
                                        <rect id="Rectangle" fill="#4BBFE1" x="111.859031" y="46.3575949" width="38.907489" height="210.642405"></rect>
                                        <rect id="Rectangle" fill="#4BBFE1" x="0" y="88.6487342" width="38.907489" height="168.351266"></rect>
                                        <rect id="Rectangle" fill="#4BBFE1" x="228.581498" y="34.971519" width="38.907489" height="222.028481"></rect>
                                        <rect id="Rectangle" fill="#4BBFE1" x="284.511013" y="0" width="38.907489" height="257"></rect>
                                        <rect id="Rectangle" fill="#4BBFE1" x="396.370044" y="28.4651899" width="38.907489" height="228.53481"></rect>
                                        <rect id="Rectangle" fill="#4BBFE1" x="456.352423" y="100.848101" width="38.907489" height="156.151899"></rect>
                                        <rect id="Rectangle" fill="#4BBFE1" x="513.092511" y="28.4651899" width="38.907489" height="228.53481"></rect>
                                        <rect id="Rectangle" fill="#4BBFE1" x="341.251101" y="62.6234177" width="38.907489" height="194.376582"></rect>
                                        <rect id="Rectangle" fill="#4BBFE1" x="167.788546" y="62.6234177" width="38.907489" height="194.376582"></rect>
                                        <rect id="Rectangle" fill="#4BBFE1" x="56.7400881" y="0" width="38.907489" height="257"></rect>
                                    </g>
                                </g>
                            </g>
                            <ellipse id="Oval" fill="#60D9B3" style="mix-blend-mode: multiply;" cx="37.5" cy="608" rx="27.5" ry="26"></ellipse>
                            <circle id="geometric" fill="#4BBFE1" style="mix-blend-mode: multiply;" cx="12" cy="591" r="12"></circle>
                            <g id="Group-2" transform="translate(85.000000, 108.000000)">
                                <ellipse id="Oval" fill="#60D9B3" style="mix-blend-mode: multiply;" cx="24" cy="43.5" rx="24" ry="22.5"></ellipse>
                                <circle id="geometric" fill="#4BBFE1" style="mix-blend-mode: multiply;" cx="52.5" cy="26.5" r="26.5"></circle>
                            </g>
                            <g id="Group-3" transform="translate(960.000000, 0.000000)">
                                <ellipse id="Oval" fill="#4BBFE1" style="mix-blend-mode: multiply;" transform="translate(27.000000, 26.500000) rotate(-164.000000) translate(-27.000000, -26.500000) " cx="27" cy="26.5" rx="21" ry="21.5"></ellipse>
                                <path d="M83.0852499,7.72252257 C60.7178508,1.2890948 37.6224557,13.4350392 31.5002412,34.8512486 C25.3780267,56.267458 38.5473509,78.8440497 60.9147501,85.2774774 C83.2821492,91.7109052 106.377544,79.5649608 112.499759,58.1487514 C118.621973,36.732542 105.452649,14.1559503 83.0852499,7.72252257 Z" id="Oval" fill="#60D9B3" style="mix-blend-mode: multiply;"></path>
                            </g>
                            <ellipse id="Oval" fill="#60D9B3" style="mix-blend-mode: multiply;" cx="1099.5" cy="559" rx="12.5" ry="12"></ellipse>
                        </g>
                    </g>
                </g>
            </g>
        </svg> 

    </div>
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