import React from 'react';

export const iconData = {
  "id": "VigileCorona",
  "name": "VigileCorona",
  "category": "MP",
  "nodes": [
    [
      "path",
      {
        "d": "M 5.47 12.00 L 18.53 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 5.47 L 12.00 18.53"
      }
    ],
    [
      "path",
      {
        "d": "M 7.43 7.43 L 16.57 16.57"
      }
    ],
    [
      "path",
      {
        "d": "M 7.43 16.57 L 16.57 7.43"
      }
    ],
    [
      "path",
      {
        "d": "M 1.27 12.00 a 10.73 10.73 0 1 0 21.46 0 a 10.73 10.73 0 1 0 -21.46 0"
      }
    ]
  ]
};

export const VigileCorona = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 5.47 12.00 L 18.53 12.00" />
      <path d="M 12.00 5.47 L 12.00 18.53" />
      <path d="M 7.43 7.43 L 16.57 16.57" />
      <path d="M 7.43 16.57 L 16.57 7.43" />
      <path d="M 1.27 12.00 a 10.73 10.73 0 1 0 21.46 0 a 10.73 10.73 0 1 0 -21.46 0" />
      {children}
    </svg>
  );
});

export default VigileCorona;
