import React from 'react';
import DashboardLayout from '@/components/layout/DashboardLayout';
import MetricsCard from '@/components/dashboard/MetricsCard';
import PanelStatus from '@/components/dashboard/PanelStatus';
import AlertsList from '@/components/dashboard/AlertsList';
import IVCurveChart from '@/components/charts/IVCurveChart';
import PVCurveChart from '@/components/charts/PVCurveChart';
import EcoImpact from '@/components/dashboard/EcoImpact';
import ProductionStats from '@/components/dashboard/ProductionStats';
import DailyProductionChart from '@/components/charts/DailyProductionChart';
import { PvPanelProvider, usePvPanel } from '@/context/PvPanelContext';
import { Sun, Thermometer, Zap, PercentIcon } from 'lucide-react';

const Dashboard: React.FC = () => {
  const { panelState } = usePvPanel();
  const { irradiance, temperature, power, efficiency } = panelState.currentData;
  
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Tableau de Bord Photovoltaïque</h1>
        <p className="text-muted-foreground">
          Surveillance en temps réel et détection des défauts pour vos panneaux photovoltaïques.
        </p>
      </div>
      
      {/* Production Stats Card */}
      <ProductionStats />
      
      {/* Metrics Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <MetricsCard
          title="Irradiance"
          value={`${irradiance.toFixed(1)} W/m²`}
          icon={<Sun className="h-4 w-4" />}
          trend={{
            value: 2.5,
            isPositive: true
          }}
          description="vs. heure précédente"
        />
        <MetricsCard
          title="Température"
          value={`${temperature.toFixed(1)} °C`}
          icon={<Thermometer className="h-4 w-4" />}
          trend={{
            value: 1.2,
            isPositive: false
          }}
          description="vs. heure précédente"
        />
        <MetricsCard
          title="Puissance"
          value={`${power.toFixed(1)} W`}
          icon={<Zap className="h-4 w-4" />}
          trend={{
            value: 3.1,
            isPositive: true
          }}
          description="vs. heure précédente"
        />
        <MetricsCard
          title="Efficacité"
          value={`${efficiency.toFixed(1)}%`}
          icon={<PercentIcon className="h-4 w-4" />}
          description="Efficacité de conversion actuelle"
        />
      </div>
      
      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <DailyProductionChart />
          <IVCurveChart />
          <PVCurveChart />
        </div>
        <div className="space-y-6">
          <PanelStatus />
          <EcoImpact />
          <AlertsList />
        </div>
      </div>
    </div>
  );
};

const IndexPage: React.FC = () => {
  return (
    <PvPanelProvider>
      <DashboardLayout>
        <Dashboard />
      </DashboardLayout>
    </PvPanelProvider>
  );
};

export default IndexPage;
