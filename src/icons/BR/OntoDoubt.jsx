import React from 'react';

export const iconData = {
  "id": "OntoDoubt",
  "name": "OntoDoubt",
  "category": "BR",
  "nodes": [
    [
      "path",
      {
        "d": "M 14.98 5.53 L 7.39 9.48"
      }
    ],
    [
      "path",
      {
        "d": "M 18.68 13.45 L 16.94 12.34 L 8.44 5.17 L 11.23 2.30 L 21.91 2.95 L 12.98 20.77 L 21.19 10.36"
      }
    ]
  ]
};

export const OntoDoubt = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 14.98 5.53 L 7.39 9.48" />
      <path d="M 18.68 13.45 L 16.94 12.34 L 8.44 5.17 L 11.23 2.30 L 21.91 2.95 L 12.98 20.77 L 21.19 10.36" />
      {children}
    </svg>
  );
});

export default OntoDoubt;
