import React from 'react';

export const iconData = {
  "id": "CaeloHard",
  "name": "CaeloHard",
  "category": "ZL",
  "nodes": [
    [
      "path",
      {
        "d": "M 21.07 18.03 L 15.00 16.46 L 14.15 22.68 L 10.96 17.27 L 5.97 21.07 L 7.54 15.00 L 1.32 14.15 L 6.73 10.96 L 2.93 5.97 L 9.00 7.54 L 9.85 1.32 L 13.04 6.73 L 18.03 2.93 L 16.46 9.00 L 22.68 9.85 L 17.27 13.04 Z"
      }
    ]
  ]
};

export const CaeloHard = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 21.07 18.03 L 15.00 16.46 L 14.15 22.68 L 10.96 17.27 L 5.97 21.07 L 7.54 15.00 L 1.32 14.15 L 6.73 10.96 L 2.93 5.97 L 9.00 7.54 L 9.85 1.32 L 13.04 6.73 L 18.03 2.93 L 16.46 9.00 L 22.68 9.85 L 17.27 13.04 Z" />
      {children}
    </svg>
  );
});

export default CaeloHard;
