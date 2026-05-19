import React from 'react';

export const iconData = {
  "id": "VittoreWeb",
  "name": "VittoreWeb",
  "category": "CF",
  "nodes": [
    [
      "path",
      {
        "d": "M 2.88 7.55 C 7.48 15.71, 4.96 7.75, 16.64 19.69"
      }
    ],
    [
      "path",
      {
        "d": "M 4.37 4.36 C 18.98 6.91, 16.38 14.65, 18.36 20.46"
      }
    ],
    [
      "path",
      {
        "d": "M 3.31 3.68 C 12.97 17.96, 8.95 15.30, 17.19 16.68"
      }
    ],
    [
      "path",
      {
        "d": "M 9.52 8.59 C 15.89 6.56, 15.49 13.06, 15.28 14.54"
      }
    ]
  ]
};

export const VittoreWeb = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 2.88 7.55 C 7.48 15.71, 4.96 7.75, 16.64 19.69" />
      <path d="M 4.37 4.36 C 18.98 6.91, 16.38 14.65, 18.36 20.46" />
      <path d="M 3.31 3.68 C 12.97 17.96, 8.95 15.30, 17.19 16.68" />
      <path d="M 9.52 8.59 C 15.89 6.56, 15.49 13.06, 15.28 14.54" />
      {children}
    </svg>
  );
});

export default VittoreWeb;
