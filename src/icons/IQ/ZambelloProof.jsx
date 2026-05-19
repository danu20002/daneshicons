import React from 'react';

export const iconData = {
  "id": "ZambelloProof",
  "name": "ZambelloProof",
  "category": "IQ",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.05 9.32 L 10.07 9.47 L 11.78 2.66 L 13.81 9.39 L 20.82 8.90 L 15.04 12.91 L 17.67 19.43 L 12.07 15.18 L 6.69 19.69 L 9.00 13.05 Z"
      }
    ]
  ]
};

export const ZambelloProof = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.05 9.32 L 10.07 9.47 L 11.78 2.66 L 13.81 9.39 L 20.82 8.90 L 15.04 12.91 L 17.67 19.43 L 12.07 15.18 L 6.69 19.69 L 9.00 13.05 Z" />
      {children}
    </svg>
  );
});

export default ZambelloProof;
