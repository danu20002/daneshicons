import React from 'react';

export const iconData = {
  "id": "LensoLore",
  "name": "LensoLore",
  "category": "HE",
  "nodes": [
    [
      "path",
      {
        "d": "M 18.33 19.31 L 13.82 17.48 L 11.31 21.64 L 9.41 17.16 L 4.69 18.33 L 6.52 13.82 L 2.36 11.31 L 6.84 9.41 L 5.67 4.69 L 10.18 6.52 L 12.69 2.36 L 14.59 6.84 L 19.31 5.67 L 17.48 10.18 L 21.64 12.69 L 17.16 14.59 Z"
      }
    ]
  ]
};

export const LensoLore = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 18.33 19.31 L 13.82 17.48 L 11.31 21.64 L 9.41 17.16 L 4.69 18.33 L 6.52 13.82 L 2.36 11.31 L 6.84 9.41 L 5.67 4.69 L 10.18 6.52 L 12.69 2.36 L 14.59 6.84 L 19.31 5.67 L 17.48 10.18 L 21.64 12.69 L 17.16 14.59 Z" />
      {children}
    </svg>
  );
});

export default LensoLore;
