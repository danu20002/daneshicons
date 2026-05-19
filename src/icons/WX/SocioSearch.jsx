import React from 'react';

export const iconData = {
  "id": "SocioSearch",
  "name": "SocioSearch",
  "category": "WX",
  "nodes": [
    [
      "path",
      {
        "d": "M 7.39 11.42 3.51 8.32 Q 9.93 6.44 16.35 4.56 Q 17.31 7.98 18.26 11.39 Q 17.07 12.28 15.88 13.16 Q 18.18 15.40 20.48 17.63 Q 15.87 16.07 11.27 14.52 Z"
      }
    ]
  ]
};

export const SocioSearch = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 7.39 11.42 3.51 8.32 Q 9.93 6.44 16.35 4.56 Q 17.31 7.98 18.26 11.39 Q 17.07 12.28 15.88 13.16 Q 18.18 15.40 20.48 17.63 Q 15.87 16.07 11.27 14.52 Z" />
      {children}
    </svg>
  );
});

export default SocioSearch;
