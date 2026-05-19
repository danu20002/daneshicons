import React from 'react';

export const iconData = {
  "id": "BioOptical",
  "name": "BioOptical",
  "category": "YR",
  "nodes": [
    [
      "path",
      {
        "d": "M 5.73 19.52 L 2.25 12.88 L 4.48 5.73 L 11.12 2.25 L 18.27 4.48 L 21.75 11.12 L 19.52 18.27 L 12.88 21.75 Z"
      }
    ]
  ]
};

export const BioOptical = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 5.73 19.52 L 2.25 12.88 L 4.48 5.73 L 11.12 2.25 L 18.27 4.48 L 21.75 11.12 L 19.52 18.27 L 12.88 21.75 Z" />
      {children}
    </svg>
  );
});

export default BioOptical;
