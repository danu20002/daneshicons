import React from 'react';

export const iconData = {
  "id": "SynaptoLot",
  "name": "SynaptoLot",
  "category": "KL",
  "nodes": [
    [
      "path",
      {
        "d": "M 6.74 20.24 Q 5.64 2.42 20.43 20.21"
      }
    ],
    [
      "path",
      {
        "d": "M 13.27 18.55 L 7.85 4.15"
      }
    ],
    [
      "path",
      {
        "d": "M 13.42 3.24 Q 20.36 18.97 21.46 6.79"
      }
    ],
    [
      "path",
      {
        "d": "M 12.38 8.03 L 13.48 12.24"
      }
    ],
    [
      "path",
      {
        "d": "M 19.14 10.01 Q 5.08 14.48 8.46 17.69"
      }
    ]
  ]
};

export const SynaptoLot = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 6.74 20.24 Q 5.64 2.42 20.43 20.21" />
      <path d="M 13.27 18.55 L 7.85 4.15" />
      <path d="M 13.42 3.24 Q 20.36 18.97 21.46 6.79" />
      <path d="M 12.38 8.03 L 13.48 12.24" />
      <path d="M 19.14 10.01 Q 5.08 14.48 8.46 17.69" />
      {children}
    </svg>
  );
});

export default SynaptoLot;
