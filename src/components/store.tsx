import React from "react";
import AppCard from "./AppStoreCard";
import ChromStoreIcon from "../assets/chrome.svg";
import AppStoreIcon from "../assets/apple.svg";
import Star from "../assets/success.svg";

interface StoreProps {}

const Store: React.FC<StoreProps> = () => {
  return (
    <div className="store">
      <AppCard
        title="available in the"
        text="chrome web store"
        icon={ChromStoreIcon}
        alt="Chrom store"
        link="https://chrome.google.com/webstore/detail/ratepunk-same-hotel-way-c/gdaioanblcnghddimngklkhgcbomfdck?utm_source=ratepunk"
      />

      <AppCard
        title="available in the"
        text="chrome web store"
        icon={AppStoreIcon}
        alt="Chrom store"
        link="https://apps.apple.com/app/ratepunk/id1607823726"
      />
      <div className="store__row">
        <img className="store__star" src={Star} alt="star review" />
        <p className="store__review_text">Chrome Store reviews</p>
      </div>
    </div>
  );
};

export default Store;
