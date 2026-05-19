import React from 'react';

export const iconData = {
  "id": "VerdeSpoon",
  "name": "VerdeSpoon",
  "category": "KU",
  "nodes": [
    [
      "path",
      {
        "d": "M 13.78 20.56 L 7.86 19.70 L 3.88 15.24 L 3.70 9.26 L 7.40 4.57 L 13.26 3.35 L 18.52 6.18 L 20.73 11.74 L 18.86 17.41 Z"
      }
    ]
  ]
};

export const VerdeSpoon = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 13.78 20.56 L 7.86 19.70 L 3.88 15.24 L 3.70 9.26 L 7.40 4.57 L 13.26 3.35 L 18.52 6.18 L 20.73 11.74 L 18.86 17.41 Z" />
      {children}
    </svg>
  );
});

export default VerdeSpoon;
