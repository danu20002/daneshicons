import React from 'react';

export const iconData = {
  "id": "SestoThought",
  "name": "SestoThought",
  "category": "D",
  "nodes": [
    [
      "path",
      {
        "d": "M 18.44 19.81 L 13.74 17.68 L 11.03 22.08 L 9.21 17.25 L 4.19 18.44 L 6.32 13.74 L 1.92 11.03 L 6.75 9.21 L 5.56 4.19 L 10.26 6.32 L 12.97 1.92 L 14.79 6.75 L 19.81 5.56 L 17.68 10.26 L 22.08 12.97 L 17.25 14.79 Z"
      }
    ]
  ]
};

export const SestoThought = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 18.44 19.81 L 13.74 17.68 L 11.03 22.08 L 9.21 17.25 L 4.19 18.44 L 6.32 13.74 L 1.92 11.03 L 6.75 9.21 L 5.56 4.19 L 10.26 6.32 L 12.97 1.92 L 14.79 6.75 L 19.81 5.56 L 17.68 10.26 L 22.08 12.97 L 17.25 14.79 Z" />
      {children}
    </svg>
  );
});

export default SestoThought;
