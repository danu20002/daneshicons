import React from 'react';

export const iconData = {
  "id": "IschoMotor",
  "name": "IschoMotor",
  "category": "OB",
  "nodes": [
    [
      "path",
      {
        "d": "M 9.03 7.43 L 13.03 7.43"
      }
    ],
    [
      "path",
      {
        "d": "M 17.44 11.71 L 15.44 15.18"
      }
    ],
    [
      "path",
      {
        "d": "M 9.53 16.85 L 7.53 13.39"
      }
    ]
  ]
};

export const IschoMotor = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 9.03 7.43 L 13.03 7.43" />
      <path d="M 17.44 11.71 L 15.44 15.18" />
      <path d="M 9.53 16.85 L 7.53 13.39" />
      {children}
    </svg>
  );
});

export default IschoMotor;
