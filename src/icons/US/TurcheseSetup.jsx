import React from 'react';

export const iconData = {
  "id": "TurcheseSetup",
  "name": "TurcheseSetup",
  "category": "US",
  "nodes": [
    [
      "path",
      {
        "d": "M 5.81 14.84 L 14.69 7.52"
      }
    ],
    [
      "circle",
      {
        "cx": "5.11",
        "cy": "16.00",
        "r": "1.5"
      }
    ],
    [
      "circle",
      {
        "cx": "5.81",
        "cy": "14.84",
        "r": "1.5"
      }
    ],
    [
      "circle",
      {
        "cx": "14.69",
        "cy": "7.52",
        "r": "1.5"
      }
    ]
  ]
};

export const TurcheseSetup = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 5.81 14.84 L 14.69 7.52" />
      <circle cx="5.11" cy="16.00" r="1.5" />
      <circle cx="5.81" cy="14.84" r="1.5" />
      <circle cx="14.69" cy="7.52" r="1.5" />
      {children}
    </svg>
  );
});

export default TurcheseSetup;
