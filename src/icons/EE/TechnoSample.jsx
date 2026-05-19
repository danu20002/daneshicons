import React from 'react';

export const iconData = {
  "id": "TechnoSample",
  "name": "TechnoSample",
  "category": "EE",
  "nodes": [
    [
      "path",
      {
        "d": "M 19.60 17.11 L 11.38 21.14 L 3.78 16.03 L 4.40 6.89 L 12.62 2.86 L 20.22 7.97 Z"
      }
    ]
  ]
};

export const TechnoSample = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 19.60 17.11 L 11.38 21.14 L 3.78 16.03 L 4.40 6.89 L 12.62 2.86 L 20.22 7.97 Z" />
      {children}
    </svg>
  );
});

export default TechnoSample;
