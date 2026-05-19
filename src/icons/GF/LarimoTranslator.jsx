import React from 'react';

export const iconData = {
  "id": "LarimoTranslator",
  "name": "LarimoTranslator",
  "category": "GF",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.79 12.00 a 8.21 8.21 0 1 0 16.43 0 a 8.21 8.21 0 1 0 -16.43 0"
      }
    ],
    [
      "path",
      {
        "d": "M 4.89 7.89 a 7.11 2.1339270538540736 0 1 0 14.23 0 a 7.11 2.1339270538540736 0 1 0 -14.23 0"
      }
    ],
    [
      "path",
      {
        "d": "M 3.79 12.00 a 8.21 2.464046717947349 0 1 0 16.43 0 a 8.21 2.464046717947349 0 1 0 -16.43 0"
      }
    ],
    [
      "path",
      {
        "d": "M 4.89 16.11 a 7.11 2.1339270538540736 0 1 0 14.23 0 a 7.11 2.1339270538540736 0 1 0 -14.23 0"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 3.79 A 2 2 0 0 0 12.00 20.21"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 3.79 A 2 2 0 0 1 12.00 20.21"
      }
    ]
  ]
};

export const LarimoTranslator = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.79 12.00 a 8.21 8.21 0 1 0 16.43 0 a 8.21 8.21 0 1 0 -16.43 0" />
      <path d="M 4.89 7.89 a 7.11 2.1339270538540736 0 1 0 14.23 0 a 7.11 2.1339270538540736 0 1 0 -14.23 0" />
      <path d="M 3.79 12.00 a 8.21 2.464046717947349 0 1 0 16.43 0 a 8.21 2.464046717947349 0 1 0 -16.43 0" />
      <path d="M 4.89 16.11 a 7.11 2.1339270538540736 0 1 0 14.23 0 a 7.11 2.1339270538540736 0 1 0 -14.23 0" />
      <path d="M 12.00 3.79 A 2 2 0 0 0 12.00 20.21" />
      <path d="M 12.00 3.79 A 2 2 0 0 1 12.00 20.21" />
      {children}
    </svg>
  );
});

export default LarimoTranslator;
