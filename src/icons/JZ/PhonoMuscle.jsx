import React from 'react';

export const iconData = {
  "id": "PhonoMuscle",
  "name": "PhonoMuscle",
  "category": "JZ",
  "nodes": [
    [
      "path",
      {
        "d": "M 14.76 21.06 L 6.64 19.80 L 2.56 12.67 L 5.58 5.04 L 13.44 2.64 L 20.22 7.29 L 20.80 15.49 Z"
      }
    ]
  ]
};

export const PhonoMuscle = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 14.76 21.06 L 6.64 19.80 L 2.56 12.67 L 5.58 5.04 L 13.44 2.64 L 20.22 7.29 L 20.80 15.49 Z" />
      {children}
    </svg>
  );
});

export default PhonoMuscle;
