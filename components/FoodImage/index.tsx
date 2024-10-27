import { useEffect, useState } from "react";
import "./style.scss";
import { GiftIcon } from "@/icons/IconGift";

interface IProps {
  width?: number;
  height?: number;
  src: string;
  promotion: string | null | undefined;
}

const FoodImage: React.FC<IProps> = ({
  width = 1,
  height = 1,
  src,
  promotion,
}) => {
  const [pillColor, setPillColor] = useState("blue");
  const [promotionComponent, setPromotionComponent] =
    useState<React.ReactNode | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    switch (promotion) {
      case "gift":
        setPillColor("blue");
        setPromotionComponent(<GiftIcon data-testid="gift-icon" />);
        break;
      case "discount":
        setPillColor("pink");
        setPromotionComponent(<span data-testid="discount-pill">%</span>);
        break;
      case "1+1":
        setPillColor("purple");
        setPromotionComponent(<span data-testid="11-pill">1+1</span>);
        break;
      default:
        setPromotionComponent(null);
    }
  }, [promotion]);

  return (
    <div
      className="food-image"
      style={{ paddingTop: `${(height / width) * 100}%` }}
      data-testid="food-image"
    >
      {isLoading && (
        <div
          className="food-image__lazy skeleton-loading"
          data-testid="food-image__lazy"
        ></div>
      )}
      <img
        loading="lazy"
        data-testid="food-image__content"
        className="food-image__content"
        src={src}
        alt="food img"
        onLoad={() => setIsLoading(false)}
      />
      {!isLoading && promotion && (
        <div
          className={`food-image__pill ${pillColor}`}
          data-testid="food-image-pill"
        >
          {promotionComponent}
        </div>
      )}
    </div>
  );
};

export default FoodImage;
