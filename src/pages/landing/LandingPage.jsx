import { useState } from 'react';
import { HeroSection } from './components/HeroSection.jsx';
import { DescriptionAndReviewSection } from './components/DescriptionSection.jsx';
import './landing.css';

export function LandingPage({ onAccount }) {
  const [showReview, setShowReview] = useState(null);
  return <>
    <HeroSection onAccount={onAccount} />
    <DescriptionAndReviewSection ShowReview={showReview} setShowReview={setShowReview} />
  </>;
}
