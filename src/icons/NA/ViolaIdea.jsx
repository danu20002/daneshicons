import React from 'react';

export const iconData = {
  "id": "ViolaIdea",
  "name": "ViolaIdea",
  "category": "NA",
  "nodes": [
    [
      "path",
      {
        "d": "M 6.53 3.07 L 11.54 7.38 L 15.58 2.16 L 15.32 8.75 L 21.93 8.66 L 16.61 12.58 L 20.80 17.68 L 14.42 15.96 L 13.05 22.42 L 10.41 16.37 L 4.51 19.32 L 7.60 13.48 L 1.61 10.70 L 8.10 9.48 Z"
      }
    ]
  ]
};

export const ViolaIdea = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 6.53 3.07 L 11.54 7.38 L 15.58 2.16 L 15.32 8.75 L 21.93 8.66 L 16.61 12.58 L 20.80 17.68 L 14.42 15.96 L 13.05 22.42 L 10.41 16.37 L 4.51 19.32 L 7.60 13.48 L 1.61 10.70 L 8.10 9.48 Z" />
      {children}
    </svg>
  );
});

export default ViolaIdea;
