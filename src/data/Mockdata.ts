import invite from "../assets/invite.svg";
import collect from "../assets/collect-coins.svg";
import voucher from "../assets/voucher.svg";

import Instgram from "../assets/instagram.svg";
import Facebook from "../assets/facebook.svg";
import Linkedin from "../assets/linkedin.svg";
import Twitter from "../assets/twitter.svg";
import Tiktok from "../assets/tiktok.svg";

type StepData = {
  stepNum: string;
  title: string;
  description: string;
  image: string;
};

export const data: StepData[] = [
  {
    stepNum: "STEP 1",
    title: "INVITE FRIENDS",
    description: "Refer friends with your unique referral link.",
    image: invite,
  },
  {
    stepNum: "STEP 2",
    title: "COLLECT COINS",
    description:
      "Get 1 coin for each friend that installs our extension using your referral link.",
    image: collect,
  },
  {
    stepNum: "STEP 3",
    title: "GET VOUCHER",
    description:
      "Redeem for a $20 hotel booking voucher once you collect 20 coins.",
    image: voucher,
  },
];

type Social = {
  img: string;
};

export const socialData: Social[] = [
  {
    img: Instgram,
  },
  {
    img: Facebook,
  },
  {
    img: Linkedin,
  },
  {
    img: Twitter,
  },
  {
    img: Tiktok,
  },
];
