"use client";

import DonationImpact from "../components/DonationImpact";
import GuardianBanner from "../components/Guardian-Banner";
import HowVirtualAdoptionWorks from "../components/HowItWorks";
import LatestRescues from "../components/LatestRescues";
import MeetTheAnimals from "../components/MeetTheAnimals";
import SponsorshipTiers from "../components/SponsorshipTiers";

export default function VirtualAdoption() {
  return (
    <section className="">
<GuardianBanner  />
     <HowVirtualAdoptionWorks />
     <MeetTheAnimals />
     <SponsorshipTiers />
     <DonationImpact />
     <LatestRescues />
    </section>
  );
}
