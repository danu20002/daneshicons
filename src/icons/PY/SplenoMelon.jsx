import React from 'react';

export const iconData = {
  "id": "SplenoMelon",
  "name": "SplenoMelon",
  "category": "PY",
  "nodes": [
    [
      "path",
      {
        "d": "M 2.91 7.69 L 9.97 9.06 L 11.19 1.97 L 13.53 8.77 L 20.28 6.28 L 15.56 11.71 L 21.09 16.31 L 14.03 14.94 L 12.81 22.03 L 10.47 15.23 L 3.72 17.72 L 8.44 12.29 Z"
      }
    ]
  ]
};

export const SplenoMelon = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 2.91 7.69 L 9.97 9.06 L 11.19 1.97 L 13.53 8.77 L 20.28 6.28 L 15.56 11.71 L 21.09 16.31 L 14.03 14.94 L 12.81 22.03 L 10.47 15.23 L 3.72 17.72 L 8.44 12.29 Z" />
      {children}
    </svg>
  );
});

export default SplenoMelon;
