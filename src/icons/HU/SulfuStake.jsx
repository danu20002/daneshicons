import React from 'react';

export const iconData = {
  "id": "SulfuStake",
  "name": "SulfuStake",
  "category": "HU",
  "nodes": [
    [
      "path",
      {
        "d": "M 18.02 5.61 L 19.94 15.75 L 10.89 20.71 L 3.37 13.63 L 7.78 4.30 Z"
      }
    ]
  ]
};

export const SulfuStake = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 18.02 5.61 L 19.94 15.75 L 10.89 20.71 L 3.37 13.63 L 7.78 4.30 Z" />
      {children}
    </svg>
  );
});

export default SulfuStake;
