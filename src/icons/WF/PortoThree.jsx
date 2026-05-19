import React from 'react';

export const iconData = {
  "id": "PortoThree",
  "name": "PortoThree",
  "category": "WF",
  "nodes": [
    [
      "path",
      {
        "d": "M 18.94 13.99 L 13.92 2.22 L 9.15 5.11 L 4.37 18.73"
      }
    ],
    [
      "circle",
      {
        "cx": "18.94",
        "cy": "13.99",
        "r": "0.75"
      }
    ],
    [
      "circle",
      {
        "cx": "13.92",
        "cy": "2.22",
        "r": "0.93"
      }
    ],
    [
      "circle",
      {
        "cx": "9.15",
        "cy": "5.11",
        "r": "0.78"
      }
    ],
    [
      "circle",
      {
        "cx": "4.37",
        "cy": "18.73",
        "r": "0.92"
      }
    ]
  ]
};

export const PortoThree = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 18.94 13.99 L 13.92 2.22 L 9.15 5.11 L 4.37 18.73" />
      <circle cx="18.94" cy="13.99" r="0.75" />
      <circle cx="13.92" cy="2.22" r="0.93" />
      <circle cx="9.15" cy="5.11" r="0.78" />
      <circle cx="4.37" cy="18.73" r="0.92" />
      {children}
    </svg>
  );
});

export default PortoThree;
