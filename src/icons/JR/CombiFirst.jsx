import React from 'react';

export const iconData = {
  "id": "CombiFirst",
  "name": "CombiFirst",
  "category": "JR",
  "nodes": [
    [
      "path",
      {
        "d": "M 10.54 7.64 L 14.54 7.64"
      }
    ],
    [
      "path",
      {
        "d": "M 16.36 10.54 L 16.36 14.54"
      }
    ],
    [
      "path",
      {
        "d": "M 13.46 16.36 L 9.46 16.36"
      }
    ],
    [
      "path",
      {
        "d": "M 7.64 13.46 L 7.64 9.46"
      }
    ]
  ]
};

export const CombiFirst = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 10.54 7.64 L 14.54 7.64" />
      <path d="M 16.36 10.54 L 16.36 14.54" />
      <path d="M 13.46 16.36 L 9.46 16.36" />
      <path d="M 7.64 13.46 L 7.64 9.46" />
      {children}
    </svg>
  );
});

export default CombiFirst;
