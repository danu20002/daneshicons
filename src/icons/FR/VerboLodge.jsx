import React from 'react';

export const iconData = {
  "id": "VerboLodge",
  "name": "VerboLodge",
  "category": "FR",
  "nodes": [
    [
      "path",
      {
        "d": "M 11.55 2.71 L 19.82 6.96 L 20.27 16.26 L 12.45 21.29 L 4.18 17.04 L 3.73 7.74 Z"
      }
    ]
  ]
};

export const VerboLodge = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 11.55 2.71 L 19.82 6.96 L 20.27 16.26 L 12.45 21.29 L 4.18 17.04 L 3.73 7.74 Z" />
      {children}
    </svg>
  );
});

export default VerboLodge;
