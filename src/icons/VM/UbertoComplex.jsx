import React from 'react';

export const iconData = {
  "id": "UbertoComplex",
  "name": "UbertoComplex",
  "category": "VM",
  "nodes": [
    [
      "path",
      {
        "d": "M 7.65 11.49 L 20.80 13.82 L 19.27 6.11 L 17.48 3.98 L 13.09 7.05 L 2.81 7.69 L 7.10 3.94"
      }
    ],
    [
      "circle",
      {
        "cx": "7.65",
        "cy": "11.49",
        "r": "1.06"
      }
    ],
    [
      "circle",
      {
        "cx": "20.80",
        "cy": "13.82",
        "r": "1.00"
      }
    ],
    [
      "circle",
      {
        "cx": "19.27",
        "cy": "6.11",
        "r": "0.88"
      }
    ],
    [
      "circle",
      {
        "cx": "17.48",
        "cy": "3.98",
        "r": "1.38"
      }
    ],
    [
      "circle",
      {
        "cx": "13.09",
        "cy": "7.05",
        "r": "1.17"
      }
    ],
    [
      "circle",
      {
        "cx": "2.81",
        "cy": "7.69",
        "r": "1.32"
      }
    ],
    [
      "circle",
      {
        "cx": "7.10",
        "cy": "3.94",
        "r": "0.96"
      }
    ]
  ]
};

export const UbertoComplex = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 7.65 11.49 L 20.80 13.82 L 19.27 6.11 L 17.48 3.98 L 13.09 7.05 L 2.81 7.69 L 7.10 3.94" />
      <circle cx="7.65" cy="11.49" r="1.06" />
      <circle cx="20.80" cy="13.82" r="1.00" />
      <circle cx="19.27" cy="6.11" r="0.88" />
      <circle cx="17.48" cy="3.98" r="1.38" />
      <circle cx="13.09" cy="7.05" r="1.17" />
      <circle cx="2.81" cy="7.69" r="1.32" />
      <circle cx="7.10" cy="3.94" r="0.96" />
      {children}
    </svg>
  );
});

export default UbertoComplex;
