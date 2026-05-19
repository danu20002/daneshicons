import React from 'react';

export const iconData = {
  "id": "OmbraTeeth",
  "name": "OmbraTeeth",
  "category": "FT",
  "nodes": [
    [
      "path",
      {
        "d": "M 21.40 9.07 L 17.22 13.18 L 19.24 18.68 L 13.59 17.11 L 9.84 21.60 L 8.37 15.93 L 2.60 14.93 L 6.78 10.82 L 4.76 5.32 L 10.41 6.89 L 14.16 2.40 L 15.63 8.07 Z"
      }
    ]
  ]
};

export const OmbraTeeth = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 21.40 9.07 L 17.22 13.18 L 19.24 18.68 L 13.59 17.11 L 9.84 21.60 L 8.37 15.93 L 2.60 14.93 L 6.78 10.82 L 4.76 5.32 L 10.41 6.89 L 14.16 2.40 L 15.63 8.07 Z" />
      {children}
    </svg>
  );
});

export default OmbraTeeth;
