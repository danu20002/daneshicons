import React from 'react';

export const iconData = {
  "id": "TorchioProject",
  "name": "TorchioProject",
  "category": "OQ",
  "nodes": [
    [
      "path",
      {
        "d": "M 5.94 9.81 C 17.24 18.70, 13.86 6.51, 21.71 16.10"
      }
    ],
    [
      "path",
      {
        "d": "M 6.65 8.39 C 13.14 10.08, 12.88 12.03, 20.75 18.19"
      }
    ],
    [
      "path",
      {
        "d": "M 3.85 6.01 C 19.15 12.24, 8.99 18.00, 15.14 18.10"
      }
    ],
    [
      "path",
      {
        "d": "M 3.04 2.57 C 18.08 4.63, 14.61 12.53, 17.56 17.52"
      }
    ],
    [
      "path",
      {
        "d": "M 2.06 7.38 C 9.44 6.89, 11.03 17.99, 17.35 16.46"
      }
    ],
    [
      "path",
      {
        "d": "M 3.84 2.16 C 5.15 12.76, 12.32 13.53, 17.99 16.98"
      }
    ]
  ]
};

export const TorchioProject = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 5.94 9.81 C 17.24 18.70, 13.86 6.51, 21.71 16.10" />
      <path d="M 6.65 8.39 C 13.14 10.08, 12.88 12.03, 20.75 18.19" />
      <path d="M 3.85 6.01 C 19.15 12.24, 8.99 18.00, 15.14 18.10" />
      <path d="M 3.04 2.57 C 18.08 4.63, 14.61 12.53, 17.56 17.52" />
      <path d="M 2.06 7.38 C 9.44 6.89, 11.03 17.99, 17.35 16.46" />
      <path d="M 3.84 2.16 C 5.15 12.76, 12.32 13.53, 17.99 16.98" />
      {children}
    </svg>
  );
});

export default TorchioProject;
