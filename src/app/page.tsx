import CenterText from "./components/centerText/CenterText";
import ClimateTax from "./components/climateTax/ClimateTax";
import Emissions from "./components/emissions/Emissions";
import EmissionsTop from "./components/emissionsTop/EmissionsTop";
import CompanyInfoForm from "./components/forms/CompanyInfoForm";
import Revenue from "./components/forms/Revenue";
import Hero from "./components/hero/Hero";
import EmissionGraph from "./components/input/emissionGraph/EmissionGraph";

export default function Home() {
  return (
    <main>
      <div>
        <Hero />
        <CompanyInfoForm />
        <ClimateTax />
        <Emissions />
        <CenterText>
          <h2>Veien fremover</h2>
          Uten å gjøre tiltak for å senke utslippene sine, går ofte vekst i
          selskapet og utslipp hånd i hånd. Se hvordan utslippet ditt øker med
          høyere omsetning, og hva som skjer om du gjør tiltak for å senke
          utslippene dine.
        </CenterText>
        <Revenue />
        <EmissionGraph />
        <EmissionsTop />
      </div>
    </main>
  );
}
