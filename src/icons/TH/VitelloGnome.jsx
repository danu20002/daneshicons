import React from 'react';

export const iconData = {
  "id": "VitelloGnome",
  "name": "VitelloGnome",
  "category": "TH",
  "nodes": [
    [
      "path",
      {
        "d": "M 11.53 11.48 L 19.25 21.80 L 13.39 3.68 L 9.78 13.16 L 10.32 2.42 L 9.02 11.77"
      }
    ],
    [
      "circle",
      {
        "cx": "11.53",
        "cy": "11.48",
        "r": "1.49"
      }
    ],
    [
      "circle",
      {
        "cx": "19.25",
        "cy": "21.80",
        "r": "0.60"
      }
    ],
    [
      "circle",
      {
        "cx": "13.39",
        "cy": "3.68",
        "r": "0.63"
      }
    ],
    [
      "circle",
      {
        "cx": "9.78",
        "cy": "13.16",
        "r": "1.10"
      }
    ],
    [
      "circle",
      {
        "cx": "10.32",
        "cy": "2.42",
        "r": "0.93"
      }
    ],
    [
      "circle",
      {
        "cx": "9.02",
        "cy": "11.77",
        "r": "1.09"
      }
    ]
  ]
};

export const VitelloGnome = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 11.53 11.48 L 19.25 21.80 L 13.39 3.68 L 9.78 13.16 L 10.32 2.42 L 9.02 11.77" />
      <circle cx="11.53" cy="11.48" r="1.49" />
      <circle cx="19.25" cy="21.80" r="0.60" />
      <circle cx="13.39" cy="3.68" r="0.63" />
      <circle cx="9.78" cy="13.16" r="1.10" />
      <circle cx="10.32" cy="2.42" r="0.93" />
      <circle cx="9.02" cy="11.77" r="1.09" />
      {children}
    </svg>
  );
});

export default VitelloGnome;
