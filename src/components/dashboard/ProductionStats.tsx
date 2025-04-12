import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { usePvPanel } from '@/context/PvPanelContext';
import { Zap, Sun, Clock, TrendingUp } from 'lucide-react';

const ProductionStats: React.FC = () => {
  const { panelState } = usePvPanel();
  const { power, irradiance } = panelState.currentData;

  // Calcul de la production totale (exemple : puissance moyenne sur 8 heures)
  const totalProduction = (power * 8).toFixed(2); // kWh

  return (
    <Card>
      <CardHeader className="pb-2">
        <CardTitle className="text-lg">Statistiques de Production</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-muted/50 rounded-lg p-3">
            <div className="flex items-center gap-2">
              <Zap className="h-5 w-5 text-yellow-500" />
              <div>
                <p className="font-medium">Puissance Instantanée</p>
                <p className="text-2xl font-bold">{power.toFixed(1)} W</p>
              </div>
            </div>
          </div>

          <div className="bg-muted/50 rounded-lg p-3">
            <div className="flex items-center gap-2">
              <TrendingUp className="h-5 w-5 text-green-500" />
              <div>
                <p className="font-medium">Production Totale</p>
                <p className="text-2xl font-bold">{totalProduction} kWh</p>
              </div>
            </div>
          </div>

          <div className="bg-muted/50 rounded-lg p-3">
            <div className="flex items-center gap-2">
              <Sun className="h-5 w-5 text-orange-500" />
              <div>
                <p className="font-medium">Irradiance</p>
                <p className="text-2xl font-bold">{irradiance.toFixed(1)} W/m²</p>
              </div>
            </div>
          </div>

          <div className="bg-muted/50 rounded-lg p-3">
            <div className="flex items-center gap-2">
              <Clock className="h-5 w-5 text-blue-500" />
              <div>
                <p className="font-medium">Temps de Fonctionnement</p>
                <p className="text-2xl font-bold">8h</p>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductionStats; 