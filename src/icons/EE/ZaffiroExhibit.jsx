import React from 'react';

export const iconData = {
  "id": "ZaffiroExhibit",
  "name": "ZaffiroExhibit",
  "category": "EE",
  "nodes": [
    [
      "path",
      {
        "d": "M 8.25 3.51 L 16.30 3.77 L 21.12 10.23 L 19.07 18.02 L 11.70 21.28 L 4.55 17.55 L 3.02 9.64 Z"
      }
    ]
  ]
};

export const ZaffiroExhibit = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 8.25 3.51 L 16.30 3.77 L 21.12 10.23 L 19.07 18.02 L 11.70 21.28 L 4.55 17.55 L 3.02 9.64 Z" />
      {children}
    </svg>
  );
});

export default ZaffiroExhibit;
