import React from 'react';

export const iconData = {
  "id": "TigroParliament",
  "name": "TigroParliament",
  "category": "GT",
  "nodes": [
    [
      "path",
      {
        "d": "M 8.62 6.60 L 12.62 6.60"
      }
    ],
    [
      "path",
      {
        "d": "M 17.40 8.62 L 17.40 12.62"
      }
    ],
    [
      "path",
      {
        "d": "M 15.38 17.40 L 11.38 17.40"
      }
    ],
    [
      "path",
      {
        "d": "M 6.60 15.38 L 6.60 11.38"
      }
    ]
  ]
};

export const TigroParliament = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 8.62 6.60 L 12.62 6.60" />
      <path d="M 17.40 8.62 L 17.40 12.62" />
      <path d="M 15.38 17.40 L 11.38 17.40" />
      <path d="M 6.60 15.38 L 6.60 11.38" />
      {children}
    </svg>
  );
});

export default TigroParliament;
