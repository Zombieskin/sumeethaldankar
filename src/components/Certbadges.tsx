import safePOPM from "@/assets/SAFE PoPM.png";
import awsCCP from "@/assets/AWS CCP.png";
import azureAI900 from "@/assets/Azure AI 900.png";

const badges = [
  { label: "SAFe 6.0 POPM", img: SAFE PoPM },
  { label: "AWS Cloud Practitioner", img: AWS CCP },
  { label: "Microsoft Azure AI-900", img: Azure AI 900 },
];

export const CertBadges = () => {
  return (
    <div className="flex flex-row items-center gap-4 h-full">
      {badges.map((badge) => (
        <div
          key={badge.label}
          title={badge.label}
          className="group flex flex-col items-center gap-1"
        >
          <img
            src={badge.img}
            alt={badge.label}
            className="w-20 h-20 object-contain rounded-lg transition-transform duration-200 group-hover:scale-110"
          />
          <span className="text-[10px] text-center text-muted-foreground leading-tight max-w-[80px] opacity-0 group-hover:opacity-100 transition-opacity duration-200">
            {badge.label}
          </span>
        </div>
      ))}
    </div>
  );
};