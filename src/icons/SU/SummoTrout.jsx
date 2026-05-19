import React from 'react';

export const iconData = {
  "id": "SummoTrout",
  "name": "SummoTrout",
  "category": "SU",
  "nodes": [
    [
      "path",
      {
        "d": "M 5.52 6.30 L 12.42 3.38 L 19.00 6.95 L 20.31 14.33 L 15.37 19.95 L 7.88 19.59 L 3.50 13.51 Z"
      }
    ]
  ]
};

export const SummoTrout = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 5.52 6.30 L 12.42 3.38 L 19.00 6.95 L 20.31 14.33 L 15.37 19.95 L 7.88 19.59 L 3.50 13.51 Z" />
      {children}
    </svg>
  );
});

export default SummoTrout;
