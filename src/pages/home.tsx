import MainPageLayout from "@/shared/ui/MainPageLayout/MainPageLayout";
import { HeroCardContainer } from "@/entites/ui/HeroCard/HeroCardContainer";

export default function HomePage() {
  return (
    <MainPageLayout>
      <div className="flex gap-3 p-3">
        <HeroCardContainer />
        <HeroCardContainer />
      </div>
    </MainPageLayout>
  );
}
