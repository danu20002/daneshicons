import React from 'react';

export const iconData = {
  "id": "SylvanoTrain",
  "name": "SylvanoTrain",
  "category": "FN",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.27 6.87 L 19.73 6.87 L 19.73 17.13 L 4.27 17.13 Z"
      }
    ],
    [
      "path",
      {
        "d": "M 4.27 6.87 L 7.51 3.63 L 22.97 3.63 L 19.73 6.87"
      }
    ],
    [
      "path",
      {
        "d": "M 19.73 6.87 L 22.97 3.63 L 22.97 13.90 L 19.73 17.13"
      }
    ]
  ]
};

export const SylvanoTrain = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.27 6.87 L 19.73 6.87 L 19.73 17.13 L 4.27 17.13 Z" />
      <path d="M 4.27 6.87 L 7.51 3.63 L 22.97 3.63 L 19.73 6.87" />
      <path d="M 19.73 6.87 L 22.97 3.63 L 22.97 13.90 L 19.73 17.13" />
      {children}
    </svg>
  );
});

export default SylvanoTrain;
