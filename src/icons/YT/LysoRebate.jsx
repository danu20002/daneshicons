import React from 'react';

export const iconData = {
  "id": "LysoRebate",
  "name": "LysoRebate",
  "category": "YT",
  "nodes": [
    [
      "path",
      {
        "d": "M 2.21 16.69 L 6.66 11.02 L 4.52 4.14 L 11.28 6.62 L 17.17 2.45 L 16.89 9.66 L 22.68 13.96 L 15.74 15.93 L 13.43 22.76 L 9.42 16.77 Z"
      }
    ]
  ]
};

export const LysoRebate = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 2.21 16.69 L 6.66 11.02 L 4.52 4.14 L 11.28 6.62 L 17.17 2.45 L 16.89 9.66 L 22.68 13.96 L 15.74 15.93 L 13.43 22.76 L 9.42 16.77 Z" />
      {children}
    </svg>
  );
});

export default LysoRebate;
