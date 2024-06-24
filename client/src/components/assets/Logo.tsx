import { AssetProps } from "./asset-types";


const Logo = ({ variant, color,className }: AssetProps) => {
  if (!color) {
    color = variant || "black";
  }
  return (
    <svg
      width="279"
      height="35"
      viewBox="0 0 279 35"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M168.047 18.5161H167.782L167.672 18.4546C167.65 18.4409 167.601 18.4094 167.584 18.393C167.562 18.3725 167.517 18.3725 167.495 18.352C167.473 18.3314 167.495 18.3314 167.429 18.3109C167.252 18.2288 167.23 18.2288 167.186 18.2083C167.142 18.1878 167.142 18.1673 167.076 18.1673C166.881 18.1344 166.773 18.1125 166.744 18.1057H166.678H166.435C166.205 18.1549 166.104 18.1673 166.081 18.1673L166.015 18.1057V16.5258H166.435H166.501V16.4848V15.8282L166.546 15.3972L166.589 15.069L166.634 14.7817L166.678 14.4329L166.788 13.961L166.876 13.5096L167.076 12.7709L167.341 12.0117L167.716 11.0678L168.113 10.2676L168.489 9.52894L168.776 8.91338L168.821 8.76974L169.019 8.60559L169.748 8.07212L170.455 7.57967L171.14 7.14878L171.824 6.71788L172.752 6.22544L173.68 5.81506L174.542 5.44572L175.535 5.11742L176.772 4.78912L177.7 4.58394L178.716 4.46082L179.114 4.41979H179.666H180.174H180.506H180.948H181.235H181.543L181.875 4.46082L182.317 4.52239L182.736 4.5429L183.222 4.62497L183.598 4.70705L184.04 4.76861L184.481 4.8712L184.989 4.99431L185.52 5.15846L186.006 5.32261L186.359 5.44572L186.668 5.54831L187.022 5.69195L187.199 5.77402L187.375 5.8561L187.684 5.97921L187.994 6.14336L188.302 6.30751L188.546 6.4101L188.833 6.55373L189.098 6.7384L189.429 6.92306L189.76 7.10774L190.114 7.35396L190.468 7.57967L190.776 7.78485L191.042 7.99004L191.439 8.2773L191.771 8.52352L192.102 8.7287L192.213 9.03649L192.566 9.73413L192.831 10.2881L193.184 11.0063L193.516 11.786L193.825 12.6478L194.002 13.3249L194.223 14.3713L194.333 15.028L194.421 15.5819L194.444 16.0334L194.466 16.4642L194.51 16.4848L194.952 16.5053V18.0237V18.0852L194.885 18.1468H194.576H194.068L193.869 18.1673L193.692 18.2699L193.45 18.352L193.295 18.4341L193.163 18.4751H192.942V18.1673L192.897 18.1468L192.809 17.88C192.802 17.8254 192.778 17.7118 192.742 17.6954C192.699 17.6749 192.655 17.5518 192.61 17.5313C192.566 17.5107 192.455 17.4081 192.411 17.367C192.367 17.326 192.323 17.2645 192.257 17.2234C192.19 17.1824 192.102 17.1619 192.036 17.1004C191.983 17.0511 191.896 17.0251 191.859 17.0182C191.837 16.9977 191.784 16.9567 191.749 16.9567C191.705 16.9567 191.66 16.8951 191.616 16.8951C191.572 16.8951 191.572 16.8951 191.505 16.8746C191.439 16.8541 191.505 16.8541 191.351 16.8541H191.13H190.931H190.733C190.644 16.8541 190.549 16.8814 190.512 16.8951L190.335 16.9362C190.305 16.9362 190.238 16.9444 190.202 16.9772C190.158 17.0182 190.07 17.0387 190.047 17.0592C190.026 17.0799 189.981 17.0592 189.96 17.1004C189.941 17.1331 189.863 17.1687 189.826 17.1824C189.812 17.196 189.778 17.2234 189.76 17.2234C189.743 17.2234 189.68 17.2645 189.65 17.285L189.562 17.367L189.407 17.5107L189.341 17.5928L189.098 17.88C189.076 17.921 189.019 18.0113 188.965 18.0442C188.913 18.077 188.826 18.2083 188.789 18.2699L188.7 18.4546C188.649 18.4888 188.546 18.5653 188.546 18.5982C188.546 18.631 188.428 18.776 188.369 18.8444C188.369 18.8649 188.36 18.9141 188.325 18.947C188.281 18.988 188.215 19.0291 188.192 19.0906C188.17 19.1521 187.994 19.3574 187.994 19.3779V19.501L187.905 19.583C187.861 19.6242 187.794 19.6857 187.773 19.7267C187.755 19.7596 187.736 19.8225 187.728 19.8498L187.707 19.8703L187.596 20.055C187.567 20.1166 187.503 20.2478 187.486 20.2807C187.463 20.3217 187.375 20.3833 187.352 20.4449C187.331 20.5064 187.331 20.527 187.286 20.5885C187.243 20.65 187.243 20.65 187.176 20.7526C187.123 20.8347 187.065 20.9099 187.044 20.9373C187.022 21.0057 186.973 21.1466 186.955 21.163C186.933 21.1835 186.912 21.204 186.889 21.245C186.867 21.2862 186.912 21.2245 186.823 21.3477C186.734 21.4708 186.712 21.5118 186.691 21.5529C186.668 21.5939 186.624 21.6759 186.602 21.7376C186.58 21.7991 186.536 21.8812 186.514 21.9017C186.496 21.9181 186.433 22.0043 186.404 22.0453L186.249 22.3121L186.138 22.5583C186.086 22.6062 185.983 22.7101 185.983 22.7429C185.983 22.784 185.917 22.866 185.896 22.9071C185.873 22.9482 185.741 23.1123 185.718 23.1533C185.701 23.1862 185.667 23.2764 185.652 23.3174C185.644 23.3585 185.621 23.4488 185.586 23.4816C185.55 23.5144 185.468 23.6184 185.431 23.6663L185.299 23.933L185.144 24.1998L184.967 24.4665L184.857 24.7333L184.659 25.0411L184.504 25.3488L184.304 25.6976L183.951 26.2927L183.796 26.6004C183.76 26.662 183.681 26.7974 183.664 26.8467C183.646 26.8959 183.554 27.0724 183.509 27.1545L183.354 27.4212L183.267 27.6469L183.067 27.9341C183.031 28.0163 182.957 28.1845 182.957 28.2009C182.957 28.2214 182.869 28.4061 182.846 28.4267C182.829 28.443 182.766 28.5703 182.736 28.6318L182.626 28.9191L182.493 29.2063L182.361 29.5551C182.369 29.6099 182.378 29.7275 182.361 29.7604C182.338 29.8014 182.272 29.9039 182.272 29.945V30.2733V30.6632L182.295 30.7657C182.317 30.8205 182.361 30.9381 182.361 30.971C182.361 31.0037 182.435 31.1214 182.472 31.1761L182.626 31.4019C182.67 31.4566 182.763 31.57 182.78 31.5865C182.803 31.607 182.891 31.7096 182.914 31.7302C182.931 31.7465 183.053 31.8053 183.112 31.8327L183.267 31.9558L183.509 32.0584C183.605 32.0721 183.801 32.1036 183.819 32.1199C183.836 32.1364 184.017 32.1679 184.106 32.1816H184.438C184.455 32.1816 184.562 32.1542 184.614 32.1404L184.791 32.1199C184.812 32.1131 184.87 32.0913 184.923 32.0584C184.976 32.0256 185.063 31.9763 185.099 31.9558V31.9148L185.167 31.9558C185.181 31.9626 185.21 31.9846 185.21 32.0174C185.21 32.0502 185.24 32.0994 185.254 32.1199V32.2431C185.254 32.2759 185.284 32.4757 185.299 32.5714L185.343 32.7766L185.431 33.0023L185.52 33.228L185.675 33.3716L185.828 33.5153C185.865 33.5495 185.948 33.6219 185.983 33.6384C186.019 33.6548 186.101 33.7136 186.138 33.7409L186.336 33.8231L186.536 33.9256L186.778 33.9872H186.955C187.008 33.9872 187.199 34.0145 187.286 34.0282C187.346 34.0145 187.467 33.9872 187.486 33.9872C187.503 33.9872 187.641 33.9462 187.707 33.9256L187.839 33.8436C187.905 33.823 188.043 33.7779 188.06 33.7614C188.078 33.7451 188.185 33.6726 188.236 33.6384L188.457 33.5153C188.494 33.4673 188.577 33.3716 188.612 33.3716C188.647 33.3716 188.73 33.3032 188.767 33.269C188.81 33.2075 188.904 33.0844 188.921 33.0844C188.939 33.0844 189.062 32.9749 189.12 32.9202L189.318 32.6945C189.363 32.6398 189.456 32.5262 189.473 32.5098C189.491 32.4935 189.613 32.3525 189.673 32.2841C189.717 32.2294 189.809 32.1118 189.826 32.0789C189.845 32.0461 189.967 31.9011 190.026 31.8327C190.078 31.7712 190.185 31.6316 190.202 31.566C190.22 31.5003 190.342 31.3471 190.402 31.2787L190.622 30.9915L190.821 30.7042L191.02 30.4374L191.263 30.0475L191.462 29.7398L191.616 29.4731L191.859 29.0832L192.013 28.8165L192.213 28.5087L192.367 28.2214L192.521 27.9753L192.721 27.6264C192.757 27.5717 192.836 27.454 192.853 27.4212L193.008 27.134C193.06 27.0518 193.163 26.8836 193.163 26.8672C193.163 26.8508 193.281 26.6552 193.339 26.5594L193.516 26.2516C193.582 26.1422 193.715 25.9192 193.715 25.9029C193.715 25.8824 193.869 25.6361 193.869 25.6156C193.869 25.5991 194.002 25.3762 194.068 25.2667L194.179 25.0205L194.399 24.6512L194.576 24.2819L194.774 23.9536C194.805 23.8646 194.868 23.6827 194.885 23.6663C194.903 23.6498 194.995 23.4816 195.04 23.3996L195.195 23.0713C195.239 22.9755 195.331 22.7758 195.349 22.7429C195.367 22.7101 195.474 22.4831 195.526 22.3736L195.614 22.0863L195.724 21.7786L195.835 21.4503L195.968 21.1014L196.056 20.6911L196.144 20.2807V19.9729V19.7062V19.542V19.4394L196.078 19.3779V19.2958L196.144 19.1727L196.189 19.1111V18.9675C196.174 18.9675 196.144 18.9594 196.144 18.9265C196.144 18.8936 196.1 18.8307 196.078 18.8034C196.078 18.7897 196.074 18.7582 196.056 18.7418C196.034 18.7213 195.99 18.7007 195.968 18.6802C195.95 18.6638 195.916 18.6461 195.901 18.6392L195.791 18.5366L195.724 18.4751L195.747 18.4135C195.769 18.393 195.818 18.352 195.835 18.352C195.857 18.352 195.879 18.3109 195.924 18.2904C195.959 18.274 195.968 18.2425 195.968 18.2288L196.034 18.1263L196.056 17.6543V17.285V16.4232H196.232C196.269 16.4164 196.352 16.4027 196.387 16.4027H196.498L196.542 16.3617V16.1564V15.8487L196.476 15.4589L196.432 15.028L196.387 14.7817L196.343 14.4944L196.299 14.2483L196.232 14.002L196.211 13.7353L196.166 13.5916L196.122 13.407C196.1 13.3523 196.056 13.2346 196.056 13.2018V13.0787L195.99 12.8529L195.945 12.6478C195.938 12.6273 195.919 12.5822 195.901 12.5657C195.884 12.5493 195.85 12.4357 195.835 12.381L195.791 12.2169C195.784 12.2101 195.764 12.1799 195.747 12.1143C195.724 12.0322 195.724 12.0527 195.703 11.9501C195.681 11.8475 195.681 11.827 195.658 11.786C195.641 11.7531 195.577 11.5945 195.548 11.5192C195.534 11.4714 195.5 11.3674 195.482 11.3346C195.464 11.3017 195.4 11.102 195.371 11.0063C195.327 10.9037 195.234 10.6903 195.216 10.6574C195.199 10.6246 195.106 10.3976 195.062 10.2881L194.929 9.98039L194.797 9.67257L194.664 9.42634L194.532 9.20064L194.355 8.87234L194.179 8.60559L194.024 8.37989L193.781 8.09263L193.56 7.88744L193.405 7.72329L193.273 7.55914L193.118 7.33344L192.897 7.0667L192.655 6.7384L192.345 6.36906L192.102 6.10232L191.837 5.81506L191.55 5.50728L191.307 5.28157L190.997 4.99431L190.6 4.66601L190.136 4.25564L189.717 3.94786L189.208 3.57852L188.789 3.31178L188.436 3.1066L188.126 2.92193L187.773 2.73726L187.352 2.53207L187.044 2.36792L186.624 2.18326L186.249 2.06015L185.896 1.91652L185.586 1.83444L185.254 1.71133C185.151 1.69081 184.937 1.64156 184.901 1.60873C184.866 1.5759 184.518 1.48562 184.349 1.44458L183.951 1.36251L183.642 1.28043L183.354 1.2394L183.024 1.17784L182.626 1.13681L182.251 1.05473H182.118H181.875L181.456 1.01369L181.124 0.972656H180.793H179.821L179.246 1.01369L178.782 1.07525L178.407 1.11628L178.098 1.15732L177.811 1.19836L177.612 1.21888L177.435 1.25992L177.214 1.30096L176.993 1.34199L176.839 1.38303L176.618 1.44458L176.331 1.52666L176.154 1.58822L175.8 1.67029L175.226 1.85496L174.718 2.01911L174.21 2.2243C174.092 2.27901 173.853 2.39255 173.835 2.40896C173.813 2.42948 173.569 2.5526 173.547 2.5526C173.526 2.5526 173.282 2.65518 173.239 2.69622C173.202 2.72905 173.061 2.81933 172.995 2.86037L172.708 2.98348L172.332 3.20919L172.023 3.39386L171.67 3.59905L171.449 3.7632C171.397 3.79739 171.285 3.87399 171.25 3.90682C171.206 3.94786 171.184 4.00942 171.118 4.02994C171.064 4.04635 170.889 4.18724 170.808 4.25564L170.455 4.5429L170.146 4.85069L169.66 5.30209L169.218 5.73299L168.865 6.14336L168.357 6.71788C168.246 6.85467 168.021 7.13236 168.003 7.14878C167.986 7.16519 167.834 7.37448 167.76 7.47707C167.694 7.55231 167.557 7.70688 167.539 7.72329C167.517 7.74382 167.341 7.949 167.296 7.99004C167.261 8.02286 167.105 8.18155 167.031 8.25678L166.788 8.60559L166.546 8.95442L166.347 9.32375C166.273 9.4537 166.126 9.72181 166.126 9.75464C166.126 9.79567 165.971 10.1035 165.971 10.124C165.971 10.1404 165.868 10.336 165.817 10.4318L165.662 10.801L165.463 11.3141L165.309 11.827L165.088 12.4837L164.91 13.0787L164.8 13.5916L164.734 13.9199L164.646 14.1867L164.602 14.6586L164.513 15.069L164.469 15.5614L164.425 15.8282V16.3412L164.469 16.3822H164.91V18.1057L164.933 18.2083L165.043 18.3109L165.154 18.4341L165.264 18.5161H165.331V18.5777C165.331 18.5941 165.301 18.6529 165.286 18.6802L165.176 18.7829L165.11 18.8649L165.043 18.988L164.977 19.1111L164.889 19.2753L164.823 19.4599L164.778 19.7062V20.1781L164.823 20.2807V20.527C164.844 20.5885 164.889 20.7157 164.889 20.7321C164.889 20.7485 164.918 20.8758 164.933 20.9373L164.977 21.1425C164.999 21.1835 165.043 21.2697 165.043 21.2862C165.043 21.3067 165.065 21.4093 165.088 21.4298C165.105 21.4462 165.11 21.5186 165.11 21.5529L165.198 21.7581L165.264 21.9837L165.331 22.1479L165.441 22.3326L165.507 22.5378L165.639 22.8455L165.75 23.0918L165.86 23.2764L165.949 23.4816L166.104 23.7688C166.133 23.8646 166.201 24.0644 166.236 24.0972C166.271 24.13 166.368 24.3024 166.413 24.3844L166.479 24.5691L166.7 24.9589L166.876 25.2257L167.009 25.472L167.252 25.9439L167.451 26.2927L167.672 26.6415L167.871 26.9903L168.158 27.5238L168.357 27.8726C168.423 27.9615 168.555 28.1434 168.555 28.1599C168.555 28.1763 168.629 28.3172 168.666 28.3856L168.909 28.7549L169.041 29.0011L169.284 29.391L169.549 29.8014L169.792 30.1502L170.057 30.5606L170.323 30.9504L170.61 31.3813L170.897 31.7302L171.14 32.0584L171.405 32.3662L171.692 32.715L172.023 33.0434L172.266 33.2895L172.487 33.4742L172.84 33.6999L173.084 33.8231L173.326 33.9256H173.459L173.614 33.9667H174.188L174.453 33.9256L174.563 33.8641L174.784 33.7614L174.917 33.6589C174.984 33.6246 175.116 33.548 175.116 33.5153C175.116 33.4742 175.271 33.2895 175.292 33.2895C175.314 33.2895 175.403 33.1869 175.425 33.1459C175.447 33.1049 175.469 33.0023 175.513 32.9407C175.558 32.8791 175.558 32.8381 175.579 32.7766C175.598 32.7273 175.616 32.6466 175.624 32.6125C175.616 32.5508 175.606 32.4237 175.624 32.4072C175.641 32.3908 175.631 32.2499 175.624 32.1816L175.712 32.0584L175.756 31.9763L175.845 31.9148L175.933 31.9763L176.021 32.0584L176.132 32.0994L176.287 32.1199H176.463L176.574 32.1404H176.662C176.698 32.1474 176.786 32.1569 176.839 32.1404C176.905 32.1199 176.949 32.1199 176.993 32.1199C177.037 32.1199 177.148 32.0994 177.17 32.0994C177.192 32.0994 177.28 32.0584 177.324 32.0584C177.36 32.0584 177.427 32.0311 177.458 32.0174C177.494 32.0106 177.576 31.9928 177.612 31.9763C177.656 31.9558 177.722 31.9763 177.766 31.9148C177.811 31.8533 177.877 31.8327 177.921 31.7917C177.957 31.7589 177.995 31.6959 178.009 31.6685L178.164 31.566L178.319 31.3813L178.451 31.2171L178.561 30.9915L178.65 30.7452L178.672 30.5401V29.945L178.65 29.7604L178.584 29.5961L178.561 29.4525L178.517 29.35L178.451 29.2474L178.407 29.1447L178.34 29.0011L178.274 28.837L178.208 28.6933L178.142 28.5497L178.098 28.4267L177.987 28.2214L177.877 28.0163L177.788 27.7905L177.7 27.6469L177.634 27.4827L177.524 27.3391L177.458 27.1955L177.347 26.9903L177.258 26.8057L177.126 26.5594L176.993 26.3132L176.816 26.0054L176.684 25.7797L176.508 25.4309L176.397 25.2667L176.308 25.0821L176.132 24.8564L176 24.5691L175.845 24.3434L175.712 24.0972L175.558 23.851L175.447 23.6252L175.271 23.3379L175.094 23.0097L174.939 22.7429L174.763 22.5172L174.674 22.3121L174.542 22.0863L174.431 21.9017L174.232 21.5939L174.077 21.3272L173.901 21.0194L173.702 20.7116L173.569 20.4654L173.437 20.2602L173.305 20.0345L173.172 19.7883C173.142 19.754 173.079 19.6816 173.061 19.6652C173.044 19.6488 172.966 19.5215 172.929 19.4599L172.84 19.2958L172.708 19.0906L172.553 18.8855L172.421 18.7007L172.289 18.4751L172.156 18.3314L172.045 18.1468L171.869 17.9211L171.648 17.6543L171.405 17.4491C171.346 17.3945 171.219 17.2809 171.184 17.2645C171.14 17.244 170.963 17.1004 170.941 17.1004C170.923 17.1004 170.786 17.0319 170.72 16.9977L170.521 16.9156L170.3 16.8746H170.212L170.036 16.8541H169.815L169.638 16.8746L169.417 16.9156L169.218 16.9977L169.041 17.0592L168.887 17.1414C168.85 17.155 168.772 17.1906 168.754 17.2234C168.732 17.2645 168.621 17.326 168.6 17.3465C168.582 17.363 168.518 17.4491 168.489 17.4901L168.379 17.6338L168.268 17.7364C168.261 17.7569 168.242 17.802 168.224 17.8184C168.207 17.8349 168.143 17.9621 168.113 18.0237L168.047 18.1468V18.2493L168.003 18.3109L168.047 18.393V18.4546L168.025 18.4956L168.047 18.5161Z"
        fill={color}
      />
      <path
        d="M4.8694 19.9386H20.0549V10.2021H24.3794V34.0282H20.0549V24.2918H4.8694V34.0282H0.544922V10.2021H4.8694V19.9386ZM48.7215 24.2918H35.0662V19.9386H48.7215V24.2918ZM50.6675 34.0282H35.0662C34.4674 34.0282 33.8132 33.923 33.1036 33.7125C32.3939 33.502 31.7341 33.1586 31.1243 32.6824C30.5255 32.195 30.0209 31.5692 29.6107 30.8049C29.2115 30.0295 29.012 29.0824 29.012 27.9637V12.3787C29.012 12.0796 29.0674 11.7972 29.1783 11.5314C29.2892 11.2655 29.4388 11.0329 29.6274 10.8335C29.827 10.6341 30.0598 10.479 30.3259 10.3683C30.592 10.2575 30.8803 10.2021 31.1908 10.2021H50.6675V14.522H33.3364V27.9637C33.3364 28.5286 33.4861 28.9606 33.7854 29.2596C34.0849 29.5587 34.5229 29.7082 35.0994 29.7082H50.6675V34.0282ZM77.9204 34.0282H73.5959V28.1797H58.3937V34.0282H54.0692V22.1152C54.0692 20.3761 54.3687 18.7755 54.9674 17.3134C55.5662 15.8512 56.3978 14.5941 57.4623 13.5417C58.5268 12.4895 59.7854 11.6698 61.2379 11.0827C62.6905 10.4957 64.2761 10.2021 65.9949 10.2021H75.7415C76.0409 10.2021 76.3237 10.2575 76.5898 10.3683C76.8559 10.479 77.0888 10.6341 77.2884 10.8335C77.4879 11.0329 77.6432 11.2655 77.7541 11.5314C77.8649 11.7972 77.9204 12.0796 77.9204 12.3787V34.0282ZM58.3937 23.8597H73.5959V14.522H65.9949C65.8617 14.522 65.579 14.5442 65.1466 14.5885C64.7252 14.6218 64.2317 14.7159 63.6663 14.871C63.1118 15.026 62.5242 15.2642 61.9032 15.5854C61.2822 15.9067 60.7112 16.3497 60.19 16.9147C59.6689 17.4795 59.2365 18.1885 58.8927 19.0414C58.5601 19.8831 58.3937 20.9078 58.3937 22.1152V23.8597ZM106.421 24.0591C106.421 25.5102 106.166 26.8449 105.656 28.0633C105.156 29.2818 104.463 30.3341 103.577 31.2202C102.689 32.0953 101.636 32.7821 100.417 33.2806C99.1961 33.779 97.8715 34.0282 96.4409 34.0282H84.765C84.4546 34.0282 84.1663 33.9728 83.9001 33.8621C83.634 33.7513 83.4011 33.6018 83.2015 33.4135C83.0131 33.2141 82.8634 32.9814 82.7525 32.7156C82.6416 32.4498 82.5861 32.1617 82.5861 31.8516V12.3787C82.5861 12.0796 82.6416 11.7972 82.7525 11.5314C82.8634 11.2655 83.0131 11.0329 83.2015 10.8335C83.4011 10.6341 83.634 10.479 83.9001 10.3683C84.1663 10.2575 84.4546 10.2021 84.765 10.2021H96.4409C97.8715 10.2021 99.1961 10.4513 100.417 10.9498C101.636 11.4482 102.689 12.1406 103.577 13.0266C104.463 13.9017 105.156 14.9541 105.656 16.1836C106.166 17.402 106.421 18.7313 106.421 20.1712V24.0591ZM102.096 20.1712C102.096 19.3294 101.957 18.5596 101.681 17.8617C101.414 17.1638 101.032 16.5713 100.532 16.0839C100.034 15.5854 99.4346 15.2033 98.7367 14.9375C98.0487 14.6605 97.2837 14.522 96.4409 14.522H86.9107V29.7082H96.4409C97.2837 29.7082 98.0487 29.5753 98.7367 29.3095C99.4346 29.0326 100.034 28.6505 100.532 28.1631C101.032 27.6646 101.414 27.0721 101.681 26.3853C101.957 25.6874 102.096 24.9121 102.096 24.0591V20.1712ZM134.089 20.1712C134.089 21.1571 133.967 22.0376 133.723 22.813C133.48 23.5884 133.147 24.2752 132.725 24.8733C132.316 25.4603 131.839 25.9643 131.295 26.3853C130.752 26.8061 130.18 27.1495 129.582 27.4153C128.994 27.6812 128.395 27.8751 127.785 27.9969C127.187 28.1187 126.621 28.1797 126.089 28.1797H116.309V23.8597H126.089C126.644 23.8154 127.143 23.7047 127.586 23.5274C128.04 23.3391 128.428 23.0899 128.751 22.7798C129.072 22.4696 129.321 22.0986 129.499 21.6666C129.676 21.2235 129.765 20.725 129.765 20.1712V18.2106C129.709 17.6678 129.593 17.1694 129.415 16.7153C129.238 16.2611 128.994 15.8734 128.683 15.5522C128.385 15.231 128.019 14.9817 127.586 14.8046C127.154 14.6162 126.654 14.522 126.089 14.522H116.343C115.766 14.522 115.328 14.6716 115.029 14.9706C114.729 15.2698 114.579 15.7017 114.579 16.2667V34.0282H110.255V16.2667C110.255 15.1589 110.455 14.2174 110.854 13.4421C111.264 12.6667 111.768 12.0408 112.367 11.5645C112.977 11.0882 113.637 10.7448 114.347 10.5345C115.056 10.3129 115.71 10.2021 116.309 10.2021H126.089C127.065 10.2021 127.941 10.3295 128.717 10.5842C129.493 10.828 130.175 11.1603 130.762 11.5811C131.362 11.991 131.866 12.4673 132.277 13.01C132.698 13.5528 133.042 14.1233 133.307 14.7214C133.585 15.3085 133.784 15.9067 133.906 16.5159C134.029 17.114 134.089 17.6789 134.089 18.2106V20.1712ZM141.815 19.9386H157.001V10.2021H161.325V34.0282H157.001V24.2918H141.815V34.0282H137.491V10.2021H141.815V19.9386Z"
        fill={color}
      />
      <path
        d="M224.834 32.1835C224.834 32.4937 224.773 32.7817 224.651 33.0475C224.54 33.3133 224.385 33.546 224.186 33.7454C223.997 33.9337 223.77 34.0832 223.503 34.194C223.238 34.3047 222.954 34.3601 222.656 34.3601C222.389 34.3601 222.117 34.3103 221.84 34.2106C221.574 34.1109 221.336 33.9502 221.125 33.7288L205.324 17.2466V34.0278H201V12.046C201 11.6029 201.122 11.2042 201.366 10.8498C201.621 10.4842 201.942 10.2129 202.33 10.0356C202.74 9.86946 203.162 9.83067 203.595 9.91924C204.027 9.99682 204.399 10.1962 204.709 10.5174L220.51 26.983V10.2018H224.834V32.1835ZM249.483 24.2914H235.829V19.9382H249.483V24.2914ZM251.43 34.0278H235.829C235.229 34.0278 234.575 33.9226 233.865 33.7121C233.156 33.5017 232.496 33.1583 231.886 32.682C231.287 32.1946 230.783 31.5688 230.373 30.8045C229.973 30.0291 229.774 29.082 229.774 27.9633V12.3783C229.774 12.0792 229.829 11.7968 229.94 11.531C230.051 11.2651 230.201 11.0325 230.389 10.8331C230.589 10.6337 230.822 10.4787 231.088 10.3679C231.355 10.2571 231.643 10.2018 231.953 10.2018H251.43V14.5216H234.098V27.9633C234.098 28.5283 234.248 28.9602 234.548 29.2593C234.847 29.5583 235.284 29.7079 235.862 29.7079H251.43V34.0278ZM278.441 27.0163C278.441 27.8692 278.33 28.639 278.108 29.3258C277.898 30.0015 277.615 30.5996 277.26 31.1202C276.905 31.6408 276.49 32.0839 276.013 32.4494C275.536 32.8149 275.042 33.114 274.533 33.3466C274.023 33.5792 273.501 33.7509 272.969 33.8617C272.448 33.9724 271.954 34.0278 271.488 34.0278H254.806V29.7079H271.488C272.32 29.7079 272.964 29.4642 273.418 28.9768C273.883 28.4895 274.117 27.8359 274.117 27.0163C274.117 26.6174 274.056 26.252 273.934 25.9197C273.811 25.5874 273.634 25.2993 273.402 25.0557C273.18 24.8119 272.902 24.6236 272.569 24.4907C272.248 24.3578 271.887 24.2914 271.488 24.2914H261.543C260.844 24.2914 260.09 24.1695 259.28 23.9259C258.471 23.671 257.717 23.2668 257.018 22.7129C256.331 22.1591 255.754 21.4336 255.289 20.5363C254.834 19.6391 254.606 18.5426 254.606 17.2466C254.606 15.9505 254.834 14.8595 255.289 13.9734C255.754 13.0761 256.331 12.3507 257.018 11.7968C257.717 11.2318 258.471 10.8276 259.28 10.5839C260.09 10.3291 260.844 10.2018 261.543 10.2018H276.262V14.5216H261.543C260.721 14.5216 260.079 14.7709 259.613 15.2694C259.158 15.7678 258.93 16.4269 258.93 17.2466C258.93 18.0774 259.158 18.7363 259.613 19.2237C260.079 19.7001 260.721 19.9382 261.543 19.9382H271.488H271.522C271.987 19.9493 272.481 20.0158 273.002 20.1376C273.523 20.2483 274.039 20.4256 274.549 20.6693C275.07 20.9129 275.563 21.2231 276.029 21.5997C276.495 21.9653 276.905 22.4083 277.26 22.9289C277.625 23.4496 277.915 24.0477 278.125 24.7234C278.336 25.3991 278.441 26.1633 278.441 27.0163Z"
        fill={color}
      />
    </svg>
  );
};

export default Logo;