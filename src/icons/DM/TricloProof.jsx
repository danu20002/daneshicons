import React from 'react';

export const iconData = {
  "id": "TricloProof",
  "name": "TricloProof",
  "category": "DM",
  "nodes": [
    [
      "path",
      {
        "d": "M 16.62 18.55 L 8.64 19.27 L 4.02 12.73 L 7.38 5.45 L 15.36 4.73 L 19.98 11.27 Z"
      }
    ]
  ]
};

export const TricloProof = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 16.62 18.55 L 8.64 19.27 L 4.02 12.73 L 7.38 5.45 L 15.36 4.73 L 19.98 11.27 Z" />
      {children}
    </svg>
  );
});

export default TricloProof;
