import React from 'react';

export const iconData = {
  "id": "SomaPhrase",
  "name": "SomaPhrase",
  "category": "SD",
  "nodes": [
    [
      "path",
      {
        "d": "M 2.51 9.21 L 8.87 8.71 L 9.67 2.39 L 13.28 7.65 L 19.16 5.18 L 16.41 10.93 L 21.49 14.79 L 15.13 15.29 L 14.33 21.61 L 10.72 16.35 L 4.84 18.82 L 7.59 13.07 Z"
      }
    ]
  ]
};

export const SomaPhrase = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 2.51 9.21 L 8.87 8.71 L 9.67 2.39 L 13.28 7.65 L 19.16 5.18 L 16.41 10.93 L 21.49 14.79 L 15.13 15.29 L 14.33 21.61 L 10.72 16.35 L 4.84 18.82 L 7.59 13.07 Z" />
      {children}
    </svg>
  );
});

export default SomaPhrase;
