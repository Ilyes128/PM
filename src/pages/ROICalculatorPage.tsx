import React from 'react';
import ROICalculator from '@/components/ROICalculator';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calculator } from 'lucide-react';

const ROICalculatorPage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-2 justify-center mb-8">
          <Calculator className="h-8 w-8 text-primary" />
          <h1 className="text-3xl font-bold text-center">
            Calculateur de Retour sur Investissement
          </h1>
        </div>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Comment utiliser ce calculateur</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Ce calculateur vous permet d'estimer le retour sur investissement de votre système de monitoring solaire. 
              Ajustez le montant de votre investissement et la durée de vie estimée du système pour voir les projections personnalisées.
            </p>
          </CardContent>
        </Card>

        <ROICalculator />
      </div>
    </div>
  );
};

export default ROICalculatorPage; 