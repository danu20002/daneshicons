import React from 'react';

export const iconData = {
  "id": "YankeeVeil",
  "name": "YankeeVeil",
  "category": "YR",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.45 11.20 L 6.52 5.38 L 12.80 3.45 L 18.62 6.52 L 20.55 12.80 L 17.48 18.62 L 11.20 20.55 L 5.38 17.48 Z"
      }
    ]
  ]
};

export const YankeeVeil = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.45 11.20 L 6.52 5.38 L 12.80 3.45 L 18.62 6.52 L 20.55 12.80 L 17.48 18.62 L 11.20 20.55 L 5.38 17.48 Z" />
      {children}
    </svg>
  );
});

export default YankeeVeil;
