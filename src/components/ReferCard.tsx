import React from "react";
import InputC from "./tsx_custom/InputC";
import emailIcon from "../assets/email.svg";
import ButtonC from "./tsx_custom/ButtonC";

interface ReferCardProps {}

const inputProps = {
  type: "text",
  placeholder: "Enter your email address",
};

const ReferCard: React.FC<ReferCardProps> = () => {
  return (
    <section className="refer">
      <h3 className="refer__title">REFER FRIENDS AND GET REWARDS</h3>
      <p className="refer__text">
        Refer your friends to us and earn hotel booking vouchers. We'll give you
        1 coin for each friend that installs our extension. Minimum cash-out at
        20 coins.
      </p>
      <InputC icon={emailIcon} alt={"email icon"} props={{ ...inputProps }} />
      <ButtonC>Get Referral Link</ButtonC>
      <p className="refer__limit">Limits on max rewards apply.</p>
    </section>
  );
};

export default ReferCard;
