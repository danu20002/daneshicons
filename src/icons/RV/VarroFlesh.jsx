import React from 'react';

export const iconData = {
  "id": "VarroFlesh",
  "name": "VarroFlesh",
  "category": "RV",
  "nodes": [
    [
      "path",
      {
        "d": "M 18.95 3.45 L 12.91 15.21 L 13.17 17.70 L 10.23 5.86"
      }
    ],
    [
      "circle",
      {
        "cx": "18.95",
        "cy": "3.45",
        "r": "0.79"
      }
    ],
    [
      "circle",
      {
        "cx": "12.91",
        "cy": "15.21",
        "r": "0.94"
      }
    ],
    [
      "circle",
      {
        "cx": "13.17",
        "cy": "17.70",
        "r": "1.25"
      }
    ],
    [
      "circle",
      {
        "cx": "10.23",
        "cy": "5.86",
        "r": "1.38"
      }
    ]
  ]
};

export const VarroFlesh = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 18.95 3.45 L 12.91 15.21 L 13.17 17.70 L 10.23 5.86" />
      <circle cx="18.95" cy="3.45" r="0.79" />
      <circle cx="12.91" cy="15.21" r="0.94" />
      <circle cx="13.17" cy="17.70" r="1.25" />
      <circle cx="10.23" cy="5.86" r="1.38" />
      {children}
    </svg>
  );
});

export default VarroFlesh;
