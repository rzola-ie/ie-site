<template>
  <svg
    class="canvas-mobile flex-1"
    :viewBox="`0 0 800 4500`"
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
        <!-- <rect x="0" y="0" height="200" width="200" fill="red"></rect> -->
        <circle
          style="mix-blend-mode: multiply"
          cx="60"
          cy="40"
          r="20"
          fill="#65D8B4"
        />
        <circle
          style="mix-blend-mode: multiply"
          cx="17.7"
          cy="13.2"
          r="4"
          fill="#38BDF8"
        />
      </pattern>

      <g id="about-icon" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
          <g id="IE_desktop_About" transform="translate(-890.000000, -601.000000)" fill="#4BBFE1">
              <g id="Secondary-section" transform="translate(-14.000000, 601.000000)">
                  <g id="Big-Icon-" transform="translate(904.000000, 0.000000)">
                      <g id="Bracket">
                          <path d="M182.203202,0 L255.332665,0 C263.433211,0 270,6.52997455 270,14.5851064 C270,16.3956286 269.661001,18.1903249 269.000332,19.877449 L101.464464,447.707236 C99.2703863,453.310167 93.8434322,457 87.7967978,457 L14.6673347,457 C6.56678941,457 0,450.470025 0,442.414894 C0,440.604371 0.338999373,438.809675 0.999668185,437.122551 L168.535536,9.29276376 C170.729614,3.68983263 176.156568,0 182.203202,0 Z" id="Rectangle" style="mix-blend-mode: multiply;"></path>
                          <path d="M255.796798,0 L182.667335,0 C174.566789,0 168,6.52997455 168,14.5851064 C168,16.3956286 168.338999,18.1903249 168.999668,19.877449 L336.535536,447.707236 C338.729614,453.310167 344.156568,457 350.203202,457 L423.332665,457 C431.433211,457 438,450.470025 438,442.414894 C438,440.604371 437.661001,438.809675 437.000332,437.122551 L269.464464,9.29276376 C267.270386,3.68983263 261.843432,0 255.796798,0 Z" id="Rectangle" style="mix-blend-mode: multiply;"></path>
                      </g>
                      <ellipse id="Oval" style="mix-blend-mode: multiply;" cx="90" cy="210.5" rx="69" ry="68.5"></ellipse>
                  </g>
              </g>
          </g>
      </g>
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

    <use
      href="#about-icon"
      x="208"
      y="-1360"
      style="transform-origin: center; transform: scale(0.6)"
    />

    <!-- <path d="M400 0 v1200" stroke="red" /> -->

    <foreignObject height="100%" width="100%" x="85" y="380">
      <h1 class="text-7xl tracking-wide leading-normal text-ie-purple">
        About
      </h1>
    </foreignObject>

    <foreignObject height="450" width="650" x="85" y="520">
      <div class="text-4xl text-gray-600">
        <p>
          We minimize the guesswork associated with feature planning and requirements gathering by starting with audience and user research. Our Quality Management System is aligned with ISO 13485 and IEC 62304. Building on a scalable infrastructure, we implement the right languages and frameworks, so your applications are reliable, fast and intuitive.
        </p>
      </div>
    </foreignObject>

    <g id="scrolll-arrow" transform="translate(49.000000, 250.000000)">
      <image opacity="0.2" x="315" y="700" width="60" height="100" xlink:href="data:image/png;base64,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JgIIIIAAAuMSIE0vShNZGjc5tkcAAQQQQKBjBLouTWSpY4E3XQQQQAABBCYl0FVpIkuTJsZ+CCCAAAIIdJRA16SJLHU06KaNAAIIIIDAtAS6Ik1kadqk2B8BBBBAAIGOEyhdmshSxwNu+ggggAACCFRF4O677/5QOlYv/bf4HUUl/EyWqkqI4yCAAAIIIIDAPIF77733/emHUqSpt3379hOnTp26wOVFAAEEEEAAAQQqJfDAAw/s37Rp02w6aOQ7Tb09e/YcqxSMgyGAAAIIIIAAAmcTeOSRRy7fsmXLD9NrEaWpt3///i+dPR8/I4AAAggggAACtRCYm5ubueqqq76eDh7mV3QzMzOz6QPst9QCxEERQAABBBBAAIG1CBw8ePBjAX5F19u5c+d3jx8/vnOteXgdAQQQQAABBBColcCJEye25nq3KcncmU984hN31ArAwRFAAAEEEEAAgVEJHDly5IZLL730e2n7HH5N17vpppu+4F/BjXr1bIcAAggggAACjRI4fPjwgR07dhxPJ21cnDZu3Ng7cODA4ZMnT25rdNJOhgACCCCAAAIITELg6NGjb+7/i7T+h63T/nXKU6//BZR33nnnHbOzs5snGat9EEAAAQQQQACB1gncf//97+rL07nnnns6DaYKeer172Ldeuutn+p/zUHrEzQABBAonsDG4mdoggggkBWB9CHx1zzxxBN/cObMmaueeeaZy3/605/ueu655y4+a5BXLPz8TP8xfXD7hfTZqJ/t3r3739MXTvauvvrqf/3oRz/6ePr12wtn7eNHBBBAoFYChKlWvA6OAALjEHj22WfP+8UvfrH5oosueuH1r3/986RoHHq2RQCBOgn8PxjpEIlno5wAAAAAAElFTkSuQmCC"></image>
    </g>

    <g id="main-content">
      <rect
        width="800"
        height="3200"
        x="0"
        y="1220"
        fill="#e7e7e7"
        stroke="#e7e7e7"
      />

      <g id="bg-box">
        <rect
          width="655"
          height="1000"
          x="70"
          y="1420"
          fill="white"
          stroke="white"
        />
        <foreignObject height="100%" width="100%" x="90" y="1480">
          <h1 class="text-7xl tracking-wide leading-normal text-ie-purple">
            Healthcare
          </h1>
        </foreignObject>

        <!-- line underneath title -->
        <svg width="55px" height="3px" viewBox="0 0 55 3" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
            <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                <g id="IE_mobile_About" transform="translate(-50.000000, -831.000000)" fill="#4BBFE1">
                    <g id="Seconary-section" transform="translate(24.000000, 708.000000)">
                        <g id="Healthcare" transform="translate(7.000000, 0.000000)">
                            <g id="logos" transform="translate(0.000000, 45.000000)">
                                <polygon id="Rectangle" points="19 78 55.8619792 78 74 78 74 81 19 81"></polygon>
                            </g>
                        </g>
                    </g>
                </g>
            </g>
        </svg>
      </g>

      <g id="bg-box">
        <rect
          width="655"
          height="1000"
          x="70"
          y="2550"
          fill="white"
          stroke="white"
        />
        <foreignObject height="100%" width="100%" x="85" y="380">
          <h1 class="text-7xl tracking-wide leading-normal text-ie-purple">
            Food & Retail
          </h1>
        </foreignObject>
      </g>

    </g>

    <use
      href="#scroll-arrow"
      x="200"
      y="1000"
      style="transform-origin: center; transform: scale(0.6)"
    />
  </svg>
</template>

<script>
export default {
  layout: "scroller",
};
</script>

<style lang="scss" scoped>
</style>