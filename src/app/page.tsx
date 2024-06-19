import CompanyInfoForm from "./components/forms/CompanyInfoForm";
import Hero from "./components/hero/Hero";

export default function Home() {
  return (
    <main>
      <div>
        <Hero />
        <CompanyInfoForm />
      </div>
    </main>
  );
}
