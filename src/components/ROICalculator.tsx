import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { DollarSign, Zap, Clock, LineChart } from 'lucide-react';

const ROICalculator: React.FC = () => {
  const [investment, setInvestment] = useState<number>(4000);
  const [systemLifespan, setSystemLifespan] = useState<number>(20);

  // Constants for calculations
  const ANNUAL_SAVINGS_PERCENTAGE = 0.375; // 37.5% of investment per year
  const MAINTENANCE_COST_PERCENTAGE = 0.05; // 5% of investment per year

  const calculateAnnualSavings = (investment: number) => {
    return investment * ANNUAL_SAVINGS_PERCENTAGE;
  };

  const calculateMaintenanceCost = (investment: number) => {
    return investment * MAINTENANCE_COST_PERCENTAGE;
  };

  const calculateNetAnnualSavings = (investment: number) => {
    return calculateAnnualSavings(investment) - calculateMaintenanceCost(investment);
  };

  const calculateROI = (investment: number) => {
    const netAnnualSavings = calculateNetAnnualSavings(investment);
    return investment / netAnnualSavings;
  };

  const calculateTotalSavings = (investment: number, lifespan: number) => {
    const netAnnualSavings = calculateNetAnnualSavings(investment);
    return netAnnualSavings * lifespan;
  };

  return (
    <div className="space-y-6">
      <div className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="investment">Montant de l'investissement (TND)</Label>
          <div className="flex gap-4">
            <Input
              id="investment"
              type="number"
              value={investment}
              onChange={(e) => setInvestment(Number(e.target.value))}
              className="w-48"
            />
            <Slider
              value={[investment]}
              onValueChange={([value]) => setInvestment(value)}
              min={1000}
              max={20000}
              step={100}
              className="w-[200px]"
            />
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="lifespan">Durée de vie du système (années)</Label>
          <div className="flex gap-4">
            <Input
              id="lifespan"
              type="number"
              value={systemLifespan}
              onChange={(e) => setSystemLifespan(Number(e.target.value))}
              className="w-48"
            />
            <Slider
              value={[systemLifespan]}
              onValueChange={([value]) => setSystemLifespan(value)}
              min={10}
              max={30}
              step={1}
              className="w-[200px]"
            />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <DollarSign className="h-6 w-6 text-primary" />
              Investissement Initial
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">{investment.toLocaleString()} TND</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Zap className="h-6 w-6 text-primary" />
              Économie Annuelle Nette
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">{calculateNetAnnualSavings(investment).toLocaleString()} TND</p>
            <p className="text-sm text-muted-foreground">
              (Économies: {calculateAnnualSavings(investment).toLocaleString()} TND - Maintenance: {calculateMaintenanceCost(investment).toLocaleString()} TND)
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Clock className="h-6 w-6 text-primary" />
              Retour sur Investissement
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">{calculateROI(investment).toFixed(1)} ans</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <LineChart className="h-6 w-6 text-primary" />
              Économie Totale sur {systemLifespan} ans
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">{calculateTotalSavings(investment, systemLifespan).toLocaleString()} TND</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ROICalculator; 