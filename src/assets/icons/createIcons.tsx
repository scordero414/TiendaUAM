import React from "react";
import { SvgXml } from "react-native-svg";

const iconHome = `<svg id="Icon_Explore" xmlns="http://www.w3.org/2000/svg" width="16.704" height="20" viewBox="0 0 16.704 20">
                        <path id="Trazado_7" data-name="Trazado 7" d="M4.913-.01A5.236,5.236,0,0,0,0,4.986,5.094,5.094,0,0,0,1.6,8.9a1,1,0,0,0,1.639-.48h0a1.023,1.023,0,0,0-.24-.959A3.047,3.047,0,0,1,2,5.146a3.279,3.279,0,0,1,3-3.158,3.192,3.192,0,0,1,3.2,2.118,1.048,1.048,0,0,0,.719.64h.08A1,1,0,0,0,10.07,3.427,5.153,5.153,0,0,0,4.913-.01Z" transform="translate(0.005 0.017)" fill="#0069a3"/>
                        <path id="Trazado_8" data-name="Trazado 8" d="M22.4,16.593,11.932,10.478a1.031,1.031,0,0,0-1.119.04.974.974,0,0,0-.44,1l1.639,12.031a1.021,1.021,0,0,0,1.6.719.7.7,0,0,0,.2-.16l2.878-3.038,3.118,4.676a1.009,1.009,0,0,0,1.679-1.119l-3.118-4.636,3.877-1.519a.874.874,0,0,0,.2-.12A1.029,1.029,0,0,0,22.4,16.593Zm-3.078.879-2.4.919a4.368,4.368,0,0,0-.6.32,2.752,2.752,0,0,0-.52.44l-1.8,1.879a.219.219,0,0,1-.36-.12l-1-7.314c-.04-.16.16-.28.32-.2l6.355,3.717C19.487,17.193,19.487,17.433,19.327,17.473Z" transform="translate(-6.215 -6.194)" fill="#111"/>
                    </svg>`;
const SvgHome = () => <SvgXml xml={iconHome} />;
//   width="301px"

const shoppingCart = `<svg id="Icon_Cart" xmlns="http://www.w3.org/2000/svg" width="19.871" height="20" viewBox="0 0 19.871 20">
                      <g id="Grupo_183" data-name="Grupo 183">
                        <path id="Trazado_2" data-name="Trazado 2" d="M17.333,3.6h-6.64a1.01,1.01,0,0,0-1,1.16,1,1,0,0,0,1,.84h6.6a.571.571,0,0,1,.44.2.538.538,0,0,1,.12.48l-1.52,7.28a.561.561,0,0,1-.56.48H9.333a.561.561,0,0,1-.56-.48L6.573.8a.95.95,0,0,0-.96-.8h-4.6a.992.992,0,0,0-.96,1.24.989.989,0,0,0,1,.76h3.72l2.04,11.88A2.537,2.537,0,0,0,9.333,16h6.48a2.537,2.537,0,0,0,2.52-2.12l1.52-7.28A2.573,2.573,0,0,0,17.333,3.6Z" transform="translate(-0.022)" fill="#111"/>
                        <path id="Trazado_3" data-name="Trazado 3" d="M30.1,20a1,1,0,1,0,0-2H26.9a1,1,0,0,0,0,2Z" transform="translate(-15.549 -10.8)" fill="#111"/>
                      </g>
                      <g id="Grupo_184" data-name="Grupo 184" transform="translate(8.351 10.4)">
                        <circle id="Elipse_15" data-name="Elipse 15" cx="1.4" cy="1.4" r="1.4" transform="translate(0 6.8)" fill="#0069a3"/>
                        <circle id="Elipse_16" data-name="Elipse 16" cx="1.4" cy="1.4" r="1.4" transform="translate(5.6 6.8)" fill="#0069a3"/>
                        <path id="Trazado_4" data-name="Trazado 4" d="M30.9,27a.99.99,0,0,0-1-1h-2a1,1,0,1,0,0,2h2A.99.99,0,0,0,30.9,27Z" transform="translate(-24.5 -26)" fill="#0069a3"/>
                      </g>
                      </svg>`;
const SvgShoppingCart = () => <SvgXml xml={shoppingCart} />;

const user = `<svg id="Icon_User" xmlns="http://www.w3.org/2000/svg" width="18.793" height="20" viewBox="0 0 18.793 20">
  <path id="Trazado_5" data-name="Trazado 5" d="M18.7,16.84l-.52-2.44a4.858,4.858,0,0,0-2.2-3.12L12.9,9.36a4.108,4.108,0,0,0,.84-2.2l.24-2.28A4.34,4.34,0,0,0,9.624,0h-.48A4.457,4.457,0,0,0,4.7,4.92l.24,2.28a4.773,4.773,0,0,0,.84,2.2L2.7,11.32A4.907,4.907,0,0,0,.544,14.4l-.52,2.44A2.637,2.637,0,0,0,2.584,20h13.56A2.6,2.6,0,0,0,18.7,16.84ZM7.3,2.8A2.451,2.451,0,0,1,9.144,2h.48a2.451,2.451,0,0,1,1.84.8,2.339,2.339,0,0,1,.6,1.88l-.24,2.28a2.453,2.453,0,0,1-4.88,0L6.7,4.68A2.339,2.339,0,0,1,7.3,2.8Zm9.32,14.96a.605.605,0,0,1-.48.24H2.584a.684.684,0,0,1-.48-.24.631.631,0,0,1-.12-.52L2.5,14.8A2.823,2.823,0,0,1,3.784,13l3.64-2.28a4.5,4.5,0,0,0,1.92.44,4.369,4.369,0,0,0,1.92-.44L14.9,13a2.928,2.928,0,0,1,1.28,1.8l.52,2.44A.429.429,0,0,1,16.624,17.76Z" transform="translate(0.026)" fill="#111"/>
  <path id="Trazado_6" data-name="Trazado 6" d="M28.5,38h-2a.99.99,0,0,1-1-1h0a.99.99,0,0,1,1-1h2a.99.99,0,0,1,1,1h0A.99.99,0,0,1,28.5,38Z" transform="translate(-15.289 -21.6)" fill="#0069a3"/>
</svg>
`;
const SvgUser = () => <SvgXml xml={user} />;

export { SvgHome, SvgShoppingCart, SvgUser };
