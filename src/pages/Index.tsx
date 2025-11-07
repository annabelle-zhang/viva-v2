import Hero from "@/components/Hero";
import Mission from "@/components/Mission";
import DesignedAroundYou from "@/components/DesignedAroundYou";
import WaitlistForm from "@/components/WaitlistForm";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <Mission />
      <DesignedAroundYou />
      <WaitlistForm />
      <Footer />
    </div>
  );
};

export default Index;
