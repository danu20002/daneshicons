import React from 'react';

export const iconData = {
  "id": "CombiVelvet",
  "name": "CombiVelvet",
  "category": "FK",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.26 6.00 L 2.78 15.72 L 19.57 15.69 L 4.37 13.19 L 12.70 4.50 L 18.44 15.19"
      }
    ],
    [
      "circle",
      {
        "cx": "3.26",
        "cy": "6.00",
        "r": "1.38"
      }
    ],
    [
      "circle",
      {
        "cx": "2.78",
        "cy": "15.72",
        "r": "0.96"
      }
    ],
    [
      "circle",
      {
        "cx": "19.57",
        "cy": "15.69",
        "r": "0.54"
      }
    ],
    [
      "circle",
      {
        "cx": "4.37",
        "cy": "13.19",
        "r": "0.70"
      }
    ],
    [
      "circle",
      {
        "cx": "12.70",
        "cy": "4.50",
        "r": "1.16"
      }
    ],
    [
      "circle",
      {
        "cx": "18.44",
        "cy": "15.19",
        "r": "0.50"
      }
    ]
  ]
};

export const CombiVelvet = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.26 6.00 L 2.78 15.72 L 19.57 15.69 L 4.37 13.19 L 12.70 4.50 L 18.44 15.19" />
      <circle cx="3.26" cy="6.00" r="1.38" />
      <circle cx="2.78" cy="15.72" r="0.96" />
      <circle cx="19.57" cy="15.69" r="0.54" />
      <circle cx="4.37" cy="13.19" r="0.70" />
      <circle cx="12.70" cy="4.50" r="1.16" />
      <circle cx="18.44" cy="15.19" r="0.50" />
      {children}
    </svg>
  );
});

export default CombiVelvet;
