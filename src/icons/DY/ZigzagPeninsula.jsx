import React from 'react';

export const iconData = {
  "id": "ZigzagPeninsula",
  "name": "ZigzagPeninsula",
  "category": "DY",
  "nodes": [
    [
      "path",
      {
        "d": "M 5.88 13.14 L 4.91 11.47 L 8.17 9.94 L 15.63 7.60 L 18.73 11.11 L 21.91 12.38"
      }
    ],
    [
      "circle",
      {
        "cx": "5.88",
        "cy": "13.14",
        "r": "0.88"
      }
    ],
    [
      "circle",
      {
        "cx": "4.91",
        "cy": "11.47",
        "r": "1.43"
      }
    ],
    [
      "circle",
      {
        "cx": "8.17",
        "cy": "9.94",
        "r": "0.95"
      }
    ],
    [
      "circle",
      {
        "cx": "15.63",
        "cy": "7.60",
        "r": "0.84"
      }
    ],
    [
      "circle",
      {
        "cx": "18.73",
        "cy": "11.11",
        "r": "1.06"
      }
    ],
    [
      "circle",
      {
        "cx": "21.91",
        "cy": "12.38",
        "r": "0.69"
      }
    ]
  ]
};

export const ZigzagPeninsula = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 5.88 13.14 L 4.91 11.47 L 8.17 9.94 L 15.63 7.60 L 18.73 11.11 L 21.91 12.38" />
      <circle cx="5.88" cy="13.14" r="0.88" />
      <circle cx="4.91" cy="11.47" r="1.43" />
      <circle cx="8.17" cy="9.94" r="0.95" />
      <circle cx="15.63" cy="7.60" r="0.84" />
      <circle cx="18.73" cy="11.11" r="1.06" />
      <circle cx="21.91" cy="12.38" r="0.69" />
      {children}
    </svg>
  );
});

export default ZigzagPeninsula;
