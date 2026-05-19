import React from 'react';

export const iconData = {
  "id": "NucleoEngrave",
  "name": "NucleoEngrave",
  "category": "BH",
  "nodes": [
    [
      "path",
      {
        "d": "M 21.89 12.02 L 19.57 18.38 L 13.70 21.75 L 7.03 20.56 L 2.70 15.36 L 2.71 8.60 L 7.07 3.42 L 13.74 2.26 L 19.59 5.66 Z"
      }
    ]
  ]
};

export const NucleoEngrave = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 21.89 12.02 L 19.57 18.38 L 13.70 21.75 L 7.03 20.56 L 2.70 15.36 L 2.71 8.60 L 7.07 3.42 L 13.74 2.26 L 19.59 5.66 Z" />
      {children}
    </svg>
  );
});

export default NucleoEngrave;
