import React from 'react';

export const iconData = {
  "id": "MelanoMuffin",
  "name": "MelanoMuffin",
  "category": "UR",
  "nodes": [
    [
      "path",
      {
        "d": "M 7.73 17.04 L 16.57 21.07 L 18.05 6.73 L 12.05 13.41 L 12.27 3.31 L 12.61 6.25 L 3.88 11.15"
      }
    ],
    [
      "path",
      {
        "d": "M 6.56 12.69 L 7.12 11.99 L 20.32 3.01 L 2.68 2.90 L 8.30 7.68 L 13.42 8.42"
      }
    ]
  ]
};

export const MelanoMuffin = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 7.73 17.04 L 16.57 21.07 L 18.05 6.73 L 12.05 13.41 L 12.27 3.31 L 12.61 6.25 L 3.88 11.15" />
      <path d="M 6.56 12.69 L 7.12 11.99 L 20.32 3.01 L 2.68 2.90 L 8.30 7.68 L 13.42 8.42" />
      {children}
    </svg>
  );
});

export default MelanoMuffin;
