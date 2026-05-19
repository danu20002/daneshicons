import React from 'react';

export const iconData = {
  "id": "IsoConsole",
  "name": "IsoConsole",
  "category": "ZU",
  "nodes": [
    [
      "path",
      {
        "d": "M 13.93 6.40 L 13.22 11.34"
      }
    ],
    [
      "path",
      {
        "d": "M 4.51 10.46 Q 15.41 16.07 4.09 17.85"
      }
    ]
  ]
};

export const IsoConsole = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 13.93 6.40 L 13.22 11.34" />
      <path d="M 4.51 10.46 Q 15.41 16.07 4.09 17.85" />
      {children}
    </svg>
  );
});

export default IsoConsole;
