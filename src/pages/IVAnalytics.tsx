import React from 'react';
import DashboardLayout from '@/components/layout/DashboardLayout';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { usePvPanel } from '@/context/PvPanelContext';
import IVCurveChart from '@/components/charts/IVCurveChart';
import PVCurveChart from '@/components/charts/PVCurveChart';
import { PvPanelProvider } from '@/context/PvPanelContext';

const IVAnalyticsContent: React.FC = () => {
  const { panelState } = usePvPanel();
  
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Analyses I-V</h1>
        <p className="text-muted-foreground">
          Analyse détaillée des courbes caractéristiques de votre panneau photovoltaïque.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Courbe I-V</CardTitle>
          </CardHeader>
          <CardContent className="h-[400px]">
            <IVCurveChart />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Courbe P-V</CardTitle>
          </CardHeader>
          <CardContent className="h-[400px]">
            <PVCurveChart />
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Paramètres Clés</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-muted/50 rounded-lg p-3">
                <p className="text-sm text-muted-foreground">Tension à Puissance Maximale (Vmp)</p>
                <p className="text-lg font-semibold">{panelState.characteristics?.vmp || 'N/A'} V</p>
              </div>
              <div className="bg-muted/50 rounded-lg p-3">
                <p className="text-sm text-muted-foreground">Courant à Puissance Maximale (Imp)</p>
                <p className="text-lg font-semibold">{panelState.characteristics?.imp || 'N/A'} A</p>
              </div>
              <div className="bg-muted/50 rounded-lg p-3">
                <p className="text-sm text-muted-foreground">Tension en Circuit Ouvert (Voc)</p>
                <p className="text-lg font-semibold">{panelState.characteristics?.voc || 'N/A'} V</p>
              </div>
              <div className="bg-muted/50 rounded-lg p-3">
                <p className="text-sm text-muted-foreground">Courant de Court-Circuit (Isc)</p>
                <p className="text-lg font-semibold">{panelState.characteristics?.isc || 'N/A'} A</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Efficacité</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="bg-muted/50 rounded-lg p-3">
                <p className="text-sm text-muted-foreground">Efficacité du Panneau</p>
                <p className="text-lg font-semibold">{panelState.characteristics?.panelEfficiency || 'N/A'}%</p>
              </div>
              <div className="bg-muted/50 rounded-lg p-3">
                <p className="text-sm text-muted-foreground">Puissance Maximale</p>
                <p className="text-lg font-semibold">{panelState.characteristics?.maxPower || 'N/A'} W</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

const IVAnalytics: React.FC = () => {
  return (
    <PvPanelProvider>
      <DashboardLayout>
        <IVAnalyticsContent />
      </DashboardLayout>
    </PvPanelProvider>
  );
};

export default IVAnalytics; 