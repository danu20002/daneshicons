import React from 'react';

export const iconData = {
  "id": "SchemaLoud",
  "name": "SchemaLoud",
  "category": "BR",
  "nodes": [
    [
      "path",
      {
        "d": "M 9.14 19.67 Q 3.34 6.42 6.83 17.61"
      }
    ],
    [
      "path",
      {
        "d": "M 17.64 14.46 C 10.26 18.44, 16.75 8.68, 20.61 17.06"
      }
    ],
    [
      "path",
      {
        "d": "M 19.09 17.76 C 16.10 15.01, 7.54 7.67, 16.53 21.03"
      }
    ]
  ]
};

export const SchemaLoud = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 9.14 19.67 Q 3.34 6.42 6.83 17.61" />
      <path d="M 17.64 14.46 C 10.26 18.44, 16.75 8.68, 20.61 17.06" />
      <path d="M 19.09 17.76 C 16.10 15.01, 7.54 7.67, 16.53 21.03" />
      {children}
    </svg>
  );
});

export default SchemaLoud;
