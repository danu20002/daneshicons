import React from 'react';

export const iconData = {
  id: "ParkingMeter",
  name: "ParkingMeter",
  category: "P",
  nodes: [["path",{"d":"M11 15h2"}],["path",{"d":"M12 12v3"}],["path",{"d":"M12 19v3"}],["path",{"d":"M15.282 19a1 1 0 0 0 .948-.68l2.37-6.988a7 7 0 1 0-13.2 0l2.37 6.988a1 1 0 0 0 .948.68z"}],["path",{"d":"M9 9a3 3 0 1 1 6 0"}]]
};

export const ParkingMeter = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M11 15h2" />
      <path d="M12 12v3" />
      <path d="M12 19v3" />
      <path d="M15.282 19a1 1 0 0 0 .948-.68l2.37-6.988a7 7 0 1 0-13.2 0l2.37 6.988a1 1 0 0 0 .948.68z" />
      <path d="M9 9a3 3 0 1 1 6 0" />
      {children}
    </svg>
  );
});

export default ParkingMeter;
