"use client";

import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import GuardianHomePage from "./components/guardian-angels";
import HeroSection from "./components/HeroSection";
import MissionStrip from "./components/MissionStrip";
import HomeActions from "./components/HomeActions";
import VirtualAdoptionTeaser from "./components/VirtualAdoptionTeaser";
import SanctuaryUpdates from "./components/SanctuaryUpdates";
import HomeFinalCTA from "./components/HomeFinalCTA";
import TiffinCTA from "./components/TiffinCTA";
import CateringCTA from "./components/CateringCTA";
import DonateCTA from "./components/DonateCTA";
import ShopCTA from "./components/ShopCTA";
import Gallery from "./components/Gallery";

export default function HomeBanner() {
  return (
    <section className="">
      <HeroSection />
      <MissionStrip />
      <GuardianHomePage />
      <TiffinCTA />
      <CateringCTA />
      <DonateCTA />
      <ShopCTA />
      <HomeActions />
      <VirtualAdoptionTeaser />
      <SanctuaryUpdates />
      <Gallery />
      <HomeFinalCTA />
    </section>
  );
}
