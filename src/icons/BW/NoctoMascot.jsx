import React from 'react';

export const iconData = {
  "id": "NoctoMascot",
  "name": "NoctoMascot",
  "category": "BW",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.70 6.47 L 20.30 6.47 L 20.30 17.53 L 3.70 17.53 Z"
      }
    ],
    [
      "path",
      {
        "d": "M 3.70 6.47 L 7.51 2.66 L 24.10 2.66 L 20.30 6.47"
      }
    ],
    [
      "path",
      {
        "d": "M 20.30 6.47 L 24.10 2.66 L 24.10 13.72 L 20.30 17.53"
      }
    ]
  ]
};

export const NoctoMascot = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.70 6.47 L 20.30 6.47 L 20.30 17.53 L 3.70 17.53 Z" />
      <path d="M 3.70 6.47 L 7.51 2.66 L 24.10 2.66 L 20.30 6.47" />
      <path d="M 20.30 6.47 L 24.10 2.66 L 24.10 13.72 L 20.30 17.53" />
      {children}
    </svg>
  );
});

export default NoctoMascot;
