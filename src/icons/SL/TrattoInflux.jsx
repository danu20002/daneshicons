import React from 'react';

export const iconData = {
  "id": "TrattoInflux",
  "name": "TrattoInflux",
  "category": "SL",
  "nodes": [
    [
      "path",
      {
        "d": "M 10.89 6.52 L 14.89 6.52"
      }
    ],
    [
      "path",
      {
        "d": "M 17.31 13.78 L 15.31 17.24"
      }
    ],
    [
      "path",
      {
        "d": "M 7.81 15.71 L 5.81 12.24"
      }
    ]
  ]
};

export const TrattoInflux = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 10.89 6.52 L 14.89 6.52" />
      <path d="M 17.31 13.78 L 15.31 17.24" />
      <path d="M 7.81 15.71 L 5.81 12.24" />
      {children}
    </svg>
  );
});

export default TrattoInflux;
