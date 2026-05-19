import React from 'react';

export const iconData = {
  "id": "VoltajeFeline",
  "name": "VoltajeFeline",
  "category": "KN",
  "nodes": [
    [
      "path",
      {
        "d": "M 12.17 7.00 L 5.61 7.79 L 7.99 2.89 L 21.91 5.23 L 2.94 18.24 L 15.61 5.05 L 10.29 17.31 L 15.02 6.75"
      }
    ],
    [
      "circle",
      {
        "cx": "12.17",
        "cy": "7.00",
        "r": "1.31"
      }
    ],
    [
      "circle",
      {
        "cx": "5.61",
        "cy": "7.79",
        "r": "0.53"
      }
    ],
    [
      "circle",
      {
        "cx": "7.99",
        "cy": "2.89",
        "r": "1.41"
      }
    ],
    [
      "circle",
      {
        "cx": "21.91",
        "cy": "5.23",
        "r": "0.94"
      }
    ],
    [
      "circle",
      {
        "cx": "2.94",
        "cy": "18.24",
        "r": "0.73"
      }
    ],
    [
      "circle",
      {
        "cx": "15.61",
        "cy": "5.05",
        "r": "0.78"
      }
    ],
    [
      "circle",
      {
        "cx": "10.29",
        "cy": "17.31",
        "r": "1.04"
      }
    ],
    [
      "circle",
      {
        "cx": "15.02",
        "cy": "6.75",
        "r": "1.35"
      }
    ]
  ]
};

export const VoltajeFeline = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 12.17 7.00 L 5.61 7.79 L 7.99 2.89 L 21.91 5.23 L 2.94 18.24 L 15.61 5.05 L 10.29 17.31 L 15.02 6.75" />
      <circle cx="12.17" cy="7.00" r="1.31" />
      <circle cx="5.61" cy="7.79" r="0.53" />
      <circle cx="7.99" cy="2.89" r="1.41" />
      <circle cx="21.91" cy="5.23" r="0.94" />
      <circle cx="2.94" cy="18.24" r="0.73" />
      <circle cx="15.61" cy="5.05" r="0.78" />
      <circle cx="10.29" cy="17.31" r="1.04" />
      <circle cx="15.02" cy="6.75" r="1.35" />
      {children}
    </svg>
  );
});

export default VoltajeFeline;
