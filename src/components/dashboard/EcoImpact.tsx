import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { usePvPanel } from '@/context/PvPanelContext';
import { calculateEcoSavings } from '@/utils/eco-calculations';

const EcoImpact: React.FC = () => {
  const { panelState } = usePvPanel();
  const { co2Savings, equivalentTrees } = calculateEcoSavings(panelState.currentData.power);

  return (
    <Card>
      <CardHeader className="pb-2">
        <CardTitle className="text-lg">Impact Écologique</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="bg-muted/50 rounded-lg p-3">
            <div className="flex items-center gap-2">
              <span className="text-2xl">🌳</span>
              <div>
                <p className="font-medium">Économies de CO₂</p>
                <p className="text-sm text-muted-foreground">
                  Vous avez économisé {co2Savings} kg de CO₂ aujourd'hui
                </p>
              </div>
            </div>
          </div>
          
          <div className="bg-muted/50 rounded-lg p-3">
            <div className="flex items-center gap-2">
              <span className="text-2xl">🌲</span>
              <div>
                <p className="font-medium">Équivalence en Arbres</p>
                <p className="text-sm text-muted-foreground">
                  Équivalent à {equivalentTrees} arbres plantés
                </p>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default EcoImpact; 