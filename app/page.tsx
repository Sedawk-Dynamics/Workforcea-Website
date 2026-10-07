import { SplashScreen } from '@/components/splash-screen'
import { SiteHeader } from '@/components/site-header'
import { HeroSection } from '@/components/hero-section'
import { StatsTicker } from '@/components/stats-ticker'
import { ExpertiseSection } from '@/components/expertise-section'
import { AboutSection } from '@/components/about-section'
import { ServicesSection } from '@/components/services-section'
import { IndustriesSection } from '@/components/industries-section'
import { RolesSection } from '@/components/roles-section'
import { WhyUsSection } from '@/components/why-us-section'
import { ProcessSection } from '@/components/process-section'
import { OutcomesSection } from '@/components/outcomes-section'
import { FounderSection } from '@/components/founder-section'
import { InsightsSection } from '@/components/insights-section'
import { CtaSection } from '@/components/cta-section'
import { ContactSection } from '@/components/contact-section'
import { SiteFooter } from '@/components/site-footer'

export default function Page() {
  return (
    <>
    
      <SplashScreen />
      <SiteHeader />
      <main>
        <HeroSection />
        <StatsTicker />
        <ExpertiseSection />
        <AboutSection />
        <ServicesSection />
        <IndustriesSection />
        <RolesSection />
        <WhyUsSection />
        <ProcessSection />
        <OutcomesSection />
        <FounderSection />
        <InsightsSection />
        <CtaSection />
        <ContactSection />
      </main>
      <SiteFooter />
    </>
  )
}
