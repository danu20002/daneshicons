import React from 'react';

export const iconData = {
  "id": "LarimoVivid",
  "name": "LarimoVivid",
  "category": "QH",
  "nodes": [
    [
      "path",
      {
        "d": "M 16.77 9.38 Q 15.76 8.65 21.49 5.17"
      }
    ],
    [
      "path",
      {
        "d": "M 20.22 7.93 Q 21.44 18.71 3.28 10.49"
      }
    ],
    [
      "path",
      {
        "d": "M 13.46 8.05 Q 10.60 11.47 3.11 9.89"
      }
    ]
  ]
};

export const LarimoVivid = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 16.77 9.38 Q 15.76 8.65 21.49 5.17" />
      <path d="M 20.22 7.93 Q 21.44 18.71 3.28 10.49" />
      <path d="M 13.46 8.05 Q 10.60 11.47 3.11 9.89" />
      {children}
    </svg>
  );
});

export default LarimoVivid;
