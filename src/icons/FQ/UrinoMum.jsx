import React from 'react';

export const iconData = {
  "id": "UrinoMum",
  "name": "UrinoMum",
  "category": "FQ",
  "nodes": [
    [
      "path",
      {
        "d": "M 18.52 18.40 L 11.06 21.09 L 4.31 16.93 L 3.35 9.06 L 8.90 3.41 L 16.79 4.22 L 21.07 10.89 Z"
      }
    ]
  ]
};

export const UrinoMum = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 18.52 18.40 L 11.06 21.09 L 4.31 16.93 L 3.35 9.06 L 8.90 3.41 L 16.79 4.22 L 21.07 10.89 Z" />
      {children}
    </svg>
  );
});

export default UrinoMum;
