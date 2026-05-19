import React from 'react';

export const iconData = {
  "id": "SchemaWorld",
  "name": "SchemaWorld",
  "category": "GU",
  "nodes": [
    [
      "path",
      {
        "d": "M 6.98 14.32 L 15.87 19.70 L 12.84 16.58 L 13.27 10.36 L 16.63 2.91 L 5.97 11.90"
      }
    ],
    [
      "path",
      {
        "d": "M 19.37 13.63 A 6.18 4.14 63 0 1 19.22 13.98"
      }
    ]
  ]
};

export const SchemaWorld = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 6.98 14.32 L 15.87 19.70 L 12.84 16.58 L 13.27 10.36 L 16.63 2.91 L 5.97 11.90" />
      <path d="M 19.37 13.63 A 6.18 4.14 63 0 1 19.22 13.98" />
      {children}
    </svg>
  );
});

export default SchemaWorld;
