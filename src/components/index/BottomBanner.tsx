"use client";

import { Container } from "@/components/Container";
import useInViewSpring from "@/utils/hooks";
import { animated } from "@react-spring/web";

export default function BottomBanner() {
  const [springProps, ref] = useInViewSpring(
    { transform: "translateX(150px)", opacity: 0 },
    { transform: "translateX(0)", opacity: 1 },
    200
  );

  return (
    <div className="w-full bg-[#bc2322]">
      <Container className="group flex flex-col items-center justify-between lg:flex-row">
        <svg
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 381 231"
          className="m-4 w-48"
        >
          <path
            d="M133.17 86V59.818h3.171v23.37h12.17V86H133.17Zm30.261-26.182V86h-3.171V59.818h3.171ZM194.526 68a9.238 9.238 0 0 0-1.113-2.314 7.138 7.138 0 0 0-1.623-1.764 6.817 6.817 0 0 0-2.122-1.112c-.793-.256-1.662-.384-2.608-.384-1.552 0-2.962.4-4.232 1.202-1.27.801-2.28 1.981-3.03 3.541-.75 1.56-1.125 3.473-1.125 5.74 0 2.267.38 4.18 1.138 5.74.759 1.56 1.786 2.74 3.081 3.541 1.295.802 2.753 1.202 4.372 1.202 1.5 0 2.821-.32 3.963-.959a6.796 6.796 0 0 0 2.685-2.736c.648-1.184.971-2.578.971-4.18l.972.205h-7.875v-2.813h9.972v2.813c0 2.156-.461 4.03-1.381 5.625a9.538 9.538 0 0 1-3.784 3.707c-1.602.87-3.443 1.304-5.523 1.304-2.318 0-4.355-.546-6.111-1.636-1.747-1.091-3.11-2.642-4.091-4.654-.971-2.011-1.457-4.397-1.457-7.159 0-2.07.277-3.933.831-5.587.563-1.662 1.355-3.076 2.378-4.244a10.398 10.398 0 0 1 3.631-2.684c1.397-.623 2.936-.934 4.615-.934 1.38 0 2.667.209 3.86.627 1.202.409 2.272.992 3.209 1.751a9.96 9.96 0 0 1 2.365 2.697A10.258 10.258 0 0 1 197.798 68h-3.272Zm15.696 18V59.818h3.17v11.66h13.96v-11.66h3.171V86h-3.171V74.29h-13.96V86h-3.17Zm32.056-23.37v-2.812h19.637v2.813h-8.233V86h-3.171V62.63h-8.233Zm45.688 3.734c-.153-1.296-.776-2.302-1.866-3.017-1.091-.716-2.429-1.074-4.015-1.074-1.159 0-2.173.187-3.042.562-.861.375-1.534.89-2.02 1.547a3.71 3.71 0 0 0-.716 2.237c0 .7.166 1.3.498 1.803a4.43 4.43 0 0 0 1.304 1.24 9.373 9.373 0 0 0 1.662.805c.58.205 1.113.371 1.598.499l2.659.716a23.17 23.17 0 0 1 2.276.741c.844.316 1.649.746 2.416 1.291a6.573 6.573 0 0 1 1.918 2.072c.503.843.754 1.879.754 3.106 0 1.415-.371 2.693-1.112 3.835-.733 1.142-1.807 2.05-3.222 2.723-1.406.674-3.115 1.01-5.126 1.01-1.875 0-3.499-.302-4.871-.907-1.363-.606-2.437-1.45-3.221-2.532-.776-1.082-1.215-2.34-1.317-3.771h3.273c.085.989.417 1.807.997 2.454.588.64 1.329 1.117 2.224 1.432a9.01 9.01 0 0 0 2.915.46c1.21 0 2.297-.195 3.26-.588.963-.4 1.726-.954 2.288-1.661.563-.716.844-1.551.844-2.506 0-.87-.243-1.577-.729-2.122-.486-.546-1.125-.989-1.917-1.33-.793-.34-1.65-.639-2.57-.895l-3.222-.92c-2.045-.588-3.664-1.428-4.858-2.519-1.193-1.09-1.789-2.518-1.789-4.282 0-1.466.396-2.745 1.189-3.835.801-1.1 1.875-1.952 3.221-2.557 1.355-.614 2.868-.92 4.539-.92 1.687 0 3.187.302 4.5.907 1.312.596 2.352 1.415 3.119 2.454a6.114 6.114 0 0 1 1.227 3.542h-3.068ZM163.17 198v-26.182h9.154c1.824 0 3.328.316 4.513.946 1.184.622 2.066 1.462 2.646 2.519.58 1.048.869 2.211.869 3.49 0 1.125-.2 2.054-.601 2.787a4.675 4.675 0 0 1-1.559 1.738 7.086 7.086 0 0 1-2.084.946v.256c.801.051 1.606.332 2.416.844.81.511 1.487 1.244 2.033 2.199.545.954.818 2.122.818 3.502 0 1.313-.298 2.493-.895 3.542-.596 1.048-1.538 1.879-2.825 2.493-1.287.613-2.962.92-5.024.92h-9.461Zm3.171-2.812h6.29c2.071 0 3.541-.401 4.41-1.202.878-.81 1.317-1.79 1.317-2.941 0-.886-.226-1.704-.678-2.454-.451-.759-1.095-1.364-1.93-1.815-.835-.461-1.824-.691-2.966-.691h-6.443v9.103Zm0-11.864h5.881c.954 0 1.815-.188 2.582-.563a4.513 4.513 0 0 0 1.841-1.585c.46-.682.69-1.483.69-2.403 0-1.151-.4-2.127-1.201-2.928-.802-.809-2.071-1.214-3.81-1.214h-5.983v8.693ZM193.425 198v-26.182h8.846c2.046 0 3.725.35 5.037 1.048 1.313.691 2.284 1.641 2.915 2.851.63 1.211.946 2.587.946 4.13 0 1.542-.316 2.91-.946 4.103-.631 1.193-1.598 2.131-2.902 2.813-1.304.673-2.97 1.01-4.999 1.01h-7.159v-2.864h7.057c1.398 0 2.523-.204 3.375-.614.861-.409 1.483-.988 1.866-1.738.392-.759.589-1.662.589-2.71 0-1.049-.197-1.965-.589-2.749-.392-.784-1.018-1.389-1.879-1.815-.861-.435-1.998-.652-3.413-.652h-5.574V198h-3.17Zm12.323-11.761L212.192 198h-3.682l-6.341-11.761h3.579Zm20.714-14.421V198h-3.17v-26.182h3.17ZM257.557 180a9.237 9.237 0 0 0-1.112-2.314 7.151 7.151 0 0 0-1.624-1.764 6.789 6.789 0 0 0-2.122-1.112c-.793-.256-1.662-.384-2.608-.384-1.551 0-2.962.401-4.232 1.202-1.269.801-2.279 1.981-3.029 3.541-.75 1.56-1.125 3.473-1.125 5.74 0 2.267.379 4.18 1.137 5.74.759 1.56 1.786 2.74 3.081 3.541 1.296.801 2.753 1.202 4.373 1.202 1.5 0 2.821-.32 3.963-.959a6.791 6.791 0 0 0 2.684-2.736c.648-1.184.972-2.578.972-4.18l.971.205h-7.875v-2.813h9.972v2.813c0 2.156-.46 4.031-1.381 5.625a9.542 9.542 0 0 1-3.784 3.707c-1.602.869-3.443 1.304-5.522 1.304-2.319 0-4.356-.546-6.111-1.636-1.747-1.091-3.111-2.642-4.091-4.654-.972-2.011-1.458-4.398-1.458-7.159 0-2.071.277-3.933.831-5.587.563-1.661 1.356-3.076 2.378-4.244a10.418 10.418 0 0 1 3.631-2.685c1.398-.622 2.936-.933 4.615-.933 1.381 0 2.668.209 3.861.627 1.202.409 2.271.993 3.209 1.751a9.969 9.969 0 0 1 2.365 2.698A10.29 10.29 0 0 1 260.83 180h-3.273Zm15.696 18v-26.182h3.171v11.659h13.96v-11.659h3.17V198h-3.17v-11.71h-13.96V198h-3.171Zm32.057-23.369v-2.813h19.636v2.813h-8.233V198h-3.17v-23.369h-8.233ZM101.886 120.25c-.212-1.985-1.106-3.53-2.681-4.636-1.561-1.106-3.591-1.659-6.091-1.659-1.758 0-3.266.265-4.523.795-1.258.53-2.22 1.25-2.886 2.159-.667.909-1.008 1.947-1.023 3.114 0 .969.22 1.81.659 2.522.455.713 1.068 1.319 1.84 1.819.773.484 1.63.894 2.569 1.227.94.333 1.886.614 2.84.841l4.364 1.091c1.758.409 3.448.962 5.069 1.659a17.886 17.886 0 0 1 4.386 2.636 11.71 11.71 0 0 1 3.091 3.841c.758 1.5 1.136 3.258 1.136 5.273 0 2.727-.697 5.129-2.091 7.204-1.393 2.061-3.409 3.675-6.045 4.841-2.621 1.152-5.796 1.728-9.523 1.728-3.62 0-6.765-.561-9.431-1.682-2.652-1.121-4.728-2.758-6.228-4.909-1.485-2.152-2.288-4.773-2.409-7.864h8.295c.122 1.621.622 2.97 1.5 4.045.88 1.076 2.023 1.879 3.432 2.41 1.425.53 3.016.795 4.773.795 1.833 0 3.44-.273 4.818-.818 1.394-.561 2.485-1.334 3.273-2.318.788-1 1.189-2.167 1.205-3.5-.016-1.212-.372-2.212-1.069-3-.697-.803-1.674-1.47-2.931-2-1.243-.546-2.697-1.031-4.364-1.455l-5.295-1.364c-3.834-.984-6.864-2.477-9.092-4.477-2.212-2.015-3.318-4.689-3.318-8.023 0-2.742.743-5.143 2.228-7.204 1.5-2.061 3.537-3.659 6.113-4.796 2.576-1.151 5.493-1.727 8.75-1.727 3.303 0 6.197.576 8.682 1.727 2.5 1.137 4.462 2.72 5.886 4.75 1.425 2.016 2.16 4.334 2.205 6.955h-8.114ZM139.273 154v-46.545h8.432v19.704h21.568v-19.704h8.455V154h-8.455v-19.773h-21.568V154h-8.432Zm77.177-46.545V154h-8.432v-46.545h8.432Zm68.501 0V154h-7.5l-21.932-31.705h-.386V154h-8.432v-46.545h7.545l21.909 31.727h.41v-31.727h8.386ZM315.258 154v-46.545h30.273v7.068H323.69v12.636h20.273v7.068H323.69v12.705h22.023V154h-30.455Z"
            className="fill-tertiary group-hover:fill-white"
          />
          <path
            d="M111.526 75.158 106 51M65.367 97.462 46 82M55.67 140 32 147.338M81.89 179 72 201.723M93 82 50 26M58.768 116.307 10 105M106 175l20.652 45.603M65.656 164 18 202"
            className="group-hover:stroke-tertiary stroke-white"
            stroke-width="6"
            stroke-linecap="round"
          />
        </svg>
        <animated.div
          style={springProps}
          ref={ref}
          className="mb-8 flex text-white lg:mb-0"
        >
          <h5 className="border-tertiary border-r px-6">Embrace It</h5>
          <h5 className="border-tertiary border-r px-6">Enkindle It</h5>
          <h5 className="px-6">Expose It</h5>
        </animated.div>
      </Container>
    </div>
  );
}
