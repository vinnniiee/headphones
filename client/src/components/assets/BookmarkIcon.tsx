import { AssetProps } from "./asset-types";

const BookmarkIcon = ({color,className}:AssetProps) => {
    // const {className} = props;
    if(!color){
      color = 'black'
    }
  return (
    <svg
      className={className}
      width="62"
      height="55"
      viewBox="0 0 62 55"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M33.4486 0.50442C23.7676 -1.94998 20.1168 5.02782 14.0872 11.1736C9.9524 16.2327 6.03042 18.1456 3.09556 24.9484C-1.39214 33.063 -2.80371 55.6464 11.5662 48.641C17.4214 45.7865 20.3173 46.9891 25.6334 48.0399C29.3646 48.9327 32.5996 49.7429 35.4455 50.382C44.3555 52.3829 49.4516 52.707 54.0201 48.641C61.4706 39.9518 62.2963 26.4238 54.5839 15.3777C50.2924 9.23101 43.3572 3.85282 33.4486 0.50442Z"
        fill="white"
        fillOpacity="0.2"
      />
      <g filter="url(#filter0_d_517_1407)">
        <mask id="path-2-inside-1_517_1407" fill="white">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M13.9895 27.405L13.5628 26.7896L13.5195 24.7678H13C13.5628 14.3071 20.9221 6 30.1429 6C39.3636 6 46.7229 14.351 47.2857 24.8117H46.7662L46.7229 26.8335L46.2962 27.4489C46.7287 27.865 46.9909 28.5188 46.9394 29.3389C44.8182 36.3273 42.7231 40.0472 38.9307 44.8981C37.4188 46.832 35.0346 46.0849 35.1645 43.7114L34.7749 43.4916C33.5195 44.2388 31.2251 43.3598 31.8312 40.8545C34.3333 35.1251 35.8692 31.8696 39.3636 26.3501C40.9654 24.2403 43.6493 25.6908 43.2597 27.2731L43.6493 27.4489C44.2701 26.9762 44.9389 26.8522 45.5108 27.0046L45.6407 26.8335V24.8117H45.0779C44.8978 21.1161 44.5616 19.134 42.6104 15.4498C38.2381 11.538 35.4306 10.0941 30.1429 10.0876C24.8617 10.0811 22.0476 11.4941 17.6753 15.4059C15.7242 19.0901 15.3879 21.0722 15.2078 24.7678H14.645V26.7896L14.7749 26.9607C15.3468 26.8083 16.0156 26.9323 16.6364 27.405L17.026 27.2292C16.6364 25.6469 19.3203 24.1964 20.9221 26.3062C24.4165 31.8257 25.9524 35.0812 28.4546 40.8106C29.0606 43.3159 26.7662 44.195 25.5108 43.4478L25.1212 43.6675C25.2511 46.041 22.8669 46.7882 21.355 44.8542C17.5626 40.0033 15.4675 36.2835 13.3463 29.295C13.2948 28.4749 13.557 27.8211 13.9895 27.405Z"
          />
        </mask>
        <path
          d="M13.5628 26.7896L0.565749 27.0679L0.649547 30.9816L2.88045 34.1983L13.5628 26.7896ZM13.9895 27.405L23.0024 36.7735L30.9829 29.096L24.6719 19.9964L13.9895 27.405ZM13.5195 24.7678L26.5165 24.4895L26.2441 11.7678H13.5195V24.7678ZM13 24.7678L0.0187719 24.0695L-0.718177 37.7678H13V24.7678ZM47.2857 24.8117V37.8117H61.0039L60.2669 24.1133L47.2857 24.8117ZM46.7662 24.8117V11.8117H34.0416L33.7692 24.5334L46.7662 24.8117ZM46.7229 26.8335L57.4053 34.2422L59.6362 31.0255L59.72 27.1118L46.7229 26.8335ZM46.2962 27.4489L35.6139 20.0402L29.3028 29.1399L37.2834 36.8174L46.2962 27.4489ZM46.9394 29.3389L59.379 33.1146L59.8188 31.6657L59.9138 30.1545L46.9394 29.3389ZM38.9307 44.8981L49.1724 52.9049L49.1724 52.9049L38.9307 44.8981ZM35.1645 43.7114L48.1451 44.4216L48.5863 36.3567L41.5513 32.3885L35.1645 43.7114ZM34.7749 43.4916L41.1617 32.1687L34.5999 28.4674L28.126 32.3206L34.7749 43.4916ZM31.8312 40.8545L19.9177 35.6516L19.4628 36.6932L19.1956 37.7978L31.8312 40.8545ZM39.3636 26.3501L29.0096 18.4892L28.6755 18.9293L28.3799 19.3961L39.3636 26.3501ZM43.2597 27.2731L30.6368 24.1649L28.0496 34.6718L37.9127 39.1225L43.2597 27.2731ZM43.6493 27.4489L38.3023 39.2983L45.3626 42.4843L51.5251 37.7916L43.6493 27.4489ZM45.5108 27.0046L42.1631 39.5661L50.5909 41.8122L55.8649 34.8654L45.5108 27.0046ZM45.6407 26.8335L55.9948 34.6944L58.6407 31.2093V26.8335H45.6407ZM45.6407 24.8117H58.6407V11.8117H45.6407V24.8117ZM45.0779 24.8117L32.0933 25.4445L32.696 37.8117H45.0779V24.8117ZM42.6104 15.4498L54.0987 9.36556L53.0108 7.3113L51.2784 5.76135L42.6104 15.4498ZM30.1429 10.0876L30.1588 -2.91238L30.1429 10.0876ZM17.6753 15.4059L9.00731 5.71747L7.2749 7.26742L6.18697 9.32168L17.6753 15.4059ZM15.2078 24.7678V37.7678H27.5897L28.1924 25.4006L15.2078 24.7678ZM14.645 24.7678V11.7678H1.64502V24.7678H14.645ZM14.645 26.7896H1.64502V31.1654L4.29093 34.6505L14.645 26.7896ZM14.7749 26.9607L4.4208 34.8216L9.69483 41.7684L18.1227 39.5223L14.7749 26.9607ZM16.6364 27.405L8.76058 37.7477L14.9231 42.4404L21.9834 39.2544L16.6364 27.405ZM17.026 27.2292L22.373 39.0786L32.2361 34.6279L29.6489 24.121L17.026 27.2292ZM20.9221 26.3062L31.9058 19.3522L31.6103 18.8854L31.2761 18.4453L20.9221 26.3062ZM28.4546 40.8106L41.0901 37.754L40.8229 36.6493L40.368 35.6077L28.4546 40.8106ZM25.5108 43.4478L32.1597 32.2767L25.6859 28.4236L19.124 32.1248L25.5108 43.4478ZM25.1212 43.6675L18.7344 32.3446L11.6994 36.3128L12.1406 44.3777L25.1212 43.6675ZM21.355 44.8542L31.5966 36.8475L31.5966 36.8475L21.355 44.8542ZM13.3463 29.295L0.371944 30.1106L0.46695 31.6218L0.906736 33.0708L13.3463 29.295ZM2.88045 34.1983L3.30723 34.8137L24.6719 19.9964L24.2451 19.381L2.88045 34.1983ZM0.522459 25.0461L0.565749 27.0679L26.5598 26.5114L26.5165 24.4895L0.522459 25.0461ZM13 37.7678H13.5195V11.7678H13V37.7678ZM30.1429 -7C12.2578 -7 0.850366 8.61181 0.0187719 24.0695L25.9812 25.4662C26.1114 23.0459 27.0135 21.234 27.9636 20.1841C28.8694 19.1833 29.64 19 30.1429 19V-7ZM30.1429 19C30.6225 19 31.3915 19.1744 32.3081 20.1906C33.2688 21.2556 34.1741 23.0858 34.3045 25.5101L60.2669 24.1133C59.4376 8.69711 48.0632 -7 30.1429 -7V19ZM47.2857 11.8117H46.7662V37.8117H47.2857V11.8117ZM33.7692 24.5334L33.7259 26.5552L59.72 27.1118L59.7633 25.09L33.7692 24.5334ZM36.0406 19.4249L35.6139 20.0402L56.9785 34.8575L57.4053 34.2422L36.0406 19.4249ZM37.2834 36.8174C34.5766 34.2134 33.8128 30.9446 33.965 28.5232L59.9138 30.1545C60.1691 26.093 58.8808 21.5166 55.309 18.0804L37.2834 36.8174ZM34.4998 25.5631C32.8624 30.9575 31.5338 33.2526 28.6891 36.8914L49.1724 52.9049C53.9124 46.8418 56.7739 41.6972 59.379 33.1146L34.4998 25.5631ZM28.6891 36.8913C30.4357 34.6572 34.7485 31.7632 40.3314 33.5186C46.3613 35.4147 48.3351 40.9491 48.1451 44.4216L22.1839 43.0012C21.8641 48.8472 24.965 55.9419 32.5325 58.3214C39.653 60.5604 45.9139 57.073 49.1724 52.9049L28.6891 36.8913ZM41.5513 32.3885L41.1617 32.1687L28.3881 54.8146L28.7777 55.0343L41.5513 32.3885ZM28.126 32.3206C32.0913 29.9605 36.6104 30.4241 39.8505 32.5991C41.7101 33.8474 43.2809 35.7335 44.1162 38.0973C44.943 40.4372 44.8021 42.5245 44.4667 43.9111L19.1956 37.7978C17.7727 43.6798 19.6466 50.3515 25.3595 54.1864C29.9091 57.2404 36.203 57.77 41.4237 54.6627L28.126 32.3206ZM43.7446 46.0573C46.1047 40.6532 47.3401 38.0541 50.3474 33.304L28.3799 19.3961C24.3983 25.6851 22.5619 29.5971 19.9177 35.6516L43.7446 46.0573ZM49.7177 34.211C46.9978 37.7934 42.0414 39.2408 37.6475 37.6558C34.6849 36.5872 28.6824 32.1019 30.6368 24.1649L55.8827 30.3812C58.2266 20.8619 51.077 14.8603 46.4694 13.1983C40.4304 11.02 33.3312 12.7969 29.0096 18.4892L49.7177 34.211ZM37.9127 39.1225L38.3023 39.2983L48.9964 15.5994L48.6068 15.4236L37.9127 39.1225ZM51.5251 37.7916C49.3547 39.4443 45.942 40.5733 42.1631 39.5661L48.8586 14.443C43.9358 13.1311 39.1855 14.5081 35.7736 17.1062L51.5251 37.7916ZM55.8649 34.8654L55.9948 34.6944L35.2866 18.9727L35.1567 19.1437L55.8649 34.8654ZM58.6407 26.8335V24.8117H32.6407V26.8335H58.6407ZM45.6407 11.8117H45.0779V37.8117H45.6407V11.8117ZM58.0625 24.1789C57.9627 22.1301 57.7909 19.6869 57.1285 17.0072C56.4448 14.241 55.3906 11.8049 54.0987 9.36556L31.122 21.534C31.7813 22.7789 31.8708 23.1759 31.8881 23.2457C31.9267 23.4021 32.0131 23.7977 32.0933 25.4445L58.0625 24.1789ZM51.2784 5.76135C48.7645 3.51221 45.7732 1.10599 42.0108 -0.570404C38.0094 -2.3533 34.0793 -2.90757 30.1588 -2.91238L30.1269 23.0876C30.8668 23.0885 31.2278 23.1402 31.3591 23.1643C31.4217 23.1758 31.4427 23.183 31.436 23.181C31.4284 23.1786 31.4228 23.1761 31.429 23.1788C31.4854 23.2039 32.084 23.4755 33.9424 25.1382L51.2784 5.76135ZM26.3433 25.0943C28.1825 23.4489 28.7705 23.1912 28.8087 23.1744C28.8119 23.1729 28.8046 23.176 28.7965 23.1785C28.7893 23.1807 28.811 23.1733 28.8756 23.1618C29.0117 23.1374 29.3786 23.0867 30.1269 23.0876L30.1588 -2.91238C26.2666 -2.91716 22.3385 -2.3862 18.3279 -0.619597C14.5456 1.04641 11.5405 3.4511 9.00731 5.71747L26.3433 25.0943ZM28.1924 25.4006C28.2726 23.7538 28.359 23.3582 28.3976 23.2018C28.4149 23.132 28.5044 22.735 29.1637 21.4901L6.18697 9.32168C4.89512 11.761 3.84088 14.1971 3.15718 16.9634C2.49487 19.643 2.32305 22.0862 2.2232 24.135L28.1924 25.4006ZM14.645 37.7678H15.2078V11.7678H14.645V37.7678ZM27.645 26.7896V24.7678H1.64502V26.7896H27.645ZM25.129 19.0999L24.9991 18.9288L4.29093 34.6505L4.4208 34.8216L25.129 19.0999ZM24.5122 17.0623C21.1002 14.4642 16.3499 13.0872 11.4271 14.3992L18.1227 39.5223C14.3437 40.5294 10.931 39.4005 8.76058 37.7477L24.5122 17.0623ZM11.6789 15.3798L11.2893 15.5556L21.9834 39.2544L22.373 39.0786L11.6789 15.3798ZM31.2761 18.4453C26.9545 12.7531 19.8553 10.9761 13.8163 13.1544C9.20868 14.8164 2.05907 20.8181 4.40302 30.3374L29.6489 24.121C31.6033 32.058 25.6009 36.5433 22.6383 37.612C18.2443 39.1969 13.2879 37.7496 10.568 34.1671L31.2761 18.4453ZM40.368 35.6077C37.7239 29.5532 35.8874 25.6412 31.9058 19.3522L9.93834 33.2601C12.9457 38.0102 14.181 40.6093 16.5411 46.0134L40.368 35.6077ZM18.862 54.6188C24.0827 57.7261 30.3767 57.1965 34.9263 54.1425C40.6391 50.3076 42.513 43.6359 41.0901 37.754L15.819 43.8672C15.4836 42.4806 15.3427 40.3933 16.1696 38.0534C17.0048 35.6896 18.5757 33.8035 20.4352 32.5552C23.6753 30.3802 28.1944 29.9166 32.1597 32.2767L18.862 54.6188ZM31.508 54.9904L31.8976 54.7707L19.124 32.1248L18.7344 32.3446L31.508 54.9904ZM11.1133 52.861C14.3719 57.0291 20.6327 60.5165 27.7532 58.2775C35.3208 55.898 38.4217 48.8033 38.1018 42.9573L12.1406 44.3777C11.9506 40.9052 13.9244 35.3708 19.9543 33.4748C25.5372 31.7193 29.85 34.6133 31.5966 36.8475L11.1133 52.861ZM0.906736 33.0708C3.51179 41.6533 6.37328 46.7979 11.1133 52.861L31.5966 36.8475C28.7519 33.2087 27.4233 30.9136 25.7859 25.5192L0.906736 33.0708ZM4.97673 18.0365C1.40491 21.4727 0.116603 26.0491 0.371944 30.1106L26.3207 28.4793C26.4729 30.9007 25.7091 34.1695 23.0024 36.7735L4.97673 18.0365Z"
          fill={color}
          mask="url(#path-2-inside-1_517_1407)"
        />
      </g>
      <defs>
        <filter
          id="filter0_d_517_1407"
          x="13"
          y="6"
          width="48.2852"
          height="49"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dx="10" dy="5" />
          <feGaussianBlur stdDeviation="2" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_517_1407"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_517_1407"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
};

export default BookmarkIcon;