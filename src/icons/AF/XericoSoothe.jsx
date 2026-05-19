import React from 'react';

export const iconData = {
  "id": "XericoSoothe",
  "name": "XericoSoothe",
  "category": "AF",
  "nodes": [
    [
      "path",
      {
        "d": "M 12.13 3.97 L 18.71 19.65 L 21.09 9.58 L 13.72 18.28 L 2.49 7.63 L 19.12 11.74"
      }
    ],
    [
      "path",
      {
        "d": "M 11.37 16.45 C 19.53 8.41, 12.16 7.14, 20.71 14.91"
      }
    ]
  ]
};

export const XericoSoothe = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 12.13 3.97 L 18.71 19.65 L 21.09 9.58 L 13.72 18.28 L 2.49 7.63 L 19.12 11.74" />
      <path d="M 11.37 16.45 C 19.53 8.41, 12.16 7.14, 20.71 14.91" />
      {children}
    </svg>
  );
});

export default XericoSoothe;
