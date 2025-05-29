import MainPageLayout from "@/shared/ui/MainPageLayout/MainPageLayout";
import { HeroCardContainer } from "@/entites/ui/HeroCard/HeroCardContainer";

export default function HomePage() {
  return (
    <MainPageLayout>
      <div className="flex gap-3 p-3">
  {Array(5).fill(0).map((el,index)=>
        <HeroCardContainer key={index} id={index} />
      )}     
      </div>
    </MainPageLayout>
  );
}
