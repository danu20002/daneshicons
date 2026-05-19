import React from 'react';

export const iconData = {
  "id": "ImagoDrone",
  "name": "ImagoDrone",
  "category": "XU",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.03 5.89 L 20.97 5.89 L 20.97 18.11 L 3.03 18.11 Z"
      }
    ],
    [
      "path",
      {
        "d": "M 3.03 5.89 L 7.73 1.19 L 25.67 1.19 L 20.97 5.89"
      }
    ],
    [
      "path",
      {
        "d": "M 20.97 5.89 L 25.67 1.19 L 25.67 13.42 L 20.97 18.11"
      }
    ]
  ]
};

export const ImagoDrone = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.03 5.89 L 20.97 5.89 L 20.97 18.11 L 3.03 18.11 Z" />
      <path d="M 3.03 5.89 L 7.73 1.19 L 25.67 1.19 L 20.97 5.89" />
      <path d="M 20.97 5.89 L 25.67 1.19 L 25.67 13.42 L 20.97 18.11" />
      {children}
    </svg>
  );
});

export default ImagoDrone;
