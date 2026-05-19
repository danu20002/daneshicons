import React from 'react';

export const iconData = {
  "id": "SummoTerm",
  "name": "SummoTerm",
  "category": "KU",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.93 14.29 L 7.32 5.03 L 17.18 5.40 L 19.88 14.89 L 11.69 20.38 Z"
      }
    ]
  ]
};

export const SummoTerm = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.93 14.29 L 7.32 5.03 L 17.18 5.40 L 19.88 14.89 L 11.69 20.38 Z" />
      {children}
    </svg>
  );
});

export default SummoTerm;
