import React from 'react';

export const iconData = {
  "id": "FissioConcept",
  "name": "FissioConcept",
  "category": "CV",
  "nodes": [
    [
      "path",
      {
        "d": "M 13.29 22.52 L 8.91 15.95 L 1.48 13.29 L 8.05 8.91 L 10.71 1.48 L 15.09 8.05 L 22.52 10.71 L 15.95 15.09 Z"
      }
    ]
  ]
};

export const FissioConcept = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 13.29 22.52 L 8.91 15.95 L 1.48 13.29 L 8.05 8.91 L 10.71 1.48 L 15.09 8.05 L 22.52 10.71 L 15.95 15.09 Z" />
      {children}
    </svg>
  );
});

export default FissioConcept;
