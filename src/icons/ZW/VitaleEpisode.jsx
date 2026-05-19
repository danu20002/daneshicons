import React from 'react';

export const iconData = {
  "id": "VitaleEpisode",
  "name": "VitaleEpisode",
  "category": "ZW",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.52 6.55 L 10.01 11.94 L 4.66 21.10 L 17.70 19.72 L 3.21 11.70"
      }
    ],
    [
      "circle",
      {
        "cx": "3.52",
        "cy": "6.55",
        "r": "0.74"
      }
    ],
    [
      "circle",
      {
        "cx": "10.01",
        "cy": "11.94",
        "r": "1.45"
      }
    ],
    [
      "circle",
      {
        "cx": "4.66",
        "cy": "21.10",
        "r": "1.34"
      }
    ],
    [
      "circle",
      {
        "cx": "17.70",
        "cy": "19.72",
        "r": "0.54"
      }
    ],
    [
      "circle",
      {
        "cx": "3.21",
        "cy": "11.70",
        "r": "1.12"
      }
    ]
  ]
};

export const VitaleEpisode = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
  return (
    <svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      {...rest}
    >
      <path d="M 3.52 6.55 L 10.01 11.94 L 4.66 21.10 L 17.70 19.72 L 3.21 11.70" />
      <circle cx="3.52" cy="6.55" r="0.74" />
      <circle cx="10.01" cy="11.94" r="1.45" />
      <circle cx="4.66" cy="21.10" r="1.34" />
      <circle cx="17.70" cy="19.72" r="0.54" />
      <circle cx="3.21" cy="11.70" r="1.12" />
      {children}
    </svg>
  );
});

export default VitaleEpisode;
