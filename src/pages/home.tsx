import MainPageLayout from "@/shared/ui/MainPageLayout/MainPageLayout";
import { HeroCardContainer } from "@/entites/ui/HeroCard/HeroCardContainer";

export default function HomePage() {
  return (
    <MainPageLayout>
      <div className="flex gap-[8px] p-8">
        <HeroCardContainer />
        <HeroCardContainer />
      </div>
    </MainPageLayout>
  );
}
