import { IconBallBowling, IconMapPin, IconMapRoute } from "@tabler/icons-react";
import Card from "./Card";

export default function MenuCard() {
  return(
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
      <Card 
        title="Forno da Saudade"
        description="Esse foi o local onde tudo começou. O primeiro beijo. O pedido de namoro. O primeiro eu te amo!"
        icon={<IconMapPin />}
      />
      <Card 
        title="Boliche"
        description="Oficialmente da família. Talvez uma das melhores noites que tivemos, até hoje. Você conheceu minha mãe. Passamos a noite juntos e o final é historia..."
        icon={<IconBallBowling />}
      />
      <Card 
        title="Lagoa Santa"
        description="Um dia mais que especial. Passear de mãos dadas, conversar, rir, se divertir. Ir na gruta da Lapinha. Definitivamente um dia inesquecível."
        icon={<IconMapRoute /> }
      />
    </div>
  )
}