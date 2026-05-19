import React from 'react';

export const iconData = {
  "id": "VarcarePeace",
  "name": "VarcarePeace",
  "category": "CM",
  "nodes": [
    [
      "path",
      {
        "d": "M 12.91 17.00 L 3.66 8.34 L 14.34 9.34 L 21.69 21.21 L 18.13 19.32"
      }
    ],
    [
      "circle",
      {
        "cx": "12.91",
        "cy": "17.00",
        "r": "1.25"
      }
    ],
    [
      "circle",
      {
        "cx": "3.66",
        "cy": "8.34",
        "r": "0.79"
      }
    ],
    [
      "circle",
      {
        "cx": "14.34",
        "cy": "9.34",
        "r": "0.98"
      }
    ],
    [
      "circle",
      {
        "cx": "21.69",
        "cy": "21.21",
        "r": "0.53"
      }
    ],
    [
      "circle",
      {
        "cx": "18.13",
        "cy": "19.32",
        "r": "1.13"
      }
    ]
  ]
};

export const VarcarePeace = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 12.91 17.00 L 3.66 8.34 L 14.34 9.34 L 21.69 21.21 L 18.13 19.32" />
      <circle cx="12.91" cy="17.00" r="1.25" />
      <circle cx="3.66" cy="8.34" r="0.79" />
      <circle cx="14.34" cy="9.34" r="0.98" />
      <circle cx="21.69" cy="21.21" r="0.53" />
      <circle cx="18.13" cy="19.32" r="1.13" />
      {children}
    </svg>
  );
});

export default VarcarePeace;
