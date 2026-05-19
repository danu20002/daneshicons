import React from 'react';

export const iconData = {
  "id": "ZonzoExtent",
  "name": "ZonzoExtent",
  "category": "SQ",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.87 12.00 a 8.13 8.13 0 1 0 16.27 0 a 8.13 8.13 0 1 0 -16.27 0"
      }
    ],
    [
      "path",
      {
        "d": "M 4.96 7.93 a 7.04 2.1134398187634105 0 1 0 14.09 0 a 7.04 2.1134398187634105 0 1 0 -14.09 0"
      }
    ],
    [
      "path",
      {
        "d": "M 3.87 12.00 a 8.13 2.4403900965582577 0 1 0 16.27 0 a 8.13 2.4403900965582577 0 1 0 -16.27 0"
      }
    ],
    [
      "path",
      {
        "d": "M 4.96 16.07 a 7.04 2.1134398187634105 0 1 0 14.09 0 a 7.04 2.1134398187634105 0 1 0 -14.09 0"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 3.87 A 2 2 0 0 0 12.00 20.13"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 3.87 A 2 2 0 0 1 12.00 20.13"
      }
    ]
  ]
};

export const ZonzoExtent = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.87 12.00 a 8.13 8.13 0 1 0 16.27 0 a 8.13 8.13 0 1 0 -16.27 0" />
      <path d="M 4.96 7.93 a 7.04 2.1134398187634105 0 1 0 14.09 0 a 7.04 2.1134398187634105 0 1 0 -14.09 0" />
      <path d="M 3.87 12.00 a 8.13 2.4403900965582577 0 1 0 16.27 0 a 8.13 2.4403900965582577 0 1 0 -16.27 0" />
      <path d="M 4.96 16.07 a 7.04 2.1134398187634105 0 1 0 14.09 0 a 7.04 2.1134398187634105 0 1 0 -14.09 0" />
      <path d="M 12.00 3.87 A 2 2 0 0 0 12.00 20.13" />
      <path d="M 12.00 3.87 A 2 2 0 0 1 12.00 20.13" />
      {children}
    </svg>
  );
});

export default ZonzoExtent;
