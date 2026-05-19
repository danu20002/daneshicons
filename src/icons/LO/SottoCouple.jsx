import React from 'react';

export const iconData = {
  "id": "SottoCouple",
  "name": "SottoCouple",
  "category": "LO",
  "nodes": [
    [
      "path",
      {
        "d": "M 17.86 19.44 L 12.74 17.16 L 8.48 20.79 L 7.90 15.23 L 2.63 13.35 L 7.16 10.06 L 6.14 4.56 L 11.26 6.84 L 15.52 3.21 L 16.10 8.77 L 21.37 10.65 L 16.84 13.94 Z"
      }
    ]
  ]
};

export const SottoCouple = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 17.86 19.44 L 12.74 17.16 L 8.48 20.79 L 7.90 15.23 L 2.63 13.35 L 7.16 10.06 L 6.14 4.56 L 11.26 6.84 L 15.52 3.21 L 16.10 8.77 L 21.37 10.65 L 16.84 13.94 Z" />
      {children}
    </svg>
  );
});

export default SottoCouple;
