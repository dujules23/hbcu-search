import { FC } from "react";

interface Props {}

const Footer: FC<Props> = (props): JSX.Element => {
  const current_year = new Date().getFullYear();
  return (
    <div className="flex justify-center">
      <p>Copyright © {current_year}, Durrell Jules. All Rights Reserved</p>
    </div>
  );
};

export default Footer;
